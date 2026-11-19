import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Compass,
  LocateFixed,
  MapPin,
  Maximize2,
  Minimize2,
  Move,
  RotateCcw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSettings } from "@/components/SettingsProvider";
import {
  BIBLICAL_MAPS,
  getBiblicalMap,
  type BiblicalMapId,
  type MapLandmark,
} from "@/lib/biblical-maps";
import { cn } from "@/lib/utils";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.4;
const DIRECTION_PAN_STEP = 96;

interface PanOffset {
  x: number;
  y: number;
}

interface ViewportBox {
  vw: number;
  vh: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function getFittedImageSize(box: ViewportBox, imgWidth: number, imgHeight: number) {
  const scale = Math.min(box.vw / imgWidth, box.vh / imgHeight);
  return {
    imgW: imgWidth * scale,
    imgH: imgHeight * scale,
  };
}

function clampPanForZoom(
  pan: PanOffset,
  zoom: number,
  box: ViewportBox,
  imgWidth: number,
  imgHeight: number,
): PanOffset {
  if (zoom <= MIN_ZOOM) {
    return { x: 0, y: 0 };
  }
  const { imgW, imgH } = getFittedImageSize(box, imgWidth, imgHeight);
  const maxX = Math.max(0, (imgW * zoom - box.vw) / 2);
  const maxY = Math.max(0, (imgH * zoom - box.vh) / 2);
  return {
    x: clamp(pan.x, -maxX, maxX),
    y: clamp(pan.y, -maxY, maxY),
  };
}

export function BiblicalMapsViewer() {
  const { settings } = useSettings();
  const [activeMapId, setActiveMapId] = useState<BiblicalMapId>("old");
  const [zoom, setZoom] = useState<number>(MIN_ZOOM);
  const [pan, setPan] = useState<PanOffset>({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<string | null>(null);
  const [viewportBox, setViewportBox] = useState<ViewportBox>({ vw: 640, vh: 444 });

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const dragStartRef = useRef<{
    clientX: number;
    clientY: number;
    panX: number;
    panY: number;
  } | null>(null);
  const pinchStartRef = useRef<{
    distance: number;
    zoom: number;
    panX: number;
    panY: number;
    midX: number;
    midY: number;
  } | null>(null);
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null);

  const activeMap = getBiblicalMap(activeMapId);
  const selectedLandmark =
    activeMap.landmarks.find((landmark) => landmark.id === selectedLandmarkId) ?? null;

  const measureViewport = useCallback((): ViewportBox => {
    const rect = viewportRef.current?.getBoundingClientRect();
    if (rect && rect.width > 0 && rect.height > 0) {
      return { vw: rect.width, vh: rect.height };
    }
    return {
      vw: 640,
      vh: Math.round((640 * activeMap.height) / activeMap.width),
    };
  }, [activeMap.height, activeMap.width]);

  useEffect(() => {
    const updateSize = () => {
      const box = measureViewport();
      setViewportBox(box);
      setPan((prev) => clampPanForZoom(prev, zoom, box, activeMap.width, activeMap.height));
    };
    updateSize();

    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const observer = new ResizeObserver(() => updateSize());
    observer.observe(el);
    return () => observer.disconnect();
  }, [activeMap.height, activeMap.width, fullscreen, measureViewport, zoom]);

  useEffect(() => {
    if (!fullscreen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [fullscreen]);

  const applyZoom = useCallback(
    (nextZoomRaw: number, focalClient?: { x: number; y: number }) => {
      const nextZoom = Number(clamp(nextZoomRaw, MIN_ZOOM, MAX_ZOOM).toFixed(2));
      const box = measureViewport();
      const rect = viewportRef.current?.getBoundingClientRect();

      setZoom((prevZoom) => {
        setPan((prevPan) => {
          if (nextZoom <= MIN_ZOOM) return { x: 0, y: 0 };
          let targetPan = prevPan;
          if (focalClient && rect && rect.width > 0 && rect.height > 0) {
            const offsetX = focalClient.x - (rect.left + rect.width / 2);
            const offsetY = focalClient.y - (rect.top + rect.height / 2);
            const mapCoordX = (offsetX - prevPan.x) / prevZoom;
            const mapCoordY = (offsetY - prevPan.y) / prevZoom;
            targetPan = {
              x: offsetX - mapCoordX * nextZoom,
              y: offsetY - mapCoordY * nextZoom,
            };
          } else if (prevZoom > 0) {
            const ratio = nextZoom / prevZoom;
            targetPan = { x: prevPan.x * ratio, y: prevPan.y * ratio };
          }
          return clampPanForZoom(targetPan, nextZoom, box, activeMap.width, activeMap.height);
        });
        return nextZoom;
      });
    },
    [activeMap.height, activeMap.width, measureViewport],
  );

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY < 0 ? 0.25 : -0.25;
      applyZoom(zoom + delta, { x: event.clientX, y: event.clientY });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [applyZoom, zoom]);

  const selectMap = (id: BiblicalMapId) => {
    if (id === activeMapId) return;
    setActiveMapId(id);
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
    setSelectedLandmarkId(null);
    pointersRef.current.clear();
    dragStartRef.current = null;
    pinchStartRef.current = null;
  };

  const resetView = () => {
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
    setSelectedLandmarkId(null);
  };

  const panByDirection = (dx: number, dy: number) => {
    const box = measureViewport();
    const effectiveZoom = zoom <= MIN_ZOOM ? 1.8 : zoom;
    if (zoom <= MIN_ZOOM) {
      setZoom(effectiveZoom);
    }
    setPan((prev) =>
      clampPanForZoom(
        { x: prev.x + dx, y: prev.y + dy },
        effectiveZoom,
        box,
        activeMap.width,
        activeMap.height,
      ),
    );
  };

  const focusLandmark = (landmark: MapLandmark) => {
    const box = measureViewport();
    const { imgW, imgH } = getFittedImageSize(box, activeMap.width, activeMap.height);
    const targetZoom = Math.max(zoom, 2.3);
    const dx = (landmark.xPercent / 100 - 0.5) * imgW;
    const dy = (landmark.yPercent / 100 - 0.5) * imgH;
    const targetPan = clampPanForZoom(
      { x: -dx * targetZoom, y: -dy * targetZoom },
      targetZoom,
      box,
      activeMap.width,
      activeMap.height,
    );
    setSelectedLandmarkId(landmark.id);
    setZoom(targetZoom);
    setPan(targetPan);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest("button, input, a")) return;

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Synthetic pointer events in tests may not support pointer capture
    }

    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointersRef.current.size === 1) {
      const now = Date.now();
      const last = lastTapRef.current;
      if (
        last &&
        now - last.time < 300 &&
        Math.hypot(event.clientX - last.x, event.clientY - last.y) < 28
      ) {
        lastTapRef.current = null;
        if (zoom > 1.2) {
          resetView();
        } else {
          applyZoom(2.2, { x: event.clientX, y: event.clientY });
        }
        return;
      }
      lastTapRef.current = { time: now, x: event.clientX, y: event.clientY };

      setIsDragging(true);
      dragStartRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
        panX: pan.x,
        panY: pan.y,
      };
      pinchStartRef.current = null;
    } else if (pointersRef.current.size === 2) {
      const [p0, p1] = Array.from(pointersRef.current.values());
      if (p0 && p1) {
        const distance = Math.hypot(p1.x - p0.x, p1.y - p0.y) || 1;
        pinchStartRef.current = {
          distance,
          zoom,
          panX: pan.x,
          panY: pan.y,
          midX: (p0.x + p1.x) / 2,
          midY: (p0.y + p1.y) / 2,
        };
        dragStartRef.current = null;
        setIsDragging(true);
      }
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(event.pointerId)) return;
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    const box = measureViewport();

    if (pointersRef.current.size === 2 && pinchStartRef.current) {
      const [p0, p1] = Array.from(pointersRef.current.values());
      if (!p0 || !p1) return;
      const newDist = Math.hypot(p1.x - p0.x, p1.y - p0.y) || 1;
      const newMidX = (p0.x + p1.x) / 2;
      const newMidY = (p0.y + p1.y) / 2;
      const { distance, zoom: startZoom, panX, panY, midX, midY } = pinchStartRef.current;

      const nextZoom = Number(
        clamp(startZoom * (newDist / distance), MIN_ZOOM, MAX_ZOOM).toFixed(2),
      );
      const nextPan = clampPanForZoom(
        {
          x: panX + (newMidX - midX),
          y: panY + (newMidY - midY),
        },
        nextZoom,
        box,
        activeMap.width,
        activeMap.height,
      );
      setZoom(nextZoom);
      setPan(nextPan);
      return;
    }

    if (pointersRef.current.size === 1 && dragStartRef.current && zoom > MIN_ZOOM) {
      const deltaX = event.clientX - dragStartRef.current.clientX;
      const deltaY = event.clientY - dragStartRef.current.clientY;
      setPan(
        clampPanForZoom(
          { x: dragStartRef.current.panX + deltaX, y: dragStartRef.current.panY + deltaY },
          zoom,
          box,
          activeMap.width,
          activeMap.height,
        ),
      );
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(event.pointerId);
    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      // Ignore in synthetic environments
    }

    if (pointersRef.current.size === 1) {
      const [remaining] = Array.from(pointersRef.current.values());
      if (remaining) {
        dragStartRef.current = {
          clientX: remaining.x,
          clientY: remaining.y,
          panX: pan.x,
          panY: pan.y,
        };
      }
      pinchStartRef.current = null;
    } else if (pointersRef.current.size === 0) {
      dragStartRef.current = null;
      pinchStartRef.current = null;
      setIsDragging(false);
    }
  };

  const handleViewportKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        panByDirection(0, DIRECTION_PAN_STEP);
        break;
      case "ArrowDown":
        event.preventDefault();
        panByDirection(0, -DIRECTION_PAN_STEP);
        break;
      case "ArrowLeft":
        event.preventDefault();
        panByDirection(DIRECTION_PAN_STEP, 0);
        break;
      case "ArrowRight":
        event.preventDefault();
        panByDirection(-DIRECTION_PAN_STEP, 0);
        break;
      case "+":
      case "=":
        event.preventDefault();
        applyZoom(zoom + ZOOM_STEP);
        break;
      case "-":
      case "_":
        event.preventDefault();
        applyZoom(zoom - ZOOM_STEP);
        break;
      case "0":
        event.preventDefault();
        resetView();
        break;
    }
  };

  const fitted = getFittedImageSize(viewportBox, activeMap.width, activeMap.height);
  const zoomPercent = Math.round(zoom * 100);

  const switcherButtons = (
    <div
      role="group"
      aria-label="Selecionar testamento do mapa"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {BIBLICAL_MAPS.map((entry) => {
        const isActive = entry.id === activeMapId;
        return (
          <button
            key={entry.id}
            type="button"
            data-sound="select"
            aria-pressed={isActive}
            onClick={() => selectMap(entry.id)}
            className={cn(
              "btn-3d flex min-h-14 cursor-pointer flex-col items-start justify-center rounded-2xl border-2 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                : "border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
            )}
          >
            <span className="flex w-full items-center justify-between gap-2 font-display text-base font-bold">
              <span>{entry.buttonLabel}</span>
              <Compass className="h-4 w-4 shrink-0 opacity-85" aria-hidden="true" />
            </span>
            <span
              className={cn(
                "mt-0.5 text-xs font-semibold",
                isActive ? "text-primary-foreground/85" : "text-muted-foreground",
              )}
            >
              {entry.buttonSubtitle}
            </span>
          </button>
        );
      })}
    </div>
  );

  const controlsBar = (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border-2 border-border bg-card px-3 py-2.5">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          data-sound="select"
          aria-label="Diminuir zoom"
          disabled={zoom <= MIN_ZOOM}
          onClick={() => applyZoom(zoom - ZOOM_STEP)}
          className="btn-3d-sm inline-flex h-10 w-10 items-center justify-center border-2 border-border bg-background text-primary [--btn-depth:var(--border)] hover:border-gold/80 disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ZoomOut className="h-4 w-4" aria-hidden="true" />
        </button>

        <output
          aria-label="Nível de zoom atual"
          className="min-w-14 rounded-xl bg-accent px-2.5 py-1.5 text-center font-display text-sm font-bold text-primary"
        >
          {zoomPercent}%
        </output>

        <button
          type="button"
          data-sound="select"
          aria-label="Aumentar zoom"
          disabled={zoom >= MAX_ZOOM}
          onClick={() => applyZoom(zoom + ZOOM_STEP)}
          className="btn-3d-sm inline-flex h-10 w-10 items-center justify-center border-2 border-border bg-background text-primary [--btn-depth:var(--border)] hover:border-gold/80 disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ZoomIn className="h-4 w-4" aria-hidden="true" />
        </button>

        <label className="hidden items-center gap-2 pl-1 sm:inline-flex">
          <span className="sr-only">Controle deslizante de zoom</span>
          <input
            type="range"
            aria-label="Ajustar zoom do mapa"
            min={100}
            max={400}
            step={10}
            value={zoomPercent}
            onChange={(event) => applyZoom(Number(event.target.value) / 100)}
            className="w-28 cursor-pointer accent-primary"
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          data-sound="select"
          aria-label="Redefinir zoom e posição"
          onClick={resetView}
          className="btn-3d-sm inline-flex min-h-10 items-center gap-1.5 border-2 border-border bg-background px-3 py-1.5 text-xs font-bold text-primary [--btn-depth:var(--border)] hover:border-gold/80"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Centralizar
        </button>

        <button
          type="button"
          data-sound="select"
          aria-label={fullscreen ? "Sair da tela cheia" : "Abrir mapa em tela cheia"}
          onClick={() => setFullscreen((prev) => !prev)}
          className="btn-3d-sm inline-flex min-h-10 items-center gap-1.5 border-2 border-gold bg-accent px-3 py-1.5 text-xs font-bold text-primary [--btn-depth:var(--gold-deep)] hover:brightness-105"
        >
          {fullscreen ? (
            <>
              <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
              Fechar tela cheia
            </>
          ) : (
            <>
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              Tela cheia
            </>
          )}
        </button>
      </div>
    </div>
  );

  const mapViewport = (
    <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card shadow-sm">
      <div
        ref={viewportRef}
        role="region"
        tabIndex={0}
        aria-label={`Área interativa do ${activeMap.title}. Use os botões de zoom, arraste para navegar ou use as setas do teclado.`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleViewportKeyDown}
        style={fullscreen ? undefined : { aspectRatio: `${activeMap.width} / ${activeMap.height}` }}
        className={cn(
          "relative flex w-full select-none items-center justify-center overflow-hidden bg-muted/40 outline-none focus-visible:ring-2 focus-visible:ring-ring",
          fullscreen ? "h-full min-h-0 flex-1" : "w-full",
          zoom > MIN_ZOOM
            ? "touch-none cursor-grab active:cursor-grabbing"
            : "touch-pan-y cursor-zoom-in",
        )}
      >
        <div
          data-testid="map-transform-stage"
          style={{
            width: fullscreen ? `${fitted.imgW}px` : "100%",
            height: fullscreen ? `${fitted.imgH}px` : "100%",
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            transformOrigin: "center center",
            transition:
              isDragging || settings.reduceMotion
                ? "none"
                : "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className="relative flex items-center justify-center will-change-transform"
        >
          <img
            src={activeMap.image}
            alt={activeMap.alt}
            width={activeMap.width}
            height={activeMap.height}
            draggable={false}
            className="pointer-events-none block h-full w-full select-none object-contain"
          />

          {selectedLandmark && (
            <span
              aria-hidden="true"
              style={{
                left: `${selectedLandmark.xPercent}%`,
                top: `${selectedLandmark.yPercent}%`,
              }}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-primary/85 text-primary-foreground shadow-md ring-4 ring-gold/75">
                <MapPin className="h-3.5 w-3.5" />
              </span>
            </span>
          )}
        </div>

        {/* Navigation directional pad */}
        <div
          aria-label="Controles direcionais de navegação do mapa"
          className="absolute bottom-2.5 right-2.5 z-10 grid grid-cols-3 gap-1 rounded-2xl border-2 border-border bg-background/90 p-1.5 shadow-md backdrop-blur-sm"
        >
          <span />
          <button
            type="button"
            data-sound="select"
            aria-label="Navegar mapa para o norte"
            onClick={() => panByDirection(0, DIRECTION_PAN_STEP)}
            className="btn-3d-sm grid h-8 w-8 place-items-center border border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
          <span />
          <button
            type="button"
            data-sound="select"
            aria-label="Navegar mapa para o oeste"
            onClick={() => panByDirection(DIRECTION_PAN_STEP, 0)}
            className="btn-3d-sm grid h-8 w-8 place-items-center border border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            data-sound="select"
            aria-label="Voltar ao centro do mapa"
            onClick={resetView}
            className="btn-3d-sm grid h-8 w-8 place-items-center border border-gold bg-accent text-primary [--btn-depth:var(--gold-deep)]"
          >
            <LocateFixed className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            data-sound="select"
            aria-label="Navegar mapa para o leste"
            onClick={() => panByDirection(-DIRECTION_PAN_STEP, 0)}
            className="btn-3d-sm grid h-8 w-8 place-items-center border border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <span />
          <button
            type="button"
            data-sound="select"
            aria-label="Navegar mapa para o sul"
            onClick={() => panByDirection(0, -DIRECTION_PAN_STEP)}
            className="btn-3d-sm grid h-8 w-8 place-items-center border border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold"
          >
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </button>
          <span />
        </div>

        <div className="pointer-events-none absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/88 px-2.5 py-1 text-[11px] font-bold text-primary shadow-sm backdrop-blur-sm">
          <Move className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {zoom > MIN_ZOOM
            ? "Arraste ou use as setas para explorar"
            : "Toque duas vezes ou dê zoom para navegar"}
        </div>
      </div>
    </div>
  );

  if (fullscreen) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${activeMap.title} em tela cheia`}
        className="fixed inset-0 z-50 flex flex-col gap-3 bg-background p-3 sm:p-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {activeMap.badge}
            </p>
            <h2 className="font-display text-xl font-bold text-primary">{activeMap.title}</h2>
          </div>
          {switcherButtons}
        </div>
        {controlsBar}
        <div className="flex min-h-0 flex-1 flex-col">{mapViewport}</div>
      </div>
    );
  }

  return (
    <section className="space-y-4" aria-label="Visualizador de Mapas Bíblicos">
      {switcherButtons}

      <div className="rounded-2xl border-2 border-border bg-card p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="inline-block rounded-lg bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
              {activeMap.badge}
            </span>
            <h2 className="mt-1.5 font-display text-xl font-bold text-primary">
              {activeMap.title}
            </h2>
          </div>
          <span className="text-xs font-bold text-muted-foreground">{activeMap.period}</span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground">{activeMap.summary}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{activeMap.details}</p>
      </div>

      {controlsBar}

      {mapViewport}

      <section
        aria-label="Lugares em destaque neste mapa"
        className="rounded-2xl border-2 border-border bg-card p-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-primary">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            Navegação rápida pelo mapa
          </h3>
          <span className="text-xs font-semibold text-muted-foreground">
            Toque em um lugar para aproximar
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {activeMap.landmarks.map((landmark) => {
            const active = selectedLandmarkId === landmark.id;
            return (
              <button
                key={landmark.id}
                type="button"
                data-sound="select"
                aria-pressed={active}
                onClick={() => focusLandmark(landmark)}
                className={cn(
                  "btn-3d-sm inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-xl border-2 px-3 py-1.5 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "border-gold bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)]"
                    : "border-border bg-background text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
                )}
              >
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {landmark.label}
              </button>
            );
          })}
        </div>

        {selectedLandmark && (
          <div className="mt-3 rounded-xl border border-gold/70 bg-accent/60 p-3">
            <p className="text-xs font-bold text-muted-foreground">{selectedLandmark.region}</p>
            <p className="font-display text-base font-bold text-primary">
              {selectedLandmark.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              {selectedLandmark.description}
            </p>
          </div>
        )}
      </section>
    </section>
  );
}
