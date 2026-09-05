import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-primary text-white/80 md:block">
      <div className="container-shell flex min-h-9 items-center justify-between gap-6 text-[12px] font-medium">
        <div className="flex items-center gap-5">
          <Link href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 transition hover:text-white">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.phone}
          </Link>
          <Link href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.locationTarget.primary}, {siteConfig.locationTarget.district}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
          {siteConfig.workingHours.weekdays.days} · {siteConfig.workingHours.weekdays.hours}
        </div>
      </div>
    </div>
  );
}
