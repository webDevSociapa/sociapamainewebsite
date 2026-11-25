import React from 'react';
import './ServiceClientSections.css';

function TeamQuoteCard({ item, index }) {
  const brandInitials = (item.brand || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase() || 'S';

  return (
    <div className="service-team-quote-card">
      <div className="quote-icon">“</div>
      <blockquote>"{item.quote}"</blockquote>

      <div className="service-team-author">
        <div className="service-team-badge-circle">{brandInitials}</div>
        <div className="service-team-meta">
          <div className="service-team-designation">{item.designation}</div>
          <div className="service-team-on-brand">
            on <strong>{item.brand}</strong>
          </div>
          {item.brandDescriptor && (
            <div className="service-team-brand-desc">{item.brandDescriptor}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServiceBehindWorkSection({
  testimonials = [],
  title,
  subtitle = 'Strategic insights and perspectives directly from the Sociapa specialists who shaped the campaigns.',
  id = 'testimonials'
}) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id={id} className="service-behind-work-section">
      <div className="service-sections-container">
        <div className="service-section-header">
          <span className="section-tag">From Our Team</span>
          {title || (
            <h2>
              Behind the <span>Work</span>
            </h2>
          )}
          <div className="divider"></div>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>

        <div className="service-behind-grid">
          {testimonials.map((item, idx) => (
            <TeamQuoteCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
