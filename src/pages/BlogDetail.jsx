import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogsDetailData from '../data/blogsDetailData.json';
import { blogsData } from '../data/blogsData';
import './BlogDetail.css';

export default function BlogDetail() {
  const params = useParams();
  const rawSlug = params.slug || params.blogSlug || window.location.pathname.split('/').filter(Boolean).pop();
  const cleanSlug = rawSlug ? rawSlug.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') : '';

  const [htmlContent, setHtmlContent] = useState('');
  const [metaInfo, setMetaInfo] = useState({ title: '', desc: '', img: '' });

  useEffect(() => {
    // Find matching key in blogsDetailData object
    const detailKey = Object.keys(blogsDetailData).find(
      k => k.toLowerCase() === cleanSlug
    );
    const detail = detailKey ? blogsDetailData[detailKey] : null;

    // Find summary in blogsData
    const summary = blogsData.find(
      b => b.link && b.link.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') === cleanSlug
    );

    let title = (detail && detail.seo && detail.seo.title) || (summary ? summary.title : 'Sociapa Blog Insights');
    let desc = (detail && detail.seo && detail.seo.metaDescription) || (summary ? summary.description : 'Read industry insights and digital marketing strategies from Sociapa experts.');
    let img = (detail && detail.seo && detail.seo.ogImage) || (summary ? (summary.localImage || summary.image) : '');

    if (detail && detail.html) {
      setHtmlContent(detail.html);
    } else if (summary) {
      setHtmlContent(`
        <div className="blogViewSec" style="max-width: 900px; margin: 0 auto; padding: 40px 24px;">
          <h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 20px; color: #1a1a1a;">${summary.title}</h1>
          ${img ? `<div style="margin: 24px 0; border-radius: 12px; overflow: hidden;"><img src="${img}" alt="${summary.title}" style="width: 100%; height: auto; display: block;" /></div>` : ''}
          <p style="font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 30px;">${summary.description}</p>
          <div className="cta-box" style="background: #FFF0F2; border: 1px solid #FFD4D8; border-radius: 16px; padding: 32px; text-align: center;">
            <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 12px; color: #D20C0C;">Ready to Transform Your Digital Growth?</h2>
            <p style="color: #4A4A68; margin-bottom: 20px;">Connect with Sociapa specialists for a custom strategy session.</p>
            <a href="/contact-us" style="display: inline-block; background: #D20C0C; color: #ffffff; padding: 12px 28px; border-radius: 50px; font-weight: 700; text-decoration: none;">Get Started →</a>
          </div>
        </div>
      `);
    }

    setMetaInfo({ title, desc, img });
    window.scrollTo(0, 0);
  }, [cleanSlug]);

  const seoTitle = metaInfo.title.includes('Sociapa') || metaInfo.title.includes('SOCIAPA') ? metaInfo.title : `${metaInfo.title} | Sociapa Newsroom`;
  const seoDesc = metaInfo.desc || 'Explore digital marketing, SEO, and AI trends from Sociapa.';
  const seoImg = metaInfo.img || `${import.meta.env.BASE_URL}images/sociapa-og.jpg`;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:image" content={seoImg} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="blog-detail-wrapper">
        {/* Top Breadcrumb Nav */}
        <div className="blog-breadcrumb-nav">
          <Link to="/blog" className="blog-breadcrumb-link">
            ← Back to All Blogs
          </Link>
          <span>/</span>
          <span className="blog-breadcrumb-current">Article Details</span>
        </div>

        {/* Dynamic Scraped Blog Content */}
        <div 
          className="blog-detail-container" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />

        {/* Bottom Related / Share CTA Bar */}
        <div className="blog-related-cta-wrap">
          <div className="blog-related-cta-card">
            <div>
              <h3 className="blog-related-cta-title">
                Enjoyed this Article?
              </h3>
              <p className="blog-related-cta-desc">
                Talk directly with our digital marketing experts to apply these strategies to your brand.
              </p>
            </div>

            <Link to="/contact-us" className="blog-related-cta-btn">
              Talk to Our Experts ✦
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
