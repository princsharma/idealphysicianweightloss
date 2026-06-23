"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { medicationNavItems } from "@/lib/constants/medications";
import { cn } from "@/lib/utils";

type HeaderMedicationsNavProps = {
  variant?: "header" | "drawer";
  onSelect?: () => void;
  className?: string;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={cn("mary-header-meds__chevron", open && "is-open")}
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

export function HeaderMedicationsNav({
  variant = "header",
  onSelect,
  className,
}: HeaderMedicationsNavProps) {
  const [open, setOpen] = useState(false);
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

  function close() {
    setOpen(false);
    onSelect?.();
  }

  if (variant === "drawer") {
    return (
      <div className={cn("mary-drawer__meds", className)}>
        <p className="mary-drawer__meds-label">GLP-1</p>
        <div className="mary-drawer__meds-list">
          {medicationNavItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="mary-drawer__meds-link"
              onClick={close}
            >
              <span className="mary-drawer__meds-name">{item.label}</span>
              <span className="mary-drawer__meds-sub">{item.subtitle}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("mary-header-meds", className)} ref={rootRef}>
      <button
        type="button"
        className="mary-header-meds__trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        GLP-1
        <ChevronIcon open={open} />
      </button>

      <div className={cn("mary-header-meds__menu", open && "is-open")} role="menu">
        {medicationNavItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            role="menuitem"
            className="mary-header-meds__opt"
            onClick={() => setOpen(false)}
          >
            <span className="mary-header-meds__name">{item.label}</span>
            <span className="mary-header-meds__sub">{item.subtitle}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
