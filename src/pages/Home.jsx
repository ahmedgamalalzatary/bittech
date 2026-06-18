import { useEffect } from 'react'
import './Home.css'

export default function Home() {
  // Replicates the inline interactivity from index2.html (cursor trail + bubbles,
  // FAQ accordion, process-scroll image swap) and its country-dropdown script.
  useEffect(() => {
    const cleanups = []

    // ----------- Accordion -----------
    const accordions = Array.from(document.querySelectorAll('.accordion'))
    accordions.forEach((accordion) => {
      const button = accordion.querySelector('button')
      if (!button) return
      const onClick = () => {
        requestAnimationFrame(() => {
          accordions.forEach((item) => {
            if (item !== accordion) item.classList.remove('active')
          })
          accordion.classList.toggle('active')
        })
      }
      button.addEventListener('click', onClick)
      cleanups.push(() => button.removeEventListener('click', onClick))
    })

    // ----------- Process scroll (active item + image swap) -----------
    const serviceContent = document.querySelector('.services-content')
    const serviceItems = Array.from(document.querySelectorAll('.service-item'))
    const imageWrapper = document.querySelector('.image-wraper img')
    const serviceImages = [
      'https://zeeframes.com/frontend-assets/images/home-process-1.webp',
      'https://zeeframes.com/frontend-assets/images/home-process-2.webp',
      'https://zeeframes.com/frontend-assets/images/home-process-3.webp',
      'https://zeeframes.com/frontend-assets/images/home-process-4.webp',
      'https://zeeframes.com/frontend-assets/images/home-process-5.webp',
      'https://zeeframes.com/frontend-assets/images/home-process-6.webp',
    ]
    let scrollPending = false
    const handleScroll = () => {
      if (scrollPending) return
      scrollPending = true
      requestAnimationFrame(() => {
        const rect = serviceContent
          ? serviceContent.getBoundingClientRect()
          : { top: Infinity, bottom: -Infinity, height: 0 }
        const startTrigger = window.innerHeight * 0.6
        const itemsRects = serviceItems.map((i) => i.getBoundingClientRect())
        const activeStates = itemsRects.map((r) => r.top < startTrigger && r.bottom > 0)
        const activeIndex = activeStates.lastIndexOf(true)
        const scrolledPx = Math.min(startTrigger - rect.top, rect.height)
        const scrollHeightValue =
          rect.top < startTrigger && rect.bottom > 0 ? `${scrolledPx}px` : '0px'

        serviceItems.forEach((item, i) => item.classList.toggle('active', activeStates[i]))
        if (activeIndex !== -1 && imageWrapper && !imageWrapper.src.includes(serviceImages[activeIndex])) {
          imageWrapper.src = serviceImages[activeIndex]
        }
        if (serviceContent) serviceContent.style.setProperty('--scroll-height', scrollHeightValue)
        scrollPending = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', handleScroll))
    handleScroll()

    // ----------- Cursor circle + bubble trail -----------
    const cursorCircle = document.querySelector('.cursor-circle')
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0
    const bubbleGap = 80
    let lastBubbleX = 0, lastBubbleY = 0, lastBubbleTime = 0
    const bubbleInterval = 100

    const createBubble = (x, y) => {
      const bubble = document.createElement('div')
      bubble.classList.add('bubble')
      bubble.style.left = `${x}px`
      bubble.style.top = `${y}px`
      document.body.appendChild(bubble)
      setTimeout(() => bubble.remove(), 900)
    }
    const onMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      targetX = x
      targetY = y
      const dx = x - lastBubbleX
      const dy = y - lastBubbleY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const now = performance.now()
      if (distance > bubbleGap && now - lastBubbleTime > bubbleInterval) {
        createBubble(x, y)
        lastBubbleX = x
        lastBubbleY = y
        lastBubbleTime = now
      }
    }
    document.addEventListener('mousemove', onMouseMove)
    cleanups.push(() => document.removeEventListener('mousemove', onMouseMove))

    let rafId
    const animateCircle = () => {
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15
      if (cursorCircle) cursorCircle.style.transform = `translate(${currentX - 40}px, ${currentY - 40}px)`
      rafId = requestAnimationFrame(animateCircle)
    }
    animateCircle()
    cleanups.push(() => cancelAnimationFrame(rafId))

    // ----------- Country dropdown -----------
    const wrapper = document.getElementById('countryWrapper')
    const dropdown = document.getElementById('countryDropdownPanel')
    const trigger = document.getElementById('countryTrigger')
    const valueInput = document.getElementById('countryValue')
    const searchInput = document.getElementById('countrySearch')
    const list = document.getElementById('countryDropdown')
    const chevron = document.getElementById('countryChevron')

    if (wrapper && dropdown && trigger && valueInput && searchInput && list && chevron) {
      const onTriggerClick = (e) => {
        e.stopPropagation()
        dropdown.style.display = 'block'
        chevron.style.transform = 'translateY(-50%) rotate(180deg)'
      }
      const onDropdownClick = (e) => e.stopPropagation()
      const onListClick = (e) => {
        if (e.target.tagName === 'LI') {
          trigger.value = e.target.textContent
          valueInput.value = e.target.getAttribute('data-value')
          dropdown.style.display = 'none'
          chevron.style.transform = 'translateY(-50%) rotate(0deg)'
        }
      }
      const onSearch = () => {
        const search = searchInput.value.toLowerCase()
        list.querySelectorAll('li').forEach((item) => {
          item.style.display = item.textContent.toLowerCase().includes(search) ? 'block' : 'none'
        })
      }
      const onDocClick = (e) => {
        if (!wrapper.contains(e.target)) {
          dropdown.style.display = 'none'
          chevron.style.transform = 'translateY(-50%) rotate(0deg)'
        }
      }
      trigger.addEventListener('click', onTriggerClick)
      dropdown.addEventListener('click', onDropdownClick)
      list.addEventListener('click', onListClick)
      searchInput.addEventListener('input', onSearch)
      document.addEventListener('click', onDocClick)
      cleanups.push(() => {
        trigger.removeEventListener('click', onTriggerClick)
        dropdown.removeEventListener('click', onDropdownClick)
        list.removeEventListener('click', onListClick)
        searchInput.removeEventListener('input', onSearch)
        document.removeEventListener('click', onDocClick)
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="content-wraper flex items-center">
            <div className="content mx-auto relative">
              <div className="star-wrapper">
                <img width="73" height="80" src="/frontend-assets/images/svgs/hero-star.svg" alt="start"
                  fetchpriority="high" decoding="async" />
              </div>
              <img className="bubble-img sm-hidden" src="/frontend-assets/images/home-bubble.webp" alt="bubble"
                width="435" height="429" fetchpriority="high" decoding="async" />
              <img className="bubble-img hidden sm-block" src="/frontend-assets/images/home-bubble-mobile.webp"
                alt="bubble" width="176" height="174" fetchpriority="high" decoding="async" />
              <h1 className="main-heading text_white text-center mt-48 sm-mt-32 relative fw_800 uppercase">
                Creative Intelligence
                <sup className="no-code uppercase fs_12 lh_normal text_black_300 sm-hidden">No Code</sup>
                in Every Pixel
              </h1>
              <p
                className="text_white text-center fs_20 lh_normal ff_inter capitalize mt-12 sm-max-w-319 mx-auto">
                We craft <span className="text_primary">stunning</span> designs for
                businesses worldwide.
              </p>
              <div className="flex mt-48 sm-mt-24 justify-center" style={{ gap: '20px' }}>
                <a href="https://calendly.com/contact-zeeframes/30min?month=2025-11" target="_blank"
                  className="btn-component btn-light btn-slide-in relative overflow-hidden ff_inter">
                  <span className="default-text absolute">Schedule Call</span>
                  <span className="hover-content absolute flex items-center w-full justify-start"
                    style={{ gap: '16px', padding: '0 3px' }}>
                    <img src="/frontend-assets/images/svgs/lets-talk.svg" alt="Avatar" />
                    <span className="hover-text">Lets Talk 🤙</span>
                  </span>
                </a>
                <a href="https://www.figma.com/proto/Wvc5EAdw0leAMdlJ3tF6Be/ZeeFrames-Portfolio-New-Branding?page-id=0%3A1&node-id=1653-10&viewport=-98%2C1247%2C0.16&t=I70aaK7I2yFjTlya-1&scaling=scale-down&content-scaling=fixed"
                  target="_blank"
                  className="btn-component btn-outlined anim-translate overflow-hidden relative ff_inter">
                  <span className="anim-translate-content">© 2025 Work</span>
                  <span className="anim-translate-slice absolute flex items-center" style={{ gap: '8px' }}>
                    Open
                    <span className="hover-icon mt-10">
                      {/* Yellow hover SVG icon */}
                      <svg style={{ marginTop: '5px' }} xmlns="http://www.w3.org/2000/svg" width="20"
                        height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61929 13.8807 7.5 12.5 7.5C11.1193 7.5 10 8.61929 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
                          stroke="#FFE800" strokeWidth="1.5" strokeLinejoin="round" />
                        <path
                          d="M7.5 17.5C8.88075 17.5 10 16.3807 10 15V12.5H7.5C6.11929 12.5 5 13.6192 5 15C5 16.3807 6.11929 17.5 7.5 17.5Z"
                          stroke="#FFE800" strokeWidth="1.5" strokeLinejoin="round" />
                        <path
                          d="M10 7.5V12.5H7.5C6.11929 12.5 5 11.3807 5 10C5 8.61925 6.11929 7.5 7.5 7.5H10Z"
                          stroke="#FFE800" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M10 2.5V7.5H7.5C6.11929 7.5 5 6.38071 5 5C5 3.61929 6.11929 2.5 7.5 2.5H10Z"
                          stroke="#FFE800" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M10 2.5V7.5H12.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5H10Z"
                          stroke="#FFE800" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="trusted-partners-wraper overflow-hidden">
          <div className="container overflow-hidden">
            <p className="text-center ff_inter fs_14 fw_500 lh_normal uppercase">
              Trusted by Industry Leaders & Fast-Growing Startups
            </p>
            <div className="main-animate grid items-center mt-24">
              <div className="slider m-auto relative w-full grid items-center">
                <div className="slide-track flex">
                  <div className="slide flex items-center">
                    <img width="138" height="32" src="/frontend-assets/images/svgs/trafilea.svg"
                      alt="trafilea" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="152" height="32" src="/frontend-assets/images/svgs/yallaMotor.svg"
                      alt="yallaMotor" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="198" height="32" src="/frontend-assets/images/svgs/repurpose.svg"
                      alt="repurpose" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="56" height="40" src="/frontend-assets/images/svgs/adiqat.svg"
                      alt="adiqat" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="198" height="32" src="/frontend-assets/images/svgs/repurpose.svg"
                      alt="repurpose" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="56" height="40" src="/frontend-assets/images/svgs/adiqat.svg"
                      alt="adiqat" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="138" height="32" src="/frontend-assets/images/svgs/trafilea.svg"
                      alt="trafilea" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img src="/frontend-assets/images/svgs/yallaMotor.svg" alt="yallaMotor" width="152"
                      height="32" decoding="async" />
                  </div>

                  <div className="slide flex items-center">
                    <img src="/frontend-assets/images/svgs/repurpose.svg" alt="repurpose" width="198"
                      height="32" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img src="/frontend-assets/images/svgs/adiqat.svg" alt="adiqat" width="56"
                      height="40" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="138" height="32" src="/frontend-assets/images/svgs/trafilea.svg"
                      alt="trafilea" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="152" height="32" src="/frontend-assets/images/svgs/yallaMotor.svg"
                      alt="yallaMotor" decoding="async" />
                  </div>

                  <div className="slide flex items-center">
                    <img width="198" height="32" src="/frontend-assets/images/svgs/repurpose.svg"
                      alt="repurpose" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="56" height="40" src="/frontend-assets/images/svgs/adiqat.svg"
                      alt="adiqat" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="198" height="32" src="/frontend-assets/images/svgs/repurpose.svg"
                      alt="repurpose" decoding="async" />
                  </div>
                  <div className="slide flex items-center">
                    <img width="56" height="40" src="/frontend-assets/images/svgs/adiqat.svg"
                      alt="adiqat" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py_80 sm_py_32 relative behind-cursor" style={{ backgroundColor: 'var(--color-black-300)' }}>
        <div className="container">
          <div className="pt_80 sm_pt_0">
            <div className="text-center">
              <p className="fs_14 text_primary uppercase">WE are great at</p>
              <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">
                UI UX Design and Product Experience Services
              </h2>
              <p className="fs_14 lh_21 ff_inter text_gray_495">
                Designs with Exceptional User Experiences
              </p>
            </div>
            <div className="services-wraper grid md_grid-cols-2 mt_64 sm_mt_32">
              <a href="services/ui-ux-design" className="service-card relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="fs_18 sm_fs_16 lh_27 ff_inter text_white uppercase servic-text ff_inter">
                      FOR DIGITAL EXPERIENCES
                    </p>
                    <h3 className="fs_28 sm_fs_22 lh_normal text_white servic-title">
                      UI UX Design
                    </h3>
                  </div>
                  <div className="arrow-box shrink-0 flex items-center justify-center"
                    aria-label="Read more about our UI UX Design service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path d="M14.5833 5.41663L5 15" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66663 5H15V13.3333" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="services/product-revamp" className="service-card relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="fs_18 sm_fs_16 lh_27 ff_inter text_white uppercase servic-text ff_inter">
                      For Startups & Existing Companies
                    </p>
                    <h3 className="fs_28 sm_fs_22 lh_normal text_white servic-title">
                      Product Revamp
                    </h3>
                  </div>
                  <div className="arrow-box shrink-0 flex items-center justify-center"
                    aria-label="Read more about our Product Revamp service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path d="M14.5833 5.41663L5 15" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66663 5H15V13.3333" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="services/brand-design" className="service-card relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="fs_18 sm_fs_16 lh_27 ff_inter text_white uppercase servic-text ff_inter">
                      FOR VISUAL STORYTELLERS
                    </p>
                    <h3 className="fs_28 sm_fs_22 lh_normal text_white servic-title">
                      Brand Design
                    </h3>
                  </div>
                  <div className="arrow-box shrink-0 flex items-center justify-center"
                    aria-label="Read more about our Brand Design service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path d="M14.5833 5.41663L5 15" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66663 5H15V13.3333" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="services/no-code-development" className="service-card relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="fs_18 sm_fs_16 lh_27 ff_inter text_white uppercase servic-text ff_inter">
                      FOR RAPID APP BUILDERS
                    </p>
                    <h3 className="fs_28 sm_fs_22 lh_normal text_white servic-title">
                      No Code Development
                    </h3>
                  </div>
                  <div className="arrow-box shrink-0 flex items-center justify-center"
                    aria-label="Read more about our No Code Development service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path d="M14.5833 5.41663L5 15" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66663 5H15V13.3333" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="services/mvp-design" className="service-card relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="fs_18 sm_fs_16 lh_27 ff_inter text_white uppercase servic-text ff_inter">
                      FOR STARTUPS & FOUNDERS
                    </p>
                    <h3 className="fs_28 sm_fs_22 lh_normal text_white servic-title">
                      MVP Design
                    </h3>
                  </div>
                  <div className="arrow-box shrink-0 flex items-center justify-center"
                    aria-label="Read more about our Brand Design service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path d="M14.5833 5.41663L5 15" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66663 5H15V13.3333" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
              <a href="services/team-extension" className="service-card relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="fs_18 sm_fs_16 lh_27 ff_inter text_white uppercase servic-text ff_inter">
                      Dedicated ux ui Team
                    </p>
                    <h3 className="fs_28 sm_fs_22 lh_normal text_white servic-title">
                      Team Extension
                    </h3>
                  </div>
                  <div className="arrow-box shrink-0 flex items-center justify-center"
                    aria-label="Read more about our Brand Design service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path d="M14.5833 5.41663L5 15" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.66663 5H15V13.3333" stroke="#9D9D9D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_32 relative behind-cursor" style={{ backgroundColor: 'var(--color-black-300)' }}>
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '596px' }}>
            <p className="fs_14 text_primary uppercase">
              how we helped others succeed
            </p>
            <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">
              Our Creative Showcase
            </h2>
            <p className="fs_14 lh_21 ff_inter text_gray_495">
              We have become experts in creating top-notch digital products. We
              design beautifully and develop excellently. And we care deeply
              about what we do.
            </p>
          </div>

          <div className="mt_64 sm_mt_32 grid md_grid-cols-2 portfolio">
            <div className="portfolio-card">
              <div className="portfolio-thumbnail overflow-hidden">
                <img className="w-full h-full object-cover" width="600" height="685" src="/storage/280/3.png"
                  alt="All-in-one dashboard to manage gigs, tours, venues, and payrolls."
                  loading="lazy" />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>Gig Desk</p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    All-in-one dashboard to manage gigs, tours, venues, and payrolls.
                  </h3>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-thumbnail overflow-hidden">
                <img className="w-full h-full object-cover" width="600" height="685" src="/storage/278/2.png"
                  alt="Real-time shipment tracking and delivery management at your fingertips"
                  loading="lazy" />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>Ship Track
                  </p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    Real-time shipment tracking and delivery management at your fingertips
                  </h3>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-thumbnail overflow-hidden">
                <img className="w-full h-full object-cover" width="600" height="685" src="/storage/277/1-(2).png"
                  alt="Discover and book the world&#039;s finest luxury villas with ease"
                  loading="lazy" />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>Villa Vault
                  </p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    Discover and book the world&#039;s finest luxury villas with ease
                  </h3>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-thumbnail overflow-hidden">
                <img className="w-full h-full object-cover" width="600" height="685"
                  src="/storage/275/Rectangle-6338.png"
                  alt="Empowering communities with financial solutions." loading="lazy" />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>Bloom Money
                  </p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    Empowering communities with financial solutions.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="book-discovery-call">
            <div className="text-center mx-auto" style={{ maxWidth: '494px' }}>
              <h2 className="fs_24 lh_normal fw_600 text_white">
                Your project here
              </h2>
              <p className="fs_15 sm_fs_14 lh_normal ff_inter text_gray_495"
                style={{ marginTop: '16px', marginBottom: '24px' }}>
                The proof is in our work. Check out
                <a href="work" className="text_primary" style={{ textDecoration: 'underline' }}>our case studies</a>
                to learn how our product development services can transform your
                business.
              </p>
              <div className="flex justify-center mx-auto">
                <a href="https://calendly.com/contact-zeeframes/30min?month=2025-11" target="_blank"
                  className="btn-component btn-primary w-fit mx-auto btn-animate-swap overflow-hidden relative ff_inter">
                  <span className="work-us">Book a discovery call</span>
                  <svg className="hover-opacity-0 shrink-0" xmlns="http://www.w3.org/2000/svg" width="21"
                    height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M15.0833 5.41667L5.5 15" stroke="#0D0D0D" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.16663 5H15.5V13.3333" stroke="#0D0D0D" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="lets-talk absolute">Lets Talk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py_80 sm_py_32">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '596px' }}>
            <p className="fs_14 text_primary uppercase">
              Our process, Your Advantage
            </p>
            <h2 className="fs_40 sm_fs_28 lh_40 fw_700 text_white section-heading">
              From Idea To Execution
            </h2>
            <p className="fs_14 lh_21 ff_inter text_gray_495">
              We have become experts in creating top-notch digital products. We
              design beautifully and develop excellently. And we care deeply
              about what we do.
            </p>
          </div>

          <div className="mt_64 sm_mt_32">
            <div className="flex justify-between gap-80 relative">
              <div className="services-content relative w-full" style={{ maxWidth: '609px', paddingLeft: '50px' }}>
                <ul className="services-listing list-unstyled flex flex-col">
                  <li className="service-item relative">
                    <h3 className="fs_36 sm_fs_20 sm_fw_700 fw_600 service-title">
                      <span className="hidden sm_block fs_16 fw_500" style={{ paddingRight: '6px' }}>01</span>
                      Discovery
                    </h3>
                    <h4 className="fs_18 sm_fs_16 service-tag ff_inter"
                      style={{ marginTop: '6px', marginBottom: '16px' }}>
                      Research & Domain Analysis
                    </h4>
                    <p className="fs_16 sm_fs_14 sm_lh_21 lh_24 ff_inter service-desc">
                      Don't ignore the crucial step of Research & Development in
                      the UX Design Process! Discover and solve user problems to
                      launch a successful product. Gather data on the target
                      audience and analyze customer feedback. Improve user
                      experience
                    </p>
                    <div className="hidden md_block overflow-hidden" style={{ marginTop: '24px', height: '188px', borderRadius: '16px' }}>
                      <img className="w-full h-full object-cover" width="327" height="185"
                        src="/frontend-assets/images/home-process-mob-1.webp" alt="service"
                        loading="lazy" decoding="async" />
                    </div>
                  </li>
                  <li className="service-item relative">
                    <h3 className="fs_36 sm_fs_20 sm_fw_700 fw_600 service-title">
                      <span className="hidden sm_block fs_16 fw_500" style={{ paddingRight: '6px' }}>02</span>
                      Flows
                    </h3>
                    <h4 className="fs_18 sm_fs_16 service-tag ff_inter"
                      style={{ marginTop: '6px', marginBottom: '16px' }}>
                      User Journey Map Sitemap
                    </h4>
                    <p className="fs_16 sm_fs_14 sm_lh_21 lh_24 ff_inter service-desc">
                      Create successful user flows for your product in the UX
                      design process by mapping user journeys and interactions.
                      Define product ideas and goals, tailored to user needs,
                      behavior, and expectations. Test with real users for
                      optimization.
                    </p>
                    <div className="hidden md_block overflow-hidden" style={{ marginTop: '24px', height: '188px', borderRadius: '16px' }}>
                      <img className="w-full h-full object-cover" width="327" height="185"
                        src="/frontend-assets/images/home-process-mob-2.webp" alt="service"
                        loading="lazy" decoding="async" />
                    </div>
                  </li>
                  <li className="service-item relative">
                    <h3 className="fs_36 sm_fs_20 sm_fw_700 fw_600 service-title">
                      <span className="hidden sm_block fs_16 fw_500" style={{ paddingRight: '6px' }}>03</span>
                      Wireframes
                    </h3>
                    <h4 className="fs_18 sm_fs_16 service-tag ff_inter"
                      style={{ marginTop: '6px', marginBottom: '16px' }}>
                      Low - Fidelity Design
                    </h4>
                    <p className="fs_16 sm_fs_14 sm_lh_21 lh_24 ff_inter service-desc">
                      Define the content and functionality of your product with
                      wireframes in the UX Design process. Brainstorm multiple
                      ideas, get feedback, and refine for high fidelity
                      wireframes. Enhance the user interface for a natural and
                      intuitive look.
                    </p>
                    <div className="hidden md_block overflow-hidden" style={{ marginTop: '24px', height: '188px', borderRadius: '16px' }}>
                      <img className="w-full h-full object-cover" width="327" height="185"
                        src="/frontend-assets/images/home-process-mob-3.webp" alt="service"
                        loading="lazy" decoding="async" />
                    </div>
                  </li>
                  <li className="service-item relative">
                    <h3 className="fs_36 sm_fs_20 sm_fw_700 fw_600 service-title">
                      <span className="hidden sm_block fs_16 fw_500" style={{ paddingRight: '6px' }}>04</span>
                      Mockups
                    </h3>
                    <h4 className="fs_18 sm_fs_16 service-tag ff_inter"
                      style={{ marginTop: '6px', marginBottom: '16px' }}>
                      High - Fidelity Design
                    </h4>
                    <p className="fs_16 sm_fs_14 sm_lh_21 lh_24 ff_inter service-desc">
                      Visualize your product's appearance with mockups in the UX
                      Design. Detailed design for every screen gets reviewed by
                      stakeholders and the design team. Get it tested with users
                      for improved design based on their needs and expectations.
                    </p>
                    <div className="hidden md_block overflow-hidden" style={{ marginTop: '24px', height: '188px', borderRadius: '16px' }}>
                      <img className="w-full h-full object-cover" width="327" height="185"
                        src="/frontend-assets/images/home-process-mob-4.webp" alt="service"
                        loading="lazy" decoding="async" />
                    </div>
                  </li>
                  <li className="service-item relative">
                    <h3 className="fs_36 sm_fs_20 sm_fw_700 fw_600 service-title">
                      <span className="hidden sm_block fs_16 fw_500" style={{ paddingRight: '6px' }}>05</span>
                      Prototyping
                    </h3>
                    <h4 className="fs_18 sm_fs_16 service-tag ff_inter"
                      style={{ marginTop: '6px', marginBottom: '16px' }}>
                      Interaction Design
                    </h4>
                    <p className="fs_16 sm_fs_14 sm_lh_21 lh_24 ff_inter service-desc">
                      UX Designers create clickable prototypes for your product
                      using tools like Invision to assess product functionality.
                      Gather user feedback and collaborate with development team
                      to create improved version of the design for
                      implementation.
                    </p>
                    <div className="hidden md_block overflow-hidden" style={{ marginTop: '24px', height: '188px', borderRadius: '16px' }}>
                      <img className="w-full h-full object-cover" width="327" height="185"
                        src="/frontend-assets/images/home-process-mob-5.webp" alt="service"
                        loading="lazy" decoding="async" />
                    </div>
                  </li>
                  <li className="service-item relative">
                    <h3 className="fs_36 sm_fs_20 sm_fw_700 fw_600 service-title">
                      <span className="hidden sm_block fs_16 fw_500" style={{ paddingRight: '6px' }}>06</span>
                      Testing
                    </h3>
                    <h4 className="fs_18 sm_fs_16 service-tag ff_inter"
                      style={{ marginTop: '6px', marginBottom: '16px' }}>
                      Usability Testing
                    </h4>
                    <p className="fs_16 sm_fs_14 sm_lh_21 lh_24 ff_inter service-desc">
                      UX designers focus on improving product usability by
                      testing with real users. Define the testing goals and
                      scenarios and recruit a target audience. Conduct usability
                      tests, analyze results, and make changes for optimal user
                      experience.
                    </p>
                    <div className="hidden md_block overflow-hidden" style={{ marginTop: '24px', height: '188px', borderRadius: '16px' }}>
                      <img className="w-full h-full object-cover" width="327" height="185"
                        src="/frontend-assets/images/home-process-mob-6.webp" alt="service"
                        loading="lazy" decoding="async" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="image-wraper md_hidden relative behind-cursor">
                <img className="max-w-full object-contain" style={{ borderRadius: '16px' }}
                  src="/frontend-assets/images/home-process-1.webp" width="527" height="506" alt="process"
                  loading="eager" decoding="async" fetchpriority="high" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-section relative behind-cursor" style={{ backgroundColor: 'var(--color-black-300)' }}>
        <div className="container">
          <div className="flex md-flex-wrap items-center" style={{ rowGap: '31px', columnGap: '60px' }}>
            <div className="w-full" style={{ maxWidth: '717px' }}>
              <h2 className="fs_70 sm_fs_28 sm_lh_42 lh_85 fw_700 text_white">
                Design That Thinks. Interfaces That Feel.
              </h2>
              <p className="sm_fs_16 sm_lh_25 fs_18 lh_30 ff_inter text_gray_495"
                style={{ marginTop: '16px', marginBottom: '36px', maxWidth: '665px' }}>
                At ZeeFrames, we craft AI-ready design systems for modern
                software responsive, scalable, and human-centered.
              </p>
              <a href="https://calendly.com/contact-zeeframes/30min?month=2025-11" target="_blank"
                className="btn-component btn-primary btn-animate-swap w-fit overflow-hidden relative ff_inter">
                <span className="work-us">See AI in Action</span>
                <svg className="work-us" xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                  viewBox="0 0 21 20" fill="none">
                  <path d="M15.0833 5.41667L5.5 15" stroke="#0D0D0D" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7.16663 5H15.5V13.3333" stroke="#0D0D0D" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="lets-talk absolute">Lets Talk</span>
              </a>
            </div>
            <div className="flex md-justify-center md-w-full">
              <img className="object-contain max-w-full h-auto" width="430" height="430"
                src="/frontend-assets/images/star.gif" alt="star" loading="lazy" fetchpriority="low" />
            </div>
          </div>
        </div>
      </section>

      <section className="py_80 sm_py_32 relative behind-cursor" style={{ backgroundColor: 'var(--color-black-300)' }}>
        <div className="container">
          <div className="flex md-flex-wrap" style={{ columnGap: '48px', rowGap: '32px' }}>
            <div className="w-full" style={{ maxWidth: '409px' }}>
              <span className="fs_14 uppercase text_primary">FAQs</span>
              <h2 className="fs_40 sm_fs_28 lh_40 fw_700 capitalize"
                style={{ marginTop: '32px', marginBottom: '12px' }}>
                Questions? We’ve Got Answers
              </h2>
              <p className="ff_inter fs_14 lh_21 text_gray_495">
                ZeeFrames reduces design complexity & speeds up product launches with clear UX workflows,
                scalable visual systems, and no-code execution.
              </p>
              <div className="flex sm-flex-wrap" style={{ gap: '32px', marginTop: '32px' }}>
                <a href="https://calendly.com/contact-zeeframes/30min?month=2025-11" target="_blank"
                  className="btn-component btn-animate-swap btn-light overflow-hidden relative ff_inter">
                  <span className="work-us">Book a free call</span>
                  <svg className="work-us" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20" fill="none">
                    <path d="M14.5833 5.41699L5 15.0003" stroke="#0D0D0D" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.66666 5H15V13.3333" stroke="#0D0D0D" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="lets-talk absolute">Lets Talk</span>
                </a>
                <div>
                  <img width="164" height="47" src="/frontend-assets/images/svgs/clutch-reviews.svg"
                    alt="clutch" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="accordions grow flex flex-col" style={{ gap: '16px' }}>
              <div className="accordion active">
                <button className="flex items-center w-full bg-transparent border-0">
                  <span className="grow text-start fs_16 lh_normal fw_500  text_white ff_geologica">What is UI
                    UX
                    design, and why
                    is it important?</span>

                  <span className="accordion-icon shrink-0 flex items-center justify-center">
                    <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M8 2.66699V13.3337" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.66663 8H13.3333" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="minus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M2.66663 8H13.3333" stroke="#515050" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="accordion-body">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    UX design, or user experience design, is designing digital
                    products that are easy to use and provide a positive
                    experience for the user. It is important because a good UX
                    design can increase user satisfaction, engagement, and
                    conversions.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="flex items-center w-full bg-transparent border-0">
                  <span className="grow text-start fs_16 lh_normal fw_500  text_white ff_geologica">What is
                    the UX
                    design process,
                    and how long does it
                    take?</span>

                  <span className="accordion-icon shrink-0 flex items-center justify-center">
                    <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M8 2.66699V13.3337" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.66663 8H13.3333" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="minus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M2.66663 8H13.3333" stroke="#515050" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="accordion-body">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    UI design, or user interface design, is the visual design of
                    digital products, including the layout, colors, typography,
                    and other elements. It differs from UX design, focusing more
                    on the product's aesthetic appeal and visual aspects. In
                    contrast, UX design focuses on the overall experience of the
                    user.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="flex items-center w-full bg-transparent border-0">
                  <span className="grow text-start fs_16 lh_normal fw_500  text_white ff_geologica">What types
                    of UX
                    design
                    services do you offer?</span>

                  <span className="accordion-icon shrink-0 flex items-center justify-center">
                    <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M8 2.66699V13.3337" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.66663 8H13.3333" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="minus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M2.66663 8H13.3333" stroke="#515050" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="accordion-body">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    We offer various UX design services, including UX research,
                    wireframing, prototyping, usability testing, and graphics
                    design. We work closely with our clients to understand their
                    unique needs and goals and provide customized solutions to
                    help them achieve their objectives.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="flex items-center w-full bg-transparent border-0">
                  <span className="grow text-start fs_16 lh_normal fw_500  text_white ff_geologica">How does
                    ZeeFrames UI UX Design
                    differ from other design
                    solutions?</span>

                  <span className="accordion-icon shrink-0 flex items-center justify-center">
                    <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M8 2.66699V13.3337" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.66663 8H13.3333" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="minus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M2.66663 8H13.3333" stroke="#515050" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="accordion-body">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    At ZeeFrames, we believe in the power of Human-Computer
                    Interaction and leverage it to make informed, data-driven
                    design decisions that set us apart from the competition. As
                    a leading UI UX design studio in Pakistan, we follow a
                    design strategy that begins with discovering the needs and
                    pain points of users and ends with real user testing for
                    direct feedback. This approach enables us to create
                    user-centric designs that enhance usability, accessibility,
                    and overall user satisfaction.
                  </p>
                  <p className="fs_16 lh_24 ff_inter text_gray_495" style={{ marginTop: '24px' }}>
                    Our design philosophy is simple: put users at the center of
                    everything we do. Whether it's UX research or designing User
                    Flows, Wireframing or Prototyping our team of expert UI UX
                    designers ensure that your users are considered in every
                    phase of designing to deliver outstanding results that meet
                    the unique needs of your business.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="flex items-center w-full bg-transparent border-0">
                  <span className="grow text-start fs_16 lh_normal fw_500  text_white ff_geologica">Are there
                    any
                    customer reviews
                    or case studies available
                    for ZeeFrames UI UX Design?</span>

                  <span className="accordion-icon shrink-0 flex items-center justify-center">
                    <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M8 2.66699V13.3337" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.66663 8H13.3333" stroke="#6D6D6D" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="minus-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M2.66663 8H13.3333" stroke="#515050" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="accordion-body">
                  <p className="fs_16 lh_24 ff_inter text_gray_495">
                    At ZeeFrames, we take pride in our customer reviews and case
                    studies that showcase our expertise in the UI UX design
                    industry. You can easily access them on our website to get a
                    glimpse of our work and the impact it has had on our
                    clients' businesses. As a top-class UI UX design firm, we
                    have worked with a diverse range of clients worldwide,
                    helping them create engaging and intuitive digital
                    experiences for their customers. With our expertise and
                    user-centered design approach, you can be rest assured as we
                    will take your website design to the next level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py_80 sm_py_32 relative behind-cursor">
        <div className="container">
          <div className="flex md-flex-wrap" style={{ rowGap: '32px', columnGap: '64px' }}>
            <div className="w-full" style={{ maxWidth: '636px' }}>
              <span className="fs_14 uppercase text_primary">Contact us</span>
              <h2 className="fs_40 sm_fs_28 lh_40 fw_700 capitalize"
                style={{ marginTop: '32px', marginBottom: '12px', maxWidth: '510px' }}>
                Let’s Build Something You’ll Be Proud Of
              </h2>

              <p className="ff_inter fs_14 lh_21 text_gray_495" style={{ maxWidth: '534px' }}>
                Have a project in mind? Whether you need a full UI/UX redesign, a new digital product, or a
                stronger online presence, our team is ready to help turn your ideas into reality.
              </p>
              <ul className="mt-32 list-unstyled flex flex-col" style={{ gap: '12px' }}>
                <li className="flex items-center fs_14 lh_21 ff_inter text_gray_495" style={{ gap: '8px' }}>
                  <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                    viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.0013 1.54102C5.0538 1.54102 1.04297 5.55185 1.04297 10.4993C1.04297 15.4468 5.0538 19.4577 10.0013 19.4577C14.9488 19.4577 18.9596 15.4468 18.9596 10.4993C18.9596 5.55185 14.9488 1.54102 10.0013 1.54102ZM6.2763 10.4743C6.15782 10.3639 6.00112 10.3038 5.8392 10.3067C5.67728 10.3096 5.52279 10.3752 5.40828 10.4897C5.29377 10.6042 5.22818 10.7587 5.22532 10.9206C5.22247 11.0825 5.28257 11.2392 5.39297 11.3577L7.89297 13.8577C8.01016 13.9747 8.16901 14.0405 8.33464 14.0405C8.50026 14.0405 8.65911 13.9747 8.7763 13.8577L14.6096 8.02435C14.72 7.90587 14.7801 7.74916 14.7773 7.58725C14.7744 7.42533 14.7088 7.27084 14.5943 7.15633C14.4798 7.04182 14.3253 6.97623 14.1634 6.97337C14.0015 6.97051 13.8448 7.03062 13.7263 7.14102L8.33464 12.5327L6.2763 10.4743Z"
                      fill="#BDBDBD" />
                  </svg>
                  You’ll hear from us within one business day.
                </li>
                <li className="flex items-center fs_14 lh_21 ff_inter text_gray_495" style={{ gap: '8px' }}>
                  <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                    viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.0013 1.54102C5.0538 1.54102 1.04297 5.55185 1.04297 10.4993C1.04297 15.4468 5.0538 19.4577 10.0013 19.4577C14.9488 19.4577 18.9596 15.4468 18.9596 10.4993C18.9596 5.55185 14.9488 1.54102 10.0013 1.54102ZM6.2763 10.4743C6.15782 10.3639 6.00112 10.3038 5.8392 10.3067C5.67728 10.3096 5.52279 10.3752 5.40828 10.4897C5.29377 10.6042 5.22818 10.7587 5.22532 10.9206C5.22247 11.0825 5.28257 11.2392 5.39297 11.3577L7.89297 13.8577C8.01016 13.9747 8.16901 14.0405 8.33464 14.0405C8.50026 14.0405 8.65911 13.9747 8.7763 13.8577L14.6096 8.02435C14.72 7.90587 14.7801 7.74916 14.7773 7.58725C14.7744 7.42533 14.7088 7.27084 14.5943 7.15633C14.4798 7.04182 14.3253 6.97623 14.1634 6.97337C14.0015 6.97051 13.8448 7.03062 13.7263 7.14102L8.33464 12.5327L6.2763 10.4743Z"
                      fill="#BDBDBD" />
                  </svg>
                  We’ll understand your goals and gather the right project details.
                </li>
                <li className="flex items-center fs_14 lh_21 ff_inter text_gray_495" style={{ gap: '8px' }}>
                  <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                    viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.0013 1.54102C5.0538 1.54102 1.04297 5.55185 1.04297 10.4993C1.04297 15.4468 5.0538 19.4577 10.0013 19.4577C14.9488 19.4577 18.9596 15.4468 18.9596 10.4993C18.9596 5.55185 14.9488 1.54102 10.0013 1.54102ZM6.2763 10.4743C6.15782 10.3639 6.00112 10.3038 5.8392 10.3067C5.67728 10.3096 5.52279 10.3752 5.40828 10.4897C5.29377 10.6042 5.22818 10.7587 5.22532 10.9206C5.22247 11.0825 5.28257 11.2392 5.39297 11.3577L7.89297 13.8577C8.01016 13.9747 8.16901 14.0405 8.33464 14.0405C8.50026 14.0405 8.65911 13.9747 8.7763 13.8577L14.6096 8.02435C14.72 7.90587 14.7801 7.74916 14.7773 7.58725C14.7744 7.42533 14.7088 7.27084 14.5943 7.15633C14.4798 7.04182 14.3253 6.97623 14.1634 6.97337C14.0015 6.97051 13.8448 7.03062 13.7263 7.14102L8.33464 12.5327L6.2763 10.4743Z"
                      fill="#BDBDBD" />
                  </svg>
                  You’ll receive a clear proposal with timeline, scope, and pricing.
                </li>
              </ul>
            </div>
            <div className="grow form-wraper">
              <form id="contactForm" data-action="https://zeeframes.com/contact-submit" className="flex flex-col"
                style={{ gap: '28px' }}>
                <div>
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="text" name="full_name" id="fullName" placeholder="Full Name*" required />
                </div>
                <div>
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="email" name="email" id="email" placeholder="Email Address*" required />
                </div>
                <div className="relative">
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="tel" name="phone" id="phone" placeholder="Phone Number*" required />
                </div>
                <div className="relative" id="countryWrapper">
                  <input type="hidden" name="country" id="countryValue" />
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="text" id="countryTrigger" placeholder="Country (Optional)" autoComplete="off"
                    readOnly style={{ cursor: 'pointer' }} />
                  <svg id="countryChevron"
                    style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', transition: 'transform .2s' }}
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  <div id="countryDropdownPanel"
                    style={{ display: 'none', position: 'absolute', top: 'calc(100% + 4px)', left: '0', width: '100%', zIndex: '999', borderRadius: '8px', border: '1px solid #373737', background: '#171717', overflow: 'hidden' }}>
                    <div style={{ padding: '8px' }}>
                      <input type="text" id="countrySearch"
                        className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140"
                        placeholder="Search country..." autoComplete="off"
                        style={{ padding: '8px 12px' }} />
                    </div>
                    <ul id="countryDropdown"
                      style={{ listStyle: 'none', margin: '0', padding: '0 4px 4px', maxHeight: '200px', overflowY: 'auto' }}>
                      <li data-value="AF">Afghanistan</li>
                      <li data-value="AL">Albania</li>
                      <li data-value="DZ">Algeria</li>
                      <li data-value="AD">Andorra</li>
                      <li data-value="AO">Angola</li>
                      <li data-value="AG">Antigua and Barbuda</li>
                      <li data-value="AR">Argentina</li>
                      <li data-value="AM">Armenia</li>
                      <li data-value="AU">Australia</li>
                      <li data-value="AT">Austria</li>
                      <li data-value="AZ">Azerbaijan</li>
                      <li data-value="BS">Bahamas</li>
                      <li data-value="BH">Bahrain</li>
                      <li data-value="BD">Bangladesh</li>
                      <li data-value="BB">Barbados</li>
                      <li data-value="BY">Belarus</li>
                      <li data-value="BE">Belgium</li>
                      <li data-value="BZ">Belize</li>
                      <li data-value="BJ">Benin</li>
                      <li data-value="BT">Bhutan</li>
                      <li data-value="BO">Bolivia</li>
                      <li data-value="BA">Bosnia and Herzegovina</li>
                      <li data-value="BW">Botswana</li>
                      <li data-value="BR">Brazil</li>
                      <li data-value="BN">Brunei</li>
                      <li data-value="BG">Bulgaria</li>
                      <li data-value="BF">Burkina Faso</li>
                      <li data-value="BI">Burundi</li>
                      <li data-value="CV">Cabo Verde</li>
                      <li data-value="KH">Cambodia</li>
                      <li data-value="CM">Cameroon</li>
                      <li data-value="CA">Canada</li>
                      <li data-value="CF">Central African Republic</li>
                      <li data-value="TD">Chad</li>
                      <li data-value="CL">Chile</li>
                      <li data-value="CN">China</li>
                      <li data-value="CO">Colombia</li>
                      <li data-value="KM">Comoros</li>
                      <li data-value="CG">Congo</li>
                      <li data-value="CD">Congo (DRC)</li>
                      <li data-value="CR">Costa Rica</li>
                      <li data-value="CI">Côte d'Ivoire</li>
                      <li data-value="HR">Croatia</li>
                      <li data-value="CU">Cuba</li>
                      <li data-value="CY">Cyprus</li>
                      <li data-value="CZ">Czech Republic</li>
                      <li data-value="DK">Denmark</li>
                      <li data-value="DJ">Djibouti</li>
                      <li data-value="DM">Dominica</li>
                      <li data-value="DO">Dominican Republic</li>
                      <li data-value="EC">Ecuador</li>
                      <li data-value="EG">Egypt</li>
                      <li data-value="SV">El Salvador</li>
                      <li data-value="GQ">Equatorial Guinea</li>
                      <li data-value="ER">Eritrea</li>
                      <li data-value="EE">Estonia</li>
                      <li data-value="SZ">Eswatini</li>
                      <li data-value="ET">Ethiopia</li>
                      <li data-value="FJ">Fiji</li>
                      <li data-value="FI">Finland</li>
                      <li data-value="FR">France</li>
                      <li data-value="GA">Gabon</li>
                      <li data-value="GM">Gambia</li>
                      <li data-value="GE">Georgia</li>
                      <li data-value="DE">Germany</li>
                      <li data-value="GH">Ghana</li>
                      <li data-value="GR">Greece</li>
                      <li data-value="GD">Grenada</li>
                      <li data-value="GT">Guatemala</li>
                      <li data-value="GN">Guinea</li>
                      <li data-value="GW">Guinea-Bissau</li>
                      <li data-value="GY">Guyana</li>
                      <li data-value="HT">Haiti</li>
                      <li data-value="HN">Honduras</li>
                      <li data-value="HU">Hungary</li>
                      <li data-value="IS">Iceland</li>
                      <li data-value="IN">India</li>
                      <li data-value="ID">Indonesia</li>
                      <li data-value="IR">Iran</li>
                      <li data-value="IQ">Iraq</li>
                      <li data-value="IE">Ireland</li>
                      <li data-value="IL">Israel</li>
                      <li data-value="IT">Italy</li>
                      <li data-value="JM">Jamaica</li>
                      <li data-value="JP">Japan</li>
                      <li data-value="JO">Jordan</li>
                      <li data-value="KZ">Kazakhstan</li>
                      <li data-value="KE">Kenya</li>
                      <li data-value="KI">Kiribati</li>
                      <li data-value="KW">Kuwait</li>
                      <li data-value="KG">Kyrgyzstan</li>
                      <li data-value="LA">Laos</li>
                      <li data-value="LV">Latvia</li>
                      <li data-value="LB">Lebanon</li>
                      <li data-value="LS">Lesotho</li>
                      <li data-value="LR">Liberia</li>
                      <li data-value="LY">Libya</li>
                      <li data-value="LI">Liechtenstein</li>
                      <li data-value="LT">Lithuania</li>
                      <li data-value="LU">Luxembourg</li>
                      <li data-value="MG">Madagascar</li>
                      <li data-value="MW">Malawi</li>
                      <li data-value="MY">Malaysia</li>
                      <li data-value="MV">Maldives</li>
                      <li data-value="ML">Mali</li>
                      <li data-value="MT">Malta</li>
                      <li data-value="MH">Marshall Islands</li>
                      <li data-value="MR">Mauritania</li>
                      <li data-value="MU">Mauritius</li>
                      <li data-value="MX">Mexico</li>
                      <li data-value="FM">Micronesia</li>
                      <li data-value="MD">Moldova</li>
                      <li data-value="MC">Monaco</li>
                      <li data-value="MN">Mongolia</li>
                      <li data-value="ME">Montenegro</li>
                      <li data-value="MA">Morocco</li>
                      <li data-value="MZ">Mozambique</li>
                      <li data-value="MM">Myanmar</li>
                      <li data-value="NA">Namibia</li>
                      <li data-value="NR">Nauru</li>
                      <li data-value="NP">Nepal</li>
                      <li data-value="NL">Netherlands</li>
                      <li data-value="NZ">New Zealand</li>
                      <li data-value="NI">Nicaragua</li>
                      <li data-value="NE">Niger</li>
                      <li data-value="NG">Nigeria</li>
                      <li data-value="NO">Norway</li>
                      <li data-value="OM">Oman</li>
                      <li data-value="PK">Pakistan</li>
                      <li data-value="PW">Palau</li>
                      <li data-value="PA">Panama</li>
                      <li data-value="PG">Papua New Guinea</li>
                      <li data-value="PY">Paraguay</li>
                      <li data-value="PE">Peru</li>
                      <li data-value="PH">Philippines</li>
                      <li data-value="PL">Poland</li>
                      <li data-value="PT">Portugal</li>
                      <li data-value="QA">Qatar</li>
                      <li data-value="RO">Romania</li>
                      <li data-value="RU">Russia</li>
                      <li data-value="RW">Rwanda</li>
                      <li data-value="KN">Saint Kitts and Nevis</li>
                      <li data-value="LC">Saint Lucia</li>
                      <li data-value="VC">Saint Vincent and the Grenadines</li>
                      <li data-value="WS">Samoa</li>
                      <li data-value="SM">San Marino</li>
                      <li data-value="ST">Sao Tome and Principe</li>
                      <li data-value="SA">Saudi Arabia</li>
                      <li data-value="SN">Senegal</li>
                      <li data-value="RS">Serbia</li>
                      <li data-value="SC">Seychelles</li>
                      <li data-value="SL">Sierra Leone</li>
                      <li data-value="SG">Singapore</li>
                      <li data-value="SK">Slovakia</li>
                      <li data-value="SI">Slovenia</li>
                      <li data-value="SB">Solomon Islands</li>
                      <li data-value="SO">Somalia</li>
                      <li data-value="ZA">South Africa</li>
                      <li data-value="SS">South Sudan</li>
                      <li data-value="ES">Spain</li>
                      <li data-value="LK">Sri Lanka</li>
                      <li data-value="SD">Sudan</li>
                      <li data-value="SR">Suriname</li>
                      <li data-value="SE">Sweden</li>
                      <li data-value="CH">Switzerland</li>
                      <li data-value="SY">Syria</li>
                      <li data-value="TW">Taiwan</li>
                      <li data-value="TJ">Tajikistan</li>
                      <li data-value="TZ">Tanzania</li>
                      <li data-value="TH">Thailand</li>
                      <li data-value="TL">Timor-Leste</li>
                      <li data-value="TG">Togo</li>
                      <li data-value="TO">Tonga</li>
                      <li data-value="TT">Trinidad and Tobago</li>
                      <li data-value="TN">Tunisia</li>
                      <li data-value="TR">Turkey</li>
                      <li data-value="TM">Turkmenistan</li>
                      <li data-value="TV">Tuvalu</li>
                      <li data-value="UG">Uganda</li>
                      <li data-value="UA">Ukraine</li>
                      <li data-value="AE">United Arab Emirates</li>
                      <li data-value="GB">United Kingdom</li>
                      <li data-value="US">United States</li>
                      <li data-value="UY">Uruguay</li>
                      <li data-value="UZ">Uzbekistan</li>
                      <li data-value="VU">Vanuatu</li>
                      <li data-value="VE">Venezuela</li>
                      <li data-value="VN">Vietnam</li>
                      <li data-value="YE">Yemen</li>
                      <li data-value="ZM">Zambia</li>
                      <li data-value="ZW">Zimbabwe</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <textarea className="textarea input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140"
                    name="about_project" id="aboutProject"
                    placeholder="Tell us about your project, goals, timeline, or requirements*"
                    required></textarea>
                </div>
                <button type="submit"
                  className="btn-component btn-outlined-primary ff_inter relative behind-cursor"
                  style={{ marginTop: '4px' }}>
                  Submit Inquiry
                </button>
              </form>
              <div style={{ marginTop: '32px' }}>
                <p className="fs_14 lh_normal ff_inter text_gray_350">
                  Prefer email instead? Feel free to contact us directly.
                </p>
                <div className="flex items-center sm-flex-wrap"
                  style={{ marginTop: '12px', columnGap: '16px', rowGap: '12px' }}>
                  <a href="mailto:businessmanager@zeeframes.com" className="flex items-center"
                    style={{ gap: '6px' }} aria-label="mail us on businessmanager@zeeframes.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M9.944 3.25H14.056C15.894 3.25 17.35 3.25 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V12.056C22.75 13.894 22.75 15.35 22.597 16.489C22.439 17.661 22.107 18.61 21.359 19.359C20.61 20.107 19.661 20.439 18.489 20.597C17.349 20.75 15.894 20.75 14.056 20.75H9.944C8.106 20.75 6.65 20.75 5.511 20.597C4.339 20.439 3.39 20.107 2.641 19.359C1.893 18.61 1.561 17.661 1.403 16.489C1.25 15.349 1.25 13.894 1.25 12.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C6.651 3.25 8.106 3.25 9.944 3.25ZM5.71 4.89C4.704 5.025 4.124 5.279 3.7 5.702C3.278 6.125 3.024 6.705 2.889 7.711C2.751 8.739 2.749 10.093 2.749 12C2.749 13.907 2.751 15.262 2.889 16.29C3.024 17.295 3.278 17.875 3.701 18.298C4.124 18.721 4.704 18.975 5.71 19.11C6.738 19.248 8.092 19.25 9.999 19.25H13.999C15.906 19.25 17.261 19.248 18.289 19.11C19.294 18.975 19.874 18.721 20.297 18.298C20.72 17.875 20.974 17.295 21.109 16.289C21.247 15.261 21.249 13.907 21.249 12C21.249 10.093 21.247 8.739 21.109 7.71C20.974 6.705 20.72 6.125 20.297 5.702C19.874 5.279 19.294 5.025 18.288 4.89C17.261 4.752 15.906 4.75 13.999 4.75H9.999C8.092 4.75 6.739 4.752 5.71 4.89ZM5.422 7.52C5.54934 7.36729 5.7321 7.27139 5.93013 7.25338C6.12815 7.23538 6.32521 7.29675 6.478 7.424L8.64 9.223C9.573 10 10.22 10.538 10.768 10.89C11.297 11.23 11.656 11.345 12.001 11.345C12.346 11.345 12.705 11.231 13.234 10.89C13.781 10.538 14.429 10 15.362 9.223L17.521 7.423C17.5967 7.35997 17.6841 7.31246 17.7782 7.2832C17.8722 7.25393 17.9711 7.24348 18.0692 7.25244C18.1673 7.2614 18.2627 7.2896 18.3499 7.33542C18.4371 7.38124 18.5145 7.44379 18.5775 7.5195C18.6405 7.59521 18.688 7.68259 18.7173 7.77665C18.7466 7.87072 18.757 7.96963 18.7481 8.06774C18.7391 8.16584 18.7109 8.26122 18.6651 8.34843C18.6193 8.43564 18.5567 8.51297 18.481 8.576L16.285 10.406C15.398 11.146 14.68 11.744 14.045 12.152C13.385 12.577 12.742 12.845 12.001 12.845C11.26 12.845 10.617 12.576 9.956 12.152C9.322 11.744 8.604 11.145 7.717 10.407L5.52 8.577C5.44424 8.51394 5.38165 8.43656 5.33582 8.34929C5.28998 8.26202 5.2618 8.16657 5.25289 8.0684C5.24397 7.97023 5.25449 7.87127 5.28385 7.77717C5.31322 7.68307 5.36084 7.59568 5.424 7.52"
                        fill="#BDBDBD" />
                    </svg>
                    <span className="fs_14 lh_21 ff_inter text_gray_495">contact@zeeframes.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="floating_btn flex flex-col items-center justify-center">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+923203244280" aria-label="Chat with us on WhatsApp">
          <div className="contact_icon flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <g clipPath="url(#clip0_1_4014)">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M23.8635 4.06584C21.2463 1.44525 17.7654 0.00132957 14.0566 0C6.41419 0 0.194436 6.21909 0.191777 13.8635C0.190448 16.3072 0.829309 18.6925 2.04255 20.7946L0.0754395 27.9796L7.42533 26.0517C9.45026 27.1566 11.7305 27.7383 14.0506 27.739H14.0566C21.6976 27.739 27.9181 21.5192 27.9207 13.8748C27.9221 10.17 26.4815 6.6871 23.8635 4.0665V4.06584ZM14.0566 25.3975H14.0519C11.9844 25.3969 9.95619 24.8411 8.18654 23.7914L7.76571 23.5415L3.40404 24.6856L4.56808 20.4329L4.29418 19.9968C3.14077 18.162 2.53116 16.0413 2.53249 13.8642C2.53515 7.51078 7.70454 2.34138 14.0613 2.34138C17.1392 2.34271 20.0324 3.54266 22.2082 5.72117C24.3841 7.89902 25.5814 10.7949 25.58 13.8735C25.5773 20.2275 20.408 25.3969 14.0566 25.3969V25.3975ZM20.3774 16.7673C20.031 16.5938 18.3279 15.7561 18.0101 15.6405C17.6923 15.5248 17.4617 15.467 17.2309 15.814C17.0003 16.161 16.3362 16.9415 16.1341 17.1721C15.9319 17.4035 15.7298 17.4321 15.3835 17.2585C15.0372 17.085 13.921 16.7194 12.5974 15.5394C11.5677 14.6206 10.8722 13.4866 10.6702 13.1395C10.4681 12.7925 10.6489 12.605 10.8217 12.4329C10.9773 12.2773 11.1681 12.028 11.3416 11.8259C11.5151 11.6238 11.5723 11.4789 11.6879 11.2482C11.8036 11.0168 11.7458 10.8148 11.6594 10.6412C11.5729 10.4677 10.8803 8.76253 10.5911 8.06918C10.3098 7.39377 10.024 7.48551 9.81194 7.47421C9.60983 7.46424 9.37917 7.46225 9.14783 7.46225C8.91648 7.46225 8.5415 7.54867 8.22375 7.89569C7.906 8.24267 7.01117 9.08097 7.01117 10.7855C7.01117 12.49 8.25237 14.1381 8.42586 14.3694C8.59935 14.6008 10.8689 18.0995 14.3438 19.6006C15.1701 19.9576 15.8156 20.171 16.3188 20.3306C17.1486 20.5945 17.9037 20.5573 18.5007 20.4682C19.1662 20.3685 20.5502 19.6299 20.8388 18.8208C21.1273 18.0117 21.1273 17.3177 21.0409 17.1734C20.9545 17.0292 20.7231 16.9421 20.3768 16.7686L20.3774 16.7673Z"
                  fill="#25D366" />
              </g>
              <defs>
                <clipPath id="clip0_1_4014">
                  <rect width="27.8453" height="28" fill="white" transform="translate(0.0748291)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>

      <div className="cursor-circle"></div>
    </>
  );
}
