import { profile } from "../data/resume";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(94,234,212,0.16), transparent 45%), radial-gradient(circle at 80% 0%, rgba(94,234,212,0.10), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
        <Reveal>
          <span className="font-mono text-sm text-accent">
            {profile.role}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 text-3xl font-bold leading-[1.3] tracking-tight sm:text-5xl">
            {profile.greeting}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl">
            {profile.philosophy}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {profile.summary}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              프로젝트 보기
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
