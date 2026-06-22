"use client";

import { CountUp } from "@/components/client/count-up";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { TrustMarquee } from "@/components/client/trust-marquee";
import { DisplayHeading, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";

export function StatsSection() {
  const { stats } = homeContent;

  return (
    <ScrollSection theme="light" snap="screen" className="justify-center pt-4">
      <Reveal variant="fade" duration={0.6}>
        <TrustMarquee />
      </Reveal>

      <SectionContainer className="flex flex-1 flex-col justify-center py-12 sm:py-16">
        <Reveal direction="left" distance={24}>
          <DisplayHeading size="md" className="max-w-xl text-ink">
            The numbers behind{" "}
            <span className="text-gradient">real transformations</span>
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 border-t border-ink/10 lg:grid-cols-4" stagger={0.12}>
          {stats.map((stat) => (
            <StaggerChild key={stat.label}>
              <div className="border-b border-ink/10 py-10 odd:pl-0 even:pl-6 sm:even:pl-10 lg:border-b-0 lg:border-r lg:py-14 lg:pl-0 lg:pr-10 last:lg:border-r-0">
                <p className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-none tracking-tight text-ink">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-4 text-sm font-medium text-ink">{stat.label}</p>
                <p className="mt-1 text-xs text-ink-subtle">{stat.detail}</p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}
