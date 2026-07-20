import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { SEO_DEFAULTS } from "./constants";
import { absoluteUrl } from "./routes";

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

function buildVerification(): Metadata["verification"] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  if (!google && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

function buildOpenGraphImage(imagePath?: string): NonNullable<Metadata["openGraph"]>["images"] {
  const src = imagePath ?? SEO_DEFAULTS.ogImage.url;
  return [
    {
      url: src,
      width: SEO_DEFAULTS.ogImage.width,
      height: SEO_DEFAULTS.ogImage.height,
      alt: SEO_DEFAULTS.ogImage.alt,
    },
  ];
}

export function createPageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords = [...SEO_DEFAULTS.defaultKeywords],
    noIndex = false,
    ogImage,
    ogType = "website",
    publishedTime,
    modifiedTime,
  } = options;

  const canonical = absoluteUrl(path, siteConfig.url);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: SEO_DEFAULTS.category,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: ogType,
      locale: SEO_DEFAULTS.locale,
      url: canonical,
      siteName: SEO_DEFAULTS.siteName,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: buildOpenGraphImage(ogImage),
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage ?? SEO_DEFAULTS.ogImage.url],
    },
    verification: buildVerification(),
  };
}

/** Root layout metadata with title template support. */
export function createMetadata(overrides?: Metadata): Metadata {
  return {
    ...createPageMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path: "/",
    }),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    ...overrides,
  };
}

export const defaultMetadata = createMetadata();
