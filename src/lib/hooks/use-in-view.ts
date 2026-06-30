"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

interface UseInViewOptions {
  once?: boolean;
  amount?: number;
  rootMargin?: string;
}

export function useInView<T extends Element>({
  once = true,
  amount = 0.2,
  rootMargin = "0px 0px -8% 0px",
}: UseInViewOptions = {}): { ref: RefObject<T | null>; inView: boolean; pending: boolean } {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(true);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.85;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: amount, rootMargin },
    );

    observer.observe(el);

    if (belowFold) {
      requestAnimationFrame(() => {
        setInView(false);
        setPending(true);
      });
    }

    return () => observer.disconnect();
  }, [amount, once, prefersReducedMotion, rootMargin]);

  return {
    ref,
    inView: prefersReducedMotion || inView,
    pending: prefersReducedMotion ? false : pending,
  };
}
