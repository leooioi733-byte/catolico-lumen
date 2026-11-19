import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DevotionSaintTabPanel, ProfileDevotionSaintCard } from "@/components/DevotionSaintSection";
import { useLocalProfile } from "@/hooks/use-local-profile";
import { PROFILE_STORAGE_KEY, parseProfile, updatePersonalProfile } from "@/lib/profile";
import { DEVOTION_SAINTS, searchSaints } from "@/lib/saints";

function SaintProfileHarness() {
  const { profile, ready, saveDevotionSaint } = useLocalProfile();
  return (
    <div>
      <ProfileDevotionSaintCard saintId={profile.devotionSaintId} onOpenPicker={vi.fn()} />
      <DevotionSaintTabPanel
        selectedSaintId={profile.devotionSaintId}
        ready={ready}
        onSelectSaint={saveDevotionSaint}
      />
    </div>
  );
}

describe("meu santo de devoção no perfil", () => {
  beforeEach(() => localStorage.clear());
  afterEach(cleanup);

  it("oferece um catálogo amplo e filtra santos sem exigir acentos", () => {
    expect(DEVOTION_SAINTS.length).toBeGreaterThanOrEqual(45);
    expect(searchSaints("teresinha").map((s) => s.id)).toContain("santa-teresinha");
    expect(searchSaints("anchieta", "Santos do Brasil").map((s) => s.id)).toEqual([
      "sao-jose-de-anchieta",
    ]);
    expect(searchSaints("teresa", "Mártires")).toEqual([]);
  });

  it("pesquisa santos pela barra de busca, salva no perfil mesmo sem apelido e exibe em destaque", () => {
    const view = render(<SaintProfileHarness />);

    expect(
      screen.getByText(
        /Escolha um santo ou invocação especial para ficar em destaque no seu perfil/i,
      ),
    ).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Buscar santo de devoção");
    fireEvent.change(searchInput, { target: { value: "acutis" } });

    expect(screen.getByText("1 santo encontrado")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /São Carlo Acutis/i }));

    expect(screen.getByText(/A Eucaristia é a minha autoestrada para o Céu/i)).toBeInTheDocument();
    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY)).devotionSaintId).toBe(
      "sao-carlo-acutis",
    );

    view.unmount();
    render(<SaintProfileHarness />);
    expect(screen.getByRole("heading", { name: "São Carlo Acutis" })).toBeInTheDocument();
  });

  it("preserva o santo escolhido quando o usuário edita apelido ou símbolo do perfil", () => {
    const existing = parseProfile(
      JSON.stringify({ nickname: "Pedro", devotionSaintId: "santa-dulce-dos-pobres" }),
    );
    const updated = updatePersonalProfile(existing, {
      nickname: "Pedro Henrique",
      symbol: "book",
      level: "bem",
      topic: "Bíblia",
    });
    expect(updated.devotionSaintId).toBe("santa-dulce-dos-pobres");
  });
});
