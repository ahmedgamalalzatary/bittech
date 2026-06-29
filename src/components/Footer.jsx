import { BrandMark, LinkedIn, Instagram, XLogo, WhatsApp } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-intro">
            <a className="brand" href="#top">
              <span className="mark"><BrandMark /></span>
              BitTech<sup>®</sup>
            </a>
            <p>
              We build professional software for businesses worldwide — websites, online stores,
              mobile and desktop apps, CRM platforms, ERP systems and custom digital products.
            </p>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#about">Studio</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Custom Software</a></li>
              <li><a href="#services">Web &amp; E‑commerce</a></li>
              <li><a href="#services">Mobile &amp; Desktop</a></li>
              <li><a href="#services">CRM &amp; ERP</a></li>
              <li><a href="#services">Consulting</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Industries</h5>
            <ul>
              <li><a href="#">Fintech · SaaS</a></li>
              <li><a href="#">AI/ML · Web3</a></li>
              <li><a href="#">Logistics · Travel</a></li>
              <li><a href="#">Healthcare · EdTech</a></li>
              <li><a href="#">Real Estate</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-big">BitTech<em>.</em></div>

        <div className="foot-bottom">
          <small>© BitTech (Private) Limited. All Rights Reserved. — Crafted, not copied.</small>
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="X"><XLogo /></a>
            <a href="https://wa.me/201011125116" aria-label="WhatsApp"><WhatsApp /></a>
          </div>
          <small>31.2°N 29.9°E — Crafted in Alexandria</small>
        </div>
      </div>
    </footer>
  )
}
