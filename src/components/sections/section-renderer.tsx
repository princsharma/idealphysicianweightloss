import type { ComponentType } from "react";

import type { ContentSection, ContentSectionType } from "@/types";

type SectionComponent = ComponentType<ContentSection>;

type SectionComponentMap = Partial<Record<ContentSectionType, SectionComponent>>;

const sectionRegistry: SectionComponentMap = {};

export function registerSection(
  type: ContentSectionType,
  component: SectionComponent,
) {
  sectionRegistry[type] = component;
}

interface SectionRendererProps {
  sections: ContentSection[];
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        const Component = sectionRegistry[section.type];

        if (!Component) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`No section component registered for type: ${section.type}`);
          }
          return null;
        }

        return <Component key={section.id} {...section} />;
      })}
    </>
  );
}
