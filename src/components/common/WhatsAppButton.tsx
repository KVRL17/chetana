import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface WhatsAppButtonProps {
  context?: "general" | "career" | "student" | "family" | "workshop" | "bookSession";
  className?: string;
  showIcon?: boolean;
  isFloating?: boolean;
}

export const WhatsAppButton = ({ context = "general", className, showIcon = true, isFloating = false }: WhatsAppButtonProps) => {
  const message = siteConfig.whatsappMessages[context] || siteConfig.whatsappMessages.general;
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Chetana on WhatsApp"
      className={cn(
        "items-center justify-center gap-2 rounded-full bg-[#228b4e] font-bold text-white shadow-[0_14px_35px_rgba(34,139,78,.24)] transition hover:-translate-y-0.5 hover:bg-[#1c7542]",
        isFloating ? "fixed bottom-6 right-6 z-40 h-14 w-14 p-0" : "inline-flex px-5 py-3 text-sm",
        className
      )}
    >
      {showIcon && <MessageCircle className="h-5 w-5" aria-hidden="true" />}
      {!isFloating && <span>WhatsApp</span>}
    </Link>
  );
};
