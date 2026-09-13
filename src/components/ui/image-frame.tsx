import { ImageIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const ratioClass = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  panorama: "aspect-[21/9]",
  banner: "h-[min(88vh,920px)]",
  screen: "h-full min-h-full w-full",
} as const;

export type ImageRatio = keyof typeof ratioClass;

interface ImageFrameProps {
  src?: string | null;
  alt: string;
  label?: string;
  ratio?: ImageRatio;
  theme?: "dark" | "light";
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
}

/**
 * Renders artwork once `src` is filled in, and a labelled placeholder until then.
 * Drop the asset path into the matching entry in `home-content.ts` to go live.
 */
export function ImageFrame({
  src,
  alt,
  label,
  ratio = "landscape",
  theme = "light",
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  rounded = "rounded-3xl",
}: ImageFrameProps) {
  const dark = theme === "dark";

  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden border",
        rounded,
        ratioClass[ratio],
        dark ? "border-white/10 bg-white/5" : "border-border-strong bg-cream",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" unoptimized />
      ) : (
        <div
          className={cn(
            "absolute inset-0 grid place-items-center gap-3 p-6 text-center",
            dark ? "text-white/45" : "text-ink-subtle",
          )}
          role="img"
          aria-label={`Image placeholder: ${alt}`}
        >
          <span
            className={cn(
              "absolute inset-3 rounded-2xl border border-dashed",
              dark ? "border-white/15" : "border-ink/15",
            )}
            aria-hidden
          />
          <span className="relative flex flex-col items-center gap-2">
            <ImageIcon className={cn("size-7", dark ? "text-white/35" : "text-forest/40")} aria-hidden />
            <span className="text-xs font-medium uppercase tracking-[0.18em]">{label ?? "Image"}</span>
            <span className="max-w-[26ch] text-xs leading-relaxed opacity-70">{alt}</span>
          </span>
        </div>
      )}
    </div>
  );
}
