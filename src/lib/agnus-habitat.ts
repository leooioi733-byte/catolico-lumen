export type AgnusProgressionConfig = {
  trackWeight: number;
  bibleWeight: number;
};

/**
 * Configurable progression weights used to compute combined journey completion.
 * Adjusting these weights or milestone thresholds does not require UI rewrites.
 */
export const AGNUS_PROGRESSION_CONFIG: AgnusProgressionConfig = {
  trackWeight: 0.5,
  bibleWeight: 0.5,
};

export function computeJourneyPercent(
  trackPercent: number,
  biblePercent: number,
  config: AgnusProgressionConfig = AGNUS_PROGRESSION_CONFIG,
): number {
  const safeTrack = Number.isFinite(trackPercent) ? Math.max(0, Math.min(100, trackPercent)) : 0;
  const safeBible = Number.isFinite(biblePercent) ? Math.max(0, Math.min(100, biblePercent)) : 0;
  const weightSum = config.trackWeight + config.bibleWeight;
  if (weightSum <= 0) return 0;
  const raw = (safeTrack * config.trackWeight + safeBible * config.bibleWeight) / weightSum;
  return Math.max(0, Math.min(100, Math.round(raw * 10) / 10));
}

export type AgnusUnlockRule =
  | { type: "starter" }
  | { type: "journey-percent"; percent: number }
  | { type: "track-percent"; percent: number }
  | { type: "bible-percent"; percent: number }
  | { type: "christmas-percent"; percent: number };

export type AgnusAccessory = {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Optional custom asset URL when user-provided artwork is added later. */
  imageSrc?: string;
  requirement: AgnusUnlockRule;
  order: number;
};

export const DEFAULT_AGNUS_ACCESSORY_ID = "none";

/**
 * Scalable special accessories catalog aligned to configurable journey milestones.
 * Odd 10% steps (10%, 30%, 50%, 70%, 90%) + 100% completion crown unlock accessories/special items.
 */
export const AGNUS_ACCESSORIES: readonly AgnusAccessory[] = [
  {
    id: "none",
    name: "Sem acessório",
    category: "Padrão",
    description: "Visual natural do seu companheiro sem adereços extras.",
    requirement: { type: "starter" },
    order: 0,
  },
  {
    id: "terco-pequeno",
    name: "Pequeno Terço",
    category: "Acessório especial",
    description: "Pequenas contas de oração com cruzinha dourada ao lado de Agnus.",
    requirement: { type: "journey-percent", percent: 10 },
    order: 1,
  },
  {
    id: "livrinho-fe",
    name: "Livrinho da Fé",
    category: "Acessório especial",
    description: "Pequeno livro aberto com marcador carmesim para acompanhar os estudos.",
    requirement: { type: "journey-percent", percent: 30 },
    order: 2,
  },
  {
    id: "estrela-belem",
    name: "Estrela Dourada",
    category: "Item especial",
    description: "Emblema luminoso em ouro suave inspirado na Estrela de Belém.",
    requirement: { type: "journey-percent", percent: 50 },
    order: 3,
  },
  {
    id: "mochila-peregrino",
    name: "Mochila de Peregrino",
    category: "Acessório especial",
    description: "Pequena bolsa de caminhada com fivela dourada para longas trilhas.",
    requirement: { type: "journey-percent", percent: 70 },
    order: 4,
  },
  {
    id: "aureola-luz",
    name: "Halo de Luz",
    category: "Item especial",
    description: "Círculo dourado suave que ilumina Agnus em momentos de contemplação.",
    requirement: { type: "journey-percent", percent: 90 },
    order: 5,
  },
  {
    id: "coroa-jubileu",
    name: "Coroa Lumen 100%",
    category: "Recompensa exclusiva",
    description: "Diadema dourado exclusivo para celebrar a conclusão integral da jornada.",
    requirement: { type: "journey-percent", percent: 100 },
    order: 6,
  },
];

export type AgnusScenario = {
  id: string;
  name: string;
  description: string;
  /** Optional custom asset URL when scenic art is supplied later. */
  imageSrc?: string;
  requirement: AgnusUnlockRule;
  order: number;
};

export const DEFAULT_AGNUS_SCENARIO_ID = "padrao";

/**
 * Unlockable scenic backdrops aligned to even 20% steps (20%, 40%, 60%, 80%, 100%) + Christmas bonus.
 */
export const AGNUS_SCENARIOS: readonly AgnusScenario[] = [
  {
    id: "padrao",
    name: "Santuário Acolhedor",
    description: "Ambiente clássico em creme, grená e dourado para iniciar a caminhada.",
    requirement: { type: "starter" },
    order: 0,
  },
  {
    id: "jardim-tranquilo",
    name: "Jardim Tranquilo",
    description: "Caminho de pedras sereno entre oliveiras e céu ameno.",
    requirement: { type: "journey-percent", percent: 20 },
    order: 1,
  },
  {
    id: "biblioteca",
    name: "Biblioteca Sagrada",
    description: "Estantes de carvalho, pergaminhos antigos e luminária acolhedora.",
    requirement: { type: "journey-percent", percent: 40 },
    order: 2,
  },
  {
    id: "campo-florido",
    name: "Campo Florido",
    description: "Colinas verdes iluminadas ao entardecer com flores campestres.",
    requirement: { type: "journey-percent", percent: 60 },
    order: 3,
  },
  {
    id: "ambiente-estudos",
    name: "Ambiente de Estudos",
    description: "Mesa de catequese com Bíblia aberta, vela acesa e caderno de notas.",
    requirement: { type: "journey-percent", percent: 80 },
    order: 4,
  },
  {
    id: "noite-belem",
    name: "Noite de Belém",
    description: "Cenário especial de Natal sob céu estrelado e silhueta de Belém.",
    requirement: { type: "christmas-percent", percent: 50 },
    order: 5,
  },
  {
    id: "jardim-celestial",
    name: "Jardim Celestial (100%)",
    description: "Recompensa exclusiva de conclusão com arco luminoso e luz dourada.",
    requirement: { type: "journey-percent", percent: 100 },
    order: 6,
  },
];

export type HabitatProgressMetrics = {
  trackPercent: number;
  biblePercent: number;
  christmasPercent: number;
  journeyPercent: number;
};

export type UnlockStatus = {
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

export function evaluateHabitatRule(
  rule: AgnusUnlockRule,
  metrics: HabitatProgressMetrics,
): UnlockStatus {
  switch (rule.type) {
    case "starter":
      return {
        met: true,
        current: 100,
        target: 100,
        ratioPercent: 100,
        label: "Disponível desde o início",
        shortLabel: "Inicial",
      };
    case "journey-percent": {
      const current = clampPercent(metrics.journeyPercent);
      const target = Math.max(1, rule.percent);
      const ratioPercent = Math.min(100, Math.round((current / target) * 1000) / 10);
      return {
        met: current >= target,
        current,
        target,
        ratioPercent,
        label: `Alcance ${target}% na Bíblia e Trilha`,
        shortLabel: `${target}% geral`,
      };
    }
    case "track-percent": {
      const current = clampPercent(metrics.trackPercent);
      const target = Math.max(1, rule.percent);
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
      const target = Math.max(1, rule.percent);
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
      const target = Math.max(1, rule.percent);
      const ratioPercent = Math.min(100, Math.round((current / target) * 1000) / 10);
      return {
        met: current >= target,
        current,
        target,
        ratioPercent,
        label: `Conclua ${target}% do Especial de Natal`,
        shortLabel: `${target}% do Natal`,
      };
    }
  }
}

export function isKnownAccessoryId(id: unknown): id is string {
  return typeof id === "string" && AGNUS_ACCESSORIES.some((item) => item.id === id);
}

export function getAgnusAccessory(id?: string | null): AgnusAccessory {
  return (
    AGNUS_ACCESSORIES.find((item) => item.id === id) ??
    AGNUS_ACCESSORIES.find((item) => item.id === DEFAULT_AGNUS_ACCESSORY_ID) ??
    AGNUS_ACCESSORIES[0]!
  );
}

export function isKnownScenarioId(id: unknown): id is string {
  return typeof id === "string" && AGNUS_SCENARIOS.some((item) => item.id === id);
}

export function getAgnusScenario(id?: string | null): AgnusScenario {
  return (
    AGNUS_SCENARIOS.find((item) => item.id === id) ??
    AGNUS_SCENARIOS.find((item) => item.id === DEFAULT_AGNUS_SCENARIO_ID) ??
    AGNUS_SCENARIOS[0]!
  );
}

export function getUnlockedAccessoryIds(
  metrics: HabitatProgressMetrics,
  accessories: readonly AgnusAccessory[] = AGNUS_ACCESSORIES,
): string[] {
  return accessories
    .filter((item) => evaluateHabitatRule(item.requirement, metrics).met)
    .map((item) => item.id);
}

export function getUnlockedScenarioIds(
  metrics: HabitatProgressMetrics,
  scenarios: readonly AgnusScenario[] = AGNUS_SCENARIOS,
): string[] {
  return scenarios
    .filter((item) => evaluateHabitatRule(item.requirement, metrics).met)
    .map((item) => item.id);
}

export function getNextLockedReward<
  T extends { id: string; requirement: AgnusUnlockRule; order: number },
>(
  items: readonly T[],
  unlockedIds: readonly string[],
  metrics: HabitatProgressMetrics,
): { item: T; progress: UnlockStatus } | null {
  const unlocked = new Set(unlockedIds);
  const candidates = items
    .filter((item) => !unlocked.has(item.id))
    .map((item) => ({ item, progress: evaluateHabitatRule(item.requirement, metrics) }));
  if (candidates.length === 0) return null;
  candidates.sort(
    (a, b) => b.progress.ratioPercent - a.progress.ratioPercent || a.item.order - b.item.order,
  );
  return candidates[0] ?? null;
}

/* -------------------------------------------------------------------------- */
/* Contextual Animations & Touch Reactions                                     */
/* -------------------------------------------------------------------------- */

export type AgnusContext = "home" | "lesson" | "celebration" | "track" | "rosary";

export type AgnusAnimation =
  | "resting"
  | "observing"
  | "waving"
  | "reading"
  | "celebrating"
  | "welcoming"
  | "contemplative"
  | "sleeping"
  | "blink-ears"
  | "hop"
  | "surprise"
  | "sit"
  | "twirl"
  | "happy-dance"
  | "eating"
  | "playing"
  | "praying"
  | "bathing";

export const TOUCH_REACTIONS: readonly AgnusAnimation[] = [
  "blink-ears",
  "hop",
  "waving",
  "surprise",
  "sit",
  "twirl",
  "happy-dance",
] as const;

export const TOUCH_SPEECH_LINES: readonly string[] = [
  "Olá! Vamos estudar?",
  "Que bom ter você por aqui!",
  "Vamos continuar nossa jornada?",
  "Estou pronto!",
  "Um passo de cada vez fortalece a fé.",
  "Posso ler um capítulo com você!",
] as const;

export function contextualBaseAnimation(context: AgnusContext, idle: boolean): AgnusAnimation {
  if (idle) {
    return context === "lesson" ? "reading" : context === "rosary" ? "contemplative" : "sleeping";
  }
  switch (context) {
    case "lesson":
      return "reading";
    case "celebration":
      return "celebrating";
    case "track":
      return "welcoming";
    case "rosary":
      return "contemplative";
    case "home":
    default:
      return "resting";
  }
}

export function pickNextTouchReaction(previous?: AgnusAnimation | null): AgnusAnimation {
  const candidates = TOUCH_REACTIONS.filter((item) => item !== previous);
  const pool = candidates.length > 0 ? candidates : TOUCH_REACTIONS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index] ?? "hop";
}

/* -------------------------------------------------------------------------- */
/* Talking-Tom / Angela Style Rooms & Real Need System                        */
/* -------------------------------------------------------------------------- */

export type AgnusRoomId = "sala" | "quarto" | "quintal" | "igreja" | "banheiro";

export type AgnusRoom = {
  id: AgnusRoomId;
  name: string;
  subtitle: string;
  description: string;
  defaultAnimation: AgnusAnimation;
};

export const AGNUS_ROOMS: readonly AgnusRoom[] = [
  {
    id: "sala",
    name: "Sala de Estar",
    subtitle: "Lanche e conversa",
    description: "Cantinho acolhedor com mesa de pão, sofá e livros para recarregar as forças.",
    defaultAnimation: "resting",
  },
  {
    id: "quarto",
    name: "Quarto",
    subtitle: "Descanso e sono",
    description: "Caminha macia e abajur suave para Agnus descansar e renovar o sono.",
    defaultAnimation: "resting",
  },
  {
    id: "quintal",
    name: "Quintal",
    subtitle: "Brincar ao ar livre",
    description: "Jardim ensolarado para brincar, respirar fundo e colher frutinhas.",
    defaultAnimation: "observing",
  },
  {
    id: "igreja",
    name: "Igreja",
    subtitle: "Oração e paz",
    description: "Capelinha silenciosa com velas acesas e banco de madeira para rezar juntos.",
    defaultAnimation: "contemplative",
  },
  {
    id: "banheiro",
    name: "Banheiro",
    subtitle: "Cuidado e higiene",
    description: "Banheiro organizado e fresquinho para manter Agnus sempre bem cuidado.",
    defaultAnimation: "resting",
  },
] as const;

export type AgnusNeedKey = "fome" | "sono" | "banheiro" | "felicidade";

export type AgnusCareState = {
  currentRoom: AgnusRoomId;
  fome: number;
  sono: number;
  banheiro: number;
  felicidade: number;
  asleep: boolean;
  lampOff: boolean;
  candleLit: boolean;
  lastUpdatedAt: string;
  totalInteractions: number;
};

export const AGNUS_CARE_STORAGE_KEY = "lumen-agnus-care";
export const AGNUS_CARE_CHANGED_EVENT = "lumen-agnus-care-changed";

export function clampNeed(value: unknown, fallback = 85): number {
  if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function isKnownRoomId(id: unknown): id is AgnusRoomId {
  return (
    id === "sala" || id === "quarto" || id === "quintal" || id === "igreja" || id === "banheiro"
  );
}

export function defaultAgnusCareState(nowIso: string = new Date().toISOString()): AgnusCareState {
  return {
    currentRoom: "sala",
    fome: 85,
    sono: 85,
    banheiro: 90,
    felicidade: 90,
    asleep: false,
    lampOff: false,
    candleLit: false,
    lastUpdatedAt: nowIso,
    totalInteractions: 0,
  };
}

export function parseAgnusCareState(
  raw: string | null,
  nowIso: string = new Date().toISOString(),
): AgnusCareState {
  const fallback = defaultAgnusCareState(nowIso);
  try {
    const parsed: unknown = JSON.parse(raw ?? "null");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
    const data = parsed as Record<string, unknown>;
    return {
      currentRoom: isKnownRoomId(data["currentRoom"]) ? data["currentRoom"] : fallback.currentRoom,
      fome: clampNeed(data["fome"], fallback.fome),
      sono: clampNeed(data["sono"], fallback.sono),
      banheiro: clampNeed(data["banheiro"], fallback.banheiro),
      felicidade: clampNeed(data["felicidade"], fallback.felicidade),
      asleep: data["asleep"] === true,
      lampOff: data["lampOff"] === true,
      candleLit: data["candleLit"] === true,
      lastUpdatedAt: typeof data["lastUpdatedAt"] === "string" ? data["lastUpdatedAt"] : nowIso,
      totalInteractions:
        typeof data["totalInteractions"] === "number" && data["totalInteractions"] >= 0
          ? Math.floor(data["totalInteractions"])
          : 0,
    };
  } catch {
    return fallback;
  }
}

/**
 * Applies realistic elapsed time decay (or sleep recovery) safely capped so needs never drop harshly overnight.
 */
export function applyCareElapsedTime(
  state: AgnusCareState,
  nowMs: number = Date.now(),
): AgnusCareState {
  const lastMs = Date.parse(state.lastUpdatedAt);
  if (!Number.isFinite(lastMs) || nowMs <= lastMs) return state;
  const elapsedHours = Math.min(12, (nowMs - lastMs) / (1000 * 60 * 60));
  if (elapsedHours < 0.05) return state;

  const nextFome = clampNeed(state.fome - elapsedHours * 4.5, state.fome);
  const nextBanheiro = clampNeed(state.banheiro - elapsedHours * 4, state.banheiro);
  const nextSono = state.asleep
    ? clampNeed(state.sono + elapsedHours * 22, state.sono)
    : clampNeed(state.sono - elapsedHours * 4.5, state.sono);
  const nextFelicidade = clampNeed(state.felicidade - elapsedHours * 3.5, state.felicidade);

  return {
    ...state,
    fome: Math.max(15, nextFome),
    banheiro: Math.max(15, nextBanheiro),
    sono: Math.max(15, nextSono),
    felicidade: Math.max(20, nextFelicidade),
    lastUpdatedAt: new Date(nowMs).toISOString(),
  };
}

export type CareActionId =
  | "feed"
  | "talk"
  | "toggle-sleep"
  | "toggle-lamp"
  | "play-yard"
  | "pick-fruit"
  | "pray-together"
  | "light-candle"
  | "use-bathroom"
  | "wash-up"
  | "pet";

export type CareActionResult = {
  state: AgnusCareState;
  reaction: AgnusAnimation;
  speech: string;
  particle?: string;
};

export function performCareAction(
  state: AgnusCareState,
  action: CareActionId,
  nowIso: string = new Date().toISOString(),
): CareActionResult {
  const base: AgnusCareState = {
    ...state,
    lastUpdatedAt: nowIso,
    totalInteractions: state.totalInteractions + 1,
  };

  switch (action) {
    case "feed":
      return {
        state: {
          ...base,
          asleep: false,
          fome: clampNeed(base.fome + 32),
          banheiro: clampNeed(base.banheiro - 8),
          felicidade: clampNeed(base.felicidade + 8),
        },
        reaction: "eating",
        speech: "Obrigado pelo lanche! Estava delicioso.",
        particle: "🥖",
      };
    case "talk":
      return {
        state: {
          ...base,
          asleep: false,
          felicidade: clampNeed(base.felicidade + 16),
          sono: clampNeed(base.sono - 3),
        },
        reaction: "happy-dance",
        speech: "Adoro conversar com você na sala!",
        particle: "💛",
      };
    case "toggle-sleep":
      if (state.asleep) {
        return {
          state: {
            ...base,
            asleep: false,
            lampOff: false,
            sono: clampNeed(base.sono + 15),
            felicidade: clampNeed(base.felicidade + 8),
          },
          reaction: "waving",
          speech: "Bom dia! Dormi muito bem e estou pronto!",
          particle: "☀️",
        };
      }
      return {
        state: {
          ...base,
          asleep: true,
          sono: clampNeed(base.sono + 30),
        },
        reaction: "sleeping",
        speech: "Hora de descansar um pouquinho... Zzz",
        particle: "💤",
      };
    case "toggle-lamp":
      return {
        state: {
          ...base,
          lampOff: !state.lampOff,
        },
        reaction: state.lampOff ? "blink-ears" : "sit",
        speech: state.lampOff ? "Luz acesa para ler um pouco!" : "Luz suave para descansar.",
        particle: state.lampOff ? "💡" : "🌙",
      };
    case "play-yard":
      return {
        state: {
          ...base,
          asleep: false,
          felicidade: clampNeed(base.felicidade + 26),
          fome: clampNeed(base.fome - 6),
          sono: clampNeed(base.sono - 7),
          banheiro: clampNeed(base.banheiro - 4),
        },
        reaction: "playing",
        speech: "Oba! Como é bom correr no quintal!",
        particle: "✨",
      };
    case "pick-fruit":
      return {
        state: {
          ...base,
          asleep: false,
          fome: clampNeed(base.fome + 20),
          felicidade: clampNeed(base.felicidade + 12),
        },
        reaction: "eating",
        speech: "Frutinhas fresquinhas do jardim!",
        particle: "🍎",
      };
    case "pray-together":
      return {
        state: {
          ...base,
          asleep: false,
          felicidade: clampNeed(base.felicidade + 28),
        },
        reaction: "praying",
        speech: "Senhor, abençoa nossos estudos e nossa família.",
        particle: "🙏",
      };
    case "light-candle":
      return {
        state: {
          ...base,
          asleep: false,
          candleLit: true,
          felicidade: clampNeed(base.felicidade + 15),
        },
        reaction: "praying",
        speech: "Uma velinha acesa em sinal de fé e esperança.",
        particle: "🕯️",
      };
    case "use-bathroom":
      return {
        state: {
          ...base,
          asleep: false,
          banheiro: 100,
          felicidade: clampNeed(base.felicidade + 10),
        },
        reaction: "bathing",
        speech: "Que alívio! Agora me sinto bem melhor.",
        particle: "✨",
      };
    case "wash-up":
      return {
        state: {
          ...base,
          asleep: false,
          banheiro: clampNeed(base.banheiro + 28),
          felicidade: clampNeed(base.felicidade + 16),
        },
        reaction: "bathing",
        speech: "Limpinho e cheiroso para continuar!",
        particle: "💧",
      };
    case "pet":
      return {
        state: {
          ...base,
          asleep: false,
          felicidade: clampNeed(base.felicidade + 10),
        },
        reaction: pickNextTouchReaction(),
        speech:
          TOUCH_SPEECH_LINES[state.totalInteractions % TOUCH_SPEECH_LINES.length] ??
          "Estou pronto!",
        particle: "💛",
      };
  }
}

export function needStatusLabel(key: AgnusNeedKey, value: number): string {
  if (key === "fome") {
    if (value >= 75) return "Satisfeito";
    if (value >= 40) return "Com fominha";
    return "Precisa comer";
  }
  if (key === "sono") {
    if (value >= 75) return "Descansado";
    if (value >= 40) return "Com sono";
    return "Cansadinho";
  }
  if (key === "banheiro") {
    if (value >= 75) return "Confortável";
    if (value >= 40) return "Quer ir ao banheiro";
    return "Urgente";
  }
  if (value >= 75) return "Radiante";
  if (value >= 40) return "Tranquilo";
  return "Quer atenção";
}

export function recommendedRoomForNeed(key: AgnusNeedKey): AgnusRoomId {
  switch (key) {
    case "fome":
      return "sala";
    case "sono":
      return "quarto";
    case "banheiro":
      return "banheiro";
    case "felicidade":
      return "igreja";
  }
}

/* -------------------------------------------------------------------------- */
/* Interactive Furniture & Scenic Details                                     */
/* -------------------------------------------------------------------------- */

export type StagePropDef = {
  id: string;
  label: string;
  /** Tailwind positioning classes for accessible hotspot placement over the stage. */
  posClass: string;
  careAction?: CareActionId;
  reaction?: AgnusAnimation;
  speech?: string | ((state: AgnusCareState) => string);
  particle?: string | ((state: AgnusCareState) => string);
};

export const STAGE_PROPS_BY_SCENE: Record<string, readonly StagePropDef[]> = {
  "room:sala": [
    {
      id: "sala-mesa-pao",
      label: "Pão e caneca",
      posClass: "left-[5%] bottom-[22%] h-[24%] w-[21%]",
      careAction: "feed",
    },
    {
      id: "sala-quadro-cruz",
      label: "Quadro da Cruz",
      posClass: "left-[9%] top-[14%] h-[28%] w-[16%]",
      reaction: "praying",
      speech: "A Cruz de Cristo ilumina toda a nossa casa.",
      particle: "✝️",
    },
    {
      id: "sala-sofa",
      label: "Sofá aconchegante",
      posClass: "left-[25%] bottom-[24%] h-[26%] w-[16%]",
      reaction: "sit",
      speech: "Que sofá macio! Bom lugar para conversar.",
      particle: "💛",
    },
    {
      id: "sala-estante",
      label: "Estante de livros",
      posClass: "right-[5%] top-[14%] h-[58%] w-[24%]",
      reaction: "reading",
      speech: "Cada livrinho guarda uma história especial da fé!",
      particle: "📖",
    },
  ],
  "room:quarto": [
    {
      id: "quarto-janela",
      label: "Janela do quarto",
      posClass: "left-[9%] top-[11%] h-[39%] w-[23%]",
      reaction: "observing",
      speech: (state) =>
        state.lampOff
          ? "Quantas estrelas Deus colocou no céu!"
          : "Um novo dia abençoado lá fora!",
      particle: (state) => (state.lampOff ? "🌟" : "🌤️"),
    },
    {
      id: "quarto-abajur",
      label: "Abajur",
      posClass: "right-[33%] bottom-[24%] h-[28%] w-[13%]",
      careAction: "toggle-lamp",
    },
    {
      id: "quarto-cama",
      label: "Cama acolhedora",
      posClass: "right-[4%] bottom-[22%] h-[32%] w-[28%]",
      careAction: "toggle-sleep",
    },
  ],
  "room:quintal": [
    {
      id: "quintal-macieira",
      label: "Árvore de frutinhas",
      posClass: "left-[6%] top-[16%] h-[54%] w-[24%]",
      careAction: "pick-fruit",
    },
    {
      id: "quintal-flores",
      label: "Flores do jardim",
      posClass: "left-[21%] bottom-[10%] h-[20%] w-[17%]",
      reaction: "happy-dance",
      speech: "As florzinhas louvam ao Criador com suas cores!",
      particle: "🌸",
    },
    {
      id: "quintal-bola",
      label: "Bola colorida",
      posClass: "right-[9%] bottom-[19%] h-[20%] w-[15%]",
      careAction: "play-yard",
    },
    {
      id: "quintal-sol",
      label: "Sol brilhante",
      posClass: "right-[11%] top-[10%] h-[22%] w-[15%]",
      reaction: "waving",
      speech: "Que dia lindo Deus preparou para brincar e aprender!",
      particle: "☀️",
    },
  ],
  "room:igreja": [
    {
      id: "igreja-banco",
      label: "Banco da capela",
      posClass: "left-[6%] bottom-[24%] h-[24%] w-[25%]",
      reaction: "praying",
      speech: "Silêncio no coração para ouvir a voz de Jesus.",
      particle: "🙏",
    },
    {
      id: "igreja-vitral",
      label: "Vitral iluminado",
      posClass: "left-[40%] top-[11%] h-[42%] w-[20%]",
      reaction: "contemplative",
      speech: "A luz pelos vitrais lembra a beleza do Reino.",
      particle: "✨",
    },
    {
      id: "igreja-velas",
      label: "Velas do altar",
      posClass: "right-[7%] top-[40%] h-[18%] w-[21%]",
      careAction: "light-candle",
    },
    {
      id: "igreja-altar",
      label: "Altar sagrado",
      posClass: "right-[6%] bottom-[22%] h-[22%] w-[23%]",
      careAction: "pray-together",
    },
  ],
  "room:banheiro": [
    {
      id: "banheiro-espelho",
      label: "Espelho oval",
      posClass: "left-[10%] top-[12%] h-[34%] w-[18%]",
      reaction: "twirl",
      speech: "Olha como estou arrumado e feliz!",
      particle: "✨",
    },
    {
      id: "banheiro-pia",
      label: "Pia e torneira",
      posClass: "left-[9%] bottom-[24%] h-[26%] w-[20%]",
      careAction: "wash-up",
    },
    {
      id: "banheiro-banheira",
      label: "Banheira com espuma",
      posClass: "right-[5%] bottom-[20%] h-[30%] w-[27%]",
      careAction: "use-bathroom",
    },
  ],
  "scenario:padrao": [
    {
      id: "padrao-lamparina",
      label: "Lamparina dourada",
      posClass: "left-[11%] top-[24%] h-[34%] w-[16%]",
      reaction: "praying",
      speech: "Que a luz da fé permaneça acesa no coração!",
      particle: "🕯️",
    },
    {
      id: "padrao-oliveira",
      label: "Vaso com oliveira",
      posClass: "right-[9%] bottom-[20%] h-[34%] w-[18%]",
      reaction: "waving",
      speech: "O ramo de oliveira é sinal de paz e bênção.",
      particle: "🌿",
    },
  ],
  "scenario:jardim-tranquilo": [
    {
      id: "jardim-fonte",
      label: "Fonte de água viva",
      posClass: "right-[8%] bottom-[19%] h-[32%] w-[24%]",
      reaction: "contemplative",
      speech: "O som suave da fonte acalma nossos pensamentos.",
      particle: "💧",
    },
    {
      id: "jardim-lanterna",
      label: "Lanterna do jardim",
      posClass: "left-[12%] top-[22%] h-[34%] w-[15%]",
      reaction: "happy-dance",
      speech: "Caminhar em paz renova o ânimo para estudar!",
      particle: "🏮",
    },
  ],
  "scenario:biblioteca": [
    {
      id: "bib-lustre",
      label: "Lustre dourado",
      posClass: "left-[40%] top-[6%] h-[24%] w-[20%]",
      reaction: "observing",
      speech: "Luz aconchegante para explorar os livros sagrados!",
      particle: "💡",
    },
    {
      id: "bib-atril",
      label: "Atril com manuscrito",
      posClass: "left-[8%] bottom-[20%] h-[36%] w-[22%]",
      reaction: "reading",
      speech: "Descobrindo a história da Igreja página por página!",
      particle: "📜",
    },
    {
      id: "bib-estantes",
      label: "Estantes antigas",
      posClass: "right-[5%] top-[12%] h-[62%] w-[27%]",
      reaction: "happy-dance",
      speech: "Quantos santos e doutores inspiram este lugar!",
      particle: "📚",
    },
  ],
  "scenario:campo-florido": [
    {
      id: "campo-flores",
      label: "Flores campestres",
      posClass: "left-[10%] bottom-[16%] h-[26%] w-[22%]",
      reaction: "happy-dance",
      speech: "Veja os lírios do campo e a beleza da criação!",
      particle: "🌼",
    },
    {
      id: "campo-cerca",
      label: "Cerca e poente",
      posClass: "right-[8%] bottom-[22%] h-[30%] w-[22%]",
      reaction: "resting",
      speech: "A brisa da tarde traz serenidade e gratidão.",
      particle: "🍃",
    },
  ],
  "scenario:ambiente-estudos": [
    {
      id: "estudos-mesa",
      label: "Escrivaninha de estudos",
      posClass: "left-[9%] bottom-[20%] h-[34%] w-[24%]",
      reaction: "reading",
      speech: "Anotando tudo com capricho para aprender mais!",
      particle: "✒️",
    },
    {
      id: "estudos-vela",
      label: "Vela da escrivaninha",
      posClass: "right-[14%] bottom-[24%] h-[32%] w-[16%]",
      reaction: "praying",
      speech: "Estudar a fé também é uma forma de oração.",
      particle: "🕯️",
    },
  ],
  "scenario:noite-belem": [
    {
      id: "belem-estrela",
      label: "Estrela de Belém",
      posClass: "left-[40%] top-[6%] h-[24%] w-[20%]",
      reaction: "surprise",
      speech: "A Estrela de Belém nos conduz até o Menino Jesus!",
      particle: "⭐",
    },
    {
      id: "belem-lanterna",
      label: "Lanterna da estrebaria",
      posClass: "left-[9%] bottom-[20%] h-[32%] w-[20%]",
      reaction: "contemplative",
      speech: "Na humilde estrebaria nasceu o Salvador do mundo.",
      particle: "✨",
    },
  ],
  "scenario:jardim-celestial": [
    {
      id: "celeste-lirios",
      label: "Lírios luminosos",
      posClass: "left-[10%] bottom-[18%] h-[28%] w-[20%]",
      reaction: "happy-dance",
      speech: "Os lírios brilham na luz da alegria cristã!",
      particle: "🤍",
    },
    {
      id: "celeste-arco",
      label: "Arco dourado",
      posClass: "right-[10%] top-[16%] h-[34%] w-[20%]",
      reaction: "celebrating",
      speech: "Glória a Deus nas alturas pela sua caminhada!",
      particle: "🎶",
    },
  ],
};

export function performPropInteraction(
  state: AgnusCareState,
  prop: StagePropDef,
  nowIso: string = new Date().toISOString(),
): CareActionResult {
  if (prop.careAction) {
    return performCareAction(state, prop.careAction, nowIso);
  }
  const speech =
    typeof prop.speech === "function"
      ? prop.speech(state)
      : (prop.speech ?? "Que detalhe especial neste cantinho!");
  const particle =
    typeof prop.particle === "function" ? prop.particle(state) : (prop.particle ?? "✨");

  return {
    state: {
      ...state,
      asleep: false,
      felicidade: clampNeed(state.felicidade + 5),
      lastUpdatedAt: nowIso,
      totalInteractions: state.totalInteractions + 1,
    },
    reaction: prop.reaction ?? "observing",
    speech,
    particle,
  };
}

