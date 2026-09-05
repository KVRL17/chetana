"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Brain, Calendar, TrendingUp, Target, Users, BookOpen, Heart,
  MessageCircle, Settings, Sparkles,
} from "lucide-react";

const studentConcerns = [
  { name: "Exam Stress", icon: Calendar, color: "text-red-500" },
  { name: "Study Motivation", icon: TrendingUp, color: "text-blue-500" },
  { name: "Concentration", icon: Brain, color: "text-purple-500" },
  { name: "Confidence Building", icon: Target, color: "text-green-500" },
  { name: "Peer Pressure", icon: Users, color: "text-orange-500" },
  { name: "Career Confusion", icon: BookOpen, color: "text-primary" },
  { name: "Parent-Student Communication", icon: MessageCircle, color: "text-secondary" },
  { name: "Goal Setting", icon: Settings, color: "text-accent" },
  { name: "Decision Making", icon: Heart, color: "text-pink-500" },
  { name: "Personal Development", icon: Sparkles, color: "text-yellow-500" },
];

export const StudentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="student-counselling">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Helping Students Grow Beyond Marks
        </h2>
        <p className="text-center text-muted mb-4 max-w-3xl mx-auto">
          Students may need guidance not only academically but also emotionally and personally.
          Our student counselling addresses the whole person.
        </p>
        <p className="text-center text-muted mb-12 max-w-3xl mx-auto">
          Whether facing exam stress, motivation challenges, peer pressure, or career confusion,
          we provide support to help students succeed in studies and personal development.
        </p>

        {/* Student Concerns Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {studentConcerns.map((concern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/20",
                "hover:shadow-md hover:-translate-y-0.5 transition-all"
              )}
            >
              <concern.icon className={`w-6 h-6 ${concern.color}`} />
              <span className="text-xs font-medium text-center text-foreground">
                {concern.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services/student-counselling"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
              "bg-primary text-white hover:bg-primary/90 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            Talk to a Student Counsellor
          </Link>
        </div>
      </div>
    </section>
  );
};