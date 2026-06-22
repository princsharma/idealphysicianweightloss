import type { ReactNode } from "react";

interface MainContentProps {
  children?: ReactNode;
  className?: string;
}

export function MainContent({ children, className }: MainContentProps) {
  return (
    <main id="main-content" tabIndex={-1} className={className}>
      {children}
    </main>
  );
}
