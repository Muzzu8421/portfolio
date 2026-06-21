import { ArrowIcon } from "../ui/Icons";

export default function CredentialsSection({ education, certifications, achievements }) {
  return (
    <section
      id="credentials"
      className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8"
    >
      <div className="reveal">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Credentials
        </p>
        <h2 className="ff-heading text-3xl font-bold text-ivory sm:text-4xl">
          Education &amp; achievements
        </h2>
      </div>

      <div className="reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item) => (
          <div
            key={item.institution}
            className="reveal-child rounded-2xl border border-edge bg-panel p-7 transition-all duration-300 hover:border-gold/30 sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bright">
              Education
            </p>
            <h3 className="ff-heading mt-4 text-2xl font-bold leading-snug text-ivory">
              {item.degree}
            </h3>
            <p className="mt-3 text-gold">{item.institution}</p>
            <p className="mt-1 text-sm text-muted">{item.location}</p>
            <p className="mt-6 w-fit rounded-full bg-bright/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-bright">
              {item.period}
            </p>
          </div>
        ))}

        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="reveal-child rounded-2xl border border-edge bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              {cert.issuer}
            </p>
            <h3 className="ff-heading mt-3 text-base font-bold leading-snug text-ivory">
              {cert.name}
            </h3>
          </div>
        ))}

        {achievements.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="reveal-child group rounded-2xl border border-edge bg-gradient-to-br from-gold/[0.08] to-transparent p-7 transition-all duration-300 hover:border-gold/40 sm:col-span-2 lg:col-span-3"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                  {item.organization}
                </p>
                <h3 className="ff-heading mt-3 text-xl font-bold text-ivory">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
              <ArrowIcon className="mt-1 size-5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
