import { Check, X } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { ImageFrame } from "@/components/ui/image-frame";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent, homeImages } from "@/lib/constants/home-content";
import { getIcon } from "@/lib/utils/icons";

export function WhyUsSection() {
  const { medicalFirst } = homeContent;

  return (
    <ScrollSection
      id="why-us"
      theme="light"
      snap={false}
      className="home-why-panel gradient-light relative overflow-hidden py-28 sm:py-36"
    >
      <div className="home-atmosphere" aria-hidden>
        <div className="home-grid-lines" />
        <div className="orb -right-16 top-20 size-96 bg-lime/25" />
        <div className="orb -left-20 bottom-0 size-80 bg-forest/10" />
      </div>
      <SectionContainer className="relative">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal direction="left" distance={32}>
              <Eyebrow className="text-forest">Why Ideal Physician</Eyebrow>
              <DisplayHeading className="text-ink">
                {medicalFirst.title}{" "}
                <span className="text-gradient">{medicalFirst.titleHighlight}</span>
              </DisplayHeading>
              <p className="mt-8 text-lg leading-relaxed text-ink-muted">
                {medicalFirst.description}
              </p>
            </Reveal>

            <Stagger className="mt-12 space-y-8" stagger={0.12}>
              {medicalFirst.features.map((feature) => {
                const Icon = getIcon(feature.icon);
                return (
                  <StaggerChild key={feature.id} direction="left" distance={20}>
                    <div className="flex gap-5 border-t border-border-strong pt-8 first:border-t-0 first:pt-0">
                      <Icon className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden />
                      <div>
                        <h3 className="type-h4 text-ink">{feature.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerChild>
                );
              })}
            </Stagger>
          </div>

          <Reveal delay={0.15} direction="right" distance={32} variant="scale">
            <div className="lg:pt-16">
              <ImageFrame
                {...homeImages.whyUs}
                ratio="landscape"
                theme="light"
                className="mb-6"
                sizes="(max-width: 1024px) 100vw, 560px"
              />

              <div className="home-comparison overflow-hidden">
                <div className="border-b border-border-strong px-8 py-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-subtle">Comparison</p>
                  <h3 className="mt-2 type-h3 text-ink">{medicalFirst.comparison.title}</h3>
                </div>

                <Stagger stagger={0.06}>
                  {medicalFirst.comparison.rows.map((row) => (
                    <StaggerChild key={row.label}>
                      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-t border-border-strong/60 px-8 py-5 first:border-t-0">
                        <span className="text-sm text-ink">{row.label}</span>
                        <Cell value={row.us} highlight />
                        <Cell value={row.them} />
                      </div>
                    </StaggerChild>
                  ))}
                </Stagger>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

function Cell({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check
        className={highlight ? "size-5 text-forest" : "size-5 text-ink-subtle"}
        aria-label="Yes"
      />
    ) : (
      <X className="size-5 text-ink-subtle/60" aria-label="No" />
    );
  }

  return (
    <span
      className={
        highlight ? "font-display text-base font-semibold text-forest" : "text-sm text-ink-subtle"
      }
    >
      {value}
    </span>
  );
}
