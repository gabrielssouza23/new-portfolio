"use client";

import Image from "next/image";
import Reveal from "../system/Reveal";
import Section from "../system/Section";
import SectionHeading from "./SectionHeading";
import { useSystem } from "../system/SystemProvider";
import { DOSSIER } from "@/app/lib/content";

type Entry = { name: string; meta: string };

/** Uma célula do dossiê: rótulo em gold + lista nome/meta. */
function DossierCell({ label, entries, className }: { label: string; entries: Entry[]; className?: string }) {
  return (
    <div className={`bg-bg px-6 pt-6 pb-7 ${className ?? ""}`}>
      <div className="mb-4.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{label}</div>
      <ul className="space-y-3.5">
        {entries.map((e) => (
          <li key={e.name}>
            <div className="text-base leading-[1.4] text-ink-bright">{e.name}</div>
            <div className="mt-1 font-mono text-[11px] tracking-[0.08em] text-ink/58">{e.meta}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const { t, lang } = useSystem();

  const edu = DOSSIER.edu.map((e) => ({ name: e[lang], meta: `${e.where} · ${e.when[lang]}` }));
  const awards = DOSSIER.awards.map((e) => ({ name: e[lang], meta: e.meta[lang] }));
  const langs = DOSSIER.langs.map((e) => ({ name: e[lang], meta: e.meta[lang] }));

  return (
    <Section
      id="sobre"
      label="Sobre"
      className="relative z-10 mx-auto max-w-[1600px] px-6 pt-9 pb-32 lg:px-19"
    >
      <Reveal>
        <SectionHeading num="04" title={t.secAbout} />
      </Reveal>

      <div className="grid items-start gap-13 lg:grid-cols-[minmax(240px,360px)_minmax(320px,1fr)]">
        <Reveal>
          <div className="relative aspect-3/4 border border-gold/26 bg-[#100e0c]">
            <Image
              src="https://github.com/gabrielssouza23.png?size=600"
              alt={t.portraitAlt}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-6 max-w-[44ch] text-[clamp(20px,2vw,26px)] font-light leading-[1.45] tracking-[-0.01em] text-ink-bright text-pretty">
              {t.about1}
            </p>
            <p className="mb-5 max-w-[62ch] text-base leading-[1.7] text-ink/80 text-pretty">
              {t.about2}
            </p>
            <p className="max-w-[62ch] text-base leading-[1.7] text-ink/80 text-pretty">
              {t.about3}
            </p>
          </Reveal>

          {/* Dossiê do currículo: mesma grade de 1px do stack e do contato */}
          <Reveal>
            <div className="mt-11 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2">
              <DossierCell label={t.eduLabel} entries={edu} />
              <DossierCell label={t.awardsLabel} entries={awards} className="sm:row-span-2" />
              <DossierCell label={t.langLabel} entries={langs} />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
