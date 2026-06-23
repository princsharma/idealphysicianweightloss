"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Mail,
  Menu,
  Phone,
  Shield,
  X,
} from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { termsContent, type TermsBlock } from "@/lib/constants/terms-content";
import { cn } from "@/lib/utils";

function BlockRenderer({ block }: { block: TermsBlock }) {
  if (block.type === "paragraph") {
    const text = block.text;
    if (text.includes("Privacy Policy")) {
      const parts = text.split(/(Privacy Policy)/);
      return (
        <p className="privacy-prose__p">
          {parts.map((part, i) =>
            part === "Privacy Policy" ? (
              <Link key={i} href="/privacy" className="privacy-prose__link">
                Privacy Policy
              </Link>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
      );
    }
    return <p className="privacy-prose__p">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="privacy-prose__list">
        {block.items.map((item) => (
          <li key={item.slice(0, 48)}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "contact") {
    return (
      <div className="privacy-contact-card">
        <div className="privacy-contact-card__icon" aria-hidden>
          <Shield className="size-6" />
        </div>
        <div>
          <p className="privacy-contact-card__org">{block.organization}</p>
          <a href={`mailto:${block.email}`} className="privacy-contact-card__link">
            <Mail className="size-4 shrink-0" aria-hidden />
            {block.email}
          </a>
          <a
            href={`tel:${block.phone.replace(/\D/g, "")}`}
            className="privacy-contact-card__link"
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            {block.phone}
          </a>
        </div>
      </div>
    );
  }

  return null;
}

function TermsSectionCard({
  section,
  isOpen,
  onToggle,
}: {
  section: (typeof termsContent.sections)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `terms-panel-${section.id}`;
  const triggerId = `terms-trigger-${section.id}`;

  return (
    <article
      id={section.id}
      className={cn(
        "privacy-section-card privacy-section-card--accordion scroll-mt-32",
        isOpen && "is-open",
      )}
    >
      <button
        type="button"
        id={triggerId}
        className="privacy-section-card__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="privacy-section-card__num" aria-hidden>
          {String(section.number).padStart(2, "0")}
        </span>
        <h2 className="privacy-section-card__title">{section.title}</h2>
        <ChevronDown
          className={cn("privacy-section-card__chevron size-5", isOpen && "is-open")}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn("privacy-section-card__panel", isOpen && "is-open")}
      >
        <div className="privacy-section-card__panel-inner">
          <div className="privacy-prose">
            {section.blocks.map((block, blockIndex) => (
              <BlockRenderer key={`${section.id}-${blockIndex}`} block={block} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function TermsDocument() {
  const { sections } = termsContent;
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set([sections[0]?.id ?? ""]),
  );

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = useCallback((id: string) => {
    setExpandedIds((prev) => new Set(prev).add(id));
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      setTocOpen(false);
    }
  }, []);

  const toggleSection = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return (
    <>
      <div
        className="privacy-progress"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div className="privacy-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <button
        type="button"
        className="privacy-toc-toggle"
        onClick={() => setTocOpen((open) => !open)}
        aria-expanded={tocOpen}
        aria-controls="terms-toc-drawer"
      >
        {tocOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        <span>{tocOpen ? "Close" : "Contents"}</span>
      </button>

      <div className={cn("privacy-toc-drawer", tocOpen && "is-open")} id="terms-toc-drawer">
        <div className="privacy-toc-drawer__panel">
          <p className="privacy-toc__label">On this page</p>
          <nav aria-label="Terms sections">
            <ol className="privacy-toc__list">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={cn("privacy-toc__link", activeId === section.id && "is-active")}
                    onClick={() => scrollToSection(section.id)}
                    aria-current={activeId === section.id ? "true" : undefined}
                  >
                    <span className="privacy-toc__num">{section.number}</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <div className="privacy-layout">
        <aside className="privacy-sidebar" aria-label="Table of contents">
          <p className="privacy-toc__label">On this page</p>
          <nav aria-label="Terms sections">
            <ol className="privacy-toc__list">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={cn("privacy-toc__link", activeId === section.id && "is-active")}
                    onClick={() => scrollToSection(section.id)}
                    aria-current={activeId === section.id ? "true" : undefined}
                  >
                    <span className="privacy-toc__num">{section.number}</span>
                    {section.title}
                    <ChevronRight className="privacy-toc__chevron size-4" aria-hidden />
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="privacy-content">
          {sections.map((section) => (
            <TermsSectionCard
              key={section.id}
              section={section}
              isOpen={expandedIds.has(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function TermsHero() {
  const { hero, lastUpdated } = termsContent;

  return (
    <section className="privacy-hero noise">
      <SectionContainer>
        <Reveal direction="up" distance={28}>
          <div className="privacy-hero__inner">
            <span className="privacy-badge">
              <Calendar className="size-3.5" aria-hidden />
              Last updated {lastUpdated}
            </span>
            <h1 className="privacy-hero__title">{hero.title}</h1>
            <p className="privacy-hero__intro">{hero.intro}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}

export function TermsContactBand() {
  const contactSection = termsContent.sections.find((s) => s.id === "contact-us");
  const contactBlock = contactSection?.blocks.find((b) => b.type === "contact");

  if (!contactBlock || contactBlock.type !== "contact") return null;

  return (
    <section className="privacy-contact-band">
      <SectionContainer>
        <Reveal direction="up" distance={24}>
          <div className="privacy-contact-band__inner">
            <div>
              <p className="privacy-contact-band__eyebrow">Questions about these terms?</p>
              <h2 className="privacy-contact-band__title">Contact our team</h2>
              <p className="privacy-contact-band__desc">
                Reach us for questions about your account, billing, services, or these Terms &
                Conditions.
              </p>
            </div>
            <div className="privacy-contact-band__actions">
              <a href={`mailto:${contactBlock.email}`} className="privacy-contact-band__btn">
                <Mail className="size-4" aria-hidden />
                {contactBlock.email}
              </a>
              <a
                href={`tel:${contactBlock.phone.replace(/\D/g, "")}`}
                className="privacy-contact-band__btn privacy-contact-band__btn--outline"
              >
                <Phone className="size-4" aria-hidden />
                {contactBlock.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
