import { useEffect, useMemo, useRef, useState } from "react";
import {
  Check,
  Lock,
  RotateCcw,
  Save,
  Shirt,
  SlidersHorizontal,
  Sparkles,
  Trophy,
} from "lucide-react";
import { AgnusPortrait } from "@/components/AgnusPortrait";
import { AgnusAccessoryOverlay } from "@/components/AgnusVisualOverlays";
import { useAgnusWardrobe } from "@/components/AgnusWardrobeProvider";
import { ProgressBar } from "@/components/AppShell";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LumenButton } from "@/components/ui/lumen-button";
import {
  evaluateHabitatRule,
  pickNextTouchReaction,
  type AgnusAnimation,
} from "@/lib/agnus-habitat";
import { formatPercent } from "@/lib/bible-progress";
import { AGNUS_NAME, evaluateRequirement, getAgnusCollections } from "@/lib/mascot";
import { cn } from "@/lib/utils";

type WardrobeTab = "roupas" | "acessorios" | "proximos";
type StatusFilter = "all" | "unlocked" | "locked";

export function AgnusWardrobeSection() {
  const {
    outfits,
    accessories,
    metrics,
    habitatMetrics,
    mascotName,
    equippedOutfit,
    equippedAccessory,
    unlockedIds,
    unlockedAccessoryIds,
    nextTrackUnlock,
    nextBibleUnlock,
    nextChristmasUnlock,
    nextAccessoryUnlock,
    isUnlocked,
    isAccessoryUnlocked,
    equipOutfit,
    equipAccessory,
    saveMascotName,
    dismissCelebration,
  } = useAgnusWardrobe();

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<WardrobeTab>("roupas");
  const [selectedCollection, setSelectedCollection] = useState<string>("Todas");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [nameDraft, setNameDraft] = useState<string>(mascotName);
  const [nameFeedback, setNameFeedback] = useState<string>("");
  const [wardrobeFeedback, setWardrobeFeedback] = useState<string>("");
  const [previewAnimation, setPreviewAnimation] = useState<AgnusAnimation | null>(null);
  const [animNonce, setAnimNonce] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setNameDraft(mascotName);
  }, [mascotName]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const collections = useMemo(() => getAgnusCollections(outfits), [outfits]);

  const visibleOutfits = useMemo(() => {
    return outfits
      .slice()
      .sort((a, b) => a.order - b.order)
      .filter((outfit) =>
        selectedCollection === "Todas" ? true : outfit.collection === selectedCollection,
      )
      .filter((outfit) => {
        if (statusFilter === "unlocked") return isUnlocked(outfit.id);
        if (statusFilter === "locked") return !isUnlocked(outfit.id);
        return true;
      });
  }, [outfits, selectedCollection, statusFilter, isUnlocked]);

  const unlockedAccessoriesCount = Math.max(0, unlockedAccessoryIds.length - 1);
  const totalSpecialAccessories = Math.max(0, accessories.length - 1);

  const handleSaveName = (event: React.FormEvent) => {
    event.preventDefault();
    if (saveMascotName(nameDraft)) {
      const effective = nameDraft.trim() || AGNUS_NAME;
      setNameDraft(effective);
      setNameFeedback(`Nome atualizado para ${effective}.`);
    } else {
      setNameFeedback("Não foi possível salvar o nome neste aparelho.");
    }
  };

  const handleTapPreview = () => {
    setAnimNonce((n) => n + 1);
    setPreviewAnimation((prev) => pickNextTouchReaction(prev));
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setPreviewAnimation(null);
    }, 2400);
  };

  return (
    <section
      id="agnus"
      aria-labelledby="agnus-personalization-title"
      className="mt-8 border-t-2 border-border pt-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2
          id="agnus-personalization-title"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          Personalização do {mascotName}
        </h2>
        <span className="text-xs font-bold text-secondary">
          {unlockedIds.length} de {outfits.length} roupinhas desbloqueadas
        </span>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-3xl border-2 border-border bg-card p-4">
          <div className="flex min-w-0 flex-1 items-center gap-3.5">
            <AgnusPortrait
              outfitId={equippedOutfit.id}
              accessoryId={equippedAccessory.id}
              mascotName={mascotName}
              animation={previewAnimation ?? "resting"}
              animNonce={animNonce}
              onClick={handleTapPreview}
              className="h-16 w-16 shrink-0"
              priority
            />
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-base font-bold text-primary">
                {mascotName} · {equippedOutfit.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {equippedAccessory.id !== "none"
                  ? `Acessório: ${equippedAccessory.name}`
                  : `${unlockedIds.length}/${outfits.length} roupas · ${unlockedAccessoriesCount}/${totalSpecialAccessories} acessórios`}
              </p>
            </div>
          </div>

          <DialogTrigger asChild>
            <LumenButton
              type="button"
              variant="gold"
              data-sound="select"
              className="h-auto min-h-11 w-full gap-2 px-5 py-2.5 text-sm normal-case sm:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4 shrink-0" aria-hidden="true" />
              Personalizar
            </LumenButton>
          </DialogTrigger>
        </div>

        <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg gap-0 overflow-y-auto rounded-3xl border-2 border-border bg-background p-5 sm:p-6">
          <DialogHeader className="pr-8 text-left">
            <DialogTitle className="font-display text-xl font-bold text-primary">
              Personalizar {mascotName}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Escolha o nome, as roupinhas e os acessórios conquistados na sua jornada.
            </DialogDescription>
          </DialogHeader>

          {/* Preview + Nome */}
          <div className="mt-4 rounded-2xl border-2 border-gold bg-card p-4">
            <div className="flex items-center gap-4">
              <AgnusPortrait
                outfitId={equippedOutfit.id}
                accessoryId={equippedAccessory.id}
                mascotName={mascotName}
                animation={previewAnimation ?? "resting"}
                animNonce={animNonce}
                onClick={handleTapPreview}
                className="h-24 w-24 shrink-0"
                priority
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wide text-secondary">
                  {mascotName} · {equippedOutfit.name}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {equippedAccessory.id !== "none"
                    ? `Acessório equipado: ${equippedAccessory.name}.`
                    : "Nenhum acessório equipado no momento."}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-muted-foreground">
                  {unlockedIds.length} de {outfits.length} roupinhas · {unlockedAccessoriesCount} de{" "}
                  {totalSpecialAccessories} acessórios
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveName} className="mt-4 border-t border-border/70 pt-4">
              <label htmlFor="agnus-name-input" className="block text-sm font-bold text-primary">
                Nome do mascote
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                <input
                  id="agnus-name-input"
                  value={nameDraft}
                  maxLength={24}
                  placeholder={AGNUS_NAME}
                  onChange={(event) => {
                    setNameDraft(event.target.value);
                    setNameFeedback("");
                  }}
                  className="min-h-11 min-w-0 flex-1 rounded-xl border-2 border-border bg-background px-3.5 py-2 text-sm text-foreground outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-ring"
                />
                <LumenButton
                  type="submit"
                  variant="gold"
                  data-sound="select"
                  className="h-auto min-h-11 w-auto shrink-0 gap-1.5 px-4 py-2 text-sm normal-case"
                >
                  <Save className="h-4 w-4" aria-hidden="true" />
                  Salvar nome
                </LumenButton>
                {mascotName !== AGNUS_NAME && (
                  <LumenButton
                    type="button"
                    variant="outline"
                    data-sound="select"
                    onClick={() => {
                      if (saveMascotName(AGNUS_NAME)) {
                        setNameDraft(AGNUS_NAME);
                        setNameFeedback(`Nome restaurado para ${AGNUS_NAME}.`);
                      }
                    }}
                    className="h-auto min-h-11 w-auto shrink-0 gap-1.5 px-3.5 py-2 text-sm normal-case"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Restaurar Agnus
                  </LumenButton>
                )}
              </div>
              {nameFeedback && (
                <p role="status" className="mt-2 text-xs font-bold text-success">
                  {nameFeedback}
                </p>
              )}
            </form>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label={`Guarda-roupa do ${mascotName}`}
            className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border-2 border-border bg-card p-1.5"
          >
            {(
              [
                { id: "roupas", label: "Roupas", icon: Shirt },
                { id: "acessorios", label: "Acessórios", icon: Sparkles },
                { id: "proximos", label: "Próximos", icon: Trophy },
              ] as const
            ).map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  role="tab"
                  type="button"
                  data-sound="select"
                  aria-selected={active}
                  onClick={() => setActiveTab(id)}
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border-2 px-2 py-2 text-xs font-display font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm",
                    active
                      ? "btn-3d-sm border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                      : "border-transparent text-muted-foreground hover:bg-accent/55 hover:text-primary active:scale-[0.98]",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{label}</span>
                </button>
              );
            })}
          </div>

          {wardrobeFeedback && (
            <p role="status" className="mt-3 text-sm font-bold text-success">
              {wardrobeFeedback}
            </p>
          )}

          {/* TAB 1: ROUPAS */}
          {activeTab === "roupas" && (
            <div className="mt-4 space-y-3">
              {collections.length > 1 && (
                <div className="flex flex-wrap gap-2" role="group" aria-label="Coleções de roupas">
                  {["Todas", ...collections].map((collection) => {
                    const active = selectedCollection === collection;
                    return (
                      <button
                        key={collection}
                        type="button"
                        data-sound="select"
                        aria-pressed={active}
                        onClick={() => setSelectedCollection(collection)}
                        className={cn(
                          "btn-3d-sm min-h-10 border-2 px-3.5 py-1.5 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          active
                            ? "border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                            : "border-border bg-card text-foreground [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
                        )}
                      >
                        {collection}
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por status">
                {(
                  [
                    { id: "all", label: `Todas (${outfits.length})` },
                    { id: "unlocked", label: `Desbloqueadas (${unlockedIds.length})` },
                    {
                      id: "locked",
                      label: `Bloqueadas (${Math.max(0, outfits.length - unlockedIds.length)})`,
                    },
                  ] as const
                ).map((item) => {
                  const active = statusFilter === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-sound="select"
                      aria-pressed={active}
                      onClick={() => setStatusFilter(item.id)}
                      className={cn(
                        "btn-3d-sm min-h-10 border-2 px-3.5 py-1.5 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        active
                          ? "border-gold bg-accent text-accent-foreground [--btn-depth:var(--gold-deep)]"
                          : "border-border bg-card text-muted-foreground [--btn-depth:var(--border)] hover:border-gold/75 hover:text-primary",
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                {visibleOutfits.map((outfit) => {
                  const unlocked = isUnlocked(outfit.id);
                  const equipped = equippedOutfit.id === outfit.id;
                  const req = evaluateRequirement(outfit.requirement, metrics);

                  return (
                    <article
                      key={outfit.id}
                      data-outfit-id={outfit.id}
                      data-unlocked={unlocked}
                      className={cn(
                        "rounded-2xl border-2 p-4 transition",
                        equipped
                          ? "border-gold bg-card"
                          : unlocked
                            ? "border-border bg-card"
                            : "border-border/80 bg-card/70",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <AgnusPortrait
                          outfitId={outfit.id}
                          mascotName={mascotName}
                          locked={!unlocked}
                          className="h-20 w-20 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-base font-bold text-primary">
                            {outfit.name}
                          </h3>
                          <p className="text-xs font-bold text-secondary">
                            {equipped ? "Equipada" : unlocked ? "Desbloqueada" : "Bloqueada"}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {outfit.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 border-t border-border/70 pt-3">
                        {unlocked ? (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-muted-foreground">
                              {req.shortLabel}
                            </span>
                            <LumenButton
                              type="button"
                              data-sound="select"
                              disabled={equipped}
                              variant={equipped ? "outline" : "gold"}
                              onClick={() => {
                                if (equipOutfit(outfit.id)) {
                                  dismissCelebration(outfit.id);
                                  setWardrobeFeedback(
                                    `${mascotName} vestiu a roupa ${outfit.name}.`,
                                  );
                                }
                              }}
                              className="h-auto min-h-10 w-auto px-4 py-2 text-xs normal-case"
                            >
                              {equipped ? "Em uso" : "Equipar"}
                            </LumenButton>
                          </div>
                        ) : (
                          <div>
                            <div className="mb-1.5 flex items-center justify-between gap-2 text-xs">
                              <span className="font-bold text-primary">{req.label}</span>
                              <span className="shrink-0 font-bold text-secondary tabular-nums">
                                {formatPercent(req.current)} / {formatPercent(req.target)}
                              </span>
                            </div>
                            <ProgressBar
                              value={req.ratioPercent}
                              label={`Progresso para ${outfit.name}`}
                            />
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: ACESSÓRIOS */}
          {activeTab === "acessorios" && (
            <div className="mt-4 space-y-3">
              {accessories
                .slice()
                .sort((a, b) => a.order - b.order)
                .map((accessory) => {
                  const unlocked = isAccessoryUnlocked(accessory.id);
                  const equipped = equippedAccessory.id === accessory.id;
                  const req = evaluateHabitatRule(accessory.requirement, habitatMetrics);

                  return (
                    <article
                      key={accessory.id}
                      data-accessory-id={accessory.id}
                      data-unlocked={unlocked}
                      className={cn(
                        "rounded-2xl border-2 p-4 transition",
                        equipped
                          ? "border-gold bg-card"
                          : unlocked
                            ? "border-border bg-card"
                            : "border-border/80 bg-card/70",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-background/40">
                          {accessory.id === "none" ? (
                            <div className="grid h-full w-full place-items-center text-muted-foreground">
                              <Sparkles className="h-5 w-5 opacity-40" aria-hidden="true" />
                            </div>
                          ) : (
                            <>
                              <img
                                src={equippedOutfit.imageSrc}
                                alt=""
                                aria-hidden="true"
                                className={cn(
                                  "h-full w-full object-contain opacity-60",
                                  !unlocked && "grayscale",
                                )}
                              />
                              <AgnusAccessoryOverlay accessoryId={accessory.id} />
                            </>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-base font-bold text-primary">
                            {accessory.name}
                          </h3>
                          <p className="text-xs font-bold text-secondary">
                            {accessory.category} ·{" "}
                            {equipped ? "Equipado" : unlocked ? "Disponível" : "Bloqueado"}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {accessory.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 border-t border-border/70 pt-3">
                        {unlocked ? (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-muted-foreground">
                              {req.shortLabel}
                            </span>
                            <LumenButton
                              type="button"
                              data-sound="select"
                              disabled={equipped}
                              variant={equipped ? "outline" : "gold"}
                              onClick={() => {
                                if (equipAccessory(accessory.id)) {
                                  setWardrobeFeedback(
                                    accessory.id === "none"
                                      ? `Acessório removido de ${mascotName}.`
                                      : `${mascotName} equipou ${accessory.name}.`,
                                  );
                                }
                              }}
                              className="h-auto min-h-10 w-auto px-4 py-2 text-xs normal-case"
                            >
                              {equipped ? (
                                <>
                                  <Check className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
                                  Em uso
                                </>
                              ) : (
                                "Equipar"
                              )}
                            </LumenButton>
                          </div>
                        ) : (
                          <div>
                            <div className="mb-1.5 flex items-center justify-between gap-2 text-xs">
                              <span className="inline-flex items-center gap-1 font-bold text-primary">
                                <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                {req.label}
                              </span>
                              <span className="shrink-0 font-bold text-secondary tabular-nums">
                                {formatPercent(req.current)} / {formatPercent(req.target)}
                              </span>
                            </div>
                            <ProgressBar
                              value={req.ratioPercent}
                              label={`Progresso para ${accessory.name}`}
                            />
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
            </div>
          )}

          {/* TAB 3: PRÓXIMOS */}
          {activeTab === "proximos" && (
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border-2 border-border bg-card p-4">
                <h3 className="font-display text-sm font-bold text-primary">
                  Resumo da coleção do {mascotName}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {unlockedIds.length}/{outfits.length} roupinhas · {unlockedAccessoriesCount}/
                  {totalSpecialAccessories} acessórios · Trilha{" "}
                  {formatPercent(habitatMetrics.trackPercent)} · Bíblia{" "}
                  {formatPercent(habitatMetrics.biblePercent)} · Natal{" "}
                  {formatPercent(habitatMetrics.christmasPercent)}
                </p>
              </div>

              {[
                nextAccessoryUnlock && {
                  key: `acc-${nextAccessoryUnlock.item.id}`,
                  type: "Acessório especial",
                  name: nextAccessoryUnlock.item.name,
                  label: nextAccessoryUnlock.progress.label,
                  current: nextAccessoryUnlock.progress.current,
                  target: nextAccessoryUnlock.progress.target,
                  ratio: nextAccessoryUnlock.progress.ratioPercent,
                },
                nextTrackUnlock && {
                  key: `trk-${nextTrackUnlock.outfit.id}`,
                  type: "Roupa da trilha",
                  name: nextTrackUnlock.outfit.name,
                  label: nextTrackUnlock.progress.label,
                  current: nextTrackUnlock.progress.current,
                  target: nextTrackUnlock.progress.target,
                  ratio: nextTrackUnlock.progress.ratioPercent,
                },
                nextBibleUnlock && {
                  key: `bib-${nextBibleUnlock.outfit.id}`,
                  type: "Roupa da Bíblia",
                  name: nextBibleUnlock.outfit.name,
                  label: nextBibleUnlock.progress.label,
                  current: nextBibleUnlock.progress.current,
                  target: nextBibleUnlock.progress.target,
                  ratio: nextBibleUnlock.progress.ratioPercent,
                },
                nextChristmasUnlock && {
                  key: `nat-${nextChristmasUnlock.outfit.id}`,
                  type: "Roupa de Natal",
                  name: nextChristmasUnlock.outfit.name,
                  label: nextChristmasUnlock.progress.label,
                  current: nextChristmasUnlock.progress.current,
                  target: nextChristmasUnlock.progress.target,
                  ratio: nextChristmasUnlock.progress.ratioPercent,
                },
              ]
                .filter((item): item is NonNullable<typeof item> => Boolean(item))
                .map((item) => (
                  <div key={item.key} className="rounded-2xl border-2 border-border bg-card p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-sm font-bold text-primary">
                        {item.name} ·{" "}
                        <span className="text-xs font-semibold text-secondary">{item.type}</span>
                      </p>
                      <span className="shrink-0 text-xs font-bold text-secondary tabular-nums">
                        {formatPercent(item.current)} / {formatPercent(item.target)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                    <div className="mt-2">
                      <ProgressBar value={item.ratio} label={item.name} />
                    </div>
                  </div>
                ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
