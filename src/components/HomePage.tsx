import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Work } from "./Work";
import { Faq } from "./Faq";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { AnimatedMark } from "./AnimatedMark";
import { LocaleProvider } from "./LocaleProvider";
import { Wordmark } from "./Mark";
import { RollText } from "./RollText";
import { Cube, MailIcon, PinIcon, WhatsAppIcon } from "./icons";
import { content } from "@/lib/content";
import { EMAIL, WHATSAPP_DISPLAY, whatsappLink, type Locale } from "@/lib/site";

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const wa = whatsappLink(t.whatsappMessage);

  return (
    <LocaleProvider locale={locale}>
      <a className="skip-link" href="#main">
        {t.skip}
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
                {t.reasons.title}
              </h2>
              <p className="section-lead">{t.reasons.lead}</p>
            </div>
            <ul className="reasons-list">
              {t.reasons.items.map((r) => (
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
                {t.contact.title}
              </h2>
              <p className="contact-lead">{t.contact.lead}</p>
              <a className="btn btn-primary btn-large" href={wa} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="btn-icon" />
                <RollText>{t.whatsappCta}</RollText>
              </a>
              <ul className="contact-list">
                <li>
                  <WhatsAppIcon className="contact-icon" />
                  <a href={wa} target="_blank" rel="noopener noreferrer" dir="ltr">
                    {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>
                  <MailIcon className="contact-icon" />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <PinIcon className="contact-icon" />
                  <span>{t.contact.location}</span>
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
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h2>{t.footer.servicesTitle}</h2>
            <ul>
              {t.services.items.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2>{t.footer.contactTitle}</h2>
            <ul>
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" dir="ltr">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>{t.contact.location}</li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">
          <p>{t.footer.rights}</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </LocaleProvider>
  );
}
