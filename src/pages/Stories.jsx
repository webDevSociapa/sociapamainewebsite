import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Stories.css';

const posts = [
  { link: 'https://www.instagram.com/p/Da22LCXoBI1/', label: 'Agency Life — But Make It Emoji', localImg: 'instagram/Da22LCXoBI1.jpg' },
  { link: 'https://www.instagram.com/p/Da4saGYIKBP/', label: 'With Sociapa — Stay Afloat, Stay Visible', localImg: 'instagram/Da4saGYIKBP.jpg' },
  { link: 'https://www.instagram.com/p/DbA-w4fkjCq/', label: 'Famous Dialogues of Team Sociapa', localImg: 'instagram/DbA-w4fkjCq.jpg' },
  { link: 'https://www.instagram.com/p/DanMitKoBmQ/', label: 'Digital Growth Milestone', localImg: 'instagram/DanMitKoBmQ.jpg' },
  { link: 'https://www.instagram.com/p/DafLOYeIDMO/', label: 'Creative Campaign Highlights', localImg: 'instagram/DafLOYeIDMO.jpg' },
  { link: 'https://www.instagram.com/p/DaFZpeUEgyJ/', label: 'Brand Activation & Engagement', localImg: 'instagram/DaFZpeUEgyJ.jpg' },
  { link: 'https://www.instagram.com/p/DaAkkfIEqXd/', label: 'Social Media Strategy Tips', localImg: 'instagram/DaAkkfIEqXd.jpg' },
  { link: 'https://www.instagram.com/p/DZ1k30GmrDV/', label: 'Influencer Marketing Magic', localImg: 'instagram/DZ1k30GmrDV.jpg' },
  { link: 'https://www.instagram.com/p/DZud_evmrld/', label: 'Packaging Design Case Study', localImg: 'instagram/DZud_evmrld.jpg' },
  { link: 'https://www.instagram.com/p/DZm_u8SGuSx/', label: 'Performance Marketing Insights', localImg: 'instagram/DZm_u8SGuSx.jpg' },
  { link: 'https://www.instagram.com/p/DZfMAdpGoUB/', label: 'Brand Storytelling & PR', localImg: 'instagram/DZfMAdpGoUB.jpg' },
  { link: 'https://www.instagram.com/p/DZZ5h3vGgSX/', label: 'Sociapa Behind The Scenes', localImg: 'instagram/DZZ5h3vGgSX.jpg' }
];


function getPostId(url) {
  const match = url.match(/\/p\/([^/]+)/);
  return match ? match[1] : '';
}

/* Helper SVG for Instagram Icon */
const IGIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2.2" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2.2" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function Stories() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Instagram Stories &amp; Brand Highlights | Sociapa</title>
        <meta name="description" content="Explore Sociapa's latest campaigns, influencer highlights, award moments, and behind-the-scenes stories on Instagram." />
        <link rel="canonical" href="https://www.sociapa.com/stories" />
      </Helmet>

      {/* ── Hero Banner ── */}
      <section className="stories-hero page-hero-section">
        <div className="stories-hero-dots" />
        <div className="stories-orb-1" />
        <div className="stories-orb-2" />

        <div className="container stories-hero-container">
          {/* Profile Card */}
          <div className="stories-profile-card">
            {/* Left: Avatar + Info */}
            <div className="stories-profile-left">
              {/* Avatar with Animated Story Ring */}
              <div className="stories-avatar-wrapper">
                <div className="stories-avatar-inner">
                  <img
                    src={`${base}logonew.webp`}
                    alt="Sociapa Official"
                    className="stories-avatar-img"
                  />
                </div>
              </div>

              {/* Handle + bio */}
              <div>
                <div className="stories-handle-row">
                  <span className="stories-handle-text">sociapa.official</span>
                  {/* Verified badge */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#D20C0C"/>
                    <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stories-stats-row">
                  {[
                    { num: '1,124', label: 'Posts' },
                    { num: '15.8K', label: 'Followers' },
                    { num: '200', label: 'Following' }
                  ].map((s, i) => (
                    <div key={i} className="stories-stat-item">
                      <div className="stories-stat-number">{s.num}</div>
                      <div className="stories-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="stories-bio-text">
                  🚀 Your Social Buddy | Digital Marketing Agency | Noida, India
                </p>
              </div>
            </div>

            {/* Right: Instagram Action Button */}
            <div className="stories-profile-right">
              <a
                href="https://www.instagram.com/sociapa.official"
                target="_blank"
                rel="noopener noreferrer"
                className="stories-ig-btn"
              >
                <IGIcon /> Follow on Instagram
              </a>
            </div>
          </div>

          {/* Section Label */}
          <div className="stories-label-center">
            <div className="stories-section-pill">
              <IGIcon /> Latest Posts
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram Posts Grid ── */}
      <section className="stories-grid-section">
        <div className="container stories-grid-inner">

          {/* Grid */}
          <div className="stories-grid-container">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="stories-card"
                title={post.label}
              >
                {/* Type Icon Top Left */}
                <div className="stories-ig-type-icon">
                  <IGIcon />
                </div>

                {/* Badge Top Right */}
                <div className="stories-badge">
                  #{i + 1}
                </div>

                <img
                  src={post.localImg ? `${base}images/${post.localImg}` : `https://www.instagram.com/p/${getPostId(post.link)}/media/?size=l`}
                  alt={post.label}
                  className="stories-card-img"
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.parentElement.querySelector('.stories-fallback');
                    if (fb) fb.style.display = 'flex';
                  }}
                />

                {/* Branded Fallback */}
                <div className="stories-fallback">
                  <img
                    src={`${base}logonew.webp`}
                    alt="Sociapa"
                    className="stories-fallback-logo"
                  />
                  <div className="stories-fallback-title">
                    {post.label}
                  </div>
                  <div className="stories-fallback-btn">
                    <IGIcon /> View on Instagram
                  </div>
                </div>

                {/* Hover overlay with label */}
                <div className="stories-card-overlay">
                  <div className="stories-card-caption">
                    {post.label}
                  </div>
                  <div className="stories-card-cta-text">
                    <IGIcon /> View on Instagram
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="stories-cta-banner">
            <div className="stories-cta-glow" />
            <div className="stories-cta-icon-box">
              <IGIcon />
            </div>
            <h3 className="stories-cta-title">
              Follow Our Instagram Journey
            </h3>
            <p className="stories-cta-desc">
              Stay connected with Sociapa's latest campaigns, team stories, and marketing insights on Instagram.
            </p>
            <a
              href="https://www.instagram.com/sociapa.official"
              target="_blank"
              rel="noopener noreferrer"
              className="stories-ig-btn stories-cta-btn-lg"
            >
              <IGIcon /> @sociapa.official — Follow Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
