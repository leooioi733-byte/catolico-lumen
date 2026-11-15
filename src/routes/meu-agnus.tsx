import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, User } from "lucide-react";
import { MeuAgnusArea } from "@/components/MeuAgnusArea";

export const Route = createFileRoute("/meu-agnus")({
  head: () => ({
    meta: [
      { title: "Meu Agnus — Lumen" },
      {
        name: "description",
        content:
          "Cuide do seu companheiro Agnus pelos cômodos da casa, equipe roupinhas, acessórios e cenários e acompanhe os próximos desbloqueios.",
      },
      { property: "og:title", content: "Meu Agnus — Lumen" },
      {
        property: "og:description",
        content:
          "Espaço interativo do Agnus com cômodos, necessidades, roupas, acessórios e cenários.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MeuAgnusPage,
});

function MeuAgnusPage() {
  return (
    <MeuAgnusArea
      topNav={
        <div className="flex items-center gap-2">
          <Link
            to="/inicio"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border-2 border-border bg-card px-3.5 py-2 text-sm font-bold text-primary transition hover:border-gold"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            Voltar
          </Link>
          <Link
            to="/perfil"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border-2 border-border bg-card px-3.5 py-2 text-sm font-bold text-secondary transition hover:border-gold"
          >
            <User className="h-4 w-4 shrink-0" aria-hidden="true" />
            Conta
          </Link>
        </div>
      }
    />
  );
}
