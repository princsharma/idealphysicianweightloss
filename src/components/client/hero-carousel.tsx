"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=720&h=560&fit=crop&q=80",
    alt: "Doctor on a telehealth consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=720&h=560&fit=crop&q=80",
    alt: "Patient enjoying a healthy, active life",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=720&h=560&fit=crop&q=80",
    alt: "Licensed physician at her desk",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=720&h=560&fit=crop&q=80",
    alt: "Completing the application on a phone",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=720&h=560&fit=crop&q=80",
    alt: "Happy certified patient",
  },
] as const;

export function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stepSize = useCallback(() => {
    const track = trackRef.current;
    if (!track?.children[0]) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    return track.children[0].getBoundingClientRect().width + gap;
  }, []);

  const maxShift = useCallback(() => {
    const track = trackRef.current;
    const parent = track?.parentElement;
    if (!track || !parent) return 0;
    return Math.max(0, track.scrollWidth - parent.clientWidth);
  }, []);

  const lastIndex = useCallback(() => {
    const step = stepSize();
    if (!step) return 0;
    return Math.ceil(maxShift() / step);
  }, [maxShift, stepSize]);

  const goTo = useCallback(
    (next: number) => {
      const track = trackRef.current;
      if (!track) return;
      const last = lastIndex();
      let i = next;
      if (i > last) i = 0;
      if (i < 0) i = last;
      indexRef.current = i;
      const offset = Math.min(i * stepSize(), maxShift());
      track.style.transform = `translateX(${-offset}px)`;
    },
    [lastIndex, maxShift, stepSize],
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
    window.addEventListener("resize", onResize);
    return () => {
      stopAuto();
      window.removeEventListener("resize", onResize);
    };
  }, [goTo, startAuto, stopAuto]);

  return (
    <div className="mary-hero__carousel reveal" ref={wrapRef} onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      <div className="mary-carousel">
        <div className="mary-carousel__track" ref={trackRef}>
          {GALLERY.map((image) => (
            <figure key={image.src}>
              <Image src={image.src} alt={image.alt} width={385} height={305} className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
      <div className="mary-carousel__nav">
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
    </div>
  );
}
