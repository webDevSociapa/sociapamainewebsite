import React, { useRef } from 'react'

export default function CaseStudies() {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  const BASE = import.meta.env.BASE_URL

  const caseStudies = [
    {
      img: `${BASE}images/apisStudy2.jpg`,
      title: 'Apis Influencer Campaign',
      desc: 'To promote health and fitness, planned an Influencer campaign #WhenIThinkHealthy for Apis India with Ranveer Brar, Zakir Khan and other influencers.',
      link: `${BASE}pdf/Apis-Influencer-Campaign.pdf`
    },
    {
      img: `${BASE}images/mintStudy.jpg`,
      title: 'Mint ChocOn Influencer Campaign',
      desc: 'To promote & establish the central communication for Mint ChocOn “MINT NAHI HINT HAI” a quiz campaign with pairs of friends & couple influencers was executed.',
      link: `${BASE}pdf/Mint-Chocon-Influencer-Campaign.pdf`
    },
    {
      img: `${BASE}images/mintLaunch.jpg`,
      title: 'Mint ChocOn Product Launch',
      desc: 'Launched the Brand Mint ChocOn, refreshing and a chocolaty candy under the Mahak group of Industries. Planned amplification & promotional activities.',
      link: `${BASE}pdf/Mint-ChocOn-Product-Launch.pdf`
    },
    {
      img: `${BASE}images/pansari-case.jpg`,
      title: 'Aahar Event Coverage',
      desc: 'Influencer Campaign for a product launch for Pansari, at the Aahar event, held at Pragati Maidan. Covered by a pool of influencers visiting the stall.',
      link: `${BASE}pdf/Aahar-Influencer-Event-Coverage.pdf`
    },
    {
      img: `${BASE}images/ramadanCaseStudy.jpg`,
      title: 'Apis Ramadan Campaign',
      desc: 'A Beautiful film shot in the Premises of old Delhi, imparting a message of Unity and spreading Positivity during the month of Ramadan.',
      link: `${BASE}pdf/Apis-Ramadan-Campaign.pdf`
    }
  ]

  return (
    <section className="section section-pad bg-light" id="casestudies">
      <div className="container">
        
        <div className="section-title animate-on-scroll center-align mb-5 case-studies-header">
          <div className="case-studies-label">
            <span className="case-studies-label-dot" />
            FEATURED CAMPAIGNS
          </div>
          <h2 className="poppins-semibold mb-2 case-studies-title">
            Case <span className="case-studies-title-red">Studies</span>
          </h2>
        </div>

        <div className="case-studies-wrapper animate-on-scroll delay-1">
          <div className="case-studies-scroll" ref={scrollRef}>
            {caseStudies.map((item, i) => (
              <div
                key={i}
                className="case-card"
              >
                {/* Image Frame - Ambient Dark Frame with NO Cropping */}
                <div className="case-card-img-frame">
                  <div className="case-card-img-glow" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="case-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="case-card-tag">
                    Case Study
                  </div>
                </div>

                {/* Content Area */}
                <div className="case-card-body">
                  <h6 className="case-card-heading">
                    {item.title}
                  </h6>

                  <p className="case-card-desc">
                    {item.desc}
                  </p>

                  <div className="case-card-footer">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="case-card-btn"
                    >
                      <span>See Now</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls slider-controls-wrap">
            <button className="slider-btn" onClick={scrollLeft} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="slider-btn" onClick={scrollRight} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
