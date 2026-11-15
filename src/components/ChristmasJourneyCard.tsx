import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles, Star } from "lucide-react";
import { ProgressBar } from "@/components/AppShell";
import { ChristmasIllustration } from "@/components/ChristmasIllustration";
import { useChristmasProgress } from "@/hooks/use-christmas-progress";
import { cn } from "@/lib/utils";

export function ChristmasJourneyCard({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const { completedCount, totalCount, percent, nextChapter, isJourneyComplete } =
    useChristmasProgress();

  const ctaLabel = isJourneyComplete
    ? "Jornada concluída · Rever capítulos"
    : completedCount > 0 && nextChapter
      ? `Continuar: ${nextChapter.title}`
      : "Iniciar jornada da Natividade";

  return (
    <section
      aria-label="Especial de Natal"
      className={cn(
        "overflow-hidden rounded-3xl border-2 border-gold/60 bg-card text-card-foreground",
        className,
      )}
    >
      {!compact && (
        <div className="relative">
          <ChristmasIllustration
            id="presepio"
            alt="Presépio de Belém com Maria, José e o Menino Jesus sob a Estrela de Belém"
            className="rounded-none border-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/65 via-black/25 to-transparent"
          />
          <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold text-[#F5EBD8]">
            <span className="inline-flex items-center gap-1.5">
              <Star className="christmas-twinkle h-3.5 w-3.5 fill-current text-[#F3D68A]" />
              Especial de Natal
            </span>
            <span>
              {completedCount}/{totalCount} capítulos
            </span>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-secondary">
              <Sparkles className="christmas-twinkle h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Edição Especial de Natal
            </p>
            <h2 className="mt-1 font-display text-xl font-semibold text-primary">
              História da Natividade
            </h2>
          </div>
          {compact && (
            <span className="shrink-0 text-xs font-bold text-muted-foreground">
              {completedCount}/{totalCount}
            </span>
          )}
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          10 capítulos interativos das profecias ao Presépio de Belém, com ilustrações, curiosidades
          e Evangelho.
        </p>

        <div className="mt-3">
          <ProgressBar value={percent} label="Progresso no Especial de Natal" />
        </div>

        <Link
          to="/natal"
          className="btn-3d mt-4 flex min-h-11 w-full items-center justify-between gap-2 rounded-2xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground [--btn-depth:var(--primary-deep)]"
        >
          <span className="min-w-0 truncate">{ctaLabel}</span>
          <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
