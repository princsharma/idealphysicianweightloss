import { ArrowUpRight, Home } from "lucide-react";
import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { LinkButton } from "@/components/ui/link-button";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import type { ErrorPageLink } from "@/lib/constants/error-pages-content";
import { siteConfig } from "@/config/site";

type ErrorPageLayoutProps = {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  contactPrompt: string;
  links: ErrorPageLink[];
};

export function ErrorPageLayout({
  code,
  eyebrow,
  title,
  description,
  primaryCta,
  contactPrompt,
  links,
}: ErrorPageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ScrollSection theme="light" className="hero-forest gradient-light py-24 sm:py-32">
          <div className="orb -left-32 top-0 size-[420px] bg-accent/10" aria-hidden />
          <SectionContainer>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-display text-[clamp(4rem,14vw,7rem)] font-bold leading-none text-forest/10">
                {code}
              </p>
              <Eyebrow className="text-forest">{eyebrow}</Eyebrow>
              <DisplayHeading as="h1" size="lg" className="text-ink">
                {title}
              </DisplayHeading>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {description}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <LinkButton href={primaryCta.href} size="lg" className="rounded-full">
                  <Home className="size-4" aria-hidden />
                  {primaryCta.label}
                </LinkButton>
              </div>
              <p className="mt-8 text-sm text-ink-subtle">
                {contactPrompt}{" "}
                <Link href="/contact" className="font-medium text-forest hover:underline">
                  Contact {siteConfig.name}
                </Link>
              </p>
            </div>
          </SectionContainer>
        </ScrollSection>

        <ScrollSection theme="light" className="pb-24 pt-4 sm:pb-32">
          <SectionContainer>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow className="text-forest">Helpful links</Eyebrow>
              <DisplayHeading as="h2" size="md" className="text-ink">
                Continue exploring
              </DisplayHeading>
            </div>
            <BentoGrid className="mx-auto mt-12 max-w-5xl">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group lg:col-span-4"
                >
                  <BentoCard variant="light" className="flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold text-ink">{link.label}</h3>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{link.description}</p>
                  </BentoCard>
                </Link>
              ))}
            </BentoGrid>
          </SectionContainer>
        </ScrollSection>

        <Footer />
      </main>
    </>
  );
}
