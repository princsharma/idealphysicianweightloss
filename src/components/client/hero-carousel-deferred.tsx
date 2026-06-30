"use client";

import { useEffect, useState, type ReactNode } from "react";

function useIdleReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setReady(true), { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }

    const timer = window.setTimeout(() => setReady(true), 1);
    return () => window.clearTimeout(timer);
  }, []);

  return ready;
}

export function HeroCarouselDeferred({ children }: { children: ReactNode }) {
  const ready = useIdleReady();
  if (!ready) return null;
  return children;
}
