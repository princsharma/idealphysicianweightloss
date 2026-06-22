import { ArrowUpRight, Check } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/lib/constants/about-content";
import { cn } from "@/lib/utils";

export function AboutPackagesSection() {
  const { packages } = aboutContent;

  return (
    <section className="about-packages">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="about-packages__header">
          <p className="about-intro__eyebrow justify-center">{packages.eyebrow}</p>
          <h2 className="about-intro__heading mt-2">{packages.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{packages.subtitle}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6" stagger={0.1}>
          {packages.tiers.map((tier) => (
            <StaggerChild key={tier.id}>
              <article
                className={cn(
                  "about-package-card",
                  tier.featured && "about-package-card--featured lg:-mt-2 lg:mb-2 lg:py-10",
                )}
              >
                {tier.featured && tier.badge ? (
                  <span className="about-package-card__badge">{tier.badge}</span>
                ) : (
                  <span className="h-6" aria-hidden />
                )}

                <h3
                  className={cn(
                    "font-display text-xl font-semibold",
                    tier.featured ? "text-white" : "text-ink",
                  )}
                >
                  {tier.name}
                </h3>
                <p className={cn("mt-1 text-sm", tier.featured ? "text-white/50" : "text-ink-muted")}>
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="about-package-card__price">{tier.price}</span>
                  {tier.period ? (
                    <span className={cn("text-sm", tier.featured ? "text-white/40" : "text-ink-subtle")}>
                      / {tier.period}
                    </span>
                  ) : null}
                </div>

                <ul className="about-package-card__features">
                  {tier.features.map((feature) => (
                    <li key={feature} className="about-package-card__feature">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          tier.featured ? "text-accent-bright" : "text-accent",
                        )}
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "about-btn-pill mt-8 w-full justify-between sm:w-auto",
                    tier.featured ? "about-btn-pill--light" : "about-btn-pill--dark",
                  )}
                >
                  {tier.cta}
                  <span className="about-btn-pill__icon" aria-hidden>
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </article>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </section>
  );
}
