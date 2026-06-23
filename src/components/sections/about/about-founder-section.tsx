import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutFounderSection() {
  const { founder } = aboutContent;

  return (
    <section className="about-ref-founder" id={founder.id}>
      <SectionContainer>
        <div className="about-ref-founder__grid">
          <Reveal direction="left" distance={24}>
            <div>
              <p className="about-ref-eyebrow">{founder.eyebrow}</p>
              <h2 className="about-ref-heading">{founder.title}</h2>
              <blockquote className="about-ref-quote mt-6">&ldquo;{founder.quote}&rdquo;</blockquote>
              <footer className="about-ref-founder__meta mt-8">
                <p className="about-ref-founder__name">{founder.name}</p>
                <p className="about-ref-founder__role">{founder.role}</p>
                <a href="#team" className="about-ref-link mt-3 inline-block">
                  {founder.linkLabel}
                </a>
              </footer>
            </div>
          </Reveal>

          <Reveal variant="scale" duration={0.85} delay={0.1}>
            <div className="about-ref-founder__image-wrap">
              <Image
                src={founder.image.src}
                alt={founder.image.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
