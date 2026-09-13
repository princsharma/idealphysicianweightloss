"use client";

import { ImageFrame, type ImageRatio } from "@/components/ui/image-frame";
import { useInView } from "@/lib/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface StoryBannerProps {
  src?: string | null;
  alt: string;
  label?: string;
  ratio?: ImageRatio;
  theme?: "dark" | "light";
  rounded?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  lockScale?: boolean;
}

export function StoryBanner({
  src,
  alt,
  label,
  ratio = "banner",
  theme = "dark",
  rounded = "rounded-none",
  className,
  sizes = "100vw",
  priority = false,
  lockScale = false,
}: StoryBannerProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.2, once: true });

  return (
    <div ref={ref} className={cn("overflow-hidden", rounded, className)}>
      <div
        className={cn(
          "h-full origin-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          lockScale || inView ? "scale-100" : "scale-[1.12]",
        )}
      >
        <ImageFrame
          src={src}
          alt={alt}
          label={label}
          ratio={ratio}
          theme={theme}
          rounded={rounded}
          sizes={sizes}
          priority={priority}
          className="border-0"
        />
      </div>
    </div>
  );
}
