import {
  ComplianceCta,
  ComplianceFaq,
  ComplianceFda,
  ComplianceHero,
  ComplianceHipaa,
  ComplianceLicensing,
  CompliancePatientSafety,
  CompliancePrescription,
  ComplianceSecurity,
  ComplianceStates,
  ComplianceTelehealth,
} from "@/components/sections/compliance";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createMetadata({
  title: "Compliance Hub",
  description: `Telehealth compliance, medical licensing, HIPAA, FDA-approved medications, prescription requirements, and state coverage at ${siteConfig.name}.`,
  openGraph: {
    title: `Compliance Hub | ${siteConfig.name}`,
    description:
      "Learn how we deliver regulated, HIPAA-secure telehealth with licensed physicians and compliant prescribing.",
  },
});

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ComplianceHero />
        <ComplianceTelehealth />
        <ComplianceLicensing />
        <CompliancePatientSafety />
        <ComplianceHipaa />
        <CompliancePrescription />
        <ComplianceFda />
        <ComplianceStates />
        <ComplianceSecurity />
        <ComplianceFaq />
        <ComplianceCta />
        <Footer />
      </main>
    </>
  );
}
