import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { AgnusCelebrationBanner, AgnusCompanionCard } from "@/components/AgnusCompanion";
import { ProgressBar } from "@/components/AppShell";
import { useAudio } from "@/components/AudioProvider";
import { ChristmasIllustration } from "@/components/ChristmasIllustration";
import { LessonActivityStep } from "@/components/LessonActivityStep";
import { StreakBadge } from "@/components/StreakDisplay";
import { LumenButton, lumenButton } from "@/components/ui/lumen-button";
import { useChristmasProgress } from "@/hooks/use-christmas-progress";
import { useStreak } from "@/hooks/use-streak";
import {
  CHRISTMAS_CHAPTERS,
  getAdjacentChristmasChapters,
  getChristmasChapter,
  type ChristmasChapter,
} from "@/lib/christmas";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/natal/$id")({
  loader: ({ params }) => {
    const chapter = getChristmasChapter(params.id);
    if (!chapter) throw notFound();
    return { chapter };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.chapter.title ?? "Capítulo de Natal"} — Especial de Natal · Lumen`,
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.chapter.subtitle}. Capítulo ${loaderData.chapter.order} da jornada Especial de Natal no Lumen.`
          : "Capítulo do Especial de Natal no Lumen.",
      },
      {
        property: "og:title",
        content: `${loaderData?.chapter.title ?? "Capítulo de Natal"} — Especial de Natal · Lumen`,
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  notFoundComponent: () => (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
      <p className="text-muted-foreground">Capítulo de Natal não encontrado.</p>
      <Link to="/natal" className={cn(lumenButton(), "mt-4")}>
        Voltar ao Especial de Natal
      </Link>
    </main>
  ),
  component: NatalChapterRoute,
});

function NatalChapterRoute() {
  const { chapter } = Route.useLoaderData();
  return <ChristmasChapterSession key={chapter.id} chapter={chapter} />;
}

function ChristmasChapterSession({ chapter }: { chapter: ChristmasChapter }) {
  const { progress, completeChapter, completedCount, totalCount } = useChristmasProgress();
  const { streak, recordToday } = useStreak();
  const { play } = useAudio();
  const { previous, next } = getAdjacentChristmasChapters(chapter.id);

  // Step 0: Reading & Biblical Context; Step 1: Activity; Steps 2..: Interactive Questions
  const totalSteps = 2 + chapter.questions.length;
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [activityCorrect, setActivityCorrect] = useState<boolean | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [completedNow, setCompletedNow] = useState(false);

  const alreadyDone = progress.completed.includes(chapter.id);

  const restartChapter = () => {
    setStep(0);
    setPicked(null);
    setChecked(false);
    setActivityCorrect(null);
    setMistakes(0);
    setCompletedNow(false);
  };

  if (completedNow) {
    const allCompleted = completedCount >= totalCount;
    return (
      <main className="christmas-scene-enter mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 py-8 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gold text-gold-foreground">
          <Star className="christmas-twinkle h-8 w-8 fill-current" aria-hidden="true" />
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-wide text-secondary">
          Capítulo {chapter.order} de {CHRISTMAS_CHAPTERS.length}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-primary">
          {allCompleted ? "Jornada de Natal concluída!" : "Capítulo concluído!"}
        </h1>
        <p className="mt-2 text-muted-foreground">{chapter.title}</p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-2xl border-2 border-gold bg-card px-4 py-2 font-display text-base font-bold text-primary">
            {completedCount}/{totalCount} capítulos
          </span>
          <StreakBadge
            current={streak.current}
            completedToday={streak.completedToday}
            className="px-4 py-2 text-base"
          />
        </div>

        {mistakes === 0 && (
          <p className="mt-3 text-sm font-bold text-secondary">
            Excelente! Você concluiu todas as atividades e perguntas sem erros.
          </p>
        )}

        <AgnusCompanionCard variant="celebration" moment="christmasComplete" className="mt-5" />
        <AgnusCelebrationBanner filterRequirement="christmas-percent" className="mt-4 w-full" />

        <div className="mt-8 w-full space-y-3">
          {next && (
            <Link
              to="/natal/$id"
              params={{ id: next.id }}
              className={cn(lumenButton({ variant: "gold" }), "gap-2")}
            >
              <span>Próximo: {next.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          )}
          <LumenButton variant="outline" onClick={restartChapter} className="gap-2">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Rever este capítulo
          </LumenButton>
          <Link to="/natal" className={lumenButton({ variant: next ? "outline" : "gold" })}>
            Voltar ao Especial de Natal
          </Link>
        </div>
      </main>
    );
  }

  const isReading = step === 0;
  const isActivity = step === 1;
  const question = !isReading && !isActivity ? (chapter.questions[step - 2] ?? null) : null;
  const isCorrect = isActivity
    ? activityCorrect === true
    : question !== null && picked === question.answer;

  const advance = () => {
    if (step + 1 >= totalSteps) {
      completeChapter(chapter.id);
      recordToday();
      setCompletedNow(true);
      return;
    }
    setStep((s) => s + 1);
    setPicked(null);
    setChecked(false);
    setActivityCorrect(null);
  };

  const handleActivityResult = (isRight: boolean) => {
    if (checked) return;
    setActivityCorrect(isRight);
    setChecked(true);
    play(isRight ? "correct" : "incorrect");
    if (!isRight) setMistakes((m) => m + 1);
  };

  const checkQuestion = () => {
    if (picked === null || checked || !question) return;
    setChecked(true);
    const right = picked === question.answer;
    play(right ? "correct" : "incorrect");
    if (!right) setMistakes((m) => m + 1);
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-8 pt-5">
      <div className="flex items-center gap-3">
        <Link
          to="/natal"
          aria-label="Voltar ao Especial de Natal"
          className="btn-3d-sm grid h-11 w-11 shrink-0 place-items-center border-2 border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </Link>
        <ProgressBar
          value={((step + (checked ? 1 : 0)) / totalSteps) * 100}
          label={`Progresso no capítulo ${chapter.order}`}
        />
        <span className="shrink-0 text-xs font-bold tabular-nums text-primary">
          {chapter.order}/{CHRISTMAS_CHAPTERS.length}
        </span>
      </div>

      <div key={step} className="christmas-scene-enter flex flex-1 flex-col pt-5">
        {isReading ? (
          <article className="space-y-5">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-secondary">
                <span>Especial de Natal · Capítulo {String(chapter.order).padStart(2, "0")}</span>
                {alreadyDone && <span className="text-success">Concluído · Modo revisão</span>}
              </div>
              <h1 className="mt-1 text-2xl font-bold text-primary sm:text-3xl">{chapter.title}</h1>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{chapter.subtitle}</p>
            </div>

            <ChristmasIllustration id={chapter.illustration} alt={chapter.illustrationCaption} />

            <section className="rounded-2xl border-2 border-border bg-card p-4">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary">
                <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                Contextualização bíblica
              </h2>
              <p className="mt-2 text-base leading-relaxed text-foreground">
                {chapter.biblicalContext}
              </p>
            </section>

            <section className="space-y-3 border-y-2 border-border py-4">
              <h2 className="text-lg font-semibold text-primary">Explicação e sentido na fé</h2>
              {chapter.explanation.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="rounded-2xl border border-border bg-accent/70 p-4">
              <h2 className="flex items-center gap-1.5 text-sm font-bold text-primary">
                <Lightbulb className="h-4 w-4 shrink-0" aria-hidden="true" />
                Curiosidade natalina
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{chapter.curiosity}</p>
            </section>

            <section className="rounded-2xl border-2 border-border bg-card p-4">
              <h2 className="flex items-center gap-1.5 text-sm font-bold text-primary">
                <Sparkles className="christmas-twinkle h-4 w-4 shrink-0" aria-hidden="true" />
                Referências bíblicas e do Catecismo
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm">
                {chapter.references.map((ref) => (
                  <li
                    key={ref.label}
                    className="border-t border-border/60 pt-2.5 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-primary">{ref.label}</span>
                      {ref.bookSlug && ref.chapter && (
                        <Link
                          to="/biblia/$livro/$cap"
                          params={{ livro: ref.bookSlug, cap: String(ref.chapter) }}
                          className="btn-3d-sm inline-flex min-h-8 items-center border border-gold/70 bg-accent px-2.5 py-1 text-xs font-bold text-primary [--btn-depth:var(--gold-deep)] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          Ler na Bíblia →
                        </Link>
                      )}
                    </div>
                    <p className="mt-0.5 text-muted-foreground">{ref.passage}</p>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        ) : isActivity ? (
          <LessonActivityStep
            key={`${chapter.id}-activity`}
            activity={chapter.activity}
            checked={checked}
            onResult={handleActivityResult}
          />
        ) : (
          question && (
            <div>
              <p className="text-sm font-bold uppercase text-secondary">
                Pergunta {step - 1} de {chapter.questions.length}
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-primary">{question.prompt}</h1>
              <div className="mt-6 space-y-3">
                {question.options.map((option, index) => {
                  const state = checked
                    ? index === question.answer
                      ? "right"
                      : index === picked
                        ? "wrong"
                        : "idle"
                    : picked === index
                      ? "sel"
                      : "idle";

                  return (
                    <LumenButton
                      key={option}
                      disabled={checked}
                      onClick={() => setPicked(index)}
                      aria-pressed={picked === index}
                      data-sound="select"
                      variant={
                        state === "right"
                          ? "rightAnswer"
                          : state === "wrong"
                            ? "wrongAnswer"
                            : state === "sel"
                              ? "selectedAnswer"
                              : "answer"
                      }
                      className="justify-start gap-3 px-4 text-left font-sans text-base font-bold normal-case disabled:opacity-100"
                    >
                      <span className="min-w-0 flex-1">{option}</span>
                      {state === "right" && (
                        <Check aria-hidden="true" className="h-5 w-5 shrink-0" />
                      )}
                      {state === "wrong" && <X aria-hidden="true" className="h-5 w-5 shrink-0" />}
                    </LumenButton>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>

      {checked && (question || isActivity) && (
        <div
          role="status"
          className={cn(
            "animate-rise my-5 flex items-center gap-3 rounded-2xl p-3",
            isCorrect ? "bg-success/15" : "bg-destructive/10",
          )}
        >
          <div className="min-w-0 flex-1">
            <p
              className={cn(
                "font-display text-lg font-bold",
                isCorrect ? "text-success" : "text-destructive",
              )}
            >
              {isCorrect ? "Muito bem!" : "Vamos aprofundar:"}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              {question ? question.explanation : chapter.activity.explanation}
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-3">
        {isReading ? (
          <>
            <LumenButton variant="gold" onClick={advance}>
              Praticar atividade do capítulo
            </LumenButton>
            {(previous || next) && (
              <div className="flex items-center justify-between gap-3 pt-1 text-xs font-bold">
                {previous ? (
                  <Link
                    to="/natal/$id"
                    params={{ id: previous.id }}
                    className="btn-3d-sm inline-flex min-h-10 items-center gap-1.5 border-2 border-border bg-card px-3.5 py-1.5 text-xs font-bold text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    Cap. {previous.order}
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link
                    to="/natal/$id"
                    params={{ id: next.id }}
                    className="btn-3d-sm inline-flex min-h-10 items-center gap-1.5 border-2 border-border bg-card px-3.5 py-1.5 text-xs font-bold text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Cap. {next.order}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            )}
          </>
        ) : isActivity ? (
          checked ? (
            <LumenButton variant={isCorrect ? "success" : "danger"} onClick={advance}>
              Continuar para perguntas
            </LumenButton>
          ) : null
        ) : !checked ? (
          <LumenButton variant="gold" disabled={picked === null} onClick={checkQuestion}>
            Verificar
          </LumenButton>
        ) : (
          <LumenButton variant={isCorrect ? "success" : "danger"} onClick={advance}>
            {step + 1 >= totalSteps ? "Concluir capítulo" : "Continuar"}
          </LumenButton>
        )}
      </div>
    </main>
  );
}
