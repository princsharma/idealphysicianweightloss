import { getCMSClient } from "@/lib/cms/client";
import type { CMSPage, CMSSiteSettings, Slug } from "@/types";

export async function getPageBySlug(slug: Slug): Promise<CMSPage | null> {
  return getCMSClient().getPageBySlug(slug);
}

export async function getAllPageSlugs(): Promise<Slug[]> {
  return getCMSClient().getAllPageSlugs();
}

export async function getSiteSettings(): Promise<CMSSiteSettings> {
  return getCMSClient().getSiteSettings();
}
