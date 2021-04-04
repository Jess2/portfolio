import React from 'react';
import useCountUp from 'hooks/useCountUp';

type CountUpPropsType = {
  children?: React.ReactNode;
  className?: string;
  end?: number;
  start?: number;
  duration?: number;
};

const CountUp = ({ children, className, end, start = 0, duration = 1000 }: CountUpPropsType) => {
  return (
    <span
      className={className}
      {...useCountUp({
        children,
        end,
        start,
        duration,
      })}
    >
      {children}
    </span>
  );
};

export default CountUp;
