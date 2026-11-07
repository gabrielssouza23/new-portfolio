/**
 * URL pública do site. Na Vercel, VERCEL_PROJECT_PRODUCTION_URL vem preenchida
 * no build e no runtime com o domínio de produção (o .vercel.app, ou o domínio
 * próprio se um for configurado depois). Fora da Vercel, cai em localhost.
 */
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = host ? `https://${host}` : "http://localhost:3000";

export const SITE_TITLE = "Gabriel Silva · Full Stack Developer";
export const SITE_DESCRIPTION =
  "Full stack developer from Brazil working with React, Next.js, TypeScript, Node.js, NestJS and PostgreSQL.";
