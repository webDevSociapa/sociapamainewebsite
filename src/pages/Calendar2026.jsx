import { Helmet } from 'react-helmet-async';
import './Calendar2026.css';

export default function Calendar2026() {
  return (
    <>
      <Helmet>
        <title>Calendar 2026 - Coming Soon | Sociapa</title>
        <meta name="description" content="Stay tuned for the Sociapa 2026 Calendar." />
      </Helmet>

      {/* Hero Section */}
      <section className="section section-pad cal2026-hero-section">
        <div className="container text-center animate-on-scroll">
          <div className="glass-card d-inline-block p-5 cal2026-glass-card">
            <h6 className="text-red poppins-medium mb-3 cal2026-sub">GET READY</h6>
            <h1 className="text-white poppins-bold mb-4 cal2026-h1">
              Calendar <span className="text-red">2026</span>
            </h1>
            <p className="mx-auto text-muted mb-5 cal2026-desc">
              We are brewing something extraordinary. Our 2026 calendar is coming soon. Stay tuned for updates.
            </p>
            <a href="/" className="btn btn-primary cal2026-btn">Back to Home</a>
          </div>
        </div>
      </section>
    </>
  );
}
