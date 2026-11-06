"use client";

import Reveal from "../system/Reveal";
import Section from "../system/Section";
import SectionHeading from "./SectionHeading";
import { useSystem } from "../system/SystemProvider";
import { buildStack } from "@/app/lib/content";

export default function Stack() {
  const { t } = useSystem();
  const groups = buildStack(t);

  return (
    <Section
      id="stack"
      label="Stack"
      className="relative z-10 mx-auto max-w-[1600px] px-6 pt-9 pb-32 lg:px-19"
    >
      <Reveal>
        <SectionHeading num="02" title="stack" />
      </Reveal>

      {/* gap de 1px sobre fundo claro = as divisórias da grade */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(228px,100%),1fr))] gap-px border border-ink/10 bg-ink/10">
        {groups.map((g) => (
          <Reveal key={g.label}>
            <div className="h-full bg-bg px-6 pt-6.5 pb-7.5">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                {g.label}
              </div>
              <div className="flex flex-col gap-3">
                {g.items.map((it) => (
                  <div key={it.name} className="flex items-baseline justify-between gap-3">
                    <span className="text-[17px] font-light text-ink-bright">{it.name}</span>
                    {it.lvl && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/58">
                        {it.lvl}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
