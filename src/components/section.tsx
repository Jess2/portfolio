import styled, { css } from 'styled-components';

type SectionPropsType = {
  bgColor?: string;
  bgImageSrc?: string;
  isAlignCenter?: boolean;
  isFullWindow?: boolean;
};

const Section = styled.section<SectionPropsType>`
  ${({ theme, bgColor, bgImageSrc, isAlignCenter, isFullWindow }) => {
    const { media, colors } = theme;

    return css`
      position: relative;
      width: 100%;
      padding: 50px 0;
      background-color: ${colors[bgColor] || colors['white']};

      ${bgImageSrc &&
      css`
        background-image: url(${bgImageSrc});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: bottom center;
      `}

      ${isAlignCenter &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}

      ${isFullWindow &&
      css`
        min-height: 100vh;
      `}

      ${media.tablet} {
        padding: 80px 0;
      }

      ${media.desktop} {
        padding: 100px 0;
      }
    `;
  }}
`;

export default Section;
