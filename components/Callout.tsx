export default function Callout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-accent bg-accent-soft/40 px-5 py-4">
      <p className="mb-2 text-sm font-medium text-accent">{label}</p>
      <div className="space-y-2 text-[0.95rem] leading-relaxed text-ink/90">
        {children}
      </div>
    </div>
  );
}
