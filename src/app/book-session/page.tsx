import { CalendarDays, Languages, MonitorSmartphone, ShieldCheck } from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { ContactCard, WorkingHours } from "@/components/common/ContactCard";
import type { AppointmentFormValues } from "@/schemas/appointmentSchema";

const allowedServices = new Set<AppointmentFormValues["counsellingFor"]>([
  "individual-counselling", "student-counselling", "career-counselling", "family-counselling", "parent-guidance", "child-adolescent-guidance", "stress-emotional-wellbeing", "personal-development",
]);

interface BookSessionPageProps { searchParams: Promise<{ service?: string }> }

export default async function BookSessionPage({ searchParams }: BookSessionPageProps) {
  const { service } = await searchParams;
  const initialService = allowedServices.has(service as AppointmentFormValues["counsellingFor"]) ? service as AppointmentFormValues["counsellingFor"] : "individual-counselling";

  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Book Session" }]} />
      <PageHero eyebrow="Appointment request" title="Book a counselling session" description="Share a few practical details and the concern you would like support with. The centre will use your request to help confirm a suitable session." aside={<div className="premium-card p-5 sm:p-6"><div className="grid gap-4">{[{icon:Languages,title:"Language choice",copy:"Telugu · English · Hindi"},{icon:MonitorSmartphone,title:"Session formats",copy:"In-person · Phone · Online"},{icon:ShieldCheck,title:"Respectful handling",copy:"Your enquiry is used to respond to your request"}].map(({icon:Icon,title,copy}) => <div key={title} className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/7 text-primary"><Icon className="h-4.5 w-4.5" /></span><div><div className="text-sm font-extrabold text-primary">{title}</div><div className="mt-1 text-xs leading-5 text-muted">{copy}</div></div></div>)}</div></div>} />

      <section className="section-space">
        <div className="container-shell grid gap-6 sm:gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
          <div className="premium-card form-shell p-5 sm:p-8 lg:p-9">
            <div className="mb-6 flex items-center gap-3 border-b border-primary/8 pb-5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white"><CalendarDays className="h-5 w-5" /></span><div><h2 className="text-[1.08rem] font-extrabold text-primary sm:text-xl">Session request form</h2><p className="mt-1 text-xs text-muted">Fields marked with * are required.</p></div></div>
            <AppointmentForm initialService={initialService} />
          </div>
          <aside className="space-y-5 lg:sticky lg:top-28"><ContactCard /><WorkingHours /></aside>
        </div>
      </section>
    </PageWrapper>
  );
}
