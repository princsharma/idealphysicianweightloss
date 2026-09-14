import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/home/hero-section";
import { HomeMedicationsSection } from "@/components/sections/home/home-medications-section";
import { HomeBenefits, HomePricing } from "@/components/sections/home/home-sections";
import {
  HomeProcessDeck,
  HomeShowcase,
  HomeTrustBand,
} from "@/components/sections/home/home-page-sections";
import { Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/home-page.css";

const WhyUsSection = dynamic(() =>
  import("@/components/sections/home/why-us").then((m) => ({ default: m.WhyUsSection })),
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
      "Physician-guided GLP-1 weight loss with semaglutide, tirzepatide, and liraglutide — a $39 physician consultation and plans from $149/month.",
  },
});

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/wegovy.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <HomeTrustBand />
        <HomeShowcase />
        <WhyUsSection />
        <HomeProcessDeck />
        <HomeMedicationsSection />
        <HomeBenefits />
        <HomePricing />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
    </>
  );
}
