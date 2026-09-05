import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, description, aside, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-primary/8 bg-[linear-gradient(135deg,#f8f6f1_0%,#edf2ef_54%,#f4ece1_100%)]", className)}>
      <div className="absolute -left-24 top-0 h-60 w-60 rounded-full bg-secondary/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />
      <div className="container-shell relative py-11 sm:py-18 lg:py-24">
        <div className={cn("grid items-center gap-8 sm:gap-10", aside ? "lg:grid-cols-[1.2fr_.8fr]" : "mx-auto max-w-4xl")}>
          <div className="text-center md:text-left">
            <div className="eyebrow mb-4 sm:mb-5">{eyebrow}</div>
            <h1 className="text-[clamp(2.35rem,10.5vw,3.25rem)] font-[760] leading-[1.015] tracking-[-.04em] text-primary text-balance sm:text-[clamp(2.55rem,5vw,4.8rem)] sm:tracking-[-.025em]">{title}</h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl sm:mt-6 md:mx-0">{description}</p>
            {children && <div className="mt-7 sm:mt-8">{children}</div>}
          </div>
          {aside && <div className="mx-auto w-full max-w-xl md:mx-0 md:max-w-none">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
