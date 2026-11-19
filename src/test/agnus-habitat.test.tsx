import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { AgnusWardrobeProvider } from "@/components/AgnusWardrobeProvider";
import { AgnusWardrobeSection } from "@/components/AgnusWardrobeSection";
import { BibleProgressProvider } from "@/components/BibleProgressProvider";
import { SettingsProvider } from "@/components/SettingsProvider";
import {
  AGNUS_ACCESSORIES,
  AGNUS_PROGRESSION_CONFIG,
  TOUCH_REACTIONS,
  computeJourneyPercent,
  contextualBaseAnimation,
  getUnlockedAccessoryIds,
  pickNextTouchReaction,
} from "@/lib/agnus-habitat";
import { CHRISTMAS_STORAGE_KEY } from "@/lib/christmas";
import { LESSONS } from "@/lib/lessons";
import { parseProfile, PROFILE_STORAGE_KEY } from "@/lib/profile";
import { PROGRESS_STORAGE_KEY } from "@/lib/progress";

describe("sistema de progressão combinada, acessórios e animações do Agnus", () => {
  it("calcula a porcentagem combinada da jornada de forma configurável", () => {
    expect(AGNUS_PROGRESSION_CONFIG.trackWeight + AGNUS_PROGRESSION_CONFIG.bibleWeight).toBeCloseTo(
      1,
    );
    expect(computeJourneyPercent(0, 0)).toBe(0);
    expect(computeJourneyPercent(40, 20)).toBe(30);
    expect(computeJourneyPercent(100, 100)).toBe(100);
  });

  it("respeita rigorosamente a cadência de 10% a 100% para acessórios sem desbloqueios antecipados", () => {
    const empty = { trackPercent: 0, biblePercent: 0, christmasPercent: 0, journeyPercent: 0 };
    expect(getUnlockedAccessoryIds(empty)).toEqual(["none"]);

    const at10 = { trackPercent: 20, biblePercent: 0, christmasPercent: 0, journeyPercent: 10 };
    expect(getUnlockedAccessoryIds(at10)).toEqual(["none", "terco-pequeno"]);

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

    const at100 = {
      trackPercent: 100,
      biblePercent: 100,
      christmasPercent: 100,
      journeyPercent: 100,
    };
    expect(getUnlockedAccessoryIds(at100)).toHaveLength(AGNUS_ACCESSORIES.length);
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

describe("personalização do Agnus na Conta (roupas, acessórios e próximos desbloqueios)", () => {
  beforeEach(() => localStorage.clear());
  afterEach(cleanup);

  it("permite equipar acessórios desbloqueados na aba Acessórios sem alterar o XP", () => {
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

    render(
      <SettingsProvider>
        <BibleProgressProvider>
          <AgnusWardrobeProvider>
            <AgnusWardrobeSection />
          </AgnusWardrobeProvider>
        </BibleProgressProvider>
      </SettingsProvider>,
    );

    expect(screen.getByRole("heading", { name: /Personalização do Agnus/i })).toBeInTheDocument();
    expect(screen.queryByRole("tab", { name: "Acessórios" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Personalizar" }));

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

    fireEvent.click(screen.getByRole("tab", { name: "Próximos" }));
    expect(screen.getByText(/Resumo da coleção/i)).toBeInTheDocument();

    expect(JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}").xp).toBe(150);
  });
});
