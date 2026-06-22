import {
  AlabamaApproachSection,
  AlabamaCitiesSection,
  AlabamaCtaSection,
  AlabamaFaqSection,
  AlabamaHeroSection,
  AlabamaPathSection,
  AlabamaTestimonialsSection,
  AlabamaTreatmentsSection,
  AlabamaUserSection,
} from "@/components/sections/state";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/state-page.css";

export const metadata = createMetadata({
  title: "Alabama Weight Loss Program",
  description: `Physician-guided online weight loss for Alabama residents. GLP-1 treatments, licensed providers, and HIPAA-secure telehealth from ${siteConfig.name}.`,
  openGraph: {
    title: `Alabama Weight Loss Program | ${siteConfig.name}`,
    description:
      "Connect with licensed Alabama providers for a personalized GLP-1 weight loss evaluation. Serving Birmingham, Montgomery, Mobile, and statewide.",
  },
});

export default function AlabamaPage() {
  return (
    <div className="state-page">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AlabamaHeroSection />
        <AlabamaUserSection />
        <AlabamaApproachSection />
        <AlabamaTreatmentsSection />
        <AlabamaPathSection />
        <AlabamaTestimonialsSection />
        <AlabamaCitiesSection />
        <AlabamaFaqSection />
        <AlabamaCtaSection />
        <Footer />
      </main>
    </div>
  );
}
