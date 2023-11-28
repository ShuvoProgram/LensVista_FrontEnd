import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "LensVista",
  description:
    "LensVista is where every image becomes a story. We capture life's precious moments with creativity and passion, transforming them into timeless visual narratives. Experience the art of storytelling through our lens.",
  icons: "https://i.ibb.co/tpx8wRt/Screenshot-2023-11-28-010559-modified-removebg-preview.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
