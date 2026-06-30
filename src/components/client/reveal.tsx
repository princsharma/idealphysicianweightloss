"use client";

import {
  createContext,
  useContext,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import { useInView } from "@/lib/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type AnimationVariant = "reveal" | "fade" | "scale" | "blur";
type RevealDirection = "up" | "down" | "left" | "right";

interface RevealBaseProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  direction?: RevealDirection;
  distance?: number;
  once?: boolean;
  amount?: number;
}

function getRevealClass(variant: AnimationVariant, direction: RevealDirection) {
  if (variant === "fade") return "reveal-fade";
  if (variant === "scale") return "reveal-scale";
  return `reveal-slide reveal-slide--${direction}`;
}

function RevealBase({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  duration = 0.75,
  variant = "reveal",
  direction = "up",
  distance = 36,
  once = true,
  amount = 0.2,
}: RevealBaseProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView, pending } = useInView<HTMLElement>({ once, amount });

  if (prefersReducedMotion) {
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      className={cn(
        getRevealClass(variant, direction),
        pending && !inView && "is-pending",
        inView && "is-visible",
        className,
      )}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-duration": `${duration}s`,
          "--reveal-distance": `${distance}px`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

type RevealProps = Omit<RevealBaseProps, "as">;

export function Reveal(props: RevealProps) {
  return <RevealBase {...props} />;
}

interface StaggerContextValue {
  nextDelay: () => number;
}

const StaggerContext = createContext<StaggerContextValue | null>(null);

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
}: StaggerProps) {
  const counter = { index: 0 };

  const nextDelay = () => {
    const delay = delayChildren + counter.index * stagger;
    counter.index += 1;
    return delay;
  };

  return (
    <StaggerContext.Provider value={{ nextDelay }}>
      <div className={cn(className)}>{children}</div>
    </StaggerContext.Provider>
  );
}

interface StaggerChildProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
}

export function StaggerChild({
  children,
  className,
  direction = "up",
  distance = 28,
}: StaggerChildProps) {
  const ctx = useContext(StaggerContext);
  const delay = ctx?.nextDelay() ?? 0;

  return (
    <RevealBase className={className} direction={direction} distance={distance} delay={delay}>
      {children}
    </RevealBase>
  );
}

type RevealLiProps = Omit<RevealBaseProps, "as">;

export function RevealLi(props: RevealLiProps) {
  return <RevealBase {...props} as="li" />;
}

interface FloatProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function Float({ children, className, duration = 5 }: FloatProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={cn(!prefersReducedMotion && "reveal-float", className)}
      style={prefersReducedMotion ? undefined : ({ "--float-duration": `${duration}s` } as CSSProperties)}
    >
      {children}
    </div>
  );
}

interface RevealLineProps {
  className?: string;
  delay?: number;
}

export function RevealLine({ className, delay = 0 }: RevealLineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView, pending } = useInView<HTMLDivElement>({ once: true, amount: 0.5 });

  if (prefersReducedMotion) {
    return <div className={cn("h-px bg-white/10", className)} aria-hidden />;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-line h-px origin-left bg-white/10",
        pending && !inView && "is-pending",
        inView && "is-visible",
        className,
      )}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      aria-hidden
    />
  );
}
