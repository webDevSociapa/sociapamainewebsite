import { useEffect, useRef } from 'react';

/**
 * Animated count-up metric component triggered when scrolled into view.
 */
export default function Counter({ end, suffix = '', duration = 1200 }) {
  const spanRef = useRef(null);

  useEffect(() => {
    if (!spanRef.current) return;
    let animationFrameId = null;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * end);
      if (spanRef.current) {
        spanRef.current.textContent = val + suffix;
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else if (spanRef.current) {
        spanRef.current.textContent = end + suffix;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(animate);
        }, 200);
      }
    }, { threshold: 0.2 });

    observer.observe(spanRef.current);

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, suffix, duration]);

  return (
    <span
      ref={spanRef}
      style={{
        fontVariantNumeric: 'tabular-nums',
        display: 'inline-block',
        minWidth: `${String(end).length + suffix.length}ch`,
        textAlign: 'center'
      }}
    >
      {end}{suffix}
    </span>
  );
}
