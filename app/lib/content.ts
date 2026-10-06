import type { Copy } from "./copy";

/** Projetos: metadados fixos + descrição por idioma. */
export const PROJECTS = [
  {
    repo: "maxbot-ui", year: "2025", url: "https://github.com/gabrielssouza23/maxbot-ui",
    tags: ["Next.js 15", "React 19", "Radix", "Tailwind 4"],
    pt: "Interface do produto em Next.js 15 e React 19. Componentes acessíveis sobre Radix, variantes com CVA e Tailwind 4.",
    en: "Product interface in Next.js 15 and React 19. Accessible components on top of Radix, variants with CVA and Tailwind 4.",
  },
  {
    repo: "planTrip", year: "2024", url: "https://github.com/gabrielssouza23/planTrip",
    tags: ["React", "TypeScript", "Fastify", "Prisma"],
    pt: "Planejador de viagens em grupo. Front em React + TypeScript e API própria em Fastify com Prisma, validação por Zod e convites por e-mail.",
    en: "Group trip planner. React + TypeScript front end and a Fastify API with Prisma, Zod validation and e-mail invites.",
  },
  {
    repo: "carboAPI", year: "2024", url: "https://github.com/gabrielssouza23/carboAPI",
    tags: ["Fastify 5", "PostgreSQL", "JWT"],
    pt: "API do projeto Carbonífera Biodiversa: Fastify 5 sobre PostgreSQL, autenticação JWT e upload de arquivos via multipart.",
    en: "API for the Carbonífera Biodiversa project: Fastify 5 over PostgreSQL, JWT auth and multipart file upload.",
  },
  {
    repo: "portfolio3D", year: "2024", url: "https://github.com/gabrielssouza23/portfolio3D",
    tags: ["Three.js", "R3F", "Framer Motion"],
    pt: "Portfólio 3D com react-three-fiber e drei: cena interativa, animações em Framer Motion e envio de contato por EmailJS.",
    en: "3D portfolio with react-three-fiber and drei: interactive scene, Framer Motion animations and EmailJS contact form.",
  },
  {
    repo: "quick-news", year: "2024", url: "https://github.com/gabrielssouza23/quick-news",
    tags: ["React", "Axios", "Tailwind"],
    pt: "Portal de notícias em React consumindo API externa via Axios, com roteamento em React Router e UI em Material Tailwind.",
    en: "News portal in React consuming an external API through Axios, React Router navigation and a Material Tailwind UI.",
  },
  {
    repo: "almoxarifado", year: "2023", url: "https://github.com/gabrielssouza23/almoxarifado",
    tags: ["PHP", "MVC", "MySQL", "jQuery"],
    pt: "Sistema de controle de almoxarifado em PHP com arquitetura MVC própria, MySQL, Bootstrap e jQuery.",
    en: "Inventory control system in PHP with a hand-rolled MVC architecture, MySQL, Bootstrap and jQuery.",
  },
] as const;

/** Grupos do stack — os rótulos de nível vêm traduzidos. */
export const buildStack = (t: Copy) => [
  { label: t.gFront, items: [
    { name: "Next.js", lvl: t.lvlPrimary }, { name: "React", lvl: t.lvlPrimary },
    { name: "TypeScript", lvl: t.lvlPrimary }, { name: "Tailwind CSS", lvl: t.lvlDaily },
    { name: "jQuery", lvl: t.lvlLegacy },
  ] },
  { label: t.gBack, items: [
    { name: "Node.js", lvl: t.lvlPrimary }, { name: "NestJS", lvl: t.lvlSolid },
    { name: "Fastify", lvl: t.lvlSolid }, { name: "PHP", lvl: t.lvlSolid },
    { name: "SQL puro", lvl: t.lvlStudy },
  ] },
  { label: t.gData, items: [
    { name: "PostgreSQL", lvl: t.lvlPrimary }, { name: "MySQL", lvl: t.lvlSolid },
    { name: "LangChain", lvl: t.lvlSolid },
  ] },
  { label: t.gInfra, items: [
    { name: "AWS", lvl: t.lvlCert }, { name: "Git / GitHub", lvl: t.lvlDaily },
    { name: "JWT / REST", lvl: t.lvlDaily },
  ] },
];

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
