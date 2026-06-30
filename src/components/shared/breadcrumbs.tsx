import Link from "next/link";

import { buildBreadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

import { JsonLd } from "./json-ld";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const schemaItems = items.map((item, index) => ({
    name: item.label,
    path: item.href ?? (index === items.length - 1 ? "" : "/"),
  }));

  const schemaData = buildBreadcrumbSchema(
    schemaItems.map((item, index) => ({
      name: item.name,
      path: items[index]?.href ?? "/",
    })),
  );

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-ink-subtle">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <span aria-hidden className="text-ink/25">
                    /
                  </span>
                ) : null}
                {isLast || !item.href ? (
                  <span className="font-medium text-ink" aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-forest">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
