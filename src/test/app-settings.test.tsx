import type { ReactNode } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AppSettings } from "@/components/AppSettings";
import { AudioProvider } from "@/components/AudioProvider";
import { SettingsProvider } from "@/components/SettingsProvider";
import { SETTINGS_STORAGE_KEY, parseAppSettings } from "@/lib/settings";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children, ...props }: { to: string; children: ReactNode; className?: string }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
  useLocation: ({ select }: { select: (location: { pathname: string }) => string }) =>
    select({ pathname: "/inicio" }),
}));

function renderAppSettings() {
  return render(
    <SettingsProvider>
      <AudioProvider>
        <AppSettings />
      </AudioProvider>
    </SettingsProvider>,
  );
}

describe("diálogo de configurações e subpainel de temas", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    cleanup();
    delete document.documentElement.dataset["lumenTheme"];
    delete document.documentElement.dataset["reduceMotion"];
  });

  it("exibe um botão único Temas que abre a tela exclusiva de temas e permite voltar", () => {
    renderAppSettings();

    fireEvent.click(screen.getByRole("button", { name: "Abrir configurações" }));

    expect(screen.getByRole("heading", { name: "Configurações" })).toBeInTheDocument();
    const temasButton = screen.getByRole("button", { name: /Temas/i });
    expect(temasButton).toHaveTextContent("Atual: Automático (Branco e azul claro)");
    expect(screen.queryByRole("group", { name: "Aparência" })).not.toBeInTheDocument();

    fireEvent.click(temasButton);

    expect(screen.getByRole("heading", { name: "Temas" })).toBeInTheDocument();
    const themesGroup = screen.getByRole("group", { name: "Aparência" });
    expect(themesGroup).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Automático \(sistema\)/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: /^Branco e azul claro$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Creme$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Grená$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Preto e amarelo$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Tema Natalino$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Natal Verde$/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Grená/i }));
    expect(document.documentElement.dataset["lumenTheme"]).toBe("burgundy");
    expect(parseAppSettings(localStorage.getItem(SETTINGS_STORAGE_KEY)).appearance).toBe(
      "burgundy",
    );

    fireEvent.click(screen.getByRole("button", { name: "Voltar às configurações" }));
    expect(screen.getByRole("heading", { name: "Configurações" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Temas/i })).toHaveTextContent("Atual: Grená");
  });
});
