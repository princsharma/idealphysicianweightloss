"use client";

import Image from "next/image";
import { Clock, Heart, Stethoscope } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { statePageImages } from "@/lib/constants/states/state-page-media";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";
import { cn } from "@/lib/utils";

const ICONS = {
  clock: Clock,
  heart: Heart,
  stethoscope: Stethoscope,
} as const;

const CARD_ACCENTS = [
  "state-snap-card--forest",
  "state-snap-card--lime",
  "state-snap-card--cream",
] as const;

type StatePersonasSnapProps = {
  content: StatePageContent;
};

export function StatePersonasSnap({ content }: StatePersonasSnapProps) {
  const { personas, local } = content;
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>("[data-snap-card]");
    if (!cards.length) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(trackCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    const card = track?.querySelectorAll<HTMLElement>("[data-snap-card]")[index];
    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <section id="for-you" className="state-snap-zone scroll-mt-32">
      <SectionContainer className="state-snap-zone__inner">
        <Reveal className="state-snap-zone__intro mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-xl lg:text-left" direction="up" distance={28}>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Built for you</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-ink">
            Weight loss care that fits{" "}
            <span className="text-gradient">real {local.residentsLabel}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Three common starting points. Every path begins with a licensed physician review.
          </p>

          <div className="state-snap-zone__dots justify-center lg:justify-start" aria-label="Persona slides">
            {personas.map((persona, index) => (
              <button
                key={persona.id}
                type="button"
                className={cn("state-snap-dot", activeIndex === index && "is-active")}
                aria-label={`Go to slide ${index + 1}: ${persona.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="state-snap-track state-snap-track--full mt-8 lg:mt-10"
          aria-label="Care scenarios for state residents"
        >
          {personas.map((persona, index) => {
            const Icon = ICONS[persona.icon];
            const showImage = index === 0;
            return (
              <article
                key={persona.id}
                data-snap-card
                className={cn("state-snap-card", CARD_ACCENTS[index % CARD_ACCENTS.length])}
              >
                {showImage ? (
                  <div className="state-snap-card__media">
                    <Image
                      src={statePageImages.approach.src}
                      alt={statePageImages.approach.alt}
                      width={400}
                      height={220}
                      className="h-full w-full object-cover"
                      sizes="380px"
                    />
                  </div>
                ) : null}
                <div className="state-snap-card__glow" aria-hidden />
                <span className="state-snap-card__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="state-snap-card__icon">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="state-snap-card__title">{persona.title}</h3>
                <p className="state-snap-card__body">{persona.description}</p>
                <div className="state-snap-card__footer">
                  <span className="state-snap-card__chip">{local.stateAbbr} telehealth</span>
                  <span className="state-snap-card__chip">Physician-led</span>
                </div>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
