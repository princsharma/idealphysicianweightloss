/**
 * Paths that should return HTTP 410 Gone and render the custom 410 page.
 * Add lowercase paths without trailing slashes (except "/").
 *
 * Example: "/old-blog-post-that-was-deleted"
 */
export const GONE_URLS = new Set<string>([
  // Add permanently removed URLs here as they are retired from the site.
]);

export function isGoneUrl(pathname: string): boolean {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.replace(/\/+$/, "")
      : pathname;

  return GONE_URLS.has(normalized);
}
