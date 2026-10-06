/**
 * Copy do site nos dois idiomas. Fonte única — os componentes leem daqui via
 * `useSystem().t`, nunca com string solta no JSX.
 */
export type Lang = "pt" | "en";

export const COPY = {
  pt: {
    navWork: "projetos", navExp: "experiência", navAbout: "sobre", navContact: "contato",
    hud: "névoa 0.62 · estável",
    eyebrow: "portfólio · 2026", role: "desenvolvedor full stack",
    heroSub:
      "Mais de 2 anos em React e Next.js, com back-end em Node.js, NestJS, Fastify, Python (FastAPI) e PostgreSQL. Em transição para back-end: construindo uma API REST do zero em Node.js, TypeScript e SQL puro, sem ORM.",
    ctaWork: "ver projetos", ctaTalk: "falar comigo", scroll: "rolar",
    secWork: "projetos selecionados", files: "arquivos", secExp: "experiência",
    secAbout: "sobre", portraitAlt: "Gabriel Silva",
    about1:
      "Desenvolvedor com mais de 2 anos de experiência em React e Next.js, hoje em transição de carreira para back-end.",
    about2:
      "Do lado do servidor trabalho com Node.js, NestJS, Fastify e PostgreSQL. Como projeto de aprofundamento estou construindo uma API REST do zero em Node.js e TypeScript com SQL puro, sem ORM — a ideia é entender cada camada em vez de deixar a abstração decidir. Também construo com Python e FastAPI e gosto de levar IA para o produto com APIs de LLM, como no DeskPilot. Certificado AWS Cloud Practitioner.",
    about3:
      "Curso Tecnólogo em Sistemas para Internet no IFSul. Inglês B2 (Cambridge Linguaskill). Fora do trabalho: cyberpunk, cinema e jogos — este portfólio é um pouco disso.",
    secContact: "contato", contactLead: "Tem um projeto? Me manda uma mensagem.", phone: "telefone",
    availability: "aberto a oportunidades back-end e full stack",
    lvlPrimary: "principal", lvlDaily: "diário", lvlSolid: "sólido",
    lvlLegacy: "legado", lvlCert: "certificado", lvlStudy: "aprofundando",
    gFront: "front-end", gBack: "back-end", gData: "dados", gInfra: "infra / cloud", rawSql: "SQL puro",
    maxRole: "Desenvolvedor Front End", maxCo: "MaxBot · Viçosa - MG (remoto)", maxPeriod: "08/2025 — Presente",
    maxDesc:
      "Construção de componentes reutilizáveis com React, Next.js 14, TypeScript e JavaScript, consumindo APIs REST do time de back-end. Uso de Tailwind CSS, Radix, Shadcn, React-Query, Zustand e Zod para validação de dados e gerenciamento de estado. Colaboração direta com o time de back-end e produto em cerimônias Scrum, participando de decisões sobre contrato de API e estrutura de dados.",
    dooRole: "Desenvolvedor Full Stack", dooCo: "DOOOR · Delaware, EUA (remoto)", dooPeriod: "03/2025 — 05/2025",
    dooDesc:
      "Desenvolvimento full stack para produto de IA e Web3, atuando tanto em front-end (Next.js, Tailwind) quanto em back-end. Implementação de tasks de back-end com NestJS e LangChain para integração com LLMs, incluindo manipulação e estruturação de dados. Trabalho em conjunto com designers, produto e outros desenvolvedores na construção da versão alpha do produto.",
    ifsRole: "Pesquisador e Desenvolvedor", ifsCo: "IFSul · Charqueadas - RS", ifsPeriod: "03/2024 — 2025",
    ifsDesc:
      "Desenvolvimento completo da plataforma Carbonífera Biodiversa com React.js, Node.js, Fastify, PostgreSQL e Tailwind CSS, incluindo modelagem de dados e API back-end. Integração da API do Google Maps para georreferenciamento de espécies e sistema de contribuição comunitária com fluxo de validação por especialistas. 1º lugar na Mocitec 2024 e credenciado para a FEBRACE 2025.",
    tmwRole: "Full Stack Developer", tmwCo: "TMW Telecom · Charqueadas - RS", tmwPeriod: "02/2024 — 09/2024",
    tmwDesc:
      "Desenvolvimento completo do menu do sistema (JS, PHP, CSS, HTML, SQL), resolvendo um problema crítico de permissões de página e esquemas de funções, reorganizando o menu por setores. Integração do Pix como novo meio de pagamento. Manutenção e evolução de módulos ERP com PHP, MySQL e JavaScript.",
    logBoot: "sessão iniciada — bem-vindo", logSection: "seção carregada:", logHover: "arquivo aberto:",
    logLang: "idioma alterado para", logAudio: "ambiente", termHint: "log", on: "ligado", off: "desligado",
    skip: "pular",
  },
  en: {
    navWork: "work", navExp: "experience", navAbout: "about", navContact: "contact",
    hud: "haze 0.62 · stable",
    eyebrow: "portfolio · 2026", role: "full stack developer",
    heroSub:
      "Over 2 years with React and Next.js, plus back-end work in Node.js, NestJS, Fastify, Python (FastAPI) and PostgreSQL. Currently moving into back-end: building a REST API from scratch in Node.js, TypeScript and raw SQL, no ORM.",
    ctaWork: "see work", ctaTalk: "get in touch", scroll: "scroll",
    secWork: "selected work", files: "files", secExp: "experience",
    secAbout: "about", portraitAlt: "Gabriel Silva",
    about1:
      "Developer with over 2 years of experience in React and Next.js, currently moving into back-end.",
    about2:
      "On the server side I work with Node.js, NestJS, Fastify and PostgreSQL. As a deep-dive project I am building a REST API from scratch in Node.js and TypeScript with raw SQL, no ORM — the point is to understand every layer instead of letting the abstraction decide. I also build with Python and FastAPI, and I like shipping AI features on top of LLM APIs, as in DeskPilot. AWS Cloud Practitioner certified.",
    about3:
      "Studying Internet Systems Technology at IFSul. English B2 (Cambridge Linguaskill). Off the clock: cyberpunk, film and games — this portfolio is a bit of that.",
    secContact: "contact", contactLead: "Got a project? Send me a message.", phone: "phone",
    availability: "open to back-end and full stack roles",
    lvlPrimary: "primary", lvlDaily: "daily", lvlSolid: "solid",
    lvlLegacy: "legacy", lvlCert: "certified", lvlStudy: "deepening",
    gFront: "front-end", gBack: "back-end", gData: "data", gInfra: "infra / cloud", rawSql: "Raw SQL",
    maxRole: "Front End Developer", maxCo: "MaxBot · Viçosa - MG (remote)", maxPeriod: "08/2025 — Present",
    maxDesc:
      "Building reusable components with React, Next.js 14, TypeScript and JavaScript, consuming REST APIs from the back-end team. Tailwind CSS, Radix, Shadcn, React-Query, Zustand and Zod for data validation and state management. Working directly with the back-end and product teams in Scrum ceremonies, taking part in decisions about API contracts and data structure.",
    dooRole: "Full Stack Developer", dooCo: "DOOOR · Delaware, USA (remote)", dooPeriod: "03/2025 — 05/2025",
    dooDesc:
      "Full stack development for an AI and Web3 product, working across front-end (Next.js, Tailwind) and back-end. Back-end tasks built with NestJS and LangChain for LLM integration, including data handling and structuring. Worked alongside designers, product and other developers building the product's alpha version.",
    ifsRole: "Researcher and Developer", ifsCo: "IFSul · Charqueadas - RS", ifsPeriod: "03/2024 — 2025",
    ifsDesc:
      "Built the Carbonífera Biodiversa platform end to end with React.js, Node.js, Fastify, PostgreSQL and Tailwind CSS, including data modelling and the back-end API. Google Maps API integration for species georeferencing and a community contribution system with an expert validation flow. 1st place at Mocitec 2024, qualified for FEBRACE 2025.",
    tmwRole: "Full Stack Developer", tmwCo: "TMW Telecom · Charqueadas - RS", tmwPeriod: "02/2024 — 09/2024",
    tmwDesc:
      "Rebuilt the system menu (JS, PHP, CSS, HTML, SQL), fixing a critical page-permission and role-scheme problem and reorganising the menu by department. Integrated Pix as a new payment method. Maintained and evolved ERP modules with PHP, MySQL and JavaScript.",
    logBoot: "session started — welcome", logSection: "section loaded:", logHover: "file opened:",
    logLang: "language switched to", logAudio: "ambient", termHint: "log", on: "on", off: "off",
    skip: "skip",
  },
} as const;

export type Copy = (typeof COPY)[Lang];
