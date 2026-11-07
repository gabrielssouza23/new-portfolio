import { ImageResponse } from "next/og";

// Mesmo glifo do app/icon.svg (prompt "›_"), em PNG 180x180 para iOS.
// Sem cantos arredondados: o iOS aplica a própria máscara.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0a0908" }}>
        <svg width="180" height="180" viewBox="0 0 32 32">
          <path d="M8.5 9.5 15 16l-6.5 6.5" fill="none" stroke="#E8A24A" strokeWidth="3" strokeLinecap="square" />
          <rect x="17" y="20" width="7.5" height="3" fill="#E8A24A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
