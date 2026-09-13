import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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

export function TreatmentsSection() {
  const { hero, medications } = homeContent;

  return (
    <ScrollSection id="treatments" theme="light" snap={false} className="justify-center py-20">
      <SectionContainer className="flex flex-1 flex-col justify-center">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl" direction="left" distance={28}>
            <Eyebrow className="text-accent">{medications.eyebrow}</Eyebrow>
            <DisplayHeading className="text-ink">
              {medications.title}{" "}
              <span className="text-gradient">{medications.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.12} direction="right" distance={20} variant="fade">
            <p className="max-w-sm text-ink-muted lg:text-right">{medications.description}</p>
          </Reveal>
        </div>

        <Stagger className="mary-hero__meds" stagger={0.07}>
          {hero.medicationCards.map((card) => {
            const product = getMedicationProduct(card.id);
            if (!product) return null;

            return (
              <StaggerChild
                key={card.id}
                variant="zoom"
                distance={22}
                duration={0.7}
                className="mary-med-slot"
              >
                <div
                  className={cn(
                    "mary-hero-card card-hover",
                    card.featured && "mary-hero-card--featured",
                  )}
                >
                <div className="mary-hero-card__visual">
                  <Image
                    src={product.image}
                    alt={`${product.name} — ${product.subtitle}`}
                    fill
                    className="object-contain object-center p-4 sm:p-5"
                    sizes={
                      card.featured
                        ? "(max-width: 1024px) 100vw, 380px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    }
                  />
                </div>

                <div className="mary-hero-card__body">
                  {card.badge ? <p className="mary-hero-card__badge">{card.badge}</p> : null}
                  <p className="mary-hero-card__type">{product.subtitle}</p>
                  <h3 className="mary-hero-card__name">{product.name}</h3>
                  <p className="mary-hero-card__text">{card.shortText}</p>
                  <p className="mary-hero-card__price">
                    {card.price ? (
                      <>
                        <span>From</span>
                        <strong>{card.price}</strong>
                        <span>{card.period}</span>
                      </>
                    ) : (
                      <span>{card.period}</span>
                    )}
                  </p>
                  <a
                    href={getMedicationHref(product.id)}
                    className="mary-hero-card__cta mary-btn--lime"
                  >
                    {medications.detailsCta}
                    <ArrowUpRight aria-hidden />
                  </a>
                  </div>
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>

        <Reveal delay={0.1} variant="fade" className="mt-10">
          <p className="mx-auto max-w-4xl text-xs leading-relaxed text-ink-subtle">
            {hero.medicationPriceNote}
          </p>
          <ul className="mx-auto mt-4 max-w-4xl space-y-3">
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
