import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "../../../logo-green.png";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white shadow-[0_10px_30px_rgba(23,63,69,0.18)] ring-1 ring-primary/10",
        className
      )}
      aria-hidden="true"
    >
      <Image src={logo} alt="" fill sizes="48px" className="object-cover" />
    </span>
  );
}
