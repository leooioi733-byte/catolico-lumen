import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronRight,
  Minus,
  Music2,
  Palette,
  Plus,
  Settings,
  Sparkles,
  Star,
  TreePine,
  Type,
  Volume2,
} from "lucide-react";
import { ThemeIcon } from "@/components/ThemeSymbols";
import { useAudio } from "@/components/AudioProvider";
import { useSettings } from "@/components/SettingsProvider";
import { LumenButton } from "@/components/ui/lumen-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  APPEARANCE_OPTIONS,
  READING_SIZE_CLASSES,
  READING_SIZE_LABELS,
  isChristmasAppearance,
} from "@/lib/settings";
import { cn } from "@/lib/utils";

export function AppSettings() {
  const { settings, resolvedAppearance, ready, updateSettings } = useSettings();
  const { preferences, toggleMusic, toggleEffects } = useAudio();
  const [view, setView] = useState<"main" | "themes">("main");
  const pathname = useLocation({ select: (location) => location.pathname });
  const showNatalShortcut =
    pathname !== "/" && pathname !== "/cadastro" && !pathname.startsWith("/licao/");
  const onNatal = pathname.startsWith("/natal");
  const currentTheme =
    APPEARANCE_OPTIONS.find((option) => option.value === settings.appearance) ??
    APPEARANCE_OPTIONS[0];
  const resolvedThemeLabel =
    APPEARANCE_OPTIONS.find((option) => option.value === resolvedAppearance)?.label ??
    "Branco e azul claro";

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setView("main");
      }}
    >
      <header
        className={cn(
          "mx-auto flex h-16 max-w-4xl items-center gap-3 px-5",
          showNatalShortcut ? "justify-between" : "justify-end",
        )}
        aria-label="Preferências do Lumen"
      >
        {showNatalShortcut && (
          <Link
            to="/natal"
            data-sound="select"
            aria-current={onNatal ? "page" : undefined}
            className={cn(
              "btn-3d-sm inline-flex min-h-10 items-center gap-2 whitespace-nowrap border-2 px-3.5 py-1.5 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              onNatal
                ? "border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                : "border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
            )}
          >
            <Star className="christmas-twinkle h-4 w-4 shrink-0 fill-current" aria-hidden="true" />
            <span>Especial de Natal</span>
          </Link>
        )}
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <LumenButton
                  variant="outline"
                  aria-label="Abrir configurações"
                  className="group h-11 w-11 shrink-0 p-0"
                >
                  <Settings
                    className="h-5 w-5 transition-transform duration-200 group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </LumenButton>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>Configurações</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </header>
      <DialogContent className="settings-dialog max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md gap-0 overflow-y-auto rounded-3xl border-2 border-border bg-background p-5 sm:p-6">
        {view === "themes" ? (
          <div className="animate-rise">
            <DialogHeader className="pr-8 text-left">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  data-sound="select"
                  aria-label="Voltar às configurações"
                  onClick={() => setView("main")}
                  className="btn-3d-sm inline-flex min-h-10 items-center gap-1.5 border-2 border-border bg-card px-3 py-1.5 text-xs font-bold text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Voltar
                </button>
              </div>
              <DialogTitle className="mt-3 flex items-center gap-2 font-display text-2xl font-semibold text-primary">
                <Palette className="h-5 w-5 shrink-0" aria-hidden="true" />
                Temas
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Escolha o visual do Lumen. Sua preferência fica salva neste aparelho.
              </DialogDescription>
            </DialogHeader>

            <section className="mt-5" aria-labelledby="themes-grid-title">
              <h2 id="themes-grid-title" className="sr-only">
                Temas disponíveis
              </h2>
              <div role="group" aria-label="Aparência" className="grid grid-cols-2 gap-3">
                {APPEARANCE_OPTIONS.map(({ value, label }) => (
                  <LumenButton
                    key={value}
                    variant="outline"
                    data-sound="select"
                    aria-pressed={settings.appearance === value}
                    disabled={!ready}
                    onClick={() => updateSettings({ appearance: value })}
                    className={cn(
                      "relative h-auto min-w-0 flex-col gap-2 px-2 py-3 text-sm normal-case",
                      value === "auto" && "col-span-2 px-4",
                      settings.appearance === value &&
                        "border-gold bg-accent/45 ring-2 ring-gold/40 [--btn-depth:var(--gold-deep)]",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn("theme-preview", `theme-preview-${value}`)}
                    >
                      <span className="theme-preview-heading" />
                      <span className="theme-preview-card">
                        <span />
                        <span />
                      </span>
                      <span className="theme-preview-button" />
                    </span>
                    <span className="flex min-h-8 w-full flex-col items-center justify-center gap-0.5 text-center leading-tight">
                      <span className="inline-flex items-center gap-1">
                        {isChristmasAppearance(value) && (
                          <TreePine className="h-4 w-4 shrink-0" aria-hidden="true" />
                        )}
                        {label}
                      </span>
                      {value === "auto" && (
                        <span className="text-[11px] font-semibold text-muted-foreground">
                          Branco e azul claro de dia · Preto e amarelo à noite
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-gold-foreground shadow-sm",
                        settings.appearance !== value && "invisible",
                      )}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </LumenButton>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div>
            <DialogHeader className="pr-7 text-left">
              <DialogTitle className="font-display text-2xl font-semibold text-primary">
                Configurações
              </DialogTitle>
              <DialogDescription className="sr-only">
                Preferências de aparência, som e leitura do Lumen.
              </DialogDescription>
            </DialogHeader>

            <section className="mt-5" aria-labelledby="appearance-title">
              <h2
                id="appearance-title"
                className="mb-3 text-sm font-semibold text-muted-foreground"
              >
                Aparência
              </h2>
              <LumenButton
                type="button"
                variant="outline"
                data-sound="select"
                onClick={() => setView("themes")}
                className="h-auto justify-between gap-3 px-3.5 py-3 text-left normal-case"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "theme-preview theme-preview-compact shrink-0",
                      `theme-preview-${settings.appearance === "auto" ? "auto" : resolvedAppearance}`,
                    )}
                  >
                    <span className="theme-preview-heading" />
                    <span className="theme-preview-card">
                      <span />
                    </span>
                    <span className="theme-preview-button" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5 font-display text-base font-bold text-primary">
                      <Palette className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Temas
                    </span>
                    <span className="mt-0.5 block truncate text-xs font-semibold text-muted-foreground">
                      {settings.appearance === "auto"
                        ? `Atual: Automático (${resolvedThemeLabel})`
                        : `Atual: ${currentTheme.label}`}
                    </span>
                  </span>
                </span>
                <ChevronRight
                  className="h-5 w-5 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </LumenButton>
            </section>

            <section className="mt-6 border-t border-border pt-4" aria-labelledby="sound-title">
              <h2 id="sound-title" className="mb-1 text-sm font-semibold text-muted-foreground">
                Som
              </h2>
              <label
                htmlFor="settings-music"
                className="flex min-h-12 cursor-pointer items-center justify-between gap-3"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Music2 aria-hidden="true" className="h-5 w-5 text-primary" />
                  Música de fundo
                </span>
                <Switch
                  id="settings-music"
                  checked={preferences.music}
                  onCheckedChange={toggleMusic}
                />
              </label>
              <label
                htmlFor="settings-effects"
                className="flex min-h-12 cursor-pointer items-center justify-between gap-3"
              >
                <span className="flex items-center gap-3 font-bold">
                  <ThemeIcon icon={Volume2} christmas={Bell} className="h-5 w-5 text-primary" />
                  Efeitos sonoros
                </span>
                <Switch
                  id="settings-effects"
                  checked={preferences.effects}
                  onCheckedChange={toggleEffects}
                />
              </label>
            </section>

            <section className="mt-3 border-t border-border pt-4" aria-labelledby="reading-title">
              <h2 id="reading-title" className="mb-3 text-sm font-semibold text-muted-foreground">
                Leitura e movimento
              </h2>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-3 font-bold">
                  <Type aria-hidden="true" className="h-5 w-5 text-primary" />
                  Tamanho da letra
                </span>
                <div
                  role="group"
                  aria-label="Tamanho da letra"
                  className="ml-auto flex shrink-0 items-center gap-2"
                >
                  <LumenButton
                    variant="outline"
                    aria-label="Diminuir letra"
                    title="Diminuir letra"
                    disabled={!ready || settings.textSize === 0}
                    onClick={() => updateSettings({ textSize: settings.textSize - 1 })}
                    className="h-11 w-11 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </LumenButton>
                  <output className="w-6 text-center text-sm font-bold" aria-live="polite">
                    {READING_SIZE_LABELS[settings.textSize]}
                  </output>
                  <LumenButton
                    variant="outline"
                    aria-label="Aumentar letra"
                    title="Aumentar letra"
                    disabled={!ready || settings.textSize === 4}
                    onClick={() => updateSettings({ textSize: settings.textSize + 1 })}
                    className="h-11 w-11 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </LumenButton>
                </div>
              </div>
              <p
                className={cn(
                  "mt-4 break-words rounded-2xl bg-card p-3 leading-relaxed text-card-foreground",
                  READING_SIZE_CLASSES[settings.textSize],
                )}
              >
                O Senhor é meu pastor.
              </p>
              <label
                htmlFor="settings-motion"
                className="mt-2 flex min-h-12 cursor-pointer items-center justify-between gap-3"
              >
                <span className="flex items-center gap-3 font-bold">
                  <ThemeIcon
                    icon={Sparkles}
                    christmas={Star}
                    className="h-5 w-5 shrink-0 text-primary"
                  />
                  Reduzir animações
                </span>
                <Switch
                  id="settings-motion"
                  disabled={!ready}
                  checked={settings.reduceMotion}
                  onCheckedChange={(reduceMotion) => updateSettings({ reduceMotion })}
                />
              </label>
            </section>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
