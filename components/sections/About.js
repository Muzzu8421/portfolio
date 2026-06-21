import { Counter } from "../ui/Counter";
import TextType from "../ui/TextType";

export default function About({ summary, stats }) {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8">
      <div className="reveal">
        <div className="mb-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            About Me
          </p>
          <div className="h-10 sm:h-12 lg:h-14">
            <TextType 
              text={[
                "Full-Stack Developer.", 
                "UI/UX Enthusiast.", 
                "Open-Source Contributor."
              ]}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="●"
              cursorClassName="text-gold"
              startOnVisible={true}
              loop={true}
              className="ff-heading text-3xl font-bold text-bright sm:text-4xl lg:text-5xl"
            />
          </div>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-muted/80 sm:text-lg lg:text-xl lg:leading-[1.6]">
          {summary}
        </p>
      </div>

      <div className="reveal mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-24">
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
  );
}
