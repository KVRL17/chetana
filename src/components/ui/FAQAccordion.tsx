"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  searchPlaceholder?: string;
}

export const FAQAccordion = ({ items, searchPlaceholder = "Search questions..." }: FAQAccordionProps) => {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      {items.length > 6 && (
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input type="search" placeholder={searchPlaceholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="h-12 w-full rounded-[1rem] border border-primary/10 bg-white pl-11 pr-4 text-sm outline-none shadow-sm transition focus:border-primary/25 focus:ring-4 focus:ring-primary/5 sm:h-13 sm:rounded-2xl" aria-label={searchPlaceholder} />
        </div>
      )}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const open = activeId === item.id;
          return (
            <div key={item.id} className={cn("overflow-hidden rounded-[1.1rem] border bg-white transition sm:rounded-[1.25rem]", open ? "border-primary/16 shadow-[0_15px_45px_rgba(23,63,69,.06)]" : "border-primary/8")}>
              <button id={`faq-question-${item.id}`} type="button" onClick={() => setActiveId(open ? null : item.id)} className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5" aria-expanded={open} aria-controls={`faq-answer-${item.id}`}>
                <span className="text-[13.5px] font-extrabold leading-5.5 text-primary sm:text-base sm:leading-6">{item.question}</span>
                <span className={cn("flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-primary/6 text-primary transition sm:h-8 sm:w-8", open && "rotate-180 bg-primary text-white")}><ChevronDown className="h-4 w-4" /></span>
              </button>
              <div id={`faq-answer-${item.id}`} role="region" aria-labelledby={`faq-question-${item.id}`} className={cn("grid transition-[grid-template-rows] duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden"><p className="px-4 pb-4 text-[13px] leading-6.5 text-muted sm:px-6 sm:pb-6 sm:text-sm sm:leading-7">{item.answer}</p></div>
              </div>
            </div>
          );
        })}
        {filteredItems.length === 0 && <div className="rounded-2xl border border-dashed border-primary/15 bg-white p-8 text-center text-sm text-muted">No matching questions found. Try a different word or contact us directly.</div>}
      </div>
    </div>
  );
};
