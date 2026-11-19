import { Link } from "@tanstack/react-router";
import { Bell, BookOpen, Flame, Gift, Home, Map, Route, Star, TreePine, User } from "lucide-react";
import type { ReactNode } from "react";
import { ThemeGlyph, ThemeIcon } from "@/components/ThemeSymbols";

const TABS = [
  { to: "/trilha", label: "Trilha", icon: Map, christmas: Route, center: false },
  { to: "/oracoes", label: "Orações", icon: Flame, christmas: Bell, center: false },
  { to: "/inicio", label: "Início", icon: Home, christmas: TreePine, center: true },
  { to: "/biblioteca", label: "Biblioteca", icon: BookOpen, christmas: Gift, center: false },
  { to: "/perfil", label: "Conta", icon: User, christmas: Star, center: false },
] as const;

export function AppShell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return (
    <div className={`mx-auto min-h-dvh pb-30 ${wide ? "max-w-4xl" : "max-w-md"}`}>
      <main className="animate-rise px-5 pt-6">{children}</main>
      <nav
        aria-label="Seções principais"
        className="lumen-navigation fixed inset-x-0 bottom-0 z-20 border-t-2 px-2 pb-[max(0.45rem,env(safe-area-inset-bottom))] pt-1.5"
      >
        <ul className="mx-auto grid max-w-md grid-cols-5 items-end gap-1.5">
          {TABS.map(({ to, label, icon, christmas, center }) => (
            <li key={to} className="min-w-0">
              {center ? (
                <Link
                  to={to}
                  data-sound="select"
                  className="lumen-nav-tab lumen-nav-tab-center group relative -mt-4 flex min-h-[4.4rem] flex-col items-center justify-center gap-1 rounded-2xl px-1.5 py-2 text-xs font-display font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="lumen-nav-icon grid h-9 w-11 place-items-center rounded-xl transition-transform duration-150">
                    <ThemeIcon icon={icon} christmas={christmas} className="h-[22px] w-[22px]" />
                  </span>
                  <span className="truncate leading-none">{label}</span>
                  <span
                    aria-hidden="true"
                    className="lumen-nav-dot mt-0.5 h-1 w-5 scale-75 rounded-full opacity-0 transition duration-150"
                  />
                </Link>
              ) : (
                <Link
                  to={to}
                  data-sound="select"
                  className="lumen-nav-tab group relative flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1.5 text-[11px] font-display font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="lumen-nav-icon grid h-7 w-10 place-items-center rounded-xl transition-transform duration-150">
                    <ThemeIcon icon={icon} christmas={christmas} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="truncate leading-none">{label}</span>
                  <span
                    aria-hidden="true"
                    className="lumen-nav-dot mt-0.5 h-1 w-4 scale-75 rounded-full bg-gold opacity-0 transition duration-150"
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function XpBadge({ xp }: { xp: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-display text-sm font-semibold text-gold-foreground">
      <ThemeGlyph>✦</ThemeGlyph> {xp} XP
    </span>
  );
}

export function ProgressBar({ value, label = "Progresso" }: { value: number; label?: string }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.max(0, Math.min(100, value))}
      className="h-4 w-full overflow-hidden rounded-full bg-muted"
    >
      <div
        className="h-full rounded-full bg-gold transition-[width] duration-700 ease-out"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
