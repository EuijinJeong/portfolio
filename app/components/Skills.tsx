import { skillGroups } from "../data/resume";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <SectionHead
        kicker="02 · Tech Stack"
        title="기술 스택"
        sub="실무에서 사용한 기술을 중심으로 정리했습니다."
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="group h-full rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/50">
              <h3 className="text-sm font-semibold text-foreground">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-muted transition-colors duration-300 group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
