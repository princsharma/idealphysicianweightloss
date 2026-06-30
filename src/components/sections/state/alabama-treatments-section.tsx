import { Reveal } from "@/components/client/reveal";
import { StateTreatmentsCarousel } from "@/components/sections/state/state-treatments-carousel";
import { BentoCard } from "@/components/ui/bento-card";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";

type StateTreatmentsSectionProps = {
  content: StatePageContent;
};

export function StateTreatmentsSection({ content }: StateTreatmentsSectionProps) {
  const { treatments, stateName } = content;

  return (
    <section id="treatments" className="scroll-mt-32 relative overflow-hidden bg-dark py-16 sm:py-24">
      <div className="orb -left-32 top-1/4 size-80 bg-accent/10" aria-hidden />
      <div className="orb right-0 bottom-0 size-96 bg-lime/5" aria-hidden />

      <SectionContainer className="relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7" direction="left" distance={24}>
            <Eyebrow>{treatments.eyebrow}</Eyebrow>
            <DisplayHeading className="max-w-2xl text-white">
              {treatments.title}{" "}
              <span className="text-gradient">{treatments.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1} variant="fade">
            <BentoCard variant="glass" className="!p-5">
              <p className="text-sm leading-relaxed text-white/60">{treatments.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent-bright">
                Available in {stateName}
              </p>
            </BentoCard>
          </Reveal>
        </div>

        <StateTreatmentsCarousel products={treatments.products} />

        <Reveal delay={0.15} variant="fade">
          <p className="mt-6 max-w-4xl text-xs leading-relaxed text-white/30">{treatments.disclaimer}</p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
