"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, href, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50";
    const variants = {
      primary: "bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 hover:-translate-y-0.5",
      secondary: "glass text-white hover:bg-white/10 hover:-translate-y-0.5",
      ghost: "text-muted hover:text-white hover:bg-white/5",
    };
    const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
    const classes = cn(base, variants[variant], sizes[size], glow && "glow-cyan", className);

    if (href) return <a href={href} className={classes}>{children}</a>;
    return <button ref={ref} className={classes} {...props}>{children}</button>;
  }
);
Button.displayName = "Button";
export default Button;
