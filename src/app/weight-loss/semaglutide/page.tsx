import { MedicationLandingPage } from "@/components/sections/medications";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";
import { semaglutideContent } from "@/lib/constants/semaglutide-content";

import "@/styles/hub-page.css";
import "@/styles/weight-loss-page.css";

export const metadata = createMetadata({
  title: "Semaglutide for Weight Loss",
  description: `Physician-prescribed semaglutide (Wegovy®, Ozempic®) for weight management — how it works, eligibility, results, safety, and treatment at ${siteConfig.name}.`,
  openGraph: {
    title: `Semaglutide | ${siteConfig.name}`,
    description:
      "Premium semaglutide landing page — GLP-1 therapy, clinical benefits, treatment process, and licensed physician care.",
  },
});

export default function SemaglutidePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <MedicationLandingPage content={semaglutideContent} />
        <Footer />
      </main>
    </>
  );
}
