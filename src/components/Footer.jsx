import { Link } from 'react-router-dom'

const footerLinks = {
  "Brand & Design": [
    { label: "Brand Identity Design", href: "/brand-identity-design" },
    { label: "Brand Strategy & Positioning", href: "/brand-strategy" },
    { label: "Packaging & Label Design", href: "/best-packaging-design-agency-india" },
    { label: "Creative Designing", href: "/creative-designing" },
    { label: "Go-To-Market Strategy", href: "/go-to-market" },
    { label: "Product Unboxing Design", href: "/product-unboxing-experience" },
    { label: "Brand Foundation & Governance", href: "/gst-company-registration-services" },
  ],
  "Digital Marketing": [
    { label: "Social Media Marketing", href: "/best-social-media-marketing-agency-india" },
    { label: "Search Engine Optimisation (SEO)", href: "https://www.seoaeogeoservices.com/" },
    { label: "Answer Engine Optimisation (AEO)", href: "https://www.seoaeogeoservices.com/" },
    { label: "Generative Engine Optimisation (GEO)", href: "https://www.seoaeogeoservices.com/" },
    { label: "Meta & Google Ads", href: "/pay-per-click-ppc-services-india" },
    { label: "Pay Per Click (PPC) Advertising", href: "/pay-per-click-ppc-services-india" },
    { label: "Email & WhatsApp Marketing", href: "/email-marketing-services" },
    { label: "Influencer Marketing", href: "/influencer-marketing-services" },
  ],
  "Creative & Technology": [
    { label: "Video Production & Editing", href: "/videos" },
    { label: "Product Photography", href: "/best-photography-services" },
    { label: "Reels & Short-Form Content", href: "/videos" },
    { label: "PR & Media Relations", href: "/best-pr-agency-india" },
    { label: "Content Marketing", href: "/content-designing" },
    { label: "Website Development", href: "/best-web-development-agency-india" },
    { label: "App Development", href: "/best-web-development-agency-india" },
  ],
  "Company & Resources": [
    { label: "About Sociapa", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights & Blog", href: "/blog" },
    { label: "Awards & Recognition", href: "/best-creative-and-digital-agency-award" },
    { label: "Press Release", href: "/sociapas-press-release" },
    { label: "ChatGPT Ads Playbook", href: "pdf/ChatGPT_Ads_India_FMCG_Playbook_Sociapa.pdf", isPdf: true, isNew: true },
    { label: "Contact Us", href: "/contact-us" },
  ],
}

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sociapa",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sociapa.official",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@sociapa",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sociapa",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/sociapa",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Snapchat",
    href: "https://www.snapchat.com/add/sociapa?share_id=z-HBGa37PO4&locale=en-GB",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001 2c-3.113 0-5.467 2.146-5.467 5.093 0 .762.181 1.729.418 2.373.109.301.037.498-.195.666-.356.257-.962.531-1.579.799-.444.193-.664.498-.445.894.254.457.947.674 1.488.825.295.083.479.25.437.564-.093.682-.716 3.161-1.637 3.513-.425.163-.77.104-1.026-.143-.277-.267-.542-.397-.887-.272-.416.151-.559.608-.344.975.318.544 1.05 1.052 2.052 1.255.454.092.836.273 1.066.674.298.519.866.745 1.577.625.688-.117 1.484-.367 2.219-.575.645-.183 1.032-.089 1.341.229.49.506 1.077.506 1.566 0 .309-.318.696-.412 1.341-.229.735.208 1.531.458 2.219.575.711.12 1.279-.106 1.577-.625.23-.401.612-.582 1.066-.674 1.002-.203 1.734-.711 2.052-1.255.215-.367.072-.824-.344-.975-.345-.125-.61.005-.887.272-.256.247-.601.306-1.026.143-.921-.352-1.544-2.831-1.637-3.513-.042-.314.142-.481.437-.564.541-.151 1.234-.368 1.488-.825.219-.396-.001-.701-.445-.894-.617-.268-1.223-.542-1.579-.799-.232-.168-.304-.365-.195-.666.237-.644.418-1.611.418-2.373C17.468 4.146 15.114 2 12.001 2z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL || '/'

  return (
    <footer className="sf footer" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Sociapa" />
      <meta itemProp="url" content="https://www.sociapa.com" />
      <meta itemProp="telephone" content="+917082801075" />
      <meta itemProp="email" content="mail@sociapa.com" />

      <div className="sf-about-wrap">
        <div className="sf-about footer-about">
          <div className="sf-about__content footer-about-text">
            <div className="sf-about__label footer-about-label">About Sociapa</div>
            <p>
              <strong>Sociapa</strong> is a full-service creative digital marketing agency headquartered in{" "}
              <strong>Delhi NCR, India</strong>, with offices in <strong>Dubai, UAE</strong> and{" "}
              <strong>London, UK</strong>. We partner with startups, scale-ups, and established enterprises across FMCG, F&amp;B, fashion, real estate, healthcare, and technology sectors to build powerful brands and drive measurable digital growth. Our capabilities span{" "}
              <strong>brand identity design</strong>, <strong>packaging design</strong>,{" "}
              <strong>brand strategy &amp; positioning</strong>, <strong>performance marketing</strong>{" "}
              (Meta &amp; Google Ads), <strong>social media management</strong>,{" "}
              <strong>search engine optimisation (SEO)</strong>,{" "}
              <strong>answer engine optimisation (AEO)</strong>,{" "}
              <strong>generative engine optimisation (GEO)</strong>,{" "}
              <strong>photography &amp; videography</strong>, <strong>PR &amp; media relations</strong>,{" "}
              <strong>influencer marketing</strong>, <strong>website development</strong>,{" "}
              <strong>app development</strong>, and <strong>content marketing</strong> — all under one roof.
            </p>
          </div>
          <div className="sf-about__google">
            <a
              href="https://www.google.com/partners/agency?id=9183309111"
              target="_blank"
              rel="noopener noreferrer"
              title="Sociapa - Official Google Partner Agency"
              aria-label="Google Partner Badge"
            >
              <img
                src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                alt="Google Partner Agency Badge"
                width="145"
                height="140"
                loading="lazy"
                onError={(i) => {
                  i.target.onerror = null
                  i.target.src = `${baseUrl}images/PartnerBadgeClickable.svg`
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="sf-grid-wrap">
        <div className="sf-grid footer-grid">
          <div className="sf-logo-wrap footer-brand">
            <img
              src={`${baseUrl}logonew.webp`}
              alt="Sociapa Creative Agency"
              width="180"
              height="53"
              loading="lazy"
              decoding="async"
              className="sf-logo-img"
              onError={(i) => {
                i.target.onerror = null
                i.target.src = `${baseUrl}images/sociapa-register-footer-logo.png`
              }}
            />
            <p className="sf-tagline footer-tagline">
              An eminent creative digital marketing agency in Delhi NCR. Strategy-led. Design-obsessed. Results-driven.
            </p>
            <div className="sf-social footer-social">
              {socials.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={i.label}
                  title={i.label}
                >
                  {i.icon}
                  <span className="sr-only">{i.label}</span>
                </a>
              ))}
            </div>
            <div className="sf-contact footer-contact">
              <a href="mailto:mail@sociapa.com" itemProp="email" className="sf-contact-item">
                <span className="sf-contact-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="sf-contact-val">mail@sociapa.com</span>
              </a>
              <a href="tel:01203130443" className="sf-contact-item">
                <span className="sf-contact-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="sf-contact-val">0120 313 0443</span>
              </a>
              <a
                href="https://maps.google.com/?q=BL-02+Sector+116+Noida+India"
                rel="noopener noreferrer"
                target="_blank"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                className="sf-contact-item"
              >
                <meta itemProp="streetAddress" content="BL-02, Sector 116" />
                <meta itemProp="addressLocality" content="Noida" />
                <meta itemProp="addressRegion" content="Uttar Pradesh" />
                <meta itemProp="postalCode" content="201305" />
                <meta itemProp="addressCountry" content="IN" />
                <span className="sf-contact-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="sf-contact-val">BL-02, Sector 116, Noida, India</span>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="sf-col footer-col" key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map((link, idx) => {
                  if (link.href.startsWith("http") || link.href.endsWith(".pdf") || link.isPdf) {
                    const href = link.href.startsWith("http")
                      ? link.href
                      : `${baseUrl}${link.href.replace(/^\//, "")}`
                    return (
                      <li key={`${link.href}-${idx}`}>
                        <a href={href} target="_blank" rel="noopener noreferrer" className="footer-link-item">
                          <span>{link.label}</span>
                          {link.isNew && <span className="sf-badge-new">NEW</span>}
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={`${link.href}-${idx}`}>
                      <Link to={link.href} className="footer-link-item">
                        <span>{link.label}</span>
                        {link.isNew && <span className="sf-badge-new">NEW</span>}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              {title === "Company & Resources" && (
                <div className="sf-col-offices">
                  <h4>Our Offices</h4>
                  <ul>
                    <li><Link to="/contact-us" className="footer-link-item">Noida — Delhi (Head Office)</Link></li>
                    <li><Link to="/contact-us" className="footer-link-item">Dubai, UAE</Link></li>
                    <li><Link to="/contact-us" className="footer-link-item">London, UK</Link></li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="sf-tags-wrap">
        <div className="sf-tags-inner">
          <div className="sf-tags-header">
            <span>Popular Services &amp; Global Regions</span>
          </div>
          <div className="sf-tags">
            <Link to="/brand-identity-design">Branding Agency in Delhi</Link>
            <Link to="/best-digital-marketing-services-india">Digital Marketing Agency Delhi NCR</Link>
            <Link to="/creative-designing">Creative Agency in Noida</Link>
            <Link to="/pay-per-click-ppc-services-india">Advertising Agency Noida Sector 116</Link>
            <Link to="/best-digital-marketing-services-india">Marketing Agency in Delhi</Link>
            <Link to="/our-services">Brand Studio Delhi NCR</Link>
            <Link to="/seo-aeo-geo">SEO Agency Delhi</Link>
            <Link to="/best-social-media-marketing-agency-india">Social Media Agency Delhi</Link>
            <Link to="/best-packaging-design-agency-india">Packaging Design Agency India</Link>
            <Link to="/our-services">Performance Marketing Agency Delhi</Link>
            <Link to="/best-pr-agency-india">PR Agency Delhi NCR</Link>
            <Link to="/seo-aeo-geo">AEO &amp; GEO Agency India</Link>
            <Link to="/best-digital-marketing-services-india">Digital Marketing Agency Dubai UAE</Link>
            <Link to="/contact-us">Branding Agency London UK</Link>
          </div>
        </div>
      </div>

      <div className="sf-bottom-wrap">
        <div className="sf-bottom footer-bottom">
          <span className="sf-copyright">
            © 2019-2026 Sociapa. All rights reserved. Creative Digital Marketing Agency — Noida · Delhi NCR · Dubai · London
          </span>
          <div className="sf-bottom-links footer-bottom-links">
            <a href={`${baseUrl}profile/Creative-Profile.pdf`} target="_blank" rel="noopener noreferrer">Creative Profile</a>
            <Link to="/sociapa-profile">Company Profile</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-condition">Terms &amp; Condition</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
