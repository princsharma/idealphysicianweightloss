import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutCtaSection() {
  const { cta } = aboutContent;

  return (
    <section className="about-cta-band">
      <SectionContainer>
        <div className="about-cta-band__inner">
          <Reveal direction="up" distance={28}>
            <h2 className="about-intro__heading">{cta.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{cta.description}</p>
          </Reveal>
          <Reveal delay={0.15} variant="scale">
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-pill about-btn-pill--dark"
              >
                {cta.primaryCta}
                <span className="about-btn-pill__icon" aria-hidden>
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
              <a href={cta.secondaryHref} className="about-btn-pill about-btn-pill--light">
                {cta.secondaryCta}
                <span className="about-btn-pill__icon" aria-hidden>
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
