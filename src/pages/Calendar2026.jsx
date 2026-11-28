import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Calendar2026.css';

export default function Calendar2026() {
  return (
    <>
      <Helmet>
        <title>Social Media Calendar 2026 | Upcoming Dates &amp; Campaigns | Sociapa</title>
        <meta name="description" content="Stay tuned for the Sociapa 2026 Social Media Calendar – your complete guide to important dates, festivals, events, and campaign opportunities for brands in India." />
        <link rel="canonical" href="https://sociapa.com/2026" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Social Media Calendar 2026 | Upcoming Dates & Campaigns | Sociapa" />
        <meta property="og:description" content="Sociapa's Social Media Calendar 2026 – plan your brand campaigns around important dates, festivals, and events in India." />
        <meta property="og:url" content="https://sociapa.com/2026" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Calendar 2026 | Sociapa" />
        <meta name="twitter:description" content="Sociapa's 2026 Social Media Calendar – coming soon. Plan your brand campaigns around India's major festivals and events." />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="section section-pad cal2026-hero-section">
        <div className="container text-center animate-on-scroll">
          <div className="glass-card d-inline-block p-5 cal2026-glass-card">
            <div className="text-red poppins-medium mb-3 cal2026-sub">GET READY</div>
            <h1 className="text-white poppins-bold mb-4 cal2026-h1">
              Calendar <span className="text-red">2026</span>
            </h1>
            <p className="mx-auto text-muted mb-5 cal2026-desc">
              We are brewing something extraordinary. Our 2026 calendar is coming soon. Stay tuned for updates.
            </p>
            <Link to="/" className="btn btn-primary cal2026-btn">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
