import {
  EditorialCta,
  EditorialDisclaimers,
  EditorialFactChecking,
  EditorialHero,
  EditorialIndependence,
  EditorialIntro,
  EditorialProfessionals,
  EditorialReviewProcess,
  EditorialReviewTeam,
  EditorialSources,
  EditorialStandards,
  EditorialTimeline,
  EditorialUpdates,
} from "@/components/sections/editorial";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createMetadata({
  title: "Editorial Policy",
  description: `How ${siteConfig.name} creates, reviews, and publishes evidence-based health content — editorial standards, medical review, and E-E-A-T.`,
  openGraph: {
    title: `Editorial Policy | ${siteConfig.name}`,
    description:
      "Our editorial standards, medical review process, fact-checking, and expert review team.",
  },
});

export default function EditorialPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <EditorialHero />
        <EditorialIntro />
        <EditorialStandards />
        <EditorialReviewProcess />
        <EditorialFactChecking />
        <EditorialSources />
        <EditorialUpdates />
        <EditorialProfessionals />
        <EditorialIndependence />
        <EditorialTimeline />
        <EditorialReviewTeam />
        <EditorialDisclaimers />
        <EditorialCta />
        <Footer />
      </main>
    </>
  );
}
