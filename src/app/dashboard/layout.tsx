import BaseComponent from "@/components/base/BaseComponent";
import "../globals.css";
import type { Metadata } from "next";
import DashboardLayout from "@/layout/DashboardLayout";
export const metadata: Metadata = {
  title: "Dashboard | LensVista",
  description: "LensVista Dashboard",
  icons: "https://i.ibb.co/tpx8wRt/Screenshot-2023-11-28-010559-modified-removebg-preview.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseComponent
      showNavbar={true}
      className="w-full"
      showFooter={false}
    >
      <DashboardLayout>{children}</DashboardLayout>
    </BaseComponent>
  );
}
