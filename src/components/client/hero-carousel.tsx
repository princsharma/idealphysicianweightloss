"use client";

import { useCallback, useEffect, useRef } from "react";

import { HERO_GALLERY } from "@/lib/constants/hero-gallery";

const EXTRA_SLIDES = HERO_GALLERY.slice(1);

export function HeroCarouselExtras() {
  return (
    <>
      {EXTRA_SLIDES.map((image) => (
        <figure key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            width={385}
            height={305}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </figure>
      ))}
    </>
  );
}

export function HeroCarouselNav() {
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getTrack = useCallback(() => document.getElementById("hero-carousel-track"), []);

  const stepSize = useCallback(() => {
    const track = getTrack();
    if (!track?.children[0]) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    return track.children[0].getBoundingClientRect().width + gap;
  }, [getTrack]);

  const maxShift = useCallback(() => {
    const track = getTrack();
    const parent = track?.parentElement;
    if (!track || !parent) return 0;
    return Math.max(0, track.scrollWidth - parent.clientWidth);
  }, [getTrack]);

  const lastIndex = useCallback(() => {
    const step = stepSize();
    if (!step) return 0;
    return Math.ceil(maxShift() / step);
  }, [maxShift, stepSize]);

  const goTo = useCallback(
    (next: number) => {
      const track = getTrack();
      if (!track) return;
      const last = lastIndex();
      let i = next;
      if (i > last) i = 0;
      if (i < 0) i = last;
      indexRef.current = i;
      const offset = Math.min(i * stepSize(), maxShift());
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    },
    [getTrack, lastIndex, maxShift, stepSize],
  );

  const startAuto = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(indexRef.current + 1), 5000);
  }, [goTo]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    const onResize = () => goTo(indexRef.current);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      stopAuto();
      window.removeEventListener("resize", onResize);
    };
  }, [goTo, startAuto, stopAuto]);

  return (
    <div className="mary-carousel__nav" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      <button
        type="button"
        className="mary-carousel__btn"
        aria-label="Next slide"
        onClick={() => {
          goTo(indexRef.current + 1);
          startAuto();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
      <button
        type="button"
        className="mary-carousel__btn"
        aria-label="Previous slide"
        onClick={() => {
          goTo(indexRef.current - 1);
          startAuto();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </button>
    </div>
  );
}

/** Legacy export — carousel is split into HeroCarouselExtras + HeroCarouselNav */
export function HeroCarousel() {
  return null;
}
