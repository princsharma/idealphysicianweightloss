import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal } from "@/components/client/reveal";
import { AlabamaMapGraphic } from "@/components/sections/state/alabama-map";
import { StateLocalNav } from "@/components/sections/state/state-local-nav";
import { LinkButton } from "@/components/ui/link-button";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

export function AlabamaHeroSection() {
  const { hero, path, local } = alabamaContent;
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`;

  return (
    <section className="state-hero noise">
      <div className="state-hero__grid" aria-hidden />
      <AlabamaMapGraphic className="state-hero__map-bg" />

      <SectionContainer className="relative">
        <Reveal direction="up" distance={24}>
          <div className="state-live-pill">
            <span className="state-live-pill__dot" aria-hidden />
            Licensed care · {local.counties} counties
          </div>
        </Reveal>

        <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal direction="up" distance={32}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">{hero.eyebrow}</p>
              <h1 className="state-hero__title mt-4">
                {hero.title}{" "}
                <em>
                  {hero.titleHighlight} {hero.titleEnd}
                </em>
              </h1>
            </Reveal>
            <Reveal delay={0.1} direction="up" distance={20} variant="fade">
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{local.tagline}</p>
              <p className="mt-3 text-sm text-white/45">{hero.disclaimer}</p>
            </Reveal>
            <Reveal delay={0.18} variant="scale">
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                    {hero.primaryCta}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </LinkButton>
                </MagneticButton>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Phone className="size-4 text-accent-bright" aria-hidden />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24} variant="fade">
              <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8">
                {hero.highlights.map((item) => (
                  <div key={item.detail}>
                    <p className="font-display text-2xl font-semibold text-accent-bright">{item.label}</p>
                    <p className="mt-1 text-xs text-white/45">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" distance={28} variant="scale" delay={0.12}>
            <div className="state-journey-card p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">
                Your Alabama path
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">3 steps to get started</p>
              <div className="mt-6">
                {path.steps.map((step, i) => (
                  <div key={step.id} className="state-journey-step">
                    <span className="state-journey-step__num">{i + 1}</span>
                    <div>
                      <p className="font-medium text-white">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <LinkButton
                href="#path"
                variant="secondary"
                size="md"
                className="mt-6 w-full rounded-full"
              >
                See full journey
                <ChevronDown className="size-4" aria-hidden />
              </LinkButton>
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <StateLocalNav />
        </div>
      </SectionContainer>
    </section>
  );
}
