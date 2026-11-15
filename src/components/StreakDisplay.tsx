import { Award, CalendarDays, Check, Flame } from "lucide-react";
import type { CalendarDaySlot, StreakState } from "@/lib/streak";
import { formatShortDate } from "@/lib/streak";
import { cn } from "@/lib/utils";

function dayLabel(count: number) {
  return count === 1 ? "dia" : "dias";
}

export function StreakBadge({
  current,
  completedToday,
  className,
}: {
  current: number;
  completedToday: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 font-display text-sm font-semibold",
        completedToday
          ? "bg-gold text-gold-foreground"
          : "border-2 border-border bg-card text-primary",
        className,
      )}
      aria-label={`Sequência diária: ${current} ${dayLabel(current)}${completedToday ? ", hoje concluído" : ""}`}
    >
      <Flame
        className={cn("h-4 w-4 shrink-0", completedToday && "fill-current")}
        aria-hidden="true"
      />
      <span>
        {current} {dayLabel(current)}
      </span>
    </span>
  );
}

export function StreakSummaryCard({
  streak,
  weekDays,
}: {
  streak: StreakState;
  weekDays: CalendarDaySlot[];
}) {
  const encouragement = streak.completedToday
    ? streak.current >= 7
      ? "Constância admirável! Você manteve sua chama acesa hoje."
      : "Meta de hoje concluída! Volte amanhã para continuar crescendo na fé."
    : streak.current > 0
      ? "Conclua uma lição, o terço ou um capítulo bíblico hoje para manter sua sequência!"
      : "Dê o primeiro passo hoje: conclua uma lição, o terço ou uma leitura bíblica.";

  return (
    <section
      aria-labelledby="streak-home-title"
      className="mt-6 rounded-3xl border-2 border-border bg-card p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "grid h-10 w-10 place-items-center rounded-2xl",
              streak.completedToday ? "bg-gold text-gold-foreground" : "bg-muted text-primary",
            )}
          >
            <Flame
              className={cn("h-5 w-5", streak.completedToday && "fill-current")}
              aria-hidden="true"
            />
          </span>
          <div>
            <h2 id="streak-home-title" className="text-lg font-semibold text-primary">
              Sequência diária
            </h2>
            <p className="text-xs font-bold text-muted-foreground">
              {streak.current} {dayLabel(streak.current)} seguidos · Recorde: {streak.best}{" "}
              {dayLabel(streak.best)}
            </p>
          </div>
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-bold",
            streak.completedToday ? "bg-success/15 text-success" : "bg-muted text-muted-foreground",
          )}
        >
          {streak.completedToday ? "Hoje concluído" : "Pendente hoje"}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground">{encouragement}</p>

      <div className="mt-4 grid grid-cols-7 gap-1.5" role="list" aria-label="Últimos 7 dias">
        {weekDays.length > 0
          ? weekDays.map((slot) => (
              <div
                key={slot.date}
                role="listitem"
                aria-label={`${slot.weekdayName} ${slot.shortDate}: ${slot.completed ? "concluído" : "sem registro"}`}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className={cn(
                    "text-[11px] font-bold",
                    slot.isToday ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {slot.weekdayLetter}
                </span>
                <span
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border-2 text-xs font-bold transition",
                    slot.completed
                      ? "border-gold bg-gold text-gold-foreground"
                      : slot.isToday
                        ? "border-primary border-dashed bg-background text-primary"
                        : "border-border bg-background text-muted-foreground",
                  )}
                >
                  {slot.completed ? (
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  ) : (
                    slot.shortDate.slice(0, 2)
                  )}
                </span>
              </div>
            ))
          : Array.from({ length: 7 }, (_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1" aria-hidden="true">
                <span className="text-[11px] font-bold text-muted-foreground">·</span>
                <span className="grid h-9 w-9 rounded-full border-2 border-border bg-background" />
              </div>
            ))}
      </div>
    </section>
  );
}

export function StreakProfileSection({
  streak,
  monthDays,
}: {
  streak: StreakState;
  monthDays: CalendarDaySlot[];
}) {
  const recentHistory = [...streak.history].reverse().slice(0, 10);

  return (
    <section className="mt-8 border-t-2 border-border pt-6" aria-labelledby="streak-profile-title">
      <h2
        id="streak-profile-title"
        className="flex items-center gap-2 text-xl font-semibold text-primary"
      >
        <Flame className="h-5 w-5" aria-hidden="true" />
        Sequência diária
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Registrada automaticamente ao concluir uma lição, o terço ou marcar um capítulo bíblico como
        lido.
      </p>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        <div className="rounded-2xl border-2 border-border bg-card p-3 text-center">
          <Flame className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
          <p className="mt-1 font-display text-2xl font-bold text-primary">{streak.current}</p>
          <p className="text-xs font-bold text-muted-foreground">
            Atual ({dayLabel(streak.current)})
          </p>
        </div>
        <div className="rounded-2xl border-2 border-border bg-card p-3 text-center">
          <Award className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
          <p className="mt-1 font-display text-2xl font-bold text-primary">{streak.best}</p>
          <p className="text-xs font-bold text-muted-foreground">Recorde</p>
        </div>
        <div className="rounded-2xl border-2 border-border bg-card p-3 text-center">
          <CalendarDays className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
          <p className="mt-1 font-display text-2xl font-bold text-primary">{streak.totalDays}</p>
          <p className="text-xs font-bold text-muted-foreground">Dias ativos</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border-2 border-border bg-card p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold text-primary">Histórico dos últimos 28 dias</h3>
          <span className="text-xs font-bold text-muted-foreground">
            {streak.completedToday ? "Hoje concluído ✓" : "Ainda não praticado hoje"}
          </span>
        </div>
        <div
          className="mt-3 grid grid-cols-7 gap-2"
          role="list"
          aria-label="Calendário dos últimos 28 dias"
        >
          {monthDays.length > 0
            ? monthDays.map((slot) => (
                <div
                  key={slot.date}
                  role="listitem"
                  title={`${slot.weekdayName}, ${slot.shortDate}${slot.completed ? ` · ${slot.activities} atividade(s)` : " · sem registro"}`}
                  aria-label={`${slot.shortDate}: ${slot.completed ? "concluído" : "sem registro"}`}
                  className={cn(
                    "flex aspect-square flex-col items-center justify-center rounded-xl border text-xs font-bold",
                    slot.completed
                      ? "border-gold bg-gold text-gold-foreground"
                      : slot.isToday
                        ? "border-2 border-dashed border-primary bg-background text-primary"
                        : "border-border bg-background text-muted-foreground",
                  )}
                >
                  <span>{slot.shortDate.slice(0, 2)}</span>
                </div>
              ))
            : Array.from({ length: 28 }, (_, idx) => (
                <div
                  key={idx}
                  aria-hidden="true"
                  className="aspect-square rounded-xl border border-border bg-background"
                />
              ))}
        </div>

        {recentHistory.length > 0 ? (
          <details className="group mt-4 border-t border-border pt-3">
            <summary className="cursor-pointer text-sm font-bold text-primary">
              Ver dias concluídos ({streak.totalDays})
            </summary>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              {recentHistory.map((item) => (
                <li
                  key={item.date}
                  className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-1.5"
                >
                  <span className="font-bold text-primary">
                    {formatShortDate(item.date)} ({item.date})
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">
                    {item.activities} {item.activities === 1 ? "atividade" : "atividades"}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <p className="mt-3 text-xs text-muted-foreground">
            Nenhum dia registrado ainda. Complete sua primeira atividade hoje para iniciar sua
            sequência!
          </p>
        )}
      </div>
    </section>
  );
}
