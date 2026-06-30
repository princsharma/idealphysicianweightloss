import type { StatePageContent } from "@/lib/constants/states/state-page-types";

import {
  StateApproachSection,
  StateCitiesSection,
  StateCtaSection,
  StateFaqSection,
  StateHeroSection,
  StatePathSection,
  StatePersonasSnap,
  StateTestimonialsSection,
  StateTreatmentsSection,
} from "@/components/sections/state";

type StateLandingPageProps = {
  content: StatePageContent;
};

export function StateLandingPage({ content }: StateLandingPageProps) {
  return (
    <div className="state-page">
      <main id="main-content" tabIndex={-1}>
        <StateHeroSection content={content} />
        <StatePersonasSnap content={content} />
        <StateApproachSection content={content} />
        <StateTreatmentsSection content={content} />
        <StatePathSection content={content} />
        <StateTestimonialsSection content={content} />
        <StateCitiesSection content={content} />
        <StateFaqSection content={content} />
        <StateCtaSection content={content} />
      </main>
    </div>
  );
}
