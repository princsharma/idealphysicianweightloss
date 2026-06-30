import { ArrowUpRight, Phone } from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { LinkButton } from "@/components/ui/link-button";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";

type StateCtaSectionProps = {
  content: StatePageContent;
};

export function StateCtaSection({ content }: StateCtaSectionProps) {
  const { cta, local, stateName } = content;
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`;

  return (
    <section id="start" className="scroll-mt-32 relative overflow-hidden bg-dark py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(152,197,78,0.18),transparent)]" aria-hidden />

      <SectionContainer className="relative">
        <div className="state-cta-shell p-8 sm:p-12">
          <BentoGrid className="items-center">
            <Reveal className="lg:col-span-7" direction="left" distance={28}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">{cta.eyebrow}</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight text-white">
                {cta.title}{" "}
                <span className="text-gradient">{cta.titleHighlight}</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55">{cta.description}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                Serving {stateName}
              </p>
            </Reveal>

            <Reveal className="lg:col-span-5" direction="right" distance={24} delay={0.1} variant="scale">
              <BentoCard variant="glass" hover={false} className="!border-white/10 !bg-white/[0.06]">
                <div className="flex flex-col gap-4">
                  <MagneticButton>
                    <LinkButton href={siteConfig.bookingUrl} size="xl" className="w-full rounded-full">
                      {cta.primaryCta}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </LinkButton>
                  </MagneticButton>
                  <LinkButton href={cta.secondaryHref} variant="outline-dark" size="lg" className="w-full rounded-full">
                    {cta.secondaryCta}
                  </LinkButton>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white/70 transition-colors hover:text-accent-bright"
                  >
                    <Phone className="size-4" aria-hidden />
                    Or call {siteConfig.contact.phone}
                  </a>
                </div>
              </BentoCard>
            </Reveal>
          </BentoGrid>
        </div>
      </SectionContainer>
    </section>
  );
}
