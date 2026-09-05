import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  external?: boolean;
}

export function CTAButton({ href, children, variant = "primary", className, external = false }: CTAButtonProps) {
  const styles = {
    primary: "bg-primary text-white shadow-[0_14px_32px_rgba(23,63,69,.22)] hover:-translate-y-0.5 hover:bg-[#11363b]",
    secondary: "bg-secondary text-white hover:-translate-y-0.5 hover:bg-[#4f726b]",
    light: "bg-white text-primary border border-primary/10 shadow-sm hover:-translate-y-0.5 hover:border-primary/20",
    ghost: "text-primary border border-primary/12 hover:bg-primary/5",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-200",
        styles[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
