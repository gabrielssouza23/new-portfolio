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
        {/* Uma frase por linha: a quebra cai entre as frases, não no meio delas */}
        <p className="mb-8.5 text-[clamp(30px,4.4vw,62px)] font-light leading-[1.06] tracking-[-0.03em] text-ink-bright text-balance">
          {t.contactLead.split(/(?<=\?)\s/).map((s) => (
            <span key={s} className="block">{s}</span>
          ))}
        </p>
      </Reveal>

      <Reveal>
        <div className="flex max-w-[1040px] flex-wrap gap-px border border-ink/10 bg-ink/10">
          {CONTACTS.map((c) => {
            // <wbr> antes do "@": se o e-mail não couber, quebra ali e não no meio do nome
            const [user, domain] = c.value.split("@");
            return (
              <a
                key={c.key}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex-[1_1_220px] bg-bg px-6 py-5.5 text-ink transition-colors hover:bg-gold/8"
              >
                <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                  {c.label ?? t.phone}
                </div>
                <div className="text-base text-ink-bright [overflow-wrap:anywhere]">
                  {domain ? <>{user}<wbr />@{domain}</> : c.value}
                </div>
              </a>
            );
          })}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-6.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/62">
          {t.availability}
        </div>
      </Reveal>
    </Section>
  );
}
