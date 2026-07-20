import { ErrorPageLayout } from "@/components/sections/errors";
import { createMetadata } from "@/config/metadata";
import { errorPageLinks, goneContent } from "@/lib/constants/error-pages-content";

export const metadata = createMetadata({
  title: "Content removed",
  description:
    "This page has been permanently removed and is no longer available on Ideal Physician Weight Loss.",
  robots: { index: false, follow: false },
});

export default function GonePage() {
  return (
    <ErrorPageLayout
      code={goneContent.code}
      eyebrow={goneContent.eyebrow}
      title={goneContent.title}
      description={goneContent.description}
      primaryCta={goneContent.primaryCta}
      contactPrompt={goneContent.contactPrompt}
      links={errorPageLinks}
    />
  );
}
