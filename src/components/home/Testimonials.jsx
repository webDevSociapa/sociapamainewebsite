import React from 'react';

export default function Testimonials() {
  const base = import.meta.env.BASE_URL;

  const reviews = [
    'images/review.jpg',
    'images/review2.jpg',
    'images/review3.jpg',
    'images/review4.png',
  ];

  return (
    <section className="section bg-light testimonials-section" id="testimonials">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title testimonials-heading-wrap">
          <div className="testimonials-label">
            <span className="testimonials-label-dot" />
            CLIENT REVIEWS &amp; FEEDBACK
          </div>
          <h2 className="testimonials-title">
            What Our <span className="testimonials-title-red">Clients Say</span>
          </h2>
          <p className="testimonials-desc">
            Real appreciation posts and feedback from brand managers, executives, and leaders working with Sociapa.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {reviews.map((img, i) => (
            <div
              key={i}
              className="testimonial-card"
            >
              <img
                src={`${base}${img}`}
                alt={`Client Review ${i+1}`}
                className="testimonial-card-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
