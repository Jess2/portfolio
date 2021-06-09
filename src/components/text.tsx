import React from 'react';
import styled, { css } from 'styled-components';

type TextPropsType = {
  color?: string;
};

const commonStyle = css<TextPropsType>`
  ${({ theme, color }) => {
    const { colors } = theme;

    return css`
      color: ${colors[color] || colors['black']};
    `;
  }}
`;

export const H1 = styled.h1<TextPropsType>`
  ${({ theme }) => {
    const { media } = theme;

    return css`
      ${commonStyle};
      font-weight: bold;
      font-size: 36px;

      ${media.tablet} {
        font-size: 48px;
      }

      ${media.desktop} {
        font-size: 72px;
      }
    `;
  }}
`;

export const H2 = styled.h2<TextPropsType>`
  ${({ theme }) => {
    const { media } = theme;

    return css`
      ${commonStyle};
      font-weight: bold;
      font-size: 24px;

      ${media.tablet} {
        font-size: 36px;
      }

      ${media.desktop} {
        font-size: 56px;
      }
    `;
  }}
`;

export const H3 = styled.h3<TextPropsType>`
  ${({ theme }) => {
    const { media } = theme;

    return css`
      ${commonStyle};
      font-weight: bold;
      font-size: 20px;

      ${media.tablet} {
        font-size: 24px;
      }

      ${media.desktop} {
        font-size: 30px;
      }
    `;
  }}
`;

export const P = styled.p<TextPropsType>`
  ${({ theme }) => {
    const { media } = theme;

    return css`
      ${commonStyle};
      font-size: 14px;

      ${media.tablet} {
        font-size: 16px;
      }

      ${media.desktop} {
        font-size: 20px;
      }
    `;
  }}
`;
