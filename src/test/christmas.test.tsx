import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ChristmasIllustration } from "@/components/ChristmasIllustration";
import { useChristmasProgress } from "@/hooks/use-christmas-progress";
import {
  CHRISTMAS_CHAPTERS,
  CHRISTMAS_STORAGE_KEY,
  applyChristmasCompletion,
  christmasProgressPercent,
  emptyChristmasProgress,
  getAdjacentChristmasChapters,
  getChristmasChapter,
  nextChristmasChapter,
  parseChristmasProgress,
} from "@/lib/christmas";

function ProgressHarness() {
  const { completedCount, totalCount, percent, nextChapter, completeChapter } =
    useChristmasProgress();
  return (
    <div>
      <output data-testid="count">
        {completedCount}/{totalCount}
      </output>
      <output data-testid="percent">{percent}</output>
      <output data-testid="next">{nextChapter?.id ?? "done"}</output>
      <button type="button" onClick={() => completeChapter("anuncio-messias")}>
        Concluir cap 1
      </button>
    </div>
  );
}

describe("Especial de Natal — Jornada da Natividade", () => {
  beforeEach(() => localStorage.clear());
  afterEach(cleanup);

  it("contém os 10 capítulos obrigatórios em ordem sequencial com conteúdo completo", () => {
    expect(CHRISTMAS_CHAPTERS).toHaveLength(10);
    expect(CHRISTMAS_CHAPTERS.map((c) => c.order)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    for (const chapter of CHRISTMAS_CHAPTERS) {
      expect(chapter.title.length).toBeGreaterThan(5);
      expect(chapter.biblicalContext.length).toBeGreaterThan(30);
      expect(chapter.explanation).toHaveLength(2);
      expect(chapter.curiosity.length).toBeGreaterThan(20);
      expect(chapter.references.length).toBeGreaterThanOrEqual(2);
      expect(chapter.questions.length).toBeGreaterThanOrEqual(2);
      expect(chapter.activity.explanation.length).toBeGreaterThan(10);
      if (chapter.activity.type === "match") {
        expect(chapter.activity.pairs.length).toBeGreaterThanOrEqual(3);
      } else {
        expect(chapter.activity.items.length).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it("calcula progresso, navegação entre capítulos adjacentes e ignora IDs inválidos", () => {
    let progress = emptyChristmasProgress();
    expect(nextChristmasChapter(progress.completed)?.id).toBe("anuncio-messias");
    expect(christmasProgressPercent(progress.completed)).toBe(0);

    progress = applyChristmasCompletion(progress, "anuncio-messias");
    progress = applyChristmasCompletion(progress, "invalido");
    expect(progress.completed).toEqual(["anuncio-messias"]);
    expect(christmasProgressPercent(progress.completed)).toBe(10);
    expect(nextChristmasChapter(progress.completed)?.id).toBe("anunciacao-maria");

    expect(getChristmasChapter("nascimento-jesus")?.order).toBe(5);
    const adj = getAdjacentChristmasChapters("nascimento-jesus");
    expect(adj.previous?.id).toBe("viagem-belem");
    expect(adj.next?.id).toBe("visita-pastores");

    expect(parseChristmasProgress("corrompido")).toEqual(emptyChristmasProgress());
    expect(parseChristmasProgress('{"completed":["anuncio-messias","fake"]}')).toEqual({
      completed: ["anuncio-messias"],
      lastChapterId: null,
    });
  });

  it("persiste o progresso dos capítulos no localStorage sem afetar XP ou trilha comum", () => {
    localStorage.setItem("lumen-progress", '{"xp":50,"completed":["biblia"]}');

    const view = render(<ProgressHarness />);
    expect(screen.getByTestId("count")).toHaveTextContent("0/10");
    fireEvent.click(screen.getByRole("button", { name: "Concluir cap 1" }));
    expect(screen.getByTestId("count")).toHaveTextContent("1/10");
    expect(screen.getByTestId("percent")).toHaveTextContent("10");
    expect(screen.getByTestId("next")).toHaveTextContent("anunciacao-maria");

    view.unmount();
    render(<ProgressHarness />);
    expect(screen.getByTestId("count")).toHaveTextContent("1/10");
    expect(parseChristmasProgress(localStorage.getItem(CHRISTMAS_STORAGE_KEY)).completed).toEqual([
      "anuncio-messias",
    ]);
    expect(localStorage.getItem("lumen-progress")).toBe('{"xp":50,"completed":["biblia"]}');
  });

  it("renderiza ilustrações 2D temáticas da Natividade com fallback seguro", () => {
    render(
      <>
        <ChristmasIllustration id="presepio" alt="Presépio de Belém" />
        <ChristmasIllustration id="profecias" alt="Profecias do Messias" />
      </>,
    );
    expect(screen.getByAltText("Presépio de Belém")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Profecias do Messias" })).toBeInTheDocument();
  });
});
