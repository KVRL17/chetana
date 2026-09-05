import { CalendarCheck2, MessageSquareText, Route, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { no: "01", icon: MessageSquareText, title: "Reach out", copy: "Call, WhatsApp or send the booking form with a short note about the support you are looking for." },
  { no: "02", icon: CalendarCheck2, title: "Choose a suitable session", copy: "Confirm the service, preferred language and whether you would like an in-person, phone or online session." },
  { no: "03", icon: Sparkles, title: "Talk in a respectful setting", copy: "Use the session to explore the concern, context, strengths and possible ways forward at a comfortable pace." },
  { no: "04", icon: Route, title: "Plan next steps", copy: "Leave with clearer priorities and practical next steps. Follow-up can be considered depending on your needs." },
];

export const HowWorksSection = () => (
  <section className="section-space" id="how-it-works">
    <div className="container-shell">
      <SectionHeading eyebrow="What to expect" title="A simple, thoughtful counselling process" description="You do not need to have everything figured out before you contact us. The first conversation is simply a place to begin." />
      <div className="relative mt-10 grid gap-3.5 before:absolute before:bottom-8 before:left-[23px] before:top-7 before:w-px before:bg-primary/10 sm:mt-14 sm:gap-5 lg:grid-cols-4 lg:before:left-[10%] lg:before:right-[10%] lg:before:top-7 lg:before:h-px lg:before:w-auto">
        {steps.map(({ no, icon: Icon, title, copy }) => (
          <div key={no} className="relative z-[1] grid grid-cols-[47px_1fr] items-start gap-3.5 lg:block lg:rounded-[1.5rem] lg:border lg:border-primary/8 lg:bg-white lg:p-6 lg:shadow-[0_16px_50px_rgba(23,63,69,.05)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-primary text-white shadow-[0_8px_24px_rgba(23,63,69,.16)] sm:h-12 sm:w-12 lg:relative lg:z-10 lg:h-14 lg:w-14 lg:rounded-2xl lg:shadow-lg">
              <Icon className="h-4.5 w-4.5 lg:h-5 lg:w-5" />
            </span>
            <div className="rounded-[1.15rem] border border-primary/8 bg-white p-4 shadow-[0_10px_34px_rgba(23,63,69,.045)] lg:contents">
              <span className="text-[9px] font-black tracking-[.13em] text-accent lg:absolute lg:right-6 lg:top-8 lg:text-xs">STEP {no}</span>
              <h3 className="mt-1.5 text-[15px] font-extrabold leading-tight text-primary lg:mt-6 lg:text-lg">{title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-5.5 text-muted lg:mt-2 lg:text-sm lg:leading-6">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
