export default function SkillsSection({ skills }) {
  const allSkills = Object.values(skills).flat();

  return (
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
  );
}
