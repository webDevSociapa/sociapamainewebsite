import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './PublicRelation.css';


const faqsData = [
  {
    "q": "How is PR different from advertising?",
    "a": "<p>Advertising involves paying for visibility, while PR focuses on earning media coverage, building credibility, and creating positive public perception through trusted third-party platforms.</p>"
  },
  {
    "q": "Why is PR important for businesses?",
    "a": "<p>PR helps businesses increase brand awareness, strengthen credibility, improve visibility, and build trust among customers, stakeholders, and the media.</p>"
  },
  {
    "q": "Which businesses can benefit from PR services?",
    "a": "<p>PR is valuable for startups, SMEs, corporations, e-commerce brands, technology companies, healthcare organizations, educational institutions, and personal brands.</p>"
  },
  {
    "q": "What is digital PR?",
    "a": "<p>Digital PR focuses on increasing online visibility through media coverage, backlinks, online publications, influencer collaborations, and content promotion.</p>"
  },
  {
    "q": "Can PR improve search engine rankings?",
    "a": "<p>Yes. Quality backlinks, media mentions, and online publications can strengthen SEO performance and help improve search engine visibility.</p>"
  },
  {
    "q": "How do you secure media coverage for brands?",
    "a": "<p>We build relationships with journalists, editors, bloggers, and publishers to identify relevant opportunities for media mentions, interviews, articles, and press features.</p>"
  },
  {
    "q": "Can PR help with product launches?",
    "a": "<p>Absolutely. PR campaigns can generate awareness, media attention, influencer engagement, and audience interest before and during product launches.</p>"
  },
  {
    "q": "What role does content play in PR?",
    "a": "<p>Content helps communicate your expertise, share valuable insights, and position your brand as a trusted voice within your industry.</p>"
  },
  {
    "q": "Can PR improve customer perception?",
    "a": "<p>Yes. Consistent communication, positive media coverage, and audience engagement help strengthen public perception and build long-term brand reputation.</p>"
  },
  {
    "q": "How do you measure the success of a PR campaign?",
    "a": "<p>We track media coverage, brand mentions, website traffic, backlinks, audience engagement, share of voice, and overall brand visibility to evaluate the effectiveness of every PR campaign.</p>"
  }
];


export default function PublicRelation() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
      <Helmet>
        <title>Best PR Company in Noida | Brand Communication Agency in Delhi – Sociapa</title>
        <meta name="description" content="Best PR Agency in Noida & Delhi NCR, India- Sociapa offers comprehensive PR solutions tailored to meet the unique needs of businesses. We develop a ground-breaking strategy for the brand to reach its target consumers and markets." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/pr" />
        <meta property="og:title" content="Best PR Company in Noida | Brand Communication Agency in Delhi – Sociapa" />
        <meta property="og:description" content="Best PR Agency in Noida & Delhi NCR, India- Sociapa offers comprehensive PR solutions tailored to meet the unique needs of businesses. We develop a ground-breaking strategy for the brand to reach its target consumers and markets." />
        <meta property="og:url" content="https://www.sociapa.com/pr" />
      </Helmet>
<div className="serInsideBnr">
  <div className="row">
    <picture>
        
        <source
            media="(max-width: 767px)"
            srcset="/sociapareact/images/pr-service-mobile.jpeg" />

        
        <img src="/sociapareact/images/pr-service-banner.jpeg" alt="pr-service-banner" className="responsive-img w-100" />
    </picture>
  </div>
</div>
<section className="publicrelation-hero">
  <div className="publicrelation-hero-inner">
    <div>
      <div className="publicrelation-hero-badge">📰 500+ Media Placements · National & Regional Coverage</div>
      <h1>Public Relations That <em>Shapes Perception</em> & Builds Authority</h1>
      <p className="publicrelation-hero-desc">From national publications to leading digital news platforms, Sociapa secures media coverage, builds thought leadership, and strengthens your brand's credibility, visibility, and reputation.</p>
      <div className="publicrelation-hero-btns">
        <a href="/contact" className="btn-primary">Build My Brand's PR Strategy</a>
        <a href="/portfolio" className="btn-outline">See Media Coverage</a>
      </div>
    </div>
    <div className="publicrelation-hero-visual">
      <img src="/sociapareact/images/pr-left-img.jpeg" alt="pr-left-img" className="publicrelation-hero-img" />  
      
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">500+</span><div className="stat-lbl">Media Placements Secured</div></div>
    <div><span className="stat-num">300+</span><div className="stat-lbl">Journalist Relationships</div></div>
    <div><span className="stat-num">50+</span><div className="stat-lbl">Brands Represented</div></div>
    <div><span className="stat-num">8+</span><div className="stat-lbl">Years Building Brand Authority</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">Our Services</span>
    <h2 className="section-title">Comprehensive Public Relations Services</h2>
    <p className="section-sub">Reputation is your most valuable asset. We protect, build, and amplify it through earned media and strategic communications.</p>
    <div className="services-grid">
      <div className="svc-card">
        <div className="svc-icon">📡</div>
        <h3>Media Relations</h3>
        <p>Maximise brand visibility with professionally crafted press releases and strategic media outreach to secure coverage across leading newspapers, business publications, and digital news platforms.</p>
        <div className="service-tags"><span>National Media</span><span>Trade Press</span><span>Digital PR</span><span>Wire Services</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📝</div>
        <h3>Press Releases & Content</h3>
        <p>Build credibility with professionally written press releases, executive bylines, and thought leadership content designed to earn media coverage and strengthen your brand authority.</p>
        <div className="service-tags"><span>Press Releases</span><span>Bylines</span><span>Op-Eds</span><span>Media Kits</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎙️</div>
        <h3>Thought Leadership</h3>
        <p>Position your founders and executives as industry leaders through podcasts, speaking engagements, panel discussions, award nominations, and media opportunities that build credibility and brand authority.</p>
        <div className="service-tags"><span>Podcasts</span><span>Panels</span><span>Awards</span><span>Speaking</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🏆</div>
        <h3>Awards & Recognition</h3>
        <p>Strengthen your brand credibility with strategic award nominations and end-to-end submission management for national and industry-specific recognitions.</p>
        <div className="service-tags"><span>Award Nominations</span><span>Industry Recognition</span><span>Ranking Entries</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🛡️</div>
        <h3>Crisis Communications</h3>
        <p>Protect your brand with proactive crisis communication, rapid-response strategies, and reputation management for social media issues and negative press.</p>
        <div className="service-tags"><span>Crisis Response</span><span>Reputation Repair</span><span>Media Training</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🌐</div>
        <h3>Digital PR & SEO PR</h3>
        <p>Boost your brand visibility and SEO performance with data-driven digital PR campaigns. We secure high-authority media coverage and quality backlinks that strengthen your online reputation, improve search rankings, and drive long-term organic growth. </p>
        <div className="service-tags"><span>Link Earning</span><span>Digital Newsrooms</span><span>Brand SERPs</span></div>
      </div>
    </div>
  </div>
</section>

<section className="tools-section">
  <div className="section-inner">
    <span className="section-tag">Media We Work With</span>
    <h2 className="section-title">Established Relationships Across India's Top Media</h2>
    <p className="section-sub">Our 300+ journalist relationships span national, regional, digital, and trade media- giving your story the widest possible reach.</p>
    <div className="tools-grid">
      <div className="tool-chip"><span className="tool-icon">📰</span>Economic Times</div>
      <div className="tool-chip"><span className="tool-icon">📰</span>Hindustan Times</div>
      <div className="tool-chip"><span className="tool-icon">📰</span>Business Standard</div>
      <div className="tool-chip"><span className="tool-icon">📺</span>NDTV</div>
      <div className="tool-chip"><span className="tool-icon">📺</span>Zee Business</div>
      <div className="tool-chip"><span className="tool-icon">🌐</span>YourStory</div>
      <div className="tool-chip"><span className="tool-icon">🌐</span>Inc42</div>
      <div className="tool-chip"><span className="tool-icon">🌐</span>exchange4media</div>
      <div className="tool-chip"><span className="tool-icon">📻</span>Regional Hindi Media</div>
      <div className="tool-chip"><span className="tool-icon">📄</span>Trade Publications</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Coverage We've Earned</span>
    <h2 className="section-title">PR Campaigns That Built Brands</h2>
    <p className="section-sub">Real media coverage secured for real brands—across FMCG, healthcare, travel, and consumer categories.</p>
      <div className="portfolio-grid">

        <div className="port-card">
            <div className="port-img">
                <img src="/sociapareact/images/apisClt.png" alt="APIS India Logo" />
            </div>
            <div className="port-info">
                <div className="port-tag">Healthcare PR</div>
                <h4>APIS India — Pharma Authority</h4>
                <p>Secured 40+ placements in healthcare media including ET Health and Pharmabiz—positioning leadership as subject matter experts.</p>
            </div>
        </div>

        <div className="port-card">
            <div className="port-img">
                <img src="/sociapareact/images/pansari200.png" alt="Pansari Group Logo" />
            </div>
            <div className="port-info">
                <div className="port-tag">FMCG PR</div>
                <h4>Pansari Group Launch PR</h4>
                <p>New product launch coverage in ET, HT, and 25+ regional publications—generating national awareness in 72 hours.</p>
            </div>
        </div>

        <div className="port-card">
            <div className="port-img">
                <img src="/sociapareact/images/Kesari-Logo.png" alt="Kesari Sugars Logo" />
            </div>
            <div className="port-info">
                <div className="port-tag">Travel & Lifestyle PR</div>
                <h4>Kesari Sugars — Brand Authority</h4>
                <p>Ongoing thought leadership programme for CMO in leading trade publications and national business dailies.</p>
            </div>
        </div>

        <div className="port-card">
            <div className="port-img">
                <img src="/sociapareact/images/bonnClt.png" alt="Bonn Logo" />
            </div>
            <div className="port-info">
                <div className="port-tag">Crisis & Recovery PR</div>
                <h4>Bonn Breads — Reputation Management</h4>
                <p>Managed a social media reputation incident—neutralised negative coverage and reversed brand sentiment within 96 hours.</p>
            </div>
        </div>

    </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">Our Process</span>
    <h2 className="section-title">How We Earn Coverage That Counts</h2>
    <p className="section-sub">A proactive, story-led approach to PR- we don't just send press releases, we build narratives journalists want to cover.</p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Brand Audit</h4><p>Review existing coverage, reputation, and messaging opportunities</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Story Mining</h4><p>Identify newsworthy angles, milestones, and thought leadership hooks</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Media Mapping</h4><p>Target relevant journalists, publications, and media verticals for each story</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Outreach & Pitching</h4><p>Tailored journalist pitches and press release distribution with follow-up</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Coverage Secured</h4><p>Coordinate interviews, approvals, and quote verification for each placement</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Amplification</h4><p>Repurpose coverage across social, email, and website for maximum reach</p></div>
    </div>
  </div>
</section>

<section className="why-section">
  <div className="section-inner">
    <span className="section-tag section-tag-white">Why Sociapa PR</span>
    <h2 className="section-title">PR Built on Relationships, Not Spam</h2>
    <p className="section-sub">We earn coverage through genuine journalist relationships and newsworthy stories—not mass press release distribution.</p>
    <div className="why-grid">
      <div className="why-card"><div className="w-icon">🤝</div><h4>300+ Journalist Relationships</h4><p>Established personal relationships with senior journalists across national, regional, and trade media built over 8+ years in the industry.</p></div>
      <div className="why-card"><div className="w-icon">📖</div><h4>Story-Led Approach</h4><p>We find and craft the angle before approaching media—every pitch is built around a genuine story, not a product announcement disguised as news.</p></div>
      <div className="why-card"><div className="w-icon">🔴</div><h4>Crisis Readiness</h4><p>24/7 crisis response capability with a clear escalation protocol—so when reputation threats emerge, you have a team ready to respond immediately.</p></div>
      <div className="why-card"><div className="w-icon">📊</div><h4>Measurable PR</h4><p>We track AVE, reach, sentiment, and brand SERP improvements—demonstrating real PR ROI beyond vanity metrics.</p></div>
      <div className="why-card"><div className="w-icon">🌐</div><h4>Digital + Traditional</h4><p>We operate across both traditional print and broadcast and digital media—ensuring coverage reaches your audience wherever they consume news.</p></div>
      <div className="why-card"><div className="w-icon">🏆</div><h4>Integrated Communications</h4><p>PR strategy aligned with your digital marketing, social media, and content—a unified brand narrative across every channel.</p></div>
    </div>
  </div>
</section>

<section className="testi-section">
  <div className="section-inner">
    <span className="section-tag">Client Stories</span>
    <h2 className="section-title">Brands Whose Stories We've Told</h2>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Sociapa secured coverage in the Economic Times within the first month of our retainer. Their journalist relationships are real—they don't just send press releases into the void."</blockquote>
        <div className="testi-author"><div className="avatar">AI</div><div><strong>Dr. Ankit Jain</strong><span>CEO, APIS India</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"The product launch PR campaign generated national coverage we couldn't have bought as advertising. The team found angles in our story we hadn't even thought of ourselves."</blockquote>
        <div className="testi-author"><div className="avatar">PG</div><div><strong>Rohit Agarwal</strong><span>Brand Head, Pansari Group</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"When we faced a reputation challenge, Sociapa's crisis team responded within hours. The issue was contained and reversed faster than we believed possible."</blockquote>
        <div className="testi-author"><div className="avatar">BB</div><div><strong>Manish Kapoor</strong><span>Marketing Director, Bonn Breads</span></div></div>
      </div>
    </div>
  </div>
</section>




<section className="faq-section faq-section-padded" id="faq">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Public Relations <span className="text-brand-red">Questions Answered</span></h2>
    <div className="faq-list">
    {faqsData.map((faq, idx) => (
      <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
        <div className="faq-q" onClick={() => toggleFaq(idx)}>
          {faq.q}
          <span className="faq-icon">{openFaq === idx ? '-' : '+'}</span>
        </div>
        <div className="faq-a" dangerouslySetInnerHTML={{ __html: faq.a }}></div>
      </div>
    ))}
  </div>
  </div>
</section>

<section className="cta-section">
  <div className="section-inner section-inner-narrow">
    <h2>Ready to Build a Brand the Media Talks About?</h2>
    <p>Get a free PR audit and a media opportunity assessment for your brand—no press release required.</p>
    <a href="/contact" className="btn-primary">Start My PR Strategy</a>
  </div>
</section>

  <section className="creativeSS">
    <div className="container">
      <div className="row">
      <div className="col s3 center"><img src="/sociapareact/images/mediaBrief400.png" alt="Creatives" className="responsive-img w-100" /></div>
            <div className="col s3 center"><img src="/sociapareact/images/thinCrust400.png" alt="Creatives" className="responsive-img w-100" /></div>

              <div className="col s3 center"><img src="/sociapareact/images/apisRopes400.png" alt="Creatives" className="responsive-img w-100" /></div>
              <div className="col s3 center"><img src="/sociapareact/images/apisOnboard400.png" alt="Creatives" className="responsive-img w-100" /></div>
        </div>
        </div>
  </section>


        </>
    );
}
