import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { AgnusWardrobeProvider } from "@/components/AgnusWardrobeProvider";
import { BibleProgressProvider } from "@/components/BibleProgressProvider";
import { GlobalMascot } from "@/components/GlobalMascot";
import { MeuAgnusArea } from "@/components/MeuAgnusArea";
import { ProfilePersonalization } from "@/components/ProfilePersonalization";
import { SettingsProvider } from "@/components/SettingsProvider";
import { LumenButton } from "@/components/ui/lumen-button";
import { useLocalProfile } from "@/hooks/use-local-profile";
import { LESSONS, UNITS } from "@/lib/lessons";
import {
  AGNUS_OUTFITS,
  AGNUS_WARDROBE_STORAGE_KEY,
  DEFAULT_AGNUS_OUTFIT_ID,
  MASCOT_ENABLED,
  MASCOT_MESSAGES,
  acknowledgeAgnusCelebrations,
  completionMascotEvent,
  emptyAgnusWardrobe,
  evaluateAgnusWardrobe,
  getAgnusCollections,
  getPendingCelebrationOutfits,
  parseAgnusWardrobe,
  routeMascotMoment,
  type AgnusOutfit,
} from "@/lib/mascot";
import { parseProfile, PROFILE_STORAGE_KEY } from "@/lib/profile";
import { PROGRESS_STORAGE_KEY } from "@/lib/progress";

describe("identidade e comportamento contextual do Agnus", () => {
  it("mantém desativado o mascote flutuante que perseguia a tela", () => {
    expect(MASCOT_ENABLED).toBe(false);
    const { container } = render(<GlobalMascot />);
    expect(container.firstChild).toBeNull();
  });

  it("cadastra as 11 ilustrações oficiais do Agnus (incluindo as 4 natalinas) com caminhos locais válidos", () => {
    const ids = AGNUS_OUTFITS.map((outfit) => outfit.id);
    expect(ids).toEqual([
      "original",
      "coroinha",
      "frade-franciscano",
      "monge-beneditino",
      "padre",
      "bispo",
      "papa",
      "anjinho",
      "pastor-belem",
      "sueter-natalino",
      "papai-noel",
    ]);
    for (const outfit of AGNUS_OUTFITS) {
      expect(outfit.imageSrc).toMatch(/^\/assets\/agnus\/.+\.png$/);
      expect(outfit.name.length).toBeGreaterThan(2);
    }
    expect(getAgnusCollections()).toEqual([
      "Essencial",
      "Vocações e Ministérios",
      "Especial de Natal",
    ]);
  });

  it("reserva o contexto de oração e dispõe de mensagens contextuais para o Agnus", () => {
    expect(routeMascotMoment("/oracoes/terco")).toBe("prayers");
    expect(routeMascotMoment("/licao/biblia")).toBe("lessonStart");
    for (const moment of [
      "home",
      "lessonStart",
      "correct",
      "incorrect",
      "lessonComplete",
      "pathComplete",
      "achievement",
      "prayers",
      "christmasComplete",
    ] as const) {
      expect(MASCOT_MESSAGES[moment].length).toBeGreaterThan(0);
    }
  });

  it("celebra conclusões da trilha sem alterar arrays originais", () => {
    const completed = ["jesus"];
    expect(completionMascotEvent(completed, "biblia")).toEqual({
      moment: "lessonComplete",
      special: true,
    });
    expect(completed).toEqual(["jesus"]);

    const unit = UNITS[0]!;
    const unitIds = unit.lessons.map((lesson) => lesson.id);
    expect(completionMascotEvent(unitIds.slice(0, -1), unitIds.at(-1)!).moment).toBe("achievement");

    const allIds = LESSONS.map((lesson) => lesson.id);
    expect(completionMascotEvent(allIds.slice(0, -1), allIds.at(-1)!).moment).toBe("pathComplete");
  });
});

describe("sistema escalável de roupinhas e desbloqueio por progresso", () => {
  it("inicia com a aparência clássica desbloqueada e sem celebrações falsas", () => {
    const initial = emptyAgnusWardrobe();
    expect(initial.unlockedIds).toEqual([DEFAULT_AGNUS_OUTFIT_ID]);
    expect(getPendingCelebrationOutfits(initial)).toEqual([]);
  });

  it("desbloqueia roupas da trilha, Bíblia e Especial de Natal sem duplicar recompensas", () => {
    const baseMetrics = { trackPercent: 0, biblePercent: 0, christmasPercent: 0, streakDays: 0 };
    const step1 = evaluateAgnusWardrobe(emptyAgnusWardrobe(), {
      ...baseMetrics,
      trackPercent: 10,
      biblePercent: 2,
    });
    expect(step1.newlyUnlocked.map((o) => o.id)).toEqual(["coroinha", "frade-franciscano"]);
    expect(step1.state.unlockedIds).toEqual(["original", "coroinha", "frade-franciscano"]);

    // Reavaliar as mesmas métricas não duplica nem reemite desbloqueios
    const repeat = evaluateAgnusWardrobe(step1.state, {
      ...baseMetrics,
      trackPercent: 12,
      biblePercent: 2.5,
    });
    expect(repeat.changed).toBe(false);
    expect(repeat.newlyUnlocked).toEqual([]);
    expect(repeat.state.unlockedIds).toEqual(["original", "coroinha", "frade-franciscano"]);

    // Avanços na trilha, Bíblia e trilha de Natal desbloqueiam todas as coleções
    const step2 = evaluateAgnusWardrobe(repeat.state, {
      ...baseMetrics,
      trackPercent: 65,
      biblePercent: 12,
      christmasPercent: 100,
    });
    expect(step2.newlyUnlocked.map((o) => o.id)).toEqual([
      "monge-beneditino",
      "padre",
      "bispo",
      "papa",
      "anjinho",
      "pastor-belem",
      "sueter-natalino",
      "papai-noel",
    ]);
    expect(step2.state.unlockedIds).toHaveLength(AGNUS_OUTFITS.length);

    // Reconhecer celebrações remove apenas os itens já celebrados
    const acknowledged = acknowledgeAgnusCelebrations(step2.state, ["coroinha", "padre"]);
    expect(getPendingCelebrationOutfits(acknowledged).map((o) => o.id)).toEqual([
      "frade-franciscano",
      "monge-beneditino",
      "bispo",
      "papa",
      "anjinho",
      "pastor-belem",
      "sueter-natalino",
      "papai-noel",
    ]);
  });

  it("desbloqueia gradualmente as 4 roupas natalinas conforme os marcos da trilha de Natal", () => {
    const step20 = evaluateAgnusWardrobe(emptyAgnusWardrobe(), {
      trackPercent: 0,
      biblePercent: 0,
      christmasPercent: 20,
      streakDays: 0,
    });
    expect(step20.newlyUnlocked.map((o) => o.id)).toEqual(["anjinho"]);

    const step50 = evaluateAgnusWardrobe(step20.state, {
      trackPercent: 0,
      biblePercent: 0,
      christmasPercent: 50,
      streakDays: 0,
    });
    expect(step50.newlyUnlocked.map((o) => o.id)).toEqual(["pastor-belem"]);

    const step80 = evaluateAgnusWardrobe(step50.state, {
      trackPercent: 0,
      biblePercent: 0,
      christmasPercent: 80,
      streakDays: 0,
    });
    expect(step80.newlyUnlocked.map((o) => o.id)).toEqual(["sueter-natalino"]);

    const step100 = evaluateAgnusWardrobe(step80.state, {
      trackPercent: 0,
      biblePercent: 0,
      christmasPercent: 100,
      streakDays: 0,
    });
    expect(step100.newlyUnlocked.map((o) => o.id)).toEqual(["papai-noel"]);
  });

  it("suporta novas coleções e requisitos futuros sem reescrever o motor", () => {
    const futureCatalog: AgnusOutfit[] = [
      ...AGNUS_OUTFITS,
      {
        id: "pascoa-ressurreicao",
        name: "Páscoa Florida",
        description: "Coleção futura de Páscoa.",
        collection: "Especial de Páscoa",
        imageSrc: "/assets/agnus/1794099002482_9f0c2cc8.png",
        requirement: { type: "streak-days", days: 7 },
        order: 99,
      },
    ];
    expect(getAgnusCollections(futureCatalog)).toContain("Especial de Páscoa");
    const evaluated = evaluateAgnusWardrobe(
      emptyAgnusWardrobe(),
      { trackPercent: 0, biblePercent: 0, christmasPercent: 0, streakDays: 10 },
      futureCatalog,
    );
    expect(evaluated.newlyUnlocked.map((o) => o.id)).toEqual(["pascoa-ressurreicao"]);
  });

  it("mantém a sanitização de armazenamento contra entradas inválidas ou duplicadas", () => {
    const parsed = parseAgnusWardrobe(
      JSON.stringify({
        unlockedIds: ["coroinha", "coroinha", "invalida"],
        celebratedIds: ["coroinha", "nao-existe"],
      }),
    );
    expect(parsed.unlockedIds).toEqual(["original", "coroinha"]);
    expect(parsed.celebratedIds).toEqual(["original", "coroinha"]);
  });
});

function OutfitEditor() {
  const { profile, saveProfile } = useLocalProfile();
  return (
    <>
      <output data-testid="editor-outfit">{profile.mascotOutfit}</output>
      <LumenButton
        onClick={() =>
          saveProfile({
            nickname: "Ana",
            symbol: "heart",
            level: null,
            topic: "Orações",
            mascotOutfit: "coroinha",
          })
        }
      >
        Salvar roupa
      </LumenButton>
    </>
  );
}

function CompanionProfile() {
  const { profile } = useLocalProfile();
  return (
    <>
      <output data-testid="companion-outfit">{profile.mascotOutfit}</output>
      <output data-testid="companion-name">{profile.mascotName}</output>
    </>
  );
}

function ProfileFormHarness() {
  const { profile, saveProfile } = useLocalProfile();
  return <ProfilePersonalization profile={profile} saveProfile={saveProfile} />;
}

describe("persistência, personalização de nome e guarda-roupa do Agnus", () => {
  beforeEach(() => localStorage.clear());
  afterEach(cleanup);

  it("preserva perfis antigos e faz fallback seguro de roupas, acessórios, cenários e nomes vazios", () => {
    expect(parseProfile('{"nickname":"Ana"}')).toMatchObject({
      mascotOutfit: "original",
      mascotAccessory: "none",
      mascotScenario: "padrao",
      mascotName: "Agnus",
    });
    expect(
      parseProfile(
        '{"mascotOutfit":"unknown","mascotAccessory":"fake","mascotScenario":"fake","mascotName":"   "}',
      ),
    ).toMatchObject({
      mascotOutfit: "original",
      mascotAccessory: "none",
      mascotScenario: "padrao",
      mascotName: "Agnus",
    });
    expect(parseProfile('{"mascotOutfit":"papai-noel","mascotName":"  Bento  "}')).toMatchObject({
      mascotOutfit: "papai-noel",
      mascotName: "Bento",
    });
  });

  it("sincroniza a roupa equipada sem alterar lições, Bíblia nem XP", () => {
    localStorage.setItem(
      PROFILE_STORAGE_KEY,
      '{"nickname":"Ana","source":"Paróquia","sacraments":["Batismo"]}',
    );
    localStorage.setItem("lumen-progress", '{"xp":25,"completed":["biblia"]}');
    localStorage.setItem("lumen-bible-progress", '{"readChapters":["joao:3"]}');
    const view = render(
      <>
        <OutfitEditor />
        <CompanionProfile />
      </>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Salvar roupa" }));
    expect(screen.getByTestId("companion-outfit")).toHaveTextContent("coroinha");
    view.unmount();
    render(<CompanionProfile />);
    expect(screen.getByTestId("companion-outfit")).toHaveTextContent("coroinha");
    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY))).toMatchObject({
      source: "Paróquia",
      sacraments: ["Batismo"],
      mascotOutfit: "coroinha",
      mascotName: "Agnus",
    });
    expect(localStorage.getItem("lumen-progress")).toBe('{"xp":25,"completed":["biblia"]}');
    expect(localStorage.getItem("lumen-bible-progress")).toBe('{"readChapters":["joao:3"]}');
  });

  it("permite renomear o mascote, restaurar o nome padrão e equipar roupas mantendo tudo ao editar o perfil", () => {
    const enoughLessons = LESSONS.slice(0, Math.ceil(LESSONS.length * 0.15)).map((l) => l.id);
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({ nickname: "Maria" }));
    localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify({ xp: 80, completed: enoughLessons }),
    );

    render(
      <SettingsProvider>
        <BibleProgressProvider>
          <AgnusWardrobeProvider>
            <MeuAgnusArea />
            <ProfileFormHarness />
            <CompanionProfile />
          </AgnusWardrobeProvider>
        </BibleProgressProvider>
      </SettingsProvider>,
    );

    expect(screen.getByText(/2 de 11 roupinhas desbloqueadas/i)).toBeInTheDocument();
    expect(screen.getByText("Conclua 30% da trilha de aprendizado")).toBeInTheDocument();
    expect(screen.getByText("Leia 2% da Bíblia Sagrada")).toBeInTheDocument();
    expect(screen.getByText("Conclua 20% do Especial de Natal")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Especial de Natal" })).toBeInTheDocument();

    // Equipa uma roupa conquistada na aba Roupas
    const equipButtons = screen.getAllByRole("button", { name: "Equipar" });
    expect(equipButtons.length).toBeGreaterThanOrEqual(1);
    fireEvent.click(equipButtons[0]!);

    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY)).mascotOutfit).toBe("coroinha");
    expect(
      parseAgnusWardrobe(localStorage.getItem(AGNUS_WARDROBE_STORAGE_KEY)).unlockedIds,
    ).toContain("coroinha");

    // Renomeia o mascote na aba Nome do Meu Agnus
    fireEvent.click(screen.getByRole("tab", { name: "Nome" }));
    const mascotNameInput = screen.getByLabelText("Nome do mascote");
    fireEvent.change(mascotNameInput, { target: { value: "Cordeirinho Bento" } });
    fireEvent.click(screen.getByRole("button", { name: "Salvar nome" }));
    expect(screen.getByTestId("companion-name")).toHaveTextContent("Cordeirinho Bento");
    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY)).mascotName).toBe(
      "Cordeirinho Bento",
    );

    // Editar o apelido no formulário pessoal mantém tanto a roupa quanto o nome do mascote
    const nicknameInput = screen.getByLabelText("Nome ou apelido");
    fireEvent.change(nicknameInput, { target: { value: "Maria Clara" } });
    fireEvent.click(screen.getByRole("button", { name: "Salvar preferências" }));

    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY))).toMatchObject({
      nickname: "Maria Clara",
      mascotOutfit: "coroinha",
      mascotName: "Cordeirinho Bento",
    });

    // Restaura o nome padrão "Agnus" pelo botão da seção
    fireEvent.click(screen.getByRole("button", { name: "Restaurar Agnus" }));
    expect(screen.getByTestId("companion-name")).toHaveTextContent("Agnus");
    expect(parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY)).mascotName).toBe("Agnus");
  });
});
