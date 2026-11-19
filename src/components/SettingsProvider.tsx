import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_APP_SETTINGS,
  SETTINGS_STORAGE_KEY,
  THEME_META_COLORS,
  parseAppSettings,
  resolveAppearance,
  type AppSettings,
  type ResolvedAppearance,
} from "@/lib/settings";

type SettingsValue = {
  settings: AppSettings;
  resolvedAppearance: ResolvedAppearance;
  prefersDark: boolean;
  ready: boolean;
  updateSettings: (patch: Partial<AppSettings>) => void;
};

const SettingsContext = createContext<SettingsValue>({
  settings: DEFAULT_APP_SETTINGS,
  resolvedAppearance: "white-blue",
  prefersDark: false,
  ready: false,
  updateSettings: () => {},
});

function readPrefersDark(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState(DEFAULT_APP_SETTINGS);
  const [prefersDark, setPrefersDark] = useState(false);
  const [ready, setReady] = useState(false);
  const current = useRef(DEFAULT_APP_SETTINGS);

  useEffect(() => {
    let saved = { ...DEFAULT_APP_SETTINGS };
    try {
      saved = parseAppSettings(localStorage.getItem(SETTINGS_STORAGE_KEY));
    } catch {
      /* Device storage is optional. */
    }
    current.current = saved;
    setSettings(saved);
    setPrefersDark(readPrefersDark());
    setReady(true);

    const sync = (event: StorageEvent) => {
      if (event.key !== SETTINGS_STORAGE_KEY) return;
      const next = parseAppSettings(event.newValue);
      current.current = next;
      setSettings(next);
    };
    window.addEventListener("storage", sync);

    const mediaQuery =
      typeof window !== "undefined" && typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setPrefersDark(event.matches);
    };

    if (mediaQuery) {
      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", handleMediaChange);
      } else if (typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(handleMediaChange);
      }
    }

    return () => {
      window.removeEventListener("storage", sync);
      if (mediaQuery) {
        if (typeof mediaQuery.removeEventListener === "function") {
          mediaQuery.removeEventListener("change", handleMediaChange);
        } else if (typeof mediaQuery.removeListener === "function") {
          mediaQuery.removeListener(handleMediaChange);
        }
      }
    };
  }, []);

  const resolvedAppearance = resolveAppearance(settings.appearance, prefersDark);

  useEffect(() => {
    document.documentElement.dataset["lumenTheme"] = resolvedAppearance;
    document.documentElement.dataset["reduceMotion"] = String(settings.reduceMotion);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", THEME_META_COLORS[resolvedAppearance]);
    }
  }, [resolvedAppearance, settings.reduceMotion]);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    const next = parseAppSettings(JSON.stringify({ ...current.current, ...patch }));
    current.current = next;
    setSettings(next);
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* Controls still work for this visit. */
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{ settings, resolvedAppearance, prefersDark, ready, updateSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
