import React from 'react';
import styled from 'styled-components';
import useClipPath from 'hooks/useClipPath';

type ClipPathPropsType = {
  children: React.ReactNode;
  className?: string;
  direction?: string;
  duration?: number;
  delay?: number;
};

const ClipPath = ({ children, className, direction = 'left', duration = 1, delay = 0 }: ClipPathPropsType) => {
  return (
    <S.Wrapper>
      <div
        className={className}
        {...useClipPath({
          children,
          direction,
          duration,
          delay,
        })}
      >
        {children}
      </div>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default ClipPath;
