import type { CMSPage, CMSSiteSettings, Slug } from "@/types";

export interface CMSClient {
  getPageBySlug(slug: Slug): Promise<CMSPage | null>;
  getAllPageSlugs(): Promise<Slug[]>;
  getSiteSettings(): Promise<CMSSiteSettings>;
}

export interface CMSAdapterOptions {
  apiUrl?: string;
  apiToken?: string;
}
