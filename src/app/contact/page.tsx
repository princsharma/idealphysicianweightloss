import {
  ContactFaqSection,
  ContactFormSection,
  ContactHeroSection,
  ContactMethodsSection,
} from "@/components/sections/contact";
import { FinalCtaSection } from "@/components/sections/home";
import { Footer, Header } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import { buildContactPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for patient support, billing questions, or to schedule a physician-led weight loss evaluation. Call ${siteConfig.contact.phone}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildContactPageSchema()} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ContactHeroSection />
        <ContactFormSection />
        <ContactMethodsSection />
        <ContactFaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
    </>
  );
}
