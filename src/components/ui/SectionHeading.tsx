import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="lead-copy mt-5">{description}</p>}
    </div>
  );
}
