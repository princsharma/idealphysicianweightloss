import { Reveal, RevealLine } from "@/components/client/reveal";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const { howItWorks } = homeContent;

  return (
    <ScrollSection id="process" theme="dark" snap={false} className="noise justify-center py-20">
      <SectionContainer className="flex flex-1 flex-col justify-center">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={32}>
            <Eyebrow>How it works</Eyebrow>
            <DisplayHeading className="text-white">
              {howItWorks.title}{" "}
              <span className="text-gradient">{howItWorks.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-white/50">
            No in-person visits required. Our streamlined process connects you with a licensed provider for GLP-1 evaluation and ongoing care.
            </p>
            <RevealLine className="mt-10 bg-accent/30" delay={0.2} />
          </Reveal>

          <div className="relative lg:col-span-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent lg:left-6" aria-hidden />

            <ol className="space-y-0">
              {howItWorks.steps.map((step, index) => {
                const Icon = getIcon(step.icon);
                const isLast = index === howItWorks.steps.length - 1;

                return (
                  <Reveal key={step.id} delay={index * 0.12} direction="right" distance={24}>
                    <li
                      className={cn(
                        "relative grid gap-6 pb-16 pl-14 lg:grid-cols-[1fr_auto] lg:pl-20",
                        isLast && "pb-0",
                      )}
                    >
                      <span
                        className="absolute left-0 flex size-8 items-center justify-center rounded-full border border-accent/40 bg-dark font-display text-sm font-semibold text-accent-bright lg:size-12 lg:text-base"
                        aria-hidden
                      >
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-lg text-base leading-relaxed text-white/55">
                          {step.description}
                        </p>
                      </div>

                      <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:size-16">
                        <Icon className="size-6 text-accent-bright lg:size-7" aria-hidden />
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>

            <Reveal delay={0.2}>
              <div className="mt-10 border-t border-white/10 pt-8 pl-14 lg:pl-20">
                <p className="text-xs font-medium text-white/50">Disclaimer</p>
                <p className="mt-2 max-w-lg text-xs italic leading-relaxed text-white/40">
                  {howItWorks.disclaimer}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}
