"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "credentials", label: "Credentials" },
];

function GitHubIcon({ className = "size-5" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.95 10.95 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "size-5" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M5.34 7.84H1.6V20h3.74V7.84ZM3.47 2A2.17 2.17 0 1 0 3.47 6.34 2.17 2.17 0 0 0 3.47 2ZM20.4 13.03c0-3.66-1.95-5.36-4.55-5.36-2.1 0-3.03 1.15-3.55 1.96V7.84H8.57V20h3.73v-6.02c0-1.59.3-3.13 2.28-3.13 1.95 0 1.98 1.82 1.98 3.23V20h3.74l.1-6.97Z" />
    </svg>
  );
}

function MailIcon({ className = "size-5" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ArrowIcon({ className = "size-4" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-6"
    >
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

function SocialLinks({ personalInfo, className }) {
  const linkClass =
    "grid size-10 place-items-center rounded-full border border-slate-700/80 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/70 hover:bg-indigo-500/10 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400";

  return (
    <div className={className}>
      <a
        aria-label="GitHub"
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        <GitHubIcon />
      </a>
      <a
        aria-label="LinkedIn"
        href={personalInfo.linkedin}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        <LinkedInIcon />
      </a>
      <a
        aria-label="Email"
        href={`mailto:${personalInfo.email}`}
        className={linkClass}
      >
        <MailIcon />
      </a>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="mb-3 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.28em] text-orange-400">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function NavLinks({ activeSection, onNavigate, mobile = false }) {
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Main navigation"}>
      <ul className={mobile ? "space-y-2" : "space-y-4"}>
        {navItems.map((item) => {
          const active = activeSection === item.id;

          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`group flex w-full items-center gap-4 py-1 text-left font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active
                    ? "text-slate-100"
                    : "text-slate-500 hover:text-slate-200"
                }`}
              >
                <span
                  className={`h-px bg-indigo-500 transition-all duration-300 ${
                    active ? "w-14" : "w-7 group-hover:w-11"
                  }`}
                />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Modern({ details }) {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0a0f1e] text-slate-300 selection:bg-indigo-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(79,70,229,0.16),transparent_30%),radial-gradient(circle_at_92%_72%,rgba(251,146,60,0.08),transparent_25%)]" />

      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-slate-800/80 bg-[#0a0f1e]/90 px-5 backdrop-blur-xl md:hidden">
        <button
          type="button"
          onClick={() => handleNavigate("about")}
          className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-tight text-slate-100"
        >
          MS<span className="text-orange-400">.</span>
        </button>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="grid size-10 place-items-center rounded-full border border-slate-700 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-[#0a0f1e]/95 px-6 pb-8 pt-28 backdrop-blur-xl transition duration-300 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <NavLinks
          activeSection={activeSection}
          onNavigate={handleNavigate}
          mobile
        />
        <SocialLinks
          personalInfo={personalInfo}
          className="mt-10 flex items-center gap-3"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] md:grid md:grid-cols-[minmax(290px,0.82fr)_minmax(0,1.18fr)] lg:grid-cols-[minmax(390px,0.9fr)_minmax(0,1.1fr)]">
        <aside className="sticky top-0 hidden h-screen flex-col justify-between px-10 py-16 md:flex lg:px-16 lg:py-20">
          <div>
            <button
              type="button"
              onClick={() => handleNavigate("about")}
              className="text-left focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-indigo-400"
            >
              <p className="mb-5 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.28em] text-orange-400">
                Hello, I&apos;m
              </p>
              <h1 className="max-w-md font-[family-name:var(--font-syne)] text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-100 lg:text-6xl">
                {personalInfo.shortName}
                <span className="text-indigo-500">.</span>
              </h1>
              <p className="mt-5 text-lg font-medium text-slate-300">
                {personalInfo.title}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {personalInfo.location}
              </p>
            </button>

            <div className="mt-14">
              <NavLinks
                activeSection={activeSection}
                onNavigate={handleNavigate}
              />
            </div>
          </div>

          <SocialLinks
            personalInfo={personalInfo}
            className="hidden items-center gap-3 md:flex"
          />
        </aside>

        <main className="px-5 pb-20 pt-24 sm:px-8 md:px-10 md:py-20 lg:px-16">
          <section
            id="about"
            className="flex min-h-[calc(100vh-6rem)] scroll-mt-24 flex-col justify-center py-12 md:min-h-screen md:scroll-mt-0 md:py-20"
          >
            <div className="md:hidden">
              <p className="mb-4 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.28em] text-orange-400">
                Hello, I&apos;m
              </p>
              <h1 className="font-[family-name:var(--font-syne)] text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-slate-100 sm:text-6xl">
                {personalInfo.shortName}
                <span className="text-indigo-500">.</span>
              </h1>
              <p className="mt-5 text-lg font-medium text-slate-300">
                {personalInfo.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {personalInfo.location}
              </p>
            </div>

            <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300 sm:text-2xl sm:leading-10 md:mt-0 lg:text-[1.7rem] lg:leading-[1.6]">
              {summary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-[0_16px_40px_-16px_rgba(79,70,229,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
              >
                Let&apos;s work together
                <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-slate-300 transition hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
              >
                View GitHub
                <ArrowIcon />
              </a>
            </div>

            <SocialLinks
              personalInfo={personalInfo}
              className="mt-9 flex items-center gap-3 md:hidden"
            />
          </section>

          <section
            id="experience"
            className="scroll-mt-24 border-t border-slate-800/70 py-24 md:scroll-mt-0 md:py-28"
          >
            <SectionHeading eyebrow="01 / Experience" title="Where I’ve built" />

            <div className="space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="group rounded-2xl border border-slate-800/80 bg-slate-900/25 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-900/60 hover:shadow-[0_24px_70px_-35px_rgba(79,70,229,0.5)] sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-slate-100">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-indigo-400">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <p className="shrink-0 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      {item.period}
                    </p>
                  </div>

                  <ul className="mt-7 space-y-4">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-7 text-slate-400 sm:text-base"
                      >
                        <span className="mt-[0.72rem] size-1.5 shrink-0 rounded-full bg-orange-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="scroll-mt-24 border-t border-slate-800/70 py-24 md:scroll-mt-0 md:py-28"
          >
            <SectionHeading eyebrow="02 / Selected work" title="Things I’ve shipped" />

            <div className="grid gap-6 xl:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/30 p-4 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-slate-900/70 hover:shadow-[0_28px_80px_-42px_rgba(124,58,237,0.8)] sm:p-5"
                >
                  {project.image ? (
                    <div className="overflow-hidden rounded-lg bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="mb-3 h-44 w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="mb-3 flex h-44 items-center justify-center overflow-hidden rounded-lg border border-dashed border-slate-700 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.16),transparent_65%)]">
                      <div className="text-center">
                        <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-slate-700">
                          F<span className="text-indigo-600">.</span>
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-600">
                          In development
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                      {project.kicker}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-syne)] text-2xl font-bold text-slate-100">
                      {project.name}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.7rem] font-medium text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-5 border-t border-slate-800/80 pt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
                      >
                        <GitHubIcon className="size-4" />
                        Code
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
                        >
                          Live site
                          <ArrowIcon />
                        </a>
                      ) : (
                        <span className="text-xs uppercase tracking-[0.14em] text-slate-600">
                          No live URL yet
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className="scroll-mt-24 border-t border-slate-800/70 py-24 md:scroll-mt-0 md:py-28"
          >
            <SectionHeading eyebrow="03 / Capabilities" title="My working toolkit" />

            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([group, items], index) => (
                <article
                  key={group}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/25 p-6 transition duration-300 hover:border-indigo-500/30 hover:bg-slate-900/50"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`size-2 rounded-full ${
                        index % 2 === 0 ? "bg-indigo-500" : "bg-orange-400"
                      }`}
                    />
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-slate-100">
                      {group}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-sm leading-7 text-slate-400"
                      >
                        {item}
                        <span className="ml-3 text-slate-700">/</span>
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="education"
            className="scroll-mt-24 border-t border-slate-800/70 py-24 md:scroll-mt-0 md:py-28"
          >
            <SectionHeading eyebrow="04 / Education" title="The foundation" />

            {education.map((item) => (
              <article
                key={item.institution}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/25 p-6 transition duration-300 hover:border-orange-400/30 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="max-w-2xl font-[family-name:var(--font-syne)] text-xl font-bold leading-8 text-slate-100">
                      {item.degree}
                    </h3>
                    <p className="mt-3 text-indigo-400">{item.institution}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  </div>
                  <p className="shrink-0 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {item.period}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section
            id="credentials"
            className="scroll-mt-24 border-t border-slate-800/70 py-24 md:scroll-mt-0 md:py-28"
          >
            <SectionHeading eyebrow="05 / Credentials" title="Learning in public" />

            <div className="grid gap-4 sm:grid-cols-3">
              {certifications.map((certification) => (
                <article
                  key={certification.name}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-400">
                    {certification.issuer}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-syne)] text-base font-bold leading-6 text-slate-100">
                    {certification.name}
                  </h3>
                </article>
              ))}
            </div>

            <div className="mt-8">
              {achievements.map((achievement) => (
                <a
                  key={achievement.title}
                  href={achievement.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-slate-800/80 bg-gradient-to-br from-violet-600/10 to-transparent p-6 transition duration-300 hover:border-violet-500/40 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-400">
                        {achievement.organization}
                      </p>
                      <h3 className="mt-3 font-[family-name:var(--font-syne)] text-xl font-bold text-slate-100">
                        {achievement.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                        {achievement.description}
                      </p>
                    </div>
                    <ArrowIcon className="mt-1 size-5 shrink-0 text-slate-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <footer className="border-t border-slate-800/70 py-10 text-sm text-slate-500">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>Designed and built by {personalInfo.shortName}.</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-fit text-slate-400 transition hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
              >
                {personalInfo.email}
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
