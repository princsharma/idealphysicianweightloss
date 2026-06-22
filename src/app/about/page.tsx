import {
  AboutCtaSection,
  AboutGallerySection,
  AboutHeroSection,
  AboutIntroSection,
  AboutPackagesSection,
} from "@/components/sections/about";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/about-page.css";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn how ${siteConfig.name} delivers physician-guided, FDA-approved GLP-1 weight loss care through secure telehealth — personalized plans, licensed doctors, and pharmacy fulfillment.`,
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Medical weight loss experts offering same-day virtual consultations, evidence-based GLP-1 treatment, and patient-first telehealth care.",
  },
});

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AboutHeroSection />
        <AboutIntroSection />
        <AboutPackagesSection />
        <AboutGallerySection />
        <AboutCtaSection />
        <Footer />
      </main>
    </div>
  );
}
