import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // Small delay lets react-helmet-async update document.title before we read it
    const timer = setTimeout(() => {
      // Track GA4 PageViews for both properties (Active G-BPXMCJ52CP & New G-S5D0RSK8D5)
      if (window.gtag) {
        window.gtag('config', 'G-BPXMCJ52CP', {
          page_path: currentPath,
          page_location: window.location.href,
          page_title: document.title,
        });
        window.gtag('config', 'G-S5D0RSK8D5', {
          page_path: currentPath,
          page_location: window.location.href,
          page_title: document.title,
        });
      }

      // Track Meta Pixel PageViews
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    }, 300);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}
