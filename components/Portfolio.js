"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

/* ================================================================
   Icon Components
   ================================================================ */

function GitHubIcon({ className = "size-5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.95 10.95 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "size-5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M5.34 7.84H1.6V20h3.74V7.84ZM3.47 2A2.17 2.17 0 1 0 3.47 6.34 2.17 2.17 0 0 0 3.47 2ZM20.4 13.03c0-3.66-1.95-5.36-4.55-5.36-2.1 0-3.03 1.15-3.55 1.96V7.84H8.57V20h3.73v-6.02c0-1.59.3-3.13 2.28-3.13 1.95 0 1.98 1.82 1.98 3.23V20h3.74l.1-6.97Z" />
    </svg>
  );
}

function MailIcon({ className = "size-5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ArrowIcon({ className = "size-4" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-6">
      {open ? (
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

function ChevronDown({ className = "size-5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ================================================================
   Constants
   ================================================================ */

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "Building responsive, interactive interfaces with React, Next.js, and React Native that users love to use.",
  },
  {
    num: "02",
    title: "Backend Engineering",
    desc: "Designing scalable APIs, authentication systems, and database architectures with Node.js, Express, and MongoDB.",
  },
  {
    num: "03",
    title: "Full-Stack Products",
    desc: "End-to-end product development from concept to deployment — web apps, mobile apps, admin panels, and more.",
  },
];

const SOCIAL_LINKS = (info) => [
  { href: info.github, Icon: GitHubIcon, label: "GitHub", external: true },
  { href: info.linkedin, Icon: LinkedInIcon, label: "LinkedIn", external: true },
  { href: `mailto:${info.email}`, Icon: MailIcon, label: "Email", external: false },
];

/* ================================================================
   Animated Counter (counts up on scroll into view)
   ================================================================ */

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const dur = 1200;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min((now - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


/* ================================================================
   Hero Animated Background (Vanta.js Dots - Dynamic Import)
   ================================================================ */

const HeroBackground = dynamic(() => import("./HeroBackground"), {
  ssr: false,
});

/* ================================================================
   Main Portfolio Component
   ================================================================ */

export default function Portfolio({ details }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    personalInfo,
    summary,
    experience,
    projects,
    skills,
    education,
    certifications,
    achievements,
  } = details;

  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── Navbar background on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  /* ── Derived data ── */
  const allSkills = Object.values(skills).flat();
  const socials = SOCIAL_LINKS(personalInfo);
  const withImage = projects.filter((p) => p.image);
  const withoutImage = projects.filter((p) => !p.image);

  const stats = [
    { value: projects.length, suffix: "+", label: "Projects Shipped" },
    { value: 14, suffix: "+", label: "Deployments" },
    { value: achievements.length, suffix: "", label: "Open Source PR" },
    { value: certifications.length, suffix: "", label: "Certifications" },
  ];

  /* ────────────────────────────────────────────────────────────── */

  return (
    <div className="relative min-h-screen bg-coal text-muted selection:bg-gold/20 selection:text-ivory">
      {/* Subtle dot-grid texture */}
      <div className="dot-grid pointer-events-none fixed inset-0 z-0" />

      {/* ═══════════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-edge bg-coal/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-[72px] lg:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="ff-heading text-lg font-bold tracking-tight text-ivory"
          >
            {personalInfo.initials}
            <span className="text-gold">.</span>
          </button>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="text-sm text-muted transition-colors duration-200 hover:text-ivory"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="https://drive.google.com/file/d/1n7XNGobhI2pqZnj3ccw3IWUhCRxdE5GC/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-ivory transition-colors hover:text-gold"
            >
              Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-coal transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_24px_rgba(255,122,0,0.3)]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-edge text-ivory md:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-coal/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-6"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="ff-heading text-2xl font-bold text-ivory transition-colors hover:text-gold"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-4 flex flex-col items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1n7XNGobhI2pqZnj3ccw3IWUhCRxdE5GC/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-base font-semibold text-ivory transition-colors hover:text-gold"
            >
              Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-coal"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-16"
      >
        {/* Complex 3D-like fluid background */}
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

          {/* CTAs */}
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

          {/* Socials */}
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

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="size-6 text-faint" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT + STATS
          ═══════════════════════════════════════════════════════ */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8">
        <div className="reveal">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            About Me
          </p>
          <p className="max-w-3xl text-2xl leading-relaxed text-ivory sm:text-3xl lg:text-4xl lg:leading-[1.45]">
            {summary}
          </p>
        </div>

        {/* Stats row */}
        <div className="reveal mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal-child rounded-2xl border border-edge bg-panel p-6 text-center transition-all duration-300 hover:border-gold/30"
            >
              <p className="ff-heading text-4xl font-bold text-ivory lg:text-5xl">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES — What I Build
          ═══════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════
          PROJECTS — Featured Work
          ═══════════════════════════════════════════════════════ */}
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
          {/* ── Row 1: featured full-width card ── */}
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

          {/* ── Row 2: two side-by-side cards ── */}
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

          {/* ── Row 3: projects without image (placeholder) ── */}
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

      {/* ═══════════════════════════════════════════════════════════
          SKILLS — Marquee + Category Cards
          ═══════════════════════════════════════════════════════ */}
      <section id="skills" className="scroll-mt-20 py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              My Toolkit
            </p>
            <h2 className="ff-heading text-3xl font-bold text-ivory sm:text-4xl">
              Technologies I work with
            </h2>
          </div>
        </div>

        {/* Marquee row 1 */}
        <div className="mt-14 overflow-hidden border-y border-edge py-5">
          <div className="marquee flex w-max gap-8">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={`m1-${i}`}
                className="ff-heading whitespace-nowrap text-2xl font-bold text-faint sm:text-3xl"
              >
                {skill}
                <span className="mx-3 text-gold/40">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Marquee row 2 (reversed) */}
        <div className="overflow-hidden border-b border-edge py-5">
          <div className="marquee-reverse flex w-max gap-8">
            {[...allSkills.slice().reverse(), ...allSkills.slice().reverse()].map(
              (skill, i) => (
                <span
                  key={`m2-${i}`}
                  className="ff-heading whitespace-nowrap text-2xl font-bold text-faint sm:text-3xl"
                >
                  {skill}
                  <span className="mx-3 text-gold/40">·</span>
                </span>
              ),
            )}
          </div>
        </div>

        {/* Category cards */}
        <div className="reveal mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {Object.entries(skills).map(([group, items], idx) => (
            <div
              key={group}
              className="reveal-child rounded-2xl border border-edge bg-panel p-6 transition-all duration-300 hover:border-gold/30"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`size-2 rounded-full ${
                    idx % 2 === 0 ? "bg-gold" : "bg-bright"
                  }`}
                />
                <h3 className="ff-heading text-base font-bold text-ivory">{group}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-coal px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXPERIENCE
          ═══════════════════════════════════════════════════════ */}
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
              {/* Timeline dot (visible on lg) */}
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

      {/* ═══════════════════════════════════════════════════════════
          CREDENTIALS — Education · Certifications · Achievements
          ═══════════════════════════════════════════════════════ */}
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

        {/* Bento grid */}
        <div className="reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Education — large card */}
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

          {/* Certifications — small cards */}
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

          {/* Achievement — gradient accent card */}
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

      {/* ═══════════════════════════════════════════════════════════
          CONTACT CTA
          ═══════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════
          FOOTER + WATERMARK
          ═══════════════════════════════════════════════════════ */}
      <footer className="border-t border-edge pb-10 pt-20">
        {/* Giant watermark name */}
        <div className="overflow-hidden px-5">
          <p
            className="ff-heading text-center text-[clamp(3rem,12vw,10rem)] font-bold leading-none tracking-[-0.05em] text-faint/30"
            aria-hidden="true"
          >
            MUZAKKIR
            <span className="text-gold/20">.</span>
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-4 px-5 sm:flex-row sm:justify-between lg:px-8">
          <p className="text-sm text-faint">
            &copy; {new Date().getFullYear()} {personalInfo.shortName}. All
            rights reserved.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-muted transition-colors hover:text-gold"
          >
            {personalInfo.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
