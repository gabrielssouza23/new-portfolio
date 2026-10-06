"use client";

import Image from "next/image";

import Reveal from "../system/Reveal";
import Section from "../system/Section";
import SectionHeading from "./SectionHeading";
import { useSystem } from "../system/SystemProvider";
import { PROJECTS } from "@/app/lib/content";

export default function Projects() {
  const { t, lang, log } = useSystem();

  return (
    <Section
      id="projetos"
      label="Projetos"
      className="relative z-10 mx-auto max-w-[1600px] px-6 pt-14 pb-32 lg:px-19"
    >
      <Reveal>
        <SectionHeading
          num="01"
          title={t.secWork}
          meta={`${String(PROJECTS.length).padStart(2, "0")} ${t.files}`}
        />
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(330px,100%),1fr))] gap-6">
        {PROJECTS.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <Reveal key={p.repo} as="article">
              <article
                onMouseEnter={() => log(`${t.logHover} ${p.repo}`)}
                className="group h-full border border-ink/10 bg-gold/2 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/5"
              >
                {/* Slot de imagem: screenshot quando existe, senão o nome do repo */}
                <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-[#100e0c]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.repo} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top brightness-[0.55] sepia-[0.45] transition duration-300 group-hover:brightness-100 group-hover:sepia-0"
                    />
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/22">
                      {p.repo}
                    </span>
                  )}
                </div>

                <div className="px-5.5 pt-5 pb-6">
                  <div className="mb-3.5 flex justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-gold">
                    <span>{num}</span>
                    <span className="text-ink/32">{p.year}</span>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2.5 block text-[21px] font-extralight tracking-[-0.01em] text-ink-bright transition-colors hover:text-gold"
                  >
                    {p.repo}
                  </a>
                  <p className="mb-4.5 text-[13px] font-light leading-[1.55] text-ink/52 text-pretty">
                    {lang === "pt" ? p.pt : p.en}
                  </p>
                  <div className="flex flex-wrap gap-1.75">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-ink/14 px-2.25 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/50"
                      >
                        {tag}
                      </span>
                    ))}
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
