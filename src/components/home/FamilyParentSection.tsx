"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FamilyParentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="family-parent-counselling">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Family Counselling */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Strengthening Relationships Through Understanding and Communication
            </h2>
            <p className="text-muted">
              Family counselling addresses communication problems, relationship conflicts,
              emotional disconnect, adjustment difficulties, and parent-child concerns through
              conflict resolution and healthier communication patterns.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Family Communication</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Relationship Conflicts</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Emotional Disconnect</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Parent-Child Issues</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Conflict Resolution</span></li>
            </ul>
            <Link
              href="/services/family-counselling"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
                "bg-primary text-white hover:bg-primary/90 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              )}
            >
              Book Family Counselling
            </Link>
          </div>

          {/* Parent Guidance */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Better Understanding Creates Stronger Parent-Child Relationships
            </h2>
            <p className="text-muted">
              Parent guidance helps you understand adolescent behaviour, improve communication,
              manage academic expectations, resolve parent-child conflicts, support career decisions,
              and help children build confidence with healthy emotional support and boundaries.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Understanding Adolescent Behaviour</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Improving Communication</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Managing Academic Expectations</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Resolving Parent-Child Conflicts</span></li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-0.5">•</span><span>Supporting Career Decisions</span></li>
            </ul>
            <Link
              href="/services/parent-guidance"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
                "bg-secondary text-white hover:bg-secondary/90 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              )}
            >
              Schedule Parent Guidance Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};