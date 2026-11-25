import { useState, useEffect, useRef } from 'react';
import { API_BASE_URL, postApi } from '../config/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Initialize reCAPTCHA and Calendly assets
  useEffect(() => {
    // 1. Load Calendly CSS & JS if not already present
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const activeSiteKey = '6Ldn-XQgAAAAACnfpcWwB--VTUbxLovY6_qmNGiL';

    // 2. Ensure Google reCAPTCHA script is loaded
    if (!document.querySelector('script[src*="google.com/recaptcha/api.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // 3. Render reCAPTCHA explicitly once grecaptcha is available
    const renderCaptcha = () => {
      if (window.grecaptcha && recaptchaContainerRef.current) {
        if (!recaptchaContainerRef.current.querySelector('iframe')) {
          try {
            recaptchaContainerRef.current.innerHTML = '';
            widgetIdRef.current = window.grecaptcha.render(recaptchaContainerRef.current, {
              sitekey: activeSiteKey,
              theme: 'light'
            });
          } catch (err) {
            console.warn('reCAPTCHA render notice:', err);
          }
        }
      }
    };

    if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
      renderCaptcha();
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
          renderCaptcha();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await postApi('/contact', {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      let data = {};
      try {
        data = await response.json();
      } catch (parseErr) {
        data = { success: false, message: 'Server returned an invalid response. Please try again.' };
      }

      if (response.ok && data.success) {
        // Trigger Google Ads Contact Us Conversion Event
        if (window.gtag_report_contact_conversion) {
          window.gtag_report_contact_conversion();
        } else if (window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }

        // Trigger Meta (Facebook) Pixel Lead Event
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }

        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Contact submission notice:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mail-sociapa/30min'
      });
    } else {
      window.open('https://calendly.com/mail-sociapa/30min', '_blank');
    }
  };

  return (
    <div className="contact-form-wrap animate-on-scroll delay-2">
      <h3 className="poppins-bold contact-form-title">Send us a Message</h3>
      <p className="contact-form-desc">Fill out the form below and our team will get back to you shortly.</p>

      {submitted ? (
        <div style={{
          padding: '28px 24px',
          background: 'rgba(34, 197, 94, 0.08)',
          border: '1.5px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '16px',
          color: '#15803d',
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '1.05rem',
          lineHeight: '1.6'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎉</div>
          Thank you! Your message has been sent successfully. We will get back to you within 24 hours.
        </div>
      ) : (
        <form className="contact-form-element" onSubmit={handleSubmit}>
          <div className="contact-form-grid-2col">
            <div>
              <label className="contact-form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="premium-input"
                required
                placeholder="John"
              />
            </div>
            <div>
              <label className="contact-form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="premium-input"
                required
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="contact-form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="premium-input"
              required
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="contact-form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="premium-input"
              placeholder="+91 xxxxx xxxxx"
            />
          </div>

          <div>
            <label className="contact-form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="premium-input premium-textarea"
              required
              rows="5"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          {/* Google reCAPTCHA v2 Container (Left aligned as in Image 2) */}
          <div className="recaptcha-box-wrap">
            <div ref={recaptchaContainerRef} className="g-recaptcha" data-sitekey="6Ldn-XQgAAAAACnfpcWwB--VTUbxLovY6_qmNGiL"></div>
          </div>

          {/* Primary Action Button: Send Message → */}
          <button
            type="submit"
            className="btn-send-message"
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message →'}
          </button>

          {/* OR Divider Line */}
          <div className="contact-or-divider">
            <span>OR</span>
          </div>

          {/* Secondary Action Button: Schedule a Meeting (Dark Obsidian Button) */}
          <button
            type="button"
            id="calendlyConBtn"
            className="btn-schedule-meeting-dark"
            onClick={handleScheduleMeeting}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Schedule a Meeting</span>
          </button>
        </form>
      )}
    </div>
  );
}
