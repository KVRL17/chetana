"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`;

  return (
    <header className="sticky top-0 z-[70] border-b border-primary/8 bg-background/92 backdrop-blur-xl">
      <div className="container-shell flex h-[68px] items-center justify-between gap-3 sm:h-[74px] sm:gap-5">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Chetana home" onClick={() => setMobileOpen(false)}>
          <BrandMark className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
          <div className="min-w-0 leading-tight">
            <div className="text-[17px] font-extrabold tracking-[-0.035em] text-primary sm:text-[18px]">Chetana</div>
            <div className="max-w-[180px] truncate text-[8.5px] font-bold uppercase tracking-[0.115em] text-muted sm:max-w-none sm:text-[10px]">
              Psychological Counselling Centre
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[13px] font-bold transition",
                  active ? "bg-primary/7 text-primary" : "text-foreground/75 hover:bg-white hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book-session"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(23,63,69,.18)] transition hover:-translate-y-0.5 hover:bg-[#11363b] sm:inline-flex"
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Book Session
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border text-primary transition lg:hidden sm:h-11 sm:w-11",
              mobileOpen ? "border-primary bg-primary text-white" : "border-primary/10 bg-white shadow-sm"
            )}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-full h-[calc(100dvh-68px)] overflow-y-auto border-t border-primary/8 bg-[linear-gradient(160deg,rgba(248,246,241,.99),rgba(237,242,239,.99))] lg:hidden sm:h-[calc(100dvh-74px)]">
          <div className="container-shell py-5 sm:py-7">
            <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-primary/8 bg-white/75 px-4 py-3.5 shadow-sm">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[.14em] text-secondary">Chetana</p>
                <p className="mt-0.5 truncate text-sm font-extrabold text-primary">Counselling & Human Development</p>
              </div>
              <span className="shrink-0 rounded-full bg-primary/7 px-3 py-1.5 text-[10px] font-extrabold text-primary">Since 1996</span>
            </div>

            <nav className="grid gap-2" aria-label="Mobile navigation">
              {siteConfig.navigation.map((item, index) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "group flex min-h-12 items-center justify-between rounded-2xl border px-4 py-3 text-sm font-extrabold transition",
                      active
                        ? "border-primary bg-primary text-white shadow-[0_12px_30px_rgba(23,63,69,.14)]"
                        : "border-primary/7 bg-white/80 text-foreground hover:border-primary/15 hover:bg-white"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn("text-[10px] font-black tracking-[.08em]", active ? "text-accent" : "text-secondary/70")}>{String(index + 1).padStart(2, "0")}</span>
                      {item.label}
                    </span>
                    <span className={cn("h-1.5 w-1.5 rounded-full", active ? "bg-accent" : "bg-primary/15")} />
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/book-session"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-accent px-5 text-sm font-black text-primary shadow-[0_14px_34px_rgba(197,154,97,.22)] sm:hidden"
            >
              <CalendarDays className="h-4 w-4" /> Book a counselling session
            </Link>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link href={`tel:${siteConfig.phoneRaw}`} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-primary/8 bg-white text-xs font-extrabold text-primary">
                <Phone className="h-4 w-4" /> Call centre
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#287b49]/10 bg-[#eef7f0] text-xs font-extrabold text-[#287b49]">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Link>
            </div>

            <Link href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 py-2 text-center text-[11px] font-bold text-muted">
              <MapPin className="h-3.5 w-3.5 text-secondary" /> {siteConfig.locationTarget.primary}, {siteConfig.locationTarget.district}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
