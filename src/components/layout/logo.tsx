import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
  priority?: boolean;
};

const logoPillClasses = "rounded-full bg-white px-3 py-1.5 sm:px-3.5 sm:py-2";

const sizeClasses = {
  header: "h-14 w-auto sm:h-[3.75rem]",
  footer: "h-14 w-auto sm:h-[3.75rem]",
} as const;

export function Logo({ className, size = "header", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "mary-logo inline-flex w-fit shrink-0 items-center",
        logoPillClasses,
        className,
      )}
      aria-label={siteConfig.name}
    >
      <img
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={300}
        height={72}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("block object-contain", sizeClasses[size])}
      />
    </Link>
  );
}
