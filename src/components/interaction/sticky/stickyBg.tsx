import styled, { css } from 'styled-components';
import React from 'react';

type stickyBgPropsType = {
  children?: React.ReactNode;
  className?: string;
  opacity: number;
  bgImageSrc?: string;
  bgColor?: string;
  isWideWrapper: boolean;
  bgPositionX: string;
};

type stickyWrapperPropsType = {
  children?: React.ReactNode;
  className?: string;
};

const StickyBg = ({ children, className, ...props }: stickyBgPropsType) => {
  return (
    <StyledStickyBg {...props} className={className}>
      {children}
    </StyledStickyBg>
  );
};

const StyledStickyBg = styled.div.attrs<stickyBgPropsType>(({ opacity, isWideWrapper }) => ({
  style: {
    opacity: opacity,
    backgroundSize: isWideWrapper ? `100% auto` : `auto 100%`,
  },
}))`
  ${({ theme }) => {
    const { media } = theme;

    return css`
      ${({ bgImageSrc, bgColor, bgPositionX }: stickyBgPropsType) => {
        return css`
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          background-repeat: no-repeat;

          ${bgImageSrc &&
          css`
            background-image: url(${bgImageSrc});
          `}

          ${bgColor &&
          css`
            background-color: ${bgColor};
          `}
          
          ${bgPositionX &&
          css`
            background-position: ${bgPositionX} center;
          `}
        `;
      }}
    `;
  }}
`;

const StickyBgWrapper = ({ children, className, ...props }: stickyWrapperPropsType) => {
  return (
    <StyledStickyBgWrapper {...props} className={className}>
      {children}
    </StyledStickyBgWrapper>
  );
};

const StyledStickyBgWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
`;

export { StickyBg, StickyBgWrapper };
