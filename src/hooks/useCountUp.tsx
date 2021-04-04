import React, { useRef, useEffect, useCallback } from 'react';

type CountUpPropsType = {
  children: React.ReactNode;
  end: number;
  start: number;
  duration: number;
};

const useCountUp = ({ end, start, duration }: CountUpPropsType) => {
  const element = useRef<HTMLDivElement>(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]) => {
      const elementCurrent = element?.current;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;
          elementCurrent.innerHTML = `${currentNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`;
          if (currentNumber === end) {
            clearInterval(counter);
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, element],
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
  };
};

export default useCountUp;
