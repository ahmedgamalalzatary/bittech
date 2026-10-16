"use client";

import { createContext, useContext, type ReactNode } from "react";
import { content } from "@/lib/content";
import { whatsappLink, type Locale } from "@/lib/site";

const LocaleContext = createContext<Locale>("ar");

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const locale = useContext(LocaleContext);
  const t = content[locale];
  return { locale, t, rtl: locale === "ar", wa: whatsappLink(t.whatsappMessage) };
}
