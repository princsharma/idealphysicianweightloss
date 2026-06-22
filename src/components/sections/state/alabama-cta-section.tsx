import { ArrowUpRight, Phone } from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal } from "@/components/client/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

export function AlabamaCtaSection() {
  const { cta } = alabamaContent;
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`;

  return (
    <section id="start" className="scroll-mt-32 relative overflow-hidden bg-dark py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(152,197,78,0.18),transparent)]" aria-hidden />

      <SectionContainer className="relative">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md sm:p-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" distance={28}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">{cta.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight text-white">
              {cta.title}{" "}
              <span className="text-gradient">{cta.titleHighlight}</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55">{cta.description}</p>
          </Reveal>

          <Reveal direction="right" distance={24} delay={0.1} variant="scale">
            <div className="flex flex-col gap-4">
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="xl" className="w-full rounded-full sm:w-auto">
                  {cta.primaryCta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              </MagneticButton>
              <LinkButton href={cta.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
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
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
