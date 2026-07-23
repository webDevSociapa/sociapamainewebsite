import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'About Us',      href: '/about' },
  { label: 'Services',      href: '/our-services' },
  { label: 'Influencer',    href: '/influencers-marketplace' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Career',        href: '/career' },
  { label: 'Awards',        href: '/best-creative-and-digital-agency-award' },
  { label: 'Press Release', href: '/sociapas-press-release' },
  { label: 'Audit',         href: '/free-website-audit' },
  { label: 'Stories',       href: '/stories' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo-link" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>
            <img src={`${import.meta.env.BASE_URL}logonew.webp?v=2`} alt="Sociapa — Your Social Buddy" className="navbar-logo" width="180" height="48" fetchpriority="high" decoding="async" />
          </Link>

          {/* Desktop Links */}
          <div className="nav-links">
            {navItems.map(item => (
              <Link key={item.href} to={item.href}>{item.label}</Link>
            ))}
            <a href={`${import.meta.env.BASE_URL}profile/calendar-26.pdf`} target="_blank" rel="noreferrer">Calendar 2026</a>
          </div>

          {/* Desktop CTA */}
          <Link to="/contact-us" className="btn btn-primary nav-cta">
            Contact Us ✦
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>
            <img src={`${import.meta.env.BASE_URL}logonew.webp?v=2`} alt="Sociapa" className="navbar-logo" width="140" height="37" />
          </Link>
          <button className="mobile-nav-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <div className="mobile-nav-body">
          <div className="mobile-nav-links">
            {navItems.map(item => (
              <Link key={item.href} to={item.href} className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
                <span className="mobile-nav-arrow">›</span>
              </Link>
            ))}
            <a href={`${import.meta.env.BASE_URL}profile/calendar-26.pdf`} target="_blank" rel="noreferrer" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
              <span>Calendar 2026</span>
              <span className="mobile-nav-arrow">↗</span>
            </a>
          </div>
          <div className="mobile-nav-footer">
            <Link
              to="/contact-us"
              className="btn btn-primary mobile-nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us ✦
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
