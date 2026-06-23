import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutTeamSection() {
  const { team } = aboutContent;

  return (
    <section className="about-ref-team" id={team.id}>
      <SectionContainer>
        <Reveal direction="up" distance={24} className="about-ref-section-header">
          <h2 className="about-ref-heading text-center">{team.title}</h2>
          <p className="about-ref-body about-ref-section-header__sub mx-auto mt-4 text-center">
            {team.subtitle}
          </p>
        </Reveal>

        <Stagger className="about-ref-team__grid mt-12" stagger={0.1}>
          {team.members.map((member) => (
            <StaggerChild key={member.name}>
              <article className="about-ref-team-card">
                <div className="about-ref-team-card__avatar">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="about-ref-team-card__name">{member.name}</h3>
                <p className="about-ref-team-card__bio">{member.bio}</p>
              </article>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal delay={0.2} variant="scale" className="mt-12 text-center">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about-ref-btn about-ref-btn--forest"
          >
            {team.cta}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
