import { Star } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

export function AlabamaTestimonialsSection() {
  const { testimonials } = alabamaContent;
  const [featured, ...rest] = testimonials.items;

  return (
    <section id="stories" className="scroll-mt-32 bg-forest-ink py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="left" distance={24}>
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <DisplayHeading className="max-w-2xl text-white">
            {testimonials.title}{" "}
            <span className="text-gradient">{testimonials.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" variant="scale" duration={0.75}>
            <div className="state-quote-hero h-full">
              <div className="flex gap-1 text-accent-bright" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="relative mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <footer className="relative mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
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

          <Stagger className="lg:col-span-5 flex flex-col gap-5" stagger={0.12}>
            {rest.map((item) => (
              <StaggerChild key={item.id}>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex gap-1 text-accent-bright" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-white/40">
                    {item.location} · {item.detail}
                  </p>
                </article>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </section>
  );
}
