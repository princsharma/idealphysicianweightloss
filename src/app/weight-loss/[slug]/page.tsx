import { notFound } from "next/navigation";

import { BrandMedicationPage } from "@/components/sections/medications/brand-medication-sections";
import { StateLandingPage } from "@/components/sections/state";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";
import {
  getBrandMedicationPageContent,
  getMedicationProduct,
  isMedicationSlug,
  medicationSlugs,
} from "@/lib/constants/medications";
import { getStateContent, isStateSlug, stateSlugs } from "@/lib/constants/states/registry";

import "@/styles/brand-medication-page.css";
import "@/styles/hub-page.css";
import "@/styles/state-page.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...medicationSlugs, ...stateSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  if (isStateSlug(slug)) {
    const content = getStateContent(slug);
    return createMetadata({
      title: `${content.stateName} Weight Loss Program`,
      description: `Physician-guided online weight loss for ${content.local.residentsLabel}. GLP-1 treatments, licensed providers, and HIPAA-secure telehealth from ${siteConfig.name}.`,
      openGraph: {
        title: `${content.stateName} Weight Loss Program | ${siteConfig.name}`,
        description: `Connect with licensed ${content.stateName} providers for a personalized GLP-1 weight loss evaluation. Serving communities statewide.`,
      },
    });
  }

  if (!isMedicationSlug(slug)) {
    return createMetadata({ title: "Page not found" });
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

export default async function WeightLossSlugPage({ params }: PageProps) {
  const { slug } = await params;

  if (isStateSlug(slug)) {
    const content = getStateContent(slug);

    return (
      <>
        <Header />
        <StateLandingPage content={content} />
        <Footer />
      </>
    );
  }

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
