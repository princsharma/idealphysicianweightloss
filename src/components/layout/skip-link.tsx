import { cn } from "@/lib/utils";

interface SkipLinkProps {
  href?: string;
  className?: string;
}

export function SkipLink({
  href = "#main-content",
  className,
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50",
        "rounded-full bg-accent-bright px-5 py-2.5 text-sm font-medium text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
        className,
      )}
    >
      Skip to main content
    </a>
  );
}
