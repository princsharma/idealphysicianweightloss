import { MedicationLandingPage } from "@/components/sections/medications";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { tirzepatideContent } from "@/lib/constants/tirzepatide-content";

import "@/styles/hub-page.css";
import "@/styles/weight-loss-page.css";

export const metadata = createPageMetadata({
  title: "Tirzepatide for Weight Loss",
  description: `Physician-prescribed tirzepatide (Zepbound®, Mounjaro®) dual-action GLP-1/GIP therapy — benefits, eligibility, expected results, and safety at ${siteConfig.name}.`,
  path: "/weight-loss/tirzepatide",
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
