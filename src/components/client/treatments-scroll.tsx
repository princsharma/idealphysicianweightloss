"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: readonly string[];
  color: string;
}

interface TreatmentsScrollProps {
  products: readonly Product[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function TreatmentsScroll({ products }: TreatmentsScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  }, []);

  const scrollByDirection = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-treatment-card]");
    const gap = 20;
    const amount = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.8;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <Reveal variant="scale" duration={0.8}>
      <div className="relative">
        <Reveal direction="down" distance={16} delay={0.1} className="mb-4 flex items-center justify-end gap-2">
          <NavButton direction="left" disabled={!canScrollLeft} onClick={() => scrollByDirection("left")} />
          <NavButton direction="right" disabled={!canScrollRight} onClick={() => scrollByDirection("right")} />
        </Reveal>

        <div className="relative">
          <SideButton direction="left" disabled={!canScrollLeft} onClick={() => scrollByDirection("left")} />
          <SideButton direction="right" disabled={!canScrollRight} onClick={() => scrollByDirection("right")} />

          <div
            ref={scrollRef}
            className={cn(
              "flex gap-5 overflow-x-auto overscroll-x-contain pb-4",
              "snap-x snap-mandatory scroll-smooth",
              "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "-mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12",
            )}
            aria-label="Treatment options"
          >
            {products.map((product, index) => {
              const card = (
                <article data-treatment-card>
                  <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border-strong bg-surface shadow-soft transition-shadow duration-300 hover:shadow-elevated">
                    <div
                      className={cn(
                        "relative flex h-48 items-end bg-gradient-to-br p-6 sm:h-56",
                        product.color,
                      )}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                      <div className="relative">
                        <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                          {product.subtitle}
                        </p>
                        <h3 className="mt-1 font-display text-3xl font-semibold text-white">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <p className="text-sm leading-relaxed text-ink-muted">{product.description}</p>
                      <ul className="mt-5 space-y-2">
                        {product.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-ink">
                            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`/treatments/${product.id}`}
                        className="mt-auto inline-flex items-center gap-1 pt-8 text-sm font-semibold text-accent transition-colors hover:text-accent-bright"
                      >
                        View details <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );

              return (
                <div
                  key={product.id}
                  className={cn(
                    "snap-start shrink-0",
                    index === 0 ? "w-[min(88vw,520px)]" : "w-[min(78vw,400px)]",
                  )}
                >
                  {prefersReducedMotion ? (
                    card
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.3, margin: "0px 0px -5% 0px" }}
                      transition={{ duration: 0.75, delay: index * 0.08, ease: EASE }}
                    >
                      {card}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Scroll treatments ${direction}`}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex size-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink-muted shadow-soft transition-all",
        "hover:border-ink/25 hover:text-ink hover:shadow-elevated",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      {direction === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  );
}

function SideButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`${direction === "left" ? "Previous" : "Next"} treatment`}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 text-ink shadow-elevated backdrop-blur-sm transition-all lg:flex",
        direction === "left" ? "-left-3" : "-right-3",
        "hover:scale-105 hover:text-accent",
        "disabled:pointer-events-none disabled:opacity-0",
      )}
    >
      {direction === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  );
}
