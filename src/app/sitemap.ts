import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllPublicRoutes } from "@/lib/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  return getAllPublicRoutes().map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/weight-loss") ? 0.9 : 0.7,
  }));
}
