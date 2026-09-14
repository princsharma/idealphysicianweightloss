import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";
import { getMedicationHref, getMedicationProduct } from "@/lib/constants/medications";
import { cn } from "@/lib/utils";

export function HomeMedicationsSection() {
  const { hero, medications } = homeContent;

  return (
    <ScrollSection id="treatments" theme="light" snap={false} className="home-medications relative overflow-hidden py-20 sm:py-28">
      <div className="home-atmosphere" aria-hidden>
        <div className="home-grid-lines" />
        <div className="orb -right-16 top-0 size-72 bg-lime/15" />
      </div>

      <SectionContainer className="relative">
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">{medications.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {medications.title}{" "}
            <span className="text-gradient">{medications.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {medications.description}
          </p>
        </Reveal>

        <Stagger className="home-med-grid mt-12 sm:mt-14" stagger={0.06}>
          {hero.medicationCards.map((card) => {
            const product = getMedicationProduct(card.id);
            if (!product) return null;

            const href = getMedicationHref(product.id);

            return (
              <StaggerChild key={card.id} className="min-w-0">
                <article
                  className={cn(
                    "home-med-card card-hover",
                    card.featured && "home-med-card--featured",
                  )}
                >
                  <Link href={href} className="home-med-card__link">
                    <div className="home-med-card__media">
                      {card.badge ? (
                        <span className="home-med-card__badge">{card.badge}</span>
                      ) : null}
                      <Image
                        src={product.image}
                        alt={`${product.name} — ${product.subtitle}`}
                        fill
                        className="object-contain object-center p-3 sm:p-4"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                      />
                    </div>

                    <div className="home-med-card__body">
                      <p className="home-med-card__type">{product.subtitle}</p>
                      <h3 className="home-med-card__name type-h4">{product.name}</h3>
                      <p className="home-med-card__desc">{card.shortText}</p>

                      <div className="home-med-card__foot">
                        <p className="home-med-card__price">
                          {card.price ? (
                            <>
                              <span className="home-med-card__price-label">From</span>
                              <strong>{card.price}</strong>
                              <span>{card.period}</span>
                            </>
                          ) : (
                            <span>{card.period}</span>
                          )}
                        </p>
                        <span className="home-med-card__cta">
                          {medications.detailsCta}
                          <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>

        <Reveal delay={0.1} variant="fade" className="home-med-disclaimers mt-12 sm:mt-14">
          <p className="text-xs leading-relaxed text-ink-subtle">{hero.medicationPriceNote}</p>
          <ul className="mt-4 space-y-3">
            {medications.footnotes.map((note) => (
              <li key={note.slice(0, 48)} className="text-xs leading-relaxed text-ink-subtle">
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
