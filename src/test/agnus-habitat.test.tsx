import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { AgnusWardrobeProvider } from "@/components/AgnusWardrobeProvider";
import { BibleProgressProvider } from "@/components/BibleProgressProvider";
import { MeuAgnusArea } from "@/components/MeuAgnusArea";
import { SettingsProvider } from "@/components/SettingsProvider";
import {
  AGNUS_ACCESSORIES,
  AGNUS_CARE_STORAGE_KEY,
  AGNUS_PROGRESSION_CONFIG,
  AGNUS_ROOMS,
  AGNUS_SCENARIOS,
  STAGE_PROPS_BY_SCENE,
  TOUCH_REACTIONS,
  applyCareElapsedTime,
  computeJourneyPercent,
  contextualBaseAnimation,
  defaultAgnusCareState,
  getUnlockedAccessoryIds,
  getUnlockedScenarioIds,
  parseAgnusCareState,
  performCareAction,
  pickNextTouchReaction,
} from "@/lib/agnus-habitat";
import { CHRISTMAS_STORAGE_KEY } from "@/lib/christmas";
import { LESSONS } from "@/lib/lessons";
import { parseProfile, PROFILE_STORAGE_KEY } from "@/lib/profile";
import { PROGRESS_STORAGE_KEY } from "@/lib/progress";

describe("sistema de progressão combinada, acessórios, cenários e animações do Agnus", () => {
  it("calcula a porcentagem combinada da jornada de forma configurável", () => {
    expect(AGNUS_PROGRESSION_CONFIG.trackWeight + AGNUS_PROGRESSION_CONFIG.bibleWeight).toBeCloseTo(
      1,
    );
    expect(computeJourneyPercent(0, 0)).toBe(0);
    expect(computeJourneyPercent(40, 20)).toBe(30);
    expect(computeJourneyPercent(100, 100)).toBe(100);
  });

  it("respeita rigorosamente a cadência de 10% a 100% sem desbloqueios antecipados", () => {
    const empty = { trackPercent: 0, biblePercent: 0, christmasPercent: 0, journeyPercent: 0 };
    expect(getUnlockedAccessoryIds(empty)).toEqual(["none"]);
    expect(getUnlockedScenarioIds(empty)).toEqual(["padrao"]);

    const at10 = { trackPercent: 20, biblePercent: 0, christmasPercent: 0, journeyPercent: 10 };
    expect(getUnlockedAccessoryIds(at10)).toEqual(["none", "terco-pequeno"]);
    expect(getUnlockedScenarioIds(at10)).toEqual(["padrao"]);

    const at20 = { trackPercent: 40, biblePercent: 0, christmasPercent: 0, journeyPercent: 20 };
    expect(getUnlockedAccessoryIds(at20)).toEqual(["none", "terco-pequeno"]);
    expect(getUnlockedScenarioIds(at20)).toEqual(["padrao", "jardim-tranquilo"]);

    const at50WithChristmas = {
      trackPercent: 60,
      biblePercent: 40,
      christmasPercent: 50,
      journeyPercent: 50,
    };
    expect(getUnlockedAccessoryIds(at50WithChristmas)).toEqual([
      "none",
      "terco-pequeno",
      "livrinho-fe",
      "estrela-belem",
    ]);
    expect(getUnlockedScenarioIds(at50WithChristmas)).toEqual([
      "padrao",
      "jardim-tranquilo",
      "biblioteca",
      "noite-belem",
    ]);

    const at100 = {
      trackPercent: 100,
      biblePercent: 100,
      christmasPercent: 100,
      journeyPercent: 100,
    };
    expect(getUnlockedAccessoryIds(at100)).toHaveLength(AGNUS_ACCESSORIES.length);
    expect(getUnlockedScenarioIds(at100)).toHaveLength(AGNUS_SCENARIOS.length);
  });

  it("fornece animações contextuais estacionárias e reações variadas sem repetição imediata", () => {
    expect(contextualBaseAnimation("home", false)).toBe("resting");
    expect(contextualBaseAnimation("home", true)).toBe("sleeping");
    expect(contextualBaseAnimation("lesson", false)).toBe("reading");
    expect(contextualBaseAnimation("track", false)).toBe("welcoming");
    expect(contextualBaseAnimation("rosary", false)).toBe("contemplative");
    expect(contextualBaseAnimation("celebration", false)).toBe("celebrating");

    for (const current of TOUCH_REACTIONS) {
      const next = pickNextTouchReaction(current);
      expect(next).not.toBe(current);
      expect(TOUCH_REACTIONS).toContain(next);
    }
  });
});

describe("casa interativa do Meu Agnus (cômodos, necessidades e personalização)", () => {
  beforeEach(() => localStorage.clear());
  afterEach(cleanup);

  it("aplica ações de cuidado nos cômodos e decaimento natural ao longo do tempo", () => {
    const start = defaultAgnusCareState();
    const tired = applyCareElapsedTime(start, Date.parse(start.lastUpdatedAt) + 4 * 60 * 60 * 1000);
    expect(tired.fome).toBeLessThan(start.fome);
    expect(tired.sono).toBeLessThan(start.sono);
    expect(tired.banheiro).toBeLessThan(start.banheiro);
    expect(tired.felicidade).toBeLessThan(start.felicidade);

    const fed = performCareAction(tired, "feed");
    expect(fed.state.fome).toBeGreaterThan(tired.fome);
    expect(fed.reaction).toBe("eating");
    expect(fed.particle).toBe("🥖");
    expect(fed.speech.length).toBeGreaterThan(4);

    const played = performCareAction(fed.state, "play-yard");
    expect(played.reaction).toBe("playing");
    expect(played.particle).toBe("✨");

    const prayed = performCareAction(played.state, "pray-together");
    expect(prayed.reaction).toBe("praying");
    expect(prayed.particle).toBe("🙏");

    const slept = performCareAction(prayed.state, "toggle-sleep");
    expect(slept.state.asleep).toBe(true);
    expect(slept.state.sono).toBeGreaterThan(prayed.state.sono);

    const bathed = performCareAction(slept.state, "use-bathroom");
    expect(bathed.state.banheiro).toBe(100);
    expect(bathed.reaction).toBe("bathing");
    expect(bathed.particle).toBe("✨");

    const washed = performCareAction(bathed.state, "wash-up");
    expect(washed.reaction).toBe("bathing");
    expect(washed.particle).toBe("💧");
  });

  it("renderiza todos os 5 cômodos, executa cuidados reais, alterna abas e equipa acessórios/cenários sem mexer no XP", () => {
    // 40% da trilha combinada com 0% da Bíblia = 20% da jornada combinada:
    // desbloqueia 1º acessório (10%: Pequeno Terço) e 1º cenário (20%: Jardim Tranquilo).
    const lessonsFor40 = LESSONS.slice(0, Math.ceil(LESSONS.length * 0.4)).map((l) => l.id);
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({ nickname: "Lucas" }));
    localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify({ xp: 150, completed: lessonsFor40 }),
    );
    localStorage.setItem(
      CHRISTMAS_STORAGE_KEY,
      JSON.stringify({ completed: [], lastChapterId: null }),
    );
    localStorage.setItem(
      AGNUS_CARE_STORAGE_KEY,
      JSON.stringify({
        currentRoom: "sala",
        fome: 50,
        sono: 50,
        banheiro: 50,
        felicidade: 60,
        asleep: false,
        lampOff: false,
        candleLit: false,
        lastUpdatedAt: new Date().toISOString(),
        totalInteractions: 0,
      }),
    );

    render(
      <SettingsProvider>
        <BibleProgressProvider>
          <AgnusWardrobeProvider>
            <MeuAgnusArea />
          </AgnusWardrobeProvider>
        </BibleProgressProvider>
      </SettingsProvider>,
    );

    expect(screen.getByRole("heading", { name: "Meu Agnus" })).toBeInTheDocument();
    for (const room of AGNUS_ROOMS) {
      const label = room.id === "sala" ? "Sala" : room.name;
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    }

    // Interage na Sala de Estar -> Dar lanche aumenta Fome e anima boca/braços/pernas
    fireEvent.click(screen.getByRole("button", { name: "Dar lanche" }));
    expect(parseAgnusCareState(localStorage.getItem(AGNUS_CARE_STORAGE_KEY)).fome).toBe(82);
    expect(document.querySelector(".agnus-part-arm-l")).toBeTruthy();
    expect(document.querySelector(".agnus-part-leg-l")).toBeTruthy();
    expect(document.querySelector(".agnus-mouth-chew")).toBeTruthy();

    // Toca em móveis interagíveis diretamente no palco (Estante de livros)
    fireEvent.click(screen.getByRole("button", { name: "Estante de livros" }));
    expect(
      screen.getByText("Cada livrinho guarda uma história especial da fé!"),
    ).toBeInTheDocument();
    expect(document.querySelector(".agnus-pupils-reading")).toBeTruthy();

    // Toca diretamente no Agnus no palco -> fala e aumenta Felicidade
    fireEvent.click(screen.getByRole("button", { name: "Interagir com Agnus" }));
    expect(
      parseAgnusCareState(localStorage.getItem(AGNUS_CARE_STORAGE_KEY)).felicidade,
    ).toBeGreaterThan(60);

    // Muda para o Banheiro e interage pela banheira/botão
    fireEvent.click(screen.getByRole("button", { name: "Banheiro" }));
    fireEvent.click(screen.getByRole("button", { name: "Ir ao banheiro" }));
    expect(parseAgnusCareState(localStorage.getItem(AGNUS_CARE_STORAGE_KEY)).banheiro).toBe(100);
    expect(parseAgnusCareState(localStorage.getItem(AGNUS_CARE_STORAGE_KEY)).currentRoom).toBe(
      "banheiro",
    );

    // Aba Acessórios: equipa Pequeno Terço (desbloqueado em 10%) enquanto mantém superiores bloqueados
    fireEvent.click(screen.getByRole("tab", { name: "Acessórios" }));
    const tercoCard = document.querySelector('[data-accessory-id="terco-pequeno"]');
    const coroaCard = document.querySelector('[data-accessory-id="coroa-jubileu"]');
    expect(tercoCard?.getAttribute("data-unlocked")).toBe("true");
    expect(coroaCard?.getAttribute("data-unlocked")).toBe("false");

    const equipAccButtons = screen.getAllByRole("button", { name: "Equipar" });
    fireEvent.click(equipAccButtons[0]!);
    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY)).mascotAccessory).toBe(
      "terco-pequeno",
    );

    // Aba Cenários: equipa Jardim Tranquilo (desbloqueado em 20%) e interage com a Fonte do cenário
    fireEvent.click(screen.getByRole("tab", { name: "Cenários" }));
    const jardimCard = document.querySelector('[data-scenario-id="jardim-tranquilo"]');
    const bibliotecaCard = document.querySelector('[data-scenario-id="biblioteca"]');
    expect(jardimCard?.getAttribute("data-unlocked")).toBe("true");
    expect(bibliotecaCard?.getAttribute("data-unlocked")).toBe("false");

    const useScenarioButtons = screen.getAllByRole("button", { name: "Usar cenário" });
    fireEvent.click(useScenarioButtons[0]!);
    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY)).mascotScenario).toBe(
      "jardim-tranquilo",
    );

    fireEvent.click(screen.getByRole("button", { name: "Fonte de água viva" }));
    expect(screen.getByText("O som suave da fonte acalma nossos pensamentos.")).toBeInTheDocument();

    // Garante que todos os 5 cômodos e 7 cenários têm móveis/detalhes interagíveis
    expect(Object.keys(STAGE_PROPS_BY_SCENE)).toHaveLength(12);

    // Confirma que o XP do usuário permanece intacto
    expect(JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}").xp).toBe(150);
  });
});
