export interface AgnusChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  createdAt: number;
}

export interface AgnusConversation {
  id: string;
  title: string;
  messages: AgnusChatMessage[];
  updatedAt: number;
}

export interface AgnusSuggestedQuestion {
  id: string;
  category: string;
  label: string;
  prompt: string;
}

export const AGNUS_AI_HISTORY_KEY = "lumen-agnus-ai-history";
export const MAX_SAVED_CONVERSATIONS = 20;

export const AGNUS_SUGGESTED_QUESTIONS: readonly AgnusSuggestedQuestion[] = [
  {
    id: "bom-pastor",
    category: "Bíblia",
    label: "O Bom Pastor",
    prompt: "Explique de forma simples o que Jesus ensina na passagem do Bom Pastor em São João.",
  },
  {
    id: "eucaristia",
    category: "Sacramentos",
    label: "A Eucaristia",
    prompt: "O que a Igreja Católica ensina sobre a Eucaristia e por que ela é o centro da Missa?",
  },
  {
    id: "carlo-acutis",
    category: "Santos",
    label: "São Carlo Acutis",
    prompt: "Quem foi São Carlo Acutis e o que sua vida ensina aos católicos hoje?",
  },
  {
    id: "trindade",
    category: "Doutrina",
    label: "Santíssima Trindade",
    prompt: "Como posso entender o mistério da Santíssima Trindade de um jeito fácil e fiel à fé?",
  },
  {
    id: "reconciliacao",
    category: "Sacramentos",
    label: "Confissão",
    prompt: "Como me preparar bem para o Sacramento da Reconciliação (Confissão)?",
  },
  {
    id: "at-nt",
    category: "Estudos",
    label: "Antigo e Novo Testamento",
    prompt: "Qual é a relação entre o Antigo e o Novo Testamento na história da salvação?",
  },
] as const;

export function createMessageId(prefix = "msg"): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function createEmptyConversation(): AgnusConversation {
  return {
    id: createMessageId("conv"),
    title: "Nova conversa com Agnus",
    messages: [],
    updatedAt: Date.now(),
  };
}

export function deriveConversationTitle(firstPrompt: string): string {
  const cleaned = firstPrompt.trim().replace(/\s+/g, " ");
  if (!cleaned) return "Conversa com Agnus";
  return cleaned.length > 48 ? `${cleaned.slice(0, 45).trimEnd()}…` : cleaned;
}

export function parseAgnusConversations(raw: string | null): AgnusConversation[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const list: AgnusConversation[] = [];
    for (const item of parsed) {
      if (!item || typeof item !== "object" || Array.isArray(item)) continue;
      const obj = item as Record<string, unknown>;
      const id = typeof obj["id"] === "string" && obj["id"].trim() ? obj["id"] : createMessageId("conv");
      const title =
        typeof obj["title"] === "string" && obj["title"].trim()
          ? obj["title"].trim().slice(0, 80)
          : "Conversa com Agnus";
      const updatedAt = typeof obj["updatedAt"] === "number" ? obj["updatedAt"] : Date.now();
      const rawMessages = Array.isArray(obj["messages"]) ? obj["messages"] : [];
      const messages: AgnusChatMessage[] = rawMessages
        .filter((m): m is Record<string, unknown> => Boolean(m && typeof m === "object"))
        .map((m) => ({
          id: typeof m["id"] === "string" ? m["id"] : createMessageId(),
          role: (m["role"] === "assistant" ? "assistant" : "user") as "user" | "assistant",
          text: typeof m["text"] === "string" ? m["text"] : "",
          createdAt: typeof m["createdAt"] === "number" ? m["createdAt"] : Date.now(),
        }))
        .filter((m) => m.text.trim().length > 0);
      if (messages.length > 0) {
        list.push({ id, title, messages, updatedAt });
      }
    }
    return list.slice(0, MAX_SAVED_CONVERSATIONS);
  } catch {
    return [];
  }
}

export function readAgnusConversations(): AgnusConversation[] {
  if (typeof window === "undefined") return [];
  try {
    return parseAgnusConversations(localStorage.getItem(AGNUS_AI_HISTORY_KEY));
  } catch {
    return [];
  }
}

export function saveAgnusConversations(conversations: readonly AgnusConversation[]): void {
  if (typeof window === "undefined") return;
  try {
    const nonEmpty = conversations
      .filter((conv) => conv.messages.length > 0)
      .slice(0, MAX_SAVED_CONVERSATIONS);
    localStorage.setItem(AGNUS_AI_HISTORY_KEY, JSON.stringify(nonEmpty));
  } catch {
    /* Storage optional */
  }
}

export class AgnusApiError extends Error {
  status: number;
  code?: string | undefined;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "AgnusApiError";
    this.status = status;
    if (code !== undefined) {
      this.code = code;
    }
  }
}

export async function sendAgnusQuestion(params: {
  messages: readonly AgnusChatMessage[];
  userContext?:
    | {
        nickname?: string | undefined;
        devotionSaint?: string | undefined;
        completedLessonsCount?: number | undefined;
      }
    | undefined;
  signal?: AbortSignal | undefined;
}): Promise<string> {
  const response = await fetch("/api/agnus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: params.messages.map((m) => ({ role: m.role, text: m.text })),
      userContext: params.userContext,
    }),
    ...(params.signal ? { signal: params.signal } : {}),
  });

  const data = (await response.json().catch(() => ({}))) as {
    reply?: unknown;
    error?: unknown;
    code?: unknown;
  };

  if (!response.ok) {
    const message =
      typeof data.error === "string" && data.error.trim()
        ? data.error
        : "Não foi possível obter resposta do Agnus neste momento.";
    throw new AgnusApiError(
      message,
      response.status,
      typeof data.code === "string" ? data.code : undefined,
    );
  }

  if (typeof data.reply !== "string" || !data.reply.trim()) {
    throw new AgnusApiError("O Agnus retornou uma resposta vazia.", 502);
  }

  return data.reply.trim();
}
