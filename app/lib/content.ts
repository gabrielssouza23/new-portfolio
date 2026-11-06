import type { Copy } from "./copy";

/**
 * Projetos: metadados fixos + descrição por idioma. A demo é um MP4 em
 * /public (convertido do GIF original: ~5x menor, mesma resolução).
 */
export const PROJECTS = [
  {
    repo: "streaming-duo", year: "2026", url: "https://github.com/gabrielssouza23/streaming-duo",
    tags: ["Chrome MV3", "WebSocket", "Node.js", "JavaScript"],
    demo: {
      src: "/projects/streaming-duo/demo.mp4",
      poster: "/projects/streaming-duo/poster.webp",
      width: 1908, height: 962,
    },
    pt: "Extensão de navegador para assistir Netflix sincronizado à distância: play, pause e seek de um lado são replicados no outro em tempo real. Servidor próprio em Node.js com WebSocket puro, sem dados passando por serviços de terceiros.",
    en: "Browser extension for watching Netflix in sync from a distance: play, pause and seek on one side are mirrored on the other in real time. Own Node.js server on raw WebSockets, with no data going through third-party services.",
    notes: {
      pt: [
        "Sincroniza por estado (playing + tempo), não por evento: menos tipos de mensagem e menos casos de borda.",
        "Servidor como fonte da verdade: sala e nome vêm da conexão, nunca do cliente.",
        "Supressão de eco, tolerância de drift de 1,5 s e heartbeat do host a cada 5 s.",
      ],
      en: [
        "Syncs by state (playing + time), not by event: fewer message types and fewer edge cases.",
        "Server as the source of truth: room and name come from the connection, never from the client.",
        "Echo suppression, 1.5 s drift tolerance and a host heartbeat every 5 s.",
      ],
    },
  },
] as const;

type StackItem = { name: string; lvl?: string };

/**
 * Grupos do stack, na ordem do currículo. Os rótulos de nível vêm traduzidos;
 * item sem `lvl` aparece sem etiqueta (o currículo lista, mas não qualifica).
 */
export const buildStack = (t: Copy): { label: string; items: StackItem[] }[] => [
  { label: t.gBack, items: [
    { name: "Node.js", lvl: t.lvlPrimary }, { name: "NestJS", lvl: t.lvlSolid },
    { name: "Fastify", lvl: t.lvlSolid }, { name: "PHP", lvl: t.lvlSolid },
    { name: "LangChain", lvl: t.lvlSolid }, { name: "SQL", lvl: t.lvlStudy },
    { name: "Python · Java · C#" },
  ] },
  { label: t.gData, items: [
    { name: "PostgreSQL", lvl: t.lvlPrimary }, { name: "MySQL", lvl: t.lvlSolid },
  ] },
  { label: t.gFront, items: [
    { name: "Next.js", lvl: t.lvlPrimary }, { name: "React", lvl: t.lvlPrimary },
    { name: "TypeScript", lvl: t.lvlPrimary }, { name: "Tailwind CSS", lvl: t.lvlDaily },
    { name: "Zustand · Shadcn" }, { name: "Ant Design" },
    { name: "jQuery", lvl: t.lvlLegacy },
  ] },
  { label: t.gInfra, items: [
    { name: "AWS", lvl: t.lvlCert }, { name: "Git / GitHub", lvl: t.lvlDaily },
  ] },
  { label: t.gOther, items: [
    { name: "JWT / REST", lvl: t.lvlDaily }, { name: "Google Maps API" },
    { name: "Web3 · Chatbot" }, { name: "ERP" },
  ] },
];

/** Formação, certificações e idiomas — direto do currículo. */
export const DOSSIER = {
  edu: [
    { pt: "Tecnólogo em Sistemas para Internet", en: "Internet Systems Technology (associate degree)",
      where: "IFSul", when: { pt: "2025 — 2027 · em andamento", en: "2025 — 2027 · in progress" } },
    { pt: "Técnico em Informática", en: "IT Technician (technical high school)",
      where: "IFSul", when: { pt: "2021 — 2024", en: "2021 — 2024" } },
  ],
  awards: [
    { pt: "AWS Cloud Practitioner", en: "AWS Cloud Practitioner", meta: { pt: "certificado", en: "certified" } },
    { pt: "1º lugar na Mocitec IFSul", en: "1st place at Mocitec IFSul", meta: { pt: "2024 · FEBRACE 2025", en: "2024 · FEBRACE 2025" } },
    { pt: "Arquitetura de Soluções AWS", en: "AWS Solutions Architecture", meta: { pt: "Instituto Caldeira", en: "Instituto Caldeira" } },
    { pt: "HTML, CSS e Node.js", en: "HTML, CSS and Node.js", meta: { pt: "Alura", en: "Alura" } },
    { pt: "Hackathon Charcode IFSul", en: "Charcode IFSul Hackathon", meta: { pt: "2022 e 2023", en: "2022 and 2023" } },
    { pt: "Cybersecurity and Best Practices", en: "Cybersecurity and Best Practices", meta: { pt: "Maratona Cisco", en: "Cisco marathon" } },
  ],
  langs: [
    { pt: "Inglês", en: "English", meta: { pt: "B2 · Cambridge Linguaskill", en: "B2 · Cambridge Linguaskill" } },
    { pt: "Português", en: "Portuguese", meta: { pt: "nativo", en: "native" } },
  ],
} as const;

export const buildTimeline = (t: Copy) => [
  { period: t.maxPeriod, role: t.maxRole, company: t.maxCo, desc: t.maxDesc },
  { period: t.dooPeriod, role: t.dooRole, company: t.dooCo, desc: t.dooDesc },
  { period: t.ifsPeriod, role: t.ifsRole, company: t.ifsCo, desc: t.ifsDesc },
  { period: t.tmwPeriod, role: t.tmwRole, company: t.tmwCo, desc: t.tmwDesc },
];

export const CONTACTS = [
  { key: "linkedin", label: "linkedin", value: "gabriel-de-souza-silva23",
    href: "https://www.linkedin.com/in/gabriel-de-souza-silva23/", external: true },
  { key: "email", label: "email", value: "gabriel.desouzasilva2014@gmail.com",
    href: "mailto:gabriel.desouzasilva2014@gmail.com", external: false },
  { key: "github", label: "github", value: "gabrielssouza23",
    href: "https://github.com/gabrielssouza23", external: true },
  { key: "phone", label: null, value: "+55 51 99915-2266",
    href: "tel:+5551999152266", external: false },
] as const;
