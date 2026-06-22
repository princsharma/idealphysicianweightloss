import type { ISODateString, Slug } from "@/types/common";

export type ContentSectionType =
  | "hero"
  | "features"
  | "testimonials"
  | "cta"
  | "faq"
  | "rich-text"
  | "gallery"
  | "team"
  | "contact";

export interface CMSImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface CMSLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ContentSection<T extends Record<string, unknown> = Record<string, unknown>> {
  id: string;
  type: ContentSectionType;
  data: T;
}

export interface CMSPage {
  id: string;
  slug: Slug;
  title: string;
  description?: string;
  sections: ContentSection[];
  publishedAt?: ISODateString;
  updatedAt?: ISODateString;
}

export interface CMSNavigationItem {
  id: string;
  label: string;
  href: string;
  children?: CMSNavigationItem[];
}

export interface CMSSiteSettings {
  navigation: {
    header: CMSNavigationItem[];
    footer: CMSNavigationItem[];
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
  };
}
