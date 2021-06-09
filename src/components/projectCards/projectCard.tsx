import React from 'react';
import styled, { css } from 'styled-components';
import { H3, P } from '../text';

type projectCardType = {
  imageSrc?: string;
  title: string;
  description: string;
};

export const ProjectCard = ({ imageSrc, title, description }: projectCardType) => {
  return (
    <StyledCard>
      {imageSrc && <img src={imageSrc} alt="Project Image" />}
      {!imageSrc && <img src="/favicon.ico" alt="Project Image" />}
      <H3 color="white">{title}</H3>
      <P color="white">{description}</P>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  ${({ theme }) => {
    const { media, colors } = theme;

    return css`
      display: inline-block;
      box-shadow: 0 0 10px ${colors['white']};
      border-radius: 10px;
      padding: 10px;
      width: 300px;
      height: 400px;
      color: ${colors['white']};
      margin: 2em;

      > img {
        width: 100%;
      }
    `;
  }}
`;
