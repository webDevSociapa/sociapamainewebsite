import React from 'react';

export default function Testimonials() {
  const base = import.meta.env.BASE_URL;

  const reviews = [
    'images/review.webp',
    'images/review2.webp',
    'images/review3.webp',
    'images/review4.webp',
  ];

  // Triplicate the reviews array to ensure continuous scrolling
  const doubleReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="section bg-light testimonials-section" id="testimonials" style={{ overflow: 'hidden', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '100%', padding: '0' }}>

        {/* Section Heading */}
        <div className="section-title testimonials-heading-wrap" style={{ textAlign: 'center', marginBottom: '50px', padding: '0 20px' }}>
          <div className="testimonials-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fee2e2', color: '#d20c0c', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            <span className="testimonials-label-dot" style={{ width: '6px', height: '6px', background: '#d20c0c', borderRadius: '50%' }} />
            CLIENT REVIEWS &amp; FEEDBACK
          </div>
          <h2 className="testimonials-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', margin: '0 0 16px 0' }}>
            What Our <span className="testimonials-title-red" style={{ color: '#d20c0c' }}>Clients Say</span>
          </h2>
          <p className="testimonials-desc" style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}>
            Real appreciation posts and feedback from brand managers, executives, and leaders working with Sociapa.
          </p>
        </div>



        {/* Testimonials Slider */}
        <div className="testimonials-slider-container">
          <div className="testimonials-slider-track">
            {doubleReviews.map((img, i) => (
              <div
                key={i}
                className="testimonial-slide-card"
              >
                <img
                  src={`${base}${img}`}
                  alt={`Client Review ${i + 1}`}
                  className="testimonial-slide-img"
                  width="380"
                  height="516"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
