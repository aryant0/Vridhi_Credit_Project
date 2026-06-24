export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.78 0.13 80 / 0.35), transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.42 0.08 264 / 0.6), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
