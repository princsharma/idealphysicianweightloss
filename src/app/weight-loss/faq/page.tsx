import { FaqPageDocument } from "@/components/client/faq-page-document";
import { Footer, Header } from "@/components/layout";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/config/site";
import { getAllFaqItems } from "@/lib/constants/faq-page-content";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqSchema } from "@/lib/schema";

import "@/styles/faq-page.css";

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description: `Answers about ${siteConfig.name} weight loss programs, GLP-1 medications, pricing, eligibility, safety, and patient support.`,
  path: "/weight-loss/faq",
});

export default function FaqPage() {
  const faqSchema = buildFaqSchema(
    getAllFaqItems().map((item) => ({ question: item.question, answer: item.answer })),
  );

  return (
    <>
      <JsonLd data={faqSchema} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <FaqPageDocument />
        <Footer />
      </main>
    </>
  );
}
