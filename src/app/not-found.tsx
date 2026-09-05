import Link from "next/link";
import { ArrowLeft, Compass, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandMark } from "@/components/ui/BrandMark";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#f8f6f1,#edf2ef)] p-5">
      <div className="premium-card w-full max-w-2xl overflow-hidden p-7 text-center sm:p-10">
        <BrandMark className="mx-auto h-14 w-14" />
        <div className="mt-7 text-xs font-black uppercase tracking-[.16em] text-secondary">404 · Page not found</div>
        <h1 className="mt-4 text-[clamp(2.4rem,7vw,4.8rem)] font-[760] leading-none text-primary">This path doesn’t lead anywhere.</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted">The page may have moved or the address may be incomplete. You can return home, explore counselling services or contact the centre.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-white"><ArrowLeft className="h-4 w-4" /> Back home</Link>
          <Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/10 bg-white px-6 text-sm font-extrabold text-primary"><Compass className="h-4 w-4" /> Services</Link>
          <Link href={`tel:${siteConfig.phoneRaw}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/10 bg-white px-6 text-sm font-extrabold text-primary"><Phone className="h-4 w-4" /> Call</Link>
        </div>
      </div>
    </main>
  );
}
