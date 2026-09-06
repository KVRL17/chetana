import Link from "next/link";
import {
  ArrowUpRight,
  Baby,
  Brain,
  Check,
  Compass,
  HeartHandshake,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UserRound,
  UsersRound,
} from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { servicesData } from "@/data/servicesData";
import {
  additionalCounsellingServices,
  brochurePrograms,
  brochureServiceHighlights,
  wellnessDimensions,
} from "@/data/brochureContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Counselling Services in Atchutapuram & Anakapalli",
  description: "Explore individual, student, career, family, parent, child and stress counselling services in Atchutapuram, Anakapalli, with online and in-person options.",
  path: "/services",
});

const icons = [UserRound, Sparkles, Compass, UsersRound, HeartHandshake, Baby, Brain, TrendingUp];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Counselling Services" }]} />
      <PageHero
        eyebrow="Counselling services"
        title="Professional support for the concerns that shape everyday life"
        description="From student pressure and career choices to personal stress, relationships, family communication and emotional wellbeing, Chetana offers focused guidance with a practical, respectful approach."
        aside={
          <div className="premium-card p-5 sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-secondary">Not sure where to start?</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-primary">Choose the concern that feels closest.</h2>
            <p className="mt-2.5 text-[13px] leading-5.5 text-muted sm:mt-3 sm:text-sm sm:leading-6">You do not need to diagnose the problem yourself. A short initial conversation can help identify the most suitable service or programme.</p>
            <Link href="/book-session" className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-white">Request guidance</Link>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Explore support" title="Core counselling and guidance areas" description="Each service page explains the concerns we can discuss, who may benefit and how to request a session." />
          <div className="mt-10 grid gap-3.5 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => {
              const Icon = icons[index] || Sparkles;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="premium-card premium-card-hover group flex flex-col p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/7 text-primary"><Icon className="h-5.5 w-5.5" /></span>
                    <ArrowUpRight className="h-4.5 w-4.5 text-muted/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h2 className="mt-4 text-[1.08rem] font-extrabold text-primary sm:mt-5 sm:text-xl">{service.title}</h2>
                  <p className="mt-2.5 text-[13px] leading-5.5 text-muted sm:mt-3 sm:text-sm sm:leading-6">{service.shortDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {service.benefits.slice(0, 3).map((benefit) => <span key={benefit} className="rounded-full bg-[#f0f3f0] px-3 py-1.5 text-[11px] font-bold text-secondary">{benefit}</span>)}
                  </div>
                  <div className="mt-4 border-t border-primary/7 pt-3.5 text-[10px] font-extrabold uppercase tracking-[.09em] text-primary sm:mt-auto sm:border-0 sm:pt-6 sm:text-xs">View service details</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f0eee8]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Service focus"
            title="Support described in the Chetana service profile"
            description="These focus areas are included alongside the core service pages so visitors can quickly understand the kinds of concerns supported."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
            {brochureServiceHighlights.map((item) => (
              <div key={item.title} className="premium-card p-5 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/7 text-primary"><Stethoscope className="h-5 w-5" /></span>
                  <div>
                    <h3 className="text-lg font-extrabold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.4rem] border border-primary/8 bg-white p-5 sm:mt-6 sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-secondary">Additional counselling & development support</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {additionalCounsellingServices.map((service) => (
                <div key={service} className="flex items-start gap-2.5 rounded-2xl bg-[#f8f7f3] p-3.5 text-sm font-semibold leading-6 text-foreground/78">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="rounded-[1.55rem] bg-primary p-5 text-white sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.12em] text-accent">Whole-person wellbeing</p>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">8 dimensions of wellness</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">Chetana’s wellness perspective recognises that wellbeing can involve several connected areas of everyday life.</p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {wellnessDimensions.map((dimension, index) => (
                  <div key={dimension} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 text-center">
                    <div className="text-[10px] font-black text-accent">0{index + 1}</div>
                    <div className="mt-1 text-xs font-extrabold sm:text-sm">{dimension}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our programmes"
            title="Counselling, therapeutic, educational and workplace programmes"
            description="Chetana’s programme profile includes support for individuals, children, families, educators, communities and workplaces. Programme availability can be discussed before booking."
          />
          <div className="mt-10 grid gap-2.5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {brochurePrograms.map((program, index) => (
              <div key={program} className="flex items-start gap-3 rounded-[1.05rem] border border-primary/8 bg-white p-4 sm:rounded-2xl sm:p-4.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-[10px] font-black text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="pt-1 text-sm font-semibold leading-6 text-foreground/78">{program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-shell grid gap-3 sm:gap-5 md:grid-cols-3">
          {[
            ["One-to-one attention", "A focused conversation around your concerns, context, strengths and priorities."],
            ["Language choice", "Sessions can be requested in Telugu, English or Hindi for greater comfort and clarity."],
            ["Flexible session formats", "Choose in-person counselling, a phone consultation or an online session by prior appointment."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[1.15rem] border border-primary/8 bg-[#f0eee8] p-4.5 sm:rounded-2xl sm:p-6">
              <h3 className="font-extrabold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <AppointmentCTA />
    </PageWrapper>
  );
}
