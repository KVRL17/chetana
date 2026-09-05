import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Presentation, UsersRound } from "lucide-react";

const programGroups = [
  { icon: GraduationCap, title: "Schools & colleges", copy: "Student motivation, career awareness, exam stress, goal setting and emotional wellbeing programs.", href: "/training/schools-colleges" },
  { icon: UsersRound, title: "Parents & teachers", copy: "Awareness and development sessions focused on communication, adolescents, expectations and student support.", href: "/training/schools-colleges" },
  { icon: Building2, title: "Corporate / HRD", copy: "Communication, leadership, stress management, emotional intelligence, conflict resolution and workplace wellbeing.", href: "/training/hrd" },
];

export const WorkshopsSection = () => (
  <section className="section-space bg-[linear-gradient(135deg,#edf2ef_0%,#f6f2ea_100%)]" id="workshops-training">
    <div className="container-shell">
      <div className="grid gap-9 sm:gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
        <div className="text-center lg:text-left">
          <div className="eyebrow mb-5"><Presentation className="h-3.5 w-3.5" /> Workshops & training</div>
          <h2 className="section-title">Human development beyond one-to-one counselling</h2>
          <p className="lead-copy mx-auto mt-5 max-w-xl lg:mx-0">Structured programs for educational institutions, parent groups and organizations can be tailored around audience, duration and learning goals.</p>
          <Link href="/training" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition hover:text-secondary sm:mt-7">Explore all training programs <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-3.5 sm:gap-4 md:grid-cols-3">
          {programGroups.map(({ icon: Icon, title, copy, href }) => (
            <Link key={title} href={href} className="premium-card premium-card-hover group flex items-start gap-3.5 p-4.5 text-left sm:p-5 md:block">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.8rem] bg-primary/7 text-primary sm:h-11 sm:w-11 sm:rounded-xl"><Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" /></span>
              <div className="min-w-0 flex-1 md:mt-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-extrabold text-primary">{title}</h3>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-secondary/55 transition group-hover:translate-x-0.5 md:hidden" />
                </div>
                <p className="mt-1.5 text-[12.5px] leading-5.5 text-muted sm:mt-2 sm:text-sm sm:leading-6">{copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const SchoolsCollegesSection = () => null;
export const HRDTrainingSection = () => null;
