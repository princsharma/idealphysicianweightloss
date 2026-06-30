import {
  MedicalDisclaimerAcknowledgment,
  MedicalDisclaimerCards,
  MedicalDisclaimerCta,
  MedicalDisclaimerEmergency,
  MedicalDisclaimerFda,
  MedicalDisclaimerHero,
  MedicalDisclaimerNotice,
  MedicalDisclaimerResponsibility,
  MedicalDisclaimerTelehealth,
} from "@/components/sections/medical-disclaimer";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

import "@/styles/medical-disclaimer-page.css";

export const metadata = createPageMetadata({
  title: "Medical Disclaimer",
  description: `Read the medical disclaimer for ${siteConfig.name} telehealth weight management services, including GLP-1 evaluations, telehealth limitations, and emergency guidance.`,
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <MedicalDisclaimerHero />
        <MedicalDisclaimerNotice />
        <MedicalDisclaimerCards />
        <MedicalDisclaimerResponsibility />
        <MedicalDisclaimerTelehealth />
        <MedicalDisclaimerFda />
        <MedicalDisclaimerEmergency />
        <MedicalDisclaimerAcknowledgment />
        <MedicalDisclaimerCta />
        <Footer />
      </main>
    </>
  );
}
