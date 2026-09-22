"use client";

import { useState } from "react";
import type { Project } from "../data/resume";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_12px_30px_-15px_rgba(94,234,212,0.25)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
        aria-expanded={open}
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                project.type === "프로젝트"
                  ? "bg-accent/15 text-accent"
                  : "bg-surface-2 text-muted"
              }`}
            >
              {project.type}
            </span>
            <span className="font-mono text-xs text-muted">{project.period}</span>
          </div>
          <h3 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.role}</p>
        </div>
        <span
          className={`mt-1 shrink-0 text-muted transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div
            className={`space-y-5 border-t border-border px-5 pb-6 pt-5 transition-opacity duration-300 sm:px-6 ${
              open ? "opacity-100 delay-150" : "opacity-0"
            }`}
          >
            <Block label="Situation" text={project.situation} />
            <Block label="Task" text={project.task} />
            <ListBlock label="Action" items={project.actions} />
            <ListBlock label="Result" items={project.results} />
            <div className="flex flex-wrap gap-2 pt-1">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-accent">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-accent">
        {label}
      </p>
      <ul className="mt-1.5 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="text-accent">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
