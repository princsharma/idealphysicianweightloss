import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { statePageImages } from "@/lib/constants/states/state-page-media";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";

const APPROACH_PILLS = ["Personalized plans", "Physician-led", "Long-term focus"] as const;

type StateApproachSectionProps = {
  content: StatePageContent;
};

export function StateApproachSection({ content }: StateApproachSectionProps) {
  const { approach } = content;

  return (
    <section id="about" className="state-bento-section scroll-mt-32 bg-cream py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <Eyebrow className="text-accent">{approach.eyebrow}</Eyebrow>
          <DisplayHeading className="text-ink">
            {approach.title}{" "}
            <span className="text-gradient">{approach.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <BentoGrid className="mt-12 items-stretch">
          <Reveal className="lg:col-span-4" direction="left" distance={24}>
            <div className="state-image-frame h-full min-h-[280px] lg:min-h-[360px]">
              <Image
                src={statePageImages.careTeam.src}
                alt={statePageImages.careTeam.alt}
                width={480}
                height={560}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="state-image-frame__shade" aria-hidden />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4" direction="up" distance={20} delay={0.06}>
            <BentoCard variant="dark" className="flex h-full min-h-[280px] flex-col justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">Our promise</p>
              <blockquote className="state-bento-quote mt-6 text-white/90">
                &ldquo;{approach.callout}&rdquo;
              </blockquote>
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-4" direction="right" distance={24} delay={0.1}>
            <BentoCard variant="light" className="flex h-full flex-col">
              <p className="text-base leading-[1.85] text-ink-muted sm:text-[0.98rem]">{approach.body}</p>
              <div className="state-approach-pills mt-auto border-t border-ink/10 pt-6">
                {APPROACH_PILLS.map((label, index) => (
                  <span
                    key={label}
                    className={
                      index === 1
                        ? "state-approach-pill state-approach-pill--accent"
                        : index === 2
                          ? "state-approach-pill state-approach-pill--full"
                          : "state-approach-pill"
                    }
                  >
                    {label}
                  </span>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </BentoGrid>
      </SectionContainer>
    </section>
  );
}
