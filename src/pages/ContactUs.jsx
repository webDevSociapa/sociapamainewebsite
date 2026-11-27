import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import './ContactUs.css';

export default function ContactUs() {
  const base = import.meta.env.BASE_URL || '/';
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sociapa",
    "image": "https://www.sociapa.com/logoSociapa.png",
    "@id": "https://www.sociapa.com/contact-us/#localbusiness",
    "url": "https://www.sociapa.com",
    "telephone": "0120 313 0443",
    "email": "mail@sociapa.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BL-02, Sector 116",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201306",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5692697,
      "longitude": 77.3935928
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:30",
      "closes": "18:30"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact us for all of your digital marketing needs -Sociapa</title>
        <meta name="description" content="Looking for an ROI Driven Marketing Partner for your Business. Contact Us for Branding, Experiential Design &amp; Digital Marketing Services in India Sociapa" />
        <link rel="canonical" href="https://sociapa.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Contact us for all of your digital marketing needs -Sociapa" />
        <meta property="og:description" content="Looking for an ROI Driven Marketing Partner for your Business. Contact Us for Branding, Experiential Design &amp; Digital Marketing Services in India Sociapa" />
        <meta property="og:url" content="https://sociapa.com/contact-us" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact us for all of your digital marketing needs -Sociapa" />
        <meta name="twitter:description" content="Looking for an ROI Driven Marketing Partner for your Business. Contact Us for Branding, Experiential Design &amp; Digital Marketing Services in India Sociapa" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="contact-us-page">
      {/* ══════════════════════════ HERO BANNER ══════════════════════════ */}
      <section className="contact-hero-banner">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Contact Us - Sociapa Digital Marketing Agency
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/contact/contact.webp`} />
          <img
            src={`${base}assets/images/services_banner/contact/contact.webp`}
            alt="Got a Brand to Build? Let's Talk - Contact Sociapa"
            className="hero-img contact-banner-img"
            width="1600"
            height="582"
            fetchpriority="high"
          />
        </picture>
      </section>

      {/* Contact Content */}
      <section className="section bg-light contact-content-section">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Info (Light Card) */}
            <div className="contact-card-light animate-on-scroll delay-1">
              <h3 className="poppins-bold contact-card-title">Get in Touch</h3>
              <p className="contact-card-subtitle">
                We'd love to hear from you. Our friendly team is always here to chat.
              </p>

              <div className="contact-info-row">
                <div className="contact-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h5 className="contact-info-heading">Phone</h5>
                  <p className="contact-info-text contact-info-text-last">
                    <a href="tel:01203130443" style={{ color: 'inherit', textDecoration: 'none' }}>0120 313 0443</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h5 className="contact-info-heading">Email</h5>
                  <p className="contact-info-text contact-info-text-last">mail@sociapa.com</p>
                </div>
              </div>

              <div className="contact-info-row contact-info-row-last">
                <div className="contact-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h5 className="contact-info-heading">Office Address</h5>
                  <p className="contact-info-text contact-info-text-last">
                    BL-02, Sector 116, Noida,<br />
                    Uttar Pradesh 201306/201310
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Component */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Google Map Section ── */}
      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.016418692902!2d77.39359281539613!3d28.569269682442908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61b9ad48bbe7d0e5!2sSOCIAPA%20DIGITAL%20MARKETING!5e0!3m2!1sen!2sin!4v1649671278387!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="contact-map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sociapa Location"
        ></iframe>
      </section>
      </div>
    </>
  )
}
