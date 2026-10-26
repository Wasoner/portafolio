"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning";
  children: React.ReactNode;
}

/**
 * Matte badges: tinted surfaces with hairline borders, never outer glows.
 * Section headers intentionally do NOT use pills — they render a neutral
 * monospace eyebrow instead; badges are reserved for item states (private
 * repo, open source).
 */
export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300";

  // Single-hue palette (black / gray / orange): semantic variants differ by
  // icon and label rather than by introducing off-palette hues.
  const variants = {
    default: "bg-surface-2 text-ash border border-line",
    success: "bg-accent/10 text-accent border border-accent/30",
    warning: "bg-surface-2 text-ash border border-accent/40",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
