"use client";

import { useEffect, useRef } from "react";
import { Maximize2Icon, XIcon } from "lucide-react";

/**
 * Demo em loop no lugar de um GIF: mesmo efeito, uma fração do peso.
 * Só toca enquanto está na tela; com reduced-motion fica parada no poster
 * e ganha controles nativos para quem quiser dar play.
 *
 * "Ampliar" abre um <dialog> com o vídeo perto do tamanho nativo e com
 * controles, pra dar pra pausar e ler os detalhes da gravação.
 */
export default function DemoVideo({
  src,
  poster,
  width,
  height,
  label,
  expandLabel,
  closeLabel,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
  expandLabel: string;
  closeLabel: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bigRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.controls = true;
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const open = () => {
    const big = bigRef.current;
    if (!big) return;
    big.currentTime = ref.current?.currentTime ?? 0;
    dialogRef.current?.showModal();
    big.play().catch(() => {});
  };

  const close = () => dialogRef.current?.close();

  return (
    <div className="relative h-full bg-[#100e0c]">
      <video
        ref={ref}
        src={src}
        poster={poster}
        width={width}
        height={height}
        aria-label={label}
        muted
        loop
        playsInline
        preload="metadata"
        className="block h-auto w-full"
      />
      <button
        type="button"
        onClick={open}
        className="absolute right-3 bottom-3 flex items-center gap-2 border border-ink/20 bg-bg/80 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/82 backdrop-blur-sm transition-colors hover:border-gold/60 hover:text-gold focus-visible:outline-1 focus-visible:outline-gold"
      >
        <Maximize2Icon aria-hidden className="size-3" strokeWidth={1.5} />
        {expandLabel}
      </button>

      {/* Clique no backdrop chega no próprio <dialog>: fecha. Esc é nativo. */}
      <dialog
        ref={dialogRef}
        aria-label={label}
        onClose={() => bigRef.current?.pause()}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-bg/92 backdrop:backdrop-blur-sm"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-0 -top-9 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/82 transition-colors hover:text-gold focus-visible:outline-1 focus-visible:outline-gold"
        >
          {closeLabel}
          <XIcon aria-hidden className="size-3.5" strokeWidth={1.5} />
        </button>
        <video
          ref={bigRef}
          src={src}
          poster={poster}
          width={width}
          height={height}
          muted
          loop
          playsInline
          controls
          preload="none"
          className="block h-auto max-h-[calc(100dvh-6rem)] w-auto max-w-[96vw] border border-ink/15"
        />
      </dialog>
    </div>
  );
}
