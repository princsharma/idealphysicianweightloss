"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AlertCircle,
  Calendar,
  ChevronRight,
  Info,
  Mail,
  Menu,
  Phone,
  Shield,
  X,
} from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { privacyContent, type PrivacyBlock } from "@/lib/constants/privacy-content";
import { cn } from "@/lib/utils";

function BlockRenderer({ block }: { block: PrivacyBlock }) {
  if (block.type === "paragraph") {
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

  if (block.type === "callout") {
    const Icon =
      block.variant === "info" ? Info : block.variant === "contact" ? Mail : AlertCircle;

    return (
      <aside
        className={cn(
          "privacy-callout",
          block.variant === "info" && "privacy-callout--info",
          block.variant === "notice" && "privacy-callout--notice",
          block.variant === "contact" && "privacy-callout--contact",
        )}
      >
        <span className="privacy-callout__icon" aria-hidden>
          <Icon className="size-5" />
        </span>
        <div>
          {"title" in block && block.title ? (
            <p className="privacy-callout__title">{block.title}</p>
          ) : null}
          <p className="privacy-callout__text">{block.text}</p>
        </div>
      </aside>
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

export function PrivacyPolicyDocument() {
  const { sections } = privacyContent;
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(false);

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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      setTocOpen(false);
    }
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
        aria-controls="privacy-toc-drawer"
      >
        {tocOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        <span>{tocOpen ? "Close" : "Contents"}</span>
      </button>

      <div className={cn("privacy-toc-drawer", tocOpen && "is-open")} id="privacy-toc-drawer">
        <div className="privacy-toc-drawer__panel">
          <p className="privacy-toc__label">On this page</p>
          <nav aria-label="Privacy policy sections">
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
          <nav aria-label="Privacy policy sections">
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
          {sections.map((section, index) => (
            <Reveal key={section.id} direction="up" distance={20} delay={index * 0.03}>
              <article id={section.id} className="privacy-section-card scroll-mt-32">
                <header className="privacy-section-card__header">
                  <span className="privacy-section-card__num" aria-hidden>
                    {String(section.number).padStart(2, "0")}
                  </span>
                  <h2 className="privacy-section-card__title">{section.title}</h2>
                </header>
                <div className="privacy-prose">
                  {section.blocks.map((block, blockIndex) => (
                    <BlockRenderer key={`${section.id}-${blockIndex}`} block={block} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

export function PrivacyHero() {
  const { hero, lastUpdated } = privacyContent;

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

export function PrivacyContactBand() {
  const contactSection = privacyContent.sections.find((s) => s.id === "contact-us");
  const contactBlock = contactSection?.blocks.find((b) => b.type === "contact");

  if (!contactBlock || contactBlock.type !== "contact") return null;

  return (
    <section className="privacy-contact-band">
      <SectionContainer>
        <Reveal direction="up" distance={24}>
          <div className="privacy-contact-band__inner">
            <div>
              <p className="privacy-contact-band__eyebrow">Questions about your privacy?</p>
              <h2 className="privacy-contact-band__title">We&apos;re here to help</h2>
              <p className="privacy-contact-band__desc">
                Reach our team for privacy requests, data access, or any concerns about how your
                information is handled.
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
