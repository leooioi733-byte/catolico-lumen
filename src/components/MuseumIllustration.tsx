import type { MuseumExhibit, MuseumIllustrationId } from "@/lib/museum-types";

function Artwork({ id }: { id: MuseumIllustrationId }) {
  switch (id) {
    case "reliquary":
    case "monstrance":
      return (
        <g>
          {/* Sunburst rays */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="200"
              y1="115"
              x2={200 + Math.cos((deg * Math.PI) / 180) * 66}
              y2={115 + Math.sin((deg * Math.PI) / 180) * 66}
              stroke="var(--gold)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
          <circle
            cx="200"
            cy="115"
            r="36"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          <circle
            cx="200"
            cy="115"
            r="21"
            fill="var(--accent)"
            stroke="var(--gold-deep)"
            strokeWidth="3"
          />
          <path
            d="M200 103 V127 M189 115 H211"
            stroke="var(--primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M188 151 L182 215 H218 L212 151 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <ellipse cx="200" cy="220" rx="44" ry="11" fill="var(--primary)" />
        </g>
      );

    case "sanctuary-crown":
    case "tilma":
      return (
        <g>
          <path
            d="M140 230 C140 130 165 65 200 50 C235 65 260 130 260 230 Z"
            fill="var(--primary)"
            opacity="0.18"
          />
          <ellipse
            cx="200"
            cy="145"
            rx="54"
            ry="78"
            fill="none"
            stroke="var(--gold-deep)"
            strokeWidth="4"
            strokeDasharray="7 5"
          />
          <path
            d="M166 96 L180 72 L200 88 L220 72 L234 96 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <circle
            cx="200"
            cy="146"
            r="28"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <path
            d="M185 182 Q200 198 215 182"
            stroke="var(--primary)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="170" cy="128" r="4" fill="var(--gold-deep)" />
          <circle cx="230" cy="128" r="4" fill="var(--gold-deep)" />
          <circle cx="164" cy="160" r="4" fill="var(--gold-deep)" />
          <circle cx="236" cy="160" r="4" fill="var(--gold-deep)" />
        </g>
      );

    case "grotto":
      return (
        <g>
          <path
            d="M70 230 Q80 75 200 65 Q320 75 330 230 Z"
            fill="var(--muted)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          <path
            d="M135 230 Q145 130 200 125 Q255 130 265 230 Z"
            fill="var(--primary)"
            opacity="0.22"
          />
          <circle
            cx="200"
            cy="150"
            r="20"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          <path
            d="M182 218 Q200 170 218 218 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          <path d="M60 234 Q200 220 340 234" stroke="var(--primary)" strokeWidth="4" fill="none" />
        </g>
      );

    case "basilica-dome":
    case "church-lateran":
    case "church-san-marco":
      return (
        <g>
          <path
            d="M200 32 V52 M191 40 H209"
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M130 126 C130 78 160 54 200 54 C240 54 270 78 270 126 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          <rect
            x="115"
            y="126"
            width="170"
            height="24"
            rx="4"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <rect
            x="92"
            y="150"
            width="216"
            height="82"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          {[116, 152, 248, 284].map((x) => (
            <line key={x} x1={x} y1="150" x2={x} y2="232" stroke="var(--primary)" strokeWidth="6" />
          ))}
          <path d="M182 232 V186 A18 18 0 0 1 218 186 V232 Z" fill="var(--primary)" />
        </g>
      );

    case "church-notre-dame":
      return (
        <g>
          <rect
            x="112"
            y="58"
            width="44"
            height="174"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <rect
            x="244"
            y="58"
            width="44"
            height="174"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <rect
            x="156"
            y="106"
            width="88"
            height="126"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <circle
            cx="200"
            cy="146"
            r="24"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <circle
            cx="200"
            cy="146"
            r="10"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="2.5"
          />
          <path d="M185 232 V196 A15 15 0 0 1 215 196 V232 Z" fill="var(--primary)" />
          <path
            d="M200 62 L200 106 M188 78 H212"
            stroke="var(--primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>
      );

    case "good-shepherd":
    case "saint-francis":
      return (
        <g>
          <circle
            cx="200"
            cy="126"
            r="78"
            fill="var(--accent)"
            stroke="var(--gold-deep)"
            strokeWidth="4"
          />
          <circle
            cx="200"
            cy="96"
            r="22"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <circle cx="200" cy="96" r="30" fill="none" stroke="var(--gold)" strokeWidth="4" />
          <path
            d="M158 196 C158 148 176 128 200 128 C224 128 242 148 242 196 Z"
            fill="var(--primary)"
          />
          <path
            d="M200 144 V178 M185 155 H215"
            stroke="var(--gold)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      );

    case "saint-therese":
      return (
        <g>
          <circle
            cx="200"
            cy="126"
            r="74"
            fill="var(--accent)"
            stroke="var(--gold-deep)"
            strokeWidth="3.5"
          />
          {/* Roses */}
          {[
            [154, 152],
            [200, 114],
            [246, 152],
            [178, 180],
            [222, 180],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="16" fill="var(--primary)" />
              <circle cx={cx} cy={cy} r="8" fill="var(--gold)" />
            </g>
          ))}
          <path
            d="M200 62 V96 M186 76 H214"
            stroke="var(--primary)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      );

    case "saint-aquinas":
      return (
        <g>
          <circle
            cx="200"
            cy="126"
            r="76"
            fill="var(--accent)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          {/* Open book */}
          <path
            d="M118 96 Q159 84 200 100 Q241 84 282 96 V188 Q241 174 200 190 Q159 174 118 188 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          <line x1="200" y1="100" x2="200" y2="190" stroke="var(--primary)" strokeWidth="3.5" />
          {/* Radiant sun on chest/book */}
          <circle
            cx="200"
            cy="68"
            r="14"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          <path
            d="M138 124 H180 M138 142 H178 M220 124 H262 M220 142 H260"
            stroke="var(--gold-deep)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      );

    case "pope-keys":
    case "pope-gregory":
    case "pope-jp2":
    case "cathedra-peter":
      return (
        <g>
          <circle
            cx="200"
            cy="134"
            r="76"
            fill="var(--accent)"
            stroke="var(--gold-deep)"
            strokeWidth="3.5"
          />
          {/* Crossed keys */}
          <g transform="rotate(-32 200 142)">
            <circle
              cx="200"
              cy="194"
              r="16"
              fill="none"
              stroke="var(--gold-deep)"
              strokeWidth="6"
            />
            <line
              x1="200"
              y1="178"
              x2="200"
              y2="86"
              stroke="var(--gold-deep)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M200 94 H216 M200 108 H212"
              stroke="var(--gold-deep)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
          <g transform="rotate(32 200 142)">
            <circle cx="200" cy="194" r="16" fill="none" stroke="var(--primary)" strokeWidth="6" />
            <line
              x1="200"
              y1="178"
              x2="200"
              y2="86"
              stroke="var(--primary)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M200 94 H184 M200 108 H188"
              stroke="var(--primary)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
          {/* Papal cross */}
          <path
            d="M200 44 V82 M186 56 H214 M190 68 H210"
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      );

    case "council-nicea":
    case "council-trent":
    case "council-vatican2":
      return (
        <g>
          <circle cx="200" cy="132" r="76" fill="var(--accent)" />
          {/* Scroll & Gospel */}
          <rect
            x="128"
            y="76"
            width="144"
            height="114"
            rx="14"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          <path d="M128 96 H272" stroke="var(--gold)" strokeWidth="6" />
          <path
            d="M200 112 V164 M178 134 H222"
            stroke="var(--primary)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle
            cx="152"
            cy="166"
            r="12"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="2.5"
          />
          <circle
            cx="248"
            cy="166"
            r="12"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="2.5"
          />
        </g>
      );

    case "chalice-paten":
      return (
        <g>
          <circle cx="200" cy="132" r="76" fill="var(--accent)" />
          {/* Host */}
          <circle
            cx="200"
            cy="72"
            r="24"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <path
            d="M200 60 V84 M190 70 H210"
            stroke="var(--gold-deep)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Chalice */}
          <path
            d="M158 104 H242 C240 144 218 162 200 162 C182 162 160 144 158 104 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          <rect
            x="193"
            y="162"
            width="14"
            height="44"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <ellipse
            cx="200"
            cy="212"
            rx="44"
            ry="12"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
        </g>
      );

    case "thurible":
      return (
        <g>
          <circle cx="200" cy="134" r="76" fill="var(--accent)" />
          <line x1="200" y1="42" x2="174" y2="122" stroke="var(--primary)" strokeWidth="3" />
          <line x1="200" y1="42" x2="226" y2="122" stroke="var(--primary)" strokeWidth="3" />
          <line x1="200" y1="42" x2="200" y2="112" stroke="var(--primary)" strokeWidth="3" />
          <path
            d="M166 128 Q200 84 234 128 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <path
            d="M166 132 Q200 178 234 132 Z"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <path d="M186 184 L178 214 H222 L214 184 Z" fill="var(--primary)" />
          <path
            d="M174 84 Q162 66 178 52 M226 84 Q238 66 222 52"
            stroke="var(--gold-deep)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );

    case "chasuble-stole":
      return (
        <g>
          <circle cx="200" cy="134" r="76" fill="var(--accent)" />
          <path
            d="M142 66 Q200 44 258 66 L278 166 Q200 226 122 166 Z"
            fill="var(--primary)"
            stroke="var(--gold)"
            strokeWidth="4"
          />
          <path
            d="M200 66 V202 M176 112 H224"
            stroke="var(--gold)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="200" cy="70" r="14" fill="var(--card)" />
        </g>
      );

    case "mitre-crosier":
      return (
        <g>
          <circle cx="200" cy="134" r="76" fill="var(--accent)" />
          {/* Mitre */}
          <path
            d="M146 168 L150 96 L186 52 L222 96 L226 168 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M186 78 V158 M164 114 H208"
            stroke="var(--gold-deep)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Crosier */}
          <path
            d="M254 218 V92 A22 22 0 1 1 232 70"
            fill="none"
            stroke="var(--gold-deep)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
      );

    case "alb-cincture":
      return (
        <g>
          <circle cx="200" cy="134" r="76" fill="var(--accent)" />
          <path
            d="M158 58 H242 L262 214 H138 Z"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M152 138 H248" stroke="var(--gold-deep)" strokeWidth="8" strokeLinecap="round" />
          <path
            d="M214 138 L224 190 M228 138 L242 186"
            stroke="var(--gold-deep)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      );

    case "chi-rho":
      return (
        <g>
          <circle
            cx="200"
            cy="132"
            r="78"
            fill="var(--card)"
            stroke="var(--gold-deep)"
            strokeWidth="5"
          />
          <circle cx="200" cy="132" r="64" fill="var(--accent)" />
          {/* Rho (P) */}
          <line
            x1="200"
            y1="68"
            x2="200"
            y2="196"
            stroke="var(--primary)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M200 72 H224 A22 22 0 0 1 224 116 H200"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Chi (X) */}
          <line
            x1="148"
            y1="98"
            x2="252"
            y2="178"
            stroke="var(--primary)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <line
            x1="252"
            y1="98"
            x2="148"
            y2="178"
            stroke="var(--primary)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
      );

    case "ichthys":
      return (
        <g>
          <circle
            cx="200"
            cy="132"
            r="78"
            fill="var(--accent)"
            stroke="var(--primary)"
            strokeWidth="3.5"
          />
          <path
            d="M108 132 Q188 64 282 158 M108 132 Q188 200 282 106"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <text
            x="188"
            y="140"
            textAnchor="middle"
            fill="var(--gold-deep)"
            fontSize="24"
            fontWeight="700"
          >
            ΙΧΘΥΣ
          </text>
        </g>
      );

    case "alpha-omega":
      return (
        <g>
          <circle
            cx="200"
            cy="132"
            r="78"
            fill="var(--card)"
            stroke="var(--gold-deep)"
            strokeWidth="5"
          />
          <path
            d="M200 76 V188 M158 118 H242"
            stroke="var(--primary)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <text
            x="148"
            y="162"
            textAnchor="middle"
            fill="var(--gold-deep)"
            fontSize="42"
            fontWeight="700"
          >
            Α
          </text>
          <text
            x="252"
            y="162"
            textAnchor="middle"
            fill="var(--gold-deep)"
            fontSize="42"
            fontWeight="700"
          >
            Ω
          </text>
        </g>
      );

    case "shroud-turin":
    case "true-cross":
      return (
        <g>
          <rect
            x="116"
            y="52"
            width="168"
            height="162"
            rx="14"
            fill="var(--card)"
            stroke="var(--gold-deep)"
            strokeWidth="4"
          />
          {id === "true-cross" ? (
            <>
              <path
                d="M200 72 V194 M154 114 H246"
                stroke="var(--primary)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M200 78 V188 M160 114 H240"
                stroke="var(--gold)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <circle
                cx="200"
                cy="108"
                r="24"
                fill="var(--accent)"
                stroke="var(--primary)"
                strokeWidth="3"
              />
              <path
                d="M168 188 C168 152 182 140 200 140 C218 140 232 152 232 188"
                fill="var(--accent)"
                stroke="var(--primary)"
                strokeWidth="3"
              />
              <path d="M200 60 V206" stroke="var(--gold)" strokeWidth="2" strokeDasharray="4 4" />
            </>
          )}
        </g>
      );

    case "order-benedictine":
      return (
        <g>
          <circle
            cx="200"
            cy="132"
            r="76"
            fill="var(--gold)"
            stroke="var(--primary)"
            strokeWidth="5"
          />
          <circle
            cx="200"
            cy="132"
            r="60"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="3"
          />
          <path
            d="M200 84 V180 M156 122 H244"
            stroke="var(--primary)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <text
            x="200"
            y="198"
            textAnchor="middle"
            fill="var(--primary)"
            fontSize="14"
            fontWeight="700"
          >
            PAX
          </text>
        </g>
      );

    case "order-franciscan":
      return (
        <g>
          <circle
            cx="200"
            cy="132"
            r="76"
            fill="var(--accent)"
            stroke="var(--primary)"
            strokeWidth="4"
          />
          {/* Tau cross */}
          <path
            d="M148 88 H252 M200 88 V188"
            stroke="var(--primary)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="200" cy="120" r="9" fill="var(--gold)" />
        </g>
      );

    case "order-jesuit":
      return (
        <g>
          <circle
            cx="200"
            cy="132"
            r="76"
            fill="var(--primary)"
            stroke="var(--gold)"
            strokeWidth="5"
          />
          <text
            x="200"
            y="150"
            textAnchor="middle"
            fill="var(--gold)"
            fontSize="42"
            fontWeight="700"
          >
            IHS
          </text>
          <path
            d="M200 78 V106 M188 90 H212"
            stroke="var(--gold)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      );

    case "pieta":
    case "sistine-ceiling":
    case "pantocrator":
    case "last-supper":
      return (
        <g>
          <rect
            x="86"
            y="48"
            width="228"
            height="168"
            rx="18"
            fill="var(--card)"
            stroke="var(--gold-deep)"
            strokeWidth="5"
          />
          <rect x="98" y="60" width="204" height="144" rx="10" fill="var(--accent)" />
          {id === "pantocrator" && (
            <>
              <circle
                cx="200"
                cy="120"
                r="44"
                fill="var(--gold)"
                stroke="var(--primary)"
                strokeWidth="4"
              />
              <path d="M200 76 V164 M156 120 H244" stroke="var(--primary)" strokeWidth="3.5" />
              <circle
                cx="200"
                cy="120"
                r="24"
                fill="var(--card)"
                stroke="var(--primary)"
                strokeWidth="3.5"
              />
            </>
          )}
          {id === "pieta" && (
            <>
              <path
                d="M150 186 Q172 104 200 98 Q228 104 250 186 Z"
                fill="var(--card)"
                stroke="var(--primary)"
                strokeWidth="4"
              />
              <path
                d="M142 162 Q200 144 258 162"
                stroke="var(--primary)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </>
          )}
          {id === "sistine-ceiling" && (
            <>
              <path
                d="M122 146 Q160 116 188 132"
                stroke="var(--primary)"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M278 118 Q240 148 212 132"
                stroke="var(--gold-deep)"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="200" cy="132" r="8" fill="var(--gold)" />
            </>
          )}
          {id === "last-supper" && (
            <>
              <rect
                x="116"
                y="138"
                width="168"
                height="22"
                rx="4"
                fill="var(--card)"
                stroke="var(--primary)"
                strokeWidth="3.5"
              />
              <circle
                cx="200"
                cy="108"
                r="18"
                fill="var(--gold)"
                stroke="var(--primary)"
                strokeWidth="3.5"
              />
              <circle cx="152" cy="116" r="10" fill="var(--primary)" opacity="0.65" />
              <circle cx="176" cy="116" r="10" fill="var(--primary)" opacity="0.65" />
              <circle cx="224" cy="116" r="10" fill="var(--primary)" opacity="0.65" />
              <circle cx="248" cy="116" r="10" fill="var(--primary)" opacity="0.65" />
            </>
          )}
        </g>
      );
  }
}

export function MuseumIllustration({ exhibit }: { exhibit: MuseumExhibit }) {
  const id: MuseumIllustrationId = exhibit.illustration ?? "basilica-dome";
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-accent/60 p-4">
      <svg
        viewBox="0 0 400 264"
        className="h-full w-full"
        role="img"
        aria-label={exhibit.image.alt}
      >
        <rect
          x="10"
          y="10"
          width="380"
          height="244"
          rx="18"
          fill="var(--card)"
          stroke="var(--border)"
          strokeWidth="3"
        />
        <rect
          x="20"
          y="20"
          width="360"
          height="224"
          rx="12"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
          opacity="0.7"
        />
        <Artwork id={id} />
      </svg>
    </div>
  );
}
