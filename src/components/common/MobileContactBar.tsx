import Link from "next/link";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-2.5 bottom-[max(.65rem,env(safe-area-inset-bottom))] z-40 md:hidden">
      <div className="mx-auto max-w-md rounded-[1.35rem] border border-primary/10 bg-white/94 p-1.5 shadow-[0_20px_55px_rgba(23,63,69,.22)] backdrop-blur-xl">
        <div className="grid grid-cols-[.9fr_1.08fr_1.08fr] gap-1">
          <Link href={`tel:${siteConfig.phoneRaw}`} className="flex min-h-12 items-center justify-center gap-1.5 rounded-[1rem] px-2 text-[11px] font-extrabold text-primary transition active:bg-primary/5">
            <Phone className="h-4 w-4" /> Call
          </Link>
          <Link href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-1.5 rounded-[1rem] bg-[#eef7f0] px-2 text-[11px] font-extrabold text-[#287b49] transition active:bg-[#e5f2e8]">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Link>
          <Link href="/book-session" className="flex min-h-12 items-center justify-center gap-1.5 rounded-[1rem] bg-primary px-2 text-[11px] font-extrabold text-white shadow-[0_8px_22px_rgba(23,63,69,.18)] transition active:bg-[#11363b]">
            <CalendarDays className="h-4 w-4" /> Book
          </Link>
        </div>
      </div>
    </div>
  );
}
