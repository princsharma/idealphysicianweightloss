import { TermsContactBand, TermsDocument, TermsHero } from "@/components/client/terms-document";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/privacy-page.css";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: `Read the Terms & Conditions governing your use of ${siteConfig.name} telehealth consultation services, website, and related features.`,
  openGraph: {
    title: `Terms & Conditions | ${siteConfig.name}`,
    description:
      "Service use terms including eligibility, telehealth consent, payments, user conduct, and contact information.",
  },
});

export default function TermsPage() {
  return (
    <div className="terms-page privacy-page">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <TermsHero />
        <section className="privacy-body">
          <TermsDocument />
        </section>
        <TermsContactBand />
        <Footer />
      </main>
    </div>
  );
}
