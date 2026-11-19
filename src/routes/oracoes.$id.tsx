import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Languages } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { FavoriteButton, PrayerText, TextSizeControls } from "@/components/PrayerReader";
import { getPrayer } from "@/lib/prayers";
import { cn } from "@/lib/utils";

type LatinDisplayMode = "parallel" | "latin" | "portuguese";

export const Route = createFileRoute("/oracoes/$id")({
  loader: ({ params }) => {
    const prayer = getPrayer(params.id);
    if (!prayer) throw notFound();
    return { prayer };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.prayer.title} — Orações · Lumen`
      : "Oração não encontrada — Lumen";
    const description = loaderData
      ? `Reze a oração ${loaderData.prayer.title} com texto ampliável.`
      : "Esta oração não está disponível.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <AppShell>
      <p className="text-muted-foreground">Oração não encontrada.</p>
      <Link to="/oracoes" className="mt-4 inline-block font-bold text-primary">
        Voltar às orações
      </Link>
    </AppShell>
  ),
  component: PrayerPage,
});

function PrayerPage() {
  const { prayer } = Route.useLoaderData();
  const [mode, setMode] = useState<LatinDisplayMode>("parallel");
  const hasLatin = Boolean(prayer.latinText);
  const latinStanzas = prayer.latinText ? prayer.latinText.split("\n\n") : [];
  const ptStanzas = prayer.text.split("\n\n");

  return (
    <AppShell>
      <Link
        to="/oracoes"
        className="btn-3d-sm inline-flex min-h-10 items-center gap-2 border-2 border-border bg-card px-3.5 py-1.5 text-sm font-bold text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Orações
      </Link>
      <div className="mt-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-primary">{prayer.title}</h1>
          {prayer.subtitle && (
            <p className="mt-1 text-sm font-bold text-muted-foreground">{prayer.subtitle}</p>
          )}
        </div>
        <FavoriteButton prayer={prayer} />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <TextSizeControls />
        {hasLatin && (
          <div
            role="group"
            aria-label="Modo de exibição do idioma"
            className="flex gap-1 rounded-2xl border-2 border-border bg-card p-1 text-xs font-bold"
          >
            {(
              [
                ["parallel", "Paralelo"],
                ["latin", "Latim"],
                ["portuguese", "Português"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                aria-pressed={mode === id}
                data-sound="select"
                onClick={() => setMode(id)}
                className={cn(
                  "min-h-10 cursor-pointer px-3 py-1.5 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  mode === id
                    ? "btn-3d-sm border-2 border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                    : "rounded-xl border-2 border-transparent text-muted-foreground hover:bg-accent/55 hover:text-primary",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {hasLatin && mode === "parallel" ? (
        <div className="mt-5 space-y-4">
          {latinStanzas.map((latinPara, index) => (
            <article key={index} className="rounded-3xl border-2 border-border bg-card p-5">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-secondary">
                <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                Latim
              </p>
              <div className="italic">
                <PrayerText text={latinPara} />
              </div>
              {ptStanzas[index] && (
                <div className="mt-4 border-t border-border pt-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Tradução em português
                  </p>
                  <PrayerText text={ptStanzas[index]} />
                </div>
              )}
            </article>
          ))}
        </div>
      ) : hasLatin && mode === "latin" && prayer.latinText ? (
        <article className="mt-5 rounded-3xl border-2 border-border bg-card p-5">
          <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-secondary">
            <Languages className="h-3.5 w-3.5" aria-hidden="true" />
            Texto em Latim
          </p>
          <div className="italic">
            <PrayerText text={prayer.latinText} />
          </div>
        </article>
      ) : (
        <article className="mt-5 rounded-3xl border-2 border-border bg-card p-5">
          {hasLatin && (
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Tradução em português
            </p>
          )}
          <PrayerText text={prayer.text} />
        </article>
      )}

      {prayer.explanation && (
        <section
          aria-labelledby="prayer-explanation-title"
          className="mt-5 rounded-3xl border-2 border-border bg-accent/60 p-5"
        >
          <h2
            id="prayer-explanation-title"
            className="flex items-center gap-2 text-lg font-semibold text-primary"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            Sentido e história da oração
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{prayer.explanation}</p>
        </section>
      )}

      <a
        href={prayer.source.url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 block text-xs font-bold text-muted-foreground underline"
      >
        Fonte: {prayer.source.label}
      </a>
    </AppShell>
  );
}
