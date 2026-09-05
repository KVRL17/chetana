"use client";
import { cn } from "@/lib/utils";
import { Award, Shield, Clock } from "lucide-react";

interface TrustBadgeProps {
  type: "experience" | "confidentiality" | "available";
  label: string;
  value?: string;
}

export const TrustBadge = ({ type, label, value }: TrustBadgeProps) => {
  const iconConfig = {
    experience: { icon: Award, color: "text-primary" },
    confidentiality: { icon: Shield, color: "text-secondary" },
    available: { icon: Clock, color: "text-accent" },
  };

  const config = iconConfig[type] || iconConfig.experience;

  return (
    <div className={cn(
      "flex items-center gap-2 px-3 py-1.5 rounded-full",
      "bg-white border border-border/20"
    )}>
      <config.icon className={`w-4 h-4 ${config.color}`} />
      <span className="text-xs font-medium text-foreground">
        {value ? `${value}` : label}
      </span>
    </div>
  );
};