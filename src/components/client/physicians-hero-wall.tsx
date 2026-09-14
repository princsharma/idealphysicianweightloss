"use client";

import Image from "next/image";

import {
  physiciansHeroSourceHidden,
  usePhysiciansFly,
} from "@/components/client/physicians-fly";
import { physiciansContent } from "@/lib/constants/physicians-content";
import { cn } from "@/lib/utils";

export function PhysiciansHeroWall() {
  const { heroSourceRef, progress, enabled, activeId, setActiveId } = usePhysiciansFly();
  const { members } = physiciansContent.providers;

  return (
    <div className="phys-hero__wall">
      {members.map((doctor) => {
        const isSelected = doctor.id === activeId;
        const hideSource = isSelected && physiciansHeroSourceHidden(progress, enabled);

        return (
          <button
            key={doctor.id}
            type="button"
            aria-pressed={isSelected}
            aria-label={`View ${doctor.name}`}
            onClick={() => setActiveId(doctor.id)}
            className={cn(
              "phys-plate phys-hero__plate-btn",
              isSelected && "phys-plate--cream is-selected",
              hideSource && "is-fly-hidden",
            )}
            ref={isSelected ? heroSourceRef : undefined}
          >
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              fill
              sizes="(max-width: 1024px) 40vw, 200px"
              className="phys-plate__img"
              priority={isSelected}
            />
          </button>
        );
      })}
    </div>
  );
}
