import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
import { siteConfig } from "@/config/site";

export const AboutCounsellor = () => (
  <section className="section-space bg-primary text-white" id="counsellor">
    <div className="container-shell grid items-center gap-9 sm:gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-5 rounded-[2.2rem] border border-white/5 sm:-inset-8 sm:rounded-[3rem]" />
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-7">
          <div className="soft-grid absolute inset-0 opacity-10" />
          <div className="relative">
            <div className="flex items-center gap-4 sm:block">
              <Image src="/suri-babu-saragadam.jpeg" alt={`${siteConfig.counsellorName}, counselling psychologist`} width={112} height={112} className="h-18 w-18 shrink-0 rounded-full border-4 border-white/10 bg-white object-cover shadow-xl sm:h-24 sm:w-24" />
              <div className="min-w-0 sm:mt-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-accent sm:text-xs">Your counsellor</p>
                <h2 className="mt-1.5 text-xl font-extrabold leading-tight sm:mt-2 sm:text-3xl">{siteConfig.counsellorName}</h2>
                <p className="mt-1.5 text-xs leading-5 text-white/65 sm:mt-2 sm:text-sm sm:leading-6">{siteConfig.counsellorPosition}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
              <div className="rounded-[1rem] border border-white/10 bg-white/5 p-3.5 sm:rounded-2xl sm:p-4">
                <div className="text-xl font-black text-accent sm:text-2xl">{siteConfig.counsellorExperience}</div>
                <div className="mt-1 text-[10px] text-white/55 sm:text-xs">Experience</div>
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-white/5 p-3.5 sm:rounded-2xl sm:p-4">
                <div className="text-xl font-black text-accent sm:text-2xl">3</div>
                <div className="mt-1 text-[10px] text-white/55 sm:text-xs">Session formats</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left">
        <div className="eyebrow border-white/10 bg-white/5 text-accent">Experience with perspective</div>
        <h2 className="mt-5 text-[clamp(2.15rem,10vw,3rem)] font-[760] leading-[1.045] text-white sm:mt-6 lg:text-[clamp(2.2rem,4.5vw,4.2rem)]">Guidance grounded in decades of counselling, education and human development.</h2>
        <p className="mt-5 max-w-2xl text-[14px] leading-7 text-white/68 sm:mt-6 sm:text-base sm:leading-8">
          With more than {siteConfig.counsellorExperience} of professional experience, {siteConfig.counsellorName} supports students, individuals, parents and families with a calm, practical and respectful approach. His work also includes career guidance and development programs for educational institutions and organizations.
        </p>

        <div className="mt-7 grid gap-2.5 text-left sm:mt-8 sm:grid-cols-3 sm:gap-3">
          {[
            { icon: ShieldCheck, title: "Respectful", copy: "A non-judgmental approach" },
            { icon: Languages, title: "Multilingual", copy: siteConfig.languages.join(" · ") },
            { icon: UsersRound, title: "Broad experience", copy: "Students · Adults · Families" },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 p-3.5 sm:block sm:rounded-2xl sm:p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/7 text-accent sm:h-auto sm:w-auto sm:bg-transparent">
                <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </span>
              <div>
                <h3 className="text-sm font-extrabold sm:mt-3">{title}</h3>
                <p className="mt-0.5 text-[11px] leading-5 text-white/52 sm:mt-1 sm:text-xs">{copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-2.5 sm:mt-8 sm:flex sm:flex-row">
          <Link href="/about/counsellor" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-primary transition hover:-translate-y-0.5">
            About the counsellor <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/book-session" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-extrabold text-white transition hover:bg-white/8">
            <MessageCircle className="h-4 w-4" /> Request a session
          </Link>
        </div>
      </div>
    </div>
  </section>
);
