import { SOCIAL_LINKS } from "../../lib/constants";
import { ArrowIcon } from "../ui/Icons";

export default function ContactSection({ personalInfo }) {
  const socials = SOCIAL_LINKS(personalInfo);

  return (
    <section id="contact" className="scroll-mt-20 py-28">
      <div className="reveal mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Get In Touch
        </p>
        <h2 className="ff-heading text-4xl font-bold leading-tight text-ivory sm:text-5xl lg:text-6xl">
          Let&apos;s build something
          <br />
          together
          <span className="text-gold">.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-muted">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-10 py-4 font-bold text-coal shadow-[0_24px_60px_-20px_rgba(255,122,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-16px_rgba(255,122,0,0.6)]"
        >
          Get in touch
          <ArrowIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div className="mt-10 flex items-center justify-center gap-4">
          {socials.map(({ href, Icon, label, external }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="grid size-12 place-items-center rounded-full border border-edge text-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:text-gold"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
