import { siteConfig } from "@/config/site";

export const SEO_DEFAULTS = {
  siteName: siteConfig.name,
  locale: siteConfig.locale,
  category: "health",
  defaultKeywords: [
    "medical weight loss",
    "GLP-1",
    "semaglutide",
    "tirzepatide",
    "telehealth weight loss",
    "physician-guided weight loss",
    "online weight loss program",
  ] as const,
  ogImage: {
    url: "/logo.webp",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — Physician-guided medical weight loss`,
  },
  twitterHandle: "@idealphysician",
} as const;
