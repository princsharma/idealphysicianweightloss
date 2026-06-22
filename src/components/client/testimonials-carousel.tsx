"use client";

import { BadgeCheck } from "lucide-react";

import { Carousel } from "@/components/client/carousel";
import { homeContent } from "@/lib/constants/home-content";

export function TestimonialsCarousel() {
  const { testimonials } = homeContent;

  return (
    <Carousel
      items={[...testimonials.items]}
      ariaLabel="Patient testimonials"
      theme="light"
      renderItem={(item) => (
        <blockquote className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-display text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-snug tracking-tight text-ink">
            &ldquo;{item.quote}&rdquo;
          </p>
          <footer className="mt-10 flex flex-col items-center gap-2">
            <cite className="not-italic text-lg font-semibold text-ink">{item.name}</cite>
            <span className="text-sm text-ink-subtle">{item.location}</span>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-accent">
              <BadgeCheck className="size-4" aria-hidden />
              Verified patient
            </div>
          </footer>
        </blockquote>
      )}
    />
  );
}
