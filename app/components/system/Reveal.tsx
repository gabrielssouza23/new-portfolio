"use client";

import { useEffect, useRef } from "react";

/**
 * Fade + subida ao entrar na viewport.
 *
 * O elemento é servido VISÍVEL e só é escondido no mount, e mesmo assim apenas
 * se estiver abaixo da dobra. Assim não há flash de conteúdo sumido, e sem JS
 * (ou com reduced-motion) o conteúdo simplesmente aparece normal.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "figure";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.95) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = "opacity .8s ease, transform .8s cubic-bezier(.16,1,.3,1)";

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
