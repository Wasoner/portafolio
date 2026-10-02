"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  children: React.ReactNode;
}

/**
 * Matte graphite card: flat surface + hairline border. The old cursor-tracking
 * spotlight (`glow`) was removed as part of the noise-reduction pass — hover
 * feedback is now a subtle border tint only.
 */
export function Card({
  className,
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-surface border border-line p-6 transition-colors duration-300",
        interactive && "hover:border-accent/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
