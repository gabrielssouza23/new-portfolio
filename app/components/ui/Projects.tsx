"use client";

import Reveal from "../system/Reveal";
import Section from "../system/Section";
import SectionHeading from "./SectionHeading";
import DemoVideo from "./DemoVideo";
import { useSystem } from "../system/SystemProvider";
import { PROJECTS } from "@/app/lib/content";

export default function Projects() {
  const { t, lang, log } = useSystem();
  const count = `${String(PROJECTS.length).padStart(2, "0")} ${PROJECTS.length === 1 ? t.file : t.files}`;

  return (
    <Section
      id="projetos"
      label="Projetos"
      className="relative z-10 mx-auto max-w-[1600px] px-6 pt-14 pb-32 lg:px-19"
    >
      <Reveal>
        <SectionHeading num="01" title={t.secWork} meta={count} />
      </Reveal>

      <div className="grid gap-6">
        {PROJECTS.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <Reveal key={p.repo} as="article">
              {/* Card em destaque: a demo precisa de largura pra ser legível */}
              <article
                onMouseEnter={() => log(`${t.logHover} ${p.repo}`)}
                className="group grid border border-ink/10 bg-gold/2 transition duration-300 hover:border-gold/50 hover:bg-gold/5 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]"
              >
                <div className="border-b border-ink/10 lg:border-r lg:border-b-0">
                  <DemoVideo
                    {...p.demo}
                    label={`${t.demoLabel} ${p.repo}`}
                    expandLabel={t.expand}
                    closeLabel={t.close}
                  />
                </div>

                <div className="flex flex-col px-5.5 pt-5 pb-6 lg:px-8 lg:pt-7 lg:pb-8">
                  <div className="mb-3.5 flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                    <span>{num}</span>
                    <span className="text-ink/58">{p.year}</span>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 block text-[24px] font-light tracking-[-0.01em] text-ink-bright transition-colors hover:text-gold lg:text-[28px]"
                  >
                    {p.repo}
                  </a>
                  <p className="mb-5 text-base leading-[1.65] text-ink/80 text-pretty">
                    {lang === "pt" ? p.pt : p.en}
                  </p>
                  <ul className="mb-7 space-y-2.5">
                    {p.notes[lang].map((note) => (
                      <li
                        key={note}
                        className="flex gap-2.5 text-[15px] leading-[1.55] text-ink/68 text-pretty"
                      >
                        <span aria-hidden className="font-mono text-gold">›</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-1.75">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-ink/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/72"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] uppercase tracking-[0.18em] text-gold transition-colors hover:text-ink-bright"
                    >
                      {t.viewCode} ↗
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
