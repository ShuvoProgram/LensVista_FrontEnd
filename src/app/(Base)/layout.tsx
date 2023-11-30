import "../../app/globals.css";
import type { Metadata } from "next";
import BaseComponent from "@/components/base/BaseComponent";
import '@smastrom/react-rating/style.css'
export const metadata: Metadata = {
  title: "LensVista",
  description:
    "LensVista captures moments with finesse! 📸 Offering professional photography services for events, portraits, and special occasions. 🌟 Let us frame your memories beautifully. ",
  icons: "https://i.ibb.co/tpx8wRt/Screenshot-2023-11-28-010559-modified-removebg-preview.png",
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
