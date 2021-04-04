import React, { useRef, useEffect, useCallback } from 'react';

type FadeInPropsType = {
  children: React.ReactNode;
  direction: string;
  duration: number;
  delay: number;
  distance: number;
};

const useFadeIn = ({ direction, duration, delay, distance }: FadeInPropsType) => {
  const element = useRef<HTMLDivElement>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case 'up':
        return `translate3d(0, ${distance}%, 0)`;
      case 'down':
        return `translate3d(0, -${distance}%, 0)`;
      case 'left':
        return `translate3d(${distance}%, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}%, 0, 0)`;
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const currentStyle = element?.current.style;
      if (entry.isIntersecting) {
        currentStyle.transitionProperty = 'all';
        currentStyle.transitionDuration = `${duration}s`;
        currentStyle.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        currentStyle.transitionDelay = `${delay}s`;
        currentStyle.opacity = `${1}`;
        currentStyle.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.3 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useFadeIn;
