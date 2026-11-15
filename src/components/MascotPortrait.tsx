import { AgnusPortrait } from "@/components/AgnusPortrait";
import type { MascotOutfit } from "@/lib/mascot";

export function MascotPortrait({
  outfit,
  className,
}: {
  outfit: MascotOutfit;
  className?: string;
}) {
  return <AgnusPortrait outfitId={outfit} className={className} />;
}
