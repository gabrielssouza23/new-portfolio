// app/layout.tsx
import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Gabriel Silva · Full Stack Developer",
  description:
    "Full stack developer from Brazil working with React, Next.js, TypeScript, Node.js, Python and PostgreSQL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body >{children}</body>
    </html>
  );
}