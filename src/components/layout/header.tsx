"use client";

import { useEffect, useState } from "react";

import { HeaderMedicationsNav } from "@/components/layout/header-medications-nav";
import { Logo } from "@/components/layout/logo";
import { HeaderStateSelect } from "@/components/layout/header-state-select";
import { siteConfig } from "@/config/site";

const navLinksBeforeGlp = [
  { label: "How It Works", href: "/weight-loss/how-it-works" },
  { label: "Pricing", href: "/weight-loss/pricing" },
];

const navLinksAfterGlp = [
  { label: "Weight Loss", href: "/weight-loss" },
  { label: "FAQ", href: "/weight-loss/faq" },
  { label: "About", href: "/about" },
];

const bookingLinkProps = {
  href: siteConfig.bookingUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

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
          <Logo priority />

          <nav className="mary-header__nav" aria-label="Primary">
            <HeaderMedicationsNav />
            {navLinksBeforeGlp.map((link) => (
              <a key={link.href} href={link.href} className="mary-header__link">
                {link.label}
              </a>
            ))}
            {navLinksAfterGlp.map((link) => (
              <a key={link.href} href={link.href} className="mary-header__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mary-header__cta">
            <HeaderStateSelect />
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="mary-header__phone">
              {siteConfig.contact.phone}
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
        <div className="mary-drawer__scroll">
          <HeaderMedicationsNav variant="drawer" onSelect={closeDrawer} />
          <nav className="flex flex-col">
            {navLinksBeforeGlp.map((link) => (
              <a key={link.href} href={link.href} className="mary-drawer__link" onClick={closeDrawer}>
                {link.label}
              </a>
            ))}
            {navLinksAfterGlp.map((link) => (
              <a key={link.href} href={link.href} className="mary-drawer__link" onClick={closeDrawer}>
                {link.label}
              </a>
            ))}
          </nav>
          <HeaderStateSelect variant="drawer" onSelect={closeDrawer} />
          <a {...bookingLinkProps} className="mary-btn--lime mary-drawer__cta" onClick={closeDrawer}>
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
      </div>
    </>
  );
}
