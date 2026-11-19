import type { ReactNode } from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AgnusAiHub } from "@/components/AgnusAiHub";
import { AgnusWardrobeProvider } from "@/components/AgnusWardrobeProvider";
import { AppShell } from "@/components/AppShell";
import { BibleProgressProvider } from "@/components/BibleProgressProvider";
import { SettingsProvider } from "@/components/SettingsProvider";
import { AGNUS_AI_HISTORY_KEY, parseAgnusConversations } from "@/lib/agnus-ai";
import { handleAgnusChatRequest } from "@/lib/agnus-ai-server";
import { PROFILE_STORAGE_KEY } from "@/lib/profile";

const mockSendMessage = vi.fn();
const mockChatsCreate = vi.fn(() => ({
  sendMessage: mockSendMessage,
}));

vi.mock("@google/genai", () => ({
  GoogleGenAI: class {
    chats = {
      create: mockChatsCreate,
    };
  },
}));

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    to,
    children,
    className,
    ...props
  }: {
    to: string;
    children: ReactNode;
    className?: string;
  }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  ),
}));

function renderAgnusHub() {
  return render(
    <SettingsProvider>
      <BibleProgressProvider>
        <AgnusWardrobeProvider>
          <AgnusAiHub />
        </AgnusWardrobeProvider>
      </BibleProgressProvider>
    </SettingsProvider>,
  );
}

describe("barra de navegação inferior com Início no centro", () => {
  afterEach(cleanup);

  it("posiciona Início exatamente no centro e destaca apenas o item central", () => {
    render(
      <AppShell>
        <div>Conteúdo</div>
      </AppShell>,
    );

    const navLinks = screen.getAllByRole("link");
    expect(navLinks.map((link) => link.textContent?.trim())).toEqual([
      "Trilha",
      "Orações",
      "Início",
      "Biblioteca",
      "Conta",
    ]);

    expect(navLinks[2]).toHaveAttribute("href", "/inicio");
    expect(navLinks[2]?.className).toContain("lumen-nav-tab-center");
    expect(navLinks[0]?.className).not.toContain("lumen-nav-tab-center");
    expect(navLinks[1]?.className).not.toContain("lumen-nav-tab-center");
    expect(navLinks[3]?.className).not.toContain("lumen-nav-tab-center");
    expect(navLinks[4]?.className).not.toContain("lumen-nav-tab-center");
  });
});

describe("central Agnus AI na seção Início", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    globalThis.fetch = originalFetch;
    delete process.env["GEMINI_API_KEY"];
  });

  it("envia pergunta digitada, exibe indicador de pensamento, recebe resposta e persiste no histórico", async () => {
    localStorage.setItem(
      PROFILE_STORAGE_KEY,
      JSON.stringify({ nickname: "Lucas", devotionSaintId: "sao-carlo-acutis" }),
    );

    let resolveFetch!: (value: Response) => void;
    globalThis.fetch = vi.fn(
      () =>
        new Promise<Response>((resolve) => {
          resolveFetch = resolve;
        }),
    ) as typeof fetch;

    const view = renderAgnusHub();

    expect(screen.getByRole("heading", { name: "Olá, Lucas!" })).toBeInTheDocument();
    expect(screen.getByText(/Santo de devoção no perfil: São Carlo Acutis/i)).toBeInTheDocument();
    expect(screen.getByText("O Bom Pastor")).toBeInTheDocument();

    const textarea = screen.getByLabelText(/Pergunte ao Agnus AI/i);
    fireEvent.change(textarea, { target: { value: "O que é a Eucaristia?" } });
    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    expect(screen.getByText("O que é a Eucaristia?")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(/pensando/i);

    resolveFetch(
      new Response(
        JSON.stringify({
          reply: "A Eucaristia é a fonte e o ápice da vida cristã, conforme ensina o Catecismo.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      ),
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          "A Eucaristia é a fonte e o ápice da vida cristã, conforme ensina o Catecismo.",
        ),
      ).toBeInTheDocument();
    });

    const saved = parseAgnusConversations(localStorage.getItem(AGNUS_AI_HISTORY_KEY));
    expect(saved).toHaveLength(1);
    expect(saved[0]?.messages).toHaveLength(2);

    view.unmount();
    renderAgnusHub();
    expect(
      screen.getByText(
        "A Eucaristia é a fonte e o ápice da vida cristã, conforme ensina o Catecismo.",
      ),
    ).toBeInTheDocument();
  });

  it("permite iniciar conversa pelas sugestões e exibe erro real com botão de tentar novamente quando falha", async () => {
    globalThis.fetch = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ error: "Serviço temporariamente indisponível." }), {
          status: 503,
          headers: { "Content-Type": "application/json" },
        }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ reply: "Jesus se apresenta como o Bom Pastor em Jo 10." }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      ) as typeof fetch;

    renderAgnusHub();
    fireEvent.click(screen.getByRole("button", { name: /O Bom Pastor/i }));

    await waitFor(() => {
      expect(screen.getByText("Serviço temporariamente indisponível.")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Tentar novamente" }));
    await waitFor(() => {
      expect(
        screen.getByText("Jesus se apresenta como o Bom Pastor em Jo 10."),
      ).toBeInTheDocument();
    });
  });

  it("retorna erro 503 explícito sem chave GEMINI_API_KEY e envia contexto com gemini-4-hydrogen quando configurada", async () => {
    delete process.env["GEMINI_API_KEY"];
    const noKey = await handleAgnusChatRequest({
      messages: [{ role: "user", text: "Quem foi São Bento?" }],
    });
    expect(noKey.ok).toBe(false);
    expect(noKey.status).toBe(503);

    process.env["GEMINI_API_KEY"] = "test-key";
    mockSendMessage.mockResolvedValueOnce({
      text: "São Bento de Núrsia escreveu a Regra Beneditina.",
    });

    const success = await handleAgnusChatRequest({
      messages: [
        { role: "user", text: "Olá!" },
        { role: "assistant", text: "Paz e bem! Em que posso ajudar?" },
        { role: "user", text: "Quem foi São Bento?" },
      ],
      userContext: { nickname: "Maria", devotionSaint: "São Bento de Núrsia" },
    });

    expect(success).toEqual({
      ok: true,
      status: 200,
      reply: "São Bento de Núrsia escreveu a Regra Beneditina.",
    });
    expect(mockChatsCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gemini-4-hydrogen",
        history: [
          { role: "user", parts: [{ text: "Olá!" }] },
          { role: "model", parts: [{ text: "Paz e bem! Em que posso ajudar?" }] },
        ],
      }),
    );
    expect(mockSendMessage).toHaveBeenCalledWith({ message: "Quem foi São Bento?" });
  });
});
