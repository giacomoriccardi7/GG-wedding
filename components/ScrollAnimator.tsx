
import React, { useRef, useEffect, useState } from 'react';

interface ScrollAnimatorProps {
  children: React.ReactNode;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after it becomes visible so the animation doesn't re-trigger
          if(domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimator;
