"use client";

import { homeContent } from "@/lib/constants/home-content";
import { getIcon } from "@/lib/utils/icons";

export function TrustMarquee() {
  const items = [...homeContent.trustBar, ...homeContent.trustBar];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-dark-elevated py-5">
      <div className="animate-marquee flex w-max gap-12">
        {items.map((item, index) => {
          const Icon = getIcon(item.icon);
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex shrink-0 items-center gap-3 text-sm text-white/50"
            >
              <Icon className="size-4 text-accent-bright" aria-hidden />
              <span>{item.label}</span>
              <span className="text-white/20" aria-hidden>·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
