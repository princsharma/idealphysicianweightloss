import { notFound } from "next/navigation";

import { BrandMedicationPage } from "@/components/sections/medications/brand-medication-sections";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";
import {
  getBrandMedicationPageContent,
  getMedicationProduct,
  isMedicationSlug,
  medicationSlugs,
} from "@/lib/constants/medications";

import "@/styles/brand-medication-page.css";
import "@/styles/hub-page.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return medicationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  if (!isMedicationSlug(slug)) {
    return createMetadata({ title: "Medication not found" });
  }

  const product = getMedicationProduct(slug);
  if (!product) {
    return createMetadata({ title: "Medication not found" });
  }

  return createMetadata({
    title: `${product.name} for Weight Loss`,
    description: `${product.description} Learn about ${product.subtitle}, eligibility, and physician-guided treatment at ${siteConfig.name}.`,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
    },
  });
}

export default async function MedicationPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isMedicationSlug(slug)) {
    notFound();
  }

  const content = getBrandMedicationPageContent(slug);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <BrandMedicationPage content={content} />
        <Footer />
      </main>
    </>
  );
}
