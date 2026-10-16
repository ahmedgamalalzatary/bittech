import { Alexandria, Figtree, IBM_Plex_Sans_Arabic, Sora } from "next/font/google";

// Latin: Sora for headings and the wordmark, Figtree for body text.
export const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700", "800"] });
export const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });

// Arabic: Alexandria is geometric like Sora; IBM Plex Sans Arabic reads well at body sizes.
export const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
});
export const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});
