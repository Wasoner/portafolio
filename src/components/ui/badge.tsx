"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "glow" | "accent" | "success" | "warning";
  children: React.ReactNode;
}

/**
 * Matte badges: tinted surfaces with hairline borders, never outer glows.
 * `glow` is kept as an alias for the accent outline so section headers read
 * as quiet secondary marks rather than neon chips.
 */
export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300";

  const variants = {
    default: "bg-surface-2 text-ash border border-line",
    outline: "border border-line text-ash bg-transparent",
    glow: "bg-transparent text-accent border border-accent/30",
    accent: "bg-accent/10 text-accent border border-accent/25",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
    warning: "bg-amber-500/10 text-amber-300 border border-amber-500/25",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
