import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";

export function HeroStartBand() {
  const { startBar } = homeContent.hero;

  return (
    <div className="mary-startband__card">
      <div className="mary-startband__copy">
        <b>Start My Evaluation</b>
        <span>{startBar.steps}</span>
      </div>

      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mary-btn--lime mary-startband__cta"
      >
        {startBar.cta}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>

      <div className="mary-startband__micro">
        <span>HIPAA secure</span>
        <i>·</i>
        <span>FDA-approved options</span>
        <i>·</i>
        <span>48 states covered</span>
      </div>
    </div>
  );
}
