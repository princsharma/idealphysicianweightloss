"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <>
      <header className={`mary-header${scrolled ? " is-scrolled" : ""}`} id="header">
        <div className="mary-header__pill">
          <Link href="/" className="mary-logo" aria-label={siteConfig.name}>
            <svg className="mary-logo__icon" viewBox="0 0 48 48" fill="none" aria-hidden>
              <path d="M24 43C24 43 7 28.5 7 17.5C7 11 11.5 6.5 18 6.5C20.8 6.5 23.2 8.3 24 11C24.8 8.3 27.2 6.5 30 6.5C36.5 6.5 41 11 41 17.5C41 28.5 24 43 24 43Z" fill="#98c54e" />
              <path d="M24 39C24 39 11 27 11 17.8C11 13.4 14.4 10 18.8 10C21.2 10 23.3 11.6 24 13.9C24.7 11.6 26.8 10 29.2 10C33.6 10 37 13.4 37 17.8C37 27 24 39 24 39Z" fill="#1f6838" />
            </svg>
            <span className="mary-logo__word">
              <b>Ideal</b>
              <i>Physician</i>
            </span>
          </Link>

          <nav className="mary-header__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="mary-header__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mary-header__cta">
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="mary-header__phone">
              {siteConfig.contact.phone}
            </a>
            <a href="#start" className="mary-btn--lime mary-btn--sm">
              Get Started
            </a>
          </div>

          <button
            type="button"
            className={`mary-burger${drawerOpen ? " is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mary-drawer${drawerOpen ? " is-open" : ""}`} id="drawer">
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mary-drawer__link" onClick={closeDrawer}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#start" className="mary-btn--lime mary-drawer__cta" onClick={closeDrawer}>
          Start My Evaluation
        </a>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
          className="mary-drawer__phone"
          onClick={closeDrawer}
        >
          Call {siteConfig.contact.phone}
        </a>
      </div>
    </>
  );
}
