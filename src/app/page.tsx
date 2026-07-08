import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/home/hero-section";
import {
  HomeBenefits,
  HomeEligibility,
  HomeExperience,
  HomePricing,
} from "@/components/sections/home/home-sections";
import { Header } from "@/components/layout";
import { HERO_LCP } from "@/lib/constants/hero-gallery";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

const HeroStartSection = dynamic(() =>
  import("@/components/sections/home/hero-start-section").then((m) => ({ default: m.HeroStartSection })),
);
const StatsSection = dynamic(() =>
  import("@/components/sections/home/stats-section").then((m) => ({ default: m.StatsSection })),
);
const WhyUsSection = dynamic(() =>
  import("@/components/sections/home/why-us").then((m) => ({ default: m.WhyUsSection })),
);
const TreatmentsSection = dynamic(() =>
  import("@/components/sections/home/treatments-section").then((m) => ({ default: m.TreatmentsSection })),
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/home/process-section").then((m) => ({ default: m.ProcessSection })),
);
const FaqSection = dynamic(() =>
  import("@/components/sections/home/faq").then((m) => ({ default: m.FaqSection })),
);
const FinalCtaSection = dynamic(() =>
  import("@/components/sections/home/final-cta").then((m) => ({ default: m.FinalCtaSection })),
);
const Footer = dynamic(() =>
  import("@/components/layout/footer").then((m) => ({ default: m.Footer })),
);

export const metadata = createMetadata({
  title: "Medical Weight Loss That Actually Works",
  description: `Licensed doctors, same-day evaluations, and HIPAA-secure telehealth. Personalized GLP-1 programs with FDA-approved medications shipped to your door at ${siteConfig.name}.`,
  openGraph: {
    title: `Medical Weight Loss | ${siteConfig.name}`,
    description:
      "Physician-guided GLP-1 weight loss with semaglutide, tirzepatide, and liraglutide — evaluations from $75 and plans from $299/month.",
  },
});

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={HERO_LCP.src}
        type="image/webp"
        fetchPriority="high"
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <HeroStartSection />
        <StatsSection />
        <WhyUsSection />
        <TreatmentsSection />
        <ProcessSection />
        <HomeEligibility />
        <HomeBenefits />
        <HomeExperience />
        <HomePricing />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
    </>
  );
}
