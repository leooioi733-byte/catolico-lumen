import type { LessonIllustrationId } from "@/lib/lesson-types";
import { cn } from "@/lib/utils";

const META: Record<LessonIllustrationId, { caption: string }> = {
  "tablets-god": { caption: "As Tábuas da Lei — Amor a Deus (1º ao 3º Mandamento)" },
  "tablets-neighbor": { caption: "Família, vida e pureza (4º ao 6º Mandamento)" },
  "tablets-heart": { caption: "Justiça, verdade e coração reto (7º ao 10º Mandamento)" },
  "sacraments-initiation": { caption: "Batismo, Crisma e Eucaristia — Iniciação Cristã" },
  "sacraments-healing": { caption: "Confissão e Unção dos Enfermos — Cura e Misericórdia" },
  "sacraments-service": { caption: "Ordem e Matrimônio — Serviço da Comunhão" },
  "church-precepts-worship": { caption: "Domingo, Confissão e Comunhão Pascal" },
  "church-precepts-charity": { caption: "Jejum, penitência e partilha com a Igreja" },
  "spirit-gifts-wisdom": { caption: "Sabedoria, Entendimento, Conselho e Ciência" },
  "spirit-gifts-courage": { caption: "Fortaleza, Piedade e Temor de Deus" },
  "capital-sins-pride": { caption: "Humildade, generosidade, caridade e mansidão" },
  "capital-sins-temperance": { caption: "Castidade, temperança e zelo no bem" },
};

function IllustrationArtwork({ id }: { id: LessonIllustrationId }) {
  switch (id) {
    case "tablets-god":
    case "tablets-neighbor":
    case "tablets-heart":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="50" fill="var(--accent)" />
          <path
            d="M70 96 V44 A22 22 0 0 1 114 44 V96 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <path
            d="M126 96 V44 A22 22 0 0 1 170 44 V96 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          {id === "tablets-god" && (
            <>
              <path
                d="M92 38 V68 M80 50 H104"
                stroke="var(--gold-deep)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <text
                x="148"
                y="62"
                textAnchor="middle"
                fill="var(--primary)"
                fontSize="14"
                fontWeight="700"
              >
                I–III
              </text>
              <line
                x1="136"
                y1="76"
                x2="160"
                y2="76"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </>
          )}
          {id === "tablets-neighbor" && (
            <>
              <path
                d="M92 50 C88 43 78 46 80 55 C82 62 92 69 92 69 C92 69 102 62 104 55 C106 46 96 43 92 50 Z"
                fill="var(--primary)"
              />
              <text
                x="148"
                y="62"
                textAnchor="middle"
                fill="var(--primary)"
                fontSize="14"
                fontWeight="700"
              >
                IV–VI
              </text>
              <line
                x1="136"
                y1="76"
                x2="160"
                y2="76"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </>
          )}
          {id === "tablets-heart" && (
            <>
              <path
                d="M92 42 L92 74 M80 50 H104 M76 62 L80 50 L84 62 M100 62 L104 50 L108 62"
                stroke="var(--primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <text
                x="148"
                y="62"
                textAnchor="middle"
                fill="var(--primary)"
                fontSize="13"
                fontWeight="700"
              >
                VII–X
              </text>
              <line
                x1="136"
                y1="76"
                x2="160"
                y2="76"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      );

    case "sacraments-initiation":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="52" fill="var(--accent)" />
          {/* Water drop (Batismo) */}
          <path
            d="M58 44 C58 44 45 64 45 73 A13 13 0 0 0 71 73 C71 64 58 44 58 44 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          {/* Flame (Crisma) */}
          <path
            d="M120 26 C132 42 136 56 132 68 A12 12 0 0 1 108 68 C104 56 108 42 120 26 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          {/* Chalice & Host (Eucaristia) */}
          <circle
            cx="182"
            cy="40"
            r="11"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="2.8"
          />
          <path
            d="M170 55 H194 L188 76 H176 Z M182 76 V88 M172 88 H192"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="2.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );

    case "sacraments-healing":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="52" fill="var(--accent)" />
          {/* Stole & Cross (Confissão) */}
          <path
            d="M68 32 L82 90 M96 32 L82 90"
            stroke="var(--primary)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M82 40 V58 M74 48 H90"
            stroke="var(--gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Oil vessel & Cross (Unção) */}
          <rect
            x="148"
            y="50"
            width="28"
            height="36"
            rx="10"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          <path
            d="M156 50 V40 H168 V50"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="2.8"
          />
          <path
            d="M162 60 V76 M155 68 H169"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case "sacraments-service":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="52" fill="var(--accent)" />
          {/* Cross & Chalice (Ordem) */}
          <path
            d="M76 30 V88 M60 48 H92"
            stroke="var(--primary)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="76" cy="48" r="7" fill="var(--gold)" />
          {/* Interlocked rings (Matrimônio) */}
          <circle cx="152" cy="64" r="17" fill="none" stroke="var(--primary)" strokeWidth="4" />
          <circle cx="174" cy="64" r="17" fill="none" stroke="var(--gold-deep)" strokeWidth="4" />
          <path
            d="M163 32 V42 M158 37 H168"
            stroke="var(--primary)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "church-precepts-worship":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="52" fill="var(--accent)" />
          <path
            d="M80 92 V56 L120 30 L160 56 V92 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path
            d="M120 18 V32 M113 24 H127"
            stroke="var(--primary)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M110 92 V70 A10 10 0 0 1 130 70 V92 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="2.8"
          />
        </svg>
      );

    case "church-precepts-charity":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="52" fill="var(--accent)" />
          <ellipse
            cx="90"
            cy="70"
            rx="28"
            ry="15"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          <path d="M74 68 Q90 56 106 68" stroke="var(--gold-deep)" strokeWidth="3" fill="none" />
          <path
            d="M158 46 C150 36 136 41 138 54 C140 65 158 78 158 78 C158 78 176 65 178 54 C180 41 166 36 158 46 Z"
            fill="var(--primary)"
          />
          <path
            d="M158 50 V66 M150 58 H166"
            stroke="var(--gold)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case "spirit-gifts-wisdom":
    case "spirit-gifts-courage":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="52" fill="var(--accent)" />
          {/* 7 rays */}
          {[-48, -32, -16, 0, 16, 32, 48].map((dx, idx) => (
            <line
              key={idx}
              x1="120"
              y1="26"
              x2={120 + dx}
              y2="94"
              stroke="var(--gold)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
          {/* Dove silhouette */}
          <path
            d="M120 42 C106 34 86 38 78 52 C92 50 100 54 106 60 C96 64 90 74 96 80 C106 76 114 70 120 66 C126 70 134 76 144 80 C150 74 144 64 134 60 C140 54 148 50 162 52 C154 38 134 34 120 42 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="120" cy="24" r="7" fill="var(--primary)" />
        </svg>
      );

    case "capital-sins-pride":
    case "capital-sins-temperance":
      return (
        <svg viewBox="0 0 240 120" className="h-28 w-full max-w-[220px]" aria-hidden="true">
          <circle cx="120" cy="60" r="52" fill="var(--accent)" />
          {/* Shield of virtues */}
          <path
            d="M120 24 L156 38 V64 C156 84 138 96 120 102 C102 96 84 84 84 64 V38 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M120 38 V84 M102 56 H138"
            stroke="var(--gold-deep)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function LessonIllustration({
  id,
  compact = false,
  className,
}: {
  id: LessonIllustrationId;
  compact?: boolean;
  className?: string;
}) {
  const meta = META[id];
  return (
    <figure
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-border bg-card/70 px-4 py-3 text-center",
        compact && "py-2",
        className,
      )}
    >
      <IllustrationArtwork id={id} />
      <figcaption className="mt-1 text-xs font-bold text-muted-foreground">
        {meta.caption}
      </figcaption>
    </figure>
  );
}
