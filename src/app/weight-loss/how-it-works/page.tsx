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
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createMetadata({
  title: "How It Works",
  description: `Your complete patient journey at ${siteConfig.name} — eligibility, physician consultation, prescription, delivery, and ongoing support.`,
  openGraph: {
    title: `How It Works | ${siteConfig.name}`,
    description:
      "Step-by-step guide to physician-guided GLP-1 weight loss — from first quiz to home delivery and follow-up care.",
  },
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
