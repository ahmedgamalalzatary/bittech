export const WHATSAPP_NUMBER = "2015501053600";
export const WHATSAPP_DISPLAY = "+20 155 010 53600";
export const EMAIL = "info@bittech.site";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type ServiceId = "web" | "mobile" | "desktop" | "ai" | "store" | "design" | "cloud";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

// Home page path for each language. Arabic is the default and lives at the root.
export const localePath: Record<Locale, string> = { ar: "/", en: "/en" };
