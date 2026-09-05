import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const contactRows = [
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phone, href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`, external: true },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Address", value: siteConfig.address.full, href: siteConfig.googleMapsUrl, external: true },
];

export const ContactCard = () => (
  <div className="premium-card p-5 sm:p-7">
    <div className="grid gap-4.5 sm:gap-5">
      {contactRows.map(({ icon: Icon, label, value, href, external }) => (
        <Link key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group flex items-start gap-3.5 sm:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/7 text-primary transition group-hover:bg-primary group-hover:text-white"><Icon className="h-4.5 w-4.5" /></span>
          <div className="min-w-0">
            <div className="text-[11px] font-extrabold uppercase tracking-[.12em] text-secondary">{label}</div>
            <div className="mt-1 break-words text-sm leading-6 text-foreground/78 transition group-hover:text-primary">{value}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export const WorkingHours = () => (
  <div className="premium-card p-5 sm:p-7">
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/7 text-primary"><Clock3 className="h-4.5 w-4.5" /></span>
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[.12em] text-secondary">Availability</p>
        <h3 className="mt-0.5 font-extrabold text-primary">Counselling hours</h3>
      </div>
    </div>
    <p className="mt-4 rounded-xl bg-[#f0eee8] px-3.5 py-3 text-xs font-semibold leading-5 text-muted">{siteConfig.workingHours.note}</p>
    <div className="mt-3 divide-y divide-primary/7 text-sm">
      <div className="flex items-start justify-between gap-3 py-3 text-[12px] sm:items-center sm:gap-4 sm:text-sm"><span className="text-muted">{siteConfig.workingHours.weekdays.days}</span><span className="font-bold text-primary">{siteConfig.workingHours.weekdays.hours}</span></div>
      <div className="flex items-start justify-between gap-3 py-3 text-[12px] sm:items-center sm:gap-4 sm:text-sm"><span className="text-muted">{siteConfig.workingHours.weekend.days}</span><span className="font-bold text-primary">{siteConfig.workingHours.weekend.hours}</span></div>
    </div>
  </div>
);

export const GoogleMapsCard = () => (
  <div className="premium-card overflow-hidden">
    <div className="grid lg:grid-cols-[.38fr_.62fr]">
      <div className="flex flex-col items-start justify-center p-6 text-left sm:p-9">
        <div className="eyebrow w-fit">Visit the centre</div>
        <h3 className="mt-5 text-2xl font-extrabold text-primary">Chetana in Atchutapuram</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{siteConfig.address.full}</p>
        <Link href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5">Open in Google Maps</Link>
      </div>
      <div className="min-h-[240px] overflow-hidden bg-[#e8ece8] sm:min-h-[320px]">
        <iframe src={siteConfig.googleMapsEmbedUrl} className="h-full min-h-[240px] w-full sm:min-h-[320px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chetana Psychological Counselling Centre location map" />
      </div>
    </div>
  </div>
);
