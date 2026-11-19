import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { BiblicalMapsViewer } from "@/components/BiblicalMapsViewer";

export const Route = createFileRoute("/mapas")({
  head: () => ({
    meta: [
      { title: "Mapas Bíblicos — Lumen" },
      {
        name: "description",
        content:
          "Explore os mapas do Antigo e do Novo Testamento com zoom, navegação e lugares bíblicos em destaque.",
      },
      { property: "og:title", content: "Mapas Bíblicos — Lumen" },
      {
        property: "og:description",
        content:
          "Explore os mapas do Antigo e do Novo Testamento com zoom, navegação e lugares bíblicos em destaque.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MapasBiblicos,
});

function MapasBiblicos() {
  return (
    <AppShell wide>
      <Link
        to="/biblioteca"
        data-sound="select"
        className="btn-3d-sm inline-flex min-h-10 items-center gap-1.5 border-2 border-border bg-card px-3.5 py-1.5 text-sm font-bold text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        ← Biblioteca
      </Link>
      <h1 className="mt-3 text-2xl font-bold text-primary">Mapas Bíblicos</h1>
      <p className="mt-1 mb-5 text-muted-foreground">
        Alterne entre o Antigo e o Novo Testamento, dê zoom e navegue pelos principais lugares da
        História da Salvação.
      </p>
      <BiblicalMapsViewer />
    </AppShell>
  );
}
