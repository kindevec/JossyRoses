import React, { useEffect, useRef, useState } from 'react';

export const AnimateIn = ({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in'
  delay = 0,
  duration = 800,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay + 30);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-[800ms]';

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-14 pointer-events-none`;
        case 'fade-down':
          return `${baseClasses} opacity-0 -translate-y-14 pointer-events-none`;
        case 'fade-left':
          return `${baseClasses} opacity-0 -translate-x-16 pointer-events-none`;
        case 'fade-right':
          return `${baseClasses} opacity-0 translate-x-16 pointer-events-none`;
        case 'zoom-in':
          return `${baseClasses} opacity-0 scale-90 translate-y-10 pointer-events-none`;
        default:
          return `${baseClasses} opacity-0 translate-y-14 pointer-events-none`;
      }
    }

    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClasses()}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};
