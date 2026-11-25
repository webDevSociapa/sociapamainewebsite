import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './CalendarViewer.css'

export default function CalendarViewer() {
  const base = import.meta.env.BASE_URL || '/';
  const calendarUrl = `${base}calendar-2026/index.html`;

  return (
    <>
      <Helmet>
        <title>Sociapa – Social Media &amp; Marketing Calendar 2026 | Digital Marketing Agency India</title>
        <meta name="description" content="Explore Sociapa's complete 2026 Social Media &amp; Marketing Calendar. Month-by-month guide to important dates, festivals, campaigns, and commercial moments for brands in India." />
        <link rel="canonical" href="https://sociapa.com/calendar-2026" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sociapa Social Media &amp; Marketing Calendar 2026" />
        <meta property="og:description" content="Plan your 2026 marketing campaigns around India's key festivals, holidays, and commercial opportunities with Sociapa." />
        <meta property="og:url" content="https://sociapa.com/calendar-2026" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Sociapa Social Media &amp; Marketing Calendar 2026" />
        <meta name="twitter:description" content="Plan your 2026 marketing campaigns around India's key festivals, holidays, and commercial opportunities with Sociapa." />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
      </Helmet>

      <div className="calendar-viewer-wrapper">
        <h1
          className="visually-hidden"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Sociapa Social Media &amp; Marketing Calendar 2026
        </h1>
        <Link to="/" className="calendar-viewer-back-btn" title="Back to Website">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Website</span>
        </Link>
        <iframe
          src={calendarUrl}
          className="calendar-viewer-iframe"
          title="Sociapa 2026 Social Media &amp; Marketing Calendar"
          allow="fullscreen"
          allowFullScreen
        />
      </div>
    </>
  )
}
