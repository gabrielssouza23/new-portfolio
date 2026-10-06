/**
 * Overlay de CRT: scanlines imóveis + uma banda de varredura descendo em loop.
 *
 * Preenche o elemento posicionado mais próximo (`absolute inset-0`), então quem
 * usa precisa ser `relative`. É CSS puro, logo continua Server Component —
 * nenhum JS vai pro cliente. `pointer-events-none` garante que nada aqui rouba
 * clique, e `motion-reduce:hidden` desliga a varredura pra quem pediu menos
 * animação (as scanlines estáticas continuam).
 */
export default function CrtOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
    >
      {/* Scanlines: 1px de linha a cada 3px */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.3)_0px,rgba(0,0,0,0.3)_1px,transparent_1px,transparent_3px)]" />

      {/* Varredura: altura e deslocamento em %, então acompanha qualquer altura
          do container. Só transform anima, então fica no compositor. */}
      <div className="absolute inset-x-0 top-0 h-[40%] animate-crt-sweep will-change-transform motion-reduce:hidden bg-[linear-gradient(to_bottom,transparent,rgba(244,236,226,0.035)_42%,rgba(244,236,226,0.06)_52%,transparent)]" />
    </div>
  );
}
