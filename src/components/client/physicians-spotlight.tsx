"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { DisplayHeading, Eyebrow, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { physiciansContent } from "@/lib/constants/physicians-content";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function PhysiciansSpotlight() {
  const { providers } = physiciansContent;
  const [activeId, setActiveId] = useState(providers.members[0].id);
  const reduce = usePrefersReducedMotion();
  const doctor = providers.members.find((member) => member.id === activeId) ?? providers.members[0];

  return (
    <ScrollSection id="providers" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{providers.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {providers.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{providers.subtitle}</p>
        </Reveal>

        <div className="phys-spotlight mt-14 lg:mt-20">
          <div className="phys-spotlight__stage">
            <div className="phys-plate phys-plate--cream">
              <AnimatePresence mode="wait">
                <motion.div
                  key={doctor.id}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <Image
                    src={doctor.image.src}
                    alt={doctor.image.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="phys-plate__img"
                  />
                </motion.div>
              </AnimatePresence>
              <span className="phys-plate__badge">{doctor.experience}</span>
            </div>

            <div className="phys-switcher" role="tablist" aria-label="Select a physician">
              {providers.members.map((member) => {
                const selected = member.id === doctor.id;

                return (
                  <button
                    key={member.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-pressed={selected}
                    aria-label={member.name}
                    onClick={() => setActiveId(member.id)}
                    className="phys-switcher__btn"
                  >
                    <Image src={member.image.src} alt="" width={160} height={160} />
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={doctor.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-forest">{doctor.title}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {doctor.name}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">{doctor.bio}</p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">Credentials</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {doctor.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="rounded-full border border-forest/15 bg-white px-3 py-1 text-xs font-medium text-forest"
                    >
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">Areas of expertise</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {doctor.expertise.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-border-strong bg-paper px-3 py-1 text-xs text-ink-muted"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}
