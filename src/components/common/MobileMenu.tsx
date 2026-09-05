"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, BookOpen, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      aria-label="Close navigation"
    >
      <div
        className="fixed inset-y-0 right-0 w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="pt-16 pb-8 px-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-primary" />
            </button>
          </div>

          <nav className="space-y-2">
            {siteConfig.navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block py-3 px-4 text-lg text-foreground hover:bg-primary/5 hover:text-primary",
                  "transition-colors rounded-xl"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-border/20 mt-6">
            <div className="flex flex-col gap-3">
              <Link
                href="/book-session"
                onClick={onClose}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white",
                  "bg-primary hover:bg-primary/90 transition-colors"
                )}
              >
                <BookOpen className="w-4 h-4" />
                Book Session
              </Link>
              <Link
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
                  "bg-secondary hover:bg-secondary/90 text-white transition-colors"
                )}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.general)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white",
                  "bg-[#25D365] hover:bg-[#128C7E] transition-colors"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
