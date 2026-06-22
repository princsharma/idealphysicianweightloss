import { Reveal } from "@/components/client/reveal";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

export function AlabamaApproachSection() {
  const { approach } = alabamaContent;

  return (
    <section id="about" className="scroll-mt-32 bg-cream py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-36" direction="left" distance={28}>
            <Eyebrow className="text-accent">{approach.eyebrow}</Eyebrow>
            <DisplayHeading className="text-ink">
              {approach.title}{" "}
              <span className="text-gradient">{approach.titleHighlight}</span>
            </DisplayHeading>
            <blockquote className="mt-8 border-l-4 border-accent pl-6 font-display text-xl font-medium leading-snug text-forest-ink sm:text-2xl">
              &ldquo;{approach.callout}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal className="lg:col-span-7" direction="right" distance={24} delay={0.1}>
            <div className="rounded-3xl border border-border-strong bg-white p-8 shadow-soft sm:p-10">
              <p className="text-base leading-[1.9] text-ink-muted sm:text-lg">{approach.body}</p>
              <div className="mt-8 grid gap-4 border-t border-ink/10 pt-8 sm:grid-cols-3">
                {["Personalized plans", "Physician-led", "Long-term focus"].map((label) => (
                  <div key={label} className="rounded-2xl bg-cream px-4 py-3 text-center text-sm font-semibold text-ink">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
