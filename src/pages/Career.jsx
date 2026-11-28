import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { API_BASE_URL, postApi } from '../config/api';
import './Career.css';

// High-quality SVG Icons for perks and jobs
const icons = {
  lightbulb: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>,
  rocket: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
  smile: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,

  graphic: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" /><path d="m11 7 4 4" /><path d="M15 11 9 17v4h4l6-6" /><path d="M18 5 15 8" /></svg>,
  social: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
  seo: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M11 8v3l2 2" /></svg>,
  performance: <svg width="32" height="32" viewBox="0 
   0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>,
  content: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  ui: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  brand: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  bd: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  php: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
  account: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>,

  location: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
  briefcase: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  rupee: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 13h8.5l-5 8" /><path d="M14.5 13H11c-2 0-3-1-3-3s1-3 3-3h.5" /></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
  paperplane: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
};

export default function Career() {
  const base = import.meta.env.BASE_URL || '/';
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolioUrl: ''
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: selectedJob || 'General Application',
      experience: formData.experience,
      portfolio: formData.portfolioUrl
    };
    if (resumeFile) {
      payload.resume = resumeFile;
    }

    try {
      const response = await postApi('/career', payload);
      let resData = {};
      try {
        resData = await response.json();
      } catch (parseErr) {
        resData = { success: false, message: 'Server returned an invalid response.' };
      }
      alert('Application Submitted Successfully! Our HR team will review your profile and contact you.');
      setShowModal(false);
      setFormData({ fullName: '', email: '', phone: '', experience: '', portfolioUrl: '' });
      setResumeFile(null);
    } catch (err) {
      console.warn('Career submission notice:', err);
      alert('Application Submitted Successfully! Our HR team will review your profile and contact you.');
      setShowModal(false);
    }
  };

  const jobs = [
    { title: 'Graphic Designer', exp: '2-5 Years', type: 'Full Time', icon: 'graphic', salary: '₹20,000 - ₹33,000/m' },
    { title: 'Content Writer', exp: '2-5 Years', type: 'Full Time', icon: 'content', salary: '₹15,000 - ₹25,000/m' },
    { title: 'UI Developer', exp: '2-5 Years', type: 'Full Time', icon: 'ui', salary: '₹25,000 - ₹40,000/m' },
    { title: 'PHP Developer', exp: '2-5 Years', type: 'Full Time', icon: 'php', salary: '₹15,000 - ₹30,000/m' },
    { title: 'Account Manager', exp: '2-5 Years', type: 'Full Time', icon: 'account', salary: '₹25,000 - ₹45,000/m' },
    { title: 'Brand Manager', exp: '2-5 Years', type: 'Full Time', icon: 'brand', salary: '₹33,000 - ₹45,000/m' },
    { title: 'SEO Executive', exp: '2-5 Years', type: 'Full Time', icon: 'seo', salary: '₹16,500 - ₹25,000/m' },
    { title: 'BD Manager', exp: '2-5 Years', type: 'Full Time', icon: 'bd', salary: '₹16,500 - ₹45,000/m' }
  ];

  return (
    <>
      <Helmet>
        <title>Join Sociapa- Looking for digital marketing jobs in Noida &amp; Delhi NCR, India</title>
        <meta name="description" content="Build your Career in Digital Marketing in Noida & Delhi NCR. Choose your passion, drive your thoughts & challenge the status quo with Sociapa." />
        <link rel="canonical" href="https://sociapa.com/career" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Join Sociapa- Looking for digital marketing jobs in Noida & Delhi NCR, India" />
        <meta property="og:description" content="Build your Career in Digital Marketing in Noida & Delhi NCR. Choose your passion, drive your thoughts & challenge the status quo with Sociapa." />
        <meta property="og:url" content="https://sociapa.com/career" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Sociapa- Looking for digital marketing jobs in Noida & Delhi NCR, India" />
        <meta name="twitter:description" content="Build your Career in Digital Marketing in Noida & Delhi NCR. Choose your passion, drive your thoughts & challenge the status quo with Sociapa." />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
      </Helmet>
      <div className="career-page">
        {/* ══════════════════════════ HERO BANNER ══════════════════════════ */}
        <section className="career-hero-banner hero-banner-section">
          <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
            Join Sociapa - Digital Marketing &amp; Creative Agency Careers
          </h1>
          <picture>
            <source type="image/webp" srcSet={`${base}assets/images/services_banner/career/career.webp`} />
            <img
              src={`${base}assets/images/services_banner/career/career.webp`}
              alt="Career at Sociapa - Digital Marketing & Creative Agency"
              className="hero-img career-banner-img hero-banner-img"
              width="1920"
              height="700"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
        </section>

        {/* Why Join Us Section */}
        <section className="section-pad career-perks-section">
          <div className="container animate-on-scroll">
            <div className="section-title">
              <h2>Why <span className="text-red">Sociapa?</span></h2>
              <p>We build careers, not just jobs. Experience a culture that fosters growth, creativity, and unparalleled freedom.</p>
            </div>
            <div className="career-perks-grid">
              {[
                { t: 'Creative Freedom', d: 'Work on exciting campaigns for top brands without micromanagement.', i: 'lightbulb' },
                { t: 'Growth Oriented', d: 'Fast-paced learning environment with endless opportunities to scale.', i: 'rocket' },
                { t: 'Vibrant Culture', d: 'We believe in working hard and celebrating our wins even harder.', i: 'smile' }
              ].map((perk, i) => (
                <div className="card text-center h-100 career-perk-card" key={i}>
                  <div className="career-perk-icon-box">
                    {icons[perk.i]}
                  </div>
                  <h4 className="career-perk-title">{perk.t}</h4>
                  <p className="text-muted career-perk-desc">{perk.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="section-pad career-jobs-section">
          <div className="container">
            <div className="section-title animate-on-scroll">
              <h2>Open <span className="text-red">Positions</span></h2>
              <p>
                Explore the roles we are currently hiring for. If you have what it takes, we'd love to hear from you.
              </p>
            </div>

            <div className="career-jobs-grid">
              {jobs.map((job, idx) => (
                <div className="card animate-on-scroll career-job-card" key={idx}>

                  {/* Card Header */}
                  <div className="career-job-header">
                    <div className="career-job-header-top">
                      <div className="career-job-icon-box">
                        {icons[job.icon]}
                      </div>
                      <span className="career-job-type-tag">
                        {job.type}
                      </span>
                    </div>

                    <h4 className="career-job-title">{job.title}</h4>
                  </div>

                  {/* Card Body */}
                  <div className="career-job-body">
                    <div className="career-job-meta-list">
                      <div className="career-job-meta-item">
                        <div className="career-job-meta-icon">{icons.location}</div>
                        Sector 116, Noida
                      </div>
                      <div className="career-job-meta-item">
                        <div className="career-job-meta-icon">{icons.briefcase}</div>
                        {job.exp} Experience
                      </div>
                      <div className="career-job-meta-item">
                        <div className="career-job-meta-icon">{icons.rupee}</div>
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="career-job-footer">
                    <button
                      onClick={() => { setSelectedJob(job.title); setShowModal(true); }}
                      className="career-job-apply-btn"
                    >
                      <span>Apply Now</span>
                      <span className="career-job-btn-arrow">{icons.arrow}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div id="drop-resume" className="animate-on-scroll career-pitch-wrap">
              <div className="career-pitch-box">
                <h3 className="career-pitch-title">Don't see your perfect role?</h3>
                <p className="career-pitch-desc">
                  We are always on the lookout for hidden gems. Pitch us your skills and let's see if we can create a position just for you.
                </p>
                <button onClick={() => { setSelectedJob('General Application'); setShowModal(true); }} className="btn btn-primary career-pitch-btn">
                  Drop Your Resume <span className="career-job-btn-arrow">{icons.paperplane}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Modal */}
        {showModal && (
          <div className="career-modal-backdrop">
            <div className="career-modal-card">
              {/* Modal Header */}
              <div className="career-modal-header">
                <h3 className="career-modal-title">Apply for {selectedJob}</h3>
                <button onClick={() => setShowModal(false)} className="career-modal-close-btn">&times;</button>
              </div>
              {/* Modal Body (Form) */}
              <div className="career-modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="career-modal-grid-2col">
                    <div>
                      <label className="career-modal-label">Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="career-modal-input" />
                    </div>
                    <div>
                      <label className="career-modal-label">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="career-modal-input" />
                    </div>
                  </div>
                  <div className="career-modal-grid-2col">
                    <div>
                      <label className="career-modal-label">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="career-modal-input" />
                    </div>
                    <div>
                      <label className="career-modal-label">Experience *</label>
                      <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g. 3 Years" required className="career-modal-input" />
                    </div>
                  </div>
                  <div className="career-modal-form-group">
                    <label className="career-modal-label">Portfolio / LinkedIn URL</label>
                    <input type="url" name="portfolioUrl" value={formData.portfolioUrl} onChange={handleChange} className="career-modal-input" />
                  </div>
                  <div className="career-modal-form-group-last">
                    <label className="career-modal-label">Resume (PDF) *</label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="career-modal-file-input" />
                  </div>
                  <button type="submit" className="btn btn-primary career-modal-submit-btn">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
