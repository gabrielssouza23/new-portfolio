"use client";

import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from "react";
import { COPY, type Copy, type Lang } from "@/app/lib/copy";

type LogLine = { t: string; m: string };

type SystemValue = {
  lang: Lang;
  t: Copy;
  toggleLang: () => void;
  logs: LogLine[];
  log: (m: string) => void;
  booting: boolean;
  bootLines: string[];
  skipBoot: () => void;
  audio: boolean;
  toggleAudio: () => void;
  termOpen: boolean;
  toggleTerm: () => void;
};

const SystemContext = createContext<SystemValue | null>(null);

export function useSystem() {
  const v = useContext(SystemContext);
  if (!v) throw new Error("useSystem precisa estar dentro de <SystemProvider>");
  return v;
}

const BOOT_LINES = [
  "nexus.init — core 6.4.1",
  "auth: gabriel.silva … ok",
  "loading stack: next / nest / php / aws",
  "holo emitter: online",
  "ready.",
];

const stamp = () => {
  const d = new Date();
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
};

export default function SystemProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [booting, setBooting] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [audio, setAudio] = useState(false);
  const [termOpen, setTermOpen] = useState(false);

  const t = COPY[lang];

  // O log é chamado de dentro de efeitos e handlers; ref evita recriar callbacks.
  const log = useCallback((m: string) => {
    setLogs((prev) => [{ t: stamp(), m }, ...prev].slice(0, 40));
  }, []);

  const skipBoot = useCallback(() => setBooting(false), []);

  // Sequência de boot: uma linha a cada 260ms, depois sai sozinho.
  useEffect(() => {
    if (!booting) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setBootLines((p) => [...p, line]), 300 + i * 260));
    });
    timers.push(setTimeout(() => setBooting(false), 300 + BOOT_LINES.length * 260 + 420));
    return () => timers.forEach(clearTimeout);
  }, [booting]);

  // Primeira linha do terminal, assim que o boot sai.
  const greeted = useRef(false);
  useEffect(() => {
    if (booting || greeted.current) return;
    greeted.current = true;
    log(COPY[lang].logBoot);
  }, [booting, lang, log]);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "pt" ? "en" : "pt";
      log(`${COPY[next].logLang} ${next.toUpperCase()}`);
      return next;
    });
  }, [log]);

  const toggleTerm = useCallback(() => setTermOpen((v) => !v), []);

  // --- Áudio ambiente: drone grave em lowpass, montado sob demanda ---
  const actx = useRef<AudioContext | null>(null);
  const nodes = useRef<{ out: GainNode; oscs: OscillatorNode[]; lfo: OscillatorNode } | null>(null);

  const toggleAudio = useCallback(() => {
    setAudio((on) => {
      const next = !on;
      log(`${COPY[lang].logAudio} · ${next ? COPY[lang].on : COPY[lang].off}`);
      if (next) {
        const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AC) return on;
        actx.current ??= new AC();
        const ctx = actx.current;
        void ctx.resume();
        const out = ctx.createGain();
        out.gain.value = 0;
        out.connect(ctx.destination);
        const lp = ctx.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.value = 220;
        lp.Q.value = 0.6;
        lp.connect(out);
        const oscs = [46, 46.6, 69.2, 92.5].map((f, i) => {
          const o = ctx.createOscillator();
          o.type = i > 1 ? "triangle" : "sawtooth";
          o.frequency.value = f;
          const g = ctx.createGain();
          g.gain.value = i > 1 ? 0.12 : 0.3;
          o.connect(g).connect(lp);
          o.start();
          return o;
        });
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.06;
        const lg = ctx.createGain();
        lg.gain.value = 70;
        lfo.connect(lg).connect(lp.frequency);
        lfo.start();
        out.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 3);
        nodes.current = { out, oscs, lfo };
      } else if (nodes.current && actx.current) {
        const { out, oscs, lfo } = nodes.current;
        const ctx = actx.current;
        out.gain.cancelScheduledValues(ctx.currentTime);
        out.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
        setTimeout(() => { oscs.forEach((o) => o.stop()); lfo.stop(); }, 1000);
        nodes.current = null;
      }
      return next;
    });
  }, [lang, log]);

  // Fecha o AudioContext ao desmontar, senão fica processando à toa.
  useEffect(() => () => { void actx.current?.close(); }, []);

  const value = useMemo<SystemValue>(
    () => ({
      lang, t, toggleLang, logs, log, booting, bootLines, skipBoot,
      audio, toggleAudio, termOpen, toggleTerm,
    }),
    [lang, t, toggleLang, logs, log, booting, bootLines, skipBoot, audio, toggleAudio, termOpen, toggleTerm],
  );

  return <SystemContext.Provider value={value}>{children}</SystemContext.Provider>;
}
