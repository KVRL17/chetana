import Link from "next/link";
import { ArrowUpRight, Baby, Brain, Compass, HeartHandshake, Sparkles, TrendingUp, UserRound, UsersRound } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [UserRound, Sparkles, Compass, UsersRound, HeartHandshake, Baby, Brain, TrendingUp];

export const ServicesGrid = () => (
  <section className="section-space" id="services">
    <div className="container-shell">
      <SectionHeading
        eyebrow="Counselling services"
        title="Support designed around real-life concerns"
        description="Choose the area that best matches what you are facing. Every session is tailored to the individual, student, parent or family—not a one-size-fits-all template."
      />

      <div className="mt-10 grid gap-3.5 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
        {servicesData.map((service, index) => {
          const Icon = icons[index] || Sparkles;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="premium-card premium-card-hover group flex min-h-0 flex-col p-5 md:min-h-[285px] md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-primary/7 text-primary transition group-hover:bg-primary group-hover:text-white md:h-12 md:w-12 md:rounded-2xl">
                  <Icon className="h-5 w-5 md:h-5.5 md:w-5.5" />
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black tracking-[.12em] text-primary/25 md:hidden">{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight className="h-4.5 w-4.5 text-muted/55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </div>
              <h3 className="mt-4 text-[1.08rem] font-extrabold leading-tight text-primary md:mt-6 md:text-xl">{service.title}</h3>
              <p className="mt-2.5 text-[13px] leading-5.5 text-muted md:mt-3 md:text-sm md:leading-6">{service.shortDescription}</p>
              <div className="mt-4 border-t border-primary/7 pt-3.5 text-[10px] font-extrabold uppercase tracking-[.1em] text-secondary md:mt-auto md:border-0 md:pt-5 md:text-xs md:tracking-[.09em]">Explore service</div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);
