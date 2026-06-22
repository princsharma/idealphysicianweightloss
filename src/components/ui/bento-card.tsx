import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BentoVariant = "dark" | "light" | "accent" | "glass";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: BentoVariant;
  hover?: boolean;
}

const variantStyles: Record<BentoVariant, string> = {
  dark: "bg-dark-elevated border-border-light text-white",
  light: "bg-surface border-border-strong text-ink shadow-soft",
  accent: "bg-accent text-accent-foreground border-transparent",
  glass: "glass-dark text-white",
};

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  variant = "light",
  hover = true,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border p-6 sm:p-8",
        variantStyles[variant],
        hover && "card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
