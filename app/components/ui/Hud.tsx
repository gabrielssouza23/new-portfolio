"use client";

import { useSystem } from "../system/SystemProvider";

/** Coordenadas na lateral esquerda — só decoração de ambiente. */
export default function Hud() {
  const { t } = useSystem();
  return (
    <div
      aria-hidden
      className="fixed left-5 top-1/2 z-60 hidden -translate-y-1/2 rotate-180 font-mono text-[9px] uppercase tracking-[0.42em] text-ink/24 pointer-events-none [writing-mode:vertical-rl] lg:block"
    >
      29.95 S · 51.62 W &nbsp;//&nbsp; charqueadas &nbsp;//&nbsp; {t.hud}
    </div>
  );
}
