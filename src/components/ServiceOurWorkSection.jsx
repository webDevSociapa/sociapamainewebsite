import React, { useState } from 'react';
import './ServiceClientSections.css';

function WorkCard({ item, index, base }) {
  const [imgError, setImgError] = useState(false);
  const [showDeliverables, setShowDeliverables] = useState(false);

  const hasDeliverables =
    item.servicesDelivered &&
    ((item.servicesDelivered.core && item.servicesDelivered.core.length > 0) ||
      (item.servicesDelivered.alsoDelivered && item.servicesDelivered.alsoDelivered.length > 0));

  const initials = (item.title || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase() || 'S';

  const logoSrc = item.logo ? `${base}${item.logo.replace(/^\//, '')}` : null;
  const hasValidLink = typeof item.link === 'string' && /^https?:\/\//i.test(item.link.trim());

  return (
    <div className="service-work-card">
      <div className="service-work-preview">
        <div className="service-work-logo-box">
          {logoSrc && !imgError ? (
            <img
              src={logoSrc}
              alt={item.imageAlt || `${item.title} - Project Case Study`}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="service-work-fallback-logo">
              <div className="service-work-avatar-circle">{initials}</div>
              <span className="service-work-fallback-title">{item.title}</span>
            </div>
          )}
        </div>

        {item.category && (
          <span className="service-work-badge">{item.category}</span>
        )}

        {hasValidLink && (
          <div className="service-work-overlay">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="service-work-overlay-btn"
            >
              ↗ View Project
            </a>
          </div>
        )}
      </div>

      <div className="service-work-info">
        <h4>{item.title}</h4>
        <p className="project-desc">{item.description}</p>

        {hasDeliverables && (
          <div
            className={`service-deliverables-toggle ${showDeliverables ? 'open' : ''}`}
            onClick={() => setShowDeliverables(!showDeliverables)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setShowDeliverables(!showDeliverables);
              }
            }}
          >
            <div className="service-deliverables-header">
              <span>Services Delivered</span>
              <span className="service-deliverables-chevron">▼</span>
            </div>

            {showDeliverables && (
              <div className="service-deliverables-content">
                {item.servicesDelivered.core && item.servicesDelivered.core.length > 0 && (
                  <ul className="service-deliverables-list">
                    {item.servicesDelivered.core.map((deliverable, dIdx) => (
                      <li key={dIdx}>{deliverable}</li>
                    ))}
                  </ul>
                )}
                {item.servicesDelivered.alsoDelivered && item.servicesDelivered.alsoDelivered.length > 0 && (
                  <div className="service-also-delivered">
                    <strong>Also delivered for this brand:</strong>
                    <span>{item.servicesDelivered.alsoDelivered.join(', ')}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="service-work-tags">
            {item.tags.map((t, tIdx) => (
              <span key={tIdx} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServiceOurWorkSection({
  work = [],
  title,
  subtitle,
  id = 'portfolio'
}) {
  if (!work || work.length === 0) return null;

  const base = import.meta.env.BASE_URL || '/';

  return (
    <section id={id} className="service-client-work-section">
      <div className="service-sections-container">
        <div className="service-section-header">
          <span className="section-tag">Our Work</span>
          {title || (
            <h2>
              Selected <span>Work &amp; Case Studies</span>
            </h2>
          )}
          <div className="divider"></div>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>

        <div className="service-work-grid">
          {work.map((item, idx) => (
            <WorkCard key={idx} item={item} index={idx} base={base} />
          ))}
        </div>
      </div>
    </section>
  );
}
