import { useId } from "react";
import {
  STAGE_PROPS_BY_SCENE,
  type AgnusRoomId,
  type StagePropDef,
} from "@/lib/agnus-habitat";
import { getAgnusAccessory } from "@/lib/agnus-habitat";
import { cn } from "@/lib/utils";

/**
 * Separate SVG accessory overlay rendered beside/above the official Agnus portrait
 * without ever altering Agnus's face, colors, or proportions.
 */
export function AgnusAccessoryOverlay({
  accessoryId,
}: {
  accessoryId?: string | null | undefined;
}) {
  if (!accessoryId || accessoryId === "none") return null;

  const accessory = getAgnusAccessory(accessoryId);
  if (accessory.imageSrc) {
    return (
      <img
        src={accessory.imageSrc}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain"
      />
    );
  }

  switch (accessoryId) {
    case "terco-pequeno":
      return (
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g transform="translate(8, 66)">
            <circle cx="8" cy="4" r="2.2" fill="#8C5132" stroke="#F5EBD8" strokeWidth="0.6" />
            <circle cx="12.5" cy="9" r="2.2" fill="#8C5132" stroke="#F5EBD8" strokeWidth="0.6" />
            <circle cx="17" cy="13.5" r="2.3" fill="#D4A64A" stroke="#5D1E2E" strokeWidth="0.5" />
            <circle cx="13" cy="18" r="2.2" fill="#8C5132" stroke="#F5EBD8" strokeWidth="0.6" />
            <circle cx="9" cy="22" r="2.2" fill="#8C5132" stroke="#F5EBD8" strokeWidth="0.6" />
            <path
              d="M17 16V29M13.5 20.5H20.5"
              stroke="#D4A64A"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M17 16V29M13.5 20.5H20.5"
              stroke="#5D1E2E"
              strokeWidth="0.6"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );

    case "livrinho-fe":
      return (
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g transform="translate(68, 70) rotate(-6)">
            <rect x="0" y="3" width="24" height="17" rx="3" fill="#641C32" />
            <path d="M2 4.5C6 3.5 10.5 4.2 12 6V18.5C10 17.5 6 17.2 2 18Z" fill="#FAF6EC" />
            <path d="M22 4.5C18 3.5 13.5 4.2 12 6V18.5C14 17.5 18 17.2 22 18Z" fill="#F5EBD8" />
            <path d="M12 6V18.5" stroke="#C59B3E" strokeWidth="1.2" />
            <path d="M15.5 17.5V22.5L17 21L18.5 22.5V17.5" fill="#A83D43" />
          </g>
        </svg>
      );

    case "estrela-belem":
      return (
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g transform="translate(73, 7)">
            <circle cx="10" cy="10" r="8" fill="#F3D68A" opacity="0.28" />
            <path
              d="M10 1.5L12.1 7.4L18.5 7.7L13.5 11.4L15.2 17.6L10 14L4.8 17.6L6.5 11.4L1.5 7.7L7.9 7.4Z"
              fill="#E5B74B"
              stroke="#7A4E12"
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    case "mochila-peregrino":
      return (
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g transform="translate(5, 67)">
            <path d="M7 5C7 1.5 16 1.5 16 5" fill="none" stroke="#6E472B" strokeWidth="2.2" />
            <rect
              x="3"
              y="5"
              width="18"
              height="19"
              rx="4.5"
              fill="#8C593A"
              stroke="#52311E"
              strokeWidth="1"
            />
            <path d="M3.5 9.5C7 13 17 13 20.5 9.5" fill="#A36B46" />
            <rect x="10.2" y="10.5" width="3.6" height="4.2" rx="1" fill="#E5B74B" />
          </g>
        </svg>
      );

    case "aureola-luz":
      return (
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <ellipse
            cx="50"
            cy="9"
            rx="21"
            ry="4.5"
            fill="none"
            stroke="#F3D68A"
            strokeWidth="4.2"
            opacity="0.55"
          />
          <ellipse cx="50" cy="9" rx="21" ry="4.5" fill="none" stroke="#D99B26" strokeWidth="2.2" />
        </svg>
      );

    case "coroa-jubileu":
      return (
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g transform="translate(32, 2)">
            <path
              d="M3 14L6 5L13 10L18 2L23 10L30 5L33 14Z"
              fill="#E5B74B"
              stroke="#784C11"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="13"
              width="30"
              height="3.2"
              rx="1.2"
              fill="#D4A036"
              stroke="#784C11"
              strokeWidth="0.7"
            />
            <circle cx="18" cy="14.5" r="1.3" fill="#A83D43" />
          </g>
        </svg>
      );

    default:
      return null;
  }
}

function renderBackdrop(
  key: string,
  uid: string,
  lampOff: boolean,
  candleLit: boolean,
) {
  const gWall = `wall-${uid}`;
  const gFloor = `floor-${uid}`;
  const gGlow = `glow-${uid}`;

  switch (key) {
    /* --------------------------- 5 STYLIZED ROOMS -------------------------- */
    case "room:sala":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F9EFE0" />
              <stop offset="100%" stopColor="#EAD6B7" />
            </linearGradient>
            <linearGradient id={gFloor} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CFAF84" />
              <stop offset="100%" stopColor="#B89062" />
            </linearGradient>
          </defs>
          <rect width="400" height="176" fill={`url(#${gWall})`} />
          {/* Decorative wall paneling & trim */}
          <rect y="168" width="400" height="8" fill="#B68657" />
          <rect y="176" width="400" height="64" fill={`url(#${gFloor})`} />
          <path d="M0 198H400M0 220H400" stroke="#A47B4E" strokeWidth="1" opacity="0.45" />
          {/* Warm sunlight glow */}
          <polygon points="150,0 260,0 300,176 110,176" fill="#FFF7DE" opacity="0.32" />

          {/* Ornate Framed Cross */}
          <rect
            x="40"
            y="26"
            width="54"
            height="68"
            rx="8"
            fill="#FAF6EC"
            stroke="#7B4D31"
            strokeWidth="4.5"
          />
          <rect
            x="46"
            y="32"
            width="42"
            height="56"
            rx="4"
            fill="none"
            stroke="#D9A441"
            strokeWidth="1.5"
          />
          <path d="M67 42V78M55 54H79" stroke="#641C32" strokeWidth="4.2" strokeLinecap="round" />

          {/* Cozy Sofa on left-center */}
          <rect x="98" y="128" width="66" height="44" rx="12" fill="#7D293B" />
          <rect x="104" y="138" width="54" height="22" rx="7" fill="#9A364B" />
          <rect x="114" y="141" width="16" height="14" rx="4" fill="#F2DFC2" />
          <rect x="94" y="142" width="12" height="32" rx="6" fill="#641C32" />
          <rect x="156" y="142" width="12" height="32" rx="6" fill="#641C32" />

          {/* Patterned Burgundy & Gold Rug */}
          <ellipse cx="200" cy="210" rx="142" ry="23" fill="#782538" opacity="0.92" />
          <ellipse
            cx="200"
            cy="210"
            rx="126"
            ry="17"
            fill="none"
            stroke="#E5B74B"
            strokeWidth="2.2"
          />
          <ellipse
            cx="200"
            cy="210"
            rx="94"
            ry="11"
            fill="none"
            stroke="#FAF6EC"
            strokeWidth="1"
            opacity="0.55"
          />

          {/* Detailed Bookshelf on right */}
          <rect x="290" y="26" width="90" height="150" rx="8" fill="#6E4229" />
          <rect x="298" y="36" width="74" height="38" rx="3" fill="#4E2D1B" />
          <rect x="298" y="84" width="74" height="38" rx="3" fill="#4E2D1B" />
          <rect x="298" y="132" width="74" height="36" rx="3" fill="#4E2D1B" />
          {/* Books + golden spines */}
          <rect x="304" y="42" width="11" height="32" rx="1.5" fill="#A83D43" />
          <rect x="317" y="47" width="10" height="27" rx="1.5" fill="#315B43" />
          <rect x="329" y="40" width="12" height="34" rx="1.5" fill="#D9A441" />
          <rect x="343" y="45" width="10" height="29" rx="1.5" fill="#FAF6EC" />
          <rect x="306" y="92" width="12" height="30" rx="1.5" fill="#641C32" />
          <rect x="320" y="96" width="11" height="26" rx="1.5" fill="#315B43" />
          <rect x="333" y="90" width="11" height="32" rx="1.5" fill="#C59B3E" />
          {/* Small potted plant on middle shelf */}
          <path d="M352 110H366L363 122H355Z" fill="#C47B48" />
          <circle cx="359" cy="105" r="7" fill="#4E835C" />
          <circle cx="354" cy="108" r="5" fill="#3B6D4E" />

          {/* Rustic Snack Table with Bread & Steaming Cup */}
          <rect x="18" y="148" width="74" height="10" rx="4" fill="#8C593A" />
          <rect x="28" y="158" width="8" height="30" rx="2" fill="#6E4229" />
          <rect x="74" y="158" width="8" height="30" rx="2" fill="#6E4229" />
          {/* Warm Bread & Plate */}
          <ellipse cx="44" cy="147" rx="18" ry="4" fill="#FAF6EC" />
          <ellipse cx="44" cy="143" rx="13" ry="7" fill="#DDA055" />
          <path d="M38 140Q44 137 50 140" fill="none" stroke="#9C5F24" strokeWidth="1.5" />
          {/* Steaming Cup */}
          <rect
            x="66"
            y="136"
            width="13"
            height="12"
            rx="3"
            fill="#FAF6EC"
            stroke="#641C32"
            strokeWidth="1.6"
          />
          <path
            d="M70 132Q72 128 70 125M75 132Q77 128 75 125"
            fill="none"
            stroke="#FAF6EC"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      );

    case "room:quarto":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lampOff ? "#261F36" : "#F3E5D0"} />
              <stop offset="100%" stopColor={lampOff ? "#362B47" : "#E5CCA8"} />
            </linearGradient>
            <radialGradient id={gGlow} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FCE194" stopOpacity="0.52" />
              <stop offset="100%" stopColor="#FCE194" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="176" fill={`url(#${gWall})`} />
          <rect y="168" width="400" height="8" fill={lampOff ? "#4D3B59" : "#AE845A"} />
          <rect y="176" width="400" height="64" fill={lampOff ? "#3D2E49" : "#CAA97E"} />
          {/* Soft rug */}
          <ellipse
            cx="200"
            cy="212"
            rx="125"
            ry="20"
            fill={lampOff ? "#4E3A5E" : "#FAF6EC"}
            opacity="0.82"
          />

          {/* Arched Window + Curtains */}
          <path
            d="M42 118V54A42 42 0 0 1 126 54V118Z"
            fill={lampOff ? "#18213D" : "#92C2DF"}
            stroke="#7B4D31"
            strokeWidth="5"
          />
          <path d="M84 14V118M42 70H126" stroke="#7B4D31" strokeWidth="3.5" />
          {/* Curtains */}
          <path d="M36 28Q48 75 40 122H30V28Z" fill="#782538" />
          <path d="M132 28Q120 75 128 122H138V28Z" fill="#782538" />
          {lampOff ? (
            <g className="agnus-scene-twinkle">
              <circle cx="66" cy="48" r="2.2" fill="#F3D68A" />
              <circle cx="105" cy="58" r="1.8" fill="#F3D68A" />
              <circle cx="68" cy="92" r="1.6" fill="#FAF6EC" />
              <path d="M101 38A8 8 0 1 0 111 48A6.5 6.5 0 1 1 101 38Z" fill="#F3D68A" />
            </g>
          ) : (
            <circle cx="102" cy="46" r="10" fill="#FCE59B" opacity="0.85" />
          )}

          {/* Cozy Carved Bed on right */}
          <rect x="266" y="114" width="12" height="66" rx="4" fill="#6E4229" />
          <rect x="372" y="102" width="12" height="78" rx="4" fill="#6E4229" />
          <rect x="272" y="128" width="106" height="48" rx="8" fill="#641C32" />
          <rect x="278" y="132" width="94" height="32" rx="7" fill="#FAF6EC" />
          <rect x="278" y="144" width="66" height="22" rx="5" fill="#7D293B" opacity="0.9" />
          <rect x="336" y="122" width="34" height="20" rx="6" fill="#E5B74B" />

          {/* Nightstand + Interactive Glowing Abajur */}
          <rect x="214" y="140" width="44" height="38" rx="5" fill="#7B4D31" />
          <rect x="220" y="146" width="32" height="12" rx="2" fill="#623B24" />
          {!lampOff && <circle cx="236" cy="126" r="36" fill={`url(#${gGlow})`} />}
          <path d="M229 116H243L248 130H224Z" fill={lampOff ? "#8F8273" : "#F6DA86"} />
          <rect x="234" y="130" width="4" height="10" fill="#52311E" />
        </svg>
      );

    case "room:quintal":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#BCE1F4" />
              <stop offset="100%" stopColor="#E6F4FA" />
            </linearGradient>
            <linearGradient id={gFloor} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6EA565" />
              <stop offset="100%" stopColor="#4F874E" />
            </linearGradient>
          </defs>
          <rect width="400" height="168" fill={`url(#${gWall})`} />
          {/* Radiant Sun */}
          <circle cx="330" cy="44" r="34" fill="#FBE5A2" opacity="0.45" />
          <circle cx="330" cy="44" r="22" fill="#F3D275" />
          {/* Fluffy Drifting Clouds */}
          <g className="agnus-scene-cloud" fill="#FFFFFF" opacity="0.88">
            <ellipse cx="148" cy="42" rx="26" ry="11" />
            <circle cx="138" cy="36" r="12" />
            <circle cx="156" cy="37" r="10" />
            <ellipse cx="242" cy="60" rx="20" ry="8" />
            <circle cx="240" cy="55" r="9" />
          </g>
          {/* Hills & Stepping Stone Path */}
          <path d="M0 162Q115 124 235 154T400 144V240H0Z" fill="#7EB273" />
          <rect y="168" width="400" height="72" fill={`url(#${gFloor})`} />
          <ellipse cx="200" cy="214" rx="88" ry="16" fill="#E6D5B8" opacity="0.7" />
          <ellipse cx="132" cy="222" rx="18" ry="7" fill="#D5C2A1" />
          <ellipse cx="268" cy="222" rx="16" ry="6" fill="#D5C2A1" />

          {/* Fruit Tree on left */}
          <rect x="44" y="102" width="18" height="76" rx="5" fill="#7B4D31" />
          <circle cx="53" cy="84" r="36" fill="#3B6D4E" />
          <circle cx="76" cy="94" r="25" fill="#4C825E" />
          <circle cx="34" cy="96" r="22" fill="#467957" />
          {/* Apples */}
          <circle cx="42" cy="78" r="5" fill="#C94545" />
          <circle cx="64" cy="70" r="5" fill="#C94545" />
          <circle cx="78" cy="95" r="4.8" fill="#C94545" />
          <circle cx="38" cy="100" r="4.5" fill="#D9534F" />

          {/* Wildflowers */}
          <circle cx="98" cy="198" r="5" fill="#FAF6EC" />
          <circle cx="98" cy="198" r="2.2" fill="#E5B74B" />
          <circle cx="122" cy="206" r="4.5" fill="#F2C94C" />
          <circle cx="305" cy="196" r="5" fill="#F2C94C" />
          <circle cx="332" cy="208" r="4.5" fill="#FAF6EC" />
          <circle cx="332" cy="208" r="2" fill="#A83D43" />

          {/* Play Ball on right */}
          <ellipse cx="336" cy="190" rx="14" ry="4" fill="#3B6A3A" opacity="0.45" />
          <circle cx="336" cy="176" r="14" fill="#B53C45" stroke="#FAF6EC" strokeWidth="1.5" />
          <path d="M326 168Q336 177 346 168" fill="none" stroke="#FAF6EC" strokeWidth="2.2" />
          <path d="M328 184Q336 175 344 184" fill="none" stroke="#FAF6EC" strokeWidth="2.2" />
        </svg>
      );

    case "room:igreja":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5EAD8" />
              <stop offset="100%" stopColor="#DECBB0" />
            </linearGradient>
            <linearGradient id={gFloor} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CFAF87" />
              <stop offset="100%" stopColor="#B89368" />
            </linearGradient>
          </defs>
          <rect width="400" height="182" fill={`url(#${gWall})`} />
          <rect y="182" width="400" height="58" fill={`url(#${gFloor})`} />
          {/* Crimson runner carpet */}
          <polygon points="150,182 250,182 276,240 124,240" fill="#782538" opacity="0.9" />
          <polygon
            points="156,182 244,182 268,240 132,240"
            fill="none"
            stroke="#E5B74B"
            strokeWidth="1.5"
          />

          {/* Stained-glass Arch Window */}
          <path
            d="M162 142V62A38 38 0 0 1 238 62V142Z"
            fill="#FAF6EC"
            stroke="#7B4D31"
            strokeWidth="4.5"
          />
          <path d="M162 142V62A38 38 0 0 1 238 62V142Z" fill="#FBE5A2" opacity="0.28" />
          <circle cx="200" cy="58" r="18" fill="#E5B74B" opacity="0.5" />
          <circle cx="200" cy="58" r="10" fill="#B53C45" opacity="0.45" />
          <path d="M200 24V142M162 84H238" stroke="#7B4D31" strokeWidth="2.5" />
          {/* Soft stained-glass light beams */}
          <polygon points="164,142 236,142 260,182 140,182" fill="#FCE59B" opacity="0.22" />

          {/* Wooden Chapel Pew on left */}
          <rect x="24" y="138" width="96" height="32" rx="5" fill="#7B4D31" />
          <rect x="28" y="134" width="88" height="8" rx="3" fill="#956242" />
          <rect x="30" y="168" width="84" height="14" rx="2" fill="#5D3721" />

          {/* Marble & Wood Altar + Cross + Candles */}
          <rect
            x="284"
            y="136"
            width="92"
            height="46"
            rx="5"
            fill="#FAF6EC"
            stroke="#7B4D31"
            strokeWidth="3"
          />
          <rect x="288" y="136" width="84" height="12" fill="#641C32" />
          <path d="M326 140H334M330 137V146" stroke="#E5B74B" strokeWidth="1.8" />
          <path
            d="M330 92V128M318 104H342"
            stroke="#C59B3E"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Candlesticks */}
          <rect x="300" y="116" width="7" height="20" rx="2" fill="#FAF6EC" />
          <rect x="353" y="116" width="7" height="20" rx="2" fill="#FAF6EC" />
          {candleLit && (
            <g className="agnus-scene-candle">
              <circle cx="303.5" cy="110" r="15" fill="#FBE5A2" opacity="0.42" />
              <path
                d="M303.5 103C306.5 108 307.5 113 303.5 115C299.5 113 300.5 108 303.5 103Z"
                fill="#F2994A"
              />
              <circle cx="356.5" cy="110" r="15" fill="#FBE5A2" opacity="0.42" />
              <path
                d="M356.5 103C359.5 108 360.5 113 356.5 115C352.5 113 353.5 108 356.5 103Z"
                fill="#F2994A"
              />
            </g>
          )}
        </svg>
      );

    case "room:banheiro":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EAF4F5" />
              <stop offset="100%" stopColor="#D7E9EC" />
            </linearGradient>
          </defs>
          <rect width="400" height="176" fill={`url(#${gWall})`} />
          <rect y="176" width="400" height="64" fill="#BDD6DA" />
          {/* Decorative tile lines */}
          <path d="M0 108H400M0 142H400" stroke="#C5DDE1" strokeWidth="2" />
          <ellipse cx="200" cy="212" rx="115" ry="18" fill="#FAF6EC" opacity="0.85" />

          {/* Oval Wooden Mirror */}
          <ellipse
            cx="74"
            cy="68"
            rx="28"
            ry="38"
            fill="#FAF6EC"
            stroke="#7B4D31"
            strokeWidth="4.5"
          />
          <path d="M60 54L82 40M58 76L88 56" stroke="#CFE3E6" strokeWidth="3" strokeLinecap="round" />

          {/* Porcelain Sink & Brass Faucet */}
          <path d="M72 120V114C72 110 78 110 78 114" fill="none" stroke="#C59B3E" strokeWidth="3" />
          <rect
            x="42"
            y="126"
            width="64"
            height="14"
            rx="7"
            fill="#FAF6EC"
            stroke="#9BB6BC"
            strokeWidth="2.5"
          />
          <rect x="65" y="140" width="18" height="36" rx="3" fill="#FAF6EC" />

          {/* Cozy Clawfoot Tub with Floating Bubbles */}
          <path
            d="M270 138H376V162A24 24 0 0 1 352 186H294A24 24 0 0 1 270 162Z"
            fill="#FAF6EC"
            stroke="#94B3B9"
            strokeWidth="3"
          />
          <rect x="266" y="134" width="114" height="7" rx="3.5" fill="#FFFFFF" />
          <g className="agnus-scene-bubbles">
            <circle cx="298" cy="128" r="7" fill="#FFFFFF" opacity="0.9" />
            <circle cx="318" cy="120" r="9" fill="#FFFFFF" opacity="0.85" />
            <circle cx="342" cy="126" r="7" fill="#FFFFFF" opacity="0.9" />
            <circle cx="328" cy="105" r="5" fill="#FFFFFF" opacity="0.7" />
          </g>
          {/* Plush burgundy towel */}
          <rect x="348" y="62" width="26" height="44" rx="5" fill="#641C32" />
          <rect x="344" y="58" width="34" height="5" rx="2" fill="#C59B3E" />
        </svg>
      );

    /* ------------------------ STYLIZED UNLOCKABLE SCENARIOS --------------------------- */
    case "scenario:jardim-tranquilo":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CBE4D7" />
              <stop offset="100%" stopColor="#EBF5EE" />
            </linearGradient>
          </defs>
          <rect width="400" height="170" fill={`url(#${gWall})`} />
          <circle cx="332" cy="48" r="24" fill="#F6D986" />
          <path d="M0 156Q135 124 255 152T400 146V240H0Z" fill="#5D8768" />
          <path d="M148 240Q195 190 252 168H220Q160 190 108 240Z" fill="#E6D5B8" />
          {/* Blossom Tree & Hanging Lantern */}
          <rect x="64" y="106" width="14" height="66" rx="4" fill="#6E4A30" />
          <circle cx="71" cy="86" r="40" fill="#3B6249" />
          <circle cx="94" cy="96" r="24" fill="#4C7A5B" />
          <rect x="52" y="102" width="16" height="22" rx="4" fill="#E5B74B" />
          <circle cx="60" cy="113" r="6" fill="#FFF7DE" opacity="0.85" />
          {/* Stone Garden Fountain on right */}
          <ellipse cx="320" cy="186" rx="34" ry="11" fill="#D9CFC1" stroke="#9D9282" strokeWidth="2" />
          <ellipse cx="320" cy="184" rx="26" ry="7" fill="#8BC4D9" />
          <rect x="314" y="160" width="12" height="22" fill="#D9CFC1" />
          <path d="M320 150Q308 164 312 180M320 150Q332 164 328 180" fill="none" stroke="#B7E2F0" strokeWidth="2" />
        </svg>
      );

    case "scenario:biblioteca":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <rect width="400" height="190" fill="#543324" />
          <rect y="190" width="400" height="50" fill="#8C593A" />
          {/* Hanging Brass Chandelier */}
          <circle cx="200" cy="48" r="42" fill="#F3D68A" opacity="0.22" />
          <path d="M200 0V36M178 36H222" stroke="#C59B3E" strokeWidth="3" />
          <circle cx="182" cy="34" r="4" fill="#FBE5A2" />
          <circle cx="200" cy="30" r="5" fill="#FBE5A2" />
          <circle cx="218" cy="34" r="4" fill="#FBE5A2" />
          {/* Bookcases */}
          <rect x="20" y="22" width="110" height="164" rx="6" fill="#412418" />
          <rect x="270" y="22" width="110" height="164" rx="6" fill="#412418" />
          <rect x="32" y="42" width="13" height="34" fill="#A83D43" />
          <rect x="49" y="46" width="13" height="30" fill="#E5B74B" />
          <rect x="66" y="40" width="14" height="36" fill="#315B43" />
          <rect x="284" y="42" width="13" height="34" fill="#E5B74B" />
          <rect x="301" y="46" width="13" height="30" fill="#FAF6EC" />
          <rect x="318" y="40" width="14" height="36" fill="#641C32" />
          {/* Wooden Lectern & Manuscript on left */}
          <rect x="52" y="138" width="44" height="8" rx="3" fill="#8C593A" />
          <rect x="70" y="146" width="8" height="44" fill="#6E4229" />
          <rect x="58" y="128" width="32" height="12" rx="2" fill="#FAF6EC" stroke="#C59B3E" strokeWidth="1.5" />
        </svg>
      );

    case "scenario:campo-florido":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FCE1BC" />
              <stop offset="100%" stopColor="#FFF2DA" />
            </linearGradient>
          </defs>
          <rect width="400" height="164" fill={`url(#${gWall})`} />
          <circle cx="200" cy="118" r="50" fill="#F3D68A" opacity="0.72" />
          <path d="M0 155Q110 128 210 152T400 148V240H0Z" fill="#639660" />
          {/* Rustic wooden fence on right */}
          <path d="M292 140V182M330 138V182M368 140V182M284 150H378M284 166H378" stroke="#8C593A" strokeWidth="5" strokeLinecap="round" />
          {/* Wildflowers */}
          <circle cx="62" cy="196" r="5.5" fill="#A83D43" />
          <circle cx="88" cy="182" r="5" fill="#FAF6EC" />
          <circle cx="114" cy="204" r="5" fill="#E5B74B" />
          <circle cx="312" cy="192" r="5" fill="#E5B74B" />
          <circle cx="342" cy="204" r="5" fill="#FAF6EC" />
        </svg>
      );

    case "scenario:ambiente-estudos":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <rect width="400" height="182" fill="#EFE2CE" />
          <rect y="182" width="400" height="58" fill="#8C593A" />
          {/* Study Desk + Books + Feather Quill */}
          <rect x="34" y="136" width="102" height="14" rx="4" fill="#6E4229" />
          <rect x="44" y="150" width="10" height="36" fill="#52311E" />
          <rect x="114" y="150" width="10" height="36" fill="#52311E" />
          <rect x="48" y="118" width="44" height="18" rx="3" fill="#FAF6EC" stroke="#641C32" strokeWidth="2" />
          <path d="M106 112L114 136" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />
          {/* Glowing Study Candle on right */}
          <rect x="298" y="122" width="12" height="28" rx="2" fill="#FAF6EC" />
          <rect x="282" y="150" width="46" height="32" rx="4" fill="#7B4D31" />
          <circle cx="304" cy="112" r="18" fill="#F3D68A" opacity="0.45" />
          <path d="M304 106C307 110 308 115 304 117C300 115 301 110 304 106Z" fill="#E69138" />
        </svg>
      );

    case "scenario:noite-belem":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={gWall} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#132030" />
              <stop offset="100%" stopColor="#263B52" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill={`url(#${gWall})`} />
          <g className="agnus-scene-twinkle">
            <circle cx="72" cy="48" r="2.2" fill="#F3D68A" />
            <circle cx="132" cy="36" r="1.8" fill="#FAF6EC" />
            <circle cx="295" cy="44" r="2.2" fill="#F3D68A" />
            <circle cx="348" cy="70" r="1.8" fill="#FAF6EC" />
          </g>
          {/* Radiant Bethlehem Star */}
          <circle cx="200" cy="38" r="32" fill="#F3D68A" opacity="0.2" />
          <path d="M200 14L205 33L224 38L205 43L200 62L195 43L176 38L195 33Z" fill="#F6DA86" />
          <path d="M0 176Q110 150 220 172T400 165V240H0Z" fill="#2A4439" />
          {/* Rustic Stable & Lantern on left */}
          <rect x="34" y="138" width="52" height="38" rx="4" fill="#523C2E" />
          <circle cx="60" cy="156" r="11" fill="#FBE5A2" opacity="0.55" />
          <rect x="304" y="138" width="52" height="34" fill="#46382E" />
        </svg>
      );

    case "scenario:jardim-celestial":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <rect width="400" height="240" fill="#F7EBD3" />
          <circle cx="200" cy="108" r="92" fill="#F3D68A" opacity="0.4" />
          <circle cx="200" cy="108" r="64" fill="#FAF6EC" opacity="0.58" />
          <path d="M0 182Q140 152 240 176T400 168V240H0Z" fill="#7D4250" opacity="0.88" />
          {/* Golden Arch & Lilies */}
          <path d="M286 178V86A42 42 0 0 1 364 86" fill="none" stroke="#D4A036" strokeWidth="4" opacity="0.7" />
          <circle cx="66" cy="186" r="8" fill="#FAF6EC" />
          <circle cx="66" cy="186" r="3" fill="#E5B74B" />
          <circle cx="88" cy="196" r="7" fill="#FAF6EC" />
          <circle cx="88" cy="196" r="2.5" fill="#E5B74B" />
          <circle cx="74" cy="56" r="3.5" fill="#D4A036" />
          <circle cx="326" cy="56" r="3.5" fill="#D4A036" />
        </svg>
      );

    case "scenario:padrao":
    default:
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="h-full w-full"
        >
          <rect width="400" height="240" fill="#F3E5CE" />
          <path
            d="M124 240V92A76 76 0 0 1 276 92V240Z"
            fill="#FAF6EC"
            stroke="#E5B74B"
            strokeWidth="3.5"
          />
          <rect y="186" width="400" height="54" fill="#DFC7A7" opacity="0.7" />
          {/* Sanctuary lamp on left */}
          <path d="M68 48V82" stroke="#8C593A" strokeWidth="2" />
          <circle cx="68" cy="92" r="14" fill="#FBE5A2" opacity="0.45" />
          <rect x="61" y="84" width="14" height="16" rx="4" fill="#A83D43" stroke="#E5B74B" strokeWidth="1.5" />
          {/* Olive branch vase on right */}
          <rect x="314" y="156" width="24" height="32" rx="6" fill="#C47B48" />
          <path d="M326 156Q316 130 332 114M326 156Q338 134 344 124" fill="none" stroke="#4E835C" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
}

/**
 * Illustrated SVG stage backdrop with interactive furniture and scenic details.
 */
export function AgnusStageScene({
  mode,
  roomId,
  scenarioId,
  lampOff = false,
  candleLit = false,
  interactive = false,
  onPropSelect,
}: {
  mode: "room" | "scenario";
  roomId: AgnusRoomId;
  scenarioId: string;
  lampOff?: boolean;
  candleLit?: boolean;
  interactive?: boolean;
  onPropSelect?: (prop: StagePropDef) => void;
}) {
  const uid = useId().replace(/:/g, "");
  const key = mode === "scenario" ? `scenario:${scenarioId}` : `room:${roomId}`;
  const props = interactive ? (STAGE_PROPS_BY_SCENE[key] ?? []) : [];

  return (
    <div className="relative h-full w-full">
      {renderBackdrop(key, uid, lampOff, candleLit)}

      {interactive && onPropSelect && props.length > 0 && (
        <div className="pointer-events-none absolute inset-0 z-10">
          {props.map((prop) => (
            <button
              key={prop.id}
              type="button"
              data-sound="select"
              data-stage-prop={prop.id}
              aria-label={prop.label}
              title={prop.label}
              onClick={() => onPropSelect(prop)}
              className={cn(
                "group pointer-events-auto absolute flex items-end justify-center rounded-2xl border-2 border-transparent p-1 transition hover:border-gold/80 hover:bg-card/20 focus-visible:border-gold focus-visible:bg-card/25 focus-visible:outline-none",
                prop.posClass,
              )}
            >
              <span className="pointer-events-none rounded-full border border-border/80 bg-card/90 px-2.5 py-0.5 text-[11px] font-bold text-primary opacity-0 shadow-xs backdrop-blur-xs transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {prop.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
