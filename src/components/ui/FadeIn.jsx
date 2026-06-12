import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * Wraps children with a fade-in-on-scroll animation.
 * Uses the `fade-in` / `visible` CSS classes defined in index.css.
 */
export default function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
