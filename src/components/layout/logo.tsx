import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
  priority?: boolean;
};

const sizeClasses = {
  header: "h-11 w-auto",
  footer: "h-12 w-auto",
} as const;

export function Logo({ className, size = "header", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "mary-logo inline-flex w-fit shrink-0 items-center",
        size === "header" && "rounded-full bg-white px-2 py-1",
        className,
      )}
      aria-label={siteConfig.name}
    >
      <img
        src="/logo.png"
        alt={siteConfig.name}
        width={200}
        height={52}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("block object-contain", sizeClasses[size])}
      />
    </Link>
  );
}
