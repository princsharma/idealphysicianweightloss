"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { SERVICE_STATES } from "@/lib/constants/service-states";
import { getStatePagePath } from "@/lib/constants/state-routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type HeaderStateSelectProps = {
  variant?: "header" | "drawer";
  onSelect?: () => void;
  className?: string;
};

function PinIcon() {
  return (
    <svg className="mary-header-state__pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={cn("mary-header-state__chevron", open && "is-open")}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function HeaderStateSelect({ variant = "header", onSelect, className }: HeaderStateSelectProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function pick(state: string) {
    setSelected(state);
    setOpen(false);
    onSelect?.();

    const statePage = getStatePagePath(state);
    if (statePage) {
      router.push(statePage);
      return;
    }

    window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
  }

  if (variant === "drawer") {
    return (
      <div className={cn("mary-drawer__states", className)}>
        <p className="mary-drawer__states-label">Select your state</p>
        <div className="mary-drawer__states-grid">
          {SERVICE_STATES.map((state) => (
            <button
              key={state}
              type="button"
              className={cn("mary-drawer__state-opt", selected === state && "is-selected")}
              onClick={() => pick(state)}
            >
              {state}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("mary-header-state", className)} ref={rootRef}>
      <button
        type="button"
        className="mary-header-state__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <PinIcon />
        <span className="mary-header-state__label">{selected ?? "Select state"}</span>
        <ChevronIcon open={open} />
      </button>

      <div className={cn("mary-header-state__menu", open && "is-open")} role="listbox">
        {SERVICE_STATES.map((state) => (
          <button
            key={state}
            type="button"
            role="option"
            aria-selected={selected === state}
            className={cn("mary-header-state__opt", selected === state && "is-selected")}
            onClick={() => pick(state)}
          >
            {state}
          </button>
        ))}
      </div>
    </div>
  );
}
