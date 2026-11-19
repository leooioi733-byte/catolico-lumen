import { GoogleGenAI, type Content } from "@google/genai";

export const AGNUS_GEMINI_MODEL = "gemini-4-hydrogen";

export interface ServerChatMessage {
  role: "user" | "assistant";
  text: string;
}

export interface ServerUserContext {
  nickname?: string | undefined;
  devotionSaint?: string | undefined;
  completedLessonsCount?: number | undefined;
}

export interface AgnusServerResponse {
  ok: boolean;
  status: number;
  reply?: string;
  error?: string;
  code?: string;
}

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env["GEMINI_API_KEY"]?.trim();
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function buildSystemInstruction(context?: ServerUserContext): string {
  const userFacts: string[] = [];
  if (context?.nickname?.trim()) {
    userFacts.push(`Nome ou apelido do usuário: ${context.nickname.trim()}.`);
  }
  if (context?.devotionSaint?.trim()) {
    userFacts.push(`Santo de devoção escolhido pelo usuário: ${context.devotionSaint.trim()}.`);
  }
  if (typeof context?.completedLessonsCount === "number" && context.completedLessonsCount > 0) {
    userFacts.push(
      `O usuário já concluiu ${context.completedLessonsCount} lições na trilha do Lumen Catholic.`,
    );
  }

  return [
    "Você é o Agnus, o cordeirinho mascote e guia inteligente oficial do aplicativo católico Lumen Catholic.",
    "Personalidade: amigável, acolhedor, sereno, educativo, alegre e profundamente respeitoso.",
    "Idioma: responda sempre em português do Brasil claro, acessível e bem estruturado.",
    "Suas funções principais:",
    "- Responder perguntas sobre a fé católica, teologia, moral cristã e espiritualidade.",
    "- Explicar passagens bíblicas com fidelidade ao sentido do texto sagrado e à Tradição católica.",
    "- Ensinar sobre santos, sacramentos, liturgia, orações e doutrina em sintonia com o Catecismo da Igreja Católica.",
    "- Ajudar o usuário a compreender conteúdos das lições e explicar assuntos profundos de maneira simples, didática e acolhedora.",
    "- Manter coerência com o histórico da conversa atual.",
    "REGRAS RÍGIDAS DE CONFIABILIDADE E HONESTIDADE:",
    "- Fundamente suas respostas exclusivamente em fontes confiáveis da fé católica (Sagradas Escrituras, Catecismo da Igreja Católica, Concílios, documentos pontifícios e vidas reconhecidas dos santos).",
    "- NUNCA invente citações bíblicas, números de capítulos/versículos, parágrafos do Catecismo, documentos da Igreja ou frases atribuídas a santos.",
    "- Se você não tiver plena certeza de um número exato de versículo ou parágrafo do Catecismo, mencione apenas o livro bíblico ou o ensinamento geral sem inventar numeração.",
    "- Quando uma questão envolver discernimento pessoal ou dúvida fora do escopo doutrinário, oriente com humildade e sugira também conversar com um sacerdote ou consultar as fontes oficiais.",
    "Formatação: use parágrafos curtos e listas simples com marcadores quando ajudar a leitura. Não invente tags HTML.",
    ...(userFacts.length > 0 ? ["Contexto do usuário:", ...userFacts] : []),
  ].join("\n");
}

function isRetryableStatus(status: number | undefined): boolean {
  return status === 429 || status === 500 || status === 502 || status === 503 || status === 504;
}

function extractErrorDetails(error: unknown): { status?: number | undefined; message: string } {
  if (error && typeof error === "object") {
    const errObj = error as { status?: unknown; code?: unknown; message?: unknown };
    const status =
      typeof errObj.status === "number"
        ? errObj.status
        : typeof errObj.code === "number"
          ? errObj.code
          : undefined;
    const message = typeof errObj.message === "string" ? errObj.message : String(error);
    return { status, message };
  }
  return { message: String(error) };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function handleAgnusChatRequest(body: unknown): Promise<AgnusServerResponse> {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, status: 400, error: "Corpo da requisição inválido.", code: "BAD_REQUEST" };
  }

  const record = body as { messages?: unknown; userContext?: unknown };
  if (!Array.isArray(record.messages) || record.messages.length === 0) {
    return {
      ok: false,
      status: 400,
      error: "Envie ao menos uma mensagem para conversar com o Agnus.",
      code: "EMPTY_MESSAGES",
    };
  }

  const sanitizedMessages: ServerChatMessage[] = record.messages
    .filter((m): m is { role: unknown; text: unknown } => Boolean(m && typeof m === "object"))
    .map((m) => ({
      role: (m.role === "assistant" ? "assistant" : "user") as "user" | "assistant",
      text: typeof m.text === "string" ? m.text.trim().slice(0, 4000) : "",
    }))
    .filter((m) => m.text.length > 0)
    .slice(-16);

  const lastMessage = sanitizedMessages.at(-1);
  if (!lastMessage || lastMessage.role !== "user") {
    return {
      ok: false,
      status: 400,
      error: "A última mensagem precisa ser uma pergunta do usuário.",
      code: "INVALID_TURN",
    };
  }

  const ai = getAiClient();
  if (!ai) {
    return {
      ok: false,
      status: 503,
      code: "MISSING_API_KEY",
      error:
        "A inteligência artificial do Agnus precisa da chave GEMINI_API_KEY configurada nas variáveis do servidor (Settings > Secrets).",
    };
  }

  const rawContext =
    record.userContext && typeof record.userContext === "object"
      ? (record.userContext as Record<string, unknown>)
      : {};
  const userContext: ServerUserContext = {
    nickname: typeof rawContext["nickname"] === "string" ? rawContext["nickname"] : undefined,
    devotionSaint:
      typeof rawContext["devotionSaint"] === "string" ? rawContext["devotionSaint"] : undefined,
    completedLessonsCount:
      typeof rawContext["completedLessonsCount"] === "number"
        ? rawContext["completedLessonsCount"]
        : undefined,
  };

  const history: Content[] = sanitizedMessages.slice(0, -1).map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.text }],
  }));

  const systemInstruction = buildSystemInstruction(userContext);

  const maxAttempts = 3;
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const chat = ai.chats.create({
        model: AGNUS_GEMINI_MODEL,
        history,
        config: {
          systemInstruction,
        },
      });

      const response = await chat.sendMessage({ message: lastMessage.text });
      const reply = response.text?.trim();

      if (!reply) {
        return {
          ok: false,
          status: 502,
          code: "EMPTY_RESPONSE",
          error: "O Agnus não recebeu uma resposta válida agora. Tente reformular sua pergunta.",
        };
      }

      return { ok: true, status: 200, reply };
    } catch (error) {
      lastError = error;
      const { status } = extractErrorDetails(error);
      if (attempt < maxAttempts && isRetryableStatus(status)) {
        await delay(350 * 2 ** (attempt - 1));
        continue;
      }
      break;
    }
  }

  const { status, message } = extractErrorDetails(lastError);
  console.error("Agnus Gemini API error:", status, message);

  if (status === 400 || status === 403 || /API_KEY_INVALID|PERMISSION_DENIED/i.test(message)) {
    return {
      ok: false,
      status: 403,
      code: "API_KEY_ERROR",
      error:
        "Não foi possível autenticar com a Gemini API. Verifique a chave configurada em Settings > Secrets.",
    };
  }

  if (status === 429 || /RESOURCE_EXHAUSTED/i.test(message)) {
    return {
      ok: false,
      status: 429,
      code: "RATE_LIMIT",
      error: "Muitas solicitações seguidas no momento. Aguarde alguns instantes e tente novamente.",
    };
  }

  if (status === 404 || /NOT_FOUND/i.test(message)) {
    return {
      ok: false,
      status: 502,
      code: "MODEL_NOT_FOUND",
      error: "O modelo configurado para o Agnus não está disponível no momento.",
    };
  }

  return {
    ok: false,
    status: 502,
    code: "UPSTREAM_ERROR",
    error: "Não consegui falar com o Agnus agora. Tente novamente em instantes.",
  };
}
