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

      <ol className="flex max-w-[900px] flex-col gap-11 border-l border-ink/13 pl-8.5">
        {timeline.map((e) => (
          <Reveal key={`${e.company}-${e.period}`}>
            <li className="relative list-none">
              <span
                aria-hidden
                className="absolute -left-[39px] top-2.25 h-2.25 w-2.25 border border-gold bg-bg"
              />
              <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {e.period}
              </div>
              <h3 className="mb-1.25 text-[clamp(24px,3vw,38px)] font-extralight tracking-[-0.02em] text-ink-bright">
                {e.role}
              </h3>
              <div className="mb-3.5 font-mono text-[11px] tracking-[0.16em] text-ink/42">
                {e.company}
              </div>
              <p className="max-w-[620px] text-[15px] font-light leading-[1.62] text-ink/55 text-pretty">
                {e.desc}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
