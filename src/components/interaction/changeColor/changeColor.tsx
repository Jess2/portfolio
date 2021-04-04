import React from 'react';
import useChangeColor from 'hooks/useChangeColor';

type ClipPathPropsType = {
  children: React.ReactNode;
  className?: string;
  end: string;
  start: string;
  duration?: number;
  delay?: number;
};

const ChangeColor = ({ children, className, end, start, duration = 3, delay = 0 }: ClipPathPropsType) => {
  return (
    <span
      className={className}
      {...useChangeColor({
        children,
        end,
        start,
        duration,
        delay,
      })}
    >
      {children}
    </span>
  );
};

export default ChangeColor;
