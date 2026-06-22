import { CheckCircle2 } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { BentoCard } from "@/components/ui/bento-card";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { contactContent } from "@/lib/constants/contact-content";

export function ContactFormSection() {
  const { form, assurance } = contactContent;

  return (
    <ScrollSection
      id="contact-form"
      theme="dark"
      snap={false}
      className="noise justify-center py-20 sm:py-28"
    >
      <div className="orb -right-32 bottom-0 size-80 bg-accent/10" aria-hidden />

      <SectionContainer className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow>{form.eyebrow}</Eyebrow>
            <DisplayHeading className="text-white">
              {form.title}{" "}
              <span className="text-gradient">{form.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-white/55 sm:text-lg">{form.description}</p>

            <Stagger className="mt-10 space-y-4" stagger={0.1}>
              {assurance.items.map((item) => (
                <StaggerChild key={item.title}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.07]">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-bright" aria-hidden />
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">{item.description}</p>
                    </div>
                  </div>
                </StaggerChild>
              ))}
            </Stagger>
          </Reveal>

          <Reveal className="lg:col-span-7" direction="right" distance={32} variant="scale" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={0.2} variant="fade" className="mt-8 lg:hidden">
          <BentoCard variant="glass" className="border-white/10 p-5 text-center text-sm text-white/60">
            For urgent medical concerns, call{" "}
            <a href="tel:911" className="font-medium text-accent-bright hover:underline">
              911
            </a>{" "}
            or visit your nearest emergency department.
          </BentoCard>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
