import { Check, X } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";
import { getIcon } from "@/lib/utils/icons";

export function WhyUsSection() {
  const { medicalFirst } = homeContent;

  return (
    <ScrollSection id="why-us" theme="dark" snap={false} className="noise py-24 sm:py-32">
      <SectionContainer>
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal direction="left" distance={32}>
              <Eyebrow>Why Ideal Physician</Eyebrow>
              <DisplayHeading className="text-white">
                {medicalFirst.title}{" "}
                <span className="text-gradient">{medicalFirst.titleHighlight}</span>
              </DisplayHeading>
              <p className="mt-8 text-lg leading-relaxed text-white/55">
                {medicalFirst.description}
              </p>
            </Reveal>

            <Stagger className="mt-12 space-y-8" stagger={0.12}>
              {medicalFirst.features.map((feature) => {
                const Icon = getIcon(feature.icon);
                return (
                  <StaggerChild key={feature.id} direction="left" distance={20}>
                    <div className="flex gap-5 border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
                      <Icon className="mt-0.5 size-5 shrink-0 text-accent-bright" aria-hidden />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/50">
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
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-dark-elevated">
                <div className="border-b border-white/10 px-8 py-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40">Comparison</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    {medicalFirst.comparison.title}
                  </h3>
                </div>

                <Stagger stagger={0.06}>
                  {medicalFirst.comparison.rows.map((row) => (
                    <StaggerChild key={row.label}>
                      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-t border-white/5 px-8 py-5 first:border-t-0">
                        <span className="text-sm text-white/80">{row.label}</span>
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
      <Check className={highlight ? "size-5 text-accent-bright" : "size-5 text-white/40"} aria-label="Yes" />
    ) : (
      <X className="size-5 text-white/20" aria-label="No" />
    );
  }

  return (
    <span className={highlight ? "font-display text-base font-semibold text-accent-bright" : "text-sm text-white/40"}>
      {value}
    </span>
  );
}
