import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { BiblicalMapsViewer } from "@/components/BiblicalMapsViewer";
import { SettingsProvider } from "@/components/SettingsProvider";
import { NEW_TESTAMENT_MAP, OLD_TESTAMENT_MAP } from "@/lib/biblical-maps";

function renderViewer() {
  return render(
    <SettingsProvider>
      <BiblicalMapsViewer />
    </SettingsProvider>,
  );
}

describe("visualizador de mapas bíblicos", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    cleanup();
    delete document.documentElement.dataset["lumenTheme"];
    delete document.documentElement.dataset["reduceMotion"];
  });

  it("começa no mapa do Antigo Testamento e alterna entre os dois mapas pelos dois botões", () => {
    renderViewer();

    const oldBtn = screen.getByRole("button", { name: /Antigo Testamento/i });
    const newBtn = screen.getByRole("button", { name: /Novo Testamento/i });

    expect(oldBtn).toHaveAttribute("aria-pressed", "true");
    expect(newBtn).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByRole("heading", { name: "Mundo do Antigo Testamento" })).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", OLD_TESTAMENT_MAP.image);

    fireEvent.click(newBtn);

    expect(oldBtn).toHaveAttribute("aria-pressed", "false");
    expect(newBtn).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: "Mundo do Novo Testamento" })).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", NEW_TESTAMENT_MAP.image);

    fireEvent.click(oldBtn);
    expect(oldBtn).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("img")).toHaveAttribute("src", OLD_TESTAMENT_MAP.image);
  });

  it("permite dar zoom, navegar pelas setas direcionais e centralizar novamente", () => {
    renderViewer();

    const stage = screen.getByTestId("map-transform-stage");
    const zoomDisplay = screen.getByLabelText("Nível de zoom atual");
    expect(zoomDisplay).toHaveTextContent("100%");
    expect(stage.style.transform).toContain("scale(1)");

    fireEvent.click(screen.getByRole("button", { name: "Aumentar zoom" }));
    expect(zoomDisplay).toHaveTextContent("140%");
    expect(stage.style.transform).toContain("scale(1.4)");

    fireEvent.click(screen.getByRole("button", { name: "Navegar mapa para o leste" }));
    expect(stage.style.transform).not.toContain("translate3d(0px, 0px, 0)");

    fireEvent.click(screen.getByRole("button", { name: "Redefinir zoom e posição" }));
    expect(zoomDisplay).toHaveTextContent("100%");
    expect(stage.style.transform).toContain("translate3d(0px, 0px, 0) scale(1)");
  });

  it("permite tocar em um lugar em destaque para aproximar e exibir os detalhes históricos", () => {
    renderViewer();

    fireEvent.click(screen.getByRole("button", { name: /Novo Testamento/i }));
    fireEvent.click(screen.getByRole("button", { name: "Roma" }));

    expect(screen.getByLabelText("Nível de zoom atual")).toHaveTextContent("230%");
    expect(
      screen.getByText(/Capital do Império Romano, onde São Pedro e São Paulo/i),
    ).toBeInTheDocument();
  });

  it("abre o mapa em tela cheia mantendo os botões de Antigo e Novo Testamento e fecha normalmente", () => {
    renderViewer();

    fireEvent.click(screen.getByRole("button", { name: "Abrir mapa em tela cheia" }));
    expect(
      screen.getByRole("dialog", { name: /Mundo do Antigo Testamento em tela cheia/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Novo Testamento/i }));
    expect(
      screen.getByRole("dialog", { name: /Mundo do Novo Testamento em tela cheia/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Sair da tela cheia" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
