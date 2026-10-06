"use client";

import { useEffect, useRef } from "react";
import { useSystem } from "./SystemProvider";

/**
 * <section> que se anuncia no terminal quando entra em cena.
 * `label` é o nome cru; a tradução do prefixo vem do idioma ativo.
 */
export default function Section({
  id,
  label,
  className,
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { log, t } = useSystem();
  // O texto muda com o idioma, mas o observer não deve remontar por isso —
  // por isso a versão atual fica numa ref, atualizada fora do render.
  const latest = useRef({ log, t });
  useEffect(() => {
    latest.current = { log, t };
  }, [log, t]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let announced = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.4 && !announced) {
            announced = true;
            latest.current.log(`${latest.current.t.logSection} ${label.toLowerCase()}`);
          }
        }
      },
      { threshold: [0.4] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [label]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
