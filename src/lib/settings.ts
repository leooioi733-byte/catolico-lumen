export type ResolvedAppearance =
  "white-blue" | "cream" | "burgundy" | "black-yellow" | "christmas" | "christmas-green";

export type Appearance = "auto" | ResolvedAppearance;

export const APPEARANCE_OPTIONS = [
  { value: "auto", label: "Automático (sistema)" },
  { value: "white-blue", label: "Branco e azul claro" },
  { value: "cream", label: "Creme" },
  { value: "burgundy", label: "Grená" },
  { value: "black-yellow", label: "Preto e amarelo" },
  { value: "christmas", label: "Tema Natalino" },
  { value: "christmas-green", label: "Natal Verde" },
] as const;

export const THEME_META_COLORS: Record<ResolvedAppearance, string> = {
  "white-blue": "#1D75D0",
  cream: "#691E2A",
  burgundy: "#5B1726",
  "black-yellow": "#141414",
  christmas: "#A83D43",
  "christmas-green": "#315B43",
};

export function resolveAppearance(
  appearance: Appearance,
  prefersDark: boolean,
): ResolvedAppearance {
  if (appearance === "auto") {
    return prefersDark ? "black-yellow" : "white-blue";
  }
  return appearance;
}

export function isChristmasAppearance(appearance: Appearance): boolean {
  return appearance === "christmas" || appearance === "christmas-green";
}

export type AppSettings = {
  appearance: Appearance;
  textSize: number;
  reduceMotion: boolean;
};

export const SETTINGS_STORAGE_KEY = "lumen-device-settings";
export const DEFAULT_APP_SETTINGS: AppSettings = {
  appearance: "auto",
  textSize: 0,
  reduceMotion: false,
};
export const READING_SIZE_CLASSES = [
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-[28px]",
  "text-[32px]",
] as const;
export const READING_SIZE_LABELS = ["18", "20", "24", "28", "32"] as const;

export function parseAppSettings(raw: string | null): AppSettings {
  if (!raw) return { ...DEFAULT_APP_SETTINGS };
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data))
      return { ...DEFAULT_APP_SETTINGS };
    const value = data as Record<string, unknown>;
    const savedAppearance = value["appearance"];
    const appearance: Appearance =
      savedAppearance === "auto" ||
      savedAppearance === "white-blue" ||
      savedAppearance === "cream" ||
      savedAppearance === "burgundy" ||
      savedAppearance === "black-yellow" ||
      savedAppearance === "christmas" ||
      savedAppearance === "christmas-green"
        ? savedAppearance
        : DEFAULT_APP_SETTINGS.appearance;
    return {
      appearance,
      textSize:
        typeof value["textSize"] === "number" && Number.isInteger(value["textSize"])
          ? Math.max(0, Math.min(4, value["textSize"]))
          : 0,
      reduceMotion: value["reduceMotion"] === true,
    };
  } catch {
    return { ...DEFAULT_APP_SETTINGS };
  }
}
