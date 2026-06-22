import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionTheme = "dark" | "light";

interface SectionWrapperProps {
  children: ReactNode;
  theme?: SectionTheme;
  className?: string;
  containerClassName?: string;
  id?: string;
  ariaLabelledby?: string;
}

export function SectionWrapper({
  children,
  theme = "dark",
  className,
  containerClassName,
  id,
  ariaLabelledby,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        theme === "dark" && "mesh-gradient-dark text-white",
        theme === "light" && "bg-white text-foreground",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  titleHighlight?: string;
  description?: string;
  theme?: SectionTheme;
  className?: string;
  id?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  titleHighlight,
  description,
  theme = "dark",
  className,
  id,
  align = "center",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-14 md:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-2xl",
        className,
      )}
    >
      <h2
        id={id}
        className={cn(
          "font-serif text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl",
          theme === "dark" ? "text-white" : "text-foreground",
        )}
      >
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-gradient-primary">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed md:text-xl",
            theme === "dark" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
