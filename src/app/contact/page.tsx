import {
  ContactFaqSection,
  ContactFormSection,
  ContactHeroSection,
  ContactMethodsSection,
} from "@/components/sections/contact";
import { FinalCtaSection } from "@/components/sections/home";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for patient support, billing questions, or to schedule a physician-led weight loss evaluation. Call ${siteConfig.contact.phone}.`,
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Reach our patient support team by phone, secure message, or online scheduling.`,
  },
});

export default function ContactPage() {
  return (
    <>
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
