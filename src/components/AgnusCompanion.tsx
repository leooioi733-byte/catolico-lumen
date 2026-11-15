import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, MessageCircle, Shirt, Sparkles, X } from "lucide-react";
import { AgnusPortrait } from "@/components/AgnusPortrait";
import { useAgnusWardrobe } from "@/components/AgnusWardrobeProvider";
import { ProgressBar } from "@/components/AppShell";
import { LumenButton } from "@/components/ui/lumen-button";
import {
  TOUCH_SPEECH_LINES,
  contextualBaseAnimation,
  pickNextTouchReaction,
  type AgnusAnimation,
  type AgnusContext,
} from "@/lib/agnus-habitat";
import { formatPercent } from "@/lib/bible-progress";
import { MASCOT_MESSAGES, type MascotMoment } from "@/lib/mascot";
import { cn } from "@/lib/utils";

type AgnusCompanionCardProps = {
  moment?: MascotMoment;
  context?: AgnusContext;
  message?: string;
  variant?: "home" | "celebration";
  className?: string;
};

const IDLE_TIMEOUT_MS = 25000;

/**
 * Stationary, naturally integrated companion card for Agnus.
 * Supports contextual animations, idle rest poses, and non-intrusive touch reactions.
 */
export function AgnusCompanionCard({
  moment = "home",
  context,
  message,
  variant = "home",
  className,
}: AgnusCompanionCardProps) {
  const {
    mascotName,
    equippedOutfit,
    equippedAccessory,
    unlockedIds,
    outfits,
    unlockedAccessoryIds,
    accessories,
  } = useAgnusWardrobe();

  const resolvedContext: AgnusContext =
    context ??
    (variant === "celebration"
      ? "celebration"
      : moment === "path"
        ? "track"
        : moment === "prayers"
          ? "rosary"
          : moment === "lessonStart"
            ? "lesson"
            : "home");

  const [messageIndex, setMessageIndex] = useState(0);
  const [touchAnimation, setTouchAnimation] = useState<AgnusAnimation | null>(null);
  const [animNonce, setAnimNonce] = useState(0);
  const [touchSpeech, setTouchSpeech] = useState<string | null>(null);
  const [isIdle, setIsIdle] = useState(false);
  const lastReaction = useRef<AgnusAnimation | null>(null);
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleIdle = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      setIsIdle(true);
    }, IDLE_TIMEOUT_MS);
  };

  useEffect(() => {
    scheduleIdle();
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (touchTimer.current) clearTimeout(touchTimer.current);
    };
  }, []);

  const handleTouchAgnus = () => {
    setIsIdle(false);
    scheduleIdle();
    const nextReaction = pickNextTouchReaction(lastReaction.current);
    lastReaction.current = nextReaction;
    setAnimNonce((n) => n + 1);
    setTouchAnimation(nextReaction);

    const speech =
      TOUCH_SPEECH_LINES[Math.floor(Math.random() * TOUCH_SPEECH_LINES.length)] ??
      "Olá! Vamos estudar?";
    setTouchSpeech(speech);

    if (touchTimer.current) clearTimeout(touchTimer.current);
    touchTimer.current = setTimeout(() => {
      setTouchAnimation(null);
      setTouchSpeech(null);
    }, 3200);
  };

  const activeAnimation = touchAnimation ?? contextualBaseAnimation(resolvedContext, isIdle);
  const isSleeping = activeAnimation === "sleeping";
  const messages = MASCOT_MESSAGES[moment];
  const displayMessage = touchSpeech ?? message ?? messages[messageIndex % messages.length] ?? "";

  const cycleMessage = () => {
    setIsIdle(false);
    scheduleIdle();
    setTouchSpeech(null);
    if (messages.length <= 1) return;
    setMessageIndex((prev) => prev + 1);
  };

  if (variant === "celebration") {
    return (
      <section
        aria-label={`${mascotName} celebrando com você`}
        className={cn(
          "animate-rise flex w-full items-center gap-4 rounded-3xl border-2 border-gold bg-card p-4 text-left",
          className,
        )}
      >
        <AgnusPortrait
          outfitId={equippedOutfit.id}
          accessoryId={equippedAccessory.id}
          mascotName={mascotName}
          animation={activeAnimation}
          animNonce={animNonce}
          asleep={isSleeping}
          onClick={handleTouchAgnus}
          className="h-24 w-24 sm:h-28 sm:w-28"
          priority
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-secondary">
            <span className="font-display text-sm text-primary">{mascotName}</span>
            <span aria-hidden="true">·</span>
            <span>{equippedOutfit.name}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{displayMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label={`Companheiro ${mascotName}`}
      className={cn("animate-rise rounded-3xl border-2 border-border bg-card p-4", className)}
    >
      <div className="flex items-start gap-4">
        <AgnusPortrait
          outfitId={equippedOutfit.id}
          accessoryId={equippedAccessory.id}
          mascotName={mascotName}
          animation={activeAnimation}
          animNonce={animNonce}
          asleep={isSleeping}
          onClick={handleTouchAgnus}
          className="h-24 w-24 shrink-0"
          priority
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-secondary">
              <span className="font-display text-base font-bold text-primary">{mascotName}</span>
              <span aria-hidden="true">·</span>
              <span>{equippedOutfit.name}</span>
            </div>
            <Link
              to="/meu-agnus"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-border bg-background/70 px-3 py-1.5 text-xs font-bold text-primary transition hover:border-gold"
            >
              <Shirt className="h-3.5 w-3.5" aria-hidden="true" />
              Meu {mascotName} ({unlockedIds.length}/{outfits.length} ·{" "}
              {unlockedAccessoryIds.length - 1}/{accessories.length - 1})
            </Link>
          </div>
          <p
            aria-live="polite"
            className={cn(
              "mt-1.5 text-sm leading-relaxed",
              touchSpeech
                ? "rounded-xl border border-gold/60 bg-background/80 px-3 py-1.5 font-semibold text-primary"
                : "text-foreground",
            )}
          >
            {displayMessage}
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-3">
            {!message && messages.length > 1 && (
              <button
                type="button"
                data-sound="select"
                onClick={cycleMessage}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground hover:border-gold hover:text-primary"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Outra palavra de {mascotName}
              </button>
            )}
            <span className="text-[11px] font-semibold text-muted-foreground">
              Toque no {mascotName} para interagir
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Quiet inline learning tip placed inside teaching screens without blocking questions.
 */
export function AgnusTeachingTip({ message }: { message?: string }) {
  const { mascotName, equippedOutfit, equippedAccessory } = useAgnusWardrobe();
  const [reaction, setReaction] = useState<AgnusAnimation | null>(null);
  const [animNonce, setAnimNonce] = useState(0);
  const [customLine, setCustomLine] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleTouch = () => {
    setAnimNonce((n) => n + 1);
    setReaction(pickNextTouchReaction(reaction));
    setCustomLine("Estou estudando com você!");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setReaction(null);
      setCustomLine(null);
    }, 2600);
  };

  const text = customLine ?? message ?? MASCOT_MESSAGES.lessonStart[0];
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3.5 py-2.5">
      <AgnusPortrait
        outfitId={equippedOutfit.id}
        accessoryId={equippedAccessory.id}
        mascotName={mascotName}
        animation={reaction ?? "reading"}
        animNonce={animNonce}
        onClick={handleTouch}
        className="h-14 w-14 shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-primary">{mascotName} acompanha você</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

/**
 * Peaceful stationary companion card used on Rosary setup/completion screens without distracting from prayer.
 */
export function AgnusRosaryCompanion({ className }: { className?: string }) {
  const { mascotName, equippedOutfit, equippedAccessory } = useAgnusWardrobe();
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-border bg-card/85 px-4 py-3 text-left",
        className,
      )}
    >
      <AgnusPortrait
        outfitId={equippedOutfit.id}
        accessoryId={equippedAccessory.id}
        mascotName={mascotName}
        animation="contemplative"
        className="h-14 w-14 shrink-0 rounded-xl"
      />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-primary">{mascotName} em oração</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          Em silêncio e recolhimento para acompanhar seus mistérios do Rosário.
        </p>
      </div>
    </div>
  );
}

/**
 * Compact stationary progress hint showing the next Agnus outfit unlockable in a track, Bible, or Christmas journey.
 */
export function AgnusNextGoalBanner({
  source,
  className,
}: {
  source?: "track" | "bible" | "christmas";
  className?: string;
}) {
  const { mascotName, nextTrackUnlock, nextBibleUnlock, nextChristmasUnlock, nextAnyUnlock } =
    useAgnusWardrobe();
  const target =
    source === "track"
      ? nextTrackUnlock
      : source === "bible"
        ? nextBibleUnlock
        : source === "christmas"
          ? nextChristmasUnlock
          : nextAnyUnlock;

  if (!target) return null;

  return (
    <Link
      to="/meu-agnus"
      className={cn(
        "flex items-center gap-3 rounded-2xl border-2 border-border bg-card p-3 transition hover:border-gold active:translate-y-0.5",
        className,
      )}
    >
      <AgnusPortrait
        outfitId={target.outfit.id}
        mascotName={mascotName}
        locked
        className="h-14 w-14 shrink-0 rounded-xl"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-xs font-bold uppercase tracking-wide text-secondary">
            Próxima roupa de {mascotName}: {target.outfit.name}
          </span>
          <span className="shrink-0 text-xs font-bold text-primary tabular-nums">
            {formatPercent(target.progress.current)} / {formatPercent(target.progress.target)}
          </span>
        </div>
        <div className="mt-1.5">
          <ProgressBar
            value={target.progress.ratioPercent}
            label={`Progresso para ${target.outfit.name}`}
          />
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{target.progress.label}</p>
      </div>
    </Link>
  );
}

/**
 * Gentle celebration shown inline when one or more new Agnus outfits are unlocked.
 * Never blocks navigation and records dismissal permanently to avoid repeat celebrations.
 */
export function AgnusCelebrationBanner({
  filterRequirement,
  className,
}: {
  filterRequirement?: "track-percent" | "bible-percent" | "christmas-percent";
  className?: string;
}) {
  const {
    mascotName,
    pendingCelebrations,
    metrics,
    equippedOutfit,
    equipOutfit,
    dismissCelebration,
  } = useAgnusWardrobe();

  const items = filterRequirement
    ? pendingCelebrations.filter((item) => item.requirement.type === filterRequirement)
    : pendingCelebrations;

  if (items.length === 0) return null;
  const outfit = items[0]!;
  const isEquipped = equippedOutfit.id === outfit.id;

  const requirementHint =
    outfit.requirement.type === "track-percent"
      ? `Meta atingida: ${outfit.requirement.percent}% da trilha (${formatPercent(metrics.trackPercent)}).`
      : outfit.requirement.type === "bible-percent"
        ? `Meta atingida: ${outfit.requirement.percent}% da Bíblia (${formatPercent(metrics.biblePercent)}).`
        : outfit.requirement.type === "christmas-percent"
          ? `Meta atingida: ${outfit.requirement.percent}% do Especial de Natal (${formatPercent(metrics.christmasPercent)}).`
          : outfit.description;

  return (
    <aside
      aria-label={`Nova roupinha desbloqueada para ${mascotName}`}
      className={cn(
        "animate-rise rounded-3xl border-2 border-gold bg-card p-4 text-left",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary">
          <Sparkles className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          Nova conquista para {mascotName}!
        </p>
        <button
          type="button"
          onClick={() => dismissCelebration(outfit.id)}
          aria-label={`Fechar aviso da roupa ${outfit.name}`}
          className="rounded-lg p-1 text-muted-foreground hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <AgnusPortrait
          outfitId={outfit.id}
          mascotName={mascotName}
          animation="celebrating"
          className="h-20 w-20 shrink-0"
          priority
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-bold text-primary">{outfit.name}</h3>
          <p className="mt-0.5 text-xs font-semibold text-secondary">{requirementHint}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{outfit.description}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <LumenButton
          type="button"
          variant="gold"
          data-sound="select"
          onClick={() => {
            equipOutfit(outfit.id);
            dismissCelebration(outfit.id);
          }}
          className="h-auto min-w-0 flex-1 gap-1.5 px-3 py-2.5 text-sm normal-case"
        >
          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          {isEquipped ? "Já equipada" : "Equipar agora"}
        </LumenButton>
        <Link
          to="/meu-agnus"
          onClick={() => dismissCelebration(outfit.id)}
          className="inline-flex items-center justify-center rounded-2xl border-2 border-border bg-card px-3 py-2.5 text-xs font-bold text-primary hover:border-gold"
        >
          Abrir Meu Agnus
        </Link>
      </div>
    </aside>
  );
}
