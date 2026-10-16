import { SmoothScroll } from "@/components/SmoothScroll";
import { alexandria, plexArabic, sora } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import "../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = pageMetadata("ar");

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${sora.variable} ${alexandria.variable} ${plexArabic.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
