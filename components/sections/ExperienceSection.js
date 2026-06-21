export default function ExperienceSection({ experience }) {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8"
    >
      <div className="reveal">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Experience
        </p>
        <h2 className="ff-heading text-3xl font-bold text-ivory sm:text-4xl">
          Where I&apos;ve built
        </h2>
      </div>

      <div className="mt-14 space-y-6">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="reveal group relative rounded-2xl border border-edge bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_60px_-30px_rgba(255,122,0,0.12)] sm:p-10"
          >
            <div className="absolute -left-3 top-10 hidden size-5 items-center justify-center rounded-full border-2 border-gold bg-coal lg:flex">
              <span className="size-2 rounded-full bg-gold" />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="ff-heading text-xl font-bold text-ivory sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-gold">
                  {item.company} · {item.location}
                </p>
              </div>
              <p className="w-fit shrink-0 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gold">
                {item.period}
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm leading-7 text-muted"
                >
                  <span className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-gold" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
