import { useCallback, useEffect, useState } from "react";

export type Progress = { xp: number; completed: string[] };
export const PROGRESS_STORAGE_KEY = "lumen-progress";
export const PROGRESS_CHANGED_EVENT = "lumen-progress-changed";

export function parseProgress(raw: string | null): Progress {
  const fallback: Progress = { xp: 0, completed: [] };
  try {
    const value: unknown = JSON.parse(raw ?? "null");
    if (!value || typeof value !== "object" || Array.isArray(value)) return fallback;
    const data = value as Record<string, unknown>;
    const xp =
      typeof data["xp"] === "number" && Number.isFinite(data["xp"]) && data["xp"] >= 0
        ? data["xp"]
        : 0;
    const completed = Array.isArray(data["completed"])
      ? [...new Set(data["completed"].filter((item): item is string => typeof item === "string"))]
      : [];
    return { xp, completed };
  } catch {
    return fallback;
  }
}

export function applyCompletion(p: Progress, id: string, xp: number): Progress {
  return {
    xp: p.xp + xp,
    completed: p.completed.includes(id) ? p.completed : [...p.completed, id],
  };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({ xp: 0, completed: [] });
  const [profile, setProfile] = useState<{ nickname?: string } | null>(null);
  useEffect(() => {
    const read = () => {
      try {
        setProgress(parseProgress(localStorage.getItem(PROGRESS_STORAGE_KEY)));
        const pr = localStorage.getItem("lumen-profile");
        setProfile(pr ? (JSON.parse(pr) as { nickname?: string }) : null);
      } catch {
        /* Local progress remains optional. */
      }
    };
    read();
    const syncStorage = (event: StorageEvent) => {
      if (
        event.key === PROGRESS_STORAGE_KEY ||
        event.key === "lumen-profile" ||
        event.key === null
      ) {
        read();
      }
    };
    window.addEventListener("storage", syncStorage);
    window.addEventListener(PROGRESS_CHANGED_EVENT, read);
    return () => {
      window.removeEventListener("storage", syncStorage);
      window.removeEventListener(PROGRESS_CHANGED_EVENT, read);
    };
  }, []);
  const complete = useCallback((id: string, xp: number) => {
    setProgress((p) => {
      const n = applyCompletion(p, id, xp);
      try {
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(n));
        window.dispatchEvent(new Event(PROGRESS_CHANGED_EVENT));
      } catch {
        /* Keep in-memory progress if storage fails. */
      }
      return n;
    });
  }, []);
  return { progress, profile, complete };
}
