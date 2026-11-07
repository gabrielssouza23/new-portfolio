import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// Deploys de preview da Vercel já saem com X-Robots-Tag: noindex; isto vale
// só para o domínio de produção.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
