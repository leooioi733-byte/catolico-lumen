import { Calendar, Check, Cross, HeartHandshake, Search, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { SAINT_CATEGORIES, getDevotionSaint, searchSaints, type SaintCategory } from "@/lib/saints";
import { cn } from "@/lib/utils";

export function ProfileDevotionSaintCard({
  saintId,
  onOpenPicker,
}: {
  saintId: string | null;
  onOpenPicker: () => void;
}) {
  const saint = getDevotionSaint(saintId);

  if (!saint) {
    return (
      <section
        aria-label="Meu santo de devoção no perfil"
        className="mt-5 rounded-3xl border-2 border-dashed border-gold/80 bg-card/85 p-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-gold/60 bg-accent text-primary">
              <HeartHandshake className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-base font-bold text-primary">Meu santo de devoção</p>
              <p className="text-xs text-muted-foreground">
                Escolha um santo ou invocação especial para ficar em destaque no seu perfil.
              </p>
            </div>
          </div>
          <button
            type="button"
            data-sound="select"
            onClick={onOpenPicker}
            className="btn-3d-sm inline-flex min-h-10 cursor-pointer items-center gap-1.5 border-2 border-gold bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground [--btn-depth:var(--primary-deep)] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Escolher santo
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Meu santo de devoção no perfil"
      className="mt-5 rounded-3xl border-2 border-gold bg-card p-4 shadow-sm"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-gold bg-gold text-gold-foreground shadow-sm">
            <Cross className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-secondary">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              Meu santo de devoção
            </p>
            <h2 className="mt-0.5 font-display text-xl font-bold text-primary">{saint.name}</h2>
            <p className="text-xs font-semibold text-muted-foreground">
              {saint.title} · Festa: {saint.feastDay}
            </p>
          </div>
        </div>
        <button
          type="button"
          data-sound="select"
          onClick={onOpenPicker}
          className="btn-3d-sm inline-flex min-h-10 shrink-0 cursor-pointer items-center gap-1.5 border-2 border-border bg-background px-3 py-1.5 text-xs font-bold text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Trocar santo
        </button>
      </div>
      <blockquote className="mt-3 rounded-2xl border border-border bg-accent/55 px-3.5 py-2.5 text-sm italic text-primary">
        “{saint.quote}”
      </blockquote>
      <p className="mt-2 text-xs leading-relaxed text-foreground">{saint.summary}</p>
    </section>
  );
}

export function DevotionSaintTabPanel({
  selectedSaintId,
  ready,
  onSelectSaint,
}: {
  selectedSaintId: string | null;
  ready: boolean;
  onSelectSaint: (saintId: string | null) => boolean;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"Todos" | SaintCategory>("Todos");
  const [feedback, setFeedback] = useState("");

  const results = useMemo(() => searchSaints(query, category), [query, category]);
  const selectedSaint = getDevotionSaint(selectedSaintId);

  const handleChoose = (saintId: string, saintName: string) => {
    if (!ready) return;
    const ok = onSelectSaint(saintId);
    setFeedback(
      ok
        ? `${saintName} agora está em destaque no seu perfil.`
        : "Não foi possível salvar neste aparelho. Tente novamente.",
    );
  };

  const handleClearSelection = () => {
    if (!ready) return;
    const ok = onSelectSaint(null);
    if (ok) {
      setFeedback("Santo de devoção removido do perfil.");
    }
  };

  return (
    <div className="mt-5 space-y-4">
      {selectedSaint && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border-2 border-gold bg-accent/55 px-3.5 py-2.5">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wide text-secondary">
              Selecionado atualmente
            </p>
            <p className="truncate font-display text-base font-bold text-primary">
              {selectedSaint.name}
            </p>
          </div>
          <button
            type="button"
            data-sound="select"
            disabled={!ready}
            onClick={handleClearSelection}
            className="btn-3d-sm inline-flex min-h-9 cursor-pointer items-center gap-1 border border-border bg-card px-3 py-1 text-xs font-bold text-primary [--btn-depth:var(--border)] hover:border-destructive/60 hover:text-destructive"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Remover
          </button>
        </div>
      )}

      <label className="flex items-center gap-2.5 rounded-2xl border-2 border-border bg-card px-3.5 py-2.5 focus-within:border-gold">
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar santo por nome, título, festa ou devoção"
          aria-label="Buscar santo de devoção"
          className="w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            type="button"
            data-sound="select"
            aria-label="Limpar busca de santos"
            onClick={() => setQuery("")}
            className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-accent hover:text-primary"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </label>

      <div role="group" aria-label="Filtrar santos por categoria" className="flex flex-wrap gap-2">
        {SAINT_CATEGORIES.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              type="button"
              data-sound="select"
              aria-pressed={active}
              onClick={() => setCategory(cat)}
              className={cn(
                "btn-3d-sm min-h-9 cursor-pointer rounded-xl border-2 px-3 py-1 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active
                  ? "border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                  : "border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-2 text-xs font-bold text-muted-foreground">
        <span>
          {results.length} {results.length === 1 ? "santo encontrado" : "santos encontrados"}
        </span>
        {feedback && (
          <span role="status" className="text-primary">
            {feedback}
          </span>
        )}
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border-2 border-border bg-card p-6 text-center">
          <p className="font-display text-base font-bold text-primary">
            Nenhum santo encontrado para “{query}”
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Tente outro nome, título ou limpe os filtros acima.
          </p>
        </div>
      ) : (
        <ul
          aria-label="Lista de santos de devoção"
          className="max-h-[440px] space-y-2.5 overflow-y-auto pr-1"
        >
          {results.map((saint) => {
            const isSelected = selectedSaintId === saint.id;
            return (
              <li key={saint.id}>
                <button
                  type="button"
                  data-sound="select"
                  aria-pressed={isSelected}
                  disabled={!ready}
                  onClick={() => handleChoose(saint.id, saint.name)}
                  className={cn(
                    "btn-3d flex w-full cursor-pointer items-start justify-between gap-3 rounded-2xl border-2 p-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isSelected
                      ? "border-gold bg-accent/70 ring-2 ring-gold/40 [--btn-depth:var(--gold-deep)]"
                      : "border-border bg-card [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/35",
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-base font-bold text-primary">
                        {saint.name}
                      </span>
                      <span className="rounded-lg bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
                        {saint.category}
                      </span>
                    </div>
                    <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-semibold text-secondary">
                      <span>{saint.title}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3 shrink-0" aria-hidden="true" />
                        {saint.feastDay}
                      </span>
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground">
                      {saint.summary}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl border-2",
                      isSelected
                        ? "border-gold bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground",
                    )}
                    aria-hidden="true"
                  >
                    {isSelected ? (
                      <Check className="h-4 w-4" strokeWidth={3} />
                    ) : (
                      <Cross className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
