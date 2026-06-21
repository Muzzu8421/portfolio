/* eslint-disable @next/next/no-img-element */
import { GitHubIcon, ArrowIcon } from "../ui/Icons";

export default function ProjectsSection({ projects }) {
  const withImage = projects.filter((p) => p.image);
  const withoutImage = projects.filter((p) => !p.image);

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8">
      <div className="reveal">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Selected Work
        </p>
        <h2 className="ff-heading text-3xl font-bold text-ivory sm:text-4xl">
          Things I&apos;ve shipped
        </h2>
      </div>

      <div className="mt-14 space-y-5">
        {withImage.slice(0, 1).map((p) => (
          <article
            key={p.name}
            className="reveal group overflow-hidden rounded-2xl border border-edge bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_30px_80px_-40px_rgba(255,122,0,0.12)]"
          >
            <div className="grid md:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-full md:min-h-[340px]"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {p.kicker}
                </p>
                <h3 className="ff-heading mt-3 text-3xl font-bold text-ivory">
                  {p.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-coal px-3 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-gold"
                  >
                    <GitHubIcon className="size-4" /> Code
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-bright"
                    >
                      Live Site <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="grid gap-5 md:grid-cols-2">
          {withImage.slice(1).map((p) => (
            <article
              key={p.name}
              className="reveal group overflow-hidden rounded-2xl border border-edge bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_24px_60px_-30px_rgba(255,122,0,0.12)]"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {p.kicker}
                </p>
                <h3 className="ff-heading mt-2 text-xl font-bold text-ivory">
                  {p.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-coal px-3 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-5 border-t border-edge pt-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-gold"
                  >
                    <GitHubIcon className="size-4" /> Code
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-bright"
                    >
                      Live Site <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {withoutImage.map((p) => (
          <article
            key={p.name}
            className="reveal group overflow-hidden rounded-2xl border border-edge bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
          >
            <div className="grid md:grid-cols-2">
              <div className="flex h-52 items-center justify-center bg-panel-hover md:h-full md:min-h-[300px]">
                <div className="text-center">
                  <p className="ff-heading text-5xl font-bold text-faint">
                    {p.name.charAt(0)}
                    <span className="text-gold/50">.</span>
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-faint">
                    In Development
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {p.kicker}
                </p>
                <h3 className="ff-heading mt-3 text-3xl font-bold text-ivory">
                  {p.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-coal px-3 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-gold"
                  >
                    <GitHubIcon className="size-4" /> Code
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-bright"
                    >
                      Live Site <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
