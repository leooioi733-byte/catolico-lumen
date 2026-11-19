import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { RouteLoadingOverlay } from "@/components/RouteLoadingOverlay";
import { SettingsProvider } from "@/components/SettingsProvider";

type RouterCallbacks = {
  onBeforeNavigate: Array<
    (event: { fromLocation?: { pathname: string }; toLocation?: { pathname: string } }) => void
  >;
  onResolved: Array<() => void>;
};

const callbacks = vi.hoisted<RouterCallbacks>(() => ({
  onBeforeNavigate: [],
  onResolved: [],
}));

vi.mock("@tanstack/react-router", () => ({
  useRouter: () => ({
    subscribe: (event: keyof RouterCallbacks, cb: never) => {
      callbacks[event].push(cb);
      return () => {
        const list = callbacks[event];
        const idx = list.indexOf(cb);
        if (idx >= 0) list.splice(idx, 1);
      };
    },
  }),
  useRouterState: ({
    select,
  }: {
    select: (state: {
      isLoading: boolean;
      status: string;
      location: { pathname: string };
    }) => unknown;
  }) => select({ isLoading: false, status: "idle", location: { pathname: "/inicio" } }),
}));

describe("tela de carregamento entre transições", () => {
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    callbacks.onBeforeNavigate.length = 0;
    callbacks.onResolved.length = 0;
  });

  it("exibe a tela de carregamento ao navegar para outra rota e oculta após concluir", () => {
    vi.useFakeTimers();
    render(
      <SettingsProvider>
        <RouteLoadingOverlay />
      </SettingsProvider>,
    );

    expect(screen.queryByTestId("route-loading-overlay")).not.toBeInTheDocument();

    act(() => {
      for (const cb of callbacks.onBeforeNavigate) {
        cb({ fromLocation: { pathname: "/inicio" }, toLocation: { pathname: "/trilha" } });
      }
    });

    expect(screen.getByTestId("route-loading-overlay")).toBeInTheDocument();
    expect(screen.getByText("Carregando…")).toBeInTheDocument();

    act(() => {
      for (const cb of callbacks.onResolved) cb();
      vi.advanceTimersByTime(600);
    });

    expect(screen.queryByTestId("route-loading-overlay")).not.toBeInTheDocument();
  });
});
