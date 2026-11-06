"use client";

import Reveal from "../system/Reveal";
import Section from "../system/Section";
import SectionHeading from "./SectionHeading";
import { useSystem } from "../system/SystemProvider";
import { buildTimeline } from "@/app/lib/content";

export default function Experience() {
  const { t } = useSystem();
  const timeline = buildTimeline(t);

  return (
    <Section
      id="experiencia"
      label="Experiencia"
      className="relative z-10 mx-auto max-w-[1600px] px-6 pt-9 pb-32 lg:px-19"
    >
      <Reveal>
        <SectionHeading num="03" title={t.secExp} />
      </Reveal>

      <ol className="flex max-w-[900px] flex-col gap-14 border-l border-ink/15 pl-8.5">
        {timeline.map((e) => (
          <Reveal key={`${e.company}-${e.period}`}>
            <li className="relative list-none">
              <span
                aria-hidden
                className="absolute -left-[39px] top-2.25 h-2.25 w-2.25 border border-gold bg-bg"
              />
              <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                {e.period}
              </div>
              <h3 className="mb-1.5 text-[clamp(24px,3vw,36px)] font-light tracking-[-0.015em] text-ink-bright">
                {e.role}
              </h3>
              <div className="mb-4.5 font-mono text-[12px] tracking-[0.08em] text-ink/65">
                {e.company}
              </div>
              {/* Bullets do currículo: escaneáveis, em vez de um bloco corrido */}
              <ul className="max-w-[62ch] space-y-2.5">
                {e.desc.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-[1.6] text-ink/80 text-pretty"
                  >
                    <span aria-hidden className="font-mono text-gold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
