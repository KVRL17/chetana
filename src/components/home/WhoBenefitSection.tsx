import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, HeartHandshake, School, UserRound, UsersRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups = [
  { icon: GraduationCap, title: "Students", copy: "Academic pressure, motivation, confidence, stream and career choices.", href: "/services/student-counselling" },
  { icon: UserRound, title: "Individuals", copy: "Stress, self-understanding, decisions, communication and personal growth.", href: "/services/individual-counselling" },
  { icon: UsersRound, title: "Parents & families", copy: "Communication, expectations, relationships and parent-child concerns.", href: "/services/family-counselling" },
  { icon: BriefcaseBusiness, title: "Professionals", copy: "Work stress, balance, personal effectiveness and development.", href: "/services/stress-emotional-wellbeing" },
  { icon: School, title: "Institutions", copy: "Student development, career awareness, teacher and parent programs.", href: "/training/schools-colleges" },
  { icon: HeartHandshake, title: "Organizations", copy: "Communication, leadership, emotional intelligence and workplace wellbeing.", href: "/training/hrd" },
];

export const WhoBenefitSection = () => (
  <section className="section-space bg-[#f0eee8]" id="who-can-benefit">
    <div className="container-shell">
      <SectionHeading eyebrow="Who we support" title="Guidance for different stages of life" description="The concern may be academic, personal, relational or professional. Start with the area that feels closest to your current need." />
      <div className="mt-10 grid gap-3.5 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, copy, href }) => (
          <Link key={title} href={href} className="group rounded-[1.25rem] border border-primary/8 bg-white p-4.5 shadow-[0_10px_30px_rgba(23,63,69,.035)] transition active:scale-[.995] sm:rounded-[1.4rem] sm:p-5 sm:hover:-translate-y-1 sm:hover:border-primary/18 sm:hover:shadow-lg">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.8rem] bg-[#edf3f1] text-primary sm:h-11 sm:w-11 sm:rounded-xl"><Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" /></span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-extrabold text-primary">{title}</h3>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-secondary/55 transition group-hover:translate-x-0.5 sm:hidden" />
                </div>
                <p className="mt-1.5 text-[13px] leading-5.5 text-muted sm:text-sm sm:leading-6">{copy}</p>
                <span className="mt-3 hidden items-center gap-1.5 text-xs font-extrabold text-secondary sm:inline-flex">Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
