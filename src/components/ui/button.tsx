"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Button class maps are exported so links (`<a>`) can reuse the exact same
 * visuals without nesting interactive elements inside one another — a common
 * WCAG failure when `<button>` is wrapped in `<a href>`.
 */
export const BUTTON_BASE =
  "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer";

export const BUTTON_VARIANTS = {
  primary:
    "bg-accent text-canvas hover:bg-accent-hover border border-accent shadow-none font-semibold",
  secondary:
    "bg-surface-2 text-ink border border-line hover:border-accent/50 shadow-none",
  outline:
    "bg-transparent text-ash border border-line hover:text-ink hover:border-accent/50 hover:bg-surface-2/40 shadow-none",
  ghost: "bg-transparent text-ash hover:text-ink hover:bg-surface shadow-none",
};

export const BUTTON_SIZES = {
  sm: "text-xs px-3.5 py-1.5 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3 gap-2.5",
  icon: "p-2.5",
};

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
export type ButtonSize = keyof typeof BUTTON_SIZES;

/** Compose anchor-styled-as-button markup: `<a className={buttonClass("primary", "md")}`. */
export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(BUTTON_BASE, BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className);
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonClass(variant, size, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
