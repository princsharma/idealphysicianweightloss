import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { StoryBanner } from "@/components/client/story-banner";
import { LinkButton } from "@/components/ui/link-button";
import { PolicyFaq } from "@/components/ui/policy-faq";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import {
  howItWorksContent,
  howItWorksImages,
} from "@/lib/constants/how-it-works-content";
import { getIcon, type IconName } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

export function HowItWorksHero() {
  const { hero } = howItWorksContent;
  const banner = howItWorksImages.hero;

  return (
    <ScrollSection theme="dark" snap={false} className="hiw-hero relative overflow-hidden">
      {banner.src ? (
        <Image
          src={banner.src}
          alt={banner.alt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/72 to-forest-ink/40"
        aria-hidden
      />
      <div className="orb -left-24 top-1/4 size-80 bg-accent/20" aria-hidden />
      <div className="orb right-0 top-0 size-[28rem] bg-lime/10" aria-hidden />

      <SectionContainer className="relative z-10 flex flex-1 flex-col justify-end pb-16 pt-10 sm:pb-20">
        <Reveal className="hiw-hero__copy" direction="up" distance={36} duration={0.95}>
          <Eyebrow>{hero.kicker}</Eyebrow>
          <DisplayHeading as="h1" size="xl" className="text-white">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            {hero.lede}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <MagneticButton>
              <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                {hero.primaryCta}
                <ArrowUpRight className="size-4" aria-hidden />
              </LinkButton>
            </MagneticButton>
            <LinkButton href={hero.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
              {hero.secondaryCta}
            </LinkButton>
          </div>
          <p className="hiw-scroll-hint">
            <span className="hiw-scroll-hint__line" aria-hidden />
            {hero.scrollHint}
            <ArrowDown className="size-3.5" aria-hidden />
          </p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export { HowItWorksChapters } from "@/components/client/how-it-works-chapters";
export { HowItWorksPath } from "@/components/client/how-it-works-path";

export function HowItWorksMedicalEvaluation() {
  const { medicalEvaluation } = howItWorksContent;
  const art = howItWorksImages.clinical;
  const split = Math.ceil(medicalEvaluation.items.length / 2);
  const left = medicalEvaluation.items.slice(0, split);
  const right = medicalEvaluation.items.slice(split);

  return (
    <ScrollSection id="evaluation" theme="light" snap={false} className="hiw-clinical py-24 sm:py-32">
      <SectionContainer>
        <Reveal direction="up" distance={28} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">{medicalEvaluation.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {medicalEvaluation.title}{" "}
            <span className="text-gradient">{medicalEvaluation.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-lg text-ink-muted">{medicalEvaluation.description}</p>
        </Reveal>

        <div className="hiw-clinical__stage">
          <Stagger className="hiw-clinical__col hiw-clinical__col--left" stagger={0.1}>
            {left.map((item, index) => (
              <ClinicalCareStep key={item.title} item={item} index={index} side="left" />
            ))}
          </Stagger>

          <Reveal variant="zoom" distance={24} duration={1} className="hiw-clinical__art">
            {art.src ? (
              <Image
                src={art.src}
                alt={art.alt}
                width={720}
                height={900}
                unoptimized
                className="hiw-clinical__png"
              />
            ) : (
              <div className="hiw-clinical__placeholder" role="img" aria-label={art.alt}>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-forest/50">
                  {art.label}
                </span>
                <span className="mt-2 max-w-[18ch] text-center text-xs text-ink-subtle">
                  Drop a transparent PNG at {art.src ?? "/images/how-it-works/clinical.png"}
                </span>
              </div>
            )}
          </Reveal>

          <Stagger className="hiw-clinical__col hiw-clinical__col--right" stagger={0.1} delayChildren={0.12}>
            {right.map((item, index) => (
              <ClinicalCareStep key={item.title} item={item} index={index + left.length} side="right" />
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

function ClinicalCareStep({
  item,
  index,
  side,
}: {
  item: (typeof howItWorksContent.medicalEvaluation.items)[number];
  index: number;
  side: "left" | "right";
}) {
  const Icon = getIcon(item.icon as IconName);

  return (
    <StaggerChild
      direction={side === "left" ? "left" : "right"}
      distance={28}
      variant="zoom"
    >
      <article className={cn("hiw-clinical__step", `hiw-clinical__step--${side}`)}>
        <span className="hiw-clinical__icon" aria-hidden>
          <Icon className="size-5" />
        </span>
        <div>
          <p className="hiw-clinical__num">0{index + 1}</p>
          <h3 className="mt-1 type-h4 text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
        </div>
      </article>
    </StaggerChild>
  );
}

export function HowItWorksFaq() {
  const { faq } = howItWorksContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-24 sm:py-32">
      <SectionContainer>
        <PolicyFaq eyebrow={faq.eyebrow} title={faq.title} titleHighlight={faq.titleHighlight} items={faq.items} />
        <Reveal delay={0.15} className="mt-8 text-center">
          <LinkButton href={faq.viewAllHref} variant="ghost" className="text-forest">
            {faq.viewAllLabel}
            <ArrowUpRight className="size-4" aria-hidden />
          </LinkButton>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksCta() {
  const { cta } = howItWorksContent;

  return (
    <ScrollSection theme="dark" snap={false} className="relative overflow-hidden">
      <StoryBanner
        {...howItWorksImages.cta}
        theme="dark"
        ratio="wide"
        rounded="rounded-none"
        className="absolute inset-0 h-full min-h-full [&>div]:h-full [&_.relative]:h-full"
      />
      <div className="absolute inset-0 bg-forest-ink/75" aria-hidden />
      <SectionContainer className="relative py-28 text-center sm:py-36">
        <Reveal direction="up" distance={28}>
          <DisplayHeading size="lg" className="mx-auto max-w-3xl text-white">
            {cta.title}{" "}
            <span className="text-gradient">{cta.titleHighlight}</span>
          </DisplayHeading>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{cta.description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                {cta.primaryCta}
                <ArrowUpRight className="size-4" aria-hidden />
              </LinkButton>
            </MagneticButton>
            <LinkButton href={cta.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
              {cta.secondaryCta}
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
