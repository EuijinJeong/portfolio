import { projects } from "../data/resume";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <SectionHead
        kicker="03 · Projects"
        title="프로젝트"
        sub={`프로젝트 ${
          projects.filter((p) => p.type === "프로젝트").length
        }건 · 유지보수 ${
          projects.filter((p) => p.type === "유지보수").length
        }건`}
      />
      <div className="mt-8 space-y-4">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i * 60, 240)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
