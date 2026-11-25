import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/our-services' },
  { label: 'Influencer', href: '/influencers-marketplace' },
  { label: 'Blog', href: '/blog' },
  { label: 'Career', href: '/career' },
  { label: 'Audit', href: '/free-website-audit' },
  { label: 'Stories', href: '/stories' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Calendar 2026', href: '/calendar-2026' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
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
            <img src={`${import.meta.env.BASE_URL}logonew.webp`} alt="Sociapa — Your Social Buddy" className="navbar-logo" width="220" height="65" fetchpriority="high" decoding="async" />
          </Link>

          {/* Desktop Links */}
          <div className="nav-links">
            {navItems.map(item => (
              <NavLink key={item.href} to={item.href}>{item.label}</NavLink>
            ))}
          </div>

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
            <img src={`${import.meta.env.BASE_URL}logonew.webp`} alt="Sociapa" className="navbar-logo" width="140" height="37" />
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
          </div>
          <div className="mobile-nav-footer">
            <Link
              to="/contact-us"
              className="btn btn-primary mobile-nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
