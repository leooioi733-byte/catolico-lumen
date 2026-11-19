import { useRouter, useRouterState } from "@tanstack/react-router";
import { Cross, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSettings } from "@/components/SettingsProvider";
import { cn } from "@/lib/utils";

export function RouteLoadingOverlay() {
  const router = useRouter();
  const { settings } = useSettings();
  const routerStatus = useRouterState({
    select: (state) => ({
      isLoading: state.isLoading,
      status: state.status,
      pathname: state.location.pathname,
    }),
  });

  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const minHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navStartedAt = useRef<number>(0);

  const clearTimers = () => {
    if (minHideTimer.current) clearTimeout(minHideTimer.current);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    if (safetyTimer.current) clearTimeout(safetyTimer.current);
    minHideTimer.current = null;
    fadeTimer.current = null;
    safetyTimer.current = null;
  };

  useEffect(() => {
    const startTransition = () => {
      clearTimers();
      navStartedAt.current = Date.now();
      setFadingOut(false);
      setVisible(true);

      safetyTimer.current = setTimeout(() => {
        setVisible(false);
        setFadingOut(false);
      }, 3500);
    };

    const finishTransition = () => {
      const minDisplayMs = settings.reduceMotion ? 90 : 280;
      const elapsed = Date.now() - navStartedAt.current;
      const remaining = Math.max(0, minDisplayMs - elapsed);

      if (minHideTimer.current) clearTimeout(minHideTimer.current);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);

      minHideTimer.current = setTimeout(() => {
        setFadingOut(true);
        fadeTimer.current = setTimeout(
          () => {
            setVisible(false);
            setFadingOut(false);
            clearTimers();
          },
          settings.reduceMotion ? 40 : 180,
        );
      }, remaining);
    };

    const unsubBefore = router.subscribe("onBeforeNavigate", (event) => {
      const fromPath = event.fromLocation?.pathname;
      const toPath = event.toLocation?.pathname;
      if (fromPath && toPath && fromPath !== toPath) {
        startTransition();
      }
    });

    const unsubResolved = router.subscribe("onResolved", () => {
      if (navStartedAt.current > 0) {
        finishTransition();
      }
    });

    return () => {
      unsubBefore();
      unsubResolved();
      clearTimers();
    };
  }, [router, settings.reduceMotion]);

  const isPending = routerStatus.status === "pending" || routerStatus.isLoading;
  if (!visible && !isPending) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Carregando próxima tela"
      data-testid="route-loading-overlay"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/88 px-6 backdrop-blur-md transition-opacity duration-200",
        fadingOut ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="flex w-full max-w-xs flex-col items-center rounded-3xl border-2 border-border bg-card px-6 py-7 text-center shadow-xl">
        <div className="relative grid h-20 w-20 place-items-center">
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 rounded-full border-4 border-border border-t-primary border-r-gold",
              !settings.reduceMotion && "animate-spin",
            )}
          />
          <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-primary shadow-inner">
            <Cross className="h-7 w-7" aria-hidden="true" />
          </span>
          <Sparkles className="absolute -right-1 -top-1 h-5 w-5 text-gold" aria-hidden="true" />
        </div>
        <p className="mt-4 font-display text-lg font-bold text-primary">Carregando…</p>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">
          Preparando a próxima tela do Lumen
        </p>
      </div>
    </div>
  );
}
