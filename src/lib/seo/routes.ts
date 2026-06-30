import { medicationSlugs } from "@/lib/constants/medications/registry";
import { stateSlugs } from "@/lib/constants/states/registry";

/** Static routes included in sitemap and site navigation metadata. */
export const STATIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/physicians",
  "/compliance",
  "/editorial",
  "/accessibility",
  "/privacy",
  "/terms",
  "/hipaa",
  "/refund",
  "/medical-disclaimer",
  "/weight-loss",
  "/weight-loss/how-it-works",
  "/weight-loss/pricing",
  "/weight-loss/faq",
  "/weight-loss/semaglutide",
  "/weight-loss/tirzepatide",
] as const;

export type StaticRoute = (typeof STATIC_ROUTES)[number];

export function getDynamicWeightLossRoutes(): string[] {
  return [
    ...stateSlugs.map((slug) => `/weight-loss/${slug}`),
    ...medicationSlugs.map((slug) => `/weight-loss/${slug}`),
  ];
}

export function getAllPublicRoutes(): string[] {
  return [...STATIC_ROUTES, ...getDynamicWeightLossRoutes()];
}

export function absoluteUrl(path: string, siteUrl: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const base = siteUrl.replace(/\/$/, "");
  return `${base}${normalizedPath === "/" ? "" : normalizedPath}`;
}
