import { getLessonUnit, LESSONS } from "@/lib/lessons";

/**
 * Floating viewport-chasing mascot overlay stays disabled permanently so Agnus
 * lives naturally inside page layouts without chasing the user or covering UI.
 */
export const MASCOT_ENABLED = false;

export const AGNUS_NAME = "Agnus";
export const DEFAULT_AGNUS_OUTFIT_ID = "original";
export const AGNUS_WARDROBE_STORAGE_KEY = "lumen-agnus-wardrobe";
export const AGNUS_WARDROBE_CHANGED_EVENT = "lumen-agnus-wardrobe-changed";

export type AgnusOutfitRequirement =
  | { type: "starter" }
  | { type: "track-percent"; percent: number }
  | { type: "bible-percent"; percent: number }
  | { type: "christmas-percent"; percent: number }
  | { type: "streak-days"; days: number }
  | { type: "special"; label: string };

export type AgnusOutfit = {
  id: string;
  name: string;
  description: string;
  collection: string;
  imageSrc: string;
  requirement: AgnusOutfitRequirement;
  order: number;
};

/**
 * Scalable wardrobe catalog for Agnus.
 * Add new outfits or new themed collections here without modifying UI or storage logic.
 */
export const AGNUS_OUTFITS: readonly AgnusOutfit[] = [
  {
    id: "original",
    name: "Agnus Clássico",
    description: "O cordeirinho companheiro do Lumen em sua aparência original.",
    collection: "Essencial",
    imageSrc: "/assets/agnus/1794099002482_9f0c2cc8.png",
    requirement: { type: "starter" },
    order: 1,
  },
  {
    id: "coroinha",
    name: "Coroinha",
    description: "Com túnica e sobrepeliz para servir com alegria ao redor do altar.",
    collection: "Vocações e Ministérios",
    imageSrc: "/assets/agnus/1794099503371_1bfe5905.png",
    requirement: { type: "track-percent", percent: 10 },
    order: 2,
  },
  {
    id: "frade-franciscano",
    name: "Frade Franciscano",
    description: "Hábito marrom com cordão de três nós, em espírito de simplicidade e paz.",
    collection: "Vocações e Ministérios",
    imageSrc: "/assets/agnus/1794099683607_4310d8bc.png",
    requirement: { type: "bible-percent", percent: 2 },
    order: 3,
  },
  {
    id: "monge-beneditino",
    name: "Monge Beneditino",
    description: "Hábito escuro monástico inspirado no lema ora et labora: rezar e aprender.",
    collection: "Vocações e Ministérios",
    imageSrc: "/assets/agnus/1794100053046_bf6dd679.png",
    requirement: { type: "track-percent", percent: 30 },
    order: 4,
  },
  {
    id: "padre",
    name: "Padre",
    description: "Batina clerical com colarinho branco, dedicada ao cuidado pastoral.",
    collection: "Vocações e Ministérios",
    imageSrc: "/assets/agnus/1794100451348_5cd0688f.png",
    requirement: { type: "bible-percent", percent: 5 },
    order: 5,
  },
  {
    id: "bispo",
    name: "Bispo",
    description: "Solidéu violáceo, cruz peitoral e faixa episcopal do sucessor dos apóstolos.",
    collection: "Vocações e Ministérios",
    imageSrc: "/assets/agnus/1794100574135_6267111d.png",
    requirement: { type: "track-percent", percent: 60 },
    order: 6,
  },
  {
    id: "papa",
    name: "Papa",
    description: "Batina branca, mozetta, pálio e as chaves de São Pedro.",
    collection: "Vocações e Ministérios",
    imageSrc: "/assets/agnus/1794100734004_040cada9.png",
    requirement: { type: "bible-percent", percent: 10 },
    order: 7,
  },
  {
    id: "anjinho",
    name: "Anjinho",
    description: "Túnica branca, asinhas e auréola para anunciar a alegria de Belém.",
    collection: "Especial de Natal",
    imageSrc: "/assets/agnus/1794146572612_cb87e7a2.png",
    requirement: { type: "christmas-percent", percent: 20 },
    order: 8,
  },
  {
    id: "pastor-belem",
    name: "Pastor de Belém",
    description: "Manto simples de pastor com cajado e túnica para vigiar sob as estrelas.",
    collection: "Especial de Natal",
    imageSrc: "/assets/agnus/1794147128057_e9e1d55e.png",
    requirement: { type: "christmas-percent", percent: 50 },
    order: 9,
  },
  {
    id: "sueter-natalino",
    name: "Suéter Natalino",
    description: "Suéter tricotado de inverno e gorro festivo para celebrar o Natal.",
    collection: "Especial de Natal",
    imageSrc: "/assets/agnus/1794147044415_00c6b1f9.png",
    requirement: { type: "christmas-percent", percent: 80 },
    order: 10,
  },
  {
    id: "papai-noel",
    name: "Papai Noel",
    description: "Traje festivo completo conquistado ao concluir a jornada de Natal.",
    collection: "Especial de Natal",
    imageSrc: "/assets/agnus/1794146957430_8c360837.png",
    requirement: { type: "christmas-percent", percent: 100 },
    order: 11,
  },
];

export const MASCOT_OUTFITS = AGNUS_OUTFITS.map((outfit) => outfit.id);
export type MascotOutfit = string;

export const OUTFIT_LABELS: Record<string, string> = Object.fromEntries(
  AGNUS_OUTFITS.map((outfit) => [outfit.id, outfit.name]),
);

export function isKnownAgnusOutfit(id: unknown): id is string {
  return typeof id === "string" && AGNUS_OUTFITS.some((outfit) => outfit.id === id);
}

export function getAgnusOutfit(id?: string | null): AgnusOutfit {
  return (
    AGNUS_OUTFITS.find((outfit) => outfit.id === id) ??
    AGNUS_OUTFITS.find((outfit) => outfit.id === DEFAULT_AGNUS_OUTFIT_ID) ??
    AGNUS_OUTFITS[0]!
  );
}

export function getAgnusCollections(outfits: readonly AgnusOutfit[] = AGNUS_OUTFITS): string[] {
  return [...new Set(outfits.map((outfit) => outfit.collection))];
}

export type AgnusProgressMetrics = {
  trackPercent: number;
  biblePercent: number;
  christmasPercent: number;
  streakDays: number;
};

export type RequirementProgress = {
  met: boolean;
  current: number;
  target: number;
  ratioPercent: number;
  label: string;
  shortLabel: string;
};

function clampPercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value * 10) / 10));
}

export function evaluateRequirement(
  requirement: AgnusOutfitRequirement,
  metrics: AgnusProgressMetrics,
): RequirementProgress {
  switch (requirement.type) {
    case "starter":
      return {
        met: true,
        current: 100,
        target: 100,
        ratioPercent: 100,
        label: "Disponível desde o início",
        shortLabel: "Inicial",
      };
    case "track-percent": {
      const current = clampPercent(metrics.trackPercent);
      const target = Math.max(1, requirement.percent);
      const ratioPercent = Math.min(100, Math.round((current / target) * 1000) / 10);
      return {
        met: current >= target,
        current,
        target,
        ratioPercent,
        label: `Conclua ${target}% da trilha de aprendizado`,
        shortLabel: `${target}% da trilha`,
      };
    }
    case "bible-percent": {
      const current = clampPercent(metrics.biblePercent);
      const target = Math.max(1, requirement.percent);
      const ratioPercent = Math.min(100, Math.round((current / target) * 1000) / 10);
      return {
        met: current >= target,
        current,
        target,
        ratioPercent,
        label: `Leia ${target}% da Bíblia Sagrada`,
        shortLabel: `${target}% da Bíblia`,
      };
    }
    case "christmas-percent": {
      const current = clampPercent(metrics.christmasPercent);
      const target = Math.max(1, requirement.percent);
      const ratioPercent = Math.min(100, Math.round((current / target) * 1000) / 10);
      return {
        met: current >= target,
        current,
        target,
        ratioPercent,
        label: `Conclua ${target}% do Especial de Natal`,
        shortLabel: `${target}% do Especial de Natal`,
      };
    }
    case "streak-days": {
      const current = Math.max(0, Math.floor(metrics.streakDays));
      const target = Math.max(1, Math.floor(requirement.days));
      const ratioPercent = Math.min(100, Math.round((current / target) * 1000) / 10);
      return {
        met: current >= target,
        current,
        target,
        ratioPercent,
        label: `Alcance ${target} dias de sequência`,
        shortLabel: `${target} dias seguidos`,
      };
    }
    case "special":
      return {
        met: false,
        current: 0,
        target: 100,
        ratioPercent: 0,
        label: requirement.label,
        shortLabel: requirement.label,
      };
  }
}

export type AgnusWardrobeState = {
  unlockedIds: string[];
  unlockedAt: Record<string, string>;
  celebratedIds: string[];
};

export function emptyAgnusWardrobe(): AgnusWardrobeState {
  return {
    unlockedIds: [DEFAULT_AGNUS_OUTFIT_ID],
    unlockedAt: {},
    celebratedIds: [DEFAULT_AGNUS_OUTFIT_ID],
  };
}

export function parseAgnusWardrobe(raw: string | null): AgnusWardrobeState {
  const fallback = emptyAgnusWardrobe();
  try {
    const value: unknown = JSON.parse(raw ?? "null");
    if (!value || typeof value !== "object" || Array.isArray(value)) return fallback;
    const data = value as Record<string, unknown>;
    const unlockedRaw = Array.isArray(data["unlockedIds"])
      ? data["unlockedIds"].filter(isKnownAgnusOutfit)
      : [];
    const unlockedIds = [...new Set([DEFAULT_AGNUS_OUTFIT_ID, ...unlockedRaw])];

    const celebratedRaw = Array.isArray(data["celebratedIds"])
      ? data["celebratedIds"].filter(isKnownAgnusOutfit)
      : [];
    const celebratedIds = [
      ...new Set([
        DEFAULT_AGNUS_OUTFIT_ID,
        ...celebratedRaw.filter((id) => unlockedIds.includes(id)),
      ]),
    ];

    const unlockedAt: Record<string, string> = {};
    if (
      data["unlockedAt"] &&
      typeof data["unlockedAt"] === "object" &&
      !Array.isArray(data["unlockedAt"])
    ) {
      for (const [key, val] of Object.entries(data["unlockedAt"] as Record<string, unknown>)) {
        if (isKnownAgnusOutfit(key) && unlockedIds.includes(key) && typeof val === "string") {
          unlockedAt[key] = val;
        }
      }
    }

    return { unlockedIds, unlockedAt, celebratedIds };
  } catch {
    return fallback;
  }
}

export function evaluateAgnusWardrobe(
  state: AgnusWardrobeState,
  metrics: AgnusProgressMetrics,
  outfits: readonly AgnusOutfit[] = AGNUS_OUTFITS,
  nowIso: string = new Date().toISOString(),
): { state: AgnusWardrobeState; newlyUnlocked: AgnusOutfit[]; changed: boolean } {
  const knownUnlocked = new Set([DEFAULT_AGNUS_OUTFIT_ID, ...state.unlockedIds]);
  const newlyUnlocked: AgnusOutfit[] = [];
  const nextUnlockedAt = { ...state.unlockedAt };

  for (const outfit of outfits) {
    if (knownUnlocked.has(outfit.id)) continue;
    const check = evaluateRequirement(outfit.requirement, metrics);
    if (check.met) {
      knownUnlocked.add(outfit.id);
      nextUnlockedAt[outfit.id] = nextUnlockedAt[outfit.id] ?? nowIso;
      newlyUnlocked.push(outfit);
    }
  }

  const celebratedSet = new Set([DEFAULT_AGNUS_OUTFIT_ID, ...state.celebratedIds]);
  const nextUnlockedIds = [...knownUnlocked];
  const nextCelebratedIds = [...celebratedSet];

  const changed =
    newlyUnlocked.length > 0 ||
    nextUnlockedIds.length !== state.unlockedIds.length ||
    nextCelebratedIds.length !== state.celebratedIds.length;

  return {
    state: {
      unlockedIds: nextUnlockedIds,
      unlockedAt: nextUnlockedAt,
      celebratedIds: nextCelebratedIds,
    },
    newlyUnlocked,
    changed,
  };
}

export function acknowledgeAgnusCelebrations(
  state: AgnusWardrobeState,
  ids: readonly string[],
): AgnusWardrobeState {
  const validIds = ids.filter((id) => state.unlockedIds.includes(id));
  const nextCelebrated = [
    ...new Set([...state.celebratedIds, DEFAULT_AGNUS_OUTFIT_ID, ...validIds]),
  ];
  if (nextCelebrated.length === state.celebratedIds.length) return state;
  return {
    ...state,
    celebratedIds: nextCelebrated,
  };
}

export function getPendingCelebrationOutfits(
  state: AgnusWardrobeState,
  outfits: readonly AgnusOutfit[] = AGNUS_OUTFITS,
): AgnusOutfit[] {
  const celebrated = new Set([DEFAULT_AGNUS_OUTFIT_ID, ...state.celebratedIds]);
  const unlocked = new Set(state.unlockedIds);
  return outfits.filter((outfit) => unlocked.has(outfit.id) && !celebrated.has(outfit.id));
}

export function getNextUnlockableOutfit(
  state: AgnusWardrobeState,
  metrics: AgnusProgressMetrics,
  requirementType?: "track-percent" | "bible-percent" | "christmas-percent",
  outfits: readonly AgnusOutfit[] = AGNUS_OUTFITS,
): { outfit: AgnusOutfit; progress: RequirementProgress } | null {
  const unlocked = new Set(state.unlockedIds);
  const candidates = outfits
    .filter((outfit) => !unlocked.has(outfit.id))
    .filter((outfit) => !requirementType || outfit.requirement.type === requirementType)
    .map((outfit) => ({
      outfit,
      progress: evaluateRequirement(outfit.requirement, metrics),
    }));

  if (candidates.length === 0) return null;
  candidates.sort(
    (a, b) => b.progress.ratioPercent - a.progress.ratioPercent || a.outfit.order - b.outfit.order,
  );
  return candidates[0] ?? null;
}

export type MascotMoment =
  | "home"
  | "welcome"
  | "lessonStart"
  | "correct"
  | "incorrect"
  | "lessonComplete"
  | "pathComplete"
  | "achievement"
  | "newUnit"
  | "prayers"
  | "bible"
  | "museum"
  | "account"
  | "path"
  | "library"
  | "christmasComplete";

export type MascotEvent = { moment: MascotMoment; label?: string; special?: boolean; key?: string };

export const MASCOT_MESSAGES: Record<MascotMoment, readonly string[]> = {
  home: [
    "Que bom caminhar com você hoje! Vamos dar mais um passo na fé?",
    "Cada capítulo lido e cada lição concluída fortalecem a sua jornada.",
    "Estou por aqui acompanhando o seu ritmo, com calma e alegria.",
  ],
  welcome: ["Eu sou o Agnus! Será uma alegria caminhar com você no Lumen."],
  lessonStart: [
    "Leia o ensinamento com atenção antes de responder às perguntas.",
    "Um novo tema começa. Vamos aprender com tranquilidade!",
  ],
  correct: [
    "Muito bem! Você compreendeu esse ensinamento.",
    "Isso mesmo! Mais um passo firme na caminhada.",
  ],
  incorrect: [
    "Errar faz parte do aprendizado. Leia a explicação com calma!",
    "Tudo bem errar uma vez — o importante é compreender o sentido da fé.",
  ],
  lessonComplete: [
    "Lição concluída! Que alegria aprender junto com você.",
    "Mais uma etapa vencida na sua caminhada católica!",
  ],
  pathComplete: ["Você concluiu toda a trilha de estudos! Que essa sabedoria ilumine seus dias."],
  achievement: [
    "Unidade concluída! Que bonito ver a sua constância no aprendizado.",
    "Parabéns por concluir mais esta unidade!",
  ],
  newUnit: ["Uma nova unidade começou! Vamos descobrir novos tesouros da fé."],
  prayers: [
    "Vamos rezar com calma, no seu ritmo.",
    "Este é um momento de encontro e silêncio com Deus.",
  ],
  bible: [
    "A Palavra de Deus é luz para o caminho. Leia um capítulo de cada vez!",
    "Cada capítulo lido da Bíblia aproxima você das próximas roupinhas.",
  ],
  museum: [
    "A história da Igreja está cheia de testemunhos vivos e arte sacra.",
    "Vale a pena conhecer os detalhes de cada obra e tradição.",
  ],
  account: [
    "Aqui você acompanha seu avanço e escolhe as minhas roupinhas!",
    "Suas conquistas na trilha e na Bíblia ficam guardadas aqui.",
  ],
  path: [
    "Cada unidade traz um ensinamento novo. Avance no seu tempo.",
    "Vamos continuar explorando a fé católica?",
  ],
  library: [
    "Aqui reunimos a Bíblia, as orações, o calendário e o Museu Católico.",
    "Que seção vamos visitar agora?",
  ],
  christmasComplete: [
    "Capítulo natalino concluído! Contemplar o mistério do Natal renova a esperança.",
  ],
};

export function routeMascotMoment(pathname: string): MascotMoment {
  if (pathname.startsWith("/oracoes") || pathname.startsWith("/calendario")) return "prayers";
  if (pathname.startsWith("/licao/")) return "lessonStart";
  if (pathname.startsWith("/biblia")) return "bible";
  if (pathname.startsWith("/museu")) return "museum";
  if (pathname === "/perfil") return "account";
  if (pathname === "/trilha") return "path";
  if (pathname === "/biblioteca") return "library";
  return "home";
}

/** Presentation events only: never awards XP or writes learning progress. */
export function completionMascotEvent(completed: readonly string[], lessonId: string): MascotEvent {
  const known = new Set(completed);
  const first = !known.has(lessonId);
  known.add(lessonId);
  if (first && LESSONS.every((lesson) => known.has(lesson.id)))
    return { moment: "pathComplete", special: true };
  const unit = getLessonUnit(lessonId);
  if (first && unit?.lessons.every((lesson) => known.has(lesson.id)))
    return { moment: "achievement", label: unit.title, special: true };
  return { moment: "lessonComplete", special: true };
}

export type MascotRect = { x: number; y: number; width: number; height: number };
export function rectsOverlap(a: MascotRect, b: MascotRect, gap = 4) {
  return (
    a.x < b.x + b.width + gap &&
    a.x + a.width + gap > b.x &&
    a.y < b.y + b.height + gap &&
    a.y + a.height + gap > b.y
  );
}

/** Legacy geometry helper kept exported for compatibility tests. */
export function findMascotSlot(
  width: number,
  height: number,
  bottom: number,
  size: { width: number; height: number },
  obstacles: MascotRect[],
): MascotRect | null {
  const x = width - size.width - 12;
  for (let y = height - bottom - size.height; y >= 64; y -= 4) {
    const candidate = { x, y, ...size };
    if (x >= 0 && !obstacles.some((rect) => rectsOverlap(candidate, rect))) return candidate;
  }
  return null;
}
