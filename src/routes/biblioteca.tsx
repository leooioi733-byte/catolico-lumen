import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Gift, Landmark, Lightbulb, Sparkles, Star } from "lucide-react";
import { ThemeGlyph, ThemeIcon } from "@/components/ThemeSymbols";
import { AppShell } from "@/components/AppShell";
import { LessonIllustration } from "@/components/LessonIllustration";
import { UNITS } from "@/lib/lessons";

export const Route = createFileRoute("/biblioteca")({
  head: () => ({
    meta: [
      { title: "Biblioteca — Lumen" },
      {
        name: "description",
        content: "Revise os ensinamentos com referências da Bíblia e do Catecismo.",
      },
      { property: "og:title", content: "Biblioteca — Lumen" },
      {
        property: "og:description",
        content: "Revise os ensinamentos com referências da Bíblia e do Catecismo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Biblioteca,
});

function Biblioteca() {
  return (
    <AppShell>
      <h1 className="text-2xl font-bold text-primary">Biblioteca</h1>
      <p className="mt-1 text-muted-foreground">Os ensinamentos, com suas fontes.</p>
      <Link
        to="/natal"
        className="mt-4 flex items-center gap-3 rounded-2xl border-2 border-gold bg-card p-4 transition active:scale-[0.98]"
      >
        <ThemeIcon
          icon={Sparkles}
          christmas={Star}
          className="christmas-twinkle h-8 w-8 shrink-0 text-primary"
        />
        <span>
          <span className="block font-display text-lg font-semibold text-primary">
            Especial de Natal
          </span>
          <span className="text-sm text-muted-foreground">
            10 capítulos interativos sobre a Natividade de Jesus Cristo
          </span>
        </span>
      </Link>
      <Link
        to="/biblia"
        className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-gold bg-card p-4 transition active:scale-[0.98]"
      >
        <ThemeIcon icon={BookOpen} christmas={Star} className="h-8 w-8 shrink-0 text-primary" />
        <span>
          <span className="block font-display text-lg font-semibold text-primary">
            Bíblia Sagrada
          </span>
          <span className="text-sm text-muted-foreground">
            Os 73 livros completos, do Gênesis ao Apocalipse
          </span>
        </span>
      </Link>
      <Link
        to="/museu"
        className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-gold bg-card p-4 transition active:scale-[0.98]"
      >
        <ThemeIcon icon={Landmark} christmas={Gift} className="h-8 w-8 shrink-0 text-primary" />
        <span>
          <span className="block font-display text-lg font-semibold text-primary">
            Museu Católico
          </span>
          <span className="text-sm text-muted-foreground">
            Acervo histórico com ilustrações, explicações e fontes
          </span>
        </span>
      </Link>
      <div className="mt-6 space-y-8">
        {UNITS.map((unit) => (
          <section key={unit.id}>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              <ThemeGlyph index={UNITS.indexOf(unit)}>{unit.emoji}</ThemeGlyph> {unit.title}
            </h2>
            <div className="space-y-3">
              {unit.lessons.map((l) => (
                <details key={l.id} className="rounded-2xl border-2 border-border bg-card p-4">
                  <summary className="cursor-pointer font-display text-lg font-semibold text-primary">
                    <ThemeGlyph index={unit.lessons.indexOf(l)}>{l.emoji}</ThemeGlyph> {l.title}
                  </summary>
                  <div className="mt-3 space-y-4">
                    {l.teachings[0]?.illustration && (
                      <LessonIllustration id={l.teachings[0].illustration} compact />
                    )}
                    {l.teachings.map((t) => (
                      <div
                        key={t.title}
                        className="space-y-1.5 border-t border-border/60 pt-3 first:border-t-0 first:pt-0"
                      >
                        <h3 className="font-bold text-primary">{t.title}</h3>
                        <p className="text-sm leading-relaxed text-foreground">{t.text}</p>
                        {t.example && (
                          <p className="rounded-xl bg-accent/60 px-3 py-2 text-xs leading-relaxed text-foreground">
                            <span className="inline-flex items-center gap-1 font-bold text-primary">
                              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" /> Exemplo:
                            </span>{" "}
                            {t.example}
                          </p>
                        )}
                        <p className="text-xs font-bold text-muted-foreground">{t.source}</p>
                      </div>
                    ))}
                    <Link
                      to="/licao/$id"
                      params={{ id: l.id }}
                      className="inline-block text-xs font-bold text-primary underline"
                    >
                      Praticar esta lição →
                    </Link>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
