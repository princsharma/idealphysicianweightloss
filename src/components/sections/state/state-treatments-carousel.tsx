"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface TreatmentProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  dosing: string;
  color: string;
}

interface StateTreatmentsCarouselProps {
  products: readonly TreatmentProduct[];
}

export function StateTreatmentsCarousel({ products }: StateTreatmentsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    const firstCard = el.querySelector<HTMLElement>("[data-state-treatment-card]");
    const gap = 20;
    const amount = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = 0;
    updateScrollState();
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <div className="relative mt-10">
      <div className="mb-4 flex items-center justify-end gap-2">
        <CarouselButton direction="left" disabled={!canScrollLeft} onClick={() => scrollByDirection("left")} />
        <CarouselButton direction="right" disabled={!canScrollRight} onClick={() => scrollByDirection("right")} />
      </div>

      <div className="relative overflow-hidden">
        <SideButton direction="left" disabled={!canScrollLeft} onClick={() => scrollByDirection("left")} />
        <SideButton direction="right" disabled={!canScrollRight} onClick={() => scrollByDirection("right")} />

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-mandatory scroll-smooth pb-2"
          aria-label="Treatment options"
        >
          {products.map((product) => (
            <article
              key={product.id}
              data-state-treatment-card
              className="state-treatment-panel group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm"
            >
              <div className="relative h-40 bg-gradient-to-b from-white/10 to-transparent sm:h-44">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                  sizes="340px"
                />
              </div>
              <div className={cn("bg-gradient-to-br px-5 py-4", product.color)}>
                <h3 className="font-display text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-white/70">
                  {product.dosing}
                </p>
              </div>
              <p className="flex-1 p-5 text-sm leading-relaxed text-white/55">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CarouselButton({
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
        "flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur-sm transition-all",
        "hover:border-white/25 hover:bg-white/15 hover:text-white",
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
        "absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-forest-ink/90 text-white shadow-elevated backdrop-blur-sm transition-all lg:flex",
        direction === "left" ? "left-2" : "right-2",
        "hover:scale-105 hover:text-accent-bright",
        "disabled:pointer-events-none disabled:opacity-0",
      )}
    >
      {direction === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  );
}
