import { Reveal } from "@/components/client/reveal";
import { TreatmentsScroll } from "@/components/client/treatments-scroll";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";

export function TreatmentsSection() {
  const { medications } = homeContent;

  return (
    <ScrollSection id="treatments" theme="light" snap={false} className="justify-center py-20">
      <SectionContainer className="flex flex-1 flex-col justify-center">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl" direction="left" distance={28}>
            <Eyebrow className="text-accent">Treatments</Eyebrow>
            <DisplayHeading className="text-ink">
              {medications.title}{" "}
              <span className="text-gradient">{medications.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.12} direction="right" distance={20} variant="fade">
            <p className="max-w-sm text-ink-muted lg:text-right">{medications.description}</p>
          </Reveal>
        </div>

        <TreatmentsScroll products={medications.products} />
      </SectionContainer>
    </ScrollSection>
  );
}
