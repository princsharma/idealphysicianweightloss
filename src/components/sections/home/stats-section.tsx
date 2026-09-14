"use client";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { TrustMarquee } from "@/components/client/trust-marquee";
import { ImageFrame } from "@/components/ui/image-frame";
import { DisplayHeading, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { getIcon } from "@/lib/utils/icons";
import { homeContent, homeImages } from "@/lib/constants/home-content";

export function StatsSection() {
  const { statsSection, stats, statsDisclaimer } = homeContent;

  return (
    <ScrollSection theme="light" snap={false} className="justify-center">
      <Reveal variant="fade" duration={0.6}>
        <TrustMarquee />
      </Reveal>

      <SectionContainer className="flex flex-1 flex-col justify-center py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal direction="left" distance={24}>
            <DisplayHeading className="max-w-xl text-ink">
              {statsSection.title}{" "}
              <span className="text-gradient">{statsSection.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {statsSection.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} direction="right" distance={24} variant="scale">
            <ImageFrame
              {...homeImages.stats}
              ratio="wide"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </Reveal>
        </div>

        <div className="relative mt-14">
          {/* Progress rail behind the step cards */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden lg:block"
            aria-hidden
          >
            <div className="h-px bg-gradient-to-r from-transparent via-forest/25 to-transparent" />
          </div>

          <Stagger className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {stats.map((stat) => {
              const Icon = getIcon(stat.icon);

              return (
                <StaggerChild key={stat.label} variant="zoom" distance={22} className="flex">
                  <article className="group relative flex flex-1 flex-col overflow-hidden rounded-xl border border-ink/10 bg-surface p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elevated">
                    <span
                      className="pointer-events-none absolute right-1.5 top-0 translate-x-[8%] translate-y-[-12%] font-display text-[7.5rem] font-bold leading-none tracking-tight text-forest/[0.07] transition-colors duration-500 group-hover:text-accent/20"
                      aria-hidden
                    >
                      {stat.display}
                    </span>

                    <div className="relative">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-forest transition-colors duration-500 group-hover:bg-accent group-hover:text-forest-ink">
                        <Icon className="size-5" aria-hidden />
                      </span>
                    </div>

                    <h3 className="relative mt-6 type-h4 leading-snug text-ink">
                      {stat.label}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-ink-muted">
                      {stat.detail}
                    </p>

                    {/* Lime underline that draws in on hover */}
                    <span
                      className="mt-auto block h-0.5 w-10 origin-left scale-x-100 rounded-full bg-accent/50 transition-all duration-500 group-hover:w-20 group-hover:bg-accent"
                      aria-hidden
                    />
                  </article>
                </StaggerChild>
              );
            })}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl text-xs italic leading-relaxed text-ink-subtle">
            {statsDisclaimer}
          </p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
