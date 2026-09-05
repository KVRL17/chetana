"use client";
import { Shield, Search, TrendingUp } from "lucide-react";

export const IndividualSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="individual-counselling">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          A Private Space to Talk, Understand and Move Forward
        </h2>
        <p className="text-center text-muted mb-8 max-w-2xl mx-auto">
          Your privacy and comfort are treated with respect throughout the counselling process.
        </p>
        <p className="text-center text-muted mb-12 max-w-3xl mx-auto">
          Individual counselling provides a safe, confidential space to explore personal challenges,
          emotional concerns, relationship issues, stress, decision-making difficulties, and confidence.
          Through understanding and guided support, you can gain emotional clarity, develop coping
          strategies, and work toward personal growth and adjustment.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-card border border-border/20">
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-secondary mb-2">Confidentiality</h3>
            <p className="text-muted text-sm">Your privacy and comfort are treated with respect throughout the counselling process.</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-card border border-border/20">
            <Search className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-secondary mb-2">Self-Understanding</h3>
            <p className="text-muted text-sm">Explore your thoughts, emotions and choices in a non-judgmental space.</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-card border border-border/20">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-secondary mb-2">Personal Growth</h3>
            <p className="text-muted text-sm">Develop strategies for confidence, decision-making and positive change.</p>
          </div>
        </div>
      </div>
    </section>
  );
};