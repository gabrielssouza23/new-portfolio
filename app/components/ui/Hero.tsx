"use client";

import HeroDove from "../HeroDove";
import CrtOverlay from "../CrtOverlay";
import Reveal from "../system/Reveal";
import { useSystem } from "../system/SystemProvider";
import { PROJECTS } from "@/app/lib/content";

export default function Hero() {
  const { t } = useSystem();
  const projCount = `${String(PROJECTS.length).padStart(2, "0")} ${PROJECTS.length === 1 ? t.projOne : t.projMany}`;

  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-19 py-24 max-w-[1600px] mx-auto">

      {/* GRID PRINCIPAL: texto | pomba */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10">

        {/* COLUNA TEXTO */}
        <div>
          {/* 1. Eyebrow/kicker */}
          <Reveal>
            <div className="flex items-center gap-3.5 mb-7 uppercase text-gold font-mono text-[11px] tracking-[0.24em]">
              <span className='w-9.5 h-px bg-gold'/>
              <span>{t.eyebrow}</span>
            </div>
          </Reveal>

          {/* 2. H1 duas linhas, duas cores */}
          <Reveal>
            <h1 className="font-extralight leading-[0.98] tracking-tight font-display text-[clamp(54px,11.5vw,180px)] uppercase">
              <span className="block text-ink-bright">Gabriel</span>
              <span className="block text-gold">Silva</span>
            </h1>
          </Reveal>

          {/* 3. Meta row. Daqui pra baixo o texto fica acima do CRT (z-30):
              scanlines são pro H1 e pra pomba, não pra texto pequeno. */}
          <Reveal className="relative z-30">
            <div className="flex items-baseline flex-wrap gap-x-4 gap-y-2 mt-7 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/70">
              <span className="text-ink-bright">{t.role}</span>
              <span aria-hidden className="hidden w-6 h-px bg-ink/35 sm:block" />
              <span>aws cloud practitioner</span>
              <span aria-hidden className="hidden w-6 h-px bg-ink/35 sm:block" />
              <span>charqueadas · rs</span>
            </div>
          </Reveal>

          {/* 4. Bio */}
          <Reveal className="relative z-30">
            <p className="max-w-[34rem] mt-6 text-[17px] leading-[1.65] text-ink/82 text-pretty">
              {t.heroSub}
            </p>
          </Reveal>

          {/* 5. CTAs */}
          <Reveal className="relative z-30">
            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2.5 border border-gold px-6.5 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-gold transition-colors duration-250 hover:bg-gold hover:text-bg"
              >
                {t.ctaWork}
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2.5 border border-ink/25 px-6.5 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/82 transition-colors duration-250 hover:border-ink/55 hover:text-ink-bright"
              >
                {t.ctaTalk}
              </a>
            </div>
          </Reveal>
        </div>

        {/* COLUNA POMBA + CITAÇÃO */}
        <div className="flex flex-col">
          <div className="relative aspect-square max-h-[560px]">
            <HeroDove />
          </div>

          <figure className="relative z-30 mt-8 max-w-[420px] lg:ml-auto">
            <blockquote
              cite="https://www.imdb.com/title/tt0083658/"
              className="font-display font-light text-ink text-[clamp(18px,1.5vw,22px)] leading-[1.45] text-balance"
            >
              &ldquo;All those moments will be lost in time, like tears&hellip; in
              rain.&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3.5 uppercase text-gold font-mono text-[11px] tracking-[0.16em]">
              <span className="w-9.5 h-px bg-gold" />
              <span>Blade Runner &middot; 1982</span>
            </figcaption>
          </figure>
        </div>

      </div>

      {/* Scroll indicator — fora do grid, ancorado no rodapé da section */}
      <div className="absolute left-6 lg:left-19 bottom-9 flex gap-6.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
        <span>{t.scroll} &darr;</span>
        <span>{projCount}</span>
      </div>

      {/* Overlay CRT: confinado a esta section (que ja e `relative`) */}
      <CrtOverlay />

    </section>
  );
}
