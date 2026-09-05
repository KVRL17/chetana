"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Compass, GraduationCap, BookOpen, Users, Briefcase } from "lucide-react";

export const CareerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="career-counselling">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Career Decisions Shape the Future — Make Them With Clarity
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Understanding interests, identifying suitable career areas, stream selection,
          course planning, and future action planning.
        </p>

        {/* Student Groups */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-card border border-border/20">
            <div className="w-12 h-12 rounded-xl bg-primary/5 mb-4">
              <Compass className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-secondary mb-2">Class 8–10</h3>
            <p className="text-muted text-sm">Stream selection, interest assessment, early career exploration</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border/20">
            <div className="w-12 h-12 rounded-xl bg-primary/5 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-secondary mb-2">Class 11–12</h3>
            <p className="text-muted text-sm">Course selection, higher education planning, competitive exams</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border/20">
            <div className="w-12 h-12 rounded-xl bg-primary/5 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-secondary mb-2">College Students</h3>
            <p className="text-muted text-sm">Specialization selection, internship guidance, career paths</p>
          </div>
        </div>

        {/* More groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-card border border-border/20 text-center">
            <div className="w-8 h-8 rounded-xl bg-primary/5 mx-auto mb-2">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xs font-medium text-secondary">Graduates</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border/20 text-center">
            <div className="w-8 h-8 rounded-xl bg-primary/5 mx-auto mb-2">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xs font-medium text-secondary">Young Professionals</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border/20 text-center">
            <div className="w-8 h-8 rounded-xl bg-primary/5 mx-auto mb-2">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xs font-medium text-secondary">Parents</div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/services/career-counselling"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
              "bg-primary text-white hover:bg-primary/90 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            Book Career Counselling
          </Link>
        </div>
      </div>
    </section>
  );
};