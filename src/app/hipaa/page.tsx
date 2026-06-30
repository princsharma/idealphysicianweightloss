import {
  HipaaCommitment,
  HipaaComplaints,
  HipaaContact,
  HipaaHero,
  HipaaInformationUsage,
  HipaaPatientRights,
  HipaaReadingProgress,
  HipaaResponsibilities,
} from "@/components/sections/hipaa";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/hipaa-page.css";

export const metadata = createMetadata({
  title: "HIPAA Notice of Privacy Practices",
  description: `Read how ${siteConfig.name} protects your protected health information (PHI), your HIPAA rights, permitted uses and disclosures, and how to file a complaint.`,
  openGraph: {
    title: `HIPAA Notice | ${siteConfig.name}`,
    description:
      "Our HIPAA Notice of Privacy Practices — how we use and safeguard your health information and your rights under federal law.",
  },
});

export default function HipaaPage() {
  return (
    <>
      <HipaaReadingProgress />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HipaaHero />
        <HipaaCommitment />
        <HipaaInformationUsage />
        <HipaaPatientRights />
        <HipaaResponsibilities />
        <HipaaComplaints />
        <HipaaContact />
        <Footer />
      </main>
    </>
  );
}
