export function AlabamaMapGraphic({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M118 8 L168 28 L185 78 L178 138 L162 198 L148 258 L128 302 L88 312 L58 288 L42 238 L28 178 L22 118 L32 68 L58 28 L88 12 Z"
        fill="url(#alMapFill)"
        stroke="rgba(174,219,98,0.45)"
        strokeWidth="2"
      />
      <circle cx="108" cy="148" r="10" fill="var(--lime-bright)" opacity="0.9" />
      <circle cx="108" cy="148" r="18" stroke="var(--lime-bright)" strokeWidth="1.5" opacity="0.35" />
      <defs>
        <linearGradient id="alMapFill" x1="30" y1="20" x2="170" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(152,197,78,0.22)" />
          <stop offset="1" stopColor="rgba(18,37,24,0.55)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
