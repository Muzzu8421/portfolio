import { SERVICES } from "../../lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8">
      <div className="reveal">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          What I Build
        </p>
        <h2 className="ff-heading max-w-xl text-3xl font-bold text-ivory sm:text-4xl">
          Turning ideas into production-ready products
        </h2>
      </div>

      <div className="reveal mt-14 grid gap-5 sm:grid-cols-3">
        {SERVICES.map((svc) => (
          <article
            key={svc.num}
            className="reveal-child group rounded-2xl border border-edge bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-panel-hover hover:shadow-[0_20px_60px_-30px_rgba(255,122,0,0.15)]"
          >
            <span className="ff-heading text-4xl font-bold text-faint transition-colors duration-300 group-hover:text-gold/40">
              {svc.num}
            </span>
            <h3 className="ff-heading mt-4 text-xl font-bold text-ivory">
              {svc.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{svc.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
