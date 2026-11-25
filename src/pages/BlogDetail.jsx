import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogsDetailData from '../data/blogsDetailData.json';
import { blogsData } from '../data/blogsData';
import './BlogDetail.css';

export default function BlogDetail() {
  const params = useParams();
  const rawSlug = params.slug || params.blogSlug || window.location.pathname.split('/').filter(Boolean).pop();
  const cleanSlug = rawSlug ? rawSlug.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') : '';

  if (params.slug && params.slug.toLowerCase().endsWith('.php')) {
    return <Navigate to={`/blog/${cleanSlug}`} replace />;
  }

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
            <a href="${import.meta.env.BASE_URL}contact-us" style="display: inline-block; background: #D20C0C; color: #ffffff; padding: 12px 28px; border-radius: 50px; font-weight: 700; text-decoration: none;">Get Started →</a>
          </div>
        </div>
      `);
    }

    setMetaInfo({ title, desc, img });
    window.scrollTo(0, 0);
  }, [cleanSlug]);

  useEffect(() => {
    if (!htmlContent) return;

    // Define FAQ toggle globally for inline onclick="toggleFaq(this)"
    window.toggleFaq = function (btn) {
      if (!btn) return;
      const ans = btn.nextElementSibling;
      const icon = btn.querySelector('i');
      const wasOpen = btn.classList.contains('open') || (ans && ans.style.display === 'block');

      document.querySelectorAll('.faq-a').forEach(a => { a.style.display = 'none'; });
      document.querySelectorAll('.faq-q').forEach(q => {
        q.classList.remove('open');
        const ic = q.querySelector('i');
        if (ic) {
          ic.className = 'bi bi-plus-circle';
          ic.style.color = '#c10306';
        }
      });

      if (!wasOpen && ans) {
        btn.classList.add('open');
        ans.style.display = 'block';
        if (icon) {
          icon.className = 'bi bi-dash-circle';
        }
      }
    };

    // Tab switching listener
    const handleTabClick = (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      const tabId = btn.dataset.tab;
      if (!tabId) return;

      const wrap = btn.closest('.tab-wrap, .tab-container, .section-flex-grid, .blog-wrap, .blog-detail-container') || document;
      wrap.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const allPanes = wrap.querySelectorAll('.tab-pane');
      allPanes.forEach(p => p.classList.remove('active'));

      const target = document.getElementById(tabId);
      if (target) {
        target.classList.add('active');
        target.querySelectorAll('.bar-fill[data-width]').forEach((fill, i) => {
          fill.style.width = '0';
          setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, i * 150 + 100);
        });
      }
    };
    document.addEventListener('click', handleTabClick);

    // Global Share buttons listener (WhatsApp, LinkedIn, Twitter/X, Copy Link)
    const handleShareClick = (e) => {
      const btn = e.target.closest('.share-btn, .share-btn-round, [data-share]');
      if (!btn) return;

      const currentUrl = window.location.href;
      const title = document.title || 'Sociapa Marketing Insights';

      // WhatsApp
      if (btn.classList.contains('wa') || btn.dataset.share === 'wa') {
        e.preventDefault();
        const waText = encodeURIComponent(`${title}\n${currentUrl}`);
        window.open(`https://api.whatsapp.com/send?text=${waText}`, '_blank', 'noopener,noreferrer');
        return;
      }

      // LinkedIn
      if (btn.classList.contains('li') || btn.dataset.share === 'li') {
        e.preventDefault();
        const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        window.open(liUrl, '_blank', 'noopener,noreferrer');
        return;
      }

      // Twitter / X
      if (btn.classList.contains('tw') || btn.classList.contains('x') || btn.dataset.share === 'tw') {
        e.preventDefault();
        const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(twUrl, '_blank', 'noopener,noreferrer');
        return;
      }

      // Copy Link
      if (btn.classList.contains('cp') || btn.dataset.share === 'cp') {
        e.preventDefault();
        const copySuccess = () => {
          const originalContent = btn.innerHTML;
          btn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
          btn.style.setProperty('background', '#10b981', 'important');
          btn.style.setProperty('color', '#ffffff', 'important');
          setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.removeProperty('background');
            btn.style.removeProperty('color');
          }, 2500);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(currentUrl)
            .then(copySuccess)
            .catch(() => {
              fallbackCopy(currentUrl);
              copySuccess();
            });
        } else {
          fallbackCopy(currentUrl);
          copySuccess();
        }
        return;
      }
    };

    function fallbackCopy(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '-9999px';
      textArea.style.left = '-9999px';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }

    document.addEventListener('click', handleShareClick);

    // Make fade elements visible immediately
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
      el.classList.add('visible');
    });

    // Bar chart fill animations
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar-fill[data-width]').forEach((fill, i) => {
            setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, i * 150);
          });
          entry.target.querySelectorAll('.food-bar-fill[data-width]').forEach((fill, i) => {
            setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, i * 200 + 300);
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.chart-box, .chart-wrap, .food-grid').forEach(el => barObserver.observe(el));

    // Animated counters
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          if (!isNaN(target)) {
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const isDecimal = target % 1 !== 0;
            let start = 0;
            const duration = 1600;
            const startTime = performance.now();
            function update(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = start + (target - start) * eased;
              el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
              if (progress < 1) requestAnimationFrame(update);
              else el.textContent = prefix + target + suffix;
            }
            requestAnimationFrame(update);
          }
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.counter[data-target]').forEach(el => counterObserver.observe(el));

    return () => {
      document.removeEventListener('click', handleTabClick);
      document.removeEventListener('click', handleShareClick);
      barObserver.disconnect();
      counterObserver.disconnect();
      delete window.toggleFaq;
    };
  }, [htmlContent]);

  const seoTitle = metaInfo.title.includes('Sociapa') || metaInfo.title.includes('SOCIAPA') ? metaInfo.title : `${metaInfo.title} | Sociapa Newsroom`;
  const seoDesc = metaInfo.desc || 'Explore digital marketing, SEO, and AI trends from Sociapa.';
  const seoImg = metaInfo.img || `${import.meta.env.BASE_URL}images/sociapa-og.jpg`;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={`https://sociapa.com/${cleanSlug}`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={`https://sociapa.com/${cleanSlug}`} />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content={seoImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content={seoImg} />
        {/* Article Schema (Google Article guidelines) - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://sociapa.com/${cleanSlug}`
          },
          "headline": seoTitle,
          "image": {
            "@type": "ImageObject",
            "url": seoImg,
            "width": 1200,
            "height": 630
          },
          "datePublished": "2026-01-01T08:00:00+05:30",
          "dateModified": "2026-07-31T12:00:00+05:30",
          "author": {
            "@type": "Organization",
            "name": "Sociapa",
            "url": "https://sociapa.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sociapa",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sociapa.com/logoSociapa.png",
              "width": 200,
              "height": 60
            }
          },
          "description": seoDesc,
          "inLanguage": "en-IN",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://sociapa.com/#website",
            "name": "Sociapa",
            "url": "https://sociapa.com/"
          }
        })}</script>
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sociapa.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://sociapa.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": seoTitle,
              "item": `https://sociapa.com/${cleanSlug}`
            }
          ]
        })}</script>
      </Helmet>

      <div className={`blog-detail-wrapper ${htmlContent.includes('blogView') || htmlContent.includes('hero') ? 'has-banner' : 'no-banner'}`}>
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
