import { Link } from 'react-router-dom'

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp — LEFT side */}
      <div className="floating-btns floating-left">
        <a
          href="https://wa.me/917011057175"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-btn-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          <span className="float-pulse-ring" />
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.875L.057 23.985l6.304-1.654A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.501-5.223-1.375l-.374-.222-3.742.981.999-3.648-.244-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          <span className="float-label float-label-right">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Company Profile + Email — RIGHT side */}
      <div className="floating-btns floating-right">
        <Link
          to="/sociapa-profile"
          className="float-btn float-btn-profile"
          aria-label="Company Profile"
          style={{ marginBottom: '20px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <span className="float-label float-label-left">Company Profile</span>
        </Link>

        <Link
          to="/contact-us"
          className="float-btn float-btn-email"
          aria-label="Contact Us"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span className="float-label float-label-left">Contact Us</span>
        </Link>
      </div>
    </>
  )
}
