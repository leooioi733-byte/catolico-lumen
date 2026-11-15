import { ImageOff } from "lucide-react";
import { useState } from "react";
import { MuseumIllustration } from "@/components/MuseumIllustration";
import type { MuseumExhibit } from "@/lib/museum-types";
import { cn } from "@/lib/utils";

export function MuseumImage({
  exhibit,
  className,
  eager = false,
}: {
  exhibit: MuseumExhibit;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showIllustration = Boolean(exhibit.illustration && (!exhibit.image.url || failed));

  return (
    <div
      className={cn(
        "flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted",
        className,
      )}
    >
      {showIllustration ? (
        <MuseumIllustration exhibit={exhibit} />
      ) : failed || !exhibit.image.url ? (
        <div
          className="flex flex-col items-center gap-2 p-4 text-center text-sm text-muted-foreground"
          role="status"
        >
          <ImageOff className="h-7 w-7" aria-hidden="true" />
          <span>Imagem indisponível no momento</span>
        </div>
      ) : (
        <img
          src={exhibit.image.url}
          alt={exhibit.image.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy="no-referrer"
          width={1000}
          height={750}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}
