import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");
    const natalMatches = router.matchRoutes("/natal");
    const natalChapterMatches = router.matchRoutes("/natal/nascimento-jesus");
    const mapasMatches = router.matchRoutes("/mapas");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(natalMatches.at(-1)?.routeId).toBe("/natal/");
    expect(natalChapterMatches.at(-1)?.routeId).toBe("/natal/$id");
    expect(mapasMatches.at(-1)?.routeId).toBe("/mapas");
    expect(Object.keys(router.routesById)).not.toContain("/meu-agnus");
  });
});
