import { MessageCircle, PhoneCall } from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqData } from "@/data/faqData";
import { siteConfig } from "@/config/site";

export default function FAQPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <PageHero eyebrow="Frequently asked questions" title="Practical answers before you book" description="Find information about counselling, who can attend, languages, session formats, appointments, location and workshops." aside={<div className="premium-card p-5 sm:p-6"><MessageCircle className="h-5 w-5 text-secondary" /><h2 className="mt-4 text-xl font-extrabold text-primary">Still have a question?</h2><p className="mt-2 text-sm leading-6 text-muted">You can speak to the centre directly for help choosing a service or session format.</p><a href={`tel:${siteConfig.phoneRaw}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary"><PhoneCall className="h-4 w-4" /> {siteConfig.phone}</a></div>} />
      <section className="section-space"><div className="container-shell"><div className="mx-auto max-w-4xl"><FAQAccordion items={faqData} /></div></div></section>
    </PageWrapper>
  );
}
