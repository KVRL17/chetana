"use client";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
}

export const TestimonialCard = ({ testimonial, isActive = true }: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-8 md:p-12 border border-border/20 text-center",
        "transition-all duration-300",
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
      )}
    >
      {testimonial.rating && (
        <div className="flex gap-1 justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
      )}

      <p className="text-lg italic text-muted mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      <div>
        <div className="font-semibold text-secondary">— {testimonial.name}</div>
        <div className="text-sm text-muted">{testimonial.relationship}</div>
        {testimonial.isPlaceholder && (
          <div className="mt-2 text-xs text-muted/70">
            * Sample testimonial — replace with real feedback
          </div>
        )}
      </div>
    </div>
  );
};