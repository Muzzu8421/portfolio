"use client";

import { useState, useEffect } from "react";
import { MenuIcon } from "../ui/Icons";
import { NAV_ITEMS } from "../../lib/constants";

export default function Navbar({ personalInfo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-edge bg-coal/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-[72px] lg:px-8">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="ff-heading text-lg font-bold tracking-tight text-ivory"
          >
            {personalInfo.initials}
            <span className="text-gold">.</span>
          </button>

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
    </>
  );
}
