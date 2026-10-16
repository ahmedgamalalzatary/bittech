import type { Metadata, Viewport } from "next";
import { content } from "./content";
import { localePath, type Locale } from "./site";

export function pageMetadata(locale: Locale): Metadata {
  const t = content[locale].meta;
  return {
    title: t.title,
    description: t.description,
    metadataBase: new URL("https://bittech.site"),
    alternates: {
      canonical: localePath[locale],
      languages: { ar: localePath.ar, en: localePath.en, "x-default": localePath.ar },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.description,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      images: ["/logo.jpeg"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};
