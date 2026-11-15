import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Play, RotateCcw, Star } from "lucide-react";
import { AgnusNextGoalBanner } from "@/components/AgnusCompanion";
import { AppShell, ProgressBar } from "@/components/AppShell";
import { ChristmasIllustration } from "@/components/ChristmasIllustration";
import { lumenButton } from "@/components/ui/lumen-button";
import { useChristmasProgress } from "@/hooks/use-christmas-progress";
import { CHRISTMAS_CHAPTERS } from "@/lib/christmas";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/natal/")({
  head: () => ({
    meta: [
      { title: "Especial de Natal — Lumen" },
      {
        name: "description",
        content:
          "Jornada especial de Natal com 10 capítulos interativos sobre o nascimento de Jesus Cristo e a tradição católica.",
      },
      { property: "og:title", content: "Especial de Natal — Lumen" },
      {
        property: "og:description",
        content:
          "Explore a Natividade de Jesus Cristo em 10 capítulos com ilustrações, referências bíblicas e atividades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EspecialDeNatal,
});

function EspecialDeNatal() {
  const { progress, completedCount, totalCount, percent, nextChapter, isJourneyComplete } =
    useChristmasProgress();

  const targetChapter = nextChapter ?? CHRISTMAS_CHAPTERS[0]!;

  return (
    <AppShell wide>
      <div className="christmas-scene-enter">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link to="/inicio" className="text-sm font-bold text-muted-foreground">
            ← Início
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
            <Star className="christmas-twinkle h-3.5 w-3.5 fill-current" aria-hidden="true" />
            {completedCount} de {totalCount} capítulos concluídos
          </span>
        </div>

        <section className="mt-3 overflow-hidden rounded-3xl border-2 border-gold/70 bg-card">
          <ChristmasIllustration
            id="presepio"
            alt="Presépio iluminado pela Estrela de Belém com Maria, José e o Menino Jesus"
            className="rounded-none border-0"
          />
          <div className="p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-secondary">
              Especial de Natal · Jornada da Natividade
            </p>
            <h1 className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
              O Nascimento de Jesus Cristo
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
              Caminhe das profecias antigas até o Presépio de Belém, descobrindo os Evangelhos, a
              Encarnação e as tradições católicas do Natal em 10 capítulos interativos.
            </p>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-primary">
                <span>Progresso da jornada</span>
                <span className="tabular-nums">{percent}%</span>
              </div>
              <ProgressBar value={percent} label="Progresso na jornada Especial de Natal" />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/natal/$id"
                params={{ id: targetChapter.id }}
                className={cn(lumenButton({ variant: "gold" }), "gap-2 sm:w-auto")}
              >
                {isJourneyComplete ? (
                  <>
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Rever desde o capítulo 1
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                    {completedCount > 0
                      ? `Continuar: Cap. ${targetChapter.order}`
                      : "Começar capítulo 1"}
                  </>
                )}
              </Link>
            </div>
          </div>
        </section>

        <AgnusNextGoalBanner source="christmas" className="mt-5" />

        <section className="mt-8" aria-labelledby="natal-chapters-heading">
          <div className="flex items-baseline justify-between gap-2">
            <h2 id="natal-chapters-heading" className="text-xl font-semibold text-primary">
              Jornada em 10 capítulos
            </h2>
            <span className="text-xs font-bold text-muted-foreground">
              Toque para estudar ou revisar
            </span>
          </div>

          <ol className="mt-4 grid gap-4 sm:grid-cols-2">
            {CHRISTMAS_CHAPTERS.map((chapter) => {
              const done = progress.completed.includes(chapter.id);
              const isCurrent = !done && nextChapter?.id === chapter.id;

              return (
                <li key={chapter.id}>
                  <Link
                    to="/natal/$id"
                    params={{ id: chapter.id }}
                    className={cn(
                      "flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-card transition active:scale-[0.98]",
                      isCurrent
                        ? "border-primary ring-2 ring-gold ring-offset-2 ring-offset-background"
                        : done
                          ? "border-gold/80"
                          : "border-border",
                    )}
                  >
                    <ChristmasIllustration
                      id={chapter.illustration}
                      alt={chapter.illustrationCaption}
                      compact
                      className="rounded-none border-0"
                    />
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center justify-between gap-2 text-xs font-bold">
                        <span className="text-secondary">
                          Capítulo {String(chapter.order).padStart(2, "0")}
                        </span>
                        {done ? (
                          <span className="inline-flex items-center gap-1 text-success">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                            Concluído · Revisar
                          </span>
                        ) : isCurrent ? (
                          <span className="text-primary">Próximo da jornada</span>
                        ) : (
                          <span className="text-muted-foreground">Disponível</span>
                        )}
                      </div>

                      <h3 className="mt-1.5 font-display text-lg font-semibold text-primary">
                        {chapter.title}
                      </h3>
                      <p className="mt-1 flex-1 text-sm text-muted-foreground">
                        {chapter.subtitle}
                      </p>

                      <div className="mt-3 flex items-center justify-between border-t border-border/70 pt-2.5 text-xs font-bold text-primary">
                        <span>{done ? "Rever conteúdo" : "Abrir capítulo"}</span>
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </AppShell>
  );
}
