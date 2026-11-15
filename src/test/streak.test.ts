import { describe, expect, it, beforeEach } from "vitest";
import {
  STREAK_STORAGE_KEY,
  computeLongestRun,
  computeStreakState,
  emptyStoredStreak,
  parseStoredStreak,
  recentDaysWindow,
  recordActivity,
} from "@/lib/streak";
import { recordStreakActivityNow } from "@/hooks/use-streak";

describe("sequência diária (streak)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("inicia zerada quando não há registros", () => {
    const state = computeStreakState(emptyStoredStreak(), "2026-11-12");
    expect(state).toMatchObject({
      current: 0,
      best: 0,
      completedToday: false,
      totalDays: 0,
    });
  });

  it("conta dias consecutivos e preserva o recorde pessoal", () => {
    let stored = emptyStoredStreak();
    stored = recordActivity(stored, "2026-11-08");
    stored = recordActivity(stored, "2026-11-09");
    stored = recordActivity(stored, "2026-11-10");

    const day10 = computeStreakState(stored, "2026-11-10");
    expect(day10).toMatchObject({ current: 3, best: 3, completedToday: true, totalDays: 3 });

    // Dia seguinte antes de concluir a atividade: sequência continua viva aguardando hoje
    const day11Before = computeStreakState(stored, "2026-11-11");
    expect(day11Before).toMatchObject({ current: 3, best: 3, completedToday: false });

    // Se pular o dia 11 e abrir no dia 12, zera sequência atual mas mantém recorde
    const day12AfterMiss = computeStreakState(stored, "2026-11-12");
    expect(day12AfterMiss).toMatchObject({ current: 0, best: 3, completedToday: false });

    // Nova atividade no dia 12 começa sequência em 1 e preserva recorde de 3
    stored = recordActivity(stored, "2026-11-12");
    const day12AfterAct = computeStreakState(stored, "2026-11-12");
    expect(day12AfterAct).toMatchObject({
      current: 1,
      best: 3,
      completedToday: true,
      totalDays: 4,
    });
  });

  it("múltiplas atividades no mesmo dia não inflam os dias consecutivos", () => {
    let stored = emptyStoredStreak();
    stored = recordActivity(stored, "2026-11-12");
    stored = recordActivity(stored, "2026-11-12");
    stored = recordActivity(stored, "2026-11-12");

    const state = computeStreakState(stored, "2026-11-12");
    expect(state.current).toBe(1);
    expect(state.totalDays).toBe(1);
    expect(state.totalActivities).toBe(3);
  });

  it("gera janela de histórico de 7 e 28 dias e persiste no localStorage", () => {
    recordStreakActivityNow();
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    expect(raw).toBeTruthy();
    const parsed = parseStoredStreak(raw);
    expect(Object.keys(parsed.days)).toHaveLength(1);

    const win7 = recentDaysWindow(parsed, Object.keys(parsed.days)[0]!, 7);
    expect(win7).toHaveLength(7);
    expect(win7.at(-1)?.completed).toBe(true);
    expect(win7.at(-1)?.isToday).toBe(true);

    expect(computeLongestRun(["2026-11-01", "2026-11-02", "2026-11-05"])).toBe(2);
  });
});
