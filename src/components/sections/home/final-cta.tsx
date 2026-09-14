import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal } from "@/components/client/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { DisplayHeading, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { homeContent, homeImages } from "@/lib/constants/home-content";

export function FinalCtaSection() {
  const { finalCta } = homeContent;
  const finalCtaImage = homeImages.finalCta;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="gradient-cta noise relative justify-center overflow-hidden py-24 sm:py-32"
    >
      {finalCtaImage.src ? (
        <>
          <Image
            src={finalCtaImage.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/82 to-forest-ink/55"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div className="home-atmosphere" aria-hidden>
            <div className="home-grid-lines" />
          </div>
          <div className="orb left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent/15" aria-hidden />
          <div className="orb -right-24 top-10 size-72 bg-lime/15" aria-hidden />
        </>
      )}

      <SectionContainer className="relative flex min-h-[min(52vh,440px)] flex-1 flex-col items-center justify-center py-16 text-center sm:min-h-[min(58vh,480px)] sm:py-20">
        <Reveal direction="up" distance={40}>
          <DisplayHeading size="lg" className="max-w-4xl text-white">
            {finalCta.title}{" "}
            <span className="text-gradient">{finalCta.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.15} direction="up" distance={24} variant="fade">
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 sm:text-xl">
            {finalCta.description}
          </p>
        </Reveal>
        <Reveal delay={0.25} direction="up" distance={20} variant="scale">
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                {finalCta.primaryCta}
                <ArrowUpRight className="size-4" />
              </LinkButton>
            </MagneticButton>
            <LinkButton href="#how-it-works" variant="outline-dark" size="lg" className="rounded-full">
              {finalCta.secondaryCta}
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
