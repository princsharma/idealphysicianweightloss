import {
  Clock,
  CreditCard,
  Mail,
  RefreshCw,
  Shield,
} from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { LinkButton } from "@/components/ui/link-button";
import { PolicyFaq } from "@/components/ui/policy-faq";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { refundContent } from "@/lib/constants/refund-content";

const overviewIcons = [CreditCard, RefreshCw, Shield];

export function RefundHero() {
  const { hero, lastUpdated } = refundContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(58vh,560px)] justify-center pt-28 pb-16 sm:pt-32"
    >
      <div className="orb -left-24 top-1/4 size-72 bg-accent/20" aria-hidden />
      <SectionContainer className="relative">
        <Reveal direction="up" distance={32}>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <DisplayHeading size="xl" className="max-w-4xl text-white">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{hero.description}</p>
          <p className="mt-4 text-sm text-white/40">Last updated: {lastUpdated}</p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundOverview() {
  const { overview } = refundContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Billing</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {overview.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{overview.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{overview.note}</p>
        </Reveal>

        <Stagger className="mt-14" stagger={0.08}>
          <BentoGrid>
            {overview.cards.map((card, index) => {
              const Icon = overviewIcons[index % overviewIcons.length];
              return (
                <StaggerChild key={card.title} className="lg:col-span-4">
                  <BentoCard variant="light" className="h-full">
                    <Icon className="size-5 text-forest" aria-hidden />
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{card.text}</p>
                  </BentoCard>
                </StaggerChild>
              );
            })}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundEligibility() {
  const { eligibility } = refundContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Refunds</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {eligibility.title}
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-12 space-y-6" stagger={0.08}>
          {eligibility.sections.map((section) => (
            <StaggerChild key={section.title}>
              <BentoCard variant="light">
                <h3 className="font-display text-xl font-semibold text-ink">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item.slice(0, 48)} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundSubscription() {
  const { subscription } = refundContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>Subscriptions</Eyebrow>
          <DisplayHeading className="text-white">{subscription.title}</DisplayHeading>
          <p className="mt-5 text-white/55">{subscription.text}</p>
        </Reveal>
        <Stagger className="mt-10 space-y-4" stagger={0.08}>
          {subscription.items.map((item) => (
            <StaggerChild key={item.slice(0, 40)}>
              <BentoCard variant="glass">
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">{item}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundCancellation() {
  const { cancellation } = refundContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal direction="up" distance={28}>
            <Eyebrow className="text-forest">Cancellations</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {cancellation.title}
            </DisplayHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">{cancellation.intro}</p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <Clock className="size-8 shrink-0 text-forest" aria-hidden />
              <p className="font-display text-lg font-medium text-ink">{cancellation.highlight}</p>
            </div>
          </Reveal>

          <Stagger className="space-y-4" stagger={0.08}>
            {cancellation.items.map((item) => (
              <StaggerChild key={item.slice(0, 40)}>
                <div className="hub-glass-card">
                  <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
                </div>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundPayment() {
  const { payment } = refundContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Payments</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {payment.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{payment.description}</p>
        </Reveal>

        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {payment.items.map((item) => (
              <StaggerChild key={item.slice(0, 40)} className="lg:col-span-4">
                <BentoCard variant="light" className="h-full">
                  <CreditCard className="size-5 text-forest" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundCommitment() {
  const { commitment } = refundContent;

  return (
    <ScrollSection theme="dark" snap={false} className="py-16 sm:py-20">
      <SectionContainer>
        <Reveal direction="up" distance={20}>
          <BentoCard variant="glass" className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto size-8 text-lime-bright" aria-hidden />
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">{commitment.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/65">{commitment.text}</p>
          </BentoCard>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundFaq() {
  const { faq } = refundContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <PolicyFaq
          eyebrow={faq.eyebrow}
          title={faq.title}
          titleHighlight={faq.titleHighlight}
          items={faq.items}
        />
      </SectionContainer>
    </ScrollSection>
  );
}

export function RefundContact() {
  const { contact } = refundContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-24 sm:py-32">
      <SectionContainer className="text-center">
        <Reveal direction="up" distance={28}>
          <Mail className="mx-auto size-10 text-lime-bright" aria-hidden />
          <DisplayHeading size="lg" className="mx-auto mt-6 max-w-2xl text-white">
            {contact.title}
          </DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">{contact.description}</p>
          <p className="mt-4">
            <a href={`mailto:${contact.email}`} className="text-lime-bright hover:underline">
              {contact.email}
            </a>
          </p>
          <div className="mt-10">
            <MagneticButton>
              <LinkButton href={contact.href} size="xl" className="rounded-full">
                {contact.cta}
              </LinkButton>
            </MagneticButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
