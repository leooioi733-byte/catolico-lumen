import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { MuseumImage } from "@/components/MuseumImage";
import { MUSEUM_CATEGORIES, MUSEUM_EXHIBITS, getCategoryLabel } from "@/lib/museum";
import { filterMuseumExhibits } from "@/lib/museum-search";
import type { MuseumCategory } from "@/lib/museum-types";

export const Route = createFileRoute("/museu/")({
  head: () => ({
    meta: [
      { title: "Museu Católico — Lumen" },
      {
        name: "description",
        content:
          "Acervo histórico católico com santos, papas, concílios, igrejas, objetos litúrgicos, símbolos, relíquias, ordens e arte sacra.",
      },
      { property: "og:title", content: "Museu Católico — Lumen" },
      {
        property: "og:description",
        content: "Acervo histórico católico com explicações confiáveis, ilustrações e fontes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Museu,
});

function Museu() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MuseumCategory | "todos">("todos");
  const items = filterMuseumExhibits(MUSEUM_EXHIBITS, query, category);
  return (
    <AppShell wide>
      <Link to="/biblioteca" className="text-sm font-bold text-muted-foreground">
        ← Biblioteca
      </Link>
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-2xl font-bold text-primary">Museu Católico</h1>
        <span className="text-xs font-bold text-muted-foreground">
          {items.length} {items.length === 1 ? "peça" : "peças"}
        </span>
      </div>
      <p className="mt-1 text-muted-foreground">
        História, patrimônio, símbolos e devoções da Igreja, com explicações e fontes.
      </p>
      <label className="mt-5 flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-4 py-3">
        <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nome, categoria, lugar ou ano"
          aria-label="Buscar no museu"
          className="w-full bg-transparent outline-none"
        />
      </label>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Categorias do Museu">
        {MUSEUM_CATEGORIES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            data-sound="select"
            onClick={() => setCategory(id)}
            aria-pressed={category === id}
            className={`inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-xs font-bold transition active:scale-95 sm:text-sm ${category === id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary"}`}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>
      {items.length === 0 ? (
        <p className="mt-8 text-center text-muted-foreground">Nenhuma peça encontrada.</p>
      ) : (
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {items.map((ex) => (
            <li key={ex.id}>
              <Link
                to="/museu/$id"
                params={{ id: ex.id }}
                className="block h-full overflow-hidden rounded-2xl border-2 border-border bg-card transition active:scale-[0.98]"
              >
                <MuseumImage exhibit={ex} />
                <div className="p-4">
                  <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold text-accent-foreground">
                    {getCategoryLabel(ex.category)}
                  </span>
                  <p className="mt-2 text-xs font-bold text-muted-foreground">
                    {ex.date} · {ex.location}
                  </p>
                  <h2 className="mt-0.5 font-display text-lg font-semibold text-primary">
                    {ex.title}
                  </h2>
                  <p className="mt-1 text-sm text-foreground">{ex.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AppShell>
  );
}
