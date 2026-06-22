import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export function Select({ className, label, options, id, ...props }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-white/80"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          "h-11 w-full appearance-none rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white",
          "transition-colors focus:border-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-primary/30",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-navy text-white">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
