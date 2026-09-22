"use client";

import { useEffect, useRef, useState } from "react";
import { personalProjects, profile, projects } from "../data/resume";
import Reveal from "./Reveal";

const SLIDE_INTERVAL_MS = 6000;
const FEATURED_PROJECTS = projects.slice(0, 2);

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const slideCount = 3;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideCount);
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideCount);
    }, SLIDE_INTERVAL_MS);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(94,234,212,0.12), transparent 55%), radial-gradient(circle at 85% -5%, rgba(94,234,212,0.08), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid grid-cols-1">
          {/* Slide 1: 소개 */}
          <div
            className="col-start-1 row-start-1 w-full min-w-0 px-5 transition-transform duration-700 ease-out sm:px-8"
            style={{ transform: `translateX(${(0 - slide) * 100}%)` }}
          >
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

          {/* Slide 2: 대표 프로젝트 바로가기 */}
          <div
            className="col-start-1 row-start-1 w-full min-w-0 px-5 transition-transform duration-700 ease-out sm:px-8"
            style={{ transform: `translateX(${(1 - slide) * 100}%)` }}
          >
            <span className="font-mono text-sm text-accent">
              Featured Projects
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-[1.3] tracking-tight sm:text-4xl">
              대표 프로젝트를 살펴보세요
            </h2>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {FEATURED_PROJECTS.map((project) => (
                <a
                  key={project.title}
                  href="#projects"
                  className="flex-1 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
                >
                  <span className="font-mono text-xs text-accent">
                    {project.type}
                  </span>
                  <p className="mt-2 line-clamp-2 text-sm font-medium text-foreground">
                    {project.title}
                  </p>
                  <p className="mt-2 text-xs text-muted">{project.period}</p>
                </a>
              ))}
            </div>
            <a
              href="#projects"
              className="mt-7 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              전체 프로젝트 보기
            </a>
          </div>

          {/* Slide 3: 개인 프로젝트 */}
          <div
            className="col-start-1 row-start-1 w-full min-w-0 px-5 transition-transform duration-700 ease-out sm:px-8"
            style={{ transform: `translateX(${(2 - slide) * 100}%)` }}
          >
            <span className="font-mono text-sm text-accent">
              Personal Project
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-[1.3] tracking-tight sm:text-4xl">
              개인 프로젝트도 있어요
            </h2>
            <div className="mt-7 flex flex-col gap-3">
              {personalProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-medium text-foreground">
                      {project.title}
                    </p>
                    {!project.deployed && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                        배포 예정
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted">{project.period}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    GitHub에서 보기
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-2 px-5 sm:px-8">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`슬라이드 ${i + 1}로 이동`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                slide === i ? "w-6 bg-accent" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
