import Link from "next/link";
import {
  BookOpenCheck,
  Check,
  GraduationCap,
  MessageCircle,
  School,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { schoolCounsellingContent } from "@/data/brochureContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "School & College Counselling Programs in Anakapalli",
  description: "Counselling, career awareness, exam stress, parent awareness and teacher development programs for schools and colleges in Anakapalli and Visakhapatnam.",
  path: "/training/schools-colleges",
});

const programs = [
  "Student Motivation Sessions",
  "Career Awareness Programs",
  "Exam Stress Management",
  "Teacher Development",
  "Parent Awareness Programs",
  "Career Planning",
  "Emotional Wellbeing Sessions",
  "Communication Skills",
  "Leadership Development",
  "Goal Setting Workshops",
];

export default function SchoolsCollegesPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Training", href: "/training" }, { label: "Schools & Colleges" }]} />
      <PageHero
        eyebrow="Schools & colleges"
        title="School counselling and development programmes for the whole learning community"
        description="Support for students, educators and parents can include academic development, career awareness, social-emotional development, group counselling, assessment support and tailored institutional programmes."
        aside={
          <div className="rounded-[1.4rem] bg-primary p-5 text-white sm:rounded-[1.7rem] sm:p-7">
            <School className="h-6 w-6 text-accent" />
            <h2 className="mt-5 text-2xl font-extrabold">Programs shaped around the institution</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">Audience, age group, participant count, topic priorities and duration can all be discussed before finalising a session.</p>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div>
            <div className="eyebrow mb-5">What is a school counsellor?</div>
            <h2 className="section-title">Helping remove barriers to learning while supporting the whole student</h2>
          </div>
          <div className="premium-card p-5 sm:p-7">
            <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">{schoolCounsellingContent.definition}</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f0eee8]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="School counselling practice"
            title="Counselling lessons and responsive services"
            description="School counselling combines preventive education with timely support when academic, personal, family or social concerns begin to affect a student."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2">
            <div className="premium-card p-5 sm:p-7">
              <BookOpenCheck className="h-6 w-6 text-secondary" />
              <h3 className="mt-5 text-xl font-extrabold text-primary">Counselling lessons</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{schoolCounsellingContent.lessonsIntro}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {schoolCounsellingContent.lessonTopics.map((topic) => (
                  <div key={topic} className="flex items-start gap-2.5 rounded-xl bg-[#f8f7f3] px-3.5 py-3 text-sm font-semibold text-foreground/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />{topic}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.55rem] bg-primary p-5 text-white sm:p-7">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-xl font-extrabold">Responsive services</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{schoolCounsellingContent.responsiveServices}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {schoolCounsellingContent.responsiveTopics.map((topic) => (
                  <div key={topic} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm font-semibold text-white/78">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{topic}
                  </div>
                ))}
              </div>
              <Link href="/book-session?service=student-counselling" className="mt-5 inline-flex text-sm font-extrabold text-accent underline decoration-white/20 underline-offset-4">Request counselling support for a student</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div className="premium-card p-5 sm:p-7 lg:sticky lg:top-28">
              <p className="text-xs font-extrabold uppercase tracking-[.12em] text-secondary">How students are referred</p>
              <h2 className="mt-3 text-2xl font-extrabold text-primary">Three common referral routes</h2>
              <div className="mt-5 space-y-3">
                {schoolCounsellingContent.referrals.map((item, index) => (
                  <div key={item} className="grid grid-cols-[38px_1fr] items-start gap-3 rounded-2xl bg-[#f0eee8] p-3.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xs font-black text-accent">{index + 1}</span>
                    <span className="pt-1.5 text-sm font-semibold leading-6 text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-left">
                <div className="eyebrow mb-5">What a school counsellor teaches</div>
                <h2 className="section-title">Academic, career, social and emotional development</h2>
              </div>
              <div className="mt-7 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {schoolCounsellingContent.developmentAreas.map((area, index) => (
                  <div key={area.title} className="premium-card p-5 sm:p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/7 text-sm font-black text-primary">0{index + 1}</span>
                    <h3 className="mt-4 text-lg font-extrabold text-primary">{area.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f0eee8]">
        <div className="container-shell grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <div className="premium-card p-5 sm:p-7">
            <UsersRound className="h-6 w-6 text-secondary" />
            <h2 className="mt-5 text-2xl font-extrabold text-primary">Counselling groups</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{schoolCounsellingContent.groups}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {schoolCounsellingContent.groupTopics.map((topic) => (
                <span key={topic} className="rounded-full bg-primary/7 px-3.5 py-2 text-xs font-extrabold text-primary">{topic}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-secondary">Appropriate activities for a school counsellor</p>
            <div className="mt-4 space-y-3">
              {schoolCounsellingContent.appropriateActivities.map((activity) => (
                <div key={activity.title} className="rounded-[1.2rem] border border-primary/8 bg-white p-4.5 sm:p-5">
                  <h3 className="font-extrabold text-primary">{activity.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Program areas" title="Support the whole learning environment" description="Sessions are available for students as well as the adults who guide and support them." />
          <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
            {programs.map((program, index) => <div key={program} className="premium-card flex items-center gap-3.5 p-4.5 sm:gap-4 sm:p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/7 text-primary">{index % 2 ? <UsersRound className="h-4.5 w-4.5" /> : <GraduationCap className="h-4.5 w-4.5" />}</span><span className="font-extrabold text-primary">{program}</span></div>)}
          </div>
          <div className="mt-10 rounded-[1.45rem] bg-[#f0eee8] p-5 sm:mt-12 sm:rounded-[1.8rem] sm:p-9"><h2 className="text-2xl font-extrabold text-primary">Planning an institutional session?</h2><div className="mt-5 grid gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-3">{["Share the audience and class/age group", "Choose the priority topic or concern", "Discuss preferred date, location and scale"].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-muted"><Check className="mt-1 h-4 w-4 shrink-0 text-secondary" />{item}</div>)}</div><Link href="/training#request" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-[12px] font-extrabold text-white sm:mt-7 sm:w-auto sm:px-6 sm:text-sm"><MessageCircle className="h-4 w-4" /> Request an institutional program</Link></div>
        </div>
      </section>
    </PageWrapper>
  );
}
