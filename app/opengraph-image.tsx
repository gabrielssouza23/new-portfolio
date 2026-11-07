import { ImageResponse } from "next/og";

/**
 * Preview de link (LinkedIn, WhatsApp, Slack...). Gerada uma vez no build —
 * não usa nada dinâmico, então vira um PNG estático.
 */
export const alt = "Gabriel Silva · Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0a0908";
const INK = "#E6DED3";
const INK_BRIGHT = "#F4ECE2";
const GOLD = "#E8A24A";

const KICKER = "PORTFOLIO · 2026";
const ROLE = "FULL STACK DEVELOPER";
const STACK = "react · next.js · typescript · node.js · nestjs · postgresql";
const PLACE = "CHARQUEADAS · RS";
const PROMPT = ">";

/** Baixa só os glifos usados (`text=`); sem user-agent o Google devolve TTF, que o Satori lê. */
async function googleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!src) throw new Error(`fonte não encontrada: ${family} ${weight}`);
  return (await fetch(src)).arrayBuffer();
}

export default async function OpengraphImage() {
  const mono = KICKER + ROLE + STACK + PLACE + PROMPT;
  // Sem rede no build, cai na fonte padrão do next/og em vez de quebrar o deploy.
  const fonts = await Promise.all([
    googleFont("Archivo", 300, "GABRIELSILVA"),
    googleFont("JetBrains Mono", 400, mono),
  ])
    .then(([display, code]) => [
      { name: "Archivo", data: display, weight: 300 as const, style: "normal" as const },
      { name: "JetBrains Mono", data: code, weight: 400 as const, style: "normal" as const },
    ])
    .catch(() => undefined);

  const monoText = { fontFamily: "JetBrains Mono", fontSize: 22, letterSpacing: 3 };
  // Satori não entende `inset`: as camadas de fundo precisam de caixa explícita.
  const layer = { position: "absolute", top: 0, left: 0, width: size.width, height: size.height, display: "flex" } as const;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background: BG,
          color: INK,
          position: "relative",
        }}
      >
        {/* brilho âmbar à direita, como a luz da pomba no hero */}
        <div
          style={{
            ...layer,
            backgroundImage: "radial-gradient(circle at 85% 40%, rgba(232,162,74,0.16), rgba(10,9,8,0) 50%)",
          }}
        />
        {/* scanlines do CRT */}
        <div
          style={{
            ...layer,
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(230,222,211,0) 0px, rgba(230,222,211,0) 3px, rgba(230,222,211,0.035) 3px, rgba(230,222,211,0.035) 4px)",
          }}
        />

        {/* topo: o ponto aceso do header + local */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", ...monoText }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: GOLD }}>
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 999,
                background: GOLD,
                boxShadow: "0 0 12px 4px rgba(232,162,74,0.85)",
              }}
            />
            <span>{KICKER}</span>
          </div>
          <span style={{ color: "rgba(230,222,211,0.62)" }}>{PLACE}</span>
        </div>

        {/* nome */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18, ...monoText, fontSize: 24, letterSpacing: 5, color: GOLD }}>
            <div style={{ width: 48, height: 2, background: GOLD }} />
            <span>{ROLE}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Archivo",
              fontWeight: 300,
              fontSize: 172,
              lineHeight: 0.95,
              letterSpacing: -3,
            }}
          >
            <span style={{ color: INK_BRIGHT }}>GABRIEL</span>
            <span style={{ color: GOLD }}>SILVA</span>
          </div>
        </div>

        {/* rodapé: stack + local */}
        <div
          style={{
            display: "flex",
            paddingTop: 22,
            borderTop: "1px solid rgba(230,222,211,0.16)",
            ...monoText,
            fontSize: 22,
            letterSpacing: 1,
            color: "rgba(230,222,211,0.78)",
          }}
        >
          <span style={{ color: GOLD, marginRight: 14 }}>{PROMPT}</span>
          <span>{STACK}</span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
