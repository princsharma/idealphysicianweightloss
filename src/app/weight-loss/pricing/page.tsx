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
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createMetadata({
  title: "Pricing",
  description: `Transparent GLP-1 weight loss pricing at ${siteConfig.name} — a $39 physician consultation, then plans from $149/month with no insurance required.`,
  openGraph: {
    title: `Pricing | ${siteConfig.name}`,
    description:
      "Compare the Kickstart, Momentum, Transform, and Beyond plans, see what's included, and understand billing.",
  },
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
