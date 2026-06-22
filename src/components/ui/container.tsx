import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerElement = "div" | "section" | "article" | "main" | "header" | "footer";

interface ContainerProps {
  as?: ContainerElement;
  children: ReactNode;
  className?: string;
  id?: string;
}

const containerStyles = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export function Container({
  as: Component = "div",
  children,
  className,
  id,
}: ContainerProps) {
  return (
    <Component id={id} className={cn(containerStyles, className)}>
      {children}
    </Component>
  );
}

interface SectionProps {
  as?: Extract<ContainerElement, "section" | "div">;
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
}

export function Section({
  as: Component = "section",
  children,
  className,
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-16 md:py-24", className)}
    >
      {children}
    </Component>
  );
}

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Heading({
  as: Component = "h2",
  children,
  className,
  id,
}: HeadingProps) {
  return (
    <Component
      id={id}
      className={cn(
        "font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl",
        className,
      )}
    >
      {children}
    </Component>
  );
}

interface ProseProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Prose({ as: Component = "div", children, className }: ProseProps) {
  return (
    <Component
      className={cn(
        "max-w-prose text-base leading-relaxed text-muted-foreground",
        className,
      )}
    >
      {children}
    </Component>
  );
}
