import { getStatePageContent } from "@/lib/constants/states/build-state-content";
import type { StatePageContent, StateSlug } from "@/lib/constants/states/state-page-types";

export const stateSlugs = [
  "alabama",
  "louisiana",
  "california",
  "georgia",
  "colorado",
  "ohio",
] as const satisfies readonly StateSlug[];

export function isStateSlug(slug: string): slug is StateSlug {
  return (stateSlugs as readonly string[]).includes(slug);
}

export function getStateContent(slug: StateSlug): StatePageContent {
  return getStatePageContent(slug);
}

export type { StatePageContent, StateSlug };
