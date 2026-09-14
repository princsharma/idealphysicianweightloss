"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

import Image from "next/image";

import { physiciansContent } from "@/lib/constants/physicians-content";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

type FlyRect = { top: number; left: number; width: number; height: number };
type PhysicianId = (typeof physiciansContent.providers.members)[number]["id"];

const FLY_START = 0.025;
const FLY_END = 0.975;

type PhysiciansFlyContextValue = {
  heroSourceRef: RefObject<HTMLButtonElement | null>;
  spotlightTargetRef: RefObject<HTMLDivElement | null>;
  activeId: PhysicianId;
  setActiveId: (id: PhysicianId) => void;
  activeDoctor: (typeof physiciansContent.providers.members)[number];
  progress: number;
  enabled: boolean;
};

const PhysiciansFlyContext = createContext<PhysiciansFlyContextValue | null>(null);

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function readRect(node: HTMLElement | null): FlyRect | null {
  if (!node) return null;
  const rect = node.getBoundingClientRect();
  return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
}

export function PhysiciansFlyProvider({ children }: { children: ReactNode }) {
  const members = physiciansContent.providers.members;
  const heroSourceRef = useRef<HTMLButtonElement>(null);
  const spotlightTargetRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<PhysicianId>(members[0].id);
  const [progress, setProgress] = useState(0);
  const enabled = !reduceMotion;

  const activeDoctor = useMemo(
    () => members.find((member) => member.id === activeId) ?? members[0],
    [activeId, members],
  );

  const updateProgress = useCallback(() => {
    if (!enabled) {
      setProgress(1);
      return;
    }

    const from = heroSourceRef.current;
    const to = spotlightTargetRef.current;
    if (!from || !to) return;

    const scrollY = window.scrollY;
    const fromDocTop = from.getBoundingClientRect().top + scrollY;
    const toDocTop = to.getBoundingClientRect().top + scrollY;

    const scrollStart = fromDocTop - window.innerHeight * 0.22;
    const scrollEnd = toDocTop - window.innerHeight * 0.38;
    const span = scrollEnd - scrollStart;

    if (span <= 32) {
      setProgress(scrollY >= scrollEnd ? 1 : 0);
      return;
    }

    if (scrollY <= scrollStart) {
      setProgress(0);
      return;
    }

    setProgress(clamp((scrollY - scrollStart) / span, 0, 1));
  }, [enabled]);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress, activeId]);

  return (
    <PhysiciansFlyContext.Provider
      value={{
        heroSourceRef,
        spotlightTargetRef,
        activeId,
        setActiveId,
        activeDoctor,
        progress,
        enabled,
      }}
    >
      {children}
      <PhysiciansFlyingPortrait />
    </PhysiciansFlyContext.Provider>
  );
}

export function usePhysiciansFly() {
  const ctx = useContext(PhysiciansFlyContext);
  if (!ctx) {
    throw new Error("usePhysiciansFly must be used within PhysiciansFlyProvider");
  }
  return ctx;
}

function PhysiciansFlyingPortrait() {
  const { heroSourceRef, spotlightTargetRef, activeDoctor, progress, enabled, activeId } =
    usePhysiciansFly();

  const [from, setFrom] = useState<FlyRect | null>(null);
  const [to, setTo] = useState<FlyRect | null>(null);

  const isFlying = enabled && progress > FLY_START && progress < FLY_END;

  useEffect(() => {
    const measure = () => {
      setFrom(readRect(heroSourceRef.current));
      setTo(readRect(spotlightTargetRef.current));
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [heroSourceRef, spotlightTargetRef, activeId]);

  if (!isFlying || !from || !to) {
    return null;
  }

  const p = progress;

  return (
    <div
      className="phys-fly-portrait pointer-events-none"
      aria-hidden
      style={{
        position: "fixed",
        zIndex: 45,
        top: lerp(from.top, to.top, p),
        left: lerp(from.left, to.left, p),
        width: lerp(from.width, to.width, p),
        height: lerp(from.height, to.height, p),
        borderRadius: "1.5rem",
      }}
    >
      <div className="phys-plate phys-plate--cream phys-fly-portrait__inner h-full w-full">
        <Image
          key={activeDoctor.id}
          src={activeDoctor.image.src}
          alt=""
          fill
          sizes="420px"
          className="phys-plate__img"
          priority
        />
      </div>
    </div>
  );
}

export function physiciansHeroSourceHidden(progress: number, enabled: boolean) {
  return enabled && progress > FLY_START;
}

export function physiciansSpotlightImageHidden(progress: number, enabled: boolean) {
  return enabled && progress < FLY_END;
}
