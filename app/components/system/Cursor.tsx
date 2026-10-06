"use client";

import { useEffect, useRef } from "react";

/**
 * Anel que segue o ponteiro. Move via `transform` direto no nó (sem estado
 * React) porque isso roda a cada mousemove — passar por render seria caro.
 * Só monta em ponteiro fino: em touch não existe cursor pra acompanhar.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      el.style.opacity = "1";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed left-0 top-0 z-[92] -ml-3 -mt-3 h-6 w-6 rounded-full border border-gold/80 opacity-0 pointer-events-none max-[1024px]:hidden"
    />
  );
}
