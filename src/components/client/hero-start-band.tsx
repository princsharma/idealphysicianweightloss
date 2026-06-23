"use client";

import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";
import { cn } from "@/lib/utils";

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington DC", "West Virginia",
  "Wisconsin", "Wyoming",
];

export function HeroStartBand() {
  const { startBar } = homeContent.hero;
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [hotIndex, setHotIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = STATES.filter((s) => s.toLowerCase().includes(query.toLowerCase().trim()));

  function pick(state: string) {
    setSelected(state);
    setQuery(state);
    setOpen(false);
    setHotIndex(-1);
  }

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setHotIndex(-1);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="mary-startband__card">
      <div className="mary-startband__copy">
        <b>Start your evaluation</b>
        <span>{startBar.steps}</span>
      </div>

      <div className="mary-selector" ref={wrapperRef}>
        <div className="mary-selector__field">
          <svg className="mary-selector__pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <input
            type="text"
            id="stateInput"
            className="mary-selector__input"
            placeholder={startBar.placeholder}
            autoComplete="off"
            role="combobox"
            aria-expanded={open}
            aria-controls="stateMenu"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(null);
              setOpen(true);
              setHotIndex(-1);
            }}
            onFocus={() => {
              setOpen(true);
              setHotIndex(-1);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
                setHotIndex((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setHotIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                if (hotIndex >= 0 && filtered[hotIndex]) pick(filtered[hotIndex]);
                else if (filtered.length === 1) pick(filtered[0]);
              } else if (e.key === "Escape") {
                setOpen(false);
              }
            }}
          />
        </div>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mary-btn--lime mary-selector__go"
        >
          {startBar.cta}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <div className={cn("mary-selector__menu", open && "is-open")} id="stateMenu" role="listbox">
          {filtered.length === 0 ? (
            <div className="mary-selector__none">No matching state — check our coverage list below.</div>
          ) : (
            filtered.map((state, i) => (
              <button
                key={state}
                type="button"
                role="option"
                aria-selected={selected === state}
                className={cn("mary-selector__opt", i === hotIndex && "is-hot")}
                onClick={() => pick(state)}
              >
                {state}
              </button>
            ))
          )}
        </div>
      </div>

      <div className="mary-startband__micro">
        <span>HIPAA secure</span>
        <i>·</i>
        <span>Money-back guarantee</span>
        <i>·</i>
        <span>2-min signup</span>
      </div>
    </div>
  );
}
