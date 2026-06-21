import HeroBackground from "../HeroBackground";
import { ArrowIcon, GitHubIcon, ChevronDown } from "../ui/Icons";
import { SOCIAL_LINKS } from "../../lib/constants";

export default function Hero({ personalInfo }) {
  const socials = SOCIAL_LINKS(personalInfo);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-16"
    >
      <HeroBackground />

      <div className="relative z-10 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gold">
          Hello, I&apos;m
        </p>

        <h1 className="ff-heading text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-ivory sm:text-7xl lg:text-8xl xl:text-9xl">
          {personalInfo.shortName}
          <span className="text-gold">.</span>
        </h1>

        <p className="mt-6 text-xl font-medium text-ivory sm:text-2xl">
          {personalInfo.title}
        </p>
        <p className="mt-2 text-sm text-muted">{personalInfo.location}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-coal shadow-[0_20px_50px_-20px_rgba(255,122,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-16px_rgba(255,122,0,0.7)]"
          >
            Let&apos;s work together
            <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://drive.google.com/file/d/1n7XNGobhI2pqZnj3ccw3IWUhCRxdE5GC/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-edge px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold/40 hover:text-gold"
          >
            Resume
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-edge px-6 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold/40 hover:text-gold"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          {socials.map(({ href, Icon, label, external }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="grid size-11 place-items-center rounded-full border border-edge text-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:text-gold"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce-ease">
        <ChevronDown className="size-6 text-faint" />
      </div>
    </section>
  );
}
