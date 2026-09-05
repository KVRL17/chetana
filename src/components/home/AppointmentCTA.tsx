import Link from "next/link";
import { CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const AppointmentCTA = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.bookSession)}`;
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[1.55rem] bg-primary px-5 py-8 text-white shadow-[0_24px_70px_rgba(23,63,69,.18)] sm:rounded-[2rem] sm:px-10 sm:py-10 lg:px-14 lg:py-14 lg:shadow-[0_30px_90px_rgba(23,63,69,.2)]">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/8" />
          <div className="absolute -bottom-24 right-28 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid gap-7 sm:gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
            <div className="text-left">
              <div className="text-[10px] font-extrabold uppercase tracking-[.14em] text-accent sm:text-xs">{siteConfig.ctaTagline}</div>
              <h2 className="mt-3 max-w-3xl text-[clamp(2rem,9vw,2.65rem)] font-[760] leading-[1.045] sm:mt-4 lg:text-[clamp(2.2rem,4vw,3.8rem)] lg:leading-[1.04]">You do not have to solve everything before asking for guidance.</h2>
              <p className="mt-4 max-w-2xl text-[13px] leading-6.5 text-white/65 sm:mt-5 sm:text-base sm:leading-7">Tell us what you would like support with. We can help you choose the right service and a suitable session format.</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
              <Link href="/book-session" className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-4 text-[12px] font-extrabold text-primary transition hover:-translate-y-0.5 sm:min-h-13 sm:px-5 sm:text-sm lg:col-span-1 xl:col-span-1"><CalendarDays className="h-4 w-4" /> Book a session</Link>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#277d4b] px-4 text-[12px] font-extrabold text-white transition hover:-translate-y-0.5 sm:min-h-13 sm:px-5 sm:text-sm lg:col-span-1 xl:col-span-1"><MessageCircle className="h-4 w-4" /> WhatsApp</Link>
              <Link href={`tel:${siteConfig.phoneRaw}`} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-white/15 px-3 text-[10.5px] font-bold text-white/85 transition hover:bg-white/8 sm:min-h-12 sm:gap-2 sm:px-5 sm:text-sm"><Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="truncate">{siteConfig.phone}</span></Link>
              <Link href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-white/15 px-3 text-[10.5px] font-bold text-white/85 transition hover:bg-white/8 sm:min-h-12 sm:gap-2 sm:px-5 sm:text-sm"><MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Directions</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
