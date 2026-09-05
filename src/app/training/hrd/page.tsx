import Link from "next/link";
import { BrainCircuit, Building2, Check, MessageCircle, UsersRound } from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

const areas = ["Communication", "Leadership", "Team Development", "Stress Management", "Decision Making", "Conflict Resolution", "Emotional Intelligence", "Workplace Wellbeing", "Personal Effectiveness", "Goal Setting", "Motivation"];

export default function HRDPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Training", href: "/training" }, { label: "Corporate / HRD" }]} />
      <PageHero eyebrow="Corporate / HRD" title="Human development programs for stronger workplace capability" description="Training for organizations and professional groups focused on communication, leadership, emotional intelligence, decision-making, team effectiveness and workplace wellbeing." aside={<div className="rounded-[1.4rem] bg-primary p-5 text-white sm:rounded-[1.7rem] sm:p-7"><Building2 className="h-6 w-6 text-accent" /><div className="mt-6 text-4xl font-black text-accent">11</div><div className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-white/50">Core training themes</div><p className="mt-5 text-sm leading-6 text-white/65">Topics can be combined or prioritised based on the group and the available duration.</p></div>} />
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Training themes" title="Build a program around the skills your team needs" description="The exact structure can be tailored. These themes provide a practical menu for discussion." />
          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {areas.map((area, index) => <div key={area} className="premium-card p-4.5 sm:p-5"><div className="flex items-center gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/7 text-primary">{index % 2 === 0 ? <BrainCircuit className="h-4.5 w-4.5" /> : <UsersRound className="h-4.5 w-4.5" />}</span><div className="font-extrabold text-primary">{area}</div></div></div>)}
          </div>
          <div className="mt-10 rounded-[1.45rem] bg-[#f0eee8] p-5 sm:mt-12 sm:rounded-[1.8rem] sm:p-9"><h2 className="text-2xl font-extrabold text-primary">A practical format for organizations</h2><div className="mt-5 grid gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-3">{["Discuss audience and goals", "Select priority themes", "Agree delivery format and date"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-semibold text-muted"><Check className="h-4 w-4 shrink-0 text-secondary" />{item}</div>)}</div><Link href="/training#request" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-[12px] font-extrabold text-white sm:mt-7 sm:w-auto sm:px-6 sm:text-sm"><MessageCircle className="h-4 w-4" /> Request HRD training</Link></div>
        </div>
      </section>
    </PageWrapper>
  );
}
