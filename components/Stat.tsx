export default function Stat({
  value,
  label,
  approx,
}: {
  value: string;
  label: string;
  approx?: boolean;
}) {
  return (
    <div className="border-t border-line pt-3">
      <p className="font-display text-3xl leading-none">
        {approx && <span className="mr-1 text-xl text-ink-soft">~</span>}
        {value}
      </p>
      <p className="mt-2 text-sm text-ink-soft">{label}</p>
    </div>
  );
}
