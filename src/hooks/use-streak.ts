import { useCallback, useEffect, useState } from "react";
import {
  STREAK_CHANGED_EVENT,
  STREAK_STORAGE_KEY,
  computeStreakState,
  emptyStoredStreak,
  parseStoredStreak,
  recentDaysWindow,
  recordActivity,
  toLocalDateKey,
  type CalendarDaySlot,
  type StoredStreak,
  type StreakState,
} from "@/lib/streak";

function readFromStorage(): StoredStreak {
  try {
    return parseStoredStreak(localStorage.getItem(STREAK_STORAGE_KEY));
  } catch {
    return emptyStoredStreak();
  }
}

export function recordStreakActivityNow(): StoredStreak {
  const todayKey = toLocalDateKey();
  const current = readFromStorage();
  const next = recordActivity(current, todayKey);
  try {
    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(STREAK_CHANGED_EVENT));
  } catch {
    // Storage unavailable; caller receives computed state
  }
  return next;
}

export function useStreak() {
  const [stored, setStored] = useState<StoredStreak>(emptyStoredStreak);
  const [todayKey, setTodayKey] = useState<string>("");
  const [ready, setReady] = useState(false);

  const sync = useCallback(() => {
    setTodayKey(toLocalDateKey());
    setStored(readFromStorage());
  }, []);

  useEffect(() => {
    sync();
    setReady(true);

    const onStorage = (event: StorageEvent) => {
      if (event.key === null || event.key === STREAK_STORAGE_KEY) sync();
    };
    const onFocusOrVisibility = () => {
      if (!document.hidden) sync();
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(STREAK_CHANGED_EVENT, sync);
    window.addEventListener("focus", onFocusOrVisibility);
    document.addEventListener("visibilitychange", onFocusOrVisibility);

    const interval = window.setInterval(() => {
      const currentKey = toLocalDateKey();
      setTodayKey((prev) => (prev === currentKey ? prev : currentKey));
    }, 60_000);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(STREAK_CHANGED_EVENT, sync);
      window.removeEventListener("focus", onFocusOrVisibility);
      document.removeEventListener("visibilitychange", onFocusOrVisibility);
      window.clearInterval(interval);
    };
  }, [sync]);

  const recordToday = useCallback(() => {
    const next = recordStreakActivityNow();
    setTodayKey(toLocalDateKey());
    setStored(next);
  }, []);

  const streak: StreakState = todayKey
    ? computeStreakState(stored, todayKey)
    : computeStreakState(emptyStoredStreak(), "1970-01-01");
  const weekDays: CalendarDaySlot[] = todayKey ? recentDaysWindow(stored, todayKey, 7) : [];
  const monthDays: CalendarDaySlot[] = todayKey ? recentDaysWindow(stored, todayKey, 28) : [];

  return { streak, weekDays, monthDays, todayKey, ready, recordToday };
}
