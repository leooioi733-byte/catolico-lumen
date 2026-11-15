import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  Bath,
  BedDouble,
  Check,
  Church,
  Droplets,
  Flame,
  Heart,
  Home,
  Image as ImageIcon,
  Lamp,
  Lock,
  MessageCircle,
  Moon,
  Palette,
  RotateCcw,
  Save,
  Shirt,
  Sparkles,
  Sun,
  Trees,
  Trophy,
  Utensils,
} from "lucide-react";
import { AgnusPortrait } from "@/components/AgnusPortrait";
import { AgnusAccessoryOverlay, AgnusStageScene } from "@/components/AgnusVisualOverlays";
import { useAgnusWardrobe } from "@/components/AgnusWardrobeProvider";
import { ProgressBar } from "@/components/AppShell";
import { LumenButton } from "@/components/ui/lumen-button";
import {
  AGNUS_ROOMS,
  evaluateHabitatRule,
  needStatusLabel,
  recommendedRoomForNeed,
  type AgnusAnimation,
  type AgnusNeedKey,
  type AgnusRoomId,
  type CareActionId,
  type StagePropDef,
} from "@/lib/agnus-habitat";
import { formatPercent } from "@/lib/bible-progress";
import { AGNUS_NAME, evaluateRequirement, getAgnusCollections } from "@/lib/mascot";
import { cn } from "@/lib/utils";

type StudioTab = "roupas" | "acessorios" | "cenarios" | "conquistas" | "nome";
type StatusFilter = "all" | "unlocked" | "locked";

const ROOM_ICONS: Record<AgnusRoomId, typeof Home> = {
  sala: Home,
  quarto: BedDouble,
  quintal: Trees,
  igreja: Church,
  banheiro: Bath,
};

const NEED_META: readonly {
  key: AgnusNeedKey;
  label: string;
  icon: typeof Heart;
}[] = [
  { key: "fome", label: "Fome", icon: Utensils },
  { key: "sono", label: "Sono", icon: Moon },
  { key: "banheiro", label: "Banheiro", icon: Droplets },
  { key: "felicidade", label: "Felicidade", icon: Heart },
];

const STAGE_IDLE_MS = 25000;

export function MeuAgnusArea({ topNav }: { topNav?: ReactNode }) {
  const {
    outfits,
    accessories,
    scenarios,
    metrics,
    habitatMetrics,
    mascotName,
    equippedOutfit,
    equippedAccessory,
    equippedScenario,
    unlockedIds,
    unlockedAccessoryIds,
    unlockedScenarioIds,
    nextTrackUnlock,
    nextBibleUnlock,
    nextChristmasUnlock,
    nextAccessoryUnlock,
    nextScenarioUnlock,
    careState,
    isUnlocked,
    isAccessoryUnlocked,
    isScenarioUnlocked,
    equipOutfit,
    equipAccessory,
    equipScenario,
    saveMascotName,
    changeRoom,
    runCareAction,
    runPropInteraction,
    dismissCelebration,
  } = useAgnusWardrobe();

  const [activeTab, setActiveTab] = useState<StudioTab>("roupas");
  const [stageMode, setStageMode] = useState<"room" | "scenario">("room");
  const [selectedCollection, setSelectedCollection] = useState<string>("Todas");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [stageAnimation, setStageAnimation] = useState<AgnusAnimation | null>(null);
  const [animNonce, setAnimNonce] = useState(0);
  const [particle, setParticle] = useState<{ symbol: string; key: number } | null>(null);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [isIdle, setIsIdle] = useState(false);
  const [nameDraft, setNameDraft] = useState<string>(mascotName);
  const [nameFeedback, setNameFeedback] = useState<string>("");
  const [wardrobeFeedback, setWardrobeFeedback] = useState<string>("");

  const animTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetIdleWatch = () => {
    setIsIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      setIsIdle(true);
    }, STAGE_IDLE_MS);
  };

  useEffect(() => {
    setNameDraft(mascotName);
  }, [mascotName]);

  useEffect(() => {
    resetIdleWatch();
    return () => {
      if (animTimer.current) clearTimeout(animTimer.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  const currentRoom = useMemo(
    () => AGNUS_ROOMS.find((room) => room.id === careState.currentRoom) ?? AGNUS_ROOMS[0]!,
    [careState.currentRoom],
  );

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

  const applyReactionResult = (result: {
    reaction: AgnusAnimation;
    speech: string;
    particle?: string;
  }) => {
    const nextNonce = animNonce + 1;
    setAnimNonce(nextNonce);
    setStageAnimation(result.reaction);
    setSpeechBubble(result.speech);
    setParticle(result.particle ? { symbol: result.particle, key: nextNonce } : null);
    if (animTimer.current) clearTimeout(animTimer.current);
    animTimer.current = setTimeout(() => {
      setStageAnimation(null);
      setSpeechBubble(null);
      setParticle(null);
    }, 3400);
  };

  const triggerCareAction = (action: CareActionId) => {
    resetIdleWatch();
    applyReactionResult(runCareAction(action));
  };

  const handlePropSelect = (prop: StagePropDef) => {
    resetIdleWatch();
    applyReactionResult(runPropInteraction(prop));
  };

  const handleRoomSelect = (roomId: AgnusRoomId) => {
    resetIdleWatch();
    setStageMode("room");
    changeRoom(roomId);
    const room = AGNUS_ROOMS.find((r) => r.id === roomId);
    const nextNonce = animNonce + 1;
    setAnimNonce(nextNonce);
    setStageAnimation("waving");
    setSpeechBubble(room ? `Bem-vindo ao espaço: ${room.name}!` : null);
    setParticle({ symbol: "✨", key: nextNonce });
    if (animTimer.current) clearTimeout(animTimer.current);
    animTimer.current = setTimeout(() => {
      setStageAnimation(null);
      setSpeechBubble(null);
      setParticle(null);
    }, 2600);
  };

  const handleNeedJump = (need: AgnusNeedKey) => {
    const targetRoom = recommendedRoomForNeed(need);
    handleRoomSelect(targetRoom);
  };

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

  const effectiveAnimation: AgnusAnimation =
    stageAnimation ??
    (careState.asleep || isIdle
      ? careState.currentRoom === "igreja" && !careState.asleep
        ? "contemplative"
        : "sleeping"
      : currentRoom.defaultAnimation);

  const unlockedAccessoriesCount = Math.max(0, unlockedAccessoryIds.length - 1);
  const totalSpecialAccessories = Math.max(0, accessories.length - 1);

  return (
    <section
      id="meu-agnus"
      aria-labelledby="meu-agnus-title"
      className="flex min-h-dvh w-full flex-col bg-background"
    >
      {/* Full-bleed Unified Top Header */}
      <header className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border bg-card/85 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          {topNav}
          <div className="min-w-0">
            <h1
              id="meu-agnus-title"
              className="truncate text-xl font-bold text-primary sm:text-2xl"
            >
              Meu {mascotName}
            </h1>
            <p className="truncate text-xs font-semibold text-muted-foreground">
              {equippedOutfit.name}
              {equippedAccessory.id !== "none" ? ` · ${equippedAccessory.name}` : ""} ·{" "}
              {equippedScenario.name}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-semibold text-muted-foreground">Jornada</p>
          <p className="font-display text-lg font-bold text-primary tabular-nums">
            {formatPercent(habitatMetrics.journeyPercent)}
          </p>
        </div>
      </header>

      {/* Full-Screen Interactive Area (Habitat Stage + Personalization Studio) */}
      <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT / PRIMARY FULL-BLEED COMPANION STAGE */}
        <div className="flex flex-col bg-background">
          {/* Scenic Backdrop + Centered Large Transparent PNG Agnus */}
          <div className="relative flex min-h-[370px] flex-1 flex-col justify-between overflow-hidden sm:min-h-[450px] lg:min-h-[520px]">
            <div className="absolute inset-0 z-10">
              <AgnusStageScene
                mode={stageMode}
                roomId={careState.currentRoom}
                scenarioId={equippedScenario.id}
                lampOff={careState.lampOff}
                candleLit={careState.candleLit}
                interactive
                onPropSelect={handlePropSelect}
              />
            </div>

            {/* Overlay Controls Bar (Room label & Room/Scenario switch) */}
            <div className="pointer-events-none relative z-20 flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4">
              <div className="pointer-events-auto rounded-2xl border border-border/80 bg-card/90 px-3.5 py-2 backdrop-blur-xs">
                <p className="text-sm font-bold text-primary">
                  {stageMode === "room" ? currentRoom.name : equippedScenario.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stageMode === "room" ? currentRoom.subtitle : "Cenário equipado"}
                </p>
              </div>

              <div
                role="group"
                aria-label="Modo do palco"
                className="pointer-events-auto flex shrink-0 items-center gap-1 rounded-2xl border border-border/80 bg-card/90 p-1.5 backdrop-blur-xs"
              >
                <button
                  type="button"
                  data-sound="select"
                  aria-pressed={stageMode === "room"}
                  onClick={() => setStageMode("room")}
                  className={cn(
                    "min-h-11 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-bold transition",
                    stageMode === "room"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  Cômodos
                </button>
                <button
                  type="button"
                  data-sound="select"
                  aria-pressed={stageMode === "scenario"}
                  onClick={() => setStageMode("scenario")}
                  className={cn(
                    "min-h-11 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-bold transition",
                    stageMode === "scenario"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  Cenário
                </button>
              </div>
            </div>

            {/* Speech Bubble + Floating Particle Reaction + Large Articulated PNG Agnus */}
            <div className="pointer-events-none relative z-20 flex flex-1 flex-col items-center justify-end px-4 pb-5 pt-4">
              {speechBubble && (
                <div
                  role="status"
                  aria-live="polite"
                  className="animate-rise pointer-events-none mb-2 max-w-sm rounded-2xl border-2 border-gold bg-card/95 px-4 py-2.5 text-center shadow-sm"
                >
                  <p className="text-sm font-bold text-primary">{speechBubble}</p>
                </div>
              )}

              <div className="pointer-events-auto relative flex flex-col items-center">
                {particle && (
                  <span
                    key={particle.key}
                    aria-hidden="true"
                    className="agnus-particle pointer-events-none absolute -top-6 z-20 text-3xl select-none"
                  >
                    {particle.symbol}
                  </span>
                )}
                <AgnusPortrait
                  outfitId={equippedOutfit.id}
                  accessoryId={equippedAccessory.id}
                  mascotName={mascotName}
                  animation={effectiveAnimation}
                  animNonce={animNonce}
                  asleep={effectiveAnimation === "sleeping"}
                  onClick={() => triggerCareAction("pet")}
                  className="h-48 w-48 sm:h-60 sm:w-60 lg:h-68 lg:w-68"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 5 Accessible Rooms Big Dock */}
          <div
            role="group"
            aria-label="Cômodos do Agnus"
            className="grid grid-cols-5 gap-2 border-t-2 border-border bg-card/60 p-3 sm:px-5 sm:py-3.5"
          >
            {AGNUS_ROOMS.map((room) => {
              const Icon = ROOM_ICONS[room.id];
              const active = stageMode === "room" && careState.currentRoom === room.id;
              return (
                <button
                  key={room.id}
                  type="button"
                  data-sound="select"
                  aria-pressed={active}
                  onClick={() => handleRoomSelect(room.id)}
                  className={cn(
                    "flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-2xl border-2 px-1.5 py-2.5 text-xs font-bold transition sm:min-h-[4.5rem] sm:text-sm",
                    active
                      ? "border-gold bg-accent text-accent-foreground shadow-xs"
                      : "border-border bg-card text-muted-foreground hover:border-gold hover:text-primary",
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden="true" />
                  <span className="max-w-full truncate">
                    {room.id === "sala" ? "Sala" : room.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Room Big Care & Play Buttons */}
          <div className="border-t border-border/70 px-4 py-4 sm:px-5">
            <p className="mb-3 text-sm text-muted-foreground">{currentRoom.description}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {careState.currentRoom === "sala" && (
                <>
                  <LumenButton
                    type="button"
                    variant="gold"
                    data-sound="select"
                    onClick={() => triggerCareAction("feed")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Utensils className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Dar lanche
                  </LumenButton>
                  <LumenButton
                    type="button"
                    variant="outline"
                    data-sound="select"
                    onClick={() => triggerCareAction("talk")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Conversar
                  </LumenButton>
                </>
              )}

              {careState.currentRoom === "quarto" && (
                <>
                  <LumenButton
                    type="button"
                    variant="gold"
                    data-sound="select"
                    onClick={() => triggerCareAction("toggle-sleep")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    {careState.asleep ? (
                      <>
                        <Sun className="h-5 w-5 shrink-0" aria-hidden="true" />
                        Acordar {mascotName}
                      </>
                    ) : (
                      <>
                        <Moon className="h-5 w-5 shrink-0" aria-hidden="true" />
                        Colocar para dormir
                      </>
                    )}
                  </LumenButton>
                  <LumenButton
                    type="button"
                    variant="outline"
                    data-sound="select"
                    onClick={() => triggerCareAction("toggle-lamp")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Lamp className="h-5 w-5 shrink-0" aria-hidden="true" />
                    {careState.lampOff ? "Acender abajur" : "Apagar abajur"}
                  </LumenButton>
                </>
              )}

              {careState.currentRoom === "quintal" && (
                <>
                  <LumenButton
                    type="button"
                    variant="gold"
                    data-sound="select"
                    onClick={() => triggerCareAction("play-yard")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Sparkles className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Brincar no quintal
                  </LumenButton>
                  <LumenButton
                    type="button"
                    variant="outline"
                    data-sound="select"
                    onClick={() => triggerCareAction("pick-fruit")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Utensils className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Colher frutinhas
                  </LumenButton>
                </>
              )}

              {careState.currentRoom === "igreja" && (
                <>
                  <LumenButton
                    type="button"
                    variant="gold"
                    data-sound="select"
                    onClick={() => triggerCareAction("pray-together")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Church className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Rezar juntos
                  </LumenButton>
                  <LumenButton
                    type="button"
                    variant="outline"
                    data-sound="select"
                    onClick={() => triggerCareAction("light-candle")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Flame className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Acender velinha
                  </LumenButton>
                </>
              )}

              {careState.currentRoom === "banheiro" && (
                <>
                  <LumenButton
                    type="button"
                    variant="gold"
                    data-sound="select"
                    onClick={() => triggerCareAction("use-bathroom")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Bath className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Ir ao banheiro
                  </LumenButton>
                  <LumenButton
                    type="button"
                    variant="outline"
                    data-sound="select"
                    onClick={() => triggerCareAction("wash-up")}
                    className="h-auto min-h-14 gap-2.5 px-6 py-3.5 text-base normal-case sm:min-h-16"
                  >
                    <Droplets className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Lavar o rostinho
                  </LumenButton>
                </>
              )}
            </div>
          </div>

          {/* 4 Large Need Meters */}
          <section
            aria-label={`Necessidades de ${mascotName}`}
            className="grid grid-cols-2 gap-3 px-4 pb-5 sm:grid-cols-4 sm:px-5"
          >
            {NEED_META.map(({ key, label, icon: Icon }) => {
              const value = careState[key];
              const status = needStatusLabel(key, value);
              const low = value < 40;
              return (
                <button
                  key={key}
                  type="button"
                  data-sound="select"
                  data-need={key}
                  onClick={() => handleNeedJump(key)}
                  className={cn(
                    "min-h-[5.5rem] rounded-2xl border-2 bg-card p-3.5 text-left transition hover:border-gold",
                    low ? "border-destructive/70" : "border-border",
                  )}
                >
                  <div className="flex items-center justify-between gap-2 text-sm font-bold">
                    <span className="inline-flex items-center gap-1.5 text-primary">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {label}
                    </span>
                    <span
                      className={cn("tabular-nums", low ? "text-destructive" : "text-secondary")}
                    >
                      {value}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar value={value} label={`${label}: ${value}%`} />
                  </div>
                  <p className="mt-1.5 text-xs font-semibold text-muted-foreground">{status}</p>
                </button>
              );
            })}
          </section>
        </div>

        {/* RIGHT / PERSONALIZATION STUDIO */}
        <div className="space-y-4 border-t-2 border-border bg-card/35 p-4 sm:p-6 lg:max-h-[calc(100dvh-4.5rem)] lg:overflow-y-auto lg:border-l-2 lg:border-t-0">
          {/* Bigger Studio Tabs */}
          <div
            role="tablist"
            aria-label={`Personalizar ${mascotName}`}
            className="flex flex-wrap gap-2 rounded-2xl border-2 border-border bg-card p-2"
          >
            {(
              [
                { id: "roupas", label: "Roupas", icon: Shirt },
                { id: "acessorios", label: "Acessórios", icon: Sparkles },
                { id: "cenarios", label: "Cenários", icon: ImageIcon },
                { id: "conquistas", label: "Próximos", icon: Trophy },
                { id: "nome", label: "Nome", icon: Palette },
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
                    "inline-flex min-h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-sm font-bold transition",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </div>

          {wardrobeFeedback && (
            <p role="status" className="text-sm font-bold text-success">
              {wardrobeFeedback}
            </p>
          )}

          {/* TAB 1: ROUPAS */}
          {activeTab === "roupas" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-muted-foreground">
                <span>
                  {unlockedIds.length} de {outfits.length} roupinhas desbloqueadas
                </span>
              </div>

              <div className="space-y-2.5">
                {collections.length > 1 && (
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-label="Coleções de roupas"
                  >
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
                            "min-h-11 whitespace-nowrap rounded-xl border-2 px-3.5 py-2 text-xs font-bold transition sm:text-sm",
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card text-foreground hover:border-gold",
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
                          "min-h-11 whitespace-nowrap rounded-xl border-2 px-3.5 py-2 text-xs font-bold transition sm:text-sm",
                          active
                            ? "border-gold bg-accent text-accent-foreground"
                            : "border-border bg-card text-muted-foreground hover:text-primary",
                        )}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
                        "flex flex-col justify-between rounded-2xl border-2 p-4 transition",
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
                              className="h-auto min-h-12 w-auto px-5 py-2.5 text-sm normal-case"
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
            <div className="space-y-4">
              <p className="text-sm font-bold text-muted-foreground">
                {unlockedAccessoriesCount} de {totalSpecialAccessories} acessórios especiais
                conquistados
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
                          "flex flex-col justify-between rounded-2xl border-2 p-4 transition",
                          equipped
                            ? "border-gold bg-card"
                            : unlocked
                              ? "border-border bg-card"
                              : "border-border/80 bg-card/70",
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border bg-background/40">
                            {accessory.id === "none" ? (
                              <div className="grid h-full w-full place-items-center text-muted-foreground">
                                <Sparkles className="h-6 w-6 opacity-40" aria-hidden="true" />
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
                                className="h-auto min-h-12 w-auto px-5 py-2.5 text-sm normal-case"
                              >
                                {equipped ? (
                                  <>
                                    <Check className="mr-1.5 h-4 w-4" aria-hidden="true" />
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
            </div>
          )}

          {/* TAB 3: CENÁRIOS */}
          {activeTab === "cenarios" && (
            <div className="space-y-4">
              <p className="text-sm font-bold text-muted-foreground">
                {unlockedScenarioIds.length} de {scenarios.length} cenários desbloqueados
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {scenarios
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((scenario) => {
                    const unlocked = isScenarioUnlocked(scenario.id);
                    const equipped = equippedScenario.id === scenario.id;
                    const req = evaluateHabitatRule(scenario.requirement, habitatMetrics);

                    return (
                      <article
                        key={scenario.id}
                        data-scenario-id={scenario.id}
                        data-unlocked={unlocked}
                        className={cn(
                          "overflow-hidden rounded-2xl border-2 bg-card transition",
                          equipped
                            ? "border-gold"
                            : unlocked
                              ? "border-border"
                              : "border-border/80 opacity-90",
                        )}
                      >
                        <div className="relative h-28 w-full overflow-hidden border-b border-border/60">
                          <div className={cn("h-full w-full", !unlocked && "opacity-45 grayscale")}>
                            <AgnusStageScene
                              mode="scenario"
                              roomId="sala"
                              scenarioId={scenario.id}
                            />
                          </div>
                          {!unlocked && (
                            <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-lg bg-background/90 px-2.5 py-1 text-xs font-bold text-primary">
                              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                              Bloqueado
                            </span>
                          )}
                        </div>

                        <div className="p-4">
                          <h3 className="font-display text-base font-bold text-primary">
                            {scenario.name}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {scenario.description}
                          </p>

                          <div className="mt-3 border-t border-border/70 pt-3">
                            {unlocked ? (
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-semibold text-muted-foreground">
                                  {req.shortLabel}
                                </span>
                                <LumenButton
                                  type="button"
                                  data-sound="select"
                                  disabled={equipped && stageMode === "scenario"}
                                  variant={equipped ? "outline" : "gold"}
                                  onClick={() => {
                                    if (equipScenario(scenario.id)) {
                                      setStageMode("scenario");
                                      setWardrobeFeedback(
                                        `Cenário alterado para ${scenario.name}.`,
                                      );
                                    }
                                  }}
                                  className="h-auto min-h-12 w-auto px-5 py-2.5 text-sm normal-case"
                                >
                                  {equipped ? "Em uso" : "Usar cenário"}
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
                                  label={`Progresso para ${scenario.name}`}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </div>
          )}

          {/* TAB 4: PRÓXIMOS */}
          {activeTab === "conquistas" && (
            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-border bg-card p-4">
                <h2 className="font-display text-base font-bold text-primary">
                  Resumo da coleção do {mascotName}
                </h2>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-primary tabular-nums">
                      {unlockedIds.length}/{outfits.length}
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground">Roupas</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-primary tabular-nums">
                      {unlockedAccessoriesCount}/{totalSpecialAccessories}
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground">Acessórios</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-primary tabular-nums">
                      {unlockedScenarioIds.length}/{scenarios.length}
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground">Cenários</p>
                  </div>
                </div>
                <p className="mt-3 border-t border-border/60 pt-2.5 text-xs text-muted-foreground">
                  Trilha: {formatPercent(habitatMetrics.trackPercent)} · Bíblia:{" "}
                  {formatPercent(habitatMetrics.biblePercent)} · Natal:{" "}
                  {formatPercent(habitatMetrics.christmasPercent)}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-primary">Próximos itens a conquistar</h3>
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
                  nextScenarioUnlock && {
                    key: `sce-${nextScenarioUnlock.item.id}`,
                    type: "Cenário",
                    name: nextScenarioUnlock.item.name,
                    label: nextScenarioUnlock.progress.label,
                    current: nextScenarioUnlock.progress.current,
                    target: nextScenarioUnlock.progress.target,
                    ratio: nextScenarioUnlock.progress.ratioPercent,
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
                          {item.name}{" "}
                          <span className="text-xs font-semibold text-secondary">
                            · {item.type}
                          </span>
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
            </div>
          )}

          {/* TAB 5: NOME */}
          {activeTab === "nome" && (
            <form
              onSubmit={handleSaveName}
              className="rounded-2xl border-2 border-border bg-card p-5"
            >
              <label htmlFor="agnus-name-input" className="block text-base font-bold text-primary">
                Nome do mascote
              </label>
              <p className="mt-1 text-sm text-muted-foreground">
                Escolha como chamar seu companheiro nas telas de estudo e no Meu Agnus.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <input
                  id="agnus-name-input"
                  value={nameDraft}
                  maxLength={24}
                  placeholder={AGNUS_NAME}
                  onChange={(event) => {
                    setNameDraft(event.target.value);
                    setNameFeedback("");
                  }}
                  className="min-h-12 min-w-0 flex-1 rounded-xl border-2 border-border bg-background px-4 py-2.5 text-base text-foreground outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-ring"
                />
                <LumenButton
                  type="submit"
                  variant="gold"
                  data-sound="select"
                  className="h-auto min-h-12 w-auto shrink-0 gap-2 px-5 py-2.5 text-sm normal-case"
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
                    className="h-auto min-h-12 w-auto shrink-0 gap-2 px-4 py-2.5 text-sm normal-case"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Restaurar Agnus
                  </LumenButton>
                )}
              </div>
              {nameFeedback && (
                <p role="status" className="mt-3 text-sm font-bold text-success">
                  {nameFeedback}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
