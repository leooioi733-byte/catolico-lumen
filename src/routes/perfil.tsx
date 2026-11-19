import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  HeartHandshake,
  Map,
  Sparkles,
  User,
} from "lucide-react";
import { AppShell, ProgressBar, XpBadge } from "@/components/AppShell";
import { AgnusWardrobeSection } from "@/components/AgnusWardrobeSection";
import { DevotionSaintTabPanel, ProfileDevotionSaintCard } from "@/components/DevotionSaintSection";
import { ProfileEmblem, ProfilePersonalization } from "@/components/ProfilePersonalization";
import { StreakBadge, StreakProfileSection } from "@/components/StreakDisplay";
import { useBibleProgress } from "@/components/BibleProgressProvider";
import { useLocalProfile } from "@/hooks/use-local-profile";
import { cn } from "@/lib/utils";
import { useStreak } from "@/hooks/use-streak";
import { BIBLE_BOOKS } from "@/lib/bible-books";
import { formatPercent, getReadingStats } from "@/lib/bible-progress";
import { getLearningStats } from "@/lib/statistics";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Conta e estatísticas — Lumen" },
      {
        name: "description",
        content:
          "Personalize seu perfil e acompanhe seu avanço nas lições e na leitura da Bíblia no Lumen.",
      },
      { property: "og:title", content: "Conta e estatísticas — Lumen" },
      {
        property: "og:description",
        content: "Suas preferências pessoais e o progresso na trilha e na Bíblia católica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Perfil,
});

function Perfil() {
  const { progress } = useProgress();
  const { profile, ready, saveProfile, saveDevotionSaint } = useLocalProfile();
  const { streak, monthDays } = useStreak();
  const { progress: bible, storageError } = useBibleProgress();
  const [personalTab, setPersonalTab] = useState<"profile" | "saint">("profile");
  const personalizationRef = useRef<HTMLElement | null>(null);

  const openSaintTab = () => {
    setPersonalTab("saint");
    personalizationRef.current?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  };
  const learning = getLearningStats(progress.completed);
  const reading = getReadingStats(bible);
  const testaments = (["AT", "NT"] as const).map((testament) => ({
    testament,
    stats: getReadingStats(
      bible,
      BIBLE_BOOKS.filter((book) => book.testament === testament),
    ),
  }));
  return (
    <AppShell>
      <p className="mb-5 text-sm font-bold text-muted-foreground">Sua conta</p>
      <div className="flex items-center gap-4">
        <ProfileEmblem symbol={profile.symbol} />
        <div className="min-w-0">
          <h1 className="break-words text-2xl font-bold text-primary">
            {profile.nickname || "Visitante"}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <XpBadge xp={progress.xp} />
            <StreakBadge current={streak.current} completedToday={streak.completedToday} />
          </div>
        </div>
      </div>

      <ProfileDevotionSaintCard saintId={profile.devotionSaintId} onOpenPicker={openSaintTab} />

      <StreakProfileSection streak={streak} monthDays={monthDays} />

      <AgnusWardrobeSection />

      <section className="mt-8 border-t-2 border-border pt-6" aria-labelledby="stats-title">
        <h2 id="stats-title" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          Suas estatísticas
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            {
              title: "Trilha",
              stats: learning,
              count: learning.completed,
              noun: "lições",
              to: "/trilha" as const,
              icon: Map,
            },
            {
              title: "Bíblia",
              stats: reading,
              count: reading.read,
              noun: "capítulos",
              to: "/biblia" as const,
              icon: BookOpen,
            },
          ].map(({ title, stats, count, noun, to, icon: Icon }) => (
            <Link
              key={title}
              to={to}
              className="btn-3d min-w-0 rounded-2xl border-2 border-border bg-card p-4 [--btn-depth:var(--border)] hover:border-gold/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex items-center justify-between text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm font-bold text-muted-foreground">{title}</p>
              <p className="mt-1 font-display text-3xl font-semibold text-primary">
                {formatPercent(stats.percent)}
              </p>
              <div className="mt-3">
                <ProgressBar value={stats.percent} label={`Progresso na ${title}`} />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                {count} de {stats.total} {noun}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
          <span>
            {learning.completedUnits} de {learning.perUnit.length} unidades concluídas
          </span>
          <span>{reading.completedBooks} de 73 livros lidos</span>
        </div>
        <details className="group mt-5 border-t border-border pt-4">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 rounded-xl border-2 border-transparent px-3 py-2 font-bold text-primary transition hover:border-border hover:bg-accent/45">
            Por unidade da trilha
            <ChevronDown
              className="h-5 w-5 shrink-0 transition group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="mt-4 space-y-4">
            {learning.perUnit.map(({ unit, completed, total, percent }) => (
              <div key={unit.id}>
                <div className="mb-2 flex items-start justify-between gap-3 text-sm">
                  <span>{unit.title}</span>
                  <span className="shrink-0 font-bold">{formatPercent(percent)}</span>
                </div>
                <ProgressBar value={percent} label={unit.title} />
                <p className="mt-1 text-xs text-muted-foreground">
                  {completed} de {total} lições
                </p>
              </div>
            ))}
          </div>
        </details>
        <div className="mt-5 space-y-4 border-t border-border pt-4">
          {testaments.map(({ testament, stats }) => (
            <div key={testament}>
              <div className="mb-2 flex items-start justify-between gap-2 text-sm">
                <span>{testament === "AT" ? "Antigo Testamento" : "Novo Testamento"}</span>
                <span className="shrink-0 font-bold">{formatPercent(stats.percent)}</span>
              </div>
              <ProgressBar
                value={stats.percent}
                label={testament === "AT" ? "Antigo Testamento" : "Novo Testamento"}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {stats.read} de {stats.total} capítulos lidos
              </p>
            </div>
          ))}
        </div>
        {storageError && (
          <p role="status" className="mt-3 text-sm text-destructive">
            A leitura está salva apenas nesta visita; o aparelho não permitiu guardar o progresso.
          </p>
        )}
      </section>

      <section
        id="personalizacao-perfil"
        ref={personalizationRef}
        className="mt-8 border-t-2 border-border pt-6"
        aria-labelledby="personal-title"
      >
        <h2 id="personal-title" className="text-xl font-semibold text-primary">
          Do seu jeito
        </h2>
        <div
          role="tablist"
          aria-label="Abas de personalização do perfil"
          className="mt-4 grid grid-cols-2 gap-2.5"
        >
          <button
            type="button"
            role="tab"
            id="tab-perfil-dados"
            aria-selected={personalTab === "profile"}
            aria-controls="panel-perfil-dados"
            data-sound="select"
            onClick={() => setPersonalTab("profile")}
            className={cn(
              "btn-3d-sm inline-flex min-h-11 cursor-pointer items-center justify-center gap-1.5 rounded-2xl border-2 px-3 py-2 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm",
              personalTab === "profile"
                ? "border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                : "border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
            )}
          >
            <User className="h-4 w-4 shrink-0" aria-hidden="true" />
            Dados do perfil
          </button>
          <button
            type="button"
            role="tab"
            id="tab-santo-devocao"
            aria-selected={personalTab === "saint"}
            aria-controls="panel-santo-devocao"
            data-sound="select"
            onClick={() => setPersonalTab("saint")}
            className={cn(
              "btn-3d-sm inline-flex min-h-11 cursor-pointer items-center justify-center gap-1.5 rounded-2xl border-2 px-3 py-2 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm",
              personalTab === "saint"
                ? "border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                : "border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
            )}
          >
            <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden="true" />
            Meu santo de devoção
          </button>
        </div>

        {!ready ? (
          <p className="mt-4 text-muted-foreground">Carregando preferências…</p>
        ) : personalTab === "profile" ? (
          <div id="panel-perfil-dados" role="tabpanel" aria-labelledby="tab-perfil-dados">
            <ProfilePersonalization profile={profile} saveProfile={saveProfile} />
          </div>
        ) : (
          <div id="panel-santo-devocao" role="tabpanel" aria-labelledby="tab-santo-devocao">
            <DevotionSaintTabPanel
              selectedSaintId={profile.devotionSaintId}
              ready={ready}
              onSelectSaint={saveDevotionSaint}
            />
          </div>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          Perfil e progresso guardados neste aparelho.
        </p>
      </section>
    </AppShell>
  );
}
