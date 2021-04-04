import styled, { css } from 'styled-components';
type stickyPropsType = {
  sceneHeight: number;
};

const StyledSticky = styled.section<stickyPropsType>`
  ${({ theme, sceneHeight }) => {
    const { colors } = theme;

    return css`
      position: relative;
      text-align: center;
      height: ${sceneHeight}px;
      overflow-x: hidden;

      h1 {
        font-size: 4rem;
        font-weight: bold;
        color: ${colors['accent-2-lightest-1-2']};
      }
    `;
  }}
`;

export { StyledSticky };
