import { FaqPageDocument } from "@/components/client/faq-page-document";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/faq-page.css";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description: `Answers about ${siteConfig.name} weight loss programs, GLP-1 medications, pricing, eligibility, safety, and patient support.`,
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Searchable FAQ covering treatment, medications, pricing, safety, and account support.",
  },
});

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <FaqPageDocument />
        <Footer />
      </main>
    </>
  );
}
