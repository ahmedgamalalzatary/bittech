import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './ar'
import en from './en'

const STORAGE_KEY = 'bittech-language'
const FALLBACK_LANGUAGE = 'en'

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
const initialLanguage = savedLanguage || FALLBACK_LANGUAGE

const applyDocumentLanguage = (language) => {
  if (typeof document === 'undefined') return
  const dir = language === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = language
  document.documentElement.dir = dir
  document.body.dir = dir
}

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
})

applyDocumentLanguage(initialLanguage)

i18n.on('languageChanged', (language) => {
  localStorage.setItem(STORAGE_KEY, language)
  applyDocumentLanguage(language)
})

export default i18n
