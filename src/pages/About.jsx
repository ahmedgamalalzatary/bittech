import './About.css'

export default function About() {
  return (
    <>
      <section className="hero-section py_80 sm_py_48">
        <div className="container">
          <div className="mx-auto relative" style={{ maxWidth: '750px' }}>
            <img width="50" height="50" className="absolute hero-star"
              src="/frontend-assets/images/svgs/hero-star.svg" alt="star" decoding="async"
              fetchpriority="high" />
            <h1 className="main-heading text_white text-center relative fw_800 uppercase">A Strategic UI UX Design
              Agency</h1>
            <p className="fs_18 sm_fs_16 text_white ff_inter lh_27 capitalize text-center hero-text mx-auto"
              style={{ maxWidth: '774px' }}>We are the best
              product
              design agency for startups. We excel in UI UX design, branding, web
              development & committed to 100% satisfaction with every project.</p>
            <a href="https://calendly.com/contact-zeeframes/30min?month=2025-11" target="_blank"
              className="btn-component btn-outlined relative overflow-hidden mx-auto w-fit btn-animate-swap">
              <span className="work-us">Request a Proposal Today</span>
              <span className="lets-talk absolute">Book a Demo</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center mt-64 sm_mt_32 ratings-wraper">
            <div className="rating-card">
              <p className="rating fs_18 sm_fs_16 fw_600 lh_21 capitalize text_white ff_inter text-center">4.9
                Rating</p>
              <div className="rating-link flex items-center text_gray_450 rating-link">
                <div className="award-icon shrink-0 flex items-center justify-center">
                  <img width="28" height="8" src="/frontend-assets/images/svgs/clutch.svg" alt="clutch"
                    decoding="async" fetchpriority="high" />
                </div>
                <p className="ff_inter fs_14 lh_16 text_gray_450">Reviewed on</p>
                <div className="arrow-wraper flex items-center justify-center">
                  <img width="18" height="18" src="/frontend-assets/images/svgs/navigation-arrow.svg"
                    alt="arrow" decoding="async" fetchpriority="high" />
                </div>
              </div>
            </div>
            <div className="rating-card">
              <div className="flex items-center justify-center">
                <p className="rating fs_18 sm_fs_16 fw_600 lh_21 capitalize text_white ff_inter">Best in</p>
                <img style={{ marginLeft: '10px', marginRight: '6px' }} width="21" height="16"
                  src="/frontend-assets/images/svgs/usa-flag.svg" alt="flag" decoding="async"
                  fetchpriority="high" />
                <img width="21" height="16" src="/frontend-assets/images/svgs/uk-flag.svg" alt="flag"
                  decoding="async" fetchpriority="high" />
              </div>
              <div className="rating-link flex items-center text_gray_450 rating-link">
                <div className="award-icon shrink-0 flex items-center justify-center">
                  <img width="28" height="8" src="/frontend-assets/images/svgs/clutch.svg" alt="clutch"
                    decoding="async" fetchpriority="high" />
                </div>
                <p className="ff_inter fs_14 lh_16 text_gray_450">Reviewed on</p>
                <div className="arrow-wraper flex items-center justify-center">
                  <img width="18" height="18" src="/frontend-assets/images/svgs/navigation-arrow.svg"
                    alt="arrow" decoding="async" fetchpriority="high" />
                </div>
              </div>
            </div>
            <div className="rating-card">
              <p className="rating fs_18 sm_fs_16 fw_600 lh_21 capitalize text_white ff_inter text-center">150 M
                Views</p>
              <div className="rating-link flex items-center text_gray_450 rating-link">
                <div className="award-icon shrink-0 flex items-center justify-center">
                  <img width="33" height="8" src="/frontend-assets/images/svgs/dribbble.svg" alt="dribbble"
                    decoding="async" fetchpriority="high" />
                </div>
                <p className="ff_inter fs_14 lh_16 text_gray_450">Reviewed on</p>
                <div className="arrow-wraper flex items-center justify-center">
                  <img width="18" height="18" src="/frontend-assets/images/svgs/navigation-arrow.svg"
                    alt="arrow" decoding="async" fetchpriority="high" />
                </div>
              </div>
            </div>
            <div className="rating-card">
              <div className="flex items-center justify-center" style={{ gap: '8px' }}>
                <p className="rating fs_18 sm_fs_16 fw_600 lh_21 capitalize text_white ff_inter">Verified</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                  fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M7.99052 2.6665C7.85899 2.78454 7.7213 2.89553 7.57802 2.999C7.32969 3.16566 7.05052 3.28066 6.75719 3.339C6.62969 3.364 6.49635 3.37483 6.23052 3.39566C5.56302 3.449 5.22885 3.47566 4.95052 3.574C4.63218 3.6862 4.34304 3.86834 4.10437 4.10701C3.8657 4.34569 3.68356 4.63482 3.57135 4.95316C3.47302 5.2315 3.44635 5.56566 3.39302 6.23316C3.38345 6.4096 3.36454 6.5854 3.33635 6.75983C3.27802 7.05316 3.16302 7.33233 2.99635 7.58066C2.92385 7.689 2.83719 7.79066 2.66385 7.99316C2.22969 8.50316 2.01219 8.75816 1.88469 9.02483C1.59052 9.6415 1.59052 10.3582 1.88469 10.9748C2.01219 11.2415 2.22969 11.4965 2.66385 12.0065C2.83719 12.209 2.92385 12.3107 2.99635 12.419C3.16302 12.6673 3.27802 12.9465 3.33635 13.2398C3.36135 13.3673 3.37219 13.5007 3.39302 13.7665C3.44635 14.434 3.47302 14.7682 3.57135 15.0465C3.68356 15.3648 3.8657 15.654 4.10437 15.8926C4.34304 16.1313 4.63218 16.3135 4.95052 16.4257C5.22885 16.524 5.56302 16.5507 6.23052 16.604C6.49635 16.6248 6.62969 16.6357 6.75719 16.6607C7.05052 16.719 7.32969 16.8348 7.57802 17.0007C7.68635 17.0732 7.78802 17.1598 7.99052 17.3332C8.50052 17.7673 8.75552 17.9848 9.02219 18.1123C9.63885 18.4065 10.3555 18.4065 10.9722 18.1123C11.2389 17.9848 11.4939 17.7673 12.0039 17.3332C12.2064 17.1598 12.308 17.0732 12.4164 17.0007C12.6647 16.834 12.9439 16.719 13.2372 16.6607C13.3647 16.6357 13.498 16.6248 13.7639 16.604C14.4314 16.5507 14.7655 16.524 15.0439 16.4257C15.3622 16.3135 15.6513 16.1313 15.89 15.8926C16.1287 15.654 16.3108 15.3648 16.423 15.0465C16.5214 14.7682 16.548 14.434 16.6014 13.7665C16.6222 13.5007 16.633 13.3673 16.658 13.2398C16.7164 12.9465 16.8322 12.6673 16.998 12.419C17.0705 12.3107 17.1572 12.209 17.3305 12.0065C17.7647 11.4965 17.9822 11.2415 18.1097 10.9748C18.4039 10.3582 18.4039 9.6415 18.1097 9.02483C17.9822 8.75816 17.7647 8.50316 17.3305 7.99316C17.2125 7.86164 17.1015 7.72394 16.998 7.58066C16.8313 7.33237 16.7157 7.05332 16.658 6.75983C16.6298 6.5854 16.6109 6.4096 16.6014 6.23316C16.548 5.56566 16.5214 5.2315 16.423 4.95316C16.3108 4.63482 16.1287 4.34569 15.89 4.10701C15.6513 3.86834 15.3622 3.6862 15.0439 3.574C14.7655 3.47566 14.4314 3.449 13.7639 3.39566C13.5874 3.38609 13.4116 3.36718 13.2372 3.339C12.9437 3.28135 12.6646 3.16576 12.4164 2.999C12.2731 2.89553 12.1354 2.78454 12.0039 2.6665C11.4939 2.23233 11.2389 2.01483 10.9722 1.88733C10.6678 1.74164 10.3346 1.66602 9.99719 1.66602C9.65973 1.66602 9.32657 1.74164 9.02219 1.88733C8.75552 2.01483 8.50052 2.23233 7.99052 2.6665ZM13.6414 8.219C13.7591 8.09009 13.8227 7.92073 13.8187 7.74616C13.8148 7.57159 13.7437 7.40526 13.6202 7.2818C13.4968 7.15833 13.3304 7.08722 13.1559 7.08329C12.9813 7.07935 12.8119 7.14289 12.683 7.26066L8.64135 11.3023L7.31135 9.97316C7.18245 9.85539 7.01308 9.79185 6.83852 9.79579C6.66395 9.79972 6.49762 9.87083 6.37415 9.9943C6.25068 10.1178 6.17958 10.2841 6.17564 10.4587C6.17171 10.6332 6.23524 10.8026 6.35302 10.9315L8.16135 12.7398C8.28853 12.8667 8.46085 12.938 8.64052 12.938C8.82019 12.938 8.99251 12.8667 9.11969 12.7398L13.6414 8.219Z"
                    fill="#24FF14" />
                </svg>
              </div>
              <div className="rating-link flex items-center text_gray_450 rating-link">
                <div className="award-icon shrink-0 flex items-center justify-center">
                  <img width="32" height="8" src="/frontend-assets/images/svgs/webflow.svg" alt="webflow"
                    decoding="async" fetchpriority="high" />
                </div>
                <p className="ff_inter fs_14 lh_16 text_gray_450">Reviewed on</p>
                <div className="arrow-wraper flex items-center justify-center">
                  <img width="18" height="18" src="/frontend-assets/images/svgs/navigation-arrow.svg"
                    alt="arrow" decoding="async" fetchpriority="high" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <img width="1441" height="677" className="object-cover w-full h-auto"
          src="/frontend-assets/images/about-group-image.webp" alt="group-image" decoding="async"
          fetchpriority="low" />
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div className="about-box flex flex-row md-flex-wrap">
            <div className="w-full img-wraper">
              <img className="max-w-full object-contain h-auto" width="390" height="391"
                src="/frontend-assets/images/about.webp" alt="" fetchpriority="low" />
            </div>
            <div>
              <div>
                <p className="fs_14 text_primary uppercase">
                  about
                </p>
                <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">
                  Who We Are as a Design Partner
                </h2>
                <p className="fs_14 lh_21 ff_inter text_gray_495" style={{ maxWidth: '570px' }}>
                  ZeeFrames is a specialized UI UX design agency with a focus on creating exceptional
                  digital
                  experiences. ZeeFrames is committed to delivering the best user experience possible for
                  your
                  business.
                </p>
              </div>
              <div className="team-cards flex flex-wrap">
                <div className="team-card grow">
                  <img width="32" height="32" src="/frontend-assets/images/svgs/team.svg" alt="team"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <h2 className="fs_18 lh_30 text_white fw_400" style={{ marginTop: '24px', marginBottom: '8px' }}>
                    Our Team
                  </h2>
                  <p className="fs_14 ff_inter lh_21 text_gray_495">Our team of expert UI UX designers has a
                    proven track record of creating innovative design solutions that transform
                    businesses across various industries and geographies.</p>
                </div>
                <div className="team-card grow">
                  <img width="32" height="32" src="/frontend-assets/images/svgs/client-centeric.svg"
                    alt="client-centric" loading="lazy" fetchpriority="low" decoding="async" />
                  <h2 className="fs_18 lh_30 text_white fw_400" style={{ marginTop: '24px', marginBottom: '8px' }}>
                    Client-Centric Design
                  </h2>
                  <p className="fs_14 ff_inter lh_21 text_gray_495">At ZeeFrames, our unique design approach
                    focuses on understanding client needs and collaborating to create exceptional,
                    goal-driven digital products.</p>
                </div>
                <div className="team-card grow">
                  <img width="32" height="32" src="/frontend-assets/images/svgs/testimonial.svg"
                    alt="testimonial" loading="lazy" fetchpriority="low" decoding="async" />
                  <h2 className="fs_18 lh_30 text_white fw_400" style={{ marginTop: '24px', marginBottom: '8px' }}>
                    Testimonials Showcase
                  </h2>
                  <p className="fs_14 ff_inter lh_21 text_gray_495">Don’t just take our word for it—see what
                    satisfied clients say. Explore testimonials and case studies showcasing how our
                    design solutions help businesses achieve their goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div style={{ maxWidth: '981px' }}>
            <p className="fs_14 text_primary uppercase">
              Our Mission
            </p>
            <p className="zeeframes-strive fs_32 lh_46 fw_300" id="animatedText">ZeeFrames strives to be a leading
              UI UX
              design agency known for innovative solutions that deliver
              exceptional user experiences and drive business
              growth. We blend creativity and
              user-centered
              design to craft intuitive, standout products and partner with clients to achieve lasting
              impact.
            </p>
          </div>
          <div className="mt-80 flex md-flex-wrap justify-between" style={{ gap: '32px' }}>
            <p className="fs_14 lh_normal uppercase fs_400">Since 2020, what we get...</p>
            <div className="mission-grid">
              <div className="mission-card flex flex-col justify-end relative">
                <img className="absolute top-0 -z-1" style={{ right: '26px' }} width="87" height="121"
                  src="/frontend-assets/images/svgs/flame.svg" alt="flame" loading="lazy"
                  fetchpriority="low" decoding="async" />
                <h2 className="mission-title ws_700 lh_normal ff_inter counter" data-target="1200">0+</h2>
                <p className="mission-text ff_inter lh_normal">Successful Projects</p>
              </div>
              <div className="mission-card flex flex-col justify-end relative">
                <img className="absolute top-0 -z-1" style={{ right: '9px' }} width="121" height="121"
                  src="/frontend-assets/images/svgs/repeated-clients.svg" alt="repeated-clients"
                  loading="lazy" fetchpriority="low" decoding="async" />
                <h2 className="mission-title ws_700 lh_normal ff_inter counter" data-target="200">0+</h2>
                <p className="mission-text ff_inter lh_normal">Repeated Clients</p>
              </div>
              <div className="mission-card flex flex-col justify-end relative">
                <img className="absolute top-0 -z-1" style={{ right: '10px' }} width="101" height="101"
                  src="/frontend-assets/images/svgs/user-circle.svg" alt="user-circle" loading="lazy"
                  fetchpriority="low" decoding="async" />
                <h2 className="mission-title ws_700 lh_normal ff_inter counter" data-target="30">0+</h2>
                <p className="mission-text ff_inter lh_normal">UX Experts</p>
              </div>
              <div className="mission-card flex flex-col justify-end relative">
                <img className="absolute top-0 -z-1" style={{ right: '9px' }} width="121" height="121"
                  src="/frontend-assets/images/svgs/smile.svg" alt="smile" loading="lazy"
                  fetchpriority="low" decoding="async" />
                <h2 className="mission-title ws_700 lh_normal ff_inter counter" data-target="4.8">0+</h2>
                <p className="mission-text ff_inter lh_normal">Stars On Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div className="mx-auto text-center capitalize" style={{ maxWidth: '570px' }}>
            <p className="fs_14 text_primary uppercase">
              our culture
            </p>
            <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">
              How our team blends UI UX, branding, and no-code
            </h2>
            <p className="fs_14 lh_21 ff_inter text_gray_495">
              We believe in clear communication, proactive problem solving, and full transparency..
            </p>
          </div>
        </div>
        <div className="team-slider overflow-hidden">
          <div className="mt-64 team-slide-track team-wraper sm_mt_32 flex">
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-1.webp" alt="member-1" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-2.webp" alt="member-2" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-3.webp" alt="member-3" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-4.webp" alt="member-4" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-5.webp" alt="member-5" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-1.webp" alt="member-1" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-2.webp" alt="member-2" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-3.webp" alt="member-3" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-4.webp" alt="member-4" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>
            <div className="team-member shrink-0 team-slide grow">
              <img className="w-full h-auto object-cover" width="282" height="360"
                src="/frontend-assets/images/about-member-5.webp" alt="member-5" loading="lazy"
                fetchpriority="low" decoding="async" />
            </div>

          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div style={{ maxWidth: '981px' }}>
            <p className="fs_14 text_primary uppercase">
              our value
            </p>
            <p className="zeeframes-strive fs_32 lh_46 fw_300" id="animatedText2">Together, we make perfect
              partners. We
              offer worry-free partnerships and deliver your vision into
              reality with our top-tier creativity. No
              fluff, just the good stuff.
            </p>
          </div>
          <div className="mt-80 values-container flex">
            <ul className="values-list w-full value-listing flex flex-col">
              <li className="flex md-flex-wrap items-center justify-between value-item">
                <div className="value-counter-wraper flex items-center">
                  <span className="fs_18 ff_inter text_white flex" style={{ paddingTop: '7px' }}>01</span>
                  <div className="flex items-center">
                    <img className="value-icon" src="/frontend-assets/images/about-crafted.webp" alt="icon"
                      width="58" height="58" loading="lazy" fetchpriority="low" decoding="async" />
                    <p className="value-title lh_normal text_white">Crafted, not copied</p>
                  </div>
                </div>
                <div className="value-content">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    No two problems are exactly alike, that’s why we believe every project deserves a
                    specific tailored solution, including yours.</p>
                </div>
              </li>
              <li className="flex md-flex-wrap items-center justify-between value-item">
                <div className="value-counter-wraper flex items-center">
                  <span className="fs_18 ff_inter text_white flex" style={{ paddingTop: '7px' }}>02</span>
                  <div className="flex items-center">
                    <img className="value-icon"
                      src="/frontend-assets/images/about-seamless-collaboration.webp" alt="icon"
                      width="58" height="58" loading="lazy" fetchpriority="low" decoding="async" />
                    <p className="value-title lh_normal text_white">Seamless collaboration</p>
                  </div>
                </div>
                <div className="value-content">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    We ensure all the deliverables are met timely because we love smooth-sailing
                    projects. Our project managers are always ready to discuss and provide updates for
                    you.</p>
                </div>
              </li>
              <li className="flex md-flex-wrap items-center justify-between value-item">
                <div className="value-counter-wraper flex items-center">
                  <span className="fs_18 ff_inter text_white flex" style={{ paddingTop: '7px' }}>03</span>
                  <div className="flex items-center">
                    <img className="value-icon" src="/frontend-assets/images/about-stay-flexible.webp"
                      alt="icon" width="58" height="58" loading="lazy" fetchpriority="low"
                      decoding="async" />
                    <p className="value-title lh_normal text_white">Stay flexible</p>
                  </div>
                </div>
                <div className="value-content">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    Just like cats, we are flexible. We remain adaptable to any urgent needs or changes
                    as your project evolves.</p>
                </div>
              </li>
              <li className="flex md-flex-wrap items-center justify-between value-item">
                <div className="value-counter-wraper flex items-center">
                  <span className="fs_18 ff_inter text_white flex" style={{ paddingTop: '7px' }}>04</span>
                  <div className="flex items-center">
                    <img className="value-icon" src="/frontend-assets/images/about-transparent-pricing.webp"
                      alt="icon" width="58" height="58" loading="lazy" fetchpriority="low"
                      decoding="async" />
                    <p className="value-title lh_normal text_white">Transparent pricing</p>
                  </div>
                </div>
                <div className="value-content">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    We provide a clear breakdown of invoices, so no hidden fees! Whether you do
                    project-based or recurring partnership, you can cancel anytime.</p>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </section>
      <section>
        <div className="bg-black py_80 sm_py_48 sm_pb_32 sticky_section_header">
          <div className="container">
            <div className="mx-auto text-center" style={{ maxWidth: '436px' }}>
              <p className="fs_14 text_primary uppercase">
                our team
              </p>
              <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">
                Principles that guide our design decisions
              </h2>
              <p className="fs_14 lh_21 ff_inter text_gray_495">
                Rest assured. Your project is in good hands.
              </p>
            </div>
          </div>
        </div>
        <div className="pb_80 sm_pb_48 relative teams-section" style={{ zIndex: '3' }}>
          <div className="container">
            <div className="team-box flex flex-col">
              <div className="team-container flex md-flex-wrap">
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-nasir.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Nasir Ali</p>
                    <p className="fs_16 lh_21 ff_inter role">CEO & Founder</p>
                  </div>
                </div>
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-ali.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Mohammad Ali</p>
                    <p className="fs_16 lh_21 ff_inter role">Sales Director</p>
                  </div>
                </div>
              </div>
              <div className="team-container flex md-flex-wrap">
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-babar.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Muhammad Babar</p>
                    <p className="fs_16 lh_21 ff_inter role">Design Director</p>
                  </div>
                </div>
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-umar.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Umar Islam</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Design Lead</p>
                  </div>
                </div>
              </div>
              <div className="team-container flex md-flex-wrap">
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-nashra.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Nashra Maqsood</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-gohar.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Goher Ayub</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="team-container flex md-flex-wrap">
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-abdullah.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Rao Abdullah</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-maryam.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Mariam Hashmi</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-mubashir.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Rana Mubashir</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="team-container flex md-flex-wrap">
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-yousaf.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Muhammad Yousaf</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-mustafa.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Mustafa Afridi</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
                <div className="team-member-card overflow-hidden">
                  <img className="member-img object-cover" width="310" height="360"
                    src="/frontend-assets/images/about-bilal.webp" alt="Muhammad Baber" />
                  <div className="flex items-center justify-between" style={{ marginTop: '16px' }}>
                    <p className="fs_16 lh_21 ff_inter text_white">Bilal Younas</p>
                    <p className="fs_16 lh_21 ff_inter role">UI UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_48 bg-black">
        <div className="container">
          <div className="rating-container flex md-flex-wrap items-center justify-center">
            <div className="rating-item">
              <div className="flex items-center justify-between" style={{ gap: '12px' }}>
                <p className="fs_16 lh_16 ff_inter text_gray_450">Reviewed on</p>
                <div style={{ marginTop: '4px' }}>
                  <img width="16" height="16" src="/frontend-assets/images/svgs/red-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/red-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/red-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/red-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/red-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                </div>
              </div>
              <div className="flex items-center justify-between" style={{ gap: '12px', marginTop: '13px' }}>
                <img width="99" height="28" src="/frontend-assets/images/svgs/clutch-large.svg" alt="Clutch"
                  loading="lazy" fetchpriority="low" decoding="async" />
                <p className="fs_16 lh_16 ff_inter text_gray_450">41 Reviews</p>
              </div>
            </div>
            <div className="rating-item">
              <div className="flex items-center justify-between" style={{ gap: '12px' }}>
                <p className="fs_16 lh_16 ff_inter text_gray_450">Reviewed on</p>
                <div style={{ marginTop: '4px' }}>
                  <img width="16" height="16" src="/frontend-assets/images/svgs/blue-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/blue-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/blue-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/blue-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/blue-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                </div>
              </div>
              <div className="flex items-center justify-between" style={{ gap: '12px', marginTop: '13px' }}>
                <img width="99" height="15" src="/frontend-assets/images/svgs/goodfirms-large.svg"
                  alt="Goodfirms" loading="lazy" fetchpriority="low" decoding="async" />
                <p className="fs_16 lh_16 ff_inter text_gray_450">41 Reviews</p>
              </div>
            </div>
            <div className="rating-item">
              <div className="flex items-center justify-between" style={{ gap: '12px' }}>
                <p className="fs_16 lh_16 ff_inter text_gray_450">Reviewed on</p>
                <div style={{ marginTop: '4px' }}>
                  <img width="16" height="16" src="/frontend-assets/images/svgs/green-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/green-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/green-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/green-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                  <img width="16" height="16" src="/frontend-assets/images/svgs/green-star.svg" alt="Star"
                    loading="lazy" fetchpriority="low" decoding="async" />
                </div>
              </div>
              <div className="flex items-center justify-between" style={{ gap: '12px', marginTop: '13px' }}>
                <img width="99" height="29" src="/frontend-assets/images/svgs/upwork-large.svg" alt="Upwork"
                  loading="lazy" fetchpriority="low" decoding="async" />
                <p className="fs_16 lh_16 ff_inter text_gray_450">41 Reviews</p>
              </div>
            </div>
          </div>
          <div className="primary-box mx-auto flex md-flex-wrap justify-center items-center">
            <div className="review-item flex sm-flex-col items-center justify-center">
              <h2 className="review-title ff_inter lh_normal">224</h2>
              <p className="fs_16 lh_24 ff_inter review-text">Reviews on 3 platforms</p>
            </div>
            <div className="review-item flex sm-flex-wrap items-center justify-center">
              <h2 className="review-title ff_inter lh_normal">4.9</h2>
              <div>
                <img width="24" height="24" src="/frontend-assets/images/svgs/black-star.svg" alt="Star"
                  loading="lazy" fetchpriority="low" decoding="async" />
                <img width="24" height="24" src="/frontend-assets/images/svgs/black-star.svg" alt="Star"
                  loading="lazy" fetchpriority="low" decoding="async" />
                <img width="24" height="24" src="/frontend-assets/images/svgs/black-star.svg" alt="Star"
                  loading="lazy" fetchpriority="low" decoding="async" />
                <img width="24" height="24" src="/frontend-assets/images/svgs/black-star.svg" alt="Star"
                  loading="lazy" fetchpriority="low" decoding="async" />
                <img width="24" height="24" src="/frontend-assets/images/svgs/black-star.svg" alt="Star"
                  loading="lazy" fetchpriority="low" decoding="async" />
              </div>
              <p className="fs_16 lh_24 ff_inter review-text">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
