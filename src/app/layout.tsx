import type { Metadata, Viewport } from "next";
import { Figtree, Sora } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitTech | Software house in Fayoum, Egypt",
  description:
    "BitTech designs and builds websites, mobile apps, desktop software, online stores and AI tools. Send us your idea on WhatsApp.",
  metadataBase: new URL("https://bittech.site"),
  openGraph: {
    title: "BitTech | You have the idea. We build the software.",
    description: "Websites, mobile apps, desktop software, online stores and AI tools, built in Fayoum, Egypt.",
    images: ["/logo.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${figtree.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
