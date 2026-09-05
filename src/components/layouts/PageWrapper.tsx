import { ReactNode } from "react";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import MobileContactBar from "@/components/common/MobileContactBar";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileContactBar />
      <WhatsAppButton context="general" isFloating className="hidden md:inline-flex" />
    </>
  );
}
