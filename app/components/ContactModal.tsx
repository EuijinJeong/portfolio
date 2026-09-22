"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/resume";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const CONTACT_ITEMS = [
  { label: "Email", value: profile.email },
  { label: "GitHub", value: profile.github },
];

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  if (!open) return null;

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 id="contact-modal-title" className="text-base font-medium text-foreground">
            연락처
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="rounded-full p-1 text-muted transition-colors hover:text-accent"
          >
            ✕
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          {CONTACT_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3"
            >
              <div className="min-w-0">
                <p className="text-xs text-muted">{item.label}</p>
                <p className="truncate text-sm text-foreground">{item.value}</p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(item.value)}
                className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {copied === item.value ? "복사됨" : "복사"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
