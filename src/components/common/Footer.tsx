import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandMark } from "@/components/ui/BrandMark";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`;

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full border border-white/6" />
      <div className="container-shell relative pb-28 pt-11 sm:pt-18 md:py-18">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 border-b border-white/10 pb-9 sm:gap-x-8 sm:gap-y-12 sm:pb-12 lg:grid-cols-[1.35fr_.8fr_.8fr_1.2fr]">
          <div className="col-span-2 mx-auto max-w-sm text-center lg:col-span-1 lg:mx-0 lg:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 lg:justify-start">
              <BrandMark className="bg-white text-primary shadow-none" />
              <div className="text-left">
                <div className="text-xl font-extrabold">Chetana</div>
                <div className="text-[9px] font-bold uppercase tracking-[.13em] text-white/55 sm:text-[10px] sm:tracking-[.14em]">Counselling & Human Development</div>
              </div>
            </div>
            <p className="text-[13px] leading-6.5 text-white/65 sm:text-sm sm:leading-7">{siteConfig.brandMessage}</p>
            <div className="mt-5 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-bold text-white/75 sm:mt-6 sm:text-xs">
              Telugu · English · Hindi
            </div>
          </div>

          <div>
            <h3 className="mb-3.5 text-[13px] font-extrabold text-white sm:mb-4 sm:text-sm">Explore</h3>
            <ul className="space-y-2.5 text-[12px] text-white/62 sm:space-y-3 sm:text-sm">
              {siteConfig.footerNav.quickLinks.map((item) => (
                <li key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>
              ))}
              <li><Link href="/blog" className="transition hover:text-white">Articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3.5 text-[13px] font-extrabold text-white sm:mb-4 sm:text-sm">Services</h3>
            <ul className="space-y-2.5 text-[12px] text-white/62 sm:space-y-3 sm:text-sm">
              {siteConfig.footerNav.counselling.slice(0, 5).map((item) => (
                <li key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4.5 sm:p-5 lg:col-span-1 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h3 className="mb-4 text-sm font-extrabold text-white">Visit or connect</h3>
            <div className="space-y-3.5 text-[12px] text-white/65 sm:space-y-4 sm:text-sm">
              <Link href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {siteConfig.phone}
              </Link>
              <Link href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 break-all transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {siteConfig.email}
              </Link>
              <Link href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {siteConfig.address.full}
              </Link>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.workingHours.weekdays.days}: {siteConfig.workingHours.weekdays.hours}<br />{siteConfig.workingHours.weekend.days}: {siteConfig.workingHours.weekend.hours}<br /><span className="text-white/45">By prior appointment only</span></span>
              </div>
            </div>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-primary transition hover:-translate-y-0.5 sm:mt-6">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-6 text-center text-[10.5px] text-white/45 sm:gap-5 sm:pt-7 sm:text-xs lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
            <p className="mt-1 text-white/35">An initiative of “{siteConfig.initiativeName}”.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-5 lg:justify-end">
            {siteConfig.footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
