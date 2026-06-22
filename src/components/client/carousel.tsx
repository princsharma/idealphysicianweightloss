"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  ariaLabel: string;
  theme?: "dark" | "light";
}

export function Carousel<T>({
  items,
  renderItem,
  className,
  ariaLabel,
  theme = "dark",
}: CarouselProps<T>) {
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(active + 1), 7000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  return (
    <div className={cn("relative", className)} aria-label={ariaLabel}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full shrink-0">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index}
              onClick={() => setActive(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                active === index
                  ? "w-8 bg-accent-bright"
                  : theme === "light"
                    ? "w-1.5 bg-ink/15"
                    : "w-1.5 bg-white/20",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(active - 1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border transition-colors",
              theme === "light"
                ? "border-ink/15 text-ink-muted hover:bg-ink/5 hover:text-ink"
                : "border-white/15 text-white/70 hover:bg-white/5 hover:text-white",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(active + 1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border transition-colors",
              theme === "light"
                ? "border-ink/15 text-ink-muted hover:bg-ink/5 hover:text-ink"
                : "border-white/15 text-white/70 hover:bg-white/5 hover:text-white",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}

export function HorizontalScroll({ children, className, ariaLabel }: HorizontalScrollProps) {
  return (
    <div
      className={cn(
        "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4",
        "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}
