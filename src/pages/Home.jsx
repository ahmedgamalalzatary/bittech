import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './HomeRedesign.css'

// Only home-process-1.webp exists at full size; the mobile set exists for all
// six steps, so the sticky frame (object-fit: cover) uses those.
const PROCESS_IMAGES = [
  '/frontend-assets/images/home-process-mob-1.webp',
  '/frontend-assets/images/home-process-mob-2.webp',
  '/frontend-assets/images/home-process-mob-3.webp',
  '/frontend-assets/images/home-process-mob-4.webp',
  '/frontend-assets/images/home-process-mob-5.webp',
  '/frontend-assets/images/home-process-mob-6.webp',
]

const PARTNERS = [
  ['/frontend-assets/biscofa.png', 'Biscofa'],
  ['/frontend-assets/elgawhra.png', 'Elgawhra'],
  ['/frontend-assets/capella.png', 'Capella'],
  ['/frontend-assets/capella2.png', 'Capella App'],
]

const ArrowOut = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M14.5833 5.41663L5 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.66663 5H15V13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Home() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [activeStep, setActiveStep] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)
  const rootRef = useRef(null)

  const contactPoints = t('common.contact.points', { returnObjects: true })
  const services = t('home.services.items', { returnObjects: true })
  const showcaseProjects = t('home.showcase.projects', { returnObjects: true })
  const processSteps = t('home.process.steps', { returnObjects: true })
  const faqs = t('home.faq.items', { returnObjects: true })

  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Scroll-reveal: fade elements in as they enter the viewport.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const targets = root.querySelectorAll('.rx-fade, .rx-reveal')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Process: track which step is centered, drive the sticky image.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const steps = Array.from(root.querySelectorAll('.rx-step'))
    if (!steps.length) return
    let pending = false
    const onScroll = () => {
      if (pending) return
      pending = true
      requestAnimationFrame(() => {
        const mid = window.innerHeight * 0.5
        let best = 0
        let bestDist = Infinity
        steps.forEach((step, i) => {
          const r = step.getBoundingClientRect()
          const c = r.top + r.height / 2
          const d = Math.abs(c - mid)
          if (r.bottom > 0 && r.top < window.innerHeight && d < bestDist) {
            bestDist = d
            best = i
          }
        })
        setActiveStep(best)
        pending = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [processSteps.length])

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })
    const form = event.currentTarget
    try {
      await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form, {
        publicKey: emailJsPublicKey,
      })
      form.reset()
      setSubmitStatus({ type: 'success', message: '✓ Inquiry transmitted. We reply within one business day.' })
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '✗ Transmission failed. Please retry or email us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rx" ref={rootRef}>
      {/* ======================= HERO ======================= */}
      <section className="rx-hero">
        <div className="rx-hero__bloom" />
        <div className="rx-wrap rx-hero__inner">
          <div className="rx-hero__topline rx-load rx-load--1">
            <span><span className="rx-hero__dot" /> {t('home.hero.badge')}</span>
            <span>EST. 2020 — WORLDWIDE</span>
            <span>{t('home.partners')}</span>
          </div>

          <h1 className="rx-hero__title">
            <span className="rx-line"><span>Reliable</span></span>
            <span className="rx-line"><span>Software<span className="rx-hero__badge">No-Code → Scale</span></span></span>
            <span className="rx-line rx-ind"><span className="rx-outline">for Modern Cos.</span></span>
          </h1>

          <div className="rx-hero__grid">
            <p className="rx-hero__lede rx-load rx-load--2">
              {t('home.hero.descriptionPrefix')}{' '}
              <span className="rx-volt">{t('home.hero.highlight')}</span>{' '}
              {t('home.hero.descriptionSuffix')}
              <span className="rx-hero__cta">
                <a className="rx-btn" href="https://calendly.com/contact-BitTech/30min?month=2025-11" target="_blank" rel="noreferrer">
                  {t('home.hero.primary')} <ArrowOut />
                </a>
                <a className="rx-btn rx-btn--ghost" href="https://www.figma.com/proto/Wvc5EAdw0leAMdlJ3tF6Be/BitTech-Portfolio-New-Branding" target="_blank" rel="noreferrer">
                  View Work
                </a>
              </span>
            </p>

            <div className="rx-spec rx-load rx-load--3" aria-hidden="true">
              <div className="rx-spec__row"><span className="rx-spec__k">Projects</span><span className="rx-spec__v"><b>1200+</b></span></div>
              <div className="rx-spec__row"><span className="rx-spec__k">Repeat clients</span><span className="rx-spec__v"><b>200+</b></span></div>
              <div className="rx-spec__row"><span className="rx-spec__k">Rating</span><span className="rx-spec__v"><b>4.8</b> / 5.0</span></div>
              <div className="rx-spec__row"><span className="rx-spec__k">Response</span><span className="rx-spec__v">&lt; 1 day</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= MARQUEE ======================= */}
      <div className="rx-marq" aria-label={t('home.partners')}>
        <div className="rx-marq__label">Trusted&nbsp;by</div>
        <div className="rx-marq__view">
          <div className="rx-marq__track">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map(([src, alt], i) => (
              <img key={i} src={src} alt={alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </div>

      {/* ======================= SERVICES ======================= */}
      <section className="rx-sec">
        <div className="rx-wrap">
          <div className="rx-sec__head rx-sec__head--split rx-fade">
            <div>
              <span className="rx-kick">{t('home.services.eyebrow')}</span>
              <h2 className="rx-h2">{t('home.services.title')}</h2>
            </div>
            <p className="rx-lede">{t('home.services.description')}</p>
          </div>

          <div className="rx-list rx-fade">
            {services.map((service, i) => (
              <a key={service.title} className="rx-row" href={service.href} aria-label={service.ariaLabel}>
                <span className="rx-row__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="rx-row__main">
                  <span className="rx-row__tag">{service.label}</span>
                  <span className="rx-row__title">{service.title}</span>
                </span>
                <span className="rx-row__arr"><ArrowOut /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= SHOWCASE ======================= */}
      <section className="rx-sec">
        <div className="rx-wrap">
          <div className="rx-sec__head rx-sec__head--split rx-fade">
            <div>
              <span className="rx-kick">{t('home.showcase.eyebrow')}</span>
              <h2 className="rx-h2">{t('home.showcase.title')}</h2>
            </div>
            <p className="rx-lede">{t('home.showcase.description')}</p>
          </div>

          <div className="rx-folio">
            {showcaseProjects.map((project, i) => (
              <article className="rx-card rx-reveal" key={project.name}>
                <div className="rx-card__media">
                  <span className="rx-card__tag">Case {String(i + 1).padStart(2, '0')}</span>
                  <img src={project.image} alt={project.title} width="600" height="510" loading="lazy" decoding="async" />
                </div>
                <div className="rx-card__body">
                  <div>
                    <h3 className="rx-card__name">{project.name}</h3>
                    <p className="rx-card__desc">{project.title}</p>
                  </div>
                  <span className="rx-card__idx">/ 0{i + 1}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="rx-discovery rx-fade">
            <h3>{t('home.discovery.title')}</h3>
            <p>
              {t('home.discovery.prefix')}
              <a href="work" className="rx-inline">{t('home.discovery.link')}</a>
              {t('home.discovery.suffix')}
            </p>
            <a className="rx-btn" href="https://calendly.com/contact-BitTech/30min?month=2025-11" target="_blank" rel="noreferrer">
              {t('home.discovery.primary')} <ArrowOut />
            </a>
          </div>
        </div>
      </section>

      {/* ======================= PROCESS ======================= */}
      <section className="rx-sec">
        <div className="rx-wrap">
          <div className="rx-sec__head rx-sec__head--split rx-fade">
            <div>
              <span className="rx-kick">{t('home.process.eyebrow')}</span>
              <h2 className="rx-h2">{t('home.process.title')}</h2>
            </div>
            <p className="rx-lede">{t('home.process.description')}</p>
          </div>

          <div className="rx-proc">
            <div className="rx-proc__steps">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className={'rx-step' + (i === activeStep ? ' is-active' : '')}
                  data-n={String(i + 1).padStart(2, '0')}
                >
                  <span className="rx-step__bar" />
                  <h3 className="rx-step__title">{step.title}</h3>
                  <p className="rx-step__sub">{step.subtitle}</p>
                  <p className="rx-step__desc">{step.description}</p>
                  <div className="rx-step__mob">
                    <img src={step.mobileImage} alt={step.title} width="327" height="185" loading="lazy" decoding="async" />
                  </div>
                </div>
              ))}
            </div>

            <div className="rx-proc__media">
              <div className="rx-proc__frame">
                <img src={PROCESS_IMAGES[activeStep]} alt={processSteps[activeStep]?.title || 'process'} width="600" height="600" decoding="async" />
                <span className="rx-proc__corner">
                  {String(activeStep + 1).padStart(2, '0')} / {String(processSteps.length).padStart(2, '0')} — {processSteps[activeStep]?.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= SIGNATURE FLIP ======================= */}
      <section className="rx-flip">
        <div className="rx-wrap rx-flip__inner">
          <div>
            <span className="rx-flip__kick">{t('home.gradient.primary')}</span>
            <h2>{t('home.gradient.title')}</h2>
            <p>{t('home.gradient.description')}</p>
            <a className="rx-btn" href="https://calendly.com/contact-BitTech/30min?month=2025-11" target="_blank" rel="noreferrer">
              {t('home.gradient.primary')} <ArrowOut />
            </a>
          </div>
          <div className="rx-flip__star">
            <img src="/frontend-assets/images/star.gif" alt="" width="360" height="360" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ======================= FAQ ======================= */}
      <section className="rx-sec">
        <div className="rx-wrap">
          <div className="rx-faq">
            <div className="rx-fade">
              <span className="rx-kick">{t('home.faq.eyebrow')}</span>
              <h2 className="rx-h2">{t('home.faq.title')}</h2>
              <p className="rx-lede">{t('home.faq.description')}</p>
              <div style={{ marginTop: 28 }}>
                <a className="rx-btn rx-btn--ghost" href="https://calendly.com/contact-BitTech/30min?month=2025-11" target="_blank" rel="noreferrer">
                  {t('home.faq.primary')} <ArrowOut />
                </a>
              </div>
            </div>

            <div className="rx-acc rx-fade">
              {faqs.map((faq, i) => (
                <div className={'rx-acc__item' + (i === openFaq ? ' is-open' : '')} key={faq.question}>
                  <button className="rx-acc__btn" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={i === openFaq}>
                    <span className="rx-acc__n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="rx-acc__q">{faq.question}</span>
                    <span className="rx-acc__ic" aria-hidden="true" />
                  </button>
                  <div className="rx-acc__panel">
                    <div>
                      {faq.answers.map((answer, ai) => (
                        <p key={ai}>{answer}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CONTACT ======================= */}
      <section className="rx-sec">
        <div className="rx-wrap">
          <div className="rx-contact">
            <div className="rx-fade">
              <span className="rx-kick">{t('common.contact.eyebrow')}</span>
              <h2 className="rx-h2">{t('common.contact.title')}</h2>
              <p className="rx-lede">{t('common.contact.description')}</p>
              <ul className="rx-points">
                {contactPoints.map((point, i) => (
                  <li key={i}>
                    <span className="rx-points__n">0{i + 1}</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rx-fade">
              <form className="rx-form" onSubmit={handleContactSubmit}>
                <div className="rx-field">
                  <input type="text" name="full_name" id="fullName" placeholder=" " required />
                  <label htmlFor="fullName">{t('common.form.fullName')}</label>
                </div>
                <div className="rx-field">
                  <input type="email" name="email" id="email" placeholder=" " required />
                  <label htmlFor="email">{t('common.form.email')}</label>
                </div>
                <div className="rx-field">
                  <input type="tel" name="phone" id="phone" placeholder=" " required />
                  <label htmlFor="phone">{t('common.form.phone')}</label>
                </div>
                <div className="rx-field">
                  <textarea name="about_project" id="aboutProject" placeholder=" " required />
                  <label htmlFor="aboutProject">{t('common.form.project')}</label>
                </div>
                <button type="submit" className="rx-btn rx-form__submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting…' : t('common.form.submit')} <ArrowOut />
                </button>
                {submitStatus.message ? (
                  <p className={'rx-status ' + (submitStatus.type === 'success' ? 'ok' : 'err')}>
                    {submitStatus.message}
                  </p>
                ) : null}
              </form>
              <div className="rx-mailto">
                {t('common.form.preferEmail')}{' '}
                <a href="mailto:info@bittech.site">info@bittech.site</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= WHATSAPP ======================= */}
      <a
        className="rx-wa"
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/201011125116?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
        aria-label={t('home.whatsAppLabel')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 28 28" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.8635 4.06584C21.2463 1.44525 17.7654 0.00132957 14.0566 0C6.41419 0 0.194436 6.21909 0.191777 13.8635C0.190448 16.3072 0.829309 18.6925 2.04255 20.7946L0.0754395 27.9796L7.42533 26.0517C9.45026 27.1566 11.7305 27.7383 14.0506 27.739H14.0566C21.6976 27.739 27.9181 21.5192 27.9207 13.8748C27.9221 10.17 26.4815 6.6871 23.8635 4.0665V4.06584ZM14.0566 25.3975H14.0519C11.9844 25.3969 9.95619 24.8411 8.18654 23.7914L7.76571 23.5415L3.40404 24.6856L4.56808 20.4329L4.29418 19.9968C3.14077 18.162 2.53116 16.0413 2.53249 13.8642C2.53515 7.51078 7.70454 2.34138 14.0613 2.34138C17.1392 2.34271 20.0324 3.54266 22.2082 5.72117C24.3841 7.89902 25.58 10.7949 25.58 13.8735C25.5773 20.2275 20.408 25.3969 14.0566 25.3969V25.3975ZM20.3774 16.7673C20.031 16.5938 18.3279 15.7561 18.0101 15.6405C17.6923 15.5248 17.4617 15.467 17.2309 15.814C17.0003 16.161 16.3362 16.9415 16.1341 17.1721C15.9319 17.4035 15.7298 17.4321 15.3835 17.2585C15.0372 17.085 13.921 16.7194 12.5974 15.5394C11.5677 14.6206 10.8722 13.4866 10.6702 13.1395C10.4681 12.7925 10.6489 12.605 10.8217 12.4329C10.9773 12.2773 11.1681 12.028 11.3416 11.8259C11.5151 11.6238 11.5723 11.4789 11.6879 11.2482C11.8036 11.0168 11.7458 10.8148 11.6594 10.6412C11.5729 10.4677 10.8803 8.76253 10.5911 8.06918C10.3098 7.39377 10.024 7.48551 9.81194 7.47421C9.60983 7.46424 9.37917 7.46225 9.14783 7.46225C8.91648 7.46225 8.5415 7.54867 8.22375 7.89569C7.906 8.24267 7.01117 9.08097 7.01117 10.7855C7.01117 12.49 8.25237 14.1381 8.42586 14.3694C8.59935 14.6008 10.8689 18.0995 14.3438 19.6006C15.1701 19.9576 15.8156 20.171 16.3188 20.3306C17.1486 20.5945 17.9037 20.5573 18.5007 20.4682C19.1662 20.3685 20.5502 19.6299 20.8388 18.8208C21.1273 18.0117 21.1273 17.3177 21.0409 17.1734C20.9545 17.0292 20.7231 16.9421 20.3768 16.7686L20.3774 16.7673Z" fill="#25D366" />
        </svg>
      </a>
    </div>
  )
}
