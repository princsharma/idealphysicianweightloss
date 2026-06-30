import {
  PricingComparePlans,
  PricingConsultation,
  PricingCta,
  PricingFaq,
  PricingHero,
  PricingIncluded,
  PricingInsurance,
  PricingMedications,
  PricingMonthlyProcess,
  PricingOverview,
} from "@/components/sections/pricing";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createPageMetadata({
  title: "Pricing",
  description: `Transparent GLP-1 weight loss pricing from $299/month at ${siteConfig.name} — physician consultation, medication, delivery, and support included.`,
  path: "/weight-loss/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PricingHero />
        <PricingOverview />
        <PricingIncluded />
        <PricingComparePlans />
        <PricingMedications />
        <PricingConsultation />
        <PricingMonthlyProcess />
        <PricingInsurance />
        <PricingFaq />
        <PricingCta />
        <Footer />
      </main>
    </>
  );
}
