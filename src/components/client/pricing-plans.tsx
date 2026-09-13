"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Stagger, StaggerChild } from "@/components/client/reveal";
import { BentoCard } from "@/components/ui/bento-card";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";
import { PROGRAM_PLANS, PROGRAM_TRACKS, type ProgramTrackId } from "@/lib/constants/program-catalog";
import { cn } from "@/lib/utils";

export function PricingPlansGrid({
  label,
  theme = "dark",
}: {
  label: string;
  theme?: "dark" | "light";
}) {
  const [track, setTrack] = useState<ProgramTrackId>("semaglutide");
  const light = theme === "light";

  return (
    <>
      <fieldset className="mt-10 flex flex-col items-center gap-3">
        <legend className={cn("text-sm", light ? "text-ink-muted" : "text-white/55")}>{label}</legend>
        <div
          role="tablist"
          aria-label="Medication"
          className={cn(
            "inline-flex rounded-full border p-1",
            light ? "border-forest/15 bg-white/70" : "border-white/15 bg-white/5",
          )}
        >
          {PROGRAM_TRACKS.map((option) => {
            const selected = option.id === track;

            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setTrack(option.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
                  selected
                    ? "bg-accent text-accent-foreground"
                    : light
                      ? "text-ink-muted hover:text-ink"
                      : "text-white/70 hover:text-white",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <Stagger
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        stagger={0.08}
      >
        {PROGRAM_PLANS.map((plan) => {
          const savings = plan.savings[track];
          const popular = plan.mostPopular;
          const muted = popular
            ? "text-accent-foreground/80"
            : light
              ? "text-ink-muted"
              : "text-white/60";
          const body = popular
            ? "text-accent-foreground/90"
            : light
              ? "text-ink-muted"
              : "text-white/70";

          return (
            <StaggerChild key={plan.id}>
              <BentoCard
                variant={popular ? "accent" : light ? "light" : "glass"}
                className={cn(
                  "flex h-full flex-col p-5 sm:p-6",
                  popular && (light ? "ring-2 ring-forest/20" : "ring-2 ring-lime/30"),
                )}
                hover={false}
              >
                {popular ? (
                  <span className="mb-3 inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                ) : null}

                <h3 className="font-display text-lg font-semibold">{plan.name}</h3>

                <p className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{plan.prices[track]}</span>
                  <span className={cn("text-sm", muted)}>{plan.period}</span>
                </p>

                <p className={cn("mt-1 text-xs font-medium", muted)}>{plan.billing}</p>

                {savings ? (
                  <span
                    className={cn(
                      "mt-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-medium",
                      popular
                        ? "bg-white/20"
                        : light
                          ? "bg-lime-tint text-forest"
                          : "bg-lime/15 text-accent-bright",
                    )}
                  >
                    {savings}
                  </span>
                ) : null}

                <p className={cn("mt-4 text-sm", muted)}>{plan.description}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className={cn("flex gap-2 text-sm", body)}>
                      <Check className="mt-0.5 size-4 shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <LinkButton
                    href={siteConfig.bookingUrl}
                    size="lg"
                    className="w-full rounded-full"
                    variant={popular ? "primary" : light ? "outline" : "outline-dark"}
                  >
                    {plan.cta}
                  </LinkButton>
                </div>
              </BentoCard>
            </StaggerChild>
          );
        })}
      </Stagger>
    </>
  );
}
