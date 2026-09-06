import type { Metadata } from "next";
import AdminDashboard from "../AdminDashboard";

export const metadata: Metadata = {
  title: "Admin | Chetana",
  robots: { index: false, follow: false },
};

export default function AdminSectionPage() {
  return <AdminDashboard />;
}
