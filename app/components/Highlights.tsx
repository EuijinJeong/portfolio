import { highlights } from "../data/resume";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <SectionHead
        kicker="01 · Core Competency"
        title="핵심 역량"
        sub="확장 가능하게 만들고, 문제를 근본 원인 단위로 해결합니다."
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className="h-full">
            <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/50">
              <span className="font-mono text-xs text-accent">
                0{i + 1}
              </span>
              <h3 className="text-sm font-semibold leading-snug text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
