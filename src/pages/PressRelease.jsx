import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './PressRelease.css';

const pressArticles = [
  {
    img: 'SociapaMediaNews.jpg',
    alt: "Sociapa's Soul Focus is the USP",
    category: 'Media Feature',
    title: "Sociapa's Soul Focus is the USP",
    desc: "Sociapa is one of the fastest growing digital marketing and Social Media agencies in India. We build value for our customers through tailored digital campaigns leading to tangible business results.",
    link: 'https://www.medianews4u.com/sociapas-soul-focus-is-the-usp-which-is-process-driven-brand-centric-marketing-solutions-dheeraj-raj/',
    source: 'MediaNews4U'
  },
  {
    img: 'achieverStory.jpg',
    alt: "Achievers' Success Story",
    category: 'Award Feature',
    title: "Achievers' Success Story",
    desc: "Two things that nobody on this planet can exactly define are Love and Success, as they are very subjective and always evolving. Even the Oxford dictionary has four different definitions of success.",
    link: 'https://www.iafindia.com/mr-dheeraj-raj/',
    source: 'IAF India'
  },
  {
    img: 'ceoStory.jpg',
    alt: 'Vision Meeting Excellence',
    title: 'Believing in Vision Meeting Excellence',
    category: 'CEO Interview',
    desc: '"There is only one winning strategy — to carefully define the target market and direct a superior offering to that market." — Philip Kotler. Dheeraj Raj, Founder of Sociapa, lives by this.',
    link: 'https://theceostory.in/lounge-interview/sociapa/',
    source: 'The CEO Story'
  },
  {
    img: 'bcConnect.jpg',
    alt: 'Marketing Brilliance Begins',
    category: 'Business Connect',
    title: 'This is where your Marketing Brilliance Begins',
    desc: "For all the hard work you've put into your business, you deserve more customers, higher revenue, and better growth. But keeping doing the same things gets the same results.",
    link: 'https://businessconnectindia.in/sociapa/',
    source: 'Business Connect India'
  },
  {
    img: 'innnovativeZone.jpg',
    alt: 'Marketing Specialist with Innovation',
    category: 'Innovation Award',
    title: 'The Marketing Specialist Fastened with Innovation',
    desc: '"Good marketing makes the company look smart. Great marketing makes the customer feel smart." — Joe Chernov. Marketing has been essential for every growing business throughout time.',
    link: 'http://innovativezoneindia.com/sociapa/',
    source: 'Innovative Zone India'
  },
  {
    img: 'brandCentric.jpg',
    alt: 'Process Driven Brand Centric Marketing',
    category: 'Silicon India',
    title: 'Sociapa: Process Driven & Brand Centric Marketing',
    desc: "Today's hyper digital landscape has drawn every stakeholder in its folds. With competition intensifying with every passing day, aptly designed and targeted marketing is the only key to success.",
    link: 'https://startup.siliconindia.com/vendor/sociapa-process-driven-and-brand-centric-marketing-solutions-cid-15728.html',
    source: 'Silicon India'
  }
];

const mediaFeatures = [
  'Economic Times', 'MediaNews4U', 'Business Connect India',
  'Silicon India', 'The CEO Story', 'IAF India', 'Innovative Zone'
];

export default function PressRelease() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <Helmet>
        <title>Recent News &amp; Press Release - Sociapa Newsroom</title>
        <meta name="description" content="Sociapa is where your Marketing Brilliance begins. Here we provides the latest stories regarding our services, cients and businesses." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/press-release/" />
        <meta property="og:title" content="Recent News & Press Release - Sociapa Newsroom" />
        <meta property="og:description" content="Sociapa is where your Marketing Brilliance begins. Here we provides the latest stories regarding our services, cients and businesses." />
        <meta property="og:url" content="https://www.sociapa.com/press-release/" />
      </Helmet>

      {/* ── HERO: Light Split Layout ── */}
      <section className="press-hero-section page-hero-section pr-hero-section">
        {/* Subtle background pattern */}
        <div className="pr-bg-pattern" />
        <div className="press-hero-orb-1" />
        <div className="press-hero-orb-2" />

        <div className="container pr-container-rel">
          <div className="press-hero-grid">
            {/* Left: Text */}
            <div className="animate-on-scroll">
              <div className="pr-hero-badge">
                <span className="pr-dot" />
                Sociapa Newsroom
              </div>

              <h1 className="pr-hero-h1">
                Press Releases<br />
                &amp; <span className="text-red pr-text-red">Media Coverage</span>
              </h1>

              <p className="pr-hero-desc">
                Sociapa is where your Marketing Brilliance begins. Explore the latest stories about our services, clients, and business milestones.
              </p>

              <div className="pr-hero-ctas">
                <a
                  href="#press-articles"
                  className="btn btn-primary pr-btn-primary"
                  onClick={e => { e.preventDefault(); document.getElementById('press-articles').scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Read Stories
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                </a>
                <a
                  href="mailto:mail@sociapa.com"
                  className="btn btn-outline pr-btn-outline"
                >
                  Press Enquiry
                </a>
              </div>

              {/* As Seen In */}
              <div className="pr-seen-in">
                <div className="pr-seen-in-label">
                  As Featured In
                </div>
                <div className="pr-seen-in-chips">
                  {mediaFeatures.map((m, i) => (
                    <div key={i} className="pr-media-chip">
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="animate-on-scroll pr-hero-right">
              {/* Floating counter — top right */}
              <div className="pr-counter-badge">
                <div className="pr-counter-num">15+</div>
                <div className="pr-counter-label">Media Features</div>
              </div>

              {/* Main image card */}
              <div className="pr-image-card">
                <img
                  src={`${base}images/SociapaMediaNews.jpg`}
                  alt="Sociapa Newsroom Media Coverage"
                />
              </div>

              {/* Floating badge */}
              <div className="pr-award-badge">
                <div className="pr-award-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D20C0C" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <div className="pr-award-title">ET Award 2023</div>
                  <div className="pr-award-subtitle">Leadership Excellence — Economic Times</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured ET Award Article ── */}
      <section className="section-pad pr-section-light" id="press-articles">
        <div className="container">

          <div className="section-title animate-on-scroll pr-section-header-centered">
            <div className="pr-section-tag">
              <span className="pr-dot" />
              FEATURED STORY
            </div>
            <h2 className="pr-section-h2">
              Sociapa in the <span className="pr-text-red">Spotlight</span>
            </h2>
            <p className="pr-section-desc">
              From national media features to prestigious industry awards — see how Sociapa is making headlines across India's top media platforms.
            </p>
          </div>

          {/* Big featured card */}
          <div className="animate-on-scroll pr-featured-wrap">
            <div className="press-featured-card">
              {/* Image */}
              <div className="pr-featured-img-inner">
                <img
                  src={`${base}images/new-recognition.jpg`}
                  alt="ET Leadership Excellence Award 2023"
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="pr-featured-img-badge">
                   Featured Award Story
                </div>
              </div>

              {/* Content */}
              <div className="press-featured-content">
                <div className="pr-featured-content-tag">
                  Economic Times
                </div>
                <h2 className="pr-featured-h2">
                  ET Leadership Excellence Awards 2023 — <span className="pr-text-red">Sociapa Honored</span>
                </h2>
                <p className="pr-featured-desc">
                  Sociapa was recognized at the prestigious ET Leadership Excellence Awards 2023 for outstanding contribution to the digital marketing and advertising landscape in India. This recognition reaffirms our commitment to innovation and results.
                </p>
                <a
                  href="https://economictimes.indiatimes.com/industry/media/entertainment/media/et-leadership-excellence-awards-2023-celebrates-the-business-leaders/articleshow/103135718.cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary pr-featured-read-btn"
                >
                  Read Full Story
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── All Press Stories Grid ── */}
          <div className="pr-sub-header">
            <div className="pr-sub-tag">
              <span className="pr-dot" />
              ALL PRESS STORIES
            </div>
            <h3 className="pr-sub-h3">Media &amp; Press Coverage</h3>
          </div>

          <div className="press-stories-grid">
            {pressArticles.map((article, idx) => (
              <article
                key={idx}
                className="press-card animate-on-scroll"
                style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
              >
                {/* Image Box */}
                <div className="press-card-img-wrapper">
                  <img
                    src={`${base}images/${article.img}`}
                    alt={article.alt}
                    className="press-card-img"
                  />
                  {/* Category badge */}
                  <div className="press-card-badge">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="press-card-body">
                  <div className="press-card-source">
                    <span className="press-card-source-dot" />
                    {article.source}
                  </div>
                  <h3 className="press-card-title">
                    {article.title}
                  </h3>
                  <p className="press-card-desc">
                    {article.desc}
                  </p>
                  <div className="press-card-footer">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press-card-link-btn"
                    >
                      <span>Read Full Article</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="animate-on-scroll pr-cta-wrap">
            <div className="press-cta-box">
              {/* Dot grid */}
              <div className="pr-cta-pattern" />
              {/* Glow */}
              <div className="pr-cta-glow" />

              <div className="pr-cta-content">
                <div className="pr-cta-tag">
                  📢 PRESS &amp; MEDIA ENQUIRIES
                </div>
                <h2 className="pr-cta-h2">
                  Want to Feature Sociapa?
                </h2>
                <p className="pr-cta-desc">
                  For press inquiries, media collaborations, interviews, or feature stories — reach out to our communications team.
                </p>
                <div className="pr-cta-btns">
                  <a
                    href="mailto:mail@sociapa.com"
                    className="btn btn-primary pr-cta-btn-primary"
                  >
                    Contact Press Team
                  </a>
                  <Link
                    to="/contact-us"
                    className="btn pr-cta-btn-outline"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
