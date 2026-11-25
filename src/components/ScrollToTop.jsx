import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures every route navigation to a NEW page opens cleanly from the top (header).
 * It strictly ignores in-page state changes, tabs, accordions, and buttons.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(null);

  useLayoutEffect(() => {
    // If navigation targets an in-page hash anchor (e.g. #services), smoothly scroll to that section
    if (hash) {
      const timer = setTimeout(() => {
        const targetId = hash.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return () => clearTimeout(timer);
    }

    // ONLY scroll to top when navigating to a DIFFERENT page route
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;

      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;

      const raf = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [pathname, hash]);

  return null;
}
