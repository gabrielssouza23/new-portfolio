"use client";

import { Music2Icon } from "lucide-react";
import Link from "next/link";
import { useSystem } from "../system/SystemProvider";

export default function Header() {
  const { t, lang, toggleLang, audio, toggleAudio } = useSystem();

  const nav = [
    { href: "#projetos", label: t.navWork },
    { href: "#stack", label: "stack" },
    { href: "#experiencia", label: t.navExp },
    { href: "#sobre", label: t.navAbout },
    { href: "#contato", label: t.navContact },
  ];

  return (
    <header className="flex bg-[#0A0908] justify-between items-center px-6.5 h-14 font-mono text-[10px] tracking-[0.16em] border-b border-[#8C8377]">
      <div className="uppercase gap-2 flex items-center justify-center">
        <span className="bg-[#E8A24A] w-1.5 h-1.5 rounded-full shadow-[0_0_5px_2px_#E8A24Ae6]" />
        <span className="text-[#E6DED3]">Gabriel Silva</span>
        <span className="text-[#8C8377]">/</span>
        <span className="text-[#8C8377]">Full Stack</span>
      </div>

      <div className="flex justify-start items-center text-[#8C8377] gap-5">
        <nav className="hidden gap-5 uppercase md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-5 text-center">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para português"}
            className="flex gap-2 text-[#E8A24A] py-1.25 px-2.25 border border-[#E8A24A66] ml-1 justify-center items-center cursor-crosshair transition-colors hover:bg-gold/16"
          >
            <span className={lang === "pt" ? "" : "opacity-40"}>PT</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "" : "opacity-40"}>EN</span>
          </button>
          <button
            type="button"
            onClick={toggleAudio}
            aria-pressed={audio}
            className="flex gap-2 text-[#E6DED399] py-1.25 px-2.25 border border-[#E6DED333] ml-1 justify-center items-center cursor-crosshair transition-colors hover:border-gold/60 hover:text-gold"
          >
            <Music2Icon size={8} />
            <span>{audio ? t.on : t.off}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
