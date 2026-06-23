import {
  PrivacyContactBand,
  PrivacyHero,
  PrivacyPolicyDocument,
} from "@/components/client/privacy-policy-document";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/privacy-page.css";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Read how ${siteConfig.name} collects, uses, and protects your personal and health information across our telehealth weight loss services.`,
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Our commitment to protecting your privacy — data collection, usage, security, and your rights explained.",
  },
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
