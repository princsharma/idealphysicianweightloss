import {
  AboutCtaSection,
  AboutDeliverySection,
  AboutFounderSection,
  AboutHeroSection,
  AboutMissionSection,
  AboutScienceSection,
  AboutStepsSection,
  AboutTeamSection,
  AboutValuesSection,
  AboutWhyChooseSection,
} from "@/components/sections/about";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { buildAboutPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/config/site";

import "@/styles/about-page.css";

export const metadata = createPageMetadata({
  title: "About Us",
  description: `Learn how ${siteConfig.name} delivers physician-guided, FDA-approved GLP-1 weight loss care through secure telehealth — personalized plans, licensed doctors, and pharmacy fulfillment.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="about-page">
      <JsonLd data={buildAboutPageSchema()} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AboutHeroSection />
        <AboutMissionSection />
        <AboutFounderSection />
        <AboutWhyChooseSection />
        <AboutStepsSection />
        <AboutValuesSection />
        <AboutScienceSection />
        <AboutTeamSection />
        <AboutDeliverySection />
        <AboutCtaSection />
        <Footer />
      </main>
    </div>
  );
}
