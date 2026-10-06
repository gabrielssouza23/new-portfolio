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
      <span className="font-mono text-[10px] tracking-[0.2em] text-gold">{num}</span>
      <h2 className="text-xs font-normal uppercase tracking-[0.36em] text-ink">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-ink/13" />
      {meta && (
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/32">{meta}</span>
      )}
    </div>
  );
}
