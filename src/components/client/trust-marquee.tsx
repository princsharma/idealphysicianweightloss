"use client";

import { homeContent } from "@/lib/constants/home-content";
import { getIcon } from "@/lib/utils/icons";

export function TrustMarquee() {
  const items = [...homeContent.trustBar, ...homeContent.trustBar];

  return (
    <div className="home-trust" aria-label="Trust signals">
      <span className="home-trust__fade home-trust__fade--left" aria-hidden />
      <span className="home-trust__fade home-trust__fade--right" aria-hidden />
      <div className="home-trust__row animate-marquee">
        {items.map((item, index) => {
          const Icon = getIcon(item.icon);
          return (
            <span key={`${item.label}-${index}`} className="home-trust__item">
              <span className="home-trust__icon">
                <Icon className="size-3.5" aria-hidden />
              </span>
              {item.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
