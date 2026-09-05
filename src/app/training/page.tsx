import Link from "next/link";
import { ArrowUpRight, Building2, GraduationCap, MessageSquareText, Presentation, Sparkles } from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkshopForm } from "@/components/forms/WorkshopForm";
import { trainingPrograms } from "@/data/trainingData";

export default function TrainingPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Training & Workshops" }]} />
      <PageHero
        eyebrow="Training & workshops"
        title="Development programs that turn ideas into practical skills"
        description="Programs for schools, colleges, parent groups and organizations can be shaped around the audience, available time and the outcomes you want to focus on."
        aside={
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
            <Link href="/training/schools-colleges" className="premium-card premium-card-hover p-4 sm:p-5"><GraduationCap className="h-5 w-5 text-secondary" /><h2 className="mt-4 font-extrabold text-primary">Schools & colleges</h2><p className="mt-2 text-xs leading-5 text-muted">Student, parent and teacher development programs.</p></Link>
            <Link href="/training/hrd" className="premium-card premium-card-hover p-4 sm:p-5"><Building2 className="h-5 w-5 text-secondary" /><h2 className="mt-4 font-extrabold text-primary">Corporate / HRD</h2><p className="mt-2 text-xs leading-5 text-muted">Workplace communication, leadership and wellbeing.</p></Link>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Program catalogue" title="Training themes for learning, growth and performance" description="Use these program pages as a starting point. Content and format can be discussed based on your institution or organization." />
          <div className="mt-10 grid gap-3.5 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program, index) => (
              <Link key={program.slug} href={`/training/${program.slug}`} className="premium-card premium-card-hover group flex min-h-0 flex-col p-5 md:min-h-[270px] md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/7 text-primary">{index % 3 === 0 ? <Presentation className="h-5 w-5" /> : index % 3 === 1 ? <Sparkles className="h-5 w-5" /> : <MessageSquareText className="h-5 w-5" />}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div className="mt-4 text-[9px] sm:mt-5 sm:text-[10px] font-extrabold uppercase tracking-[.12em] text-secondary">{program.category}</div>
                <h2 className="mt-1.5 text-[1.05rem] font-extrabold leading-tight text-primary sm:mt-2 sm:text-xl">{program.title}</h2>
                <p className="mt-2.5 text-[12.5px] leading-5.5 text-muted sm:mt-3 sm:text-sm sm:leading-6">{program.shortDescription}</p>
                <div className="mt-4 border-t border-primary/7 pt-3.5 text-[10px] font-extrabold text-primary sm:mt-auto sm:border-0 sm:pt-5 sm:text-xs">View program details</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="section-space bg-[#f0eee8]">
        <div className="container-shell grid gap-7 sm:gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="text-center lg:sticky lg:top-28 lg:text-left">
            <div className="eyebrow mb-5">Program enquiry</div>
            <h2 className="section-title">Tell us what you are planning</h2>
            <p className="lead-copy mx-auto mt-5 lg:mx-0">Share the audience, approximate participant count, preferred topic and location. The centre can then respond with suitable next steps.</p>
            <div className="mt-6 rounded-[1.15rem] border border-primary/8 bg-white p-4.5 text-left text-[13px] leading-6 text-muted shadow-sm sm:mt-7 sm:rounded-2xl sm:p-5 sm:text-sm">No fixed package is assumed. Program scope can be discussed around your institution’s practical requirements.</div>
          </div>
          <div className="premium-card form-shell p-5 sm:p-8"><WorkshopForm /></div>
        </div>
      </section>
    </PageWrapper>
  );
}
