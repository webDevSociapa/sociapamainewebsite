import { Link } from 'react-router-dom'

export default function WeDeliver() {
  const base = import.meta.env.BASE_URL || '/';
  const points = [
    { img: `${base}images/sustainability.png`, text: 'Sustainability' },
    { img: `${base}images/foundation.png`, text: 'Solid Foundation' },
    { img: `${base}images/positioning.png`, text: 'Brand Positioning' },
    { img: `${base}images/analyzing.png`, text: 'Analyzing' },
  ]

  return (
    <section className="section bg-light relative-overflow-hidden">
      <div className="container">
        <div className="we-deliver-grid">

          <div className="we-deliver-content animate-on-scroll delay-1">
            <h4 className="fw-600 mb-1 we-deliver-heading-sub">
              We craft the
            </h4>
            <h2 className="text-red fw-800 mb-1 we-deliver-heading-main">
              Best Solution
            </h2>
            <h4 className="fw-600 mb-4 we-deliver-heading-sub">
              With kickass effort
            </h4>

            <p className="mb-5 we-deliver-desc">
              We believe in not just creating a strong foundation for your brand position, but also in maintaining its sustainability for the foreseeable future. We create iconic interacting canvases to develop imaginative experiences for your business by providing the best <span className="fw-700 text-red">creative branding in Delhi NCR</span> and beyond.
            </p>

            <div className="we-deliver-points">
              {points.map((p, i) => (
                <div key={i} className="point-card glass-card">
                  <img src={p.img} alt={p.text} className="point-icon" loading="lazy" decoding="async" />
                  <span className="fw-600">{p.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3">
              <Link to="/about" className="btn btn-primary we-deliver-btn">
                Know More ↗
              </Link>
            </div>
          </div>

          <div className="we-deliver-image animate-on-scroll delay-3">
            <img src={`${base}images/weDeliver4.png`} alt="Best Solution" className="responsive-img float-animation" loading="lazy" decoding="async" />
          </div>

        </div>
      </div>
    </section>
  )
}
