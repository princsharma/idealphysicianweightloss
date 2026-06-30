import {
  WeightLossBenefits,
  WeightLossCta,
  WeightLossEligibility,
  WeightLossFaq,
  WeightLossHero,
  WeightLossHowItWorks,
  WeightLossJourney,
  WeightLossMedications,
  WeightLossOverview,
  WeightLossPricing,
  WeightLossTestimonials,
  WeightLossWhyMedical,
} from "@/components/sections/weight-loss";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

import "@/styles/weight-loss-page.css";

export const metadata = createPageMetadata({
  title: "Medical Weight Loss Program",
  description: `Physician-guided GLP-1 weight loss with semaglutide & tirzepatide — same-day telehealth, FDA-approved medications, and plans from $299/month at ${siteConfig.name}.`,
  path: "/weight-loss",
});

export default function WeightLossPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <WeightLossHero />
        <WeightLossOverview />
        <WeightLossWhyMedical />
        <WeightLossMedications />
        <WeightLossHowItWorks />
        <WeightLossEligibility />
        <WeightLossBenefits />
        <WeightLossJourney />
        <WeightLossPricing />
        <WeightLossFaq />
        <WeightLossTestimonials />
        <WeightLossCta />
        <Footer />
      </main>
    </>
  );
}
