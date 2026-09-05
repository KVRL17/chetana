import Link from "next/link";
import { ArrowRight, Check, Compass, HeartHandshake, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

const focusAreas = [
  { label: "Student & career clarity", icon: Compass },
  { label: "Personal & emotional support", icon: Sparkles },
  { label: "Family & parent guidance", icon: HeartHandshake },
];

export const Hero = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(132deg,#f8f6f1_0%,#edf2ef_52%,#f3eadf_100%)]">
      <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -right-24 -top-14 h-80 w-80 rounded-full bg-accent/10 blur-3xl sm:-right-20 sm:-top-10 sm:h-[30rem] sm:w-[30rem]" />
      <div className="container-shell relative grid items-center gap-9 py-10 sm:gap-12 sm:py-14 lg:min-h-[calc(100vh-110px)] lg:grid-cols-[1.08fr_.92fr] lg:py-20">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <div className="eyebrow mb-5 sm:mb-6">
            <ShieldCheck className="h-3.5 w-3.5" />
            Professional guidance · Since 1996
          </div>
          <h1 className="display-title">
            Clarity for the mind. <span className="text-secondary">Confidence for life.</span>
          </h1>
          <p className="lead-copy mx-auto mt-5 max-w-2xl sm:mt-7 lg:mx-0">
            {siteConfig.heroSupportingLine}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">
            {focusAreas.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-2.5 rounded-[1.1rem] border border-primary/8 bg-white/72 px-3 py-3 text-left text-[12px] font-extrabold leading-4 text-foreground/80 shadow-[0_8px_24px_rgba(23,63,69,.035)] backdrop-blur sm:justify-start sm:rounded-2xl sm:bg-white/65 sm:px-4 sm:text-sm sm:font-bold sm:shadow-none ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.7rem] bg-primary/7 text-primary sm:h-9 sm:w-9 sm:rounded-xl">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-2.5 sm:mt-9 sm:flex sm:flex-wrap lg:justify-start">
            <Link href="/book-session" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(23,63,69,.22)] transition hover:-translate-y-0.5 hover:bg-[#11363b] sm:px-7">
              Book a counselling session <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-primary/10 bg-white/88 px-6 text-sm font-extrabold sm:bg-white/85 text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-bold text-muted sm:mt-8 sm:text-xs sm:font-semibold lg:justify-start">
            {["Telugu, English & Hindi", "In-person, phone & online", "Atchutapuram, Anakapalli"].map((item) => (
              <span key={item} className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-secondary" />{item}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[2.4rem] bg-white/30 blur-2xl sm:-inset-6 sm:rounded-[3rem]" />
          <div className="premium-card relative overflow-hidden p-5 sm:p-8">
            <div className="soft-grid absolute inset-0 opacity-65" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-secondary sm:text-xs">Chetana approach</p>
                  <h2 className="mt-2 text-[1.35rem] font-extrabold leading-[1.15] text-primary sm:text-3xl sm:leading-tight">A thoughtful space to understand, decide and move forward.</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-primary text-accent shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>

              <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
                {[
                  ["01", "Understand", "A respectful conversation about what is happening now."],
                  ["02", "Clarify", "Identify concerns, strengths, choices and practical priorities."],
                  ["03", "Move forward", "Build realistic next steps with continued guidance when useful."],
                ].map(([num, title, copy]) => (
                  <div key={num} className="grid grid-cols-[40px_1fr] gap-3 rounded-[1rem] border border-primary/8 bg-white/90 p-3.5 shadow-sm sm:grid-cols-[46px_1fr] sm:gap-4 sm:rounded-2xl sm:p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-[#edf3f1] text-[11px] font-black text-secondary sm:h-11 sm:w-11 sm:rounded-xl sm:text-xs">{num}</div>
                    <div>
                      <h3 className="text-sm font-extrabold text-primary sm:text-base">{title}</h3>
                      <p className="mt-0.5 text-[12px] leading-5 text-muted sm:mt-1 sm:text-sm sm:leading-6">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-4 rounded-[1rem] bg-primary px-4 py-3.5 text-left text-white sm:mt-6 sm:rounded-2xl sm:px-5 sm:py-4">
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[.12em] text-white/55 sm:text-[11px]">Counsellor</p>
                  <p className="mt-1 truncate text-xs font-extrabold sm:text-sm">{siteConfig.counsellorName}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-accent sm:text-xl">{siteConfig.counsellorExperience}</p>
                  <p className="text-[9px] text-white/55 sm:text-[11px]">professional experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
