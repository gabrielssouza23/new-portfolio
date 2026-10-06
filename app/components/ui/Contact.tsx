"use client";

import Reveal from "../system/Reveal";
import Section from "../system/Section";
import SectionHeading from "./SectionHeading";
import { useSystem } from "../system/SystemProvider";
import { CONTACTS } from "@/app/lib/content";

export default function Contact() {
  const { t } = useSystem();

  return (
    <Section
      id="contato"
      label="Contato"
      className="relative z-10 mx-auto max-w-[1600px] px-6 pt-9 pb-28 lg:px-19"
    >
      <Reveal>
        <SectionHeading num="05" title={t.secContact} />
      </Reveal>

      <Reveal>
        <p className="mb-8.5 max-w-[620px] text-[clamp(28px,4.4vw,62px)] font-extralight leading-[1.06] tracking-[-0.03em] text-ink-bright text-balance">
          {t.contactLead}
        </p>
      </Reveal>

      <Reveal>
        <div className="flex max-w-[900px] flex-wrap gap-px border border-ink/10 bg-ink/10">
          {CONTACTS.map((c) => (
            <a
              key={c.key}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex-[1_1_220px] bg-bg px-6 py-5.5 text-ink transition-colors hover:bg-gold/8"
            >
              <div className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.26em] text-gold">
                {c.label ?? t.phone}
              </div>
              <div className="text-[15px] font-light [overflow-wrap:anywhere]">{c.value}</div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-6.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/34">
          {t.availability}
        </div>
      </Reveal>
    </Section>
  );
}
