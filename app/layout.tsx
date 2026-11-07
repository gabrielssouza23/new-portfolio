// app/layout.tsx
import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  // Archivo é fonte variável (wght 100-900): sem `weight`, o next/font carrega o
  // arquivo variável, o que faz pesos arbitrários como font-[150] funcionarem.
  variable: "--font-archivo",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
});

// A imagem de preview (og:image) vem de app/opengraph-image.tsx e o ícone de
// app/icon.svg: o Next injeta as tags sozinho a partir desses arquivos.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Gabriel Silva",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "pt_BR",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body >{children}</body>
    </html>
  );
}