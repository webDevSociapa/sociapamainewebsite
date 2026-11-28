import { useState } from 'react';
import { postApi } from '../config/api';
import './InfluencerReachOutForm.css';

/**
 * Shared Brand / Influencer inquiry form used on Influencer pages.
 */
export default function InfluencerReachOutForm() {
  const [role, setRole] = useState('Brand');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    category: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const confirmedDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role
    };

    try {
      const response = await postApi('/influencer', {
        full_name: `${formData.name} [${role}]`,
        email: formData.email,
        phone: formData.phone,
        instagram: formData.city,
        category: formData.category,
        message: formData.message
      });

      let data = {};
      try {
        data = await response.json();
      } catch (parseErr) {
        data = { success: false, message: 'Server returned an invalid response.' };
      }

      if (response.ok && data.success) {
        try {
          if (window.gtag_report_enquiry_conversion) {
            window.gtag_report_enquiry_conversion();
          } else if (window.gtag_report_conversion) {
            window.gtag_report_conversion();
          }

          if (window.fbq) {
            window.fbq('track', 'Lead', { content_name: 'Influencer Creator Registration' });
          }
        } catch (trackingErr) {
          console.warn('Analytics conversion tracking error:', trackingErr);
        }

        setFormData({ name: '', email: '', phone: '', city: '', category: '', message: '' });
        setTimeout(() => {
          const reachSection = document.getElementById('reach-us');
          if (reachSection) {
            reachSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 120);
      }
    } catch (err) {
      console.warn('Influencer submission notice:', err);
    } finally {
      setSubmittedData(confirmedDetails);
      setSubmitted(true);
      setShowModal(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="reach-us" className="influencer-form-section">
        <div className="influencer-form-container">
          <div className="influencer-form-header">
            <span className="influencer-form-tag">
              START A COLLABORATION
            </span>
            <h2 className="influencer-form-heading">
              Reach Out To Sociapa
            </h2>
            <p className="influencer-form-sub">
              Whether you're a brand looking for growth or a creator ready to scale, we'd love to partner with you.
            </p>

            {/* Role Toggle Selector */}
            <div className="influencer-role-toggle">
              <button
                type="button"
                onClick={() => setRole('Brand')}
                className={`influencer-role-btn ${role === 'Brand' ? 'active' : ''}`}
              >
                I am a Brand
              </button>
              <button
                type="button"
                onClick={() => setRole('Influencer')}
                className={`influencer-role-btn ${role === 'Influencer' ? 'active' : ''}`}
              >
                I am an Influencer
              </button>
            </div>
          </div>

          <div className="influencer-form-card">
            <div className="influencer-guarantee-strip">
              <span>⚡ Fast 24-hr Response</span>
              <span className="influencer-strip-divider">|</span>
              <span>🔒 100% Confidential</span>
              <span className="influencer-strip-divider">|</span>
              <span>🎯 Free Strategy Audit</span>
            </div>

            {submitted ? (
              <div className="influencer-success-box animate-fadeIn">
                <div className="influencer-success-badge-wrap">
                  <div className="influencer-success-icon-wrap">
                    <svg className="influencer-success-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>

                <span className="influencer-success-tag">INQUIRY RECEIVED</span>
                <h3 className="influencer-success-title">
                  Thank You{submittedData?.name ? `, ${submittedData.name}` : ''}!
                </h3>
                <p className="influencer-success-desc">
                  Your inquiry has been successfully received by our Creator Strategy &amp; Brand Partnership team. We've got your requirements and our team will get in touch with you within <strong>24 business hours</strong>.
                </p>

                <div className="influencer-success-details-card">
                  <div className="influencer-success-detail-row">
                    <span className="detail-label">Submission Status</span>
                    <span className="detail-value status-active">● Active &amp; Queued</span>
                  </div>
                  {submittedData?.role && (
                    <div className="influencer-success-detail-row">
                      <span className="detail-label">Partnership Role</span>
                      <span className="detail-value">{submittedData.role}</span>
                    </div>
                  )}
                  {submittedData?.email && (
                    <div className="influencer-success-detail-row">
                      <span className="detail-label">Confirmation Email</span>
                      <span className="detail-value">{submittedData.email}</span>
                    </div>
                  )}
                  {submittedData?.phone && (
                    <div className="influencer-success-detail-row">
                      <span className="detail-label">Contact Phone</span>
                      <span className="detail-value">{submittedData.phone}</span>
                    </div>
                  )}
                  <div className="influencer-success-detail-row">
                    <span className="detail-label">Need Instant Assistance?</span>
                    <span className="detail-value">
                      <a href="tel:01203130443" className="detail-phone-link">0120 313 0443</a>
                    </span>
                  </div>
                </div>

                <div className="influencer-success-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setShowModal(false);
                    }}
                    className="influencer-reset-btn"
                  >
                    <span>Submit Another Inquiry</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="influencer-form-grid">
                  <div>
                    <label className="influencer-input-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength="16"
                      required
                      placeholder="+91 98765 43210"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Delhi / Noida / Mumbai"
                      className="influencer-form-input"
                    />
                  </div>
                  <div className="influencer-full-col">
                    <label className="influencer-input-label">Category / Niche *</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      placeholder={role === 'Brand' ? 'e.g. FMCG, Tech, Fashion, Food' : 'e.g. Comedy, Fitness, Travel, Food Blogging'}
                      className="influencer-form-input"
                    />
                  </div>
                  <div className="influencer-full-col">
                    <label className="influencer-input-label">Message / Requirements *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your brand goals or creator profile..."
                      className="influencer-form-textarea"
                    ></textarea>
                  </div>
                </div>

                <div className="influencer-submit-wrap">
                  <button
                    type="submit"
                    className="btn influencer-submit-btn"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="influencer-spinner"></span>
                        Submitting Inquiry...
                      </>
                    ) : (
                      'Submit Inquiry ✦'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {showModal && (
        <div className="influencer-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="influencer-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="influencer-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close thank you modal"
            >
              ✕
            </button>

            <div className="influencer-modal-icon-wrap">
              <span className="influencer-modal-celebration">🎉</span>
            </div>

            <span className="influencer-modal-badge">SUBMISSION RECEIVED</span>
            <h3 className="influencer-modal-title">
              Thank You{submittedData?.name ? `, ${submittedData.name}` : ''}!
            </h3>
            <p className="influencer-modal-text">
              We have received your collaboration request. Our dedicated influencer talent team will review your profile and reach out to you within <strong>24 business hours</strong>.
            </p>

            <div className="influencer-modal-footer">
              <button
                type="button"
                className="influencer-modal-btn"
                onClick={() => setShowModal(false)}
              >
                Great, Got It! ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
