import { createFileRoute } from "@tanstack/react-router";
import { AgnusCompanionCard, AgnusNextGoalBanner } from "@/components/AgnusCompanion";
import { AppShell } from "@/components/AppShell";
import { ChristmasJourneyCard } from "@/components/ChristmasJourneyCard";
import { LessonPath } from "@/components/LessonPath";
import { UNITS, LESSONS } from "@/lib/lessons";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/trilha")({
  head: () => ({
    meta: [
      { title: "Trilha — Lumen" },
      {
        name: "description",
        content:
          "Unidades sobre a Bíblia, sacramentos, vida cristã, liturgia e oração, com fontes do Catecismo.",
      },
      { property: "og:title", content: "Trilha — Lumen" },
      {
        property: "og:description",
        content:
          "Unidades sobre a Bíblia, sacramentos, vida cristã, liturgia e oração, com fontes do Catecismo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Trilha,
});

function Trilha() {
  const { progress } = useProgress();
  return (
    <AppShell>
      <h1 className="text-2xl font-bold text-primary">Trilha de estudos</h1>
      <p className="mb-5 mt-1 text-muted-foreground">
        {UNITS.length} unidades · {LESSONS.length} lições
      </p>
      <AgnusCompanionCard moment="path" context="track" className="mb-4" />
      <ChristmasJourneyCard compact className="mb-4" />
      <AgnusNextGoalBanner source="track" className="mb-6" />
      <LessonPath completed={progress.completed} />
    </AppShell>
  );
}
