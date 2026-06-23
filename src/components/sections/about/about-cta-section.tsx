import { ArrowUpRight, Users } from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutCtaSection() {
  const { trust, join, finalCta } = aboutContent;

  return (
    <>
      <section className="about-ref-trust">
        <SectionContainer>
          <Reveal direction="up" distance={24} className="about-ref-section-header">
            <h2 className="about-ref-heading text-center">{trust.title}</h2>
            <p className="about-ref-body about-ref-section-header__sub mx-auto mt-4 text-center">
              {trust.description}
            </p>
            <p className="about-ref-trust__tagline mt-6 text-center">{trust.tagline}</p>
          </Reveal>
        </SectionContainer>
      </section>

      <section className="about-ref-join">
        <SectionContainer>
          <Reveal direction="up" distance={24} className="about-ref-join__inner">
            <h2 className="about-ref-heading text-center">{join.title}</h2>
            <p className="about-ref-body mx-auto mt-4 max-w-2xl text-center">{join.description}</p>
            <div className="mt-8 text-center">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-ref-btn about-ref-btn--outline"
              >
                {join.cta}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </SectionContainer>
      </section>

      <section className="about-ref-final-cta">
        <SectionContainer>
          <Reveal direction="up" distance={24}>
            <div className="about-ref-final-cta__inner">
              <span className="about-ref-final-cta__icon" aria-hidden>
                <Users className="size-8" />
              </span>
              <h2 className="about-ref-final-cta__title">{finalCta.title}</h2>
              <p className="about-ref-final-cta__desc">{finalCta.description}</p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-ref-btn about-ref-btn--lime"
              >
                {finalCta.cta}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </SectionContainer>
      </section>
    </>
  );
}
