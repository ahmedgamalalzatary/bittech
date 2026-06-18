import { useTranslation } from 'react-i18next'
import './About.css'

export default function About() {
  const { t } = useTranslation()
  const ratings = t('about.hero.ratings', { returnObjects: true })
  const cards = t('about.partner.cards', { returnObjects: true })
  const metrics = t('about.mission.metrics', { returnObjects: true })
  const values = t('about.values.items', { returnObjects: true })
  const team = t('about.team.members', { returnObjects: true })
  const reviewCards = t('about.reviews.cards', { returnObjects: true })

  return (
    <>
      <section className="hero-section py_80 sm_py_48">
        <div className="container">
          <div className="mx-auto relative" style={{ maxWidth: '750px' }}>
            <img
              width="50"
              height="50"
              className="absolute hero-star"
              src="/frontend-assets/images/svgs/hero-star.svg"
              alt="star"
              decoding="async"
              fetchpriority="high"
            />
            <h1 className="main-heading text_white text-center relative fw_800 uppercase">
              {t('about.hero.title')}
            </h1>
            <p
              className="fs_18 sm_fs_16 text_white ff_inter lh_27 capitalize text-center hero-text mx-auto"
              style={{ maxWidth: '774px' }}
            >
              {t('about.hero.description')}
            </p>
            <a
              href="https://calendly.com/contact-zeeframes/30min?month=2025-11"
              target="_blank"
              className="btn-component btn-outlined relative overflow-hidden mx-auto w-fit btn-animate-swap"
            >
              <span className="work-us">{t('about.hero.primary')}</span>
              <span className="lets-talk absolute">{t('about.hero.secondary')}</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center mt-64 sm_mt_32 ratings-wraper">
            {ratings.map((rating, index) => (
              <div className="rating-card" key={index}>
                {rating.flags ? (
                  <div className="flex items-center justify-center">
                    <p className="rating fs_18 sm_fs_16 fw_600 lh_21 capitalize text_white ff_inter">
                      {rating.title}
                    </p>
                    <img
                      style={{ marginLeft: '10px', marginRight: '6px' }}
                      width="21"
                      height="16"
                      src="/frontend-assets/images/svgs/usa-flag.svg"
                      alt="flag"
                      decoding="async"
                      fetchpriority="high"
                    />
                    <img
                      width="21"
                      height="16"
                      src="/frontend-assets/images/svgs/uk-flag.svg"
                      alt="flag"
                      decoding="async"
                      fetchpriority="high"
                    />
                  </div>
                ) : rating.verified ? (
                  <div className="flex items-center justify-center" style={{ gap: '8px' }}>
                    <p className="rating fs_18 sm_fs_16 fw_600 lh_21 capitalize text_white ff_inter">
                      {rating.title}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99052 2.6665C7.85899 2.78454 7.7213 2.89553 7.57802 2.999C7.32969 3.16566 7.05052 3.28066 6.75719 3.339C6.62969 3.364 6.49635 3.37483 6.23052 3.39566C5.56302 3.449 5.22885 3.47566 4.95052 3.574C4.63218 3.6862 4.34304 3.86834 4.10437 4.10701C3.8657 4.34569 3.68356 4.63482 3.57135 4.95316C3.47302 5.2315 3.44635 5.56566 3.39302 6.23316C3.38345 6.4096 3.36454 6.5854 3.33635 6.75983C3.27802 7.05316 3.16302 7.33233 2.99635 7.58066C2.92385 7.689 2.83719 7.79066 2.66385 7.99316C2.22969 8.50316 2.01219 8.75816 1.88469 9.02483C1.59052 9.6415 1.59052 10.3582 1.88469 10.9748C2.01219 11.2415 2.22969 11.4965 2.66385 12.0065C2.83719 12.209 2.92385 12.3107 2.99635 12.419C3.16302 12.6673 3.27802 12.9465 3.33635 13.2398C3.36135 13.3673 3.37219 13.5007 3.39302 13.7665C3.44635 14.434 3.47302 14.7682 3.57135 15.0465C3.68356 15.3648 3.8657 15.654 4.10437 15.8926C4.34304 16.1313 4.63218 16.3135 4.95052 16.4257C5.22885 16.524 5.56302 16.5507 6.23052 16.604C6.49635 16.6248 6.62969 16.6357 6.75719 16.6607C7.05052 16.719 7.32969 16.8348 7.57802 17.0007C7.68635 17.0732 7.78802 17.1598 7.99052 17.3332C8.50052 17.7673 8.75552 17.9848 9.02219 18.1123C9.63885 18.4065 10.3555 18.4065 10.9722 18.1123C11.2389 17.9848 11.4939 17.7673 12.0039 17.3332C12.2064 17.1598 12.308 17.0732 12.4164 17.0007C12.6647 16.834 12.9439 16.719 13.2372 16.6607C13.3647 16.6357 13.498 16.6248 13.7639 16.604C14.4314 16.5507 14.7655 16.524 15.0439 16.4257C15.3622 16.3135 15.6513 16.1313 15.89 15.8926C16.1287 15.654 16.3108 15.3648 16.423 15.0465C16.5214 14.7682 16.548 14.434 16.6014 13.7665C16.6222 13.5007 16.633 13.3673 16.658 13.2398C16.7164 12.9465 16.8322 12.6673 16.998 12.419C17.0705 12.3107 17.1572 12.209 17.3305 12.0065C17.7647 11.4965 17.9822 11.2415 18.1097 10.9748C18.4039 10.3582 18.4039 9.6415 18.1097 9.02483C17.9822 8.75816 17.7647 8.50316 17.3305 7.99316C17.2125 7.86164 17.1015 7.72394 16.998 7.58066C16.8313 7.33237 16.7157 7.05332 16.658 6.75983C16.6298 6.5854 16.6109 6.4096 16.6014 6.23316C16.548 5.56566 16.5214 5.2315 16.423 4.95316C16.3108 4.63482 16.1287 4.34569 15.89 4.10701C15.6513 3.86834 15.3622 3.6862 15.0439 3.574C14.7655 3.47566 14.4314 3.449 13.7639 3.39566C13.5874 3.38609 13.4116 3.36718 13.2372 3.339C12.9437 3.28135 12.6646 3.16576 12.4164 2.999C12.2731 2.89553 12.1354 2.78454 12.0039 2.6665C11.4939 2.23233 11.2389 2.01483 10.9722 1.88733C10.6678 1.74164 10.3346 1.66602 9.99719 1.66602C9.65973 1.66602 9.32657 1.74164 9.02219 1.88733C8.75552 2.01483 8.50052 2.23233 7.99052 2.6665ZM13.6414 8.219C13.7591 8.09009 13.8227 7.92073 13.8187 7.74616C13.8148 7.57159 13.7437 7.40526 13.6202 7.2818C13.4968 7.15833 13.3304 7.08722 13.1559 7.08329C12.9813 7.07935 12.8119 7.14289 12.683 7.26066L8.64135 11.3023L7.31135 9.97316C7.18245 9.85539 7.01308 9.79185 6.83852 9.79579C6.66395 9.79972 6.49762 9.87083 6.37415 9.9943C6.25068 10.1178 6.17958 10.2841 6.17564 10.4587C6.17171 10.6332 6.23524 10.8026 6.35302 10.9315L8.16135 12.7398C8.28853 12.8667 8.46085 12.938 8.64052 12.938C8.82019 12.938 8.99251 12.8667 9.11969 12.7398L13.6414 8.219Z"
                        fill="#24FF14"
                      />
                    </svg>
                  </div>
                ) : (
                  <p className="rating fs_18 sm_fs_16 fw_600 lh_21 capitalize text_white ff_inter text-center">
                    {rating.title}
                  </p>
                )}
                <div className="rating-link flex items-center text_gray_450 rating-link">
                  <div className="award-icon shrink-0 flex items-center justify-center">
                    <img
                      width={rating.logoWidth}
                      height="8"
                      src={rating.logo}
                      alt={rating.logoAlt}
                      decoding="async"
                      fetchpriority="high"
                    />
                  </div>
                  <p className="ff_inter fs_14 lh_16 text_gray_450">{t('about.hero.reviewedOn')}</p>
                  <div className="arrow-wraper flex items-center justify-center">
                    <img
                      width="18"
                      height="18"
                      src="/frontend-assets/images/svgs/navigation-arrow.svg"
                      alt="arrow"
                      decoding="async"
                      fetchpriority="high"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="team-section">
        <img
          width="1441"
          height="677"
          className="object-cover w-full h-auto"
          src="/frontend-assets/images/about-group-image.webp"
          alt="group-image"
          decoding="async"
          fetchpriority="low"
        />
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div className="about-box flex flex-row md-flex-wrap">
            <div className="w-full img-wraper">
              <img
                className="max-w-full object-contain h-auto"
                width="390"
                height="391"
                src="/frontend-assets/images/about.webp"
                alt=""
                fetchpriority="low"
              />
            </div>
            <div>
              <div>
                <p className="fs_14 text_primary uppercase">{t('about.partner.eyebrow')}</p>
                <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">
                  {t('about.partner.title')}
                </h2>
                <p className="fs_14 lh_21 ff_inter text_gray_495" style={{ maxWidth: '570px' }}>
                  {t('about.partner.description')}
                </p>
              </div>
              <div className="team-cards flex flex-wrap">
                {cards.map((card) => (
                  <div className="team-card grow" key={card.title}>
                    <img
                      width="32"
                      height="32"
                      src={card.icon}
                      alt={card.alt}
                      loading="lazy"
                      fetchpriority="low"
                      decoding="async"
                    />
                    <h2 className="fs_18 lh_30 text_white fw_400" style={{ marginTop: '24px', marginBottom: '8px' }}>
                      {card.title}
                    </h2>
                    <p className="fs_14 ff_inter lh_21 text_gray_495">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div style={{ maxWidth: '981px' }}>
            <p className="fs_14 text_primary uppercase">{t('about.mission.eyebrow')}</p>
            <p className="zeeframes-strive fs_32 lh_46 fw_300" id="animatedText">
              {t('about.mission.text')}
            </p>
          </div>
          <div className="mt-80 flex md-flex-wrap justify-between" style={{ gap: '32px' }}>
            <p className="fs_14 lh_normal uppercase fs_400">{t('about.mission.caption')}</p>
            <div className="mission-grid">
              {metrics.map((metric) => (
                <div className="mission-card flex flex-col justify-end relative" key={metric.label}>
                  <img
                    className="absolute top-0 -z-1"
                    style={{ right: metric.right }}
                    width={metric.width}
                    height={metric.height}
                    src={metric.icon}
                    alt={metric.alt}
                    loading="lazy"
                    fetchpriority="low"
                    decoding="async"
                  />
                  <h2 className="mission-title ws_700 lh_normal ff_inter counter" data-target={metric.target}>
                    0+
                  </h2>
                  <p className="mission-text ff_inter lh_normal">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div className="mx-auto text-center capitalize" style={{ maxWidth: '570px' }}>
            <p className="fs_14 text_primary uppercase">{t('about.culture.eyebrow')}</p>
            <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">{t('about.culture.title')}</h2>
            <p className="fs_14 lh_21 ff_inter text_gray_495">{t('about.culture.description')}</p>
          </div>
        </div>
        <div className="team-slider overflow-hidden">
          <div className="mt-64 team-slide-track team-wraper sm_mt_32 flex">
            {Array.from({ length: 10 }).map((_, index) => {
              const image = (index % 5) + 1
              return (
                <div className="team-member shrink-0 team-slide grow" key={index}>
                  <img
                    className="w-full h-auto object-cover"
                    width="282"
                    height="360"
                    src={`/frontend-assets/images/about-member-${image}.webp`}
                    alt={`member-${image}`}
                    loading="lazy"
                    fetchpriority="low"
                    decoding="async"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div style={{ maxWidth: '981px' }}>
            <p className="fs_14 text_primary uppercase">{t('about.values.eyebrow')}</p>
            <p className="zeeframes-strive fs_32 lh_46 fw_300" id="animatedText2">
              {t('about.values.text')}
            </p>
          </div>
          <div className="mt-80 values-container flex">
            <ul className="values-list w-full value-listing flex flex-col">
              {values.map((value, index) => (
                <li className="flex md-flex-wrap items-center justify-between value-item" key={value.title}>
                  <div className="value-counter-wraper flex items-center">
                    <span className="fs_18 ff_inter text_white flex" style={{ paddingTop: '7px' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center">
                      <img
                        className="value-icon"
                        src={value.icon}
                        alt="icon"
                        width="58"
                        height="58"
                        loading="lazy"
                        fetchpriority="low"
                        decoding="async"
                      />
                      <p className="value-title lh_normal text_white">{value.title}</p>
                    </div>
                  </div>
                  <div className="value-content">
                    <p className="fs_16 lh_24 ff_inter text_gray_495">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-black py_80 sm_py_48 sm_pb_32 sticky_section_header">
          <div className="container">
            <div className="mx-auto text-center" style={{ maxWidth: '436px' }}>
              <p className="fs_14 text_primary uppercase">{t('about.team.eyebrow')}</p>
              <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">{t('about.team.title')}</h2>
              <p className="fs_14 lh_21 ff_inter text_gray_495">{t('about.team.description')}</p>
            </div>
          </div>
        </div>
        <div className="pb_80 sm_pb_48 relative teams-section" style={{ zIndex: '3' }}>
          <div className="container">
            <div className="team-box flex flex-col">
              {[team.slice(0, 2), team.slice(2, 4), team.slice(4, 6), team.slice(6, 9), team.slice(9, 12)].map(
                (group, groupIndex) => (
                  <div className="team-container flex md-flex-wrap" key={groupIndex}>
                    {group.map((member) => (
                      <div className="team-member-card overflow-hidden" key={member.name}>
                        <img className="member-img object-cover" width="310" height="360" src={member.image} alt={member.name} />
                        <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                          <p className="fs_16 lh_21 ff_inter text_white">{member.name}</p>
                          <p className="fs_16 lh_21 ff_inter role">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div className="rating-container flex md-flex-wrap items-center justify-center">
            {reviewCards.map((card) => (
              <div className="rating-item" key={card.logo}>
                <div className="flex items-center justify-between" style={{ gap: '12px' }}>
                  <p className="fs_16 lh_16 ff_inter text_gray_450">{t('about.hero.reviewedOn')}</p>
                  <div style={{ marginTop: '4px' }}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <img
                        key={starIndex}
                        width="16"
                        height="16"
                        src={card.star}
                        alt="Star"
                        loading="lazy"
                        fetchpriority="low"
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between" style={{ gap: '12px', marginTop: '13px' }}>
                  <img width="99" height={card.height} src={card.logo} alt={card.logoAlt} loading="lazy" fetchpriority="low" decoding="async" />
                  <p className="fs_16 lh_16 ff_inter text_gray_450">{t('about.reviews.reviewCount')}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="primary-box mx-auto flex md-flex-wrap justify-center items-center">
            <div className="review-item flex sm-flex-col items-center justify-center">
              <h2 className="review-title ff_inter lh_normal">224</h2>
              <p className="fs_16 lh_24 ff_inter review-text">{t('about.reviews.platforms')}</p>
            </div>
            <div className="review-item flex sm-flex-wrap items-center justify-center">
              <h2 className="review-title ff_inter lh_normal">4.9</h2>
              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    width="24"
                    height="24"
                    src="/frontend-assets/images/svgs/black-star.svg"
                    alt="Star"
                    loading="lazy"
                    fetchpriority="low"
                    decoding="async"
                  />
                ))}
              </div>
              <p className="fs_16 lh_24 ff_inter review-text">{t('about.reviews.average')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
