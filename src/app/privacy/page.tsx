import {
  PrivacyContactBand,
  PrivacyHero,
  PrivacyPolicyDocument,
} from "@/components/client/privacy-policy-document";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

import "@/styles/privacy-page.css";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `Read how ${siteConfig.name} collects, uses, and protects your personal and health information across our telehealth weight loss services.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PrivacyHero />
        <section className="privacy-body">
          <PrivacyPolicyDocument />
        </section>
        <PrivacyContactBand />
        <Footer />
      </main>
    </div>
  );
}
