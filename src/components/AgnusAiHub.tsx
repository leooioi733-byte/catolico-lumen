import { Fragment, useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  BookOpen,
  History,
  MessageSquarePlus,
  RotateCcw,
  Send,
  Sparkles,
  Trash2,
} from "lucide-react";
import { AgnusPortrait } from "@/components/AgnusPortrait";
import { useAgnusWardrobe } from "@/components/AgnusWardrobeProvider";
import { useLocalProfile } from "@/hooks/use-local-profile";
import {
  AGNUS_SUGGESTED_QUESTIONS,
  createEmptyConversation,
  createMessageId,
  deriveConversationTitle,
  readAgnusConversations,
  saveAgnusConversations,
  sendAgnusQuestion,
  type AgnusChatMessage,
  type AgnusConversation,
} from "@/lib/agnus-ai";
import { pickNextTouchReaction, type AgnusAnimation } from "@/lib/agnus-habitat";
import { useProgress } from "@/lib/progress";
import { getDevotionSaint } from "@/lib/saints";
import { cn } from "@/lib/utils";

function renderFormattedInline(text: string) {
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  return segments.map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**") && segment.length > 4) {
      return (
        <strong key={index} className="font-bold text-[#641C32]">
          {segment.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={index}>{segment}</Fragment>;
  });
}

function FormattedAgnusText({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/).filter((b) => b.trim().length > 0);
  return (
    <div className="space-y-2.5 text-sm leading-relaxed text-[#35121D]">
      {blocks.map((block, idx) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const isBulletList =
          lines.length > 0 && lines.every((line) => /^[-*•]\s+/.test(line));
        if (isBulletList) {
          return (
            <ul key={idx} className="list-disc space-y-1 pl-5">
              {lines.map((line, lineIdx) => (
                <li key={lineIdx}>
                  {renderFormattedInline(line.replace(/^[-*•]\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={idx} className="whitespace-pre-line">
            {renderFormattedInline(block)}
          </p>
        );
      })}
    </div>
  );
}

export function AgnusAiHub() {
  const { progress } = useProgress();
  const { profile } = useLocalProfile();
  const { mascotName, equippedOutfit, equippedAccessory } = useAgnusWardrobe();
  const devotionSaint = getDevotionSaint(profile.devotionSaintId);

  const [savedConversations, setSavedConversations] = useState<AgnusConversation[]>([]);
  const [activeConversation, setActiveConversation] = useState<AgnusConversation>(() =>
    createEmptyConversation(),
  );
  const [historyOpen, setHistoryOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [touchAnim, setTouchAnim] = useState<AgnusAnimation | null>(null);
  const [animNonce, setAnimNonce] = useState(0);

  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTouch = useRef<AgnusAnimation | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = readAgnusConversations();
    setSavedConversations(stored);
    if (stored[0]) {
      setActiveConversation(stored[0]);
    }

    return () => {
      if (touchTimer.current) clearTimeout(touchTimer.current);
      abortRef.current?.abort();
    };
  }, []);

  const persistConversation = (conv: AgnusConversation) => {
    setActiveConversation(conv);
    if (conv.messages.length === 0) return;
    setSavedConversations((prev) => [conv, ...prev.filter((item) => item.id !== conv.id)]);
    const existing = readAgnusConversations();
    const next = [conv, ...existing.filter((item) => item.id !== conv.id)];
    saveAgnusConversations(next);
  };

  useEffect(() => {
    if (activeConversation.messages.length > 0 || isLoading) {
      messagesEndRef.current?.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
    }
  }, [activeConversation.messages.length, isLoading]);

  const triggerAgnusReaction = (forced?: AgnusAnimation, duration = 2200) => {
    const next = forced ?? pickNextTouchReaction(lastTouch.current);
    lastTouch.current = next;
    setAnimNonce((n) => n + 1);
    setTouchAnim(next);
    if (touchTimer.current) clearTimeout(touchTimer.current);
    touchTimer.current = setTimeout(() => {
      setTouchAnim(null);
    }, duration);
  };

  const submitMessages = async (messagesToSend: AgnusChatMessage[], titleHint?: string) => {
    if (isLoading) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setErrorMessage(null);
    setIsLoading(true);
    setHistoryOpen(false);

    const updatedConv: AgnusConversation = {
      ...activeConversation,
      title:
        activeConversation.messages.length === 0 && titleHint
          ? deriveConversationTitle(titleHint)
          : activeConversation.title,
      messages: messagesToSend,
      updatedAt: Date.now(),
    };
    persistConversation(updatedConv);

    try {
      const replyText = await sendAgnusQuestion({
        messages: messagesToSend,
        userContext: {
          ...(profile.nickname.trim() ? { nickname: profile.nickname.trim() } : {}),
          ...(devotionSaint?.name ? { devotionSaint: devotionSaint.name } : {}),
          completedLessonsCount: progress.completed.length,
        },
        signal: controller.signal,
      });

      const assistantMsg: AgnusChatMessage = {
        id: createMessageId("agnus"),
        role: "assistant",
        text: replyText,
        createdAt: Date.now(),
      };

      const completedConv: AgnusConversation = {
        ...updatedConv,
        messages: [...updatedConv.messages, assistantMsg],
        updatedAt: Date.now(),
      };
      persistConversation(completedConv);
      triggerAgnusReaction("happy-dance", 2000);
    } catch (error) {
      if ((error as Error)?.name === "AbortError") return;
      const msg =
        error instanceof Error && error.message
          ? error.message
          : "Não foi possível obter resposta do Agnus agora.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendText = (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed || isLoading) return;

    const userMsg: AgnusChatMessage = {
      id: createMessageId("user"),
      role: "user",
      text: trimmed,
      createdAt: Date.now(),
    };
    setInput("");
    void submitMessages([...activeConversation.messages, userMsg], trimmed);
  };

  const handleRetryLast = () => {
    if (isLoading || activeConversation.messages.length === 0) return;
    const last = activeConversation.messages.at(-1);
    if (!last || last.role !== "user") return;
    void submitMessages(activeConversation.messages);
  };

  const handleNewConversation = () => {
    if (isLoading) return;
    setErrorMessage(null);
    setActiveConversation(createEmptyConversation());
    setHistoryOpen(false);
    triggerAgnusReaction("waving", 1600);
  };

  const handleSelectConversation = (conv: AgnusConversation) => {
    if (isLoading) return;
    setErrorMessage(null);
    setActiveConversation(conv);
    setHistoryOpen(false);
  };

  const handleDeleteConversation = (id: string) => {
    const filtered = savedConversations.filter((conv) => conv.id !== id);
    setSavedConversations(filtered);
    saveAgnusConversations(filtered);
    if (activeConversation.id === id) {
      setActiveConversation(filtered[0] ?? createEmptyConversation());
      setErrorMessage(null);
    }
  };

  const heroAnimation: AgnusAnimation = isLoading
    ? "reading"
    : touchAnim ?? (input.trim().length > 0 ? "observing" : "resting");

  const greetingName = profile.nickname.trim() || "peregrino(a)";

  return (
    <div className="space-y-5">
      {/* Sanctuary Hero Header for Agnus AI */}
      <section
        aria-label="Central Agnus AI"
        className="relative overflow-hidden rounded-[1.75rem] border-2 border-[#E6B64B] bg-[#641C32] p-5 text-[#FAF5EA] shadow-[0_6px_0_#421020]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(230,182,75,0.28),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(250,245,234,0.12),transparent_70%)]"
        />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="mx-auto shrink-0 sm:mx-0">
            <div className="relative grid h-28 w-28 place-items-center rounded-full border-2 border-[#E6B64B] bg-[radial-gradient(circle_at_50%_38%,#FFF8EB,#F3E6CC)] p-1.5 shadow-[0_4px_0_#421020] sm:h-32 sm:w-32">
              <AgnusPortrait
                outfitId={equippedOutfit.id}
                accessoryId={equippedAccessory.id}
                mascotName={`${mascotName} AI`}
                animation={heroAnimation}
                animNonce={animNonce}
                onClick={() => triggerAgnusReaction()}
                className="h-24 w-24 sm:h-28 sm:w-28"
                priority
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-1 right-1 flex items-center gap-1 rounded-full border border-[#641C32] px-2 py-0.5 text-[10px] font-bold shadow",
                  isLoading
                    ? "animate-pulse bg-[#E6B64B] text-[#421020]"
                    : "bg-[#FAF5EA] text-[#641C32]",
                )}
              >
                <Sparkles className="h-3 w-3" />
                {isLoading ? "Pensando" : "Online"}
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="inline-flex items-center gap-1.5 rounded-lg border border-[#E6B64B]/50 bg-[#4A1224] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#F4CC66]">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              {mascotName} AI · Guia Católico
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold text-[#FFFDF7] sm:text-[1.75rem]">
              Olá, {greetingName}!
            </h1>
            <p className="mt-1 text-sm leading-relaxed text-[#F5EBD8]/92">
              Sou o <strong>{mascotName} AI</strong>. Posso explicar passagens da Bíblia, ensinar
              sobre santos, sacramentos, doutrina e tirar dúvidas das suas lições com fidelidade à fé
              católica.
            </p>
            {devotionSaint && (
              <p className="mt-2 text-xs font-semibold text-[#F4CC66]">
                Santo de devoção no perfil: {devotionSaint.name}
              </p>
            )}
          </div>
        </div>

        {/* Conversation controls */}
        <div className="relative mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#FAF5EA]/15 pt-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              data-sound="select"
              disabled={isLoading}
              onClick={handleNewConversation}
              className="btn-3d-sm inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-xl border-2 border-[#E6B64B] bg-[#E6B64B] px-3 py-1.5 text-xs font-bold text-[#421020] [--btn-depth:#B58622] hover:brightness-105 disabled:opacity-50"
            >
              <MessageSquarePlus className="h-4 w-4 shrink-0" aria-hidden="true" />
              Nova conversa
            </button>

            <button
              type="button"
              data-sound="select"
              aria-expanded={historyOpen}
              onClick={() => setHistoryOpen((open) => !open)}
              className="btn-3d-sm inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-xl border-2 border-[#FAF5EA]/35 bg-[#4A1224] px-3 py-1.5 text-xs font-bold text-[#FAF5EA] [--btn-depth:#2E0A16] hover:border-[#E6B64B]"
            >
              <History className="h-4 w-4 shrink-0" aria-hidden="true" />
              Histórico ({savedConversations.length})
            </button>
          </div>

          <span className="text-[11px] font-semibold text-[#F5EBD8]/80">
            Toque no {mascotName} para interagir
          </span>
        </div>
      </section>

      {/* Collapsible Conversation History Drawer */}
      {historyOpen && (
        <section
          aria-label="Histórico de conversas com o Agnus AI"
          className="animate-rise rounded-3xl border-2 border-[#E6B64B]/70 bg-[#FAF5EA] p-4 text-[#35121D] shadow-sm"
        >
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-base font-bold text-[#641C32]">
              Conversas anteriores
            </h2>
            <span className="text-xs font-semibold text-[#7A3F52]">
              Salvo neste aparelho
            </span>
          </div>

          {savedConversations.length === 0 ? (
            <p className="mt-3 text-sm text-[#7A3F52]">
              Suas conversas com o {mascotName} aparecerão aqui assim que você enviar a primeira
              pergunta.
            </p>
          ) : (
            <ul className="mt-3 max-h-60 space-y-2 overflow-y-auto pr-1">
              {savedConversations.map((conv) => {
                const isActive = conv.id === activeConversation.id;
                return (
                  <li key={conv.id} className="flex items-center gap-2">
                    <button
                      type="button"
                      data-sound="select"
                      onClick={() => handleSelectConversation(conv)}
                      className={cn(
                        "btn-3d-sm flex min-h-11 min-w-0 flex-1 cursor-pointer items-center justify-between gap-2 rounded-xl border-2 px-3 py-2 text-left text-xs font-bold",
                        isActive
                          ? "border-[#E6B64B] bg-[#641C32] text-[#FAF5EA] [--btn-depth:#421020]"
                          : "border-[#E3D3B8] bg-white text-[#641C32] [--btn-depth:#D9C5A3] hover:border-[#E6B64B]",
                      )}
                    >
                      <span className="truncate">{conv.title}</span>
                      <span
                        className={cn(
                          "shrink-0 text-[11px]",
                          isActive ? "text-[#F4CC66]" : "text-[#7A3F52]",
                        )}
                      >
                        {conv.messages.length} msg
                      </span>
                    </button>
                    <button
                      type="button"
                      data-sound="select"
                      aria-label={`Excluir conversa ${conv.title}`}
                      onClick={() => handleDeleteConversation(conv.id)}
                      className="btn-3d-sm grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-xl border-2 border-[#E3D3B8] bg-white text-[#641C32] [--btn-depth:#D9C5A3] hover:border-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}

      {/* Main Conversation Workspace */}
      <section
        aria-label="Área de conversa com o Agnus AI"
        className="rounded-[1.75rem] border-2 border-[#E3D3B8] bg-[#FAF5EA] p-4 text-[#35121D] shadow-sm sm:p-5"
      >
        {activeConversation.messages.length === 0 ? (
          <div className="space-y-5">
            <div className="flex items-start gap-3 rounded-2xl border-2 border-[#E6B64B]/65 bg-white p-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#E6B64B] bg-[#FAF5EA]">
                <AgnusPortrait
                  outfitId={equippedOutfit.id}
                  accessoryId={equippedAccessory.id}
                  mascotName={mascotName}
                  className="h-9 w-9"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold text-[#641C32]">
                  {mascotName} AI · Sempre fiel às fontes
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#4A222E]">
                  Sobre o que você gostaria de conversar hoje? Escolha uma sugestão abaixo ou
                  escreva qualquer dúvida sobre a Bíblia, os santos, a Missa ou o Catecismo.
                </p>
              </div>
            </div>

            <div>
              <h2 className="flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-[#641C32]">
                <BookOpen className="h-4 w-4 text-[#C6921F]" aria-hidden="true" />
                Sugestões para começar
              </h2>
              <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                {AGNUS_SUGGESTED_QUESTIONS.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    type="button"
                    data-sound="select"
                    disabled={isLoading}
                    onClick={() => handleSendText(suggestion.prompt)}
                    className="btn-3d-sm flex min-h-14 cursor-pointer flex-col items-start justify-center rounded-2xl border-2 border-[#E3D3B8] bg-white px-3.5 py-2.5 text-left [--btn-depth:#D9C5A3] hover:border-[#E6B64B] hover:bg-[#FFF9EE] disabled:opacity-50"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A6E12]">
                      {suggestion.category}
                    </span>
                    <span className="mt-0.5 font-display text-sm font-bold text-[#641C32]">
                      {suggestion.label}
                    </span>
                    <span className="mt-0.5 line-clamp-2 text-xs text-[#6B4250]">
                      {suggestion.prompt}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-h-[54vh] space-y-3.5 overflow-y-auto pr-1">
            {activeConversation.messages.map((message) =>
              message.role === "user" ? (
                <div key={message.id} className="flex justify-end">
                  <div className="max-w-[88%] rounded-2xl rounded-br-md border-2 border-[#E6B64B]/60 bg-[#641C32] px-4 py-3 text-sm leading-relaxed text-[#FAF5EA] shadow-sm">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#F4CC66]">
                      Você
                    </p>
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ) : (
                <div key={message.id} className="flex items-start gap-2.5">
                  <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-[#E6B64B] bg-white">
                    <AgnusPortrait
                      outfitId={equippedOutfit.id}
                      accessoryId={equippedAccessory.id}
                      mascotName={mascotName}
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="min-w-0 max-w-[88%] flex-1 rounded-2xl rounded-tl-md border-2 border-[#E6B64B]/65 bg-white px-4 py-3 shadow-sm">
                    <p className="mb-1 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#641C32]">
                      <Sparkles className="h-3 w-3 text-[#C6921F]" aria-hidden="true" />
                      {mascotName} AI
                    </p>
                    <FormattedAgnusText text={message.text} />
                  </div>
                </div>
              ),
            )}

            {isLoading && (
              <div
                role="status"
                aria-live="polite"
                className="flex items-start gap-2.5"
              >
                <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-[#E6B64B] bg-white">
                  <AgnusPortrait
                    outfitId={equippedOutfit.id}
                    accessoryId={equippedAccessory.id}
                    mascotName={mascotName}
                    animation="reading"
                    className="h-8 w-8"
                  />
                </div>
                <div className="rounded-2xl rounded-tl-md border-2 border-[#E6B64B] bg-[#FFFDF8] px-4 py-3 shadow-sm">
                  <p className="flex items-center gap-2 font-display text-xs font-bold text-[#641C32]">
                    <span className="inline-flex gap-1" aria-hidden="true">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#641C32] [animation-delay:0ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#C6921F] [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#641C32] [animation-delay:300ms]" />
                    </span>
                    {mascotName} está pensando e consultando as fontes…
                  </p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div
                role="alert"
                className="rounded-2xl border-2 border-destructive/60 bg-[#FFF2F2] p-3.5 text-sm text-[#6B1D1D]"
              >
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold">Não foi possível receber a resposta</p>
                    <p className="mt-0.5 text-xs leading-relaxed">{errorMessage}</p>
                    <button
                      type="button"
                      data-sound="select"
                      onClick={handleRetryLast}
                      className="btn-3d-sm mt-2.5 inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-xl border border-[#641C32]/40 bg-white px-3 py-1 text-xs font-bold text-[#641C32] [--btn-depth:#D9C5A3]"
                    >
                      <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      Tentar novamente
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Composer Form */}
        <form
          className="mt-4 border-t-2 border-[#E3D3B8] pt-4"
          onSubmit={(event) => {
            event.preventDefault();
            handleSendText(input);
          }}
        >
          <label htmlFor="agnus-question-input" className="sr-only">
            Pergunte ao {mascotName} AI
          </label>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-end">
            <textarea
              id="agnus-question-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  handleSendText(input);
                }
              }}
              rows={2}
              maxLength={2000}
              disabled={isLoading}
              placeholder={`Pergunte ao ${mascotName} sobre a Bíblia, santos, sacramentos ou lições…`}
              className="min-h-13 w-full min-w-0 flex-1 resize-none rounded-2xl border-2 border-[#D9C5A3] bg-white px-3.5 py-2.5 text-sm text-[#35121D] outline-none placeholder:text-[#8E6B76] focus:border-[#641C32] focus-visible:ring-2 focus-visible:ring-[#E6B64B] disabled:opacity-60"
            />
            <button
              type="submit"
              data-sound="select"
              disabled={isLoading || !input.trim()}
              className="btn-3d inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-[#E6B64B] bg-[#641C32] px-5 py-2.5 font-display text-sm font-bold text-[#FAF5EA] [--btn-depth:#421020] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B64B] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{isLoading ? "Enviando…" : "Enviar"}</span>
            </button>
          </div>
          <p className="mt-2 text-[11px] font-semibold text-[#7A3F52]">
            Respostas guiadas pelas Escrituras e pelo Catecismo da Igreja Católica.
          </p>
        </form>
      </section>
    </div>
  );
}
