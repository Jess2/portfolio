import React from 'react';
import styled from 'styled-components';
import useFadeIn from 'hooks/useFadeIn';

type FadeInPropsType = {
  children: React.ReactNode;
  className?: string;
  direction?: string;
  duration?: number;
  delay?: number;
  distance?: number;
};

const FadeIn = ({
  children,
  className,
  direction = 'left',
  duration = 1,
  delay = 0,
  distance = 20,
}: FadeInPropsType) => {
  return (
    <S.Wrapper>
      <div
        className={className}
        {...useFadeIn({
          children,
          direction,
          duration,
          delay,
          distance,
        })}
      >
        {children}
      </div>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    width: 100%;

    > div {
      width: 100%;
    }
  `,
};

export default FadeIn;
