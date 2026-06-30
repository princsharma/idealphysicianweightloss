import {
  HowItWorksCta,
  HowItWorksDelivery,
  HowItWorksFaq,
  HowItWorksFollowUp,
  HowItWorksHero,
  HowItWorksMedicalEvaluation,
  HowItWorksOngoingSupport,
  HowItWorksOverview,
  HowItWorksPrescription,
  HowItWorksTimeline,
} from "@/components/sections/how-it-works";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createPageMetadata({
  title: "How It Works",
  description: `Your complete patient journey at ${siteConfig.name} — eligibility, physician consultation, prescription, delivery, and ongoing support.`,
  path: "/weight-loss/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HowItWorksHero />
        <HowItWorksOverview />
        <HowItWorksTimeline />
        <HowItWorksMedicalEvaluation />
        <HowItWorksPrescription />
        <HowItWorksDelivery />
        <HowItWorksOngoingSupport />
        <HowItWorksFollowUp />
        <HowItWorksFaq />
        <HowItWorksCta />
        <Footer />
      </main>
    </>
  );
}
