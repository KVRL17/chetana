import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  GraduationCap,
  Languages,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { siteConfig } from "@/config/site";
import { counsellorProfile } from "@/data/brochureContent";

const areas = [
  "Individual Counselling",
  "Student & Educational Counselling",
  "Career Guidance",
  "Family Counselling",
  "Parent Guidance",
  "Child & Adolescent Guidance",
  "Group Counselling",
  "Stress & Emotional Wellbeing",
  "Personal Development",
];

export default function CounsellorPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Counsellor" }]} />
      <PageHero
        eyebrow="Counsellor profile"
        title={siteConfig.counsellorName}
        description={siteConfig.counsellorPosition}
        aside={
          <div className="rounded-[1.8rem] bg-primary p-5 text-white shadow-2xl sm:p-7">
            <div className="flex items-center gap-4">
              <Image
                src="/suri-babu-saragadam.jpeg"
                alt={`${siteConfig.counsellorName}, counselling psychologist`}
                width={132}
                height={132}
                className="h-24 w-24 rounded-full border-4 border-white/15 bg-white object-cover sm:h-32 sm:w-32"
                priority
              />
              <div>
                <div className="text-3xl font-black text-accent sm:text-4xl">{siteConfig.counsellorExperience}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-white/50 sm:text-xs">Professional experience</div>
              </div>
            </div>
            <div className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-white/65">
              Counselling · Education · Career Guidance · Training · Human Development
            </div>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell grid gap-8 sm:gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-start">
          <div>
            <div className="text-left">
              <div className="eyebrow mb-5">Professional journey</div>
              <h2 className="section-title">An educator, academic leader, trainer and counselling psychologist</h2>
            </div>
            <p className="mt-6 text-[14px] leading-7 text-muted sm:mt-7 sm:text-base sm:leading-8">
              {counsellorProfile.biography}
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {[
                { icon: Award, title: "30+ years of experience", copy: "Serving students, parents, teachers and institutions across education, counselling and development." },
                { icon: GraduationCap, title: "Academic foundation", copy: "Master’s in English, B.Ed. and Master’s in Psychology (School Psychology) from S.V. University, Tirupati." },
                { icon: BookOpenCheck, title: "Career guidance qualification", copy: "DCGC from the Regional Institute of Education, NCERT, Mysore, alongside career guidance and counselling practice." },
                { icon: BriefcaseBusiness, title: "Broad leadership experience", copy: "Experience as teacher, lecturer, assistant professor, principal, dean, trainer and psychological counsellor." },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-[1.15rem] border border-primary/8 bg-white p-4.5 sm:rounded-2xl sm:p-5">
                  <Icon className="h-5 w-5 text-secondary" />
                  <h3 className="mt-4 font-extrabold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="premium-card p-5 sm:p-7 lg:sticky lg:top-28">
              <div className="flex items-center gap-3"><UsersRound className="h-5 w-5 text-secondary" /><h2 className="text-xl font-extrabold text-primary">Areas of practice</h2></div>
              <div className="mt-5 divide-y divide-primary/7">
                {areas.map((area) => <div key={area} className="flex items-center gap-3 py-3 text-sm font-semibold text-muted"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{area}</div>)}
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#f0eee8] p-4">
                <Languages className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div><div className="text-sm font-extrabold text-primary">Session languages</div><div className="mt-1 text-xs leading-5 text-muted">{siteConfig.languages.join(" · ")}</div></div>
              </div>
              <Link href="/book-session" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-extrabold text-white"><MessageCircle className="h-4 w-4" /> Request a session</Link>
              <Link href="/services" className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/10 px-5 text-sm font-extrabold text-primary"><BookOpenCheck className="h-4 w-4" /> View services</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-space bg-[#f0eee8]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Professional counselling"
            title="What counselling and professional competence mean at Chetana"
            description="Clear expectations around counselling, professional preparation and client-centred support."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2">
            <div className="premium-card p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/7 text-primary"><BookOpenCheck className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-extrabold text-primary">Counselling</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{counsellorProfile.counsellingDefinition}</p>
              <h4 className="mt-7 text-sm font-extrabold uppercase tracking-[.1em] text-secondary">Counsellor</h4>
              <div className="mt-3 space-y-3">
                {counsellorProfile.counsellorDefinition.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.55rem] bg-primary p-5 text-white sm:p-7">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-xl font-extrabold">Competencies of a counsellor</h3>
              <div className="mt-5 space-y-4">
                {counsellorProfile.competencies.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/72">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-white/60">
                {siteConfig.counsellorName} brings experience across education, school psychology, counselling, career guidance, training and institutional leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </PageWrapper>
  );
}
