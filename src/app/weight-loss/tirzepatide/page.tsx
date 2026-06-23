import { MedicationLandingPage } from "@/components/sections/medications";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";
import { tirzepatideContent } from "@/lib/constants/tirzepatide-content";

import "@/styles/hub-page.css";
import "@/styles/weight-loss-page.css";

export const metadata = createMetadata({
  title: "Tirzepatide for Weight Loss",
  description: `Physician-prescribed tirzepatide (Zepbound®, Mounjaro®) dual-action GLP-1/GIP therapy — benefits, eligibility, expected results, and safety at ${siteConfig.name}.`,
  openGraph: {
    title: `Tirzepatide | ${siteConfig.name}`,
    description:
      "Premium tirzepatide landing page — dual-action mechanism, weight loss outcomes, treatment timeline, and licensed care.",
  },
});

export default function TirzepatidePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <MedicationLandingPage content={tirzepatideContent} />
        <Footer />
      </main>
    </>
  );
}
