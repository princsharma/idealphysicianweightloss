"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#for-you", label: "For you" },
  { href: "#about", label: "Our approach" },
  { href: "#treatments", label: "Treatments" },
  { href: "#path", label: "Your path" },
  { href: "#stories", label: "Stories" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
] as const;

type NavHref = (typeof LINKS)[number]["href"];

function getActiveSection(): NavHref {
  const marker = window.scrollY + window.innerHeight * 0.32;

  let active: NavHref = LINKS[0].href;
  for (const link of LINKS) {
    const section = document.querySelector<HTMLElement>(link.href);
    if (section && section.offsetTop <= marker) {
      active = link.href;
    }
  }
  return active;
}

export function StateLocalNav() {
  const [active, setActive] = useState<NavHref>(LINKS[0].href);

  useEffect(() => {
    const onScroll = () => setActive(getActiveSection());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="state-local-nav" aria-label="Page sections">
      <ul className="state-local-nav__list">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn("state-local-nav__link", active === link.href && "is-active")}
              onClick={() => setActive(link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
