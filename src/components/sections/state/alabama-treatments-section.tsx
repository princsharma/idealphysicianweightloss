import { Reveal } from "@/components/client/reveal";
import { StateTreatmentsCarousel } from "@/components/sections/state/state-treatments-carousel";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

export function AlabamaTreatmentsSection() {
  const { treatments } = alabamaContent;

  return (
    <section id="treatments" className="scroll-mt-32 bg-dark py-16 sm:py-20">
      <div className="orb -left-32 top-1/4 size-80 bg-accent/10" aria-hidden />

      <SectionContainer className="relative">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal direction="left" distance={24}>
            <Eyebrow>{treatments.eyebrow}</Eyebrow>
            <DisplayHeading className="max-w-2xl text-white">
              {treatments.title}{" "}
              <span className="text-gradient">{treatments.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.1} variant="fade">
            <p className="max-w-md text-sm leading-relaxed text-white/50 lg:text-right">{treatments.description}</p>
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
