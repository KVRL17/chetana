"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Shield, HeartHandshake, GraduationCap, Users, Folder, BookOpen, Target, Microscope, Laptop } from "lucide-react";

const whyChooseItems = [
  { id: "1", title: "30+ Years Experience", icon: Shield, description: "Decades of professional counselling expertise." },
  { id: "2", title: "Personalized Counselling", icon: HeartHandshake, description: "Tailored support for your unique needs and goals." },
  { id: "3", title: "Student-Focused Guidance", icon: GraduationCap, description: "Specialized support for students at every level." },
  { id: "4", title: "Career & Life Guidance", icon: Target, description: "Career exploration and decision-making support." },
  { id: "5", title: "Support for Families", icon: Users, description: "Family counselling and parent guidance services." },
  { id: "6", title: "Professional & Respectful Approach", icon: Folder, description: "Confidential, ethical, and compassionate care." },
  { id: "7", title: "Multilingual Counselling", icon: Microscope, description: "Sessions in Telugu, English, and Hindi." },
  { id: "8", title: "One-to-One Attention", icon: Target, description: "Personalized focus on your individual journey." },
  { id: "9", title: "Workshops & Training", icon: BookOpen, description: "Professional programs for schools and organizations." },
  { id: "10", title: "Accessible Local Support", icon: Laptop, description: "Conveniently located in Atchutapuram, Anakapalli." },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Why Choose Chetana
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {whyChooseItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className={cn(
                "p-6 rounded-2xl bg-card border border-border/20 flex items-center gap-3",
                "group"
              )}>
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 ${item.icon === Shield ? "bg-primary/5" : ""}`}>
                  {item.icon && <item.icon className="w-5 h-5 text-primary" />}
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};