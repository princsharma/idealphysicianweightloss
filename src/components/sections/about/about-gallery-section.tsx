import Image from "next/image";
import { Shield } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutGallerySection() {
  const { gallery, stats } = aboutContent;

  return (
    <section className="about-gallery">
      <SectionContainer>
        <Stagger className="about-gallery__grid" stagger={0.12}>
          {gallery.images.map((image, index) => (
            <StaggerChild key={image.src}>
              <Reveal variant="scale" duration={0.8}>
                <div className="about-gallery__tile relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {"badge" in image && image.badge === "shield" ? (
                    <div className="about-gallery__badge" aria-hidden>
                      <Shield className="size-5" />
                    </div>
                  ) : null}
                  {index === 0 ? (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-ink/80 to-transparent p-6 pt-16">
                      <div className="flex flex-wrap gap-6">
                        {stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                            <p className="text-xs text-white/60">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </section>
  );
}
