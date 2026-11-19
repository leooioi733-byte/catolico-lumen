import { createFileRoute } from "@tanstack/react-router";
import { AgnusAiHub } from "@/components/AgnusAiHub";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/inicio")({
  head: () => ({
    meta: [
      { title: "Agnus AI — Início — Lumen" },
      {
        name: "description",
        content:
          "Converse com o Agnus AI para estudar a fé católica, passagens bíblicas, santos, sacramentos e doutrina.",
      },
      { property: "og:title", content: "Agnus AI — Início — Lumen" },
      {
        property: "og:description",
        content:
          "Converse com o Agnus AI para estudar a fé católica, passagens bíblicas, santos, sacramentos e doutrina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <AppShell wide>
      <AgnusAiHub />
    </AppShell>
  );
}
