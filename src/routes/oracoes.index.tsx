import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, ChevronRight } from "lucide-react";
import { useSettings } from "@/components/SettingsProvider";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { usePrayers } from "@/components/PrayerProvider";
import { FavoriteButton } from "@/components/PrayerReader";
import type { PrayerCategory } from "@/lib/prayer-types";
import { PRAYERS } from "@/lib/prayers";
import { getMysterySet, mysteriesForDay } from "@/lib/rosary";
import { isChristmasAppearance } from "@/lib/settings";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type FilterMode = "all" | PrayerCategory | "favorites";

const FILTERS: { id: FilterMode; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "traditional", label: "Tradicionais" },
  { id: "saints", label: "Santos" },
  { id: "latin", label: "Em Latim" },
  { id: "favorites", label: "Favoritas" },
];

export const Route = createFileRoute("/oracoes/")({
  head: () => ({
    meta: [
      { title: "Orações — Lumen" },
      {
        name: "description",
        content: "Orações católicas tradicionais, em latim e o Terço guiado, sem cadastro.",
      },
      { property: "og:title", content: "Orações — Lumen" },
      {
        property: "og:description",
        content: "Orações católicas tradicionais, em latim e o Terço guiado, sem cadastro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Oracoes,
});

function Oracoes() {
  const { settings } = useSettings();
  const { state } = usePrayers();
  const [filter, setFilter] = useState<FilterMode>("all");
  const today = getMysterySet(mysteriesForDay(new Date().getDay()));
  const list = PRAYERS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "favorites") return state.favorites.includes(p.id);
    return p.category === filter;
  });

  return (
    <AppShell>
      <h1 className="text-2xl font-bold text-primary">Orações</h1>
      <p className="mt-1 text-muted-foreground">Reze no seu ritmo, sem pressa e sem pontos.</p>

      <Link
        to="/oracoes/terco"
        className="rosary-prompt btn-3d mt-6 block rounded-2xl bg-primary p-5 text-primary-foreground [--btn-depth:var(--primary-deep)]"
      >
        <p className="rosary-label flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold">
          {isChristmasAppearance(settings.appearance) && (
            <Bell className="h-4 w-4" aria-hidden="true" />
          )}
          Terço guiado
        </p>
        <p className="mt-1 font-display text-xl font-semibold">
          {state.rosary && !state.rosary.completed ? "Continuar o terço" : "Rezar o terço"}
        </p>
        <p className="mt-1 text-sm opacity-90">Hoje: {today.title.toLowerCase()}</p>
      </Link>

      <Link
        to="/calendario"
        className="btn-3d mt-4 flex items-center justify-between rounded-2xl border-2 border-border bg-card p-5 text-primary"
      >
        <span>
          <span className="block text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Calendário litúrgico
          </span>
          <span className="font-display text-xl font-semibold">Santos de cada dia</span>
        </span>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </Link>

      <div className="mt-8">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-semibold text-primary">Tesouro de orações</h2>
          <span className="text-xs font-bold text-muted-foreground">
            {list.length} {list.length === 1 ? "oração" : "orações"}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filtrar orações">
          {FILTERS.map(({ id, label }) => (
            <Button
              key={id}
              variant="ghost"
              aria-pressed={filter === id}
              data-sound="select"
              onClick={() => setFilter(id)}
              className={cn(
                "h-auto rounded-full border-2 px-3 py-1.5 text-xs font-bold transition",
                filter === id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary",
              )}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {list.map((p) => (
          <li
            key={p.id}
            className="flex items-center gap-2 rounded-2xl border-2 border-border bg-card p-2 pl-4"
          >
            <Link
              to="/oracoes/$id"
              params={{ id: p.id }}
              className="flex min-h-11 flex-1 items-center justify-between gap-2 py-1 font-display text-lg font-semibold text-primary"
            >
              <span className="min-w-0">
                <span className="block">{p.title}</span>
                {p.category === "latin" && (
                  <span className="mt-0.5 inline-block rounded-full bg-accent px-2 py-0.5 font-sans text-[11px] font-bold text-accent-foreground">
                    Latim + Tradução e explicação
                  </span>
                )}
                {p.id === "ave-jose" && (
                  <span className="mt-0.5 inline-block rounded-full bg-accent px-2 py-0.5 font-sans text-[11px] font-bold text-accent-foreground">
                    Devoção a São José
                  </span>
                )}
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </Link>
            <FavoriteButton prayer={p} />
          </li>
        ))}
        {list.length === 0 && (
          <li className="rounded-2xl border-2 border-dashed border-border p-5 text-center text-muted-foreground">
            Toque na estrela de uma oração para guardá-la aqui.
          </li>
        )}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        Os favoritos ficam guardados enquanto esta aba estiver aberta.
      </p>
    </AppShell>
  );
}
