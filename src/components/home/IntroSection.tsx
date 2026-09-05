"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

export const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtle icon */}
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/5">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Understanding You Is the First Step Toward Positive Change
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
            Counselling offers a safe, respectful environment where individuals can explore thoughts,
            concerns, choices, relationships, education, careers, and personal development. Our
            approach focuses on your unique strengths and goals, supporting understanding, clarity,
            confidence, emotional wellbeing, and healthy communication.
          </p>
          <Link
            href="/book-session"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
              "bg-primary text-white hover:bg-primary/90 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            Speak With a Counsellor
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};