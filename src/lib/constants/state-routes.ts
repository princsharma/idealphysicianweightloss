/** Maps header state names to dedicated state landing pages */
export const STATE_PAGE_ROUTES: Record<string, string> = {
  Alabama: "/alabama",
};

export function getStatePagePath(state: string): string | null {
  return STATE_PAGE_ROUTES[state] ?? null;
}
