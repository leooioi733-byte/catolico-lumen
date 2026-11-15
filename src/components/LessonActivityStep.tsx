import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { LumenButton } from "@/components/ui/lumen-button";
import type { ClassifyActivity, LessonActivity, MatchActivity } from "@/lib/lesson-types";
import { cn } from "@/lib/utils";

type ActivityProps = {
  activity: LessonActivity;
  checked: boolean;
  onResult: (correct: boolean) => void;
};

export function LessonActivityStep({ activity, checked, onResult }: ActivityProps) {
  if (activity.type === "match") {
    return <MatchActivityView activity={activity} checked={checked} onResult={onResult} />;
  }
  return <ClassifyActivityView activity={activity} checked={checked} onResult={onResult} />;
}

function deterministicOrder<T extends { id: string }>(items: readonly T[]): T[] {
  // Deterministic rotation so right-hand options never align 1:1 with left-hand rows.
  if (items.length <= 1) return [...items];
  return [...items.slice(1), items[0]!];
}

function MatchActivityView({
  activity,
  checked,
  onResult,
}: {
  activity: MatchActivity;
  checked: boolean;
  onResult: (correct: boolean) => void;
}) {
  const rightOptions = useMemo(() => deterministicOrder(activity.pairs), [activity.pairs]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(activity.pairs[0]?.id ?? null);
  const [assignments, setAssignments] = useState<Record<string, string>>({});

  const allAssigned = activity.pairs.every((p) => Boolean(assignments[p.id]));

  const assignRight = (rightPairId: string) => {
    if (checked) return;
    const targetLeft = selectedLeft ?? activity.pairs.find((p) => !assignments[p.id])?.id ?? null;
    if (!targetLeft) return;

    const next = { ...assignments };
    // Ensure one-to-one mapping: remove previous owner of this rightPairId
    for (const [k, v] of Object.entries(next)) {
      if (v === rightPairId) delete next[k];
    }
    next[targetLeft] = rightPairId;
    setAssignments(next);

    const nextUnassigned = activity.pairs.find((p) => p.id !== targetLeft && !next[p.id]);
    setSelectedLeft(nextUnassigned?.id ?? null);
  };

  const resetPairs = () => {
    if (checked) return;
    setAssignments({});
    setSelectedLeft(activity.pairs[0]?.id ?? null);
  };

  const verify = () => {
    if (!allAssigned || checked) return;
    const allCorrect = activity.pairs.every((p) => assignments[p.id] === p.id);
    onResult(allCorrect);
  };

  return (
    <div>
      <p className="text-sm font-bold uppercase text-secondary">Atividade interativa · Associar</p>
      <h1 className="mt-2 text-2xl font-semibold text-primary">{activity.title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{activity.instruction}</p>

      <div className="mt-4 space-y-2.5">
        {activity.pairs.map((pair, idx) => {
          const matchedRightId = assignments[pair.id];
          const matchedRight = activity.pairs.find((p) => p.id === matchedRightId);
          const isSelected = selectedLeft === pair.id;
          const isCorrect = checked && matchedRightId === pair.id;
          const isWrong = checked && matchedRightId !== pair.id;

          return (
            <button
              key={pair.id}
              type="button"
              disabled={checked}
              data-sound="select"
              onClick={() => setSelectedLeft(pair.id)}
              aria-pressed={isSelected}
              className={cn(
                "w-full rounded-2xl border-2 p-3 text-left transition",
                isCorrect && "border-success bg-success/15 text-foreground",
                isWrong && "border-destructive bg-destructive/10 text-foreground",
                !checked && isSelected && "border-primary bg-accent",
                !checked && !isSelected && "border-border bg-card",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-primary">
                  {idx + 1}. {pair.left}
                </span>
                {isCorrect && (
                  <Check className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                )}
                {isWrong && <X className="h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {matchedRight
                  ? `→ ${matchedRight.right}`
                  : isSelected
                    ? "Toque abaixo na correspondência"
                    : "Aguardando associação"}
              </p>
            </button>
          );
        })}
      </div>

      {!checked && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-bold uppercase text-muted-foreground">
              Escolha o par correspondente
            </p>
            {Object.keys(assignments).length > 0 && (
              <button
                type="button"
                data-sound="select"
                onClick={resetPairs}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary underline"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Limpar
              </button>
            )}
          </div>
          <div className="grid gap-2">
            {rightOptions.map((option) => {
              const usedByIdx = activity.pairs.findIndex((p) => assignments[p.id] === option.id);
              const isUsed = usedByIdx >= 0;
              return (
                <LumenButton
                  key={option.id}
                  type="button"
                  data-sound="select"
                  variant={isUsed ? "selectedAnswer" : "answer"}
                  onClick={() => assignRight(option.id)}
                  className="h-auto min-h-11 justify-between px-4 py-2.5 text-left font-sans text-sm font-bold normal-case"
                >
                  <span className="min-w-0 flex-1">{option.right}</span>
                  {isUsed && (
                    <span className="ml-2 shrink-0 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      #{usedByIdx + 1}
                    </span>
                  )}
                </LumenButton>
              );
            })}
          </div>
        </div>
      )}

      {!checked && (
        <div className="mt-6">
          <LumenButton variant="gold" disabled={!allAssigned} onClick={verify}>
            Verificar associação
          </LumenButton>
        </div>
      )}
    </div>
  );
}

function ClassifyActivityView({
  activity,
  checked,
  onResult,
}: {
  activity: ClassifyActivity;
  checked: boolean;
  onResult: (correct: boolean) => void;
}) {
  const [picks, setPicks] = useState<Record<string, 0 | 1>>({});
  const allPicked = activity.items.every((item) => picks[item.id] === 0 || picks[item.id] === 1);

  const verify = () => {
    if (!allPicked || checked) return;
    const allCorrect = activity.items.every((item) => picks[item.id] === item.category);
    onResult(allCorrect);
  };

  return (
    <div>
      <p className="text-sm font-bold uppercase text-secondary">
        Atividade interativa · Classificar
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-primary">{activity.title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{activity.instruction}</p>

      <div className="mt-4 space-y-3">
        {activity.items.map((item) => {
          const pickedCat = picks[item.id];
          const isCorrect = checked && pickedCat === item.category;
          const isWrong = checked && pickedCat !== item.category;
          return (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl border-2 p-3",
                isCorrect && "border-success bg-success/15",
                isWrong && "border-destructive bg-destructive/10",
                !checked && "border-border bg-card",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-bold text-foreground">{item.text}</p>
                {isCorrect && (
                  <Check className="h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                )}
                {isWrong && <X className="h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />}
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                {activity.categories.map((catLabel, catIndex) => {
                  const idx = catIndex as 0 | 1;
                  const active = pickedCat === idx;
                  const rightAnswer = checked && item.category === idx;
                  return (
                    <button
                      key={catLabel}
                      type="button"
                      disabled={checked}
                      data-sound="select"
                      aria-pressed={active}
                      onClick={() => setPicks((prev) => ({ ...prev, [item.id]: idx }))}
                      className={cn(
                        "rounded-xl border-2 px-3 py-2 text-xs font-bold transition",
                        checked && rightAnswer
                          ? "border-success bg-success text-success-foreground"
                          : active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-primary",
                      )}
                    >
                      {catLabel}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {!checked && (
        <div className="mt-6">
          <LumenButton variant="gold" disabled={!allPicked} onClick={verify}>
            Verificar classificação
          </LumenButton>
        </div>
      )}
    </div>
  );
}
