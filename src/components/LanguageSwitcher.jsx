import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher({ className = '', onClick }) {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(nextLanguage)
    onClick?.()
  }

  return (
    <button
      type="button"
      className={className}
      onClick={toggleLanguage}
      aria-label={i18n.language === 'ar' ? 'Switch language to English' : 'تغيير اللغة إلى العربية'}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.16)',
        borderRadius: '1rem',
        background: 'rgba(255, 255, 255, 0.04)',
        minWidth: '52px',
        textAlign: 'center',
        transition: '0.2s ease-in-out',
      }}
    >
      {t('common.langSwitch')}
    </button>
  )
}
