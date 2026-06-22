import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal } from "@/components/client/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { DisplayHeading, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";

export function FinalCtaSection() {
  const { finalCta } = homeContent;

  return (
    <ScrollSection theme="dark" snap="screen" stack={false} className="gradient-cta noise justify-center">
      <div className="orb left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent/15" aria-hidden />

      <SectionContainer className="relative flex flex-1 flex-col items-center justify-center py-20 text-center">
        <Reveal direction="up" distance={40}>
          <DisplayHeading size="xl" className="max-w-4xl text-white">
            {finalCta.title}{" "}
            <span className="text-gradient">{finalCta.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.15} direction="up" distance={24} variant="fade">
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 sm:text-xl">
            {finalCta.description}
          </p>
        </Reveal>
        <Reveal delay={0.25} direction="up" distance={20} variant="scale">
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                {finalCta.primaryCta}
                <ArrowUpRight className="size-4" />
              </LinkButton>
            </MagneticButton>
            <LinkButton href={siteConfig.bookingUrl} variant="outline-dark" size="lg" className="rounded-full">
              {finalCta.secondaryCta}
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
