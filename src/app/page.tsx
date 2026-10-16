import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Faq } from "@/components/Faq";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { AnimatedMark } from "@/components/AnimatedMark";
import { Wordmark } from "@/components/Mark";
import { RollText } from "@/components/RollText";
import { Cube, MailIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { EMAIL, LOCATION, WHATSAPP_DISPLAY, reasons, services, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Services />
        <Work />

        <section className="reasons" aria-labelledby="reasons-title">
          <div className="wrap reasons-inner">
            <div className="section-head">
              <h2 id="reasons-title" className="section-title">
                Why people work with us
              </h2>
              <p className="section-lead">
                We&apos;re a young team, and that works in your favor: you get our full attention, from the first message
                to long after launch.
              </p>
            </div>
            <ul className="reasons-list">
              {reasons.map((r) => (
                <li key={r.title}>
                  <Cube className="reason-cube" />
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Faq />

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="wrap contact-inner">
            <div className="contact-copy">
              <h2 id="contact-title" className="contact-title">
                Have an idea? Send it to us.
              </h2>
              <p className="contact-lead">
                One message is all it takes to start. Tell us what you want to build and we&apos;ll take it from there.
              </p>
              <a className="btn btn-primary btn-large" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="btn-icon" />
                <RollText>Message us on WhatsApp</RollText>
              </a>
              <ul className="contact-list">
                <li>
                  <WhatsAppIcon className="contact-icon" />
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" dir="ltr">
                    {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>
                  <MailIcon className="contact-icon" />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <PinIcon className="contact-icon" />
                  <span>{LOCATION}</span>
                </li>
              </ul>
            </div>
            <div className="contact-visual" aria-hidden="true">
              <AnimatedMark className="contact-mark" mode="scroll" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Wordmark />
            <p>Websites, apps and software, built in Fayoum for people across Egypt.</p>
          </div>
          <div className="footer-col">
            <h2>What we build</h2>
            <ul>
              {services.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" dir="ltr">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>{LOCATION}</li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">
          <p>© 2026 BitTech. All rights reserved.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </>
  );
}
