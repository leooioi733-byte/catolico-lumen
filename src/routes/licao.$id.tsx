import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Lightbulb, X } from "lucide-react";
import {
  AgnusCelebrationBanner,
  AgnusCompanionCard,
  AgnusTeachingTip,
} from "@/components/AgnusCompanion";
import { ProgressBar } from "@/components/AppShell";
import { LessonActivityStep } from "@/components/LessonActivityStep";
import { LessonIllustration } from "@/components/LessonIllustration";
import { StreakBadge } from "@/components/StreakDisplay";
import { LumenButton, lumenButton } from "@/components/ui/lumen-button";
import { useStreak } from "@/hooks/use-streak";
import { getLesson, getLessonUnit, lessonXp, type Lesson } from "@/lib/lessons";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { useAudio } from "@/components/AudioProvider";
import { useMascot } from "@/components/MascotProvider";
import { completionMascotEvent } from "@/lib/mascot";

export const Route = createFileRoute("/licao/$id")({
  loader: ({ params }) => {
    const lesson = getLesson(params.id);
    if (!lesson) throw notFound();
    return { title: lesson.title, lesson };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Lição"} — Lumen` },
      {
        name: "description",
        content: loaderData
          ? `Aprenda sobre ${loaderData.title} com ensinamentos da Bíblia e do Catecismo e perguntas interativas.`
          : "Lições da fé católica no Lumen.",
      },
      { property: "og:title", content: `${loaderData?.title ?? "Lição"} — Lumen` },
      {
        property: "og:description",
        content: loaderData
          ? `Aprenda sobre ${loaderData.title} com ensinamentos da Bíblia e do Catecismo e perguntas interativas.`
          : "Lições da fé católica no Lumen.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Licao,
});

function Licao() {
  const { lesson } = Route.useLoaderData();
  return <LessonSession key={lesson.id} lesson={lesson} />;
}

function LessonSession({ lesson }: { lesson: Lesson }) {
  const { progress, complete } = useProgress();
  const { streak, recordToday } = useStreak();
  const { play } = useAudio();
  const { notify } = useMascot();
  const nT = lesson.teachings.length;
  const activities = lesson.activities ?? [];
  const nA = activities.length;
  const nQ = lesson.questions.length;
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [activityCorrect, setActivityCorrect] = useState<boolean | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [earned, setEarned] = useState<number | null>(null);

  useEffect(() => {
    notify({ moment: "lessonStart", label: lesson.title });
  }, [lesson.id, lesson.title, notify]);
  useEffect(() => {
    const unit = getLessonUnit(lesson.id);
    if (unit?.lessons[0]?.id === lesson.id && !progress.completed.includes(lesson.id)) {
      notify({ moment: "newUnit", special: true, key: `unit:${unit.id}`, label: unit.title });
    }
  }, [lesson.id, progress.completed, notify]);

  const total = nT + nA + nQ;
  if (earned !== null) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
        <h1 className="animate-rise text-3xl font-bold text-primary">Lição concluída!</h1>
        <p className="animate-rise mt-2 text-muted-foreground">{lesson.title}</p>
        <div className="animate-rise mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-2xl bg-gold px-6 py-3 font-display text-2xl font-bold text-gold-foreground">
            +{earned} XP
          </div>
          <StreakBadge
            current={streak.current}
            completedToday={streak.completedToday}
            className="px-4 py-3 text-base"
          />
        </div>
        {mistakes === 0 && (
          <p className="mt-3 text-sm font-bold text-secondary">Perfeito! Bônus por acertar tudo.</p>
        )}
        <AgnusCompanionCard
          variant="celebration"
          moment={completionMascotEvent(progress.completed, lesson.id).moment}
          className="mt-6"
        />
        <AgnusCelebrationBanner filterRequirement="track-percent" className="mt-4 w-full" />
        <Link to="/inicio" className={cn(lumenButton(), "mt-8")}>
          Continuar
        </Link>
      </main>
    );
  }

  const isTeaching = step < nT;
  const isActivity = !isTeaching && step < nT + nA;
  const teaching = isTeaching ? lesson.teachings[step] : undefined;
  const activity = isActivity ? activities[step - nT] : undefined;
  const q = !isTeaching && !isActivity ? (lesson.questions[step - nT - nA] ?? null) : null;
  const correct = isActivity ? activityCorrect === true : q !== null && picked === q.answer;

  const advance = () => {
    if (step + 1 >= total) {
      const xp = lessonXp(lesson, mistakes);
      complete(lesson.id, xp);
      recordToday();
      setEarned(xp);
      notify(completionMascotEvent(progress.completed, lesson.id));
      return;
    }
    setStep(step + 1);
    setPicked(null);
    setChecked(false);
    setActivityCorrect(null);
  };
  const check = () => {
    if (picked === null || checked || !q) return;
    setChecked(true);
    play(correct ? "correct" : "incorrect");
    notify({ moment: correct ? "correct" : "incorrect" });
    if (!correct) setMistakes((m) => m + 1);
  };
  const handleActivityResult = (isRight: boolean) => {
    if (checked) return;
    setActivityCorrect(isRight);
    setChecked(true);
    play(isRight ? "correct" : "incorrect");
    notify({ moment: isRight ? "correct" : "incorrect" });
    if (!isRight) setMistakes((m) => m + 1);
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col px-5 pb-6 pt-5">
      <div className="flex items-center gap-3">
        <Link to="/inicio" aria-label="Sair da lição" className="text-muted-foreground">
          <X className="h-7 w-7" />
        </Link>
        <ProgressBar value={((step + (checked ? 1 : 0)) / total) * 100} />
      </div>

      <div key={step} className="animate-rise flex flex-1 flex-col pt-6">
        {isTeaching && teaching ? (
          <>
            <p className="text-sm font-bold uppercase text-secondary">
              Ensinamento {step + 1} de {nT}
            </p>
            <div className="mt-4 space-y-4 border-y-2 border-border py-5">
              {teaching.illustration && <LessonIllustration id={teaching.illustration} />}
              <h1 className="text-2xl font-semibold text-primary">{teaching.title}</h1>
              <p className="text-lg leading-relaxed text-foreground">{teaching.text}</p>
              {teaching.example && (
                <div className="rounded-2xl border border-border bg-accent/70 p-3.5 text-sm leading-relaxed text-foreground">
                  <p className="flex items-center gap-1.5 font-bold text-primary">
                    <Lightbulb className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Exemplo na prática
                  </p>
                  <p className="mt-1">{teaching.example}</p>
                </div>
              )}
              <p className="text-sm font-bold text-muted-foreground">{teaching.source}</p>
            </div>
            {step === 0 && (
              <div className="mt-4">
                <AgnusTeachingTip />
              </div>
            )}
          </>
        ) : isActivity && activity ? (
          <LessonActivityStep
            key={`${lesson.id}-act-${step}`}
            activity={activity}
            checked={checked}
            onResult={handleActivityResult}
          />
        ) : (
          q && (
            <>
              <p className="text-sm font-bold uppercase text-secondary">
                Pergunta {step - nT - nA + 1} de {nQ}
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-primary">{q.prompt}</h1>
              <div className="mt-6 space-y-3">
                {q.options.map((o, i) => {
                  const state = checked
                    ? i === q.answer
                      ? "right"
                      : i === picked
                        ? "wrong"
                        : "idle"
                    : picked === i
                      ? "sel"
                      : "idle";
                  return (
                    <LumenButton
                      key={o}
                      disabled={checked}
                      onClick={() => setPicked(i)}
                      aria-pressed={picked === i}
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
                      <span className="min-w-0 flex-1">{o}</span>
                      {state === "right" && (
                        <Check aria-hidden="true" className="h-5 w-5 shrink-0" />
                      )}
                      {state === "wrong" && <X aria-hidden="true" className="h-5 w-5 shrink-0" />}
                    </LumenButton>
                  );
                })}
              </div>
            </>
          )
        )}
      </div>

      {checked && (q || activity) && (
        <div
          role="status"
          className={cn(
            "animate-rise my-5 flex items-center gap-3 rounded-2xl p-3",
            correct ? "bg-success/15" : "bg-destructive/10",
          )}
        >
          <div className="min-w-0 flex-1">
            <p
              className={cn(
                "font-display text-lg font-bold",
                correct ? "text-success" : "text-destructive",
              )}
            >
              {correct ? "Muito bem!" : "Opa! Vamos aprender:"}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              {q ? q.explanation : activity?.explanation}
            </p>
          </div>
        </div>
      )}

      {isTeaching ? (
        <LumenButton onClick={advance}>Entendi</LumenButton>
      ) : isActivity ? (
        checked ? (
          <LumenButton variant={correct ? "success" : "danger"} onClick={advance}>
            Continuar
          </LumenButton>
        ) : null
      ) : !checked ? (
        <LumenButton variant="gold" disabled={picked === null} onClick={check}>
          Verificar
        </LumenButton>
      ) : (
        <LumenButton variant={correct ? "success" : "danger"} onClick={advance}>
          Continuar
        </LumenButton>
      )}
    </main>
  );
}
