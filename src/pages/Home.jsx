import { useEffect, useRef, useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react';

const ProjectsTab = React.lazy(() => import('../components/home/ProjectsTab'));
const ClientsGrid = React.lazy(() => import('../components/home/ClientsGrid'));
const PlatformPartners = React.lazy(() => import('../components/home/PlatformPartners'));
const Ecosystem = React.lazy(() => import('../components/home/Ecosystem'));
const CaseStudies = React.lazy(() => import('../components/home/CaseStudies'));
const Testimonials = React.lazy(() => import('../components/home/Testimonials'));

/* ─── Animated Counter Component ─── */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(end);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Services Data with Badges & Images ─── */
const services = [
  { img: '/images/services/Registration-Services.jpg', title: 'Registration Services', badge: 'TRADEMARK & LEGAL', desc: 'Seamlessly register and protect your intellectual property, including trademarks and company registrations.', href: '/gst-company-registration-services' },
  { img: '/images/services/Digital-Marketing.jpg', title: 'Digital Marketing', badge: '360° PERFORMANCE', desc: 'Data-driven campaigns that drive measurable ROI and dominate your market.', href: '/best-digital-marketing-services-india' },
  { img: '/images/services/Creative-Designing.jpg', title: 'Creative Designing', badge: 'VISUAL SYSTEM', desc: 'Award-winning visuals that make your brand impossible to ignore.', href: '/creative-designing' },
  { img: '/images/services/Social-Media-Marketing.jpg', title: 'Social Media Marketing', badge: 'COMMUNITY & VIRAL', desc: 'Build a magnetic brand presence across all social platforms.', href: '/best-social-media-marketing-agency-india' },
  { img: '/images/services/Influencer-Marketing.jpg', title: 'Influencer Marketing', badge: 'CREATOR NETWORK', desc: 'Connect with the right voices to amplify your brand story.', href: '/influencer-marketing-services' },
  { img: '/images/services/Email-Marketing.jpg', title: 'Email Marketing', badge: 'RETENTION & CRO', desc: 'Engage your audience directly with highly targeted and conversion-focused email campaigns.', href: '/email-marketing-services' },
  { img: '/images/services/Website-App-Development.jpg', title: 'Website/App Development', badge: 'TECH & EXPERIENCE', desc: 'High-performance, conversion-optimised digital experiences that impress.', href: '/best-web-development-agency-india' },
  { img: '/images/services/Public-Relation.jpg', title: 'Public Relation Services', badge: 'MEDIA & CREDIBILITY', desc: 'Build unbeatable credibility with strategic public relations and brand positioning.', href: '/best-pr-agency-india' },
  { img: '/images/services/Photography.jpg', title: 'Photography/Videography Services', badge: 'PRODUCTION', desc: 'Stunning visual storytelling through professional photo and video production.', href: '/best-photography-services' },
  { img: '/images/services/Content-Development.jpg', title: 'Content Development', badge: 'COPY & STORYTELLING', desc: 'Craft compelling narratives that resonate deeply with your target audience.', href: '/content-designing' },
  { img: '/images/services/Consultation-&-Ideas.jpg', title: 'Consultation & Ideas', badge: 'STRATEGY ADVISORY', desc: 'Expert advisory to steer your brand towards scalable growth and innovation.', href: '/consultation-idea' },
  { img: '/images/services/Aggregator-Platform-Service.jpg', title: 'Aggregator Platform Services', badge: 'PLATFORM ACCELERATION', desc: 'Leverage leading aggregator platforms to maximize your product visibility and sales.', href: '/aggregator-platform-service' },
];

/* ─── Blog Posts Data ─── */
const blogs = [
  {
    category: 'AI',
    title: 'AI In Digital Marketing',
    excerpt: 'Explore AI-driven marketing campaigns, machine learning strategies, and ASCI compliance rules.',
    img: '/images/blog/asci-ai-advertising-guidelines-2026.png',
    href: '/asci-ai-advertising-guidelines-2026',
  },
  {
    category: 'SEO',
    title: 'Why SEO Is Essential For Your D2C Website',
    excerpt: 'Learn how organic search optimization drives sustained traffic, conversions, and D2C brand equity.',
    img: '/images/blog/Essential-for-Your-D2C-Website-thumb.png',
    href: '/why-seo-is-essential-for-your-d2c-websites-success',
  },
  {
    category: 'Marketing',
    title: 'Mixed Reality In Advertising',
    excerpt: 'Discover immersive 3D, AR, spatial computing, and next-gen interactive brand marketing experiences.',
    img: '/images/blog/usharing-thumb.png',
    href: '/mixed-realit-in-ads-ushering-in-a-new-era-of-immersive-experiences',
  },
  {
    category: 'Content',
    title: 'Turn Customers Into Content Creators',
    excerpt: 'Build authentic user-generated content, viral community engagement, and brand advocate programs.',
    img: '/images/blog/turning-customer-thumb.jpg',
    href: '/turning-customer',
  },
];

export default function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <Helmet>
        <title>Best Digital Marketing &amp; Advertising Agency, Best FMCG marketing and digital agency in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Best Digital Marketing & Advertising Agency in Noida & Delhi NCR – Sociapa allows businesses to improve their online presence, attract targeted traffic and experience extraordinary growth by providing a wide range of services, including SEO, PPC, social media marketing and creative advertising solutions." />
        <link rel="canonical" href="https://www.sociapa.com/" />
        <meta property="og:title" content="Best Digital Marketing & Advertising Agency, Best FMCG marketing and digital agency in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Best Digital Marketing & Advertising Agency in Noida & Delhi NCR – Sociapa allows businesses to improve their online presence, attract targeted traffic and experience extraordinary growth by providing a wide range of services," />
        <meta property="og:url" content="https://www.sociapa.com/" />
      </Helmet>

      {/* ══════════════════════════ VIDEO HERO (PURE VIDEO ONLY) ══════════════════════════ */}
      <section className="hero home-hero-section">
        <video 
           className="home-banner-video"
           autoPlay 
           loop 
           muted 
           playsInline
        >
           <source src={`${base}video/socialVideo.mp4`} type="video/mp4" />
        </video>
      </section>

      {/* ══════════════════════════ STATS ══════════════════════════ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { end: 500, suffix: '+', label: 'Brands Served' },
              { end: 1200, suffix: '+', label: 'Campaigns Delivered' },
              { end: 15, suffix: '+', label: 'Industry Awards' },
              { end: 12, suffix: '+', label: 'Years of Excellence' },
            ].map((stat) => (
              <div className="stat-item animate-on-scroll" key={stat.label}>
                <div className="stat-number">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES WITH ENHANCED IMAGE CARDS ══════════════════════════ */}
      <section className="services-section section-pad home-services-section">
        <div className="container">
          <div className="section-title animate-on-scroll home-services-header">
            <div className="home-services-label">
              <span className="home-services-label-dot"></span>
              WHAT WE DO BEST
            </div>
            <h2 className="home-services-title">
              A Complete <span className="home-services-title-red">Ecosystem</span> of Growth Services
            </h2>
            <p className="home-services-desc">
              From brand strategy to performance marketing — everything your business needs to dominate the digital landscape.
            </p>
          </div>

          <div className="services-grid home-services-grid">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                to={svc.href}
                className={`service-card-real animate-on-scroll delay-${(i % 4) + 1}`}
                style={{ backgroundImage: `url('${base}${svc.img.replace(/^\//, '')}')` }}
              >
                {/* Top Badge */}
                <span className="home-svc-badge">
                  {svc.badge}
                </span>

                <div className="overlay-real">
                  <h3>{svc.title}</h3>
                  <div className="btn waves-effect waves-light rounded-5 serviceBtn home-svc-btn">
                    View More ➔
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PROJECTS & CLIENTS ══════════════════════════ */}
      <Suspense fallback={null}>
        <ProjectsTab />

        <ClientsGrid />

        <PlatformPartners />

        {/* ══════════════════════════ AWARDS & CERTIFICATION ══════════════════════════ */}
        <section className="awards-section section-pad bg-light">
          <div className="container">
            <div className="section-title animate-on-scroll">
              <span className="section-label">Recognition</span>
              <h2>Awards <span className="text-red">&amp; Certification</span></h2>
            </div>

            <div className="awards-split animate-on-scroll delay-1 home-awards-split">
              <div className="awards-image-col home-awards-img-col">
                <img
                  src={`${base}images/sociapaGift.png`}
                  alt="Marketing Brilliance"
                  className="home-awards-img"
                  loading="lazy" decoding="async" />
              </div>
              <div className="awards-text-col home-awards-text-col">
                <h3 className="home-awards-heading">
                  This is where your Marketing Brilliance begins
                </h3>
                <p className="home-awards-text">
                  Regardless of what sector you’re in or what services you offer, your company’s brand identity is critical to its success.
                </p>
                <p className="home-awards-text">
                  Clients, customers, prospects, and even workers may be dubious or unclear of what your firm does and represents if it does not have a strong brand reputation. You don’t have to spend a lot of money on branding but you need the right marketing to make them aware.
                </p>
                <Link to="/best-creative-and-digital-agency-award" className="btn btn-primary home-awards-btn">
                  Read More ✦
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ ECOSYSTEM & CASE STUDIES ══════════════════════════ */}
        <Ecosystem />

        <CaseStudies />

        {/* ══════════════════════════ BLOG SECTION ══════════════════════════ */}
        <section className="blog-section home-blog-section">
          <div className="container">
            <div className="section-title animate-on-scroll home-blog-header">
              <div className="home-blog-label">
                <span className="home-blog-label-dot" />
                INSIGHTS &amp; ARTICLES
              </div>
              <h2 className="home-blog-title">
                Latest from the <span className="home-blog-title-red">Sociapa Blog</span>
              </h2>
              <p className="home-blog-desc">
                Industry insights, marketing trends, and actionable strategies for brand growth.
              </p>
            </div>

            <div className="blog-grid home-blog-grid">
              {blogs.map((blog, i) => (
                <Link
                  key={blog.href}
                  to={blog.href}
                  className="blog-card home-blog-card"
                >
                  {/* Image Frame */}
                  <div className="home-blog-img-frame">
                    <div className="home-blog-img-glow" />
                    <img
                      src={`${base}${blog.img.replace(/^\//, '')}`}
                      alt={blog.title}
                      className="home-blog-img"
                      loading="lazy" decoding="async"
                    />
                    <span className="home-blog-cat-tag">
                      {blog.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="home-blog-body">
                    <h3 className="home-blog-heading">
                      {blog.title}
                    </h3>
                    <p className="home-blog-excerpt">
                      {blog.excerpt}
                    </p>
                    <div className="home-blog-footer">
                      <div className="blog-read-more home-blog-read-btn">
                        <span>Read Article</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="center-flex mt-5 animate-on-scroll delay-2 home-blog-view-all-wrap">
              <Link to="/blog" className="btn btn-outline home-blog-view-all-btn" id="view-all-blogs">
                View All Articles ✦
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ TESTIMONIALS ══════════════════════════ */}
        <Testimonials />
      </Suspense>

      {/* ══════════════════════════ CTA BANNER ══════════════════════════ */}
      <section className="cta-section">
        <div className="cta-orb-1" />
        <div className="cta-orb-2" />
        <div className="container cta-content animate-on-scroll">
          <h2>Ready to Transform Your Brand?</h2>
          <p>
            Let's build something extraordinary together. Get a free strategy session
            with India's most awarded digital marketing team.
          </p>
          <div className="cta-buttons animate-on-scroll delay-2 home-cta-btns-wrap">
            <Link to="/contact-us" className="btn btn-light home-cta-btn-primary" id="cta-get-started">
              Get Started Now ✦
            </Link>
            <Link to="/free-website-audit" className="btn btn-outline home-cta-btn-outline" id="cta-audit">
              Get Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
