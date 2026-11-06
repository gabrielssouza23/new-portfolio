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
      "Mais de 2 anos de experiência de ponta a ponta: front-end em React, Next.js e TypeScript, back-end em Node.js, NestJS, Fastify e PostgreSQL. Experiência liderando módulos inteiros, de integrações com APIs de terceiros à migração de plataformas legadas.",
    ctaWork: "ver projetos", ctaTalk: "falar comigo", scroll: "rolar",
    projOne: "projeto", projMany: "projetos",
    secWork: "projetos selecionados", files: "arquivos", file: "arquivo", secExp: "experiência",
    demoLabel: "Demonstração do", expand: "ampliar", close: "fechar", viewCode: "ver código",
    secAbout: "sobre", portraitAlt: "Gabriel Silva",
    about1:
      "Desenvolvedor full stack com mais de 2 anos de experiência, do front-end em React e Next.js ao back-end em Node.js, NestJS, Fastify e PostgreSQL.",
    about2:
      "Na MaxBot liderei o módulo de agendamento integrado ao Google Calendar e atuei na migração da plataforma da v4 para a v5 em Next.js. Antes disso, fiz back-end com NestJS e LangChain para um produto de IA nos EUA e construí, no IFSul, uma plataforma de biodiversidade premiada na Mocitec.",
    about3:
      "Fora do trabalho: cyberpunk, cinema e jogos — este portfólio é um pouco disso.",
    eduLabel: "formação", awardsLabel: "certificações e conquistas", langLabel: "idiomas",
    secContact: "contato", contactLead: "Tem um projeto? Me manda uma mensagem.", phone: "telefone",
    availability: "aberto a oportunidades back-end e full stack",
    lvlPrimary: "principal", lvlDaily: "diário", lvlSolid: "sólido",
    lvlLegacy: "legado", lvlCert: "certificado", lvlStudy: "aprofundando",
    gFront: "front-end", gBack: "back-end", gData: "banco de dados", gInfra: "devops / cloud", gOther: "outros",
    maxRole: "Desenvolvedor Full Stack", maxCo: "MaxBot · Viçosa - MG (remoto)", maxPeriod: "08/2025 — Presente",
    maxDesc: [
      "Liderei o módulo de agendamento de eventos (consultas e compromissos), com integração à API do Google Calendar para sincronizar as agendas.",
      "Atuei na migração da plataforma da v4 para a v5 em Next.js, portando telas e componentes legados para a nova arquitetura.",
      "Reconstruí a integração do RBX no chat de atendimento de provedoras de internet, que estava defasada e inoperante, e adicionei actions que reduziram o tempo de resolução por atendimento.",
      "Centralizei todas as integrações da plataforma em uma tela única, simplificando a configuração pelo cliente.",
      "Reformulei a tela de colaboradores e permissões, melhorando a UI e o fluxo de gestão de acessos.",
      "Colaboração direta com back-end e produto em cerimônias Scrum, participando de decisões sobre contrato de API e estrutura de dados.",
    ],
    dooRole: "Desenvolvedor Full Stack", dooCo: "DOOOR · Delaware, EUA (remoto)", dooPeriod: "03/2025 — 05/2025",
    dooDesc: [
      "Desenvolvimento full stack para produto de IA e Web3, atuando tanto em front-end (Next.js, Tailwind) quanto em back-end.",
      "Implementação de tasks de back-end com NestJS e LangChain para integração com LLMs, incluindo manipulação e estruturação de dados.",
      "Trabalho em conjunto com designers, produto e outros desenvolvedores na construção da versão alpha do produto.",
    ],
    ifsRole: "Pesquisador e Desenvolvedor", ifsCo: "IFSul · Charqueadas - RS", ifsPeriod: "03/2024 — 2025",
    ifsDesc: [
      "Desenvolvimento completo da plataforma Carbonífera Biodiversa com React.js, Node.js, Fastify, PostgreSQL e Tailwind CSS, incluindo modelagem de dados e API back-end.",
      "Integração da API do Google Maps para georreferenciamento de espécies e sistema de contribuição comunitária com fluxo de validação por especialistas.",
      "1º lugar na Mocitec 2024 e credenciado para a FEBRACE 2025.",
    ],
    tmwRole: "Full Stack Developer", tmwCo: "TMW Telecom · Charqueadas - RS", tmwPeriod: "02/2024 — 09/2024",
    tmwDesc: [
      "Desenvolvimento completo do menu do sistema (JS, PHP, CSS, HTML, SQL), resolvendo um problema crítico de permissões de página e esquemas de funções e reorganizando o menu por setores.",
      "Integração do Pix como novo meio de pagamento, junto com a equipe de desenvolvimento, disponibilizado para todos os usuários da empresa.",
      "Manutenção e evolução de módulos ERP com PHP, MySQL e JavaScript, com foco em usabilidade e performance.",
    ],
    logBoot: "sessão iniciada — bem-vindo", logSection: "seção carregada:", logHover: "arquivo aberto:",
    logLang: "idioma alterado para", logAudio: "ambiente", termHint: "log", on: "ligado", off: "desligado",
    skip: "pular",
  },
  en: {
    navWork: "work", navExp: "experience", navAbout: "about", navContact: "contact",
    hud: "haze 0.62 · stable",
    eyebrow: "portfolio · 2026", role: "full stack developer",
    heroSub:
      "Over 2 years working end to end: front-end in React, Next.js and TypeScript, back-end in Node.js, NestJS, Fastify and PostgreSQL. Experience leading whole modules, from third-party API integrations to legacy platform migrations.",
    ctaWork: "see work", ctaTalk: "get in touch", scroll: "scroll",
    projOne: "project", projMany: "projects",
    secWork: "selected work", files: "files", file: "file", secExp: "experience",
    demoLabel: "Demo of", expand: "expand", close: "close", viewCode: "view code",
    secAbout: "about", portraitAlt: "Gabriel Silva",
    about1:
      "Full stack developer with over 2 years of experience, from React and Next.js on the front end to Node.js, NestJS, Fastify and PostgreSQL on the back end.",
    about2:
      "At MaxBot I led the scheduling module integrated with Google Calendar and worked on migrating the platform from v4 to v5 in Next.js. Before that, I did back-end work with NestJS and LangChain for an AI product in the US, and at IFSul I built a biodiversity platform that won first place at Mocitec.",
    about3:
      "Off the clock: cyberpunk, film and games — this portfolio is a bit of that.",
    eduLabel: "education", awardsLabel: "certifications & awards", langLabel: "languages",
    secContact: "contact", contactLead: "Got a project? Send me a message.", phone: "phone",
    availability: "open to back-end and full stack roles",
    lvlPrimary: "primary", lvlDaily: "daily", lvlSolid: "solid",
    lvlLegacy: "legacy", lvlCert: "certified", lvlStudy: "deepening",
    gFront: "front-end", gBack: "back-end", gData: "databases", gInfra: "devops / cloud", gOther: "other",
    maxRole: "Full Stack Developer", maxCo: "MaxBot · Viçosa - MG (remote)", maxPeriod: "08/2025 — Present",
    maxDesc: [
      "Led the event scheduling module (appointments and meetings), integrating the Google Calendar API to keep calendars in sync.",
      "Worked on migrating the platform from v4 to v5 in Next.js, porting legacy screens and components to the new architecture.",
      "Rebuilt the RBX integration in the support chat for internet providers, which was outdated and broken, and added actions that cut resolution time per ticket.",
      "Brought every platform integration into a single screen, making setup simpler for customers.",
      "Redesigned the team members and permissions screen, improving the UI and the access management flow.",
      "Worked directly with back-end and product in Scrum ceremonies, taking part in decisions on API contracts and data structure.",
    ],
    dooRole: "Full Stack Developer", dooCo: "DOOOR · Delaware, USA (remote)", dooPeriod: "03/2025 — 05/2025",
    dooDesc: [
      "Full stack development for an AI and Web3 product, working across front-end (Next.js, Tailwind) and back-end.",
      "Back-end tasks built with NestJS and LangChain for LLM integration, including data handling and structuring.",
      "Worked alongside designers, product and other developers building the product's alpha version.",
    ],
    ifsRole: "Researcher and Developer", ifsCo: "IFSul · Charqueadas - RS", ifsPeriod: "03/2024 — 2025",
    ifsDesc: [
      "Built the Carbonífera Biodiversa platform end to end with React.js, Node.js, Fastify, PostgreSQL and Tailwind CSS, including data modelling and the back-end API.",
      "Google Maps API integration for species georeferencing and a community contribution system with an expert validation flow.",
      "1st place at Mocitec 2024, qualified for FEBRACE 2025.",
    ],
    tmwRole: "Full Stack Developer", tmwCo: "TMW Telecom · Charqueadas - RS", tmwPeriod: "02/2024 — 09/2024",
    tmwDesc: [
      "Rebuilt the system menu (JS, PHP, CSS, HTML, SQL), fixing a critical page-permission and role-scheme problem and reorganising the menu by department.",
      "Integrated Pix as a new payment method with the development team, rolled out to every user in the company.",
      "Maintained and evolved ERP modules with PHP, MySQL and JavaScript, focusing on usability and performance.",
    ],
    logBoot: "session started — welcome", logSection: "section loaded:", logHover: "file opened:",
    logLang: "language switched to", logAudio: "ambient", termHint: "log", on: "on", off: "off",
    skip: "skip",
  },
} as const;

export type Copy = (typeof COPY)[Lang];
