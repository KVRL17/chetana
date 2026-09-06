import Link from "next/link";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Learn how information submitted through the Chetana website is handled for counselling enquiries, appointment requests and communication.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <PageHero eyebrow="Website policy" title="Privacy Policy" description="How information submitted through the Chetana website is handled for enquiries, appointment requests and communication." />
      <section className="section-space"><div className="container-shell max-w-4xl"><div className="premium-card prose-premium p-6 sm:p-9">
        <h2>Information you provide</h2><p>When you contact Chetana through a website form, phone, WhatsApp or email, you may provide details such as your name, phone number, email address, preferred service, appointment preferences, location and the information you choose to include in your message.</p>
        <h2>How the information is used</h2><p>Information provided through the website is used to understand and respond to your enquiry, help with appointment or program coordination, and communicate with you about the request you initiated.</p>
        <h2>Website form processing</h2><p>The website is configured to send form submissions through FormSubmit to the centre’s email address. The website itself does not provide a user account system or a local database for storing counselling enquiry forms. Third-party services involved in delivery may process information according to their own terms and privacy practices.</p>
        <h2>External services and links</h2><p>The website includes links or embedded services such as Google Maps and WhatsApp. When you use those services, their respective privacy policies and terms apply.</p>
        <h2>Cookies and analytics</h2><p>The current website does not include a dedicated advertising tracker or analytics package in the application code. If this changes in the future, this policy should be updated to reflect the technologies actually in use.</p>
        <h2>Your choices</h2><p>If you have questions about information you previously shared, or want to request correction or deletion where applicable, contact the centre directly using the details below.</p>
        <h2>Health and emergency information</h2><p>This website is not an emergency service. Website information and online enquiry forms should not be relied on for urgent medical, psychiatric or safety assistance. In an emergency, contact appropriate local emergency services or the nearest hospital.</p>
        <h2>Contact</h2><p>For privacy-related questions, contact <Link href={`mailto:${siteConfig.email}`} className="font-bold text-primary">{siteConfig.email}</Link> or <Link href={`tel:${siteConfig.phoneRaw}`} className="font-bold text-primary">{siteConfig.phone}</Link>. The centre address is {siteConfig.address.full}.</p>
        <p className="mt-8 text-xs">Last updated: September 2026.</p>
      </div></div></section>
    </PageWrapper>
  );
}
