import { profile } from "../data/resume";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Footer() {
  return (
    <footer id="contact" className="mt-auto border-t border-border">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHead
          kicker="04 · Contact"
          title="연락처"
          sub="새로운 기회나 협업 제안은 언제든 환영합니다."
        />
        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub
            </a>
          </div>
        </Reveal>
        <p className="mt-14 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
