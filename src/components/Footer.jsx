import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
    <path
      d="M9.23409 10.5247L9.73916 7.23179H6.57971V5.09491C6.57971 4.19404 7.02103 3.31593 8.43617 3.31593H9.87265V0.512531C9.87265 0.512531 8.56898 0.290039 7.32263 0.290039C4.72049 0.290039 3.01977 1.86706 3.01977 4.72208V7.23179H0.127319V10.5247H3.01977V18.485C3.59975 18.576 4.19419 18.6234 4.79974 18.6234C5.40529 18.6234 5.99973 18.576 6.57971 18.485V10.5247H9.23409Z"
      fill="white"
    />
  </svg>
)

const SocialList = ({ className, style }) => (
  <ul className={className} style={style}>
    <li>
      <a className="social-item flex items-center justify-center" href="https://www.facebook.com/share/1DHyi4UWCe/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook">
        <FacebookIcon />
      </a>
    </li>
    <li>
      <a className="social-item flex items-center justify-center" href="https://www.instagram.com/bitt_tech?igsh=MTh0OGl3cmphc3ozMg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
        <img width="20" height="18" src="/frontend-assets/images/svgs/instagram.svg" alt="instagram" loading="lazy" />
      </a>
    </li>
    <li>
      <a className="social-item flex items-center justify-center" href="https://www.linkedin.com/company/bit-tech1/" target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn">
        <img width="19" height="18" src="/frontend-assets/images/svgs/linkedin.svg" alt="linkedin" loading="lazy" />
      </a>
    </li>
  </ul>
)

const SERVICES = [
  ['/', 'UI UX Consultation'],
  ['/', 'UI UX Design'],
  ['/', 'Web Design'],
  ['/', 'MVP Design'],
  ['/', 'Product Revamp'],
  ['/', 'Brand Design'],
  ['/', 'NoCode Development'],
  ['/', 'Webflow Development'],
  ['/', 'Framer Development'],
  ['/', 'Figma Design'],
]

const INDUSTRIES = ['AI/ML', 'SaaS', 'Web3', 'Travel', 'Fintech', 'EdTech', 'Logistics', 'Real Estate', 'Healthcare', 'E-commerce']

export default function Footer() {
  const { t } = useTranslation()
  const services = t('footer.servicesList', { returnObjects: true, defaultValue: [] })
  const industries = t('footer.industriesList', { returnObjects: true, defaultValue: [] })

  return (
    <footer className="footer relative behind-cursor">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-text">
            <p className="fs_18 lh_27 ff_inter text_gray_495">
              {t('footer.intro')}
            </p>
            <SocialList className="list-unstyled flex md_hidden" style={{ gap: '16px', marginTop: '32px' }} />
          </div>
          <div className="quick-links">
            <h2 className="fs_16 lh_20 fw_600 ff_inter text_white">{t('footer.company')}</h2>
            <ul className="flex flex-col list-unstyled" style={{ gap: '14px', marginTop: '20px' }}>
              <li><NavLink to="/" end className="fs_15 lh_20 ff_inter text_gray_200">{t('common.nav.home')}</NavLink></li>
              <li><NavLink to="/about" className="fs_15 lh_20 ff_inter text_gray_200">{t('common.nav.about')}</NavLink></li>
              <li><NavLink to="/work" className="fs_15 lh_20 ff_inter text_gray_200">{t('common.nav.work')}</NavLink></li>
            </ul>
          </div>
          <div className="quick-links">
            <h2 className="fs_16 lh_20 fw_600 ff_inter text_white">{t('footer.services')}</h2>
            <ul className="flex flex-col list-unstyled" style={{ gap: '14px', marginTop: '20px' }}>
              {SERVICES.map(([href], index) => (
                <li key={href}>
                  <a href={href} className="fs_15 lh_20 ff_inter text_gray_200">{services[index]}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="quick-links">
            <h2 className="fs_16 lh_20 fw_600 ff_inter text_white">{t('footer.industries')}</h2>
            <ul className="flex flex-col list-unstyled" style={{ gap: '14px', marginTop: '20px' }}>
              {INDUSTRIES.map((name, index) => (
                <li key={name}><span className="fs_15 lh_20 ff_inter text_gray_200">{industries[index]}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom flex flex-wrap items-center justify-center" style={{ gap: '20px' }}>
          <p className="fs_12 lh_normal ff_inter text_white_70">
            {t('footer.copyright')}
          </p>
          <SocialList className="list-unstyled hidden md_flex justify-center" style={{ gap: '16px' }} />
        </div>
      </div>
    </footer>
  )
}
