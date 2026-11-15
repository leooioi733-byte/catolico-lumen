import { Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Heart, Moon, Sparkles, Utensils } from "lucide-react";
import { AgnusPortrait } from "@/components/AgnusPortrait";
import { useAgnusWardrobe } from "@/components/AgnusWardrobeProvider";
import { lumenButton } from "@/components/ui/lumen-button";
import { cn } from "@/lib/utils";

export function AgnusWardrobeSection() {
  const {
    outfits,
    accessories,
    scenarios,
    mascotName,
    equippedOutfit,
    equippedAccessory,
    equippedScenario,
    unlockedIds,
    unlockedAccessoryIds,
    unlockedScenarioIds,
    careState,
  } = useAgnusWardrobe();

  const unlockedAccessoriesCount = Math.max(0, unlockedAccessoryIds.length - 1);
  const totalSpecialAccessories = Math.max(0, accessories.length - 1);

  const needs = [
    { key: "fome", label: "Fome", value: careState.fome, icon: Utensils },
    { key: "sono", label: "Sono", value: careState.sono, icon: Moon },
    { key: "banheiro", label: "Banheiro", value: careState.banheiro, icon: Droplets },
    { key: "felicidade", label: "Felicidade", value: careState.felicidade, icon: Heart },
  ] as const;

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
          Meu {mascotName}
        </h2>
        <span className="text-xs font-bold text-secondary">
          {unlockedIds.length}/{outfits.length} roupas · {unlockedAccessoriesCount}/
          {totalSpecialAccessories} acessórios · {unlockedScenarioIds.length}/{scenarios.length}{" "}
          cenários
        </span>
      </div>

      <p className="mt-1 text-sm text-muted-foreground">
        Toda a casa interativa, cuidados, roupinhas, acessórios, cenários e nome do seu companheiro
        ficam reunidos na área Meu Agnus.
      </p>

      <div className="mt-4 rounded-3xl border-2 border-gold bg-card p-4">
        <div className="flex items-center gap-4">
          <AgnusPortrait
            outfitId={equippedOutfit.id}
            accessoryId={equippedAccessory.id}
            mascotName={mascotName}
            animation="resting"
            className="h-24 w-24 shrink-0"
            priority
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-secondary">
              {mascotName} · {equippedOutfit.name}
            </p>
            <h3 className="mt-0.5 font-display text-xl font-bold text-primary">
              {equippedScenario.name}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {equippedAccessory.id !== "none"
                ? `Acessório em uso: ${equippedAccessory.name}.`
                : "Nenhum acessório equipado no momento."}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/70 pt-3 sm:grid-cols-4">
          {needs.map(({ key, label, value, icon: Icon }) => (
            <div
              key={key}
              className={cn(
                "flex items-center justify-between rounded-xl border px-2.5 py-2 text-xs font-bold",
                value < 40
                  ? "border-destructive/60 bg-background text-destructive"
                  : "border-border bg-background/60 text-primary",
              )}
            >
              <span className="inline-flex items-center gap-1">
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {label}
              </span>
              <span className="tabular-nums">{value}%</span>
            </div>
          ))}
        </div>

        <Link to="/meu-agnus" className={`${lumenButton({ variant: "gold" })} mt-4 gap-2`}>
          Entrar no Meu Agnus
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
