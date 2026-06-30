/** Maps header state names to dedicated state landing pages */
export const STATE_PAGE_ROUTES: Record<string, string> = {
  Louisiana: "/weight-loss/louisiana",
  Alabama: "/weight-loss/alabama",
  California: "/weight-loss/california",
  Georgia: "/weight-loss/georgia",
  Colorado: "/weight-loss/colorado",
  Ohio: "/weight-loss/ohio",
};

export function getStatePagePath(state: string): string | null {
  return STATE_PAGE_ROUTES[state] ?? null;
}
