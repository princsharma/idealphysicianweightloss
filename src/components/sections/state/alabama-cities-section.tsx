import { MapPin } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { AlabamaMapGraphic } from "@/components/sections/state/alabama-map";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";

type StateCitiesSectionProps = {
  content: StatePageContent;
};

export function StateCitiesSection({ content }: StateCitiesSectionProps) {
  const { cities, local, stateName } = content;
  const [featured, ...rest] = cities.locations;

  return (
    <section id="coverage" className="state-bento-section scroll-mt-32 relative overflow-hidden bg-cream py-20 sm:py-28">
      {content.showStateMap ? (
        <AlabamaMapGraphic className="pointer-events-none absolute -right-16 top-1/2 h-auto w-[min(50vw,400px)] -translate-y-1/2 opacity-[0.07]" />
      ) : null}

      <SectionContainer className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal direction="up" distance={24} className="max-w-2xl">
            <Eyebrow className="text-accent">{cities.eyebrow}</Eyebrow>
            <DisplayHeading className="text-ink">
              {cities.title}{" "}
              <span className="text-gradient">{cities.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-4 text-base text-ink-muted">{cities.description}</p>
          </Reveal>

          <Reveal delay={0.08} variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-soft">
              <MapPin className="size-4 text-accent" aria-hidden />
              {local.countiesLabel}
            </span>
          </Reveal>
        </div>

        <BentoGrid className="mt-12 items-stretch">
          {featured ? (
            <Reveal className="sm:col-span-2 lg:col-span-5" direction="left" distance={24}>
              <BentoCard variant="dark" className="state-city-bento-featured flex h-full min-h-[240px] flex-col justify-end !p-0 overflow-hidden">
                <div className="relative flex flex-1 flex-col justify-end p-6 sm:p-8">
                  <div className="state-city-bento-featured__bg" aria-hidden />
                  <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">
                    {stateName} hub
                  </p>
                  <h3 className="relative mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                    {featured.city}
                  </h3>
                  <p className="relative mt-2 text-base text-white/60">{featured.region}</p>
                  <p className="relative mt-1 text-sm text-white/40">{featured.counties}</p>
                </div>
              </BentoCard>
            </Reveal>
          ) : null}

          <div className="sm:col-span-2 lg:col-span-7">
            <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
              {rest.map((location) => (
                <StaggerChild key={location.city}>
                  <BentoCard variant="light" className="h-full !p-5">
                    <h3 className="font-display text-base font-semibold text-ink">{location.city}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{location.region}</p>
                    <p className="mt-2 text-xs text-ink-subtle">{location.counties}</p>
                  </BentoCard>
                </StaggerChild>
              ))}
            </Stagger>
          </div>
        </BentoGrid>
      </SectionContainer>
    </section>
  );
}
