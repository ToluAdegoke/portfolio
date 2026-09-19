import Reveal from "@/components/Reveal";

export default function CaseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="case-reveal">
    <section className="grid grid-cols-1 gap-6 py-12 md:grid-cols-[88px_1fr] md:gap-10">
      <div className="flex items-start gap-3 md:block">
        <span className="font-display text-2xl text-ink-soft/70">
          {index}
        </span>
        <h2 className="font-display text-2xl leading-tight md:hidden">
          {title}
        </h2>
      </div>
      <div>
        <h2 className="mb-4 hidden font-display text-2xl leading-tight md:block">
          {title}
        </h2>
        <div className="max-w-[62ch] space-y-4 text-[1.05rem] leading-relaxed text-ink/90">
          {children}
        </div>
      </div>
    </section>
    </Reveal>
  );
}
