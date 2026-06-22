import {
  ArrowUpRight,
  Calendar,
  Clock,
  Mail,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { LinkButton } from "@/components/ui/link-button";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { contactContent } from "@/lib/constants/contact-content";

const phoneHref = `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`;
const emailHref = siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : undefined;

export function ContactMethodsSection() {
  const { methods } = contactContent;
  const [phoneCard, emailCard, scheduleCard, hoursCard, responseCard, securityCard] = methods.cards;

  return (
    <ScrollSection theme="light" snap={false} className="justify-center py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="left" distance={28}>
          <Eyebrow className="text-accent">{methods.eyebrow}</Eyebrow>
          <DisplayHeading className="max-w-2xl text-ink">
            {methods.title}{" "}
            <span className="text-gradient">{methods.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <BentoGrid className="mt-14">
          <Reveal className="sm:col-span-2 lg:col-span-7" variant="scale" duration={0.7}>
            <BentoCard variant="dark" className="flex h-full min-h-[280px] flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-bright">
                  <Phone className="size-5" aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{phoneCard.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                  {phoneCard.description}
                </p>
                <p className="mt-6 font-display text-3xl font-semibold tracking-tight text-accent-bright sm:text-4xl">
                  {siteConfig.contact.phone}
                </p>
              </div>
              <LinkButton href={phoneHref} size="lg" className="mt-8 w-fit rounded-full">
                {phoneCard.cta}
                <ArrowUpRight className="size-4" aria-hidden />
              </LinkButton>
            </BentoCard>
          </Reveal>

          <Reveal className="sm:col-span-2 lg:col-span-5" delay={0.08} variant="scale" duration={0.7}>
            <BentoCard variant="light" className="flex h-full min-h-[280px] flex-col justify-between">
              <div>
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Mail className="size-5" aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink">{emailCard.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{emailCard.description}</p>
                {siteConfig.contact.email ? (
                  <p className="mt-6 text-base font-medium text-ink">{siteConfig.contact.email}</p>
                ) : null}
              </div>
              {emailHref ? (
                <LinkButton href={emailHref} variant="outline" size="lg" className="mt-8 w-fit rounded-full">
                  {emailCard.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              ) : (
                <a
                  href="#contact-form"
                  className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-bright"
                >
                  Use the secure form below
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              )}
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.1} direction="up" distance={24}>
            <BentoCard variant="accent" className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-forest-ink/10 text-forest-ink">
                  <Calendar className="size-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold">{scheduleCard.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{scheduleCard.description}</p>
              </div>
              <LinkButton
                href={siteConfig.bookingUrl}
                variant="outline"
                size="md"
                className="mt-6 w-fit rounded-full border-forest-ink/20 bg-white/40 hover:bg-white/60"
              >
                {scheduleCard.cta}
                <ArrowUpRight className="size-4" aria-hidden />
              </LinkButton>
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.14} direction="up" distance={24}>
            <BentoCard variant="light" className="h-full">
              <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-cream text-ink">
                <Clock className="size-5" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{hoursCard.title}</h3>
              <ul className="mt-4 space-y-2">
                {hoursCard.lines.map((line) => (
                  <li key={line} className="text-sm text-ink-muted">
                    {line}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.18} direction="up" distance={24}>
            <BentoCard variant="glass" className="h-full border-white/10">
              <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-white/10 text-accent-bright">
                <Sparkles className="size-5" aria-hidden />
              </div>
              <p className="font-display text-4xl font-semibold tracking-tight text-white">{responseCard.stat}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{responseCard.title}</h3>
              <p className="mt-2 text-sm text-white/50">{responseCard.detail}</p>
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-12" delay={0.2} variant="fade">
            <BentoCard variant="light" hover={false} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Shield className="size-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{securityCard.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{securityCard.detail}</p>
                </div>
              </div>
              <Stagger className="flex flex-wrap gap-2" stagger={0.06}>
                {["Encrypted", "HIPAA", "Telehealth"].map((badge) => (
                  <StaggerChild key={badge}>
                    <span className="rounded-full border border-border-strong bg-cream px-4 py-1.5 text-xs font-medium text-ink-muted">
                      {badge}
                    </span>
                  </StaggerChild>
                ))}
              </Stagger>
            </BentoCard>
          </Reveal>
        </BentoGrid>
      </SectionContainer>
    </ScrollSection>
  );
}
