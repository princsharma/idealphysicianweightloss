import { MapPin } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { AlabamaMapGraphic } from "@/components/sections/state/alabama-map";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

export function AlabamaCitiesSection() {
  const { cities, local } = alabamaContent;

  return (
    <section id="coverage" className="scroll-mt-32 relative overflow-hidden bg-cream py-20 sm:py-28">
      <AlabamaMapGraphic className="pointer-events-none absolute -right-16 top-1/2 h-auto w-[min(50vw,400px)] -translate-y-1/2 opacity-[0.07]" />

      <SectionContainer className="relative">
        <div className="max-w-2xl">
          <Reveal direction="up" distance={24}>
            <Eyebrow className="text-accent">{cities.eyebrow}</Eyebrow>
            <DisplayHeading className="text-ink">
              {cities.title}{" "}
              <span className="text-gradient">{cities.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-5 text-base text-ink-muted">{cities.description}</p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft">
              <MapPin className="size-4 text-accent" aria-hidden />
              All {local.counties} Alabama counties
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {cities.locations.map((location) => (
            <StaggerChild key={location.city}>
              <article className="state-city-card h-full">
                <h3 className="font-display text-lg font-semibold text-ink">{location.city}</h3>
                <p className="mt-1 text-sm text-ink-muted">{location.region}</p>
                <p className="mt-2 text-xs text-ink-subtle">{location.counties}</p>
              </article>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </section>
  );
}
