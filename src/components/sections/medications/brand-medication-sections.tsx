"use client";

import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { PolicyFaq } from "@/components/ui/policy-faq";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import type { BrandMedicationPageContent } from "@/lib/constants/medications/brand-medication-types";
import { physiciansContent } from "@/lib/constants/physicians-content";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

function MedCta({ label, className }: { label: string; className?: string }) {
  return (
    <MagneticButton className={className}>
      <LinkButton href={siteConfig.bookingUrl} size="lg" className="rounded-full">
        {label}
        <ArrowUpRight className="size-4" aria-hidden />
      </LinkButton>
    </MagneticButton>
  );
}

function VideoEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="med-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="med-video__iframe"
      />
    </div>
  );
}

function Disclaimer({ children }: { children: string }) {
  return (
    <p className="med-disclaimer">
      <strong>Important:</strong> {children}
    </p>
  );
}

export function BrandMedicationPage({ content }: { content: BrandMedicationPageContent }) {
  const { accent, hero, eligibility, process, safety, mechanism, usage, injection, whyChoose, testimonials, physicians, preFaqCta, faq, finalCta } =
    content;
  const { providers } = physiciansContent;

  return (
    <div className={cn("brand-med-page", `brand-med-page--${accent}`)}>
      <ScrollSection theme="light" snap={false} className="overflow-visible med-hero hero-section-top pb-20 sm:pb-28">
        <SectionContainer>
          <div className="med-hero__grid">
            <Reveal className="med-hero__visual" variant="scale" duration={0.85}>
              <div className="med-hero__image-wrap">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  width={640}
                  height={720}
                  className="med-hero__image"
                  priority
                />
              </div>
            </Reveal>

            <Reveal direction="up" distance={28}>
              <div className="med-hero__card">
                <Eyebrow className="text-forest">{hero.eyebrow}</Eyebrow>
                <DisplayHeading size="lg" className="text-ink">
                  {hero.title}{" "}
                  {hero.titleHighlight ? (
                    <span className="text-gradient">{hero.titleHighlight}</span>
                  ) : null}
                </DisplayHeading>
                <p className="mt-6 text-lg leading-relaxed text-ink-muted">{hero.description}</p>
                <p className="mt-4 text-sm font-medium text-forest">{hero.pricingNote}</p>
                <div className="mt-8">
                  <MedCta label={hero.primaryCta} />
                </div>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible py-20 sm:py-28">
        <SectionContainer>
          <div className="med-split">
            <Reveal direction="left" distance={24}>
              <div>
                <DisplayHeading size="md" className="text-ink">
                  {eligibility.title}{" "}
                  <span className="text-gradient">{eligibility.titleHighlight}</span>
                </DisplayHeading>
                <ul className="mt-8 space-y-4">
                  {eligibility.items.map((item) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <li key={item.text} className="med-check-item">
                        <span className="med-check-item__icon">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8">
                  <MedCta label={eligibility.cta} />
                </div>
                <Disclaimer>{eligibility.disclaimer}</Disclaimer>
              </div>
            </Reveal>
            <Reveal direction="right" distance={24} variant="scale">
              <div className="med-image-card">
                <Image
                  src={eligibility.image.src}
                  alt={eligibility.image.alt}
                  width={560}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
        <SectionContainer>
          <Reveal className="mx-auto max-w-3xl text-center" direction="up" distance={24}>
            <Eyebrow>{process.title}</Eyebrow>
            <p className="mt-4 text-lg text-white/60">{process.description}</p>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
            {process.steps.map((step) => (
              <StaggerChild key={step.title}>
                <article className="med-step-card">
                  <p className="med-step-card__label">{step.step}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{step.text}</p>
                </article>
              </StaggerChild>
            ))}
          </Stagger>
          <div className="mt-12 text-center">
            <MedCta label={process.cta} />
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible py-20 sm:py-28">
        <SectionContainer>
          <Reveal direction="up" distance={20}>
            <DisplayHeading size="md" className="max-w-3xl text-ink">
              {safety.title}
            </DisplayHeading>
            <p className="mt-4 max-w-3xl text-ink-muted">{safety.intro}</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.08}>
            {safety.cards.map((card) => {
              const Icon = getIcon(card.icon);
              return (
                <StaggerChild key={card.title}>
                  <article className="med-safety-card">
                    <span className="med-safety-card__icon">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.text}</p>
                  </article>
                </StaggerChild>
              );
            })}
          </Stagger>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Disclaimer>{safety.disclaimer}</Disclaimer>
            <MedCta label={safety.cta} />
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible gradient-light py-20 sm:py-28">
        <SectionContainer>
          <div className="med-split med-split--reverse">
            <Reveal direction="left" distance={24}>
              <div>
                <DisplayHeading size="md" className="text-ink">
                  {mechanism.title}{" "}
                  <span className="text-gradient">{mechanism.titleHighlight}</span>
                </DisplayHeading>
                {mechanism.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-ink-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8">
                  <MedCta label={mechanism.cta} />
                </div>
              </div>
            </Reveal>
            {mechanism.video ? (
              <Reveal direction="right" distance={24} variant="scale">
                <VideoEmbed youtubeId={mechanism.video.youtubeId} title={mechanism.video.title} />
              </Reveal>
            ) : null}
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
        <SectionContainer>
          <Reveal className="mx-auto max-w-3xl text-center" direction="up" distance={20}>
            <DisplayHeading size="md" className="text-white">
              {usage.title}
            </DisplayHeading>
            <p className="mt-5 text-lg text-white/60">{usage.description}</p>
          </Reveal>
          {usage.video ? (
            <Reveal className="mx-auto mt-12 max-w-4xl" variant="scale" duration={0.8}>
              <VideoEmbed youtubeId={usage.video.youtubeId} title={usage.video.title} />
            </Reveal>
          ) : null}
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible py-20 sm:py-28">
        <SectionContainer>
          <div className="med-split">
            <Reveal direction="left" distance={24}>
              <div>
                <DisplayHeading size="md" className="text-ink">
                  {injection.title}
                </DisplayHeading>
                {injection.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-ink-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right" distance={24} variant="scale">
              <div className="med-image-card">
                <Image
                  src={injection.image.src}
                  alt={injection.image.alt}
                  width={560}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible py-20 sm:py-28">
        <SectionContainer>
          <div className="med-split med-split--reverse">
            <Reveal direction="left" distance={24}>
              <div>
                <DisplayHeading size="md" className="text-ink">
                  {whyChoose.title}{" "}
                  <span className="text-gradient">{whyChoose.titleHighlight}</span>
                </DisplayHeading>
                <p className="mt-4 text-ink-muted">{whyChoose.description}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {whyChoose.items.map((item) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <li key={item.title} className="med-benefit-card">
                        <Icon className="size-5 text-forest" aria-hidden />
                        <div>
                          <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                          <p className="mt-1 text-sm text-ink-muted">{item.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8">
                  <MedCta label={whyChoose.cta} />
                </div>
                <Disclaimer>{whyChoose.disclaimer}</Disclaimer>
              </div>
            </Reveal>
            <Reveal direction="right" distance={24} variant="scale">
              <div className="med-image-card">
                <Image
                  src={whyChoose.image.src}
                  alt={whyChoose.image.alt}
                  width={560}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible py-20 sm:py-28">
        <SectionContainer>
          <Reveal direction="up" distance={20} className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-forest">Testimonials</Eyebrow>
            <DisplayHeading size="md" className="text-ink">
              {testimonials.title}
            </DisplayHeading>
            <p className="mt-4 text-ink-muted">{testimonials.description}</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.08}>
            {testimonials.items.map((item) => (
              <StaggerChild key={item.name}>
                <blockquote className="med-testimonial-card">
                  <div className="flex gap-1 text-lime" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <p className="mt-4 text-ink leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm font-semibold text-ink">{item.name}</footer>
                </blockquote>
              </StaggerChild>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <MedCta label={testimonials.cta} />
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
        <SectionContainer>
          <Reveal direction="up" distance={20} className="text-center">
            <Eyebrow>{physicians.title}</Eyebrow>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">{physicians.subtitle}</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {providers.members.map((doctor) => (
              <StaggerChild key={doctor.id}>
                <article className="med-doctor-card">
                  <div className="med-doctor-card__image">
                    <Image
                      src={doctor.image.src}
                      alt={doctor.image.alt}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{doctor.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{doctor.bio}</p>
                </article>
              </StaggerChild>
            ))}
          </Stagger>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible py-16 sm:py-20">
        <SectionContainer>
          <div className="med-pre-faq">
            <div className="med-pre-faq__content">
              <DisplayHeading size="md" className="text-ink">
                {preFaqCta.title}
              </DisplayHeading>
              <div className="mt-8">
                <MedCta label={preFaqCta.cta} />
              </div>
            </div>
            <div className="med-pre-faq__image">
              <Image
                src={preFaqCta.image.src}
                alt={preFaqCta.image.alt}
                width={480}
                height={480}
                className="h-full w-full object-contain p-6"
              />
            </div>
          </div>
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="light" snap={false} className="overflow-visible pb-20 sm:pb-28">
        <SectionContainer>
          <p className="mb-10 max-w-3xl text-ink-muted">{faq.description}</p>
          <PolicyFaq
            eyebrow={faq.eyebrow}
            title={faq.title}
            titleHighlight={faq.titleHighlight}
            items={faq.items}
          />
        </SectionContainer>
      </ScrollSection>

      <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-20 sm:py-28">
        <SectionContainer className="text-center">
          <Reveal direction="up" distance={24}>
            <DisplayHeading size="lg" className="mx-auto max-w-3xl text-white">
              {finalCta.title}
            </DisplayHeading>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{finalCta.description}</p>
            <div className="mt-10">
              <MedCta label={finalCta.primaryCta} />
            </div>
          </Reveal>
        </SectionContainer>
      </ScrollSection>
    </div>
  );
}
