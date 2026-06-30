import {
  PhysiciansCommitment,
  PhysiciansCompliance,
  PhysiciansConditions,
  PhysiciansCta,
  PhysiciansHero,
  PhysiciansPhilosophy,
  PhysiciansProviders,
  PhysiciansReviewProcess,
  PhysiciansStates,
  PhysiciansWhyChoose,
} from "@/components/sections/physicians";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createMetadata({
  title: "Our Physicians",
  description: `Meet the licensed physicians at ${siteConfig.name} — board-certified experts in GLP-1 therapy, metabolic health, and physician-guided weight loss.`,
  openGraph: {
    title: `Our Physicians | ${siteConfig.name}`,
    description:
      "Licensed U.S. physicians delivering HIPAA-secure telehealth consultations and evidence-based weight management care.",
  },
});

export default function PhysiciansPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PhysiciansHero />
        <PhysiciansProviders />
        <PhysiciansWhyChoose />
        <PhysiciansConditions />
        <PhysiciansPhilosophy />
        <PhysiciansReviewProcess />
        <PhysiciansCompliance />
        <PhysiciansStates />
        <PhysiciansCommitment />
        <PhysiciansCta />
        <Footer />
      </main>
    </>
  );
}
