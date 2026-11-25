import { useState, useEffect } from 'react'
import './CookieConsent.css'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedStorage = typeof window !== 'undefined' && localStorage.getItem('cookieControl') === 'true'
    const hasAcceptedCookie = typeof document !== 'undefined' && document.cookie.split(';').some(c => c.trim().startsWith('cookieControl='))

    if (!hasAcceptedStorage && !hasAcceptedCookie) {
      // 600ms delay matching sociapa.com original configuration
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setIsClosing(true)

    // Set cookie for 1 year (365 days)
    const d = new Date()
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + d.toUTCString()
    document.cookie = `cookieControl=true; ${expires}; path=/; SameSite=Lax`

    const preferences = ['necessary', 'preferences', 'analytics', 'marketing']
    document.cookie = `cookieControlPrefs=${encodeURIComponent(JSON.stringify(preferences))}; ${expires}; path=/; SameSite=Lax`

    // Also persist in localStorage
    try {
      localStorage.setItem('cookieControl', 'true')
      localStorage.setItem('cookieControlPrefs', JSON.stringify(preferences))
    } catch {
      // Ignore if localStorage unavailable
    }

    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      id="gdpr-cookie-message"
      className={isClosing ? 'gdpr-cookie-closing' : ''}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Consent"
    >
      <div className="gdpr-cookie-title" role="heading" aria-level="3">
        Accept Cookies &amp; Privacy Policy?
      </div>
      <p>
        We and our partners use cookies in order to enable essential services and
        functionality on our site, to collect data on how visitors interact with
        our site, products and services and for personalization of content and ads.
        By clicking Accept, you agree to our use of cookies.
      </p>
      <div className="gdpr-cookie-action">
        <button
          id="gdpr-cookie-accept"
          type="button"
          onClick={handleAccept}
          aria-label="Accept Cookies"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  )
}
