/**
 * Pomba do hero — homenagem ao pôster do Blade Runner.
 *
 * Desenho autoral: silhueta chapada, penas como paths separados (os vãos são
 * transparentes de verdade, então o gradiente do fundo passa por eles). Bico em
 * gold da paleta no lugar do vermelho do pôster.
 *
 * SVG inline em vez de <img> pra escalar sem serrilhado e herdar as cores do
 * tema. Server Component: nenhum JS vai pro cliente.
 */
export default function HeroDove() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 512 448"
      fill="none"
      className="absolute inset-0 h-full w-full"
    >
      <g fill="#F4ECE2">
        {/* asa de trás — sobe pra direita, atrás do corpo */}
        <path d="M355.3,217.3Q366.2,138.6 376.5,59.8Q373.4,54 368,57.6Q327.3,128.9 316.9,207.7Z" />
        <path d="M363.8,229.1Q389.7,161.5 414.9,93.5Q413.4,87.8 407.8,89.9Q357.3,145 331.7,212.7Z" />
        <path d="M368.8,237Q392.4,194.8 414.2,151.3Q413.6,146.3 408.7,147.3Q367.4,176.6 344,219Z" />

        {/* corpo: elipse girada no eixo cabeça→cauda + cabeça, sobrepostas */}
        <ellipse cx="348" cy="246" rx="112" ry="54" transform="rotate(-33 348 246)" />
        <circle cx="418" cy="184" r="37" />

        {/* cauda — leque atrás do corpo */}
        <path d="M265.3,281.3Q199.3,335 143.8,400.4Q145.5,406.7 151.6,409.1Q215.1,352.6 281,298.7Z" />
        <path d="M257.3,284.6Q177.5,332.4 106.1,393.3Q107.1,401.2 113.9,405.3Q193.3,356.9 273,308.7Z" />
        <path d="M251.4,288.4Q161.7,322.8 78.3,372Q77.8,380.5 84.3,386.1Q173.8,351.3 263.3,316.5Z" />
        <path d="M249.4,292.4Q160.2,310.6 74,341.9Q72.2,349.7 77.3,356Q166.8,339 255.9,320.5Z" />
        <path d="M249.3,297Q170.3,298.9 91.9,313Q89.1,319.4 92.5,325.6Q171.6,324.3 250.6,322.2Z" />

        {/* coverts: costura a base das penas no ombro */}
        <path d="M262,172 C306,180 342,200 368,232 C356,258 322,262 294,248 C268,234 252,198 256,176 Z" />

        {/* asa da frente — a dominante, varre pra cima-esquerda */}
        <path d="M363.5,207.3Q292.5,171.4 209,169.8Q203,172.3 206,178.1Q278.8,209.1 350,244.5Z" />
        <path d="M348.9,196.9Q280.4,139.3 191,112.7Q184.2,113.6 185.9,120.3Q257,174 325.7,231.3Z" />
        <path d="M333.8,187.9Q275.9,110.9 191.1,58.1Q184,57.4 184,64.5Q243.4,140.2 301.7,216.8Z" />
        <path d="M317.3,182.2Q280.2,96.6 213.7,26.6Q207.3,24.3 205.6,30.9Q243.3,116.2 280.8,201.6Z" />
        <path d="M299.4,178.9Q285.8,97.8 243.4,23.9Q238.2,20.4 235.2,25.9Q248.7,107 262.7,188.1Z" />
        <path d="M281,178Q286.4,111 266.6,44Q263,40 259.4,44Q253.6,111 248.6,178Z" />
      </g>

      <path d="M450,179 L488,189 L449,198 Z" fill="#E8A24A" />
      <circle cx="432" cy="175" r="4.4" fill="#0A0908" />
    </svg>
  );
}
