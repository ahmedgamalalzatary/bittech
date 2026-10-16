import { SmoothScroll } from "@/components/SmoothScroll";
import { figtree, sora } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import "../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = pageMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${sora.variable} ${figtree.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
