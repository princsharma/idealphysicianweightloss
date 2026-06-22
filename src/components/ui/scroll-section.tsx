import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SnapMode = "screen" | "tall";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  theme?: "dark" | "light";
  snap?: SnapMode | false;
  /** Sticky layer in the scroll stack. Disable on the last section before the footer. */
  stack?: boolean;
}

export function ScrollSection({
  children,
  className,
  id,
  theme = "dark",
  snap = "screen",
  stack,
}: ScrollSectionProps) {
  const useStack = stack ?? snap !== false;

  return (
    <section
      id={id}
      className={cn(
        "relative flex flex-col overflow-hidden",
        snap === "screen" && "snap-section",
        snap === "tall" && "snap-section-tall",
        useStack && "scroll-stack-section",
        theme === "dark" && "bg-dark text-white",
        theme === "light" && "gradient-light text-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}

interface DisplayHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
  size?: "xl" | "lg" | "md";
}

const sizeStyles = {
  xl: "text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.03em]",
  lg: "text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.025em]",
  md: "text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em]",
};

export function DisplayHeading({
  children,
  as: Component = "h2",
  className,
  id,
  size = "lg",
}: DisplayHeadingProps) {
  return (
    <Component
      id={id}
      className={cn(
        "font-display font-semibold text-balance",
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright",
        className,
      )}
    >
      {children}
    </p>
  );
}

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
