"use client";

import { useEffect, useRef } from "react";

/**
 * Chuva do fundo. Canvas 2D em vez de DOM porque são ~190 gotas redesenhadas
 * a cada frame — com elementos isso derrubaria o frame rate.
 * Para sozinha quando o usuário pede menos animação.
 */
export default function RainCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    type Drop = { x: number; y: number; l: number; v: number; o: number };
    let drops: Drop[] = [];

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = window.innerWidth * dpr;
      cv.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from({ length: 190 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        l: 14 + Math.random() * 46,
        v: 2.2 + Math.random() * 5.5,
        o: 0.06 + Math.random() * 0.26,
      }));
    };
    size();
    window.addEventListener("resize", size);

    let raf = 0;
    let dead = false;
    const tick = () => {
      if (dead) return;
      const { innerWidth: w, innerHeight: h } = window;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      for (const d of drops) {
        ctx.strokeStyle = `rgba(232,190,150,${d.o})`;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1.6, d.y + d.l);
        ctx.stroke();
        d.y += d.v * 2.4;
        d.x -= d.v * 0.16;
        if (d.y > h) {
          d.y = -d.l;
          d.x = Math.random() * w * 1.1;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 z-0 h-full w-full opacity-45 pointer-events-none"
    />
  );
}
