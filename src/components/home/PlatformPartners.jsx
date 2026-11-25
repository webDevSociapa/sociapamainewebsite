export default function PlatformPartners() {
  const base = import.meta.env.BASE_URL;
  const partners = [
    { img: `${base}images/ads/meta.webp`,      name: 'Meta Business Partner' },
    { img: `${base}images/ads/jiostar.webp`,   name: 'JioHotstar Ads' },
    { img: `${base}images/ads/amazon-ads.webp`,name: 'Amazon Ads' },
    { img: `${base}images/ads/marketing.webp`, name: 'LinkedIn Marketing Partner' },
    { img: `${base}images/ads/spotify.webp`,   name: 'Spotify Ads' },
  ]

  return (
    <section className="partners-banner-section">
      <div className="partners-banner-inner">

        {/* LEFT: heading + description */}
        <div className="partners-banner-left">
          <h2 className="partners-banner-heading">
            PROUDLY TRUSTED BY<br />OUR PLATFORM PARTNERS
          </h2>
          <p className="partners-banner-desc">
            These are our giants, our strengthening bond is a testament to the success
            that we have helped them achieve. At Sociapa we believe in modern
            marketing, creative ideas and big hearts.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="partners-banner-divider" aria-hidden="true" />

        {/* RIGHT: logo cards */}
        <div className="partners-banner-logos">
          {partners.map((partner, i) => (
            <div key={i} className="partners-banner-card">
              <img
                src={partner.img}
                alt={partner.name}
                className="partners-banner-img"
                width="160"
                height="70"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
