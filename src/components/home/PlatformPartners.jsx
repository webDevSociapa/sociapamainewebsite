export default function PlatformPartners() {
  const partners = [
    { img: '/sociapareact/images/ads/meta.png', name: 'Meta' },
    { img: '/sociapareact/images/ads/amazon-ads.png', name: 'Amazon Ads' },
    { img: '/sociapareact/images/ads/marketing.png', name: 'LinkedIn Marketing' },
    { img: '/sociapareact/images/ads/jiostar.png', name: 'Jio Hotstar' },
    { img: '/sociapareact/images/ads/spotify.png', name: 'Spotify Ads' },
  ]

  return (
    <section className="section section-pad bg-white">
      <div className="container">
        
        <div className="section-title animate-on-scroll">
          <h2 className="text-red poppins-semibold mb-2 partners-title">
            Proudly Trusted by Our <span className="text-black">Platform Partners</span>
          </h2>
          <p className="mx-auto partners-desc">
            We collaborate with leading advertising and marketing platforms to deliver impactful digital growth solutions.
          </p>
        </div>

        <div className="partners-grid animate-on-scroll delay-1">
          {partners.map((partner, i) => (
            <div key={i} className="partner-card glass-card center-flex hover-scale partner-card-box">
              <img 
                src={partner.img} 
                alt={partner.name} 
                className="partner-card-img"
                loading="lazy" decoding="async" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
