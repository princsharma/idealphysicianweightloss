"use client";

import {
  ArrowUpRight,
  ChevronDown,
  ClipboardList,
  Pill,
  Receipt,
  Search,
  Shield,
  UserCheck,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { LinkButton } from "@/components/ui/link-button";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import {
  faqPageContent,
  getAllFaqItems,
  getPopularFaqItems,
  type FaqCategory,
} from "@/lib/constants/faq-page-content";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "clipboard-list": ClipboardList,
  pill: Pill,
  receipt: Receipt,
  shield: Shield,
  "user-check": UserCheck,
};

function FaqAccordion({
  items,
  openId,
  setOpenId,
  theme = "light",
}: {
  items: readonly { id: string; question: string; answer: string }[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "divide-y rounded-3xl border px-6 sm:px-8",
        isDark ? "divide-white/10 border-white/10 bg-dark-elevated" : "divide-ink/10 border-border-strong bg-surface shadow-soft",
      )}
    >
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <Reveal key={item.id} delay={index * 0.04} direction="up" distance={12}>
            <div className="py-6">
              <button
                type="button"
                className={cn(
                  "flex w-full items-start justify-between gap-6 text-left transition-colors",
                  !isDark && "hover:text-accent",
                )}
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span
                  className={cn(
                    "font-display text-lg font-medium sm:text-xl",
                    isDark ? "text-white" : "text-ink",
                  )}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "mt-1 size-5 shrink-0 transition-transform duration-300",
                    isDark ? "text-accent-bright" : "text-ink/40",
                    isOpen && "rotate-180",
                    isOpen && !isDark && "text-accent",
                  )}
                  aria-hidden
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p
                    className={cn(
                      "pt-4 text-base leading-relaxed",
                      isDark ? "text-white/55" : "text-ink-muted",
                    )}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FaqPageDocument() {
  const { hero, popular, categories, disclaimer, cta } = faqPageContent;
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id ?? "treatment");
  const [openIds, setOpenIds] = useState<Record<string, string | null>>({});

  const popularItems = getPopularFaqItems();

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;

    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.items.length > 0) as FaqCategory[];
  }, [query, categories]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return getAllFaqItems().filter(
      (item) =>
        item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (filteredCategories.length > 0 && !filteredCategories.find((c) => c.id === activeCategory)) {
      setActiveCategory(filteredCategories[0].id);
    }
  }, [filteredCategories, activeCategory]);

  function setCategoryOpen(categoryId: string, itemId: string | null) {
    setOpenIds((prev) => ({ ...prev, [categoryId]: itemId }));
  }

  return (
    <>
      <ScrollSection
        theme="dark"
        snap={false}
        className="hero-forest noise relative min-h-[min(58vh,520px)] justify-center hero-section-top pb-16"
      >
        <SectionContainer className="relative">
          <Reveal direction="up" distance={32} className="mx-auto max-w-3xl text-center">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <DisplayHeading size="xl" className="text-white">
              {hero.title}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-lg text-white/60">{hero.description}</p>

            <div className="faq-search mx-auto mt-10 max-w-xl">
              <Search className="faq-search__icon" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={hero.searchPlaceholder}
                className="faq-search__input"
                aria-label="Search frequently asked questions"
              />
            </div>
          </Reveal>
        </SectionContainer>
      </ScrollSection>

      {!query.trim() ? (
        <ScrollSection theme="light" snap={false} className="gradient-light py-16 sm:py-20">
          <SectionContainer>
            <Reveal direction="up" distance={20}>
              <h2 className="font-display text-2xl font-semibold text-ink">{popular.title}</h2>
            </Reveal>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {popularItems.map((item) => (
                <StaggerChild key={item.id}>
                  <button
                    type="button"
                    className="faq-popular-card text-left"
                    onClick={() => {
                      const cat = categories.find((c) => c.items.some((i) => i.id === item.id));
                      if (cat) {
                        setActiveCategory(cat.id);
                        setCategoryOpen(cat.id, item.id);
                        document.getElementById(`faq-${cat.id}`)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="font-display text-base font-medium text-ink">{item.question}</span>
                  </button>
                </StaggerChild>
              ))}
            </Stagger>
          </SectionContainer>
        </ScrollSection>
      ) : null}

      <ScrollSection theme="light" snap={false} className="overflow-visible py-20 sm:py-28">
        <SectionContainer>
          {query.trim() ? (
            <div>
              <p className="mb-8 text-ink-muted">
                {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
              </p>
              {searchResults.length > 0 ? (
                <FaqAccordion
                  items={searchResults}
                  openId={openIds.search ?? searchResults[0]?.id ?? null}
                  setOpenId={(id) => setCategoryOpen("search", id)}
                  theme="light"
                />
              ) : (
                <p className="text-center text-ink-muted">No questions match your search. Try different keywords or contact support.</p>
              )}
            </div>
          ) : (
            <div className="faq-page-grid">
              <nav className="faq-sidebar" aria-label="FAQ categories">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-subtle">Categories</p>
                <ul className="space-y-1">
                  {categories.map((cat) => {
                    const Icon = categoryIcons[cat.icon];
                    const isActive = activeCategory === cat.id;
                    return (
                      <li key={cat.id}>
                        <a
                          href={`#faq-${cat.id}`}
                          className={cn("faq-sidebar__link", isActive && "is-active")}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveCategory(cat.id);
                            document.getElementById(`faq-${cat.id}`)?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          <Icon className="size-4 shrink-0" aria-hidden />
                          {cat.title}
                          <span className="ml-auto text-xs text-ink-subtle">{cat.items.length}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="space-y-20">
                {categories.map((cat) => {
                  const Icon = categoryIcons[cat.icon];
                  return (
                    <section key={cat.id} id={`faq-${cat.id}`} className="scroll-mt-32">
                      <div className="mb-8 flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl border border-forest/10 bg-forest/5">
                          <Icon className="size-5 text-forest" aria-hidden />
                        </span>
                        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{cat.title}</h2>
                      </div>
                      <FaqAccordion
                        items={cat.items}
                        openId={openIds[cat.id] ?? null}
                        setOpenId={(id) => setCategoryOpen(cat.id, id)}
                      />
                    </section>
                  );
                })}
              </div>
            </div>
          )}

          <p className="mt-16 rounded-2xl border border-border-strong bg-paper p-6 text-sm leading-relaxed text-ink-muted">
            {disclaimer}
          </p>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-24 sm:py-32">
        <SectionContainer className="text-center">
          <Reveal direction="up" distance={28}>
            <DisplayHeading size="lg" className="mx-auto max-w-3xl text-white">
              {cta.title}{" "}
              <span className="text-gradient">{cta.titleHighlight}</span>
            </DisplayHeading>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{cta.description}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <LinkButton href={cta.primaryHref} size="xl" className="rounded-full">
                  {cta.primaryCta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              </MagneticButton>
              <LinkButton href={siteConfig.bookingUrl} variant="outline-dark" size="lg" className="rounded-full">
                {cta.secondaryCta}
              </LinkButton>
            </div>
          </Reveal>
        </SectionContainer>
      </ScrollSection>
    </>
  );
}
