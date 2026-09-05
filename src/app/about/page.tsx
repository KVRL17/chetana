import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  HeartHandshake,
  Languages,
  MapPinned,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { siteConfig } from "@/config/site";
import { aboutChetana } from "@/data/brochureContent";
import logo from "../../../logo-green.png";

export default function AboutPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "About" }]} />
      <PageHero
        eyebrow="About Chetana"
        title="Counselling, guidance and human development with a long-term perspective"
        description="Chetana Psychological Counselling Centre & Human Resource Development Training Centre supports individuals, families, students, educators and institutions through counselling, guidance and development programmes."
        aside={
          <div className="grid grid-cols-[92px_1fr] items-center gap-4 rounded-[1.5rem] border border-primary/8 bg-white p-4 shadow-sm sm:grid-cols-[112px_1fr] sm:p-5">
            <Image
              src={logo}
              alt="Chetana Psychological Counselling Centre and HRD Training Centre logo"
              width={112}
              height={112}
              className="h-[92px] w-[92px] rounded-full object-cover sm:h-28 sm:w-28"
              priority
            />
            <div>
              <div className="text-3xl font-black text-primary">30+</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[.1em] text-secondary">Years of experience</div>
              <p className="mt-3 text-xs leading-5 text-muted">Counselling · Education · Career Guidance · Training · Human Development</p>
            </div>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell grid gap-7 sm:gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="text-center lg:text-left">
            <div className="eyebrow mb-5">About us</div>
            <h2 className="section-title">Comprehensive support in a safe, inclusive environment</h2>
          </div>
          <div className="rounded-[1.25rem] border border-primary/7 bg-white/65 p-5 text-left text-[14px] leading-7 text-muted shadow-sm sm:rounded-[1.6rem] sm:p-7 sm:text-base sm:leading-8">
            <p>{aboutChetana.about}</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f0eee8]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our foundation"
            title="Mission, vision and philosophy"
            description="The principles behind Chetana’s counselling, mental-health support and human-development work."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
            {[
              { label: "Mission", icon: HeartHandshake, copy: aboutChetana.mission },
              { label: "Vision", icon: Sparkles, copy: aboutChetana.vision },
              { label: "Philosophy", icon: ShieldCheck, copy: aboutChetana.philosophy },
            ].map(({ label, icon: Icon, copy }) => (
              <div key={label} className="premium-card p-5 sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/7 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-primary">{label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our principles"
            title="What you can expect from the experience"
            description="Respect, privacy, practical clarity and a growth-oriented approach remain central to how support is offered."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HeartHandshake, title: "Respect first", copy: "A non-judgmental conversation that gives space to the person and the situation." },
              { icon: ShieldCheck, title: "Privacy & dignity", copy: "Personal information and counselling conversations are treated with care and discretion." },
              { icon: Sparkles, title: "Practical clarity", copy: "Focus on understanding choices, priorities and realistic next steps rather than vague advice." },
              { icon: BookOpenCheck, title: "Growth-oriented", copy: "Support can include communication, confidence, decision-making and personal development." },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="premium-card p-5 sm:p-6">
                <Icon className="h-5.5 w-5.5 text-secondary" />
                <h3 className="mt-5 text-lg font-extrabold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-4 sm:gap-6 lg:grid-cols-3">
          <div className="rounded-[1.45rem] bg-primary p-6 text-white sm:rounded-[1.7rem] sm:p-9 lg:col-span-2">
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-accent">Meet the counsellor</p>
            <h2 className="mt-4 text-3xl font-extrabold">{siteConfig.counsellorName}</h2>
            <p className="mt-2 text-sm text-white/65">{siteConfig.counsellorPosition}</p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/67">
              More than {siteConfig.counsellorExperience} of work across counselling, education, career guidance, training and human development contributes to a broad perspective on the concerns students, families and adults bring to sessions.
            </p>
            <Link href="/about/counsellor" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-primary">
              Counsellor profile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="premium-card p-5 sm:p-7">
            <div className="space-y-5">
              <div className="flex gap-3"><Languages className="h-5 w-5 text-secondary" /><div><h3 className="text-sm font-extrabold text-primary">Languages</h3><p className="mt-1 text-sm text-muted">{siteConfig.languages.join(", ")}</p></div></div>
              <div className="flex gap-3"><MapPinned className="h-5 w-5 text-secondary" /><div><h3 className="text-sm font-extrabold text-primary">Location</h3><p className="mt-1 text-sm leading-6 text-muted">{siteConfig.locationTarget.primary}, {siteConfig.locationTarget.district}</p></div></div>
              <div className="flex gap-3"><UsersRound className="h-5 w-5 text-secondary" /><div><h3 className="text-sm font-extrabold text-primary">Who we support</h3><p className="mt-1 text-sm leading-6 text-muted">Students, individuals, parents, families, educators and organizations.</p></div></div>
            </div>
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </PageWrapper>
  );
}
