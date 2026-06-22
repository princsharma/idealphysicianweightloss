"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnimationVariant = "reveal" | "fade" | "scale" | "blur";
type RevealDirection = "up" | "down" | "left" | "right";

const EASE = [0.22, 1, 0.36, 1] as const;

function getDirectionOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
  case "up":
    return { x: 0, y: distance };
  case "down":
    return { x: 0, y: -distance };
  case "left":
    return { x: distance, y: 0 };
  case "right":
    return { x: -distance, y: 0 };
  }
}

function createRevealVariants(
  direction: RevealDirection,
  distance: number,
  withBlur: boolean,
): Variants {
  const offset = getDirectionOffset(direction, distance);

  return {
    hidden: {
      opacity: 0,
      ...offset,
      ...(withBlur ? { filter: "blur(10px)" } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(withBlur ? { filter: "blur(0px)" } : {}),
    },
  };
}

const presetVariants: Record<Exclude<AnimationVariant, "blur">, Variants> = {
  reveal: createRevealVariants("up", 36, true),
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface RevealProps {
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

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.75,
  variant = "reveal",
  direction = "up",
  distance = 36,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  const variants =
    variant === "blur"
      ? createRevealVariants(direction, distance, true)
      : variant === "reveal"
        ? createRevealVariants(direction, distance, true)
        : presetVariants[variant];

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={variants}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

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
  amount = 0.15,
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
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
  return (
    <motion.div
      className={cn(className)}
      variants={createRevealVariants(direction, distance, true)}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface FloatProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function Float({
  children,
  className,
  duration = 5,
  distance = 8,
}: FloatProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      animate={{ y: [-distance, distance, -distance] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

interface RevealLineProps {
  className?: string;
  delay?: number;
}

export function RevealLine({ className, delay = 0 }: RevealLineProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn("h-px bg-white/10", className)} aria-hidden />;
  }

  return (
    <motion.div
      className={cn("h-px origin-left bg-white/10", className)}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      aria-hidden
    />
  );
}
