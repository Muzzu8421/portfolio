export default function Footer({ personalInfo }) {
  return (
    <footer className="border-t border-edge pb-10 pt-20">
      <div className="overflow-hidden px-5">
        <p
          className="ff-heading text-center text-[clamp(3rem,12vw,10rem)] font-bold leading-none tracking-[-0.05em] text-faint/30"
          aria-hidden="true"
        >
          {personalInfo.shortName.toUpperCase()}
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
  );
}
