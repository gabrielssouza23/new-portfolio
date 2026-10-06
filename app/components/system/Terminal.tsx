"use client";

import { useSystem } from "./SystemProvider";

/** Barra de log fixa no rodapé. Clique alterna o histórico. */
export default function Terminal() {
  const { logs, termOpen, toggleTerm, t } = useSystem();
  const last = logs[0]?.m ?? t.logBoot;

  return (
    <div className="fixed inset-x-0 bottom-0 z-80 border-t border-gold/20 bg-[#060505]/90 font-mono text-[10px] text-ink/60 backdrop-blur-[10px]">
      <button
        type="button"
        onClick={toggleTerm}
        aria-expanded={termOpen}
        className="flex h-10 w-full cursor-crosshair items-center gap-3 px-4.5 text-left"
      >
        <span className="text-gold">&gt;</span>
        <span className="flex-1 truncate tracking-[0.06em]">{last}</span>
        <span aria-hidden className="h-3.25 w-1.75 animate-caret bg-gold" />
        <span className="uppercase tracking-[0.2em] text-ink/35">
          {t.termHint} {termOpen ? "−" : "+"}
        </span>
      </button>

      {termOpen && (
        <div className="flex max-h-42 flex-col-reverse gap-1.25 overflow-y-auto border-t border-ink/8 px-4.5 pt-1 pb-4">
          {logs.map((l, i) => (
            <div key={`${l.t}-${i}`} className="flex gap-3 tracking-[0.05em]">
              <span className="flex-none text-gold/55">{l.t}</span>
              <span>{l.m}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
