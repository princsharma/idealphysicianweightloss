import { Reveal } from "@/components/client/reveal";
import { TestimonialsCarousel } from "@/components/client/testimonials-carousel";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";

export function TestimonialsSection() {
  const { testimonials } = homeContent;

  return (
    <ScrollSection theme="light" snap={false} className="justify-center py-20">
      <SectionContainer className="flex flex-1 flex-col justify-center">
        <Reveal className="mb-14 text-center" direction="up" distance={28}>
          <Eyebrow className="text-accent">Stories</Eyebrow>
          <DisplayHeading className="mx-auto max-w-3xl text-ink">
            {testimonials.title}{" "}
            <span className="text-gradient">{testimonials.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.15} variant="scale" direction="up" distance={24}>
          <TestimonialsCarousel />
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
