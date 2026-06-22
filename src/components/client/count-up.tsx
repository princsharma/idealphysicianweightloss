"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface ParsedStat {
  end: number;
  decimals: number;
  unit: string;
}

interface CountUpProps {
  value: string;
  suffix?: string;
  suffixClassName?: string;
  className?: string;
  duration?: number;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function parseStatValue(value: string): ParsedStat {
  if (value.includes("%")) {
    return { end: parseFloat(value), decimals: 0, unit: "%" };
  }

  if (value.includes("k")) {
    const end = parseFloat(value.replace(/[^0-9.]/g, ""));
    const hasPlus = value.includes("+");
    return { end, decimals: 0, unit: `k${hasPlus ? "+" : ""}` };
  }

  const end = parseFloat(value);
  const decimals = value.includes(".") ? (value.split(".")[1]?.length ?? 0) : 0;
  return { end, decimals, unit: "" };
}

function formatStatValue(amount: number, parsed: ParsedStat) {
  const rounded =
    parsed.decimals > 0 ? amount.toFixed(parsed.decimals) : String(Math.round(amount));

  if (parsed.unit === "%") return `${rounded}%`;
  if (parsed.unit) return `${rounded}${parsed.unit}`;
  return rounded;
}

export function CountUp({
  value,
  suffix,
  suffixClassName,
  className,
  duration = 1.8,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const finalDisplay = formatStatValue(parsed.end, parsed);
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? finalDisplay : formatStatValue(0, parsed));
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(finalDisplay);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        const startTime = performance.now();
        const from = 0;
        const to = parsed.end;

        function tick(now: number) {
          const progress = Math.min((now - startTime) / (duration * 1000), 1);
          const eased = easeOutCubic(progress);
          const current = from + (to - from) * eased;
          setDisplay(formatStatValue(current, parsed));

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(finalDisplay);
          }
        }

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [duration, finalDisplay, parsed.end, parsed.decimals, parsed.unit, prefersReducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix ? (
        <span className={cn("text-[0.45em] font-medium text-ink-muted", suffixClassName)}>{suffix}</span>
      ) : null}
    </span>
  );
}
