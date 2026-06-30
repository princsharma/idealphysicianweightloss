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
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

import "@/styles/hipaa-page.css";

export const metadata = createPageMetadata({
  title: "HIPAA Notice of Privacy Practices",
  description: `Read how ${siteConfig.name} protects your protected health information (PHI), your HIPAA rights, permitted uses and disclosures, and how to file a complaint.`,
  path: "/hipaa",
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
