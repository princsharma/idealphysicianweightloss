import { homeContent } from "@/lib/constants/home-content";

import { getBrandMedicationPageContent } from "./brand-medication-content";

export type MedicationProduct = (typeof homeContent.medications.products)[number];
export type MedicationSlug = MedicationProduct["id"];

const products = homeContent.medications.products;

export const medicationSlugs = products.map((product) => product.id) as MedicationSlug[];

export const medicationNavItems = products.map((product) => ({
  id: product.id,
  label: product.name,
  subtitle: product.subtitle,
  href: getMedicationHref(product.id),
}));

export function getMedicationHref(slug: string) {
  return `/weight-loss/${slug}`;
}

export function isMedicationSlug(slug: string): slug is MedicationSlug {
  return medicationSlugs.includes(slug as MedicationSlug);
}

export function getMedicationProduct(slug: MedicationSlug): MedicationProduct | undefined {
  return products.find((product) => product.id === slug);
}

export function getMedicationContent(slug: MedicationSlug) {
  return getBrandMedicationPageContent(slug);
}

export { getBrandMedicationPageContent };
