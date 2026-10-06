"use client";

import { useSystem } from "./SystemProvider";

/** Tela de boot: cobre tudo até a sequência terminar (ou até clicar em pular). */
export default function BootScreen() {
  const { booting, bootLines, skipBoot, t } = useSystem();
  if (!booting) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-100 flex flex-col justify-center bg-[#060505] px-[clamp(24px,8vw,140px)] font-mono text-xs leading-8 tracking-[0.08em] text-ink/70"
    >
      {bootLines.map((line) => (
        <div key={line} className="flex gap-3.5">
          <span className="text-gold">&gt;</span>
          <span>{line}</span>
        </div>
      ))}
      <button
        type="button"
        onClick={skipBoot}
        className="fixed right-6.5 bottom-6.5 cursor-crosshair border border-ink/25 px-4.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/60 transition-colors hover:border-gold hover:text-gold"
      >
        {t.skip}
      </button>
    </div>
  );
}
