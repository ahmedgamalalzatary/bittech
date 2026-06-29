import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, CheckCircle } from '../components/icons.jsx'
import {
  SERVICES, PROJECTS, STEPS, VALUES, INDUSTRIES, MARQUEE, ROTATOR,
} from './atelier-data.js'

export default function Home() {
  const heroRef = useRef(null)
  const loaderRef = useRef(null)
  const barRef = useRef(null)
  const pctRef = useRef(null)
  const progressRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const canvasRef = useRef(null)
  const spineRef = useRef(null)
  const timelineRef = useRef(null)

  const [activeSvc, setActiveSvc] = useState(0)
  const [rotIdx, setRotIdx] = useState(0)

  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  // hero word rotator
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setRotIdx((i) => (i + 1) % ROTATOR.length), 1900)
    return () => clearInterval(id)
  }, [])

  // master interactivity effect
  useEffect(() => {
    const html = document.documentElement
    html.classList.add('js')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer:fine)').matches
    const cleanups = []

    /* -------- loader -------- */
    const finishLoad = () => {
      heroRef.current && heroRef.current.classList.add('ready')
      loaderRef.current && loaderRef.current.classList.add('done')
    }
    if (reduce) {
      if (barRef.current) barRef.current.style.transform = 'scaleX(1)'
      if (pctRef.current) pctRef.current.textContent = '100%'
      finishLoad()
    } else {
      let p = 0
      const tick = setInterval(() => {
        p += Math.random() * 16 + 6
        if (p >= 100) { p = 100; clearInterval(tick); setTimeout(finishLoad, 260) }
        if (barRef.current) barRef.current.style.transform = 'scaleX(' + (p / 100) + ')'
        if (pctRef.current) pctRef.current.textContent = Math.floor(p) + '%'
      }, 130)
      cleanups.push(() => clearInterval(tick))
      const safety = setTimeout(() => {
        if (loaderRef.current && !loaderRef.current.classList.contains('done')) finishLoad()
      }, 2600)
      cleanups.push(() => clearTimeout(safety))
    }

    /* -------- custom cursor -------- */
    if (fine && !reduce) {
      const cur = cursorRef.current
      const dot = cursorDotRef.current
      let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy
      const onMove = (e) => {
        tx = e.clientX; ty = e.clientY
        if (dot) dot.style.transform = 'translate(' + tx + 'px,' + ty + 'px)'
        html.style.setProperty('--mx', tx + 'px')
        html.style.setProperty('--my', ty + 'px')
      }
      document.addEventListener('mousemove', onMove)
      cleanups.push(() => document.removeEventListener('mousemove', onMove))
      let raf
      const loop = () => {
        cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18
        if (cur) cur.style.transform = 'translate(' + cx + 'px,' + cy + 'px)'
        raf = requestAnimationFrame(loop)
      }
      loop()
      cleanups.push(() => cancelAnimationFrame(raf))
      const down = () => cur && cur.classList.add('is-down')
      const up = () => cur && cur.classList.remove('is-down')
      document.addEventListener('mousedown', down)
      document.addEventListener('mouseup', up)
      cleanups.push(() => { document.removeEventListener('mousedown', down); document.removeEventListener('mouseup', up) })
      const hov = 'a,button,input,textarea,.svc,.proj,.ind,.val,[data-magnetic]'
      const enter = () => cur && cur.classList.add('is-hover')
      const leave = () => cur && cur.classList.remove('is-hover')
      const hovEls = Array.from(document.querySelectorAll(hov))
      hovEls.forEach((el) => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })
      cleanups.push(() => hovEls.forEach((el) => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) }))
    }

    /* -------- magnetic buttons -------- */
    if (fine && !reduce) {
      const magEls = Array.from(document.querySelectorAll('[data-magnetic]'))
      const handlers = []
      magEls.forEach((el) => {
        const move = (e) => {
          const r = el.getBoundingClientRect()
          const mx = e.clientX - r.left - r.width / 2
          const my = e.clientY - r.top - r.height / 2
          el.style.transform = 'translate(' + (mx * 0.28) + 'px,' + (my * 0.42) + 'px)'
        }
        const out = () => { el.style.transform = '' }
        el.addEventListener('mousemove', move)
        el.addEventListener('mouseleave', out)
        handlers.push([el, move, out])
      })
      cleanups.push(() => handlers.forEach(([el, move, out]) => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', out) }))
    }

    /* -------- scroll progress + process spine -------- */
    const steps = Array.from(document.querySelectorAll('.step'))
    const drawSpine = () => {
      const timeline = timelineRef.current
      if (!timeline) return
      const r = timeline.getBoundingClientRect()
      const trigger = innerHeight * 0.55
      const total = r.height
      const filled = Math.min(Math.max(trigger - r.top, 0), total)
      const ratio = total > 0 ? filled / total : 0
      if (spineRef.current) spineRef.current.style.height = (ratio * 100) + '%'
      steps.forEach((st) => {
        const node = st.querySelector('.node')
        if (node) st.classList.toggle('lit', node.getBoundingClientRect().top < trigger)
      })
    }
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      const h = document.documentElement.scrollHeight - innerHeight
      if (progressRef.current) progressRef.current.style.width = (h > 0 ? (y / h * 100) : 0) + '%'
      drawSpine()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    /* -------- reveal on scroll -------- */
    const revealEls = Array.from(document.querySelectorAll('.reveal'))
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((es) => {
        es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) } })
      }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
      revealEls.forEach((el) => io.observe(el))
      cleanups.push(() => io.disconnect())
    } else {
      revealEls.forEach((el) => el.classList.add('in'))
    }

    /* -------- count up -------- */
    const countUp = (el) => {
      const target = parseFloat(el.getAttribute('data-target'))
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10)
      const dur = 1700
      let t0 = null
      const step = (ts) => {
        if (!t0) t0 = ts
        const pr = Math.min((ts - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - pr, 3)
        const val = target * eased
        el.textContent = dec ? val.toFixed(dec) : Math.floor(val).toLocaleString()
        if (pr < 1) requestAnimationFrame(step)
        else el.textContent = dec ? target.toFixed(dec) : target.toLocaleString()
      }
      requestAnimationFrame(step)
    }
    const counters = Array.from(document.querySelectorAll('.count'))
    if ('IntersectionObserver' in window) {
      const io2 = new IntersectionObserver((es) => {
        es.forEach((en) => { if (en.isIntersecting) { countUp(en.target); io2.unobserve(en.target) } })
      }, { threshold: 0.6 })
      counters.forEach((el) => io2.observe(el))
      cleanups.push(() => io2.disconnect())
    } else {
      counters.forEach(countUp)
    }

    /* -------- HERO node network canvas -------- */
    const canvas = canvasRef.current
    if (canvas && !reduce) {
      const ctx = canvas.getContext('2d')
      let w, h, dpr, nodes = []
      const mouse = { x: -999, y: -999 }
      const build = () => {
        const count = Math.round(Math.min(86, Math.max(34, (w * h) / 16000)))
        nodes = []
        for (let i = 0; i < count; i++) {
          nodes.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.6 + 0.6 })
        }
      }
      const size = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2)
        w = canvas.clientWidth; h = canvas.clientHeight
        canvas.width = w * dpr; canvas.height = h * dpr
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        build()
      }
      const heroEl = canvas.parentElement
      const onHeroMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
      const onHeroLeave = () => { mouse.x = -999; mouse.y = -999 }
      heroEl.addEventListener('mousemove', onHeroMove)
      heroEl.addEventListener('mouseleave', onHeroLeave)
      const DIST = 132
      let raf
      const frame = () => {
        ctx.clearRect(0, 0, w, h)
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i]
          n.x += n.vx; n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          const mdx = mouse.x - n.x, mdy = mouse.y - n.y, md = Math.sqrt(mdx * mdx + mdy * mdy)
          if (md < 160) { n.x += mdx * 0.012; n.y += mdy * 0.012 }
          for (let j = i + 1; j < nodes.length; j++) {
            const m = nodes[j], dx = n.x - m.x, dy = n.y - m.y, d = Math.sqrt(dx * dx + dy * dy)
            if (d < DIST) {
              const a = (1 - d / DIST)
              ctx.strokeStyle = 'rgba(245,197,24,' + (a * 0.22) + ')'
              ctx.lineWidth = 0.6
              ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke()
            }
          }
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832)
          ctx.fillStyle = md < 160 ? 'rgba(255,216,58,0.95)' : 'rgba(245,197,24,0.42)'
          ctx.fill()
        }
        raf = requestAnimationFrame(frame)
      }
      size(); frame()
      let rt
      const onResize = () => { clearTimeout(rt); rt = setTimeout(size, 200) }
      window.addEventListener('resize', onResize)
      cleanups.push(() => {
        cancelAnimationFrame(raf)
        window.removeEventListener('resize', onResize)
        heroEl.removeEventListener('mousemove', onHeroMove)
        heroEl.removeEventListener('mouseleave', onHeroLeave)
      })
    }

    onScroll()
    return () => cleanups.forEach((fn) => fn())
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
      try {
        setSubmitting(true)
        setStatus({ type: '', message: '' })
        await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form, { publicKey: emailJsPublicKey })
        form.reset()
        setStatus({ type: 'success', message: 'Thanks — we’ll be in touch within one business day.' })
      } catch {
        setStatus({ type: 'error', message: 'Something went wrong. Please email info@bittech.site directly.' })
      } finally {
        setSubmitting(false)
      }
      return
    }
    // mailto fallback when EmailJS isn't configured
    const f = form
    const body = encodeURIComponent(
      'Name: ' + (f.name.value || '') + '\n' +
      'Email: ' + (f.email.value || '') + '\n' +
      'Phone: ' + (f.phone.value || '') + '\n\n' +
      (f.project.value || '')
    )
    window.location.href = 'mailto:info@bittech.site?subject=' +
      encodeURIComponent('Project inquiry — ' + (f.name.value || 'New lead')) + '&body=' + body
  }

  const svc = SERVICES[activeSvc]

  return (
    <>
      {/* atmosphere */}
      <div className="fx fx-grid"></div>
      <div className="fx fx-bloom"></div>
      <div className="fx fx-spot"></div>
      <div className="fx fx-grain"></div>
      <div className="fx fx-vig"></div>

      <div className="progress" ref={progressRef}></div>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>

      {/* loader */}
      <div className="loader" ref={loaderRef}>
        <div className="loader__inner">
          <div className="loader__top"><span>BitTech — Atelier</span><span className="loader__pct" ref={pctRef}>0%</span></div>
          <div className="loader__bar"><i ref={barRef}></i></div>
          <div className="loader__word">Crafted, <b>not copied.</b></div>
        </div>
      </div>

      <span id="top"></span>

      {/* HERO */}
      <section className="hero" id="hero" ref={heroRef}>
        <canvas id="nodes" ref={canvasRef}></canvas>
        <div className="wrap">
          <div className="hero-status fade"><span className="dot"></span> Systems Operational — <b>1200</b> projects shipped since 2020</div>

          <h1 className="hero-h1">
            <span className="line"><span>Software that <em>works.</em></span></span>
            <span className="line"><span>Solutions that <em>scale.</em></span></span>
          </h1>

          <div className="hero-meta fade">
            <div>
              <div className="hero-build">
                <span className="arrow">↳</span> We build
                <span className="rotator">
                  {ROTATOR.map((word, i) => (
                    <span key={word} className={i === rotIdx ? 'on' : ''}>{word}</span>
                  ))}
                </span>
              </div>
            </div>
            <p className="hero-sub">A software-engineering atelier delivering <b>reliable digital products</b> and custom systems for businesses worldwide — planned, built, and shipped with the discipline your operations deserve.</p>
          </div>

          <div className="hero-cta fade">
            <a href="https://calendly.com/contact-BitTech/30min" target="_blank" rel="noreferrer" className="btn btn-gold" data-magnetic>
              Schedule a Call<ArrowUpRight />
            </a>
            <a href="#work" className="btn btn-ghost" data-magnetic>
              View Our Work<ArrowUpRight />
            </a>
            <span className="note">— or email info@bittech.site</span>
          </div>
        </div>

        <div className="scroll-cue">Scroll <i></i></div>

        <div className="hero-marquee fade">
          <div className="marq">
            {[...MARQUEE, ...MARQUEE].map((it, i) => (
              <span className="it" key={it + i}>{it}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="grid">
            <div className="stat reveal"><div className="num"><span className="count" data-target="1200">0</span><b>+</b></div><div className="lab">Successful Projects</div></div>
            <div className="stat reveal d1"><div className="num"><span className="count" data-target="200">0</span><b>+</b></div><div className="lab">Repeated Clients</div></div>
            <div className="stat reveal d2"><div className="num"><span className="count" data-target="30">0</span></div><div className="lab">Engineers &amp; Experts</div></div>
            <div className="stat reveal d3"><div className="num"><span className="count" data-target="4.8" data-dec="1">0</span><b>★</b></div><div className="lab">Rated on Google</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="shead reveal">
            <div><span className="eyebrow">What we build</span>
              <h2 style={{ marginTop: '22px' }}>Software development, <em>engineered</em> around your business.</h2>
            </div>
            <div className="meta"><span className="sec-index">(01 / Capabilities)</span>
              <p style={{ marginTop: '14px' }}>Practical digital products built around business goals — not features for their own sake. Hover an offer to inspect it.</p>
            </div>
          </div>

          <div className="svc-wrap">
            <div className="svc-list">
              {SERVICES.map((s, i) => (
                <a
                  key={s.num}
                  className={'svc' + (i === activeSvc ? ' active' : '')}
                  href="#contact"
                  onMouseEnter={() => setActiveSvc(i)}
                  onFocus={() => setActiveSvc(i)}
                >
                  <span className="idx">{s.num}</span>
                  <div className="body"><div className="lab">{s.lab}</div><h3>{s.title}</h3></div>
                  <span className="go"><ArrowUpRight /></span>
                </a>
              ))}
            </div>

            <aside className="svc-preview">
              <span className="corner cor-tl"></span><span className="corner cor-br"></span>
              <div className="pv-top"><span>Capability</span><span>{svc.num} / 06</span></div>
              <div>
                <div className="pv-num">{svc.num}</div>
                <div className="pv-title">{svc.title}</div>
                <p className="pv-desc">{svc.desc}</p>
                <div className="pv-tags">
                  {svc.tags.map((tg) => <span key={tg}>{tg}</span>)}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work" id="work">
        <div className="wrap">
          <div className="shead reveal">
            <div><span className="eyebrow">Selected work</span>
              <h2 style={{ marginTop: '22px' }}>Products people <em>actually</em> use.</h2>
            </div>
            <div className="meta"><span className="sec-index">(02 / Case Studies)</span>
              <p style={{ marginTop: '14px' }}>Software built to serve real users, support operations, and solve practical market needs.</p>
            </div>
          </div>

          <div className="work-grid">
            {PROJECTS.map((pr, i) => (
              <article className={'proj reveal' + (pr.delay ? ' ' + pr.delay : '')} key={i}>
                <div className="art">
                  <div className="scene" style={{ background: pr.scene }}></div>
                  <span className="watermark">{pr.mark}</span>
                  <div className="mock">
                    <div className="bar"><i></i><i></i><i></i></div>
                    {pr.chipsTop && <div className="chips"><i></i><i></i><i></i></div>}
                    {pr.rows && pr.rows.map((r, k) => <div className={'row ' + r} key={'r' + k}></div>)}
                    {pr.chipsFirst && <div className="chips"><i></i><i></i><i></i></div>}
                    {pr.rowsAfter && pr.rowsAfter.map((r, k) => (
                      <div className={'row ' + r} key={'ra' + k} style={k === 0 ? { marginTop: '13px' } : undefined}></div>
                    ))}
                    {pr.extra && <div className={'row ' + pr.extra} style={{ marginTop: '13px' }}></div>}
                  </div>
                </div>
                <div className="meta">
                  <div>
                    <div className="k">{pr.k}</div>
                    <h3>{pr.h}</h3>
                    <p>{pr.p}</p>
                  </div>
                  <span className="yr">{pr.yr}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="wrap">
          <div className="shead reveal">
            <div><span className="eyebrow">Our process, your advantage</span>
              <h2 style={{ marginTop: '22px' }}>From requirements <em>to</em> delivery.</h2>
            </div>
            <div className="meta"><span className="sec-index">(03 / Method)</span>
              <p style={{ marginTop: '14px' }}>A path built to move software forward with clarity, structure and measurable progress.</p>
            </div>
          </div>

          <div className="timeline" ref={timelineRef}>
            <div className="spine"><i ref={spineRef}></i></div>
            {STEPS.map(([title, sub, body], i) => (
              <div className="step" key={title}>
                <span className="node"></span>
                <div className="ph">Phase {String(i + 1).padStart(2, '0')} / 06</div>
                <div className="ct"><h3>{title}</h3><div className="sub">{sub}</div><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO / VALUES */}
      <section className="manifesto" id="about">
        <div className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The studio — est. 2020</span>
          <p className="big reveal">We build strong partnerships through clear execution and software <em>designed around real business needs</em> — crafted, not copied.</p>

          <div className="values">
            {VALUES.map(([vn, h, p], i) => (
              <div className={'val reveal' + (i ? ' d' + i : '')} key={vn}>
                <div className="vn">{vn}</div><h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries">
        <div className="wrap">
          <div className="shead reveal" style={{ border: 'none', paddingBottom: 0 }}>
            <div><span className="eyebrow">Industries we serve</span>
              <h2 style={{ marginTop: '22px' }}>Domain fluency across <em>ten</em> sectors.</h2>
            </div>
            <div className="meta"><span className="sec-index">(04 / Sectors)</span></div>
          </div>
          <div className="ind-row reveal">
            {INDUSTRIES.map((ind) => (
              <span className="ind" key={ind}><span className="d"></span>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="wrap">
          <div className="row">
            <div className="rate reveal">
              <div className="big">4.9</div>
              <div><div className="stars">★★★★★</div><div className="sub">Average rating · 41 reviews</div></div>
            </div>
            <div className="plats reveal d1">
              <div className="plat">Reviewed on<b>Clutch</b></div>
              <div className="plat">Verified on<b>Upwork</b></div>
              <div className="plat">Listed on<b>GoodFirms</b></div>
              <div className="plat">150M views<b>Dribbble</b></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="cta" id="contact">
        <div className="wrap">
          <div className="cta-card reveal">
            <span className="corner cor-tl" style={{ borderTop: '1px solid var(--line-gold)', borderLeft: '1px solid var(--line-gold)', top: '16px', left: '16px' }}></span>
            <span className="corner cor-br" style={{ borderBottom: '1px solid var(--line-gold)', borderRight: '1px solid var(--line-gold)', bottom: '16px', right: '16px' }}></span>
            <div className="grid">
              <div className="left">
                <span className="eyebrow">Contact us</span>
                <h2 style={{ marginTop: '24px' }}>Let's build software that <em>moves your business forward.</em></h2>
                <ul className="points">
                  <li><CheckCircle /> You'll hear from us within one business day.</li>
                  <li><CheckCircle /> We'll understand your goals and technical requirements.</li>
                  <li><CheckCircle /> You'll get a clear proposal — scope, timeline, pricing.</li>
                </ul>
              </div>
              <form className="right" onSubmit={handleSubmit}>
                <div className="field"><label>Full name</label><input type="text" name="name" placeholder="Jane Doe" required /></div>
                <div className="row2">
                  <div className="field"><label>Email</label><input type="email" name="email" placeholder="jane@company.com" required /></div>
                  <div className="field"><label>Phone</label><input type="tel" name="phone" placeholder="+20 ···" /></div>
                </div>
                <div className="field"><label>About your project</label><textarea name="project" placeholder="Goals, timeline, requirements…" required></textarea></div>
                <button type="submit" className="btn btn-gold submit" data-magnetic disabled={submitting}>
                  {submitting ? 'Sending…' : 'Submit Inquiry'}<ArrowUpRight />
                </button>
                {status.message && <div className={'form-status ' + status.type}>{status.message}</div>}
                <div className="alt">Prefer email? <a href="mailto:info@bittech.site">info@bittech.site</a></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
