import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutDeliverySection() {
  const { delivery } = aboutContent;

  return (
    <section className="about-ref-delivery">
      <SectionContainer>
        <div className="about-ref-delivery__grid">
          <Reveal variant="scale" duration={0.85}>
            <div className="about-ref-delivery__image-wrap">
              <Image
                src={delivery.image.src}
                alt={delivery.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </Reveal>

          <Reveal direction="right" distance={24} delay={0.1}>
            <div>
              <span className="about-ref-pill about-ref-pill--accent">{delivery.eyebrow}</span>
              <h2 className="about-ref-heading">{delivery.title}</h2>
              <p className="about-ref-body mt-4">{delivery.description}</p>

              <ul className="about-ref-checklist about-ref-checklist--forest mt-8">
                {delivery.checklist.map((item) => (
                  <li key={item}>
                    <Check className="size-4 shrink-0" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
