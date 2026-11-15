export const STREAK_STORAGE_KEY = "lumen-streak";
export const STREAK_CHANGED_EVENT = "lumen-streak-changed";

export type StreakDayRecord = {
  date: string;
  activities: number;
};

export type StoredStreak = {
  best: number;
  days: Record<string, number>;
};

export type StreakState = {
  current: number;
  best: number;
  completedToday: boolean;
  totalDays: number;
  totalActivities: number;
  history: StreakDayRecord[];
};

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const WEEKDAY_LETTERS = ["D", "S", "T", "Q", "Q", "S", "S"] as const;
const WEEKDAY_NAMES = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
] as const;

export function toLocalDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function shiftDateKey(dateKey: string, deltaDays: number): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  if (!y || !m || !d) return dateKey;
  const utc = new Date(Date.UTC(y, m - 1, d + deltaDays));
  const year = utc.getUTCFullYear();
  const month = String(utc.getUTCMonth() + 1).padStart(2, "0");
  const day = String(utc.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatShortDate(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  if (!y || !m || !d) return dateKey;
  return `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}`;
}

export function emptyStoredStreak(): StoredStreak {
  return { best: 0, days: {} };
}

export function parseStoredStreak(raw: string | null): StoredStreak {
  if (!raw) return emptyStoredStreak();
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return emptyStoredStreak();
    const record = parsed as Record<string, unknown>;
    const days: Record<string, number> = {};
    if (record["days"] && typeof record["days"] === "object" && !Array.isArray(record["days"])) {
      for (const [key, count] of Object.entries(record["days"] as Record<string, unknown>)) {
        if (DATE_RE.test(key) && typeof count === "number" && Number.isFinite(count) && count > 0) {
          days[key] = Math.floor(count);
        }
      }
    }
    const maxHistorical = computeLongestRun(Object.keys(days));
    const savedBest =
      typeof record["best"] === "number" && Number.isFinite(record["best"]) && record["best"] >= 0
        ? Math.floor(record["best"])
        : 0;
    return { best: Math.max(savedBest, maxHistorical), days };
  } catch {
    return emptyStoredStreak();
  }
}

export function computeLongestRun(dateKeys: string[]): number {
  const valid = [...new Set(dateKeys.filter((k) => DATE_RE.test(k)))].sort();
  if (valid.length === 0) return 0;
  let best = 1;
  let run = 1;
  for (let i = 1; i < valid.length; i += 1) {
    const prev = valid[i - 1]!;
    const curr = valid[i]!;
    if (shiftDateKey(prev, 1) === curr) {
      run += 1;
      if (run > best) best = run;
    } else {
      run = 1;
    }
  }
  return best;
}

export function computeStreakState(stored: StoredStreak, todayKey: string): StreakState {
  const completedToday = (stored.days[todayKey] ?? 0) > 0;
  const yesterdayKey = shiftDateKey(todayKey, -1);
  const anchor = completedToday
    ? todayKey
    : (stored.days[yesterdayKey] ?? 0) > 0
      ? yesterdayKey
      : null;

  let current = 0;
  if (anchor) {
    let cursor = anchor;
    while ((stored.days[cursor] ?? 0) > 0) {
      current += 1;
      cursor = shiftDateKey(cursor, -1);
    }
  }

  const history: StreakDayRecord[] = Object.entries(stored.days)
    .filter(([date, activities]) => DATE_RE.test(date) && activities > 0)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, activities]) => ({ date, activities }));

  const totalActivities = history.reduce((sum, item) => sum + item.activities, 0);
  const best = Math.max(stored.best, current, computeLongestRun(history.map((h) => h.date)));

  return {
    current,
    best,
    completedToday,
    totalDays: history.length,
    totalActivities,
    history,
  };
}

export function recordActivity(stored: StoredStreak, todayKey: string): StoredStreak {
  if (!DATE_RE.test(todayKey)) return stored;
  const nextDays = {
    ...stored.days,
    [todayKey]: (stored.days[todayKey] ?? 0) + 1,
  };
  const nextState = computeStreakState({ best: stored.best, days: nextDays }, todayKey);
  return {
    best: Math.max(stored.best, nextState.current, nextState.best),
    days: nextDays,
  };
}

export type CalendarDaySlot = {
  date: string;
  shortDate: string;
  weekdayLetter: string;
  weekdayName: string;
  completed: boolean;
  activities: number;
  isToday: boolean;
};

export function recentDaysWindow(
  stored: StoredStreak,
  todayKey: string,
  count: number,
): CalendarDaySlot[] {
  const slots: CalendarDaySlot[] = [];
  for (let offset = -(count - 1); offset <= 0; offset += 1) {
    const date = shiftDateKey(todayKey, offset);
    const [y, m, d] = date.split("-").map(Number);
    const dayOfWeek = y && m && d ? new Date(Date.UTC(y, m - 1, d)).getUTCDay() : 0;
    const activities = stored.days[date] ?? 0;
    slots.push({
      date,
      shortDate: formatShortDate(date),
      weekdayLetter: WEEKDAY_LETTERS[dayOfWeek] ?? "D",
      weekdayName: WEEKDAY_NAMES[dayOfWeek] ?? "Dia",
      completed: activities > 0,
      activities,
      isToday: date === todayKey,
    });
  }
  return slots;
}
