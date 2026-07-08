"use client";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { TrustMarquee } from "@/components/client/trust-marquee";
import { DisplayHeading, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { cn } from "@/lib/utils";
import { homeContent } from "@/lib/constants/home-content";

const statValueClass =
  "text-[clamp(1.25rem,2.2vw,1.875rem)] leading-[1.15] tracking-tight";

export function StatsSection() {
  const { statsSection, stats, statsDisclaimer } = homeContent;

  return (
    <ScrollSection theme="light" snap={false} className="justify-center pt-4">
      <Reveal variant="fade" duration={0.6}>
        <TrustMarquee />
      </Reveal>

      <SectionContainer className="flex flex-1 flex-col justify-center py-12 sm:py-16">
        <Reveal direction="left" distance={24}>
          <DisplayHeading size="md" className="max-w-xl text-ink">
            {statsSection.title}{" "}
            <span className="text-gradient">{statsSection.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {statsSection.description}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 border-t border-ink/10 lg:grid-cols-4" stagger={0.12}>
          {stats.map((stat) => (
            <StaggerChild key={stat.label}>
              <div className="border-b border-ink/10 py-10 odd:pl-0 even:pl-6 sm:even:pl-10 lg:border-b-0 lg:border-r lg:py-14 lg:pl-0 lg:pr-10 last:lg:border-r-0">
                <div className="font-display font-semibold text-ink">
                  <span className={cn("block", statValueClass)}>{stat.display}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-ink">{stat.label}</p>
                <p className="mt-1 text-xs text-ink-subtle">{stat.detail}</p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl text-xs italic leading-relaxed text-ink-subtle">
            {statsDisclaimer}
          </p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
