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
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/medical-disclaimer-page.css";

export const metadata = createMetadata({
  title: "Medical Disclaimer",
  description: `Read the medical disclaimer for ${siteConfig.name} telehealth weight management services, including GLP-1 evaluations, telehealth limitations, and emergency guidance.`,
  openGraph: {
    title: `Medical Disclaimer | ${siteConfig.name}`,
    description:
      "Important medical limitations, telehealth scope, FDA medication information, and emergency care guidance.",
  },
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
