import { ArrowRight, CircleCheck } from "lucide-react";

import {
  HeroMedicationShowcase,
  type HeroShowcaseItem,
} from "@/components/client/hero-medication-showcase";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";
import { getMedicationProduct } from "@/lib/constants/medications";
import { getIcon } from "@/lib/utils/icons";

export function HeroSection() {
  const { hero } = homeContent;
  const showcaseItems = hero.medicationCards.reduce<HeroShowcaseItem[]>((items, card) => {
    const product = getMedicationProduct(card.id);
    if (!product) return items;

    items.push({
      id: card.id,
      name: product.name,
      subtitle: product.subtitle,
      image: product.image,
      badge: card.badge,
      shortText: card.shortText,
    });
    return items;
  }, []);

  return (
    <section className="mary-hero">
      <span className="mary-hero__aura mary-hero__aura--spot" aria-hidden />
      <span className="mary-hero__aura mary-hero__aura--lime" aria-hidden />
      <span className="mary-hero__aura mary-hero__aura--forest" aria-hidden />

      <div className="mary-hero__wrap">
        <div className="mary-hero__top">
          <div className="mary-hero__copy">
            <p className="mary-hero__eyebrow">
              <span className="mary-hero__eyebrow-dot" aria-hidden />
              {hero.eyebrow}
            </p>

            <h1 className="mary-hero__title type-h1">
              <span className="mary-hero__title-line">{hero.titleLine1}</span>
              <span className="mary-hero__title-line mary-hero__title-line--accent">
                {hero.titleLine2}
              </span>
            </h1>

            <p className="mary-hero__lede">{hero.description}</p>

            <ul className="mary-hero__benefits" aria-label="Program benefits">
              {hero.benefits.map((benefit) => (
                <li key={benefit} className="mary-hero__benefit">
                  <span className="mary-hero__benefit-icon" aria-hidden>
                    <CircleCheck />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mary-hero__actions">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mary-btn--lime mary-hero__cta"
              >
                {hero.primaryCta}
                <ArrowRight aria-hidden />
              </a>
              <a href={hero.secondaryHref} className="mary-hero__cta-ghost">
                {hero.secondaryCta}
              </a>
            </div>

            <ul className="mary-hero__trust" aria-label="Trust signals">
              {hero.trustSignals.map((signal) => {
                const Icon = getIcon(signal.icon);
                return (
                  <li key={signal.label} className="mary-hero__trust-item">
                    <Icon aria-hidden />
                    {signal.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <HeroMedicationShowcase
            items={showcaseItems}
            linkLabel={hero.medicationsLink.label}
            linkHref={hero.medicationsLink.href}
          />
        </div>
      </div>
    </section>
  );
}
