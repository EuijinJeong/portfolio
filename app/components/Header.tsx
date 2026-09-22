"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/resume";
import ContactModal from "./ContactModal";

const NAV_ITEMS = [
  { href: "#top", label: "소개" },
  { href: "#skills", label: "기술 스택" },
  { href: "#projects", label: "프로젝트" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm text-foreground">
          {profile.name}
          <span className="text-accent">.</span>dev
        </a>
        <nav className="hidden gap-6 text-sm text-muted sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          연락하기
        </button>
        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="hidden rounded-full border border-border px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent sm:block"
        >
          연락하기
        </button>
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}
