import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
}

export const Breadcrumb = ({ items, showHome = true }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className="border-b border-primary/7 bg-white/58">
    <ol className="container-shell flex min-h-10 items-center gap-1.5 no-scrollbar overflow-x-auto whitespace-nowrap text-[10.5px] font-semibold text-muted sm:min-h-11 sm:gap-2 sm:text-[12px]">
      {showHome && (
        <li className="flex items-center gap-1.5 sm:gap-2">
          <Link href="/" className="flex items-center gap-1.5 transition hover:text-primary" aria-label="Home">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-border sm:h-3.5 sm:w-3.5" aria-hidden="true" />
        </li>
      )}
      {items.map((item, index) => (
        <li key={`${item.label}-${index}`} className="flex items-center gap-1.5 sm:gap-2">
          {index > 0 && <ChevronRight className="h-3 w-3 text-border sm:h-3.5 sm:w-3.5" aria-hidden="true" />}
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="transition hover:text-primary">{item.label}</Link>
          ) : (
            <span className="max-w-[78vw] truncate text-foreground/80 sm:max-w-none">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
