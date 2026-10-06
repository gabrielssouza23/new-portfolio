"use client";

import Image from "next/image";
import Reveal from "../system/Reveal";
import Section from "../system/Section";
import SectionHeading from "./SectionHeading";
import { useSystem } from "../system/SystemProvider";

export default function About() {
  const { t } = useSystem();

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

        <Reveal>
          <div>
            <p className="mb-5.5 text-[clamp(19px,2vw,26px)] font-extralight leading-[1.5] tracking-[-0.01em] text-ink-bright text-pretty">
              {t.about1}
            </p>
            <p className="mb-5 text-[15px] font-light leading-[1.68] text-ink/58 text-pretty">
              {t.about2}
            </p>
            <p className="text-[15px] font-light leading-[1.68] text-ink/58 text-pretty">
              {t.about3}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
