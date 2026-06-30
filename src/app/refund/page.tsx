import {
  RefundCancellation,
  RefundCommitment,
  RefundContact,
  RefundEligibility,
  RefundFaq,
  RefundHero,
  RefundOverview,
  RefundPayment,
  RefundSubscription,
} from "@/components/sections/refund";
import { Footer, Header } from "@/components/layout";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

import "@/styles/hub-page.css";

export const metadata = createMetadata({
  title: "Refund & Billing Policy",
  description: `Cancellation, refund eligibility, subscription policy, and billing support at ${siteConfig.name}.`,
  openGraph: {
    title: `Refund & Billing Policy | ${siteConfig.name}`,
    description:
      "Transparent policies on consultation fees, medication refunds, cancellations, and payment support.",
  },
});

export default function RefundPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <RefundHero />
        <RefundOverview />
        <RefundEligibility />
        <RefundSubscription />
        <RefundCancellation />
        <RefundPayment />
        <RefundCommitment />
        <RefundFaq />
        <RefundContact />
        <Footer />
      </main>
    </>
  );
}
