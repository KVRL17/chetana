import { Clock3, Languages, MapPinned, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const items = [
  { icon: ShieldCheck, title: "30+ years", copy: "Professional experience" },
  { icon: Languages, title: "3 languages", copy: siteConfig.languages.join(" · ") },
  { icon: Clock3, title: "Flexible access", copy: "In-person · Phone · Online" },
  { icon: MapPinned, title: "Local support", copy: "Atchutapuram · Anakapalli" },
];

export const TrustStrip = () => (
  <section className="border-y border-primary/8 bg-white/78">
    <div className="container-shell grid grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, copy }, index) => (
        <div
          key={title}
          className={`flex min-h-[112px] flex-col justify-center px-3 py-4 ${index % 2 === 0 ? "border-r border-primary/8" : ""} ${index < 2 ? "border-b border-primary/8" : ""} sm:min-h-0 sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:px-6 sm:py-5 lg:border-b-0 ${index < 3 ? "lg:border-r" : "lg:border-r-0"}`}
        >
          <div className="mb-2.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/6 text-secondary sm:mb-0 sm:h-10 sm:w-10">
            <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </div>
          <div>
            <div className="text-[13px] font-extrabold text-primary sm:text-sm">{title}</div>
            <div className="mt-0.5 text-[10.5px] leading-4 text-muted sm:text-xs">{copy}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
