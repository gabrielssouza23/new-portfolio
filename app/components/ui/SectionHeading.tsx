/** Cabeçalho de seção: número, título, régua e um contador opcional. */
export default function SectionHeading({
  num,
  title,
  meta,
}: {
  num: string;
  title: string;
  meta?: string;
}) {
  return (
    <div className="mb-11 flex items-baseline gap-4.5">
      <span className="font-mono text-[11px] tracking-[0.2em] text-gold">{num}</span>
      <h2 className="text-[13px] font-medium uppercase tracking-[0.3em] text-ink-bright">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-ink/15" />
      {meta && (
        <span className="font-mono text-[11px] tracking-[0.16em] text-ink/58">{meta}</span>
      )}
    </div>
  );
}
