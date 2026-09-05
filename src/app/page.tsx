import PageWrapper from "@/components/layouts/PageWrapper";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutCounsellor } from "@/components/home/AboutCounsellor";
import { WhoBenefitSection } from "@/components/home/WhoBenefitSection";
import { HowWorksSection } from "@/components/home/HowWorksSection";
import { WorkshopsSection } from "@/components/home/WorkshopsSection";
import { FAQPreview } from "@/components/home/FAQPreview";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { PamphletGallery } from "@/components/common/PamphletGallery";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <AboutCounsellor />
      <WhoBenefitSection />
      <HowWorksSection />
      <WorkshopsSection />
      <PamphletGallery />
      <FAQPreview />
      <AppointmentCTA />
    </PageWrapper>
  );
}
