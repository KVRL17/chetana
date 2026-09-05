import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { ContactCard, GoogleMapsCard, WorkingHours } from "@/components/common/ContactCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`;
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <PageHero eyebrow="Contact Chetana" title="Reach out in the way that feels easiest" description="Call, WhatsApp, email or send an enquiry through the website. You can also visit the centre in Atchutapuram, Anakapalli District." aside={<div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-1"><Link href={`tel:${siteConfig.phoneRaw}`} className="rounded-[1.2rem] bg-primary p-4 sm:rounded-[1.4rem] sm:p-5 text-white transition hover:-translate-y-0.5"><Phone className="h-5 w-5 text-accent" /><div className="mt-4 text-xs font-bold uppercase tracking-[.12em] text-white/50">Call directly</div><div className="mt-1 text-[12px] font-extrabold sm:text-base">{siteConfig.phone}</div></Link><Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-card p-4 transition sm:p-5 hover:-translate-y-0.5"><MessageCircle className="h-5 w-5 text-secondary" /><div className="mt-4 text-xs font-bold uppercase tracking-[.12em] text-muted">Message us</div><div className="mt-1 font-extrabold text-primary">WhatsApp</div></Link></div>} />

      <section className="section-space">
        <div className="container-shell grid gap-6 sm:gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <aside className="space-y-5"><ContactCard /><WorkingHours /></aside>
          <div className="premium-card form-shell p-5 sm:p-8"><div className="mb-7"><div className="eyebrow mb-4">General enquiry</div><h2 className="text-2xl font-extrabold text-primary">Send a message</h2><p className="mt-2 text-sm leading-6 text-muted">For counselling, training, location or appointment questions, share your details below.</p></div><ContactForm /></div>
        </div>
        <div className="mt-7 sm:mt-10"><GoogleMapsCard /></div>
      </section>
    </PageWrapper>
  );
}
