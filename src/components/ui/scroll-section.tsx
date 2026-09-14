import type { ReactNode, Ref } from "react";

import { cn } from "@/lib/utils";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  theme?: "dark" | "light";
  /** @deprecated Snap scroll removed — kept for API compatibility */
  snap?: false | "screen" | "tall";
  ref?: Ref<HTMLElement>;
}

export function ScrollSection({
  children,
  className,
  id,
  theme = "dark",
  ref,
}: ScrollSectionProps) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative flex flex-col overflow-hidden",
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
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  id?: string;
  /** xl = page hero · lg = section · md = subsection · sm = card title */
  size?: "xl" | "lg" | "md" | "sm";
}

const sizeStyles = {
  xl: "type-h1",
  lg: "type-h2",
  md: "type-h3",
  sm: "type-h4",
} as const;

export function DisplayHeading({
  children,
  as: Component = "h2",
  className,
  id,
  size = "lg",
}: DisplayHeadingProps) {
  return (
    <Component id={id} className={cn("font-display font-semibold", sizeStyles[size], className)}>
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
