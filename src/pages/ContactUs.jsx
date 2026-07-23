import { Helmet } from 'react-helmet-async';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact us for all of your digital marketing needs -Sociapa</title>
        <meta name="description" content="Looking for an ROI Driven Marketing Partner for your Business. Contact Us for Branding, Experiential Design & Digital Marketing Services in India Sociapa" />
        <link rel="canonical" href="https://www.sociapa.com/contact-us/" />
        <meta property="og:title" content="Contact us for all of your digital marketing needs -Sociapa" />
        <meta property="og:description" content="Looking for an ROI Driven Marketing Partner for your Business. Contact Us for Branding, Experiential Design & Digital Marketing Services in India Sociapa." />
        <meta property="og:url" content="https://www.sociapa.com/contact-us/" />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero-section page-hero-section">
        <div className="container animate-on-scroll">
          <div className="contact-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Let's Talk
          </div>
          <h1 className="poppins-bold contact-hero-title">
            Ready to <span className="contact-hero-title-highlight">Elevate</span> Your Brand?
          </h1>
          <p className="contact-hero-desc">
            Whether you need a full brand overhaul or a targeted digital campaign, our experts are ready to help your business grow. Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>
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
                  <p className="contact-info-text">+91 7011057175</p>
                  <p className="contact-info-text">+91 8287445375</p>
                  <p className="contact-info-text contact-info-text-last">+91 120 311 0067</p>
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

            {/* Contact Form */}
            <div className="contact-form-wrap animate-on-scroll delay-2">
              <h3 className="poppins-bold contact-form-title">Send us a Message</h3>
              <p className="contact-form-desc">Fill out the form below and our team will get back to you shortly.</p>
              
              <form className="contact-form-element" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                
                <div className="contact-form-grid-2col">
                  <div>
                    <label className="contact-form-label">First Name</label>
                    <input type="text" className="premium-input" required placeholder="John" />
                  </div>
                  <div>
                    <label className="contact-form-label">Last Name</label>
                    <input type="text" className="premium-input" required placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="contact-form-label">Email Address</label>
                  <input type="email" className="premium-input" required placeholder="john@example.com" />
                </div>

                <div>
                  <label className="contact-form-label">Phone Number</label>
                  <input type="tel" className="premium-input" placeholder="+91 xxxxx xxxxx" />
                </div>

                <div>
                  <label className="contact-form-label">Message</label>
                  <textarea className="premium-input premium-textarea" required rows="5" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="premium-btn">
                  Send Message
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
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
    </>
  )
}
