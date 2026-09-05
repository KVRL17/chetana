"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Star } from "lucide-react";

export const GoogleTrust = () => {
  return (
    <section className="py-12 md:py-16 bg-background" id="google-reviews">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Trusted by People We Have Guided
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-primary">{siteConfig.googleRating}</span>
            <span className="text-muted"> Google Rating</span>
          </div>

        </div>

        <p className="text-sm text-muted mb-8">
          We strive to provide the highest quality counselling and guidance services
          to our community in Atchutapuram, Anakapalli, and the wider Visakhapatnam region.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
              "bg-primary text-white hover:bg-primary/90 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            View on Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
};