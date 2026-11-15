import { useId } from "react";
import { AgnusAccessoryOverlay } from "@/components/AgnusVisualOverlays";
import type { AgnusAnimation } from "@/lib/agnus-habitat";
import { getAgnusOutfit } from "@/lib/mascot";
import { cn } from "@/lib/utils";

type AgnusPortraitProps = {
  outfitId?: string | null | undefined;
  accessoryId?: string | null | undefined;
  mascotName?: string | undefined;
  animation?: AgnusAnimation | undefined;
  animNonce?: number | undefined;
  asleep?: boolean | undefined;
  framed?: boolean | undefined;
  onClick?: (() => void) | undefined;
  className?: string | undefined;
  alt?: string | undefined;
  locked?: boolean | undefined;
  priority?: boolean | undefined;
};

type OutfitRig = {
  skin: string;
  hemY: number;
  legBotY: number;
  armTopY: number;
  armBotY: number;
  leftArmX: number;
  rightArmX: number;
  rightStaff?: boolean;
  leftArmOnly?: boolean;
  wings?: boolean;
};

const DEFAULT_RIG: OutfitRig = {
  skin: "#EEDDC0",
  hemY: 616,
  legBotY: 720,
  armTopY: 458,
  armBotY: 575,
  leftArmX: 214,
  rightArmX: 554,
};

const OUTFIT_RIGS: Record<string, OutfitRig> = {
  original: DEFAULT_RIG,
  coroinha: {
    skin: "#EAD5B4",
    hemY: 678,
    legBotY: 720,
    armTopY: 465,
    armBotY: 575,
    leftArmX: 210,
    rightArmX: 558,
  },
  "frade-franciscano": {
    skin: "#EAD5B4",
    hemY: 678,
    legBotY: 720,
    armTopY: 458,
    armBotY: 575,
    leftArmX: 214,
    rightArmX: 554,
  },
  "monge-beneditino": {
    skin: "#EAD5B4",
    hemY: 678,
    legBotY: 720,
    armTopY: 458,
    armBotY: 575,
    leftArmX: 214,
    rightArmX: 554,
  },
  padre: {
    skin: "#EAD5B4",
    hemY: 678,
    legBotY: 720,
    armTopY: 465,
    armBotY: 575,
    leftArmX: 208,
    rightArmX: 560,
  },
  bispo: {
    skin: "#EAD5B4",
    hemY: 678,
    legBotY: 720,
    armTopY: 468,
    armBotY: 575,
    leftArmX: 208,
    rightArmX: 560,
  },
  papa: {
    skin: "#E7D2B0",
    hemY: 682,
    legBotY: 720,
    armTopY: 482,
    armBotY: 575,
    leftArmX: 204,
    rightArmX: 564,
    leftArmOnly: true,
  },
  anjinho: {
    skin: "#EEDDC0",
    hemY: 642,
    legBotY: 688,
    armTopY: 452,
    armBotY: 575,
    leftArmX: 212,
    rightArmX: 556,
    wings: true,
  },
  "pastor-belem": {
    skin: "#ECD8B9",
    hemY: 636,
    legBotY: 720,
    armTopY: 456,
    armBotY: 575,
    leftArmX: 212,
    rightArmX: 568,
    rightStaff: true,
  },
  "sueter-natalino": {
    skin: "#ECD8B9",
    hemY: 634,
    legBotY: 720,
    armTopY: 492,
    armBotY: 575,
    leftArmX: 208,
    rightArmX: 560,
  },
  "papai-noel": {
    skin: "#ECD8B9",
    hemY: 624,
    legBotY: 720,
    armTopY: 468,
    armBotY: 575,
    leftArmX: 212,
    rightArmX: 556,
  },
};

type EyeMood = "open" | "closed" | "happy-arc" | "excited" | "reading" | "observing";
type MouthMood = "smile" | "cheer" | "chew" | "o" | "calm";

function resolveExpression(
  animation: AgnusAnimation | undefined,
  asleep: boolean,
): { eyeMood: EyeMood; mouthMood: MouthMood; rosy: boolean } {
  if (asleep || animation === "sleeping") {
    return { eyeMood: "closed", mouthMood: "calm", rosy: false };
  }
  switch (animation) {
    case "praying":
    case "contemplative":
      return { eyeMood: "closed", mouthMood: "smile", rosy: false };
    case "reading":
      return { eyeMood: "reading", mouthMood: "smile", rosy: false };
    case "observing":
      return { eyeMood: "observing", mouthMood: "smile", rosy: false };
    case "eating":
      return { eyeMood: "happy-arc", mouthMood: "chew", rosy: true };
    case "bathing":
      return { eyeMood: "happy-arc", mouthMood: "cheer", rosy: true };
    case "surprise":
      return { eyeMood: "excited", mouthMood: "o", rosy: true };
    case "waving":
    case "welcoming":
    case "happy-dance":
    case "celebrating":
    case "playing":
    case "hop":
    case "twirl":
      return { eyeMood: "excited", mouthMood: "cheer", rosy: true };
    case "blink-ears":
      return { eyeMood: "open", mouthMood: "cheer", rosy: true };
    case "sit":
    case "resting":
    default:
      return { eyeMood: "open", mouthMood: "smile", rosy: false };
  }
}

/**
 * Displays the transparent PNG cutout of the official Agnus illustration with
 * seamless SVG limb articulation (arms, legs, wings) and animated facial expressions
 * (moving eyes, natural blinks, expressive mouth) strictly in Agnus's original style.
 */
export function AgnusPortrait({
  outfitId,
  accessoryId,
  mascotName = "Agnus",
  animation,
  animNonce,
  asleep = false,
  framed = false,
  onClick,
  className,
  alt,
  locked = false,
  priority = false,
}: AgnusPortraitProps) {
  const uid = useId().replace(/:/g, "");
  const outfit = getAgnusOutfit(outfitId);
  const rig = OUTFIT_RIGS[outfit.id] ?? DEFAULT_RIG;
  const effectiveAnim = animation ?? (asleep ? "sleeping" : "resting");
  const animClass = !locked ? `agnus-anim-${effectiveAnim}` : undefined;
  const { eyeMood, mouthMood, rosy } = resolveExpression(animation, asleep);
  const label = alt ?? `${mascotName} — ${outfit.name}`;

  // Static lightweight image for locked silhouettes in wardrobe
  if (locked) {
    return (
      <span
        className={cn(
          "relative inline-flex aspect-square shrink-0 items-center justify-center overflow-visible",
          framed && "overflow-hidden rounded-2xl border-2 border-border bg-card/70 p-1",
          className,
        )}
      >
        <img
          src={outfit.imageSrc}
          alt={label}
          draggable={false}
          loading={priority ? "eager" : "lazy"}
          className="block h-full w-full select-none object-contain object-center opacity-45 grayscale-[70%]"
        />
      </span>
    );
  }

  const maskTorsoId = `agnus-torso-${uid}`;
  const maskLegLId = `agnus-leg-l-${uid}`;
  const maskLegRId = `agnus-leg-r-${uid}`;
  const maskArmLId = `agnus-arm-l-${uid}`;
  const maskArmRId = `agnus-arm-r-${uid}`;
  const maskWingLId = `agnus-wing-l-${uid}`;
  const maskWingRId = `agnus-wing-r-${uid}`;
  const eyeClipLId = `agnus-eye-l-${uid}`;
  const eyeClipRId = `agnus-eye-r-${uid}`;
  const skinGradId = `agnus-skin-${uid}`;

  const overlap = 16;

  const content = (
    <span
      key={animNonce ?? 0}
      data-agnus-anim={effectiveAnim}
      className={cn("relative flex h-full w-full items-center justify-center", animClass)}
    >
      <svg
        viewBox="0 0 768 768"
        role="img"
        aria-label={label}
        className="block h-full w-full select-none overflow-visible drop-shadow-[0_6px_14px_rgba(32,18,12,0.22)]"
      >
        <defs>
          <radialGradient id={skinGradId} cx="50%" cy="50%" r="50%">
            <stop offset="62%" stopColor={rig.skin} stopOpacity="1" />
            <stop offset="100%" stopColor={rig.skin} stopOpacity="0" />
          </radialGradient>

          <clipPath id={eyeClipLId}>
            <rect x="263" y="229" width="88" height="118" rx="44" />
          </clipPath>
          <clipPath id={eyeClipRId}>
            <rect x="425" y="229" width="89" height="118" rx="44" />
          </clipPath>

          {/* Left & Right Legs tucked behind hem */}
          <mask id={maskLegLId}>
            <rect
              x="278"
              y={rig.hemY - overlap}
              width="102"
              height={rig.legBotY - rig.hemY + overlap + 4}
              rx="10"
              fill="#FFFFFF"
            />
          </mask>
          <mask id={maskLegRId}>
            <rect
              x="388"
              y={rig.hemY - overlap}
              width="108"
              height={rig.legBotY - rig.hemY + overlap + 4}
              rx="10"
              fill="#FFFFFF"
            />
          </mask>

          {/* Left Arm tucked behind torso edge */}
          <mask id={maskArmLId}>
            <rect
              x="100"
              y={rig.armTopY}
              width={rig.leftArmX - 100 + overlap}
              height={rig.armBotY - rig.armTopY}
              rx="16"
              fill="#FFFFFF"
            />
          </mask>

          {/* Right Arm (or Shepherd Arm + Staff) tucked behind torso edge */}
          <mask id={maskArmRId}>
            {rig.rightStaff ? (
              <>
                <rect
                  x={rig.rightArmX - overlap}
                  y={rig.armTopY}
                  width={720 - (rig.rightArmX - overlap)}
                  height={140}
                  rx="16"
                  fill="#FFFFFF"
                />
                <rect x="574" y="338" width="150" height="390" rx="16" fill="#FFFFFF" />
              </>
            ) : (
              <rect
                x={rig.rightArmX - overlap}
                y={rig.armTopY}
                width={668 - (rig.rightArmX - overlap)}
                height={rig.armBotY - rig.armTopY}
                rx="16"
                fill="#FFFFFF"
              />
            )}
          </mask>

          {/* Optional Angel Wings */}
          {rig.wings && (
            <>
              <mask id={maskWingLId}>
                <rect x="50" y="325" width="180" height="130" rx="16" fill="#FFFFFF" />
              </mask>
              <mask id={maskWingRId}>
                <rect x="538" y="325" width="180" height="130" rx="16" fill="#FFFFFF" />
              </mask>
            </>
          )}

          {/* Core Body + Head Mask (hides articulated outer limb regions so zero double-limbs show) */}
          <mask id={maskTorsoId}>
            <rect width="768" height="768" fill="#FFFFFF" />
            <rect
              x="278"
              y={rig.hemY}
              width="218"
              height={rig.legBotY - rig.hemY + 4}
              fill="#000000"
            />
            <rect
              x="0"
              y={rig.armTopY}
              width={rig.leftArmX}
              height={rig.armBotY - rig.armTopY}
              fill="#000000"
            />
            {!rig.leftArmOnly &&
              (rig.rightStaff ? (
                <>
                  <rect
                    x={rig.rightArmX}
                    y={rig.armTopY}
                    width={768 - rig.rightArmX}
                    height={140}
                    fill="#000000"
                  />
                  <rect x="576" y="338" width="192" height="390" fill="#000000" />
                </>
              ) : (
                <rect
                  x={rig.rightArmX}
                  y={rig.armTopY}
                  width={768 - rig.rightArmX}
                  height={rig.armBotY - rig.armTopY}
                  fill="#000000"
                />
              ))}
            {rig.wings && (
              <>
                <rect x="0" y="325" width="218" height="127" fill="#000000" />
                <rect x="550" y="325" width="218" height="127" fill="#000000" />
              </>
            )}
          </mask>
        </defs>

        {/* LAYER 1: ARTICULATED LEGS (perninhas) */}
        <g
          className="agnus-part-leg-l"
          style={{ transformOrigin: `332px ${rig.hemY}px` }}
          mask={`url(#${maskLegLId})`}
        >
          <image href={outfit.imageSrc} width="768" height="768" />
        </g>
        <g
          className="agnus-part-leg-r"
          style={{ transformOrigin: `444px ${rig.hemY}px` }}
          mask={`url(#${maskLegRId})`}
        >
          <image href={outfit.imageSrc} width="768" height="768" />
        </g>

        {/* LAYER 2: OPTIONAL ANGEL WINGS */}
        {rig.wings && (
          <>
            <g
              className="agnus-part-wing-l"
              style={{ transformOrigin: "218px 405px" }}
              mask={`url(#${maskWingLId})`}
            >
              <image href={outfit.imageSrc} width="768" height="768" />
            </g>
            <g
              className="agnus-part-wing-r"
              style={{ transformOrigin: "550px 405px" }}
              mask={`url(#${maskWingRId})`}
            >
              <image href={outfit.imageSrc} width="768" height="768" />
            </g>
          </>
        )}

        {/* LAYER 3: ARTICULATED ARMS (bracinhos) */}
        <g
          className="agnus-part-arm-l"
          style={{ transformOrigin: `${rig.leftArmX}px ${rig.armTopY + 14}px` }}
          mask={`url(#${maskArmLId})`}
        >
          <image href={outfit.imageSrc} width="768" height="768" />
        </g>
        {!rig.leftArmOnly && (
          <g
            className="agnus-part-arm-r"
            style={{ transformOrigin: `${rig.rightArmX}px ${rig.armTopY + 14}px` }}
            mask={`url(#${maskArmRId})`}
          >
            <image href={outfit.imageSrc} width="768" height="768" />
          </g>
        )}

        {/* LAYER 4: CORE BODY, HEAD & ANIMATED FACIAL FEATURES */}
        <g className="agnus-part-torso">
          <g mask={`url(#${maskTorsoId})`}>
            <image href={outfit.imageSrc} width="768" height="768" />
          </g>

          {/* Soft animated blush cheeks */}
          <g className={cn("transition-opacity duration-300", rosy ? "opacity-80" : "opacity-0")}>
            <ellipse cx="290" cy="355" rx="22" ry="12" fill="#F39EB4" />
            <ellipse cx="478" cy="355" rx="22" ry="12" fill="#F39EB4" />
          </g>

          {/* ANIMATED EYES (olhinho) matching Agnus's exact illustration geometry */}
          {eyeMood === "closed" ? (
            <g>
              <rect x="263" y="229" width="88" height="118" rx="44" fill={rig.skin} />
              <rect x="425" y="229" width="89" height="118" rx="44" fill={rig.skin} />
              <path
                d="M 278 294 Q 307 318 336 294"
                fill="none"
                stroke="#9C7A5D"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M 440 294 Q 469 318 498 294"
                fill="none"
                stroke="#9C7A5D"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>
          ) : eyeMood === "happy-arc" ? (
            <g>
              <rect x="263" y="229" width="88" height="118" rx="44" fill={rig.skin} />
              <rect x="425" y="229" width="89" height="118" rx="44" fill={rig.skin} />
              <path
                d="M 276 300 Q 307 262 338 300"
                fill="none"
                stroke="#4A4A48"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 438 300 Q 469 262 500 300"
                fill="none"
                stroke="#4A4A48"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </g>
          ) : (
            <g className="agnus-eye-blink-group">
              {/* Crisp white sclera capsules */}
              <rect x="263" y="229" width="88" height="118" rx="44" fill="#FFFFFF" />
              <rect x="425" y="229" width="89" height="118" rx="44" fill="#FFFFFF" />

              {/* Left Pupil */}
              <g clipPath={`url(#${eyeClipLId})`}>
                <g className={cn("agnus-pupils", `agnus-pupils-${eyeMood}`)}>
                  <rect x="293" y="253" width="44" height="70" rx="22" fill="#4A4A48" />
                  <circle cx="332" cy="264" r="13" fill="#FFFFFF" />
                  {eyeMood === "excited" && (
                    <circle cx="306" cy="306" r="5" fill="#FFFFFF" opacity="0.85" />
                  )}
                </g>
              </g>

              {/* Right Pupil */}
              <g clipPath={`url(#${eyeClipRId})`}>
                <g className={cn("agnus-pupils", `agnus-pupils-${eyeMood}`)}>
                  <rect x="439" y="253" width="44" height="70" rx="22" fill="#4A4A48" />
                  <circle cx="478" cy="264" r="13" fill="#FFFFFF" />
                  {eyeMood === "excited" && (
                    <circle cx="452" cy="306" r="5" fill="#FFFFFF" opacity="0.85" />
                  )}
                </g>
              </g>

              {/* Automatic periodic eyelid blink overlay */}
              <g className="agnus-eyelid-cover">
                <rect x="263" y="229" width="88" height="118" rx="44" fill={rig.skin} />
                <rect x="425" y="229" width="89" height="118" rx="44" fill={rig.skin} />
                <path
                  d="M 278 294 Q 307 316 336 294"
                  fill="none"
                  stroke="#9C7A5D"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 440 294 Q 469 316 498 294"
                  fill="none"
                  stroke="#9C7A5D"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </g>
            </g>
          )}

          {/* ANIMATED MOUTH (boquinha) seamlessly blended onto Agnus's muzzle */}
          <ellipse cx="384" cy="367" rx="44" ry="22" fill={`url(#${skinGradId})`} />
          <path
            d="M 384 347 V 363"
            fill="none"
            stroke="#B69373"
            strokeWidth="6.5"
            strokeLinecap="round"
          />

          {mouthMood === "cheer" ? (
            <g className="agnus-mouth-cheer">
              {/* Open cheerful mouth */}
              <path
                d="M 358 363 Q 384 366 410 363 Q 408 389 384 389 Q 360 389 358 363 Z"
                fill="#C7676E"
                stroke="#B69373"
                strokeWidth="5.5"
                strokeLinejoin="round"
              />
              <ellipse cx="384" cy="382" rx="13" ry="6" fill="#F3A6A1" />
            </g>
          ) : mouthMood === "chew" ? (
            <g className="agnus-mouth-chew">
              <ellipse
                cx="384"
                cy="373"
                rx="14"
                ry="11"
                fill="#C7676E"
                stroke="#B69373"
                strokeWidth="5.5"
              />
              <ellipse cx="384" cy="379" rx="8" ry="4" fill="#F3A6A1" />
            </g>
          ) : mouthMood === "o" ? (
            <ellipse
              cx="384"
              cy="373"
              rx="10"
              ry="12"
              fill="#C7676E"
              stroke="#B69373"
              strokeWidth="5.5"
            />
          ) : mouthMood === "calm" ? (
            <path
              d="M 372 369 Q 384 377 396 369"
              fill="none"
              stroke="#B69373"
              strokeWidth="6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M 353 363 Q 368 378 384 364 Q 399 378 415 363"
              fill="none"
              stroke="#B69373"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </g>
      </svg>

      <AgnusAccessoryOverlay accessoryId={accessoryId} />

      {asleep && (
        <span
          aria-hidden="true"
          className="agnus-zzz pointer-events-none absolute right-2 top-1 rounded-full bg-background/90 px-2 py-0.5 font-display text-xs font-bold text-primary shadow-xs"
        >
          Zzz
        </span>
      )}
    </span>
  );

  const frameClass = cn(
    "relative inline-flex aspect-square shrink-0 items-center justify-center overflow-visible",
    framed && "overflow-hidden rounded-2xl border-2 border-border bg-card/70 p-1",
    className,
  );

  if (onClick) {
    return (
      <button
        type="button"
        data-sound="select"
        onClick={onClick}
        aria-label={`Interagir com ${mascotName}`}
        className={cn(
          frameClass,
          "cursor-pointer bg-transparent p-0 transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
      >
        {content}
      </button>
    );
  }

  return <span className={frameClass}>{content}</span>;
}
