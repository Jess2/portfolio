import React, { useRef, useEffect, useCallback } from 'react';

type FadeInPropsType = {
  children: React.ReactNode;
  end: string;
  start: string;
  duration: number;
  delay: number;
};

const useChangeColor = ({ end, start, duration, delay }: FadeInPropsType) => {
  const element = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(
    ([entry]) => {
      const currentStyle = element?.current.style;
      if (entry.isIntersecting) {
        currentStyle.transitionProperty = 'all';
        currentStyle.transitionDuration = `${duration}s`;
        currentStyle.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        currentStyle.transitionDelay = `${delay}s`;
        currentStyle.backgroundColor = `${end}`;
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
      backgroundColor: start,
    },
  };
};

export default useChangeColor;
