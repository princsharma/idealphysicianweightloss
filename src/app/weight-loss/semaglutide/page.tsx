import { MedicationLandingPage } from "@/components/sections/medications";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { semaglutideContent } from "@/lib/constants/semaglutide-content";

import "@/styles/hub-page.css";
import "@/styles/weight-loss-page.css";

export const metadata = createPageMetadata({
  title: "Semaglutide for Weight Loss",
  description: `Physician-prescribed semaglutide (Wegovy®, Ozempic®) for weight management — how it works, eligibility, results, safety, and treatment at ${siteConfig.name}.`,
  path: "/weight-loss/semaglutide",
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
