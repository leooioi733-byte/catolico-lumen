import { emptyOnboarding, type Onboarding } from "@/lib/onboarding";
import {
  DEFAULT_AGNUS_ACCESSORY_ID,
  DEFAULT_AGNUS_SCENARIO_ID,
  isKnownAccessoryId,
  isKnownScenarioId,
} from "@/lib/agnus-habitat";
import {
  AGNUS_NAME,
  DEFAULT_AGNUS_OUTFIT_ID,
  isKnownAgnusOutfit,
  type MascotOutfit,
} from "@/lib/mascot";
import { isKnownSaintId } from "@/lib/saints";

export const PROFILE_STORAGE_KEY = "lumen-profile";
export const PROFILE_SYMBOLS = ["cross", "book", "heart", "church", "sun", "flower"] as const;
export type ProfileSymbol = (typeof PROFILE_SYMBOLS)[number];
export type Profile = Onboarding & {
  symbol: ProfileSymbol;
  mascotOutfit: MascotOutfit;
  mascotName: string;
  mascotAccessory: string;
  mascotScenario: string;
  devotionSaintId: string | null;
};
export const PROFILE_CHANGED_EVENT = "lumen-profile-changed";
export const PROFILE_LEVELS = [
  { id: "zero", label: "Estou começando agora" },
  { id: "pouco", label: "Conheço um pouco" },
  { id: "bem", label: "Conheço bem" },
  { id: "muito", label: "Quero me aprofundar" },
] as const;
export const PROFILE_TOPICS = [
  "Bíblia",
  "Jesus",
  "Sacramentos",
  "Orações",
  "Igreja",
  "Começar do zero",
] as const;

export function sanitizeMascotName(raw: unknown): string {
  if (typeof raw !== "string") return AGNUS_NAME;
  const cleaned = raw.trim().slice(0, 24).trim();
  return cleaned || AGNUS_NAME;
}

export function parseProfile(raw: string | null): Profile {
  const fallback: Profile = {
    ...emptyOnboarding,
    sacraments: [],
    symbol: "cross",
    mascotOutfit: DEFAULT_AGNUS_OUTFIT_ID,
    mascotName: AGNUS_NAME,
    mascotAccessory: DEFAULT_AGNUS_ACCESSORY_ID,
    mascotScenario: DEFAULT_AGNUS_SCENARIO_ID,
    devotionSaintId: null,
  };
  try {
    const value: unknown = JSON.parse(raw ?? "null");
    if (!value || typeof value !== "object" || Array.isArray(value)) return fallback;
    const data = value as Record<string, unknown>;
    return {
      nickname: typeof data["nickname"] === "string" ? data["nickname"] : "",
      source: typeof data["source"] === "string" ? data["source"] : null,
      level: PROFILE_LEVELS.some((level) => level.id === data["level"])
        ? (data["level"] as string)
        : null,
      topic: PROFILE_TOPICS.some((topic) => topic === data["topic"])
        ? (data["topic"] as string)
        : null,
      sacraments: Array.isArray(data["sacraments"])
        ? data["sacraments"].filter((item): item is string => typeof item === "string")
        : [],
      symbol: PROFILE_SYMBOLS.some((symbol) => symbol === data["symbol"])
        ? (data["symbol"] as ProfileSymbol)
        : "cross",
      mascotOutfit: isKnownAgnusOutfit(data["mascotOutfit"])
        ? data["mascotOutfit"]
        : DEFAULT_AGNUS_OUTFIT_ID,
      mascotName: sanitizeMascotName(data["mascotName"]),
      mascotAccessory: isKnownAccessoryId(data["mascotAccessory"])
        ? data["mascotAccessory"]
        : DEFAULT_AGNUS_ACCESSORY_ID,
      mascotScenario: isKnownScenarioId(data["mascotScenario"])
        ? data["mascotScenario"]
        : DEFAULT_AGNUS_SCENARIO_ID,
      devotionSaintId: isKnownSaintId(data["devotionSaintId"]) ? data["devotionSaintId"] : null,
    };
  } catch {
    return fallback;
  }
}

export type ProfileEdit = Pick<Profile, "nickname" | "symbol" | "level" | "topic"> &
  Partial<
    Pick<
      Profile,
      "mascotOutfit" | "mascotName" | "mascotAccessory" | "mascotScenario" | "devotionSaintId"
    >
  >;

export function updatePersonalProfile(profile: Profile, patch: ProfileEdit): Profile {
  return parseProfile(
    JSON.stringify({
      ...profile,
      ...patch,
      nickname: patch.nickname.trim(),
      mascotName:
        patch.mascotName !== undefined ? sanitizeMascotName(patch.mascotName) : profile.mascotName,
    }),
  );
}
