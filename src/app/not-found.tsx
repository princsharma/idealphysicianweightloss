import { ErrorPageLayout } from "@/components/sections/errors";
import { errorPageLinks, notFoundContent } from "@/lib/constants/error-pages-content";

export default function NotFound() {
  return (
    <ErrorPageLayout
      code={notFoundContent.code}
      eyebrow={notFoundContent.eyebrow}
      title={notFoundContent.title}
      description={notFoundContent.description}
      primaryCta={notFoundContent.primaryCta}
      contactPrompt={notFoundContent.contactPrompt}
      links={errorPageLinks}
    />
  );
}
