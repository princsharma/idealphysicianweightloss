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
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createPageMetadata({
  title: "Compliance Hub",
  description: `Telehealth compliance, medical licensing, HIPAA, FDA-approved medications, prescription requirements, and state coverage at ${siteConfig.name}.`,
  path: "/compliance",
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
