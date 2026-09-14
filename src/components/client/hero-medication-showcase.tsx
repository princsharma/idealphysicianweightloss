"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export interface HeroShowcaseItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: string | null;
  shortText: string;
}

interface HeroMedicationShowcaseProps {
  items: HeroShowcaseItem[];
  linkLabel: string;
  linkHref: string;
  intervalMs?: number;
}

export function HeroMedicationShowcase({
  items,
  linkLabel,
  linkHref,
  intervalMs = 3000,
}: HeroMedicationShowcaseProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || items.length < 2) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [isPaused, items.length, intervalMs]);

  if (items.length === 0) return null;

  return (
    <div
      className="mary-hero__showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="mary-hero__showcase-visual relative">
        {items.map((item, itemIndex) => (
          <Image
            key={item.id}
            src={item.image}
            alt={`${item.name} — ${item.subtitle}`}
            fill
            priority={itemIndex === 0}
            sizes="(max-width: 1024px) 90vw, 460px"
            className="object-contain object-center p-6 transition-opacity duration-500"
            style={{ opacity: itemIndex === index ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="mary-hero__showcase-body">
        <div className="mary-hero__showcase-copy" aria-live="polite">
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className={cn(
                "mary-hero__showcase-slide",
                itemIndex === index && "is-active",
              )}
              aria-hidden={itemIndex !== index}
            >
              <div className="mary-hero__showcase-badge-slot">
                {item.badge ? (
                  <p className="mary-hero__showcase-badge">{item.badge}</p>
                ) : (
                  <span className="mary-hero__showcase-badge-placeholder" aria-hidden />
                )}
              </div>
              <p className="mary-hero__showcase-type">{item.subtitle}</p>
              <p className="mary-hero__showcase-name">{item.name}</p>
              <p className="mary-hero__showcase-text">{item.shortText}</p>
            </div>
          ))}
        </div>

        <div className="mary-hero__showcase-foot">
          <a href={linkHref} className="mary-hero__showcase-link">
            {linkLabel}
            <ArrowRight aria-hidden />
          </a>

          <div className="mary-hero__showcase-dots" role="tablist" aria-label="Featured medications">
            {items.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={item.name}
                className={
                  itemIndex === index
                    ? "mary-hero__showcase-dot is-active"
                    : "mary-hero__showcase-dot"
                }
                onClick={() => setIndex(itemIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
