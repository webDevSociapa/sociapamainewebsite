import { Link } from 'react-router-dom'

const footerLinks = {
  "Brand & Design": [
    { label: 'Brand Identity Design', href: '/brand-identity-design' },
    { label: 'Brand Strategy & Positioning', href: '/brand-strategy' },
    { label: 'Packaging & Label Design', href: '/best-packaging-design-agency-india' },
    { label: 'Creative Designing', href: '/creative-designing' },
    { label: 'Go-To-Market Strategy', href: '/go-to-market' },
    { label: 'Product Unboxing Design', href: '/product-unboxing-experience' },
    { label: 'Brand Naming & Trademark', href: '/gst-company-registration-services' },
    { label: 'Brand Guidelines & Playbooks', href: '/gst-company-registration-services' },
  ],
  "Digital Marketing": [
    { label: 'Performance Marketing', href: '/our-services' },
    { label: 'Social Media Marketing', href: '/best-social-media-marketing-agency-india' },
    { label: 'Search Engine Optimisation (SEO)', href: '/seo-aeo-geo' },
    { label: 'Answer Engine Optimisation (AEO)', href: '/seo-aeo-geo' },
    { label: 'Generative Engine Optimisation (GEO)', href: '/seo-aeo-geo' },
    { label: 'Meta & Google Ads', href: '/pay-per-click-ppc-services-india' },
    { label: 'Email & WhatsApp Marketing', href: '/email-marketing-services' },
    { label: 'Influencer Marketing', href: '/influencer-marketing-services' },
  ],
  "Creative & Tech": [
    { label: 'Video Production & Editing', href: '/videos' },
    { label: 'Product Photography', href: '/best-photography-services' },
    { label: 'Reels & Short-Form Content', href: '/videos' },
    { label: 'PR & Media Relations', href: '/best-pr-agency-india' },
    { label: 'Content Marketing', href: '/content-designing' },
    { label: 'Website Development', href: '/best-web-development-agency-india' },
    { label: 'App Development', href: '/best-web-development-agency-india' },
    { label: 'Pay Per Click Advertising', href: '/pay-per-click-ppc-services-india' },
  ],
  "Company": [
    { label: 'About Sociapa', href: '/about' },
    { label: 'Insights & Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
  ]
}

const socials = [
  { label: 'Facebook', icon: 'f', href: 'https://www.facebook.com/sociapa' },
  { label: 'Instagram', icon: '📷', href: 'https://www.instagram.com/sociapa' },
  { label: 'YouTube', icon: '▶', href: 'https://www.youtube.com/@sociapa' },
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/company/sociapa' },
  { label: 'Twitter', icon: '𝕏', href: 'https://twitter.com/sociapa' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        

        {/* About Tagline Section */}
        <div className="footer-about">
          <div className="footer-about-label">About Sociapa</div>
          <p>
            <strong>Sociapa</strong> is a full-service creative digital marketing agency headquartered in <strong>Delhi NCR, India</strong>, with offices in <strong>Dubai, UAE</strong> and <strong>London, UK</strong>. We partner with startups, scale-ups, and established enterprises across FMCG, F&B, fashion, real estate, healthcare, and technology sectors to build powerful brands and drive measurable digital growth. Our capabilities span <strong>brand identity design</strong>, <strong>packaging design</strong>, <strong>brand strategy & positioning</strong>, <strong>performance marketing</strong> (Meta & Google Ads), <strong>social media management</strong>, <strong>search engine optimisation (SEO)</strong>, <strong>answer engine optimisation (AEO)</strong>, <strong>generative engine optimisation (GEO)</strong>, <strong>photography & videography</strong>, <strong>PR & media relations</strong>, <strong>influencer marketing</strong>, <strong>website development</strong>, <strong>app development</strong>, and <strong>content marketing</strong> — all under one roof.
          </p>
        </div>

        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <img src={`${import.meta.env.BASE_URL}logonew.png`} alt="Sociapa"  loading="lazy" decoding="async" />
            <p className="footer-tagline">
              An eminent creative digital marketing agency in Delhi NCR. Strategy-led. Design-obsessed. Results-driven.
            </p>
            <div className="footer-social">
              {socials.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <a href="mailto:mail@sociapa.com">✉ mail@sociapa.com</a>
              <a href="tel:+917011057175">☎ +91 7011057175</a>
              <a href="tel:+918287445375">☎ +91 8287445375</a>
              <a href="https://maps.google.com/?q=BL-02+Sector+116+Noida+India" target="_blank" rel="noopener noreferrer">
                📍 BL-02, Sector 116, Noida,<br/>India
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], groupIndex) => (
            <div className="footer-col" key={title}>
              <h4>{title}</h4>
              <div className="footer-links">
                {links.map((link, idx) => (
                  <Link key={`${link.href}-${idx}`} to={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Special append for Company column */}
              {title === 'Company' && (
                <>
                  <h4 className="footer-col-subheading">Our Offices</h4>
                  <div className="footer-links">
                    <Link to="/contact-us">Noida — Delhi (Head Office) INDIA</Link>
                    <Link to="/contact-us">Dubai, UAE</Link>
                    <Link to="/contact-us">London, UK</Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Popular Services & Regions Pills */}
        <div className="sf-tags-wrapper">
          <div className="sf-tags-title">Popular Services &amp; Global Regions</div>
          <div className="sf-tags">
            <Link to="/brand-identity-design">Branding Agency in Delhi</Link>
            <Link to="/best-digital-marketing-services-india">Digital Marketing Agency Delhi NCR</Link>
            <Link to="/creative-designing">Creative Agency in Noida</Link>
            <Link to="/pay-per-click-ppc-services-india">Advertising Agency Noida</Link>
            <Link to="/best-digital-marketing-services-india">Marketing Agency in Delhi</Link>
            <Link to="/our-services">Brand Studio Delhi NCR</Link>
            <Link to="/seo-aeo-geo">SEO Agency Delhi</Link>
            <Link to="/best-social-media-marketing-agency-india">Social Media Agency Delhi</Link>
            <Link to="/best-packaging-design-agency-india">Packaging Design Agency India</Link>
            <Link to="/our-services">Performance Marketing Agency</Link>
            <Link to="/best-pr-agency-india">PR Agency Delhi NCR</Link>
            <Link to="/seo-aeo-geo">AEO &amp; GEO Agency India</Link>
            <Link to="/best-digital-marketing-services-india">Digital Marketing Agency Dubai</Link>
            <Link to="/contact-us">Branding Agency London</Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sociapa. All rights reserved. Creative Digital Marketing Agency — Noida · Delhi NCR · Dubai · London</p>
          <div className="footer-bottom-links">
            <a href={import.meta.env.BASE_URL + "profile/Creative-Profile.pdf"} target="_blank" rel="noopener noreferrer">Creative Profile</a>
            <Link to="/sociapa-profile">Company Profile</Link> 
            <Link to="/career">Career</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-condition">Terms & Condition</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
