import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function Header() {
  const [menuShown, setMenuShown] = useState(false)
  const { t } = useTranslation()

  // mirrors frontend-assets/js/common.js: lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuShown ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuShown])

  const navClass = ({ isActive }) =>
    'nav-link fs_18 lh_27 ff_inter text_white' + (isActive ? ' active' : '')

  return (
    <header className="header z_999">
      <div className="container">
        <nav className="flex items-center justify-between">
          <NavLink to="/" aria-label="Zeeframes">
            <img src="/frontend-assets/images/svgs/logo.svg" alt="Zeeframes" width="179" height="36" />
          </NavLink>
          <ul
            className={'list-unstyled flex items-center gap-12 mobile-menu' + (menuShown ? ' shown' : '')}
            id="mobile-menu"
          >
            <li>
              <NavLink to="/" end className={navClass} onClick={() => setMenuShown(false)}>{t('common.nav.home')}</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navClass} onClick={() => setMenuShown(false)}>{t('common.nav.about')}</NavLink>
            </li>
            <li>
              <NavLink to="/work" className={navClass} onClick={() => setMenuShown(false)}>{t('common.nav.work')}</NavLink>
            </li>
          </ul>
          <div className="flex items-center" style={{ gap: '12px' }}>
            <LanguageSwitcher
              className="nav-link fs_18 lh_27 ff_inter text_white md-hidden"
            />
            <button className="theme-toggler relative hidden" id="theme-toggler" aria-label="Toggle theme">
              <div className="theme-icon flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10.0192 1.65965C9.43727 1.47632 8.93987 2.11231 9.24834 2.63898C9.73567 3.46964 9.99834 4.40698 9.99834 5.34698C9.99834 8.29231 7.61054 10.6803 4.665 10.6803C4.1104 10.6803 3.54947 10.5903 3.04 10.4303C2.45807 10.247 1.9398 10.883 2.24834 11.4096C3.43334 13.431 5.59914 14.6803 7.99834 14.6803C11.6802 14.6803 14.665 11.6956 14.665 8.01364C14.665 5.07965 12.7713 2.52498 10.0192 1.65965ZM11.0817 3.65965C12.4577 4.63231 13.3317 6.23565 13.3317 8.01364C13.3317 10.959 10.9439 13.347 7.99834 13.347C6.64627 13.347 5.4104 12.827 4.45667 11.9723C4.5278 11.9743 4.59414 12.0136 4.665 12.0136C8.34694 12.0136 11.3317 9.02897 11.3317 5.34698C11.3317 4.77565 11.2303 4.21031 11.0817 3.65965Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <button
              className="toggle-header hidden lg_block"
              id="toggleHeader"
              aria-label="Toggle navigation"
              onClick={() => setMenuShown((s) => !s)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10 5H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
