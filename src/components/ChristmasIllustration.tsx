import { useState } from "react";
import natividadeAnjos from "@/assets/images/natividade_anjos_1794537882541.jpg";
import natividadeBelem from "@/assets/images/natividade_belem_1794537883481.jpg";
import natividadePastores from "@/assets/images/natividade_pastores_1794537883786.jpg";
import natividadePresepio from "@/assets/images/natividade_presepio_1794537881895.jpg";
import natividadeReisMagos from "@/assets/images/natividade_reis_magos_1794537884312.jpg";
import type { ChristmasIllustrationId } from "@/lib/christmas";
import { cn } from "@/lib/utils";

const ARTWORK_BY_ID: Partial<Record<ChristmasIllustrationId, string>> = {
  anunciacao: natividadeAnjos,
  belem: natividadeBelem,
  presepio: natividadePresepio,
  pastores: natividadePastores,
  "reis-magos": natividadeReisMagos,
};

export function ChristmasIllustration({
  id,
  alt,
  compact = false,
  className,
}: {
  id: ChristmasIllustrationId;
  alt: string;
  compact?: boolean;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);
  const src = ARTWORK_BY_ID[id];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 border-border bg-[#19283B]",
        compact ? "aspect-[16/9]" : "aspect-[16/9]",
        className,
      )}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImageError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <NativityVectorScene id={id} label={alt} />
      )}
    </div>
  );
}

function NativityVectorScene({ id, label }: { id: ChristmasIllustrationId; label: string }) {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162336" />
          <stop offset="65%" stopColor="#22364F" />
          <stop offset="100%" stopColor="#315B43" />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#F5DEB3" stopOpacity="0.48" />
          <stop offset="60%" stopColor="#D8B36A" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#162336" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill={`url(#sky-${id})`} />
      <rect width="320" height="180" fill={`url(#glow-${id})`} />

      {/* Quiet night stars */}
      <g fill="#F5EBD8" opacity="0.75">
        <circle cx="38" cy="28" r="1.4" />
        <circle cx="76" cy="46" r="1" />
        <circle cx="114" cy="22" r="1.3" />
        <circle cx="212" cy="26" r="1.4" />
        <circle cx="256" cy="42" r="1.1" />
        <circle cx="288" cy="24" r="1.5" />
      </g>

      {id === "profecias" && (
        <g>
          <path d="M0 144 Q90 120 175 138 T320 132 L320 180 L0 180Z" fill="#234232" />
          <path d="M0 156 Q120 142 225 154 T320 148 L320 180 L0 180Z" fill="#315B43" />
          {/* Star of Bethlehem & prophetic scroll */}
          <path
            d="M160 18 L166 42 L190 48 L166 54 L160 78 L154 54 L130 48 L154 42Z"
            fill="#F3D68A"
          />
          <path d="M160 72 L134 118 L186 118Z" fill="#F3D68A" opacity="0.18" />
          {/* Bethlehem silhouette */}
          <g fill="#EAD9BC" opacity="0.92">
            <rect x="118" y="114" width="22" height="26" rx="2" />
            <rect x="144" y="106" width="28" height="34" rx="2" />
            <path d="M144 108 Q158 95 172 108Z" fill="#A83D43" />
            <rect x="176" y="118" width="24" height="22" rx="2" />
          </g>
          {/* Open scroll */}
          <rect
            x="94"
            y="138"
            width="132"
            height="28"
            rx="6"
            fill="#F5EBD8"
            stroke="#A83D43"
            strokeWidth="2.5"
          />
          <line
            x1="112"
            y1="149"
            x2="208"
            y2="149"
            stroke="#A83D43"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="122"
            y1="157"
            x2="198"
            y2="157"
            stroke="#315B43"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>
      )}

      {id === "visitacao" && (
        <g>
          <path d="M0 136 Q85 112 175 130 T320 124 L320 180 L0 180Z" fill="#234232" />
          <path d="M0 152 Q120 136 240 150 T320 144 L320 180 L0 180Z" fill="#315B43" />
          {/* Warm doorway arch */}
          <path d="M104 152 L104 92 A56 56 0 0 1 216 92 L216 152Z" fill="#F5EBD8" opacity="0.95" />
          <path d="M114 152 L114 95 A46 46 0 0 1 206 95 L206 152Z" fill="#E8D2AA" />
          {/* Mary (burgundy & cream) */}
          <circle cx="140" cy="96" r="10" fill="#F3C7A3" />
          <path d="M124 152 Q126 110 140 106 Q154 110 156 152Z" fill="#A83D43" />
          <path
            d="M130 95 Q140 82 150 95 L154 126 Q140 120 126 126Z"
            fill="#F5EBD8"
            opacity="0.92"
          />
          {/* Elizabeth (pine green & cream) */}
          <circle cx="180" cy="98" r="10" fill="#ECC09C" />
          <path d="M164 152 Q166 112 180 108 Q194 112 196 152Z" fill="#315B43" />
          <path
            d="M170 97 Q180 85 190 97 L193 124 Q180 118 167 124Z"
            fill="#F3D68A"
            opacity="0.9"
          />
          {/* Joyful golden heart-star above */}
          <path
            d="M160 54 L164 66 L176 70 L164 74 L160 86 L156 74 L144 70 L156 66Z"
            fill="#D8B36A"
          />
        </g>
      )}

      {id === "encarnacao" && (
        <g>
          <path d="M0 146 Q160 128 320 146 L320 180 L0 180Z" fill="#234232" />
          {/* Radiant Word & Cross halo */}
          <circle cx="160" cy="84" r="46" fill="#F3D68A" opacity="0.22" />
          <circle cx="160" cy="84" r="32" fill="#F5EBD8" stroke="#D8B36A" strokeWidth="3" />
          {/* Gentle cross rays behind manger */}
          <rect x="157" y="42" width="6" height="40" rx="3" fill="#A83D43" />
          <rect x="142" y="57" width="36" height="6" rx="3" fill="#A83D43" />
          {/* Manger and Child */}
          <path d="M124 126 L196 126 L184 152 L136 152Z" fill="#8C5A3C" />
          <path
            d="M132 152 L124 166 M188 152 L196 166"
            stroke="#6E442B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <ellipse cx="160" cy="120" rx="22" ry="10" fill="#F5EBD8" />
          <circle cx="148" cy="116" r="7" fill="#F4CAA7" />
        </g>
      )}

      {id === "significado-natal" && (
        <g>
          <path d="M0 144 Q160 126 320 144 L320 180 L0 180Z" fill="#315B43" />
          {/* Glowing church window arch */}
          <path d="M116 152 L116 74 A44 44 0 0 1 204 74 L204 152Z" fill="#A83D43" />
          <path d="M126 152 L126 78 A34 34 0 0 1 194 78 L194 152Z" fill="#F5EBD8" />
          {/* Candlelight & Star */}
          <rect x="153" y="96" width="14" height="44" rx="4" fill="#F3D68A" />
          <path d="M160 72 Q168 84 160 94 Q152 84 160 72Z" fill="#D97706" />
          <path
            d="M160 36 L163 45 L172 48 L163 51 L160 60 L157 51 L148 48 L157 45Z"
            fill="#F3D68A"
          />
          {/* Peace branches */}
          <path d="M62 146 Q92 128 112 138" stroke="#F5EBD8" strokeWidth="2.5" fill="none" />
          <path d="M258 146 Q228 128 208 138" stroke="#F5EBD8" strokeWidth="2.5" fill="none" />
        </g>
      )}

      {id === "tradicoes" && (
        <g>
          <path d="M0 148 Q160 134 320 148 L320 180 L0 180Z" fill="#234232" />
          {/* Advent wreath on left */}
          <ellipse
            cx="90"
            cy="134"
            rx="34"
            ry="12"
            fill="#315B43"
            stroke="#D8B36A"
            strokeWidth="2"
          />
          <rect x="68" y="106" width="6" height="24" rx="2" fill="#A83D43" />
          <rect x="81" y="102" width="6" height="26" rx="2" fill="#A83D43" />
          <rect x="94" y="102" width="6" height="26" rx="2" fill="#F5EBD8" />
          <rect x="107" y="106" width="6" height="24" rx="2" fill="#A83D43" />
          <g fill="#F3D68A">
            <circle cx="71" cy="102" r="3" />
            <circle cx="84" cy="98" r="3" />
            <circle cx="97" cy="98" r="3" />
            <circle cx="110" cy="102" r="3" />
          </g>
          {/* Greccio manger & Pine tree */}
          <polygon points="236,42 204,104 268,104" fill="#315B43" />
          <polygon points="236,68 196,136 276,136" fill="#254835" />
          <rect x="230" y="136" width="12" height="16" fill="#7C4D30" />
          <path
            d="M236 24 L239 33 L248 36 L239 39 L236 48 L233 39 L224 36 L233 33Z"
            fill="#F3D68A"
          />
          <circle cx="222" cy="94" r="2.8" fill="#F3D68A" />
          <circle cx="248" cy="102" r="2.8" fill="#A83D43" />
          <circle cx="232" cy="118" r="2.8" fill="#F5EBD8" />
        </g>
      )}

      {/* Fallback vector artwork if any of the 5 raster scenes fails to load */}
      {(id === "anunciacao" ||
        id === "belem" ||
        id === "presepio" ||
        id === "pastores" ||
        id === "reis-magos") && (
        <g>
          <path d="M0 144 Q160 124 320 144 L320 180 L0 180Z" fill="#315B43" />
          <path
            d="M160 20 L166 42 L188 48 L166 54 L160 76 L154 54 L132 48 L154 42Z"
            fill="#F3D68A"
          />
          <path
            d="M110 144 L160 78 L210 144"
            fill="none"
            stroke="#8C5A3C"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M138 134 L182 134 L174 152 L146 152Z" fill="#8C5A3C" />
          <ellipse cx="160" cy="130" rx="16" ry="7" fill="#F5EBD8" />
        </g>
      )}
    </svg>
  );
}
