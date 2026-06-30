import Image from "next/image";
import { Star } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { statePageImages } from "@/lib/constants/states/state-page-media";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";

type StateTestimonialsSectionProps = {
  content: StatePageContent;
};

export function StateTestimonialsSection({ content }: StateTestimonialsSectionProps) {
  const { testimonials } = content;
  const [featured, ...rest] = testimonials.items;

  return (
    <section id="stories" className="scroll-mt-32 relative overflow-hidden bg-forest-ink py-20 sm:py-28">
      <div className="orb -right-24 top-1/3 size-80 bg-accent/15" aria-hidden />

      <SectionContainer className="relative">
        <Reveal direction="left" distance={24}>
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <DisplayHeading className="max-w-2xl text-white">
            {testimonials.title}{" "}
            <span className="text-gradient">{testimonials.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <Reveal className="hidden lg:col-span-4 lg:block" variant="scale" duration={0.75}>
            <div className="state-image-frame state-image-frame--dark h-full min-h-[420px]">
              <Image
                src={statePageImages.approach.src}
                alt="Patient success with physician-guided weight loss"
                width={480}
                height={640}
                className="h-full w-full object-cover"
                sizes="33vw"
              />
              <div className="state-image-frame__shade state-image-frame__shade--bottom" aria-hidden />
              <p className="state-image-frame__caption">Real patients. Physician-guided care.</p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" variant="scale" duration={0.75}>
            <div className="state-testimonial-featured h-full">
              <div className="flex gap-1 text-accent-bright" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="relative mt-6 font-display text-xl font-medium leading-snug text-white sm:text-2xl lg:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <footer className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="font-semibold text-white">{featured.name}</p>
                  <p className="text-sm text-white/45">{featured.location}</p>
                </div>
                <span className="rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent-bright">
                  {featured.detail}
                </span>
              </footer>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <Stagger className="flex flex-col gap-4" stagger={0.12}>
              {rest.map((item) => (
                <StaggerChild key={item.id}>
                  <article className="state-testimonial-mini">
                    <div className="flex gap-1 text-accent-bright" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">&ldquo;{item.quote}&rdquo;</p>
                    <p className="mt-3 text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-white/40">
                      {item.location} · {item.detail}
                    </p>
                  </article>
                </StaggerChild>
              ))}
            </Stagger>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
