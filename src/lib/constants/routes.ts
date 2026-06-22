export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  blog: "/blog",
} as const;

export type RouteKey = keyof typeof routes;

export type RoutePath = (typeof routes)[RouteKey];
