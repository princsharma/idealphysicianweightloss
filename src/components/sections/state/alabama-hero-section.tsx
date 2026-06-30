import Image from "next/image";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal } from "@/components/client/reveal";
import { AlabamaMapGraphic } from "@/components/sections/state/alabama-map";
import { LinkButton } from "@/components/ui/link-button";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { statePageImages } from "@/lib/constants/states/state-page-media";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";

type StateHeroSectionProps = {
  content: StatePageContent;
};

export function StateHeroSection({ content }: StateHeroSectionProps) {
  const { hero, path, local, stateName } = content;
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`;
  const marqueeAreas = [...hero.serviceAreas, ...hero.serviceAreas];

  return (
    <section className="state-hero noise">
      <div className="state-hero__orb state-hero__orb--a" aria-hidden />
      <div className="state-hero__orb state-hero__orb--b" aria-hidden />
      <div className="state-hero__grid" aria-hidden />
      <span className="state-hero__watermark" aria-hidden>
        {local.stateAbbr}
      </span>
      {content.showStateMap ? <AlabamaMapGraphic className="state-hero__map-bg" /> : null}

      <SectionContainer className="relative">
        <Reveal direction="up" distance={24}>
          <div className="state-live-pill">
            <span className="state-live-pill__dot" aria-hidden />
            {stateName} · {local.counties}{" "}
            {local.countiesLabel.includes("parish") ? "parishes" : "counties"}
          </div>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
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
            <Reveal delay={0.08} direction="up" distance={20} variant="fade">
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{local.tagline}</p>
              <p className="mt-2 text-sm text-white/45">{hero.disclaimer}</p>
            </Reveal>

            <Reveal delay={0.14} variant="fade">
              <div className="state-hero__bento" aria-label="Program highlights">
                {hero.highlights.map((item) => (
                  <div key={item.detail} className="state-hero__bento-cell">
                    <p className="state-hero__bento-label">{item.label}</p>
                    <p className="state-hero__bento-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18} variant="scale">
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <MagneticButton>
                  <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                    {hero.primaryCta}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </LinkButton>
                </MagneticButton>
                <LinkButton href={hero.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
                  {hero.secondaryCta}
                </LinkButton>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Phone className="size-4 text-accent-bright" aria-hidden />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.22} variant="fade">
              <div className="state-hero__badges">
                {hero.badges.slice(0, 3).map((badge) => (
                  <span key={badge} className="state-hero__badge">
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" distance={28} variant="scale" delay={0.1}>
            <div className="state-hero__visual">
              <div className="state-hero__visual-image">
                <Image
                  src={statePageImages.hero.src}
                  alt={statePageImages.hero.alt}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="state-hero__visual-overlay" aria-hidden />
                <div className="state-hero__visual-badge">
                  <span className="font-display text-2xl font-bold text-white">{local.stateAbbr}</span>
                  <span className="text-xs text-white/60">Statewide care</span>
                </div>
              </div>

              <div className="state-journey-card state-hero__journey p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">
                  {hero.journeyLabel}
                </p>
                <div className="mt-4 space-y-3">
                  {path.steps.map((step, i) => (
                    <div key={step.id} className="state-journey-step state-journey-step--compact">
                      <span className="state-journey-step__num">{i + 1}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white">{step.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <LinkButton
                  href="#path"
                  variant="secondary"
                  size="md"
                  className="mt-4 w-full rounded-full"
                >
                  See full journey
                  <ChevronDown className="size-4" aria-hidden />
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24} variant="fade">
          <div className="state-hero__marquee-wrap mt-8">
            <div className="state-hero__marquee">
              {marqueeAreas.map((area, i) => (
                <span key={`${area}-${i}`} className="state-hero__area-chip">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
