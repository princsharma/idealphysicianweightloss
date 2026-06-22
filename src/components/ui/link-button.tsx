import type { ComponentProps } from "react";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type LinkButtonProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>;

function isExternalHref(href: LinkButtonProps["href"]) {
  if (typeof href !== "string") return false;
  return href.startsWith("http://") || href.startsWith("https://");
}

export function LinkButton({
  className,
  variant,
  size,
  children,
  href,
  ...props
}: LinkButtonProps) {
  const external = isExternalHref(href);

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
}
