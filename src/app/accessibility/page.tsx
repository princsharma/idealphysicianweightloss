import {
  AccessibilityCommitment,
  AccessibilityContact,
  AccessibilityFeedback,
  AccessibilityHero,
  AccessibilityImprovements,
  AccessibilityKeyboard,
  AccessibilityScreenReader,
  AccessibilityTechnologies,
} from "@/components/sections/accessibility";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/accessibility-page.css";

export const metadata = createMetadata({
  title: "Accessibility Statement",
  description: `${siteConfig.name} accessibility commitment — WCAG 2.1 AA standards, keyboard navigation, screen reader support, and how to report barriers.`,
  openGraph: {
    title: `Accessibility | ${siteConfig.name}`,
    description:
      "Our accessibility statement covering supported technologies, navigation, ongoing improvements, and feedback.",
  },
});

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AccessibilityHero />
        <AccessibilityCommitment />
        <AccessibilityTechnologies />
        <AccessibilityKeyboard />
        <AccessibilityScreenReader />
        <AccessibilityImprovements />
        <AccessibilityFeedback />
        <AccessibilityContact />
        <Footer />
      </main>
    </>
  );
}
