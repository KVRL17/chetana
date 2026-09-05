import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqData } from "@/data/faqData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const FAQPreview = () => (
  <section className="section-space" id="faq">
    <div className="container-shell">
      <SectionHeading eyebrow="Common questions" title="A few things you may want to know first" description="If your question is not covered here, contact the centre directly and we will help you with the practical details." />
      <div className="mx-auto mt-10 max-w-4xl">
        <FAQAccordion items={faqData.slice(0, 6)} />
        <div className="mt-7 text-center">
          <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-extrabold text-primary transition hover:text-secondary">View all FAQs <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  </section>
);
