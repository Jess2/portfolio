import React from 'react';
import styled, { css } from 'styled-components';

type stickyItemPropsType = {
  children: React.ReactNode;
  className?: string;
  opacity: number;
  translateY: number;
};

const StickyItem = ({ children, className, ...props }: stickyItemPropsType) => {
  return (
    <StyledStickyItem {...props} className={className}>
      {children}
    </StyledStickyItem>
  );
};

const StyledStickyItem = styled.div.attrs<stickyItemPropsType>(({ opacity, translateY }) => ({
  style: {
    opacity: opacity,
    transform: `translate3d(0, ${translateY}%, 0)`,
  },
}))`
  ${({ theme }) => {
    const { colors, media } = theme;

    return css`
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 10vh;
      width: 100%;
      height: 80%;
      color: ${colors['white-default-2']};

      h2 {
        font-size: 36px;
        font-weight: bold;
        line-height: 1.3;
        text-shadow: 0 16px 29px rgba(78, 78, 78, 0.1);
        color: ${colors['white-default-2']};

        ${media.tablet} {
          font-size: 48px;
        }

        ${media.desktop} {
          font-size: 72px;
        }

        &.h2-smaller {
          font-size: 24px;

          ${media.tablet} {
            font-size: 36px;
          }

          ${media.desktop} {
            font-size: 48px;
          }
        }

        span {
          &.metaverse {
            display: inline-block;
            margin-top: -4%;
            font-size: 64px;

            ${media.tablet} {
              font-size: 96px;
            }

            ${media.desktop} {
              font-size: 128px;
            }
          }
        }
      }

      img {
        max-width: 80%;
        max-height: 90%;

        ${media.desktop} {
          max-width: 1200px;
        }

        &.logo-image {
          display: block;
          width: 20%;
          min-width: 90px;
          max-width: 412px;
          padding-bottom: 2.5%;
        }
      }
    `;
  }}
`;

export { StickyItem };
