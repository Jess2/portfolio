import React, { useRef, useEffect, useCallback } from 'react';

type ClipPathPropsType = {
  children: React.ReactNode;
  direction: string;
  duration: number;
  delay: number;
};

const useClipPath = ({ direction, duration, delay }: ClipPathPropsType) => {
  const element = useRef<HTMLDivElement>(null);

  const handleClipPath = (name) => {
    switch (name) {
      case 'up':
        return 'inset(100% 0 0 0)';
      case 'down':
        return 'inset(0 0 100% 0)';
      case 'left':
        return 'inset(0 100% 0 0)';
      case 'right':
        return 'inset(0 0 0 100%)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const currentStyle = element?.current.style;
      if (entry.isIntersecting) {
        currentStyle.transitionProperty = 'all, clip-path';
        currentStyle.transitionDuration = `${duration * 1.5}s, ${duration}s`;
        currentStyle.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        currentStyle.transitionDelay = `${delay}s`;
        currentStyle.transform = 'scale(1)';
        currentStyle.clipPath = 'inset(0 0 0 0)';
        currentStyle.opacity = `${1}`;
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.3 });
      observer.observe(element.current.parentNode);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: {
      transform: 'scale(1.2)',
      opacity: 0.5,
      clipPath: handleClipPath(direction),
    },
  };
};

export default useClipPath;
