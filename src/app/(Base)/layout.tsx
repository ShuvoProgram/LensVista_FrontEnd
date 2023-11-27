import "../../app/globals.css";
import type { Metadata } from "next";
import BaseComponent from "@/components/base/BaseComponent";
export const metadata: Metadata = {
  title: "LensVista",
  description:
    "LensVista captures moments with finesse! 📸 Offering professional photography services for events, portraits, and special occasions. 🌟 Let us frame your memories beautifully. ",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BaseComponent>{children}</BaseComponent>
    </>
  );
}
