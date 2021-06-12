import React from 'react';
import styled, { css } from 'styled-components';
import { H4, P } from '../text';

type projectCardType = {
  imageSrc?: string;
  title: string;
  description: string;
};

export const ProjectCard = ({ imageSrc, title, description }: projectCardType) => {
  return (
    <S.Card>
      <S.CardImg imageSrc={imageSrc || '/favicon.ico'} />
      <S.CardText>
        <H4 color="white">{title}</H4>
        <P color="white" dangerouslySetInnerHTML={{ __html: description }} />
      </S.CardText>
    </S.Card>
  );
};

const S = {
  Card: styled.div`
    ${({ theme }) => {
      const { colors } = theme;

      return css`
        display: inline-block;
        border-radius: 30px;
        width: 300px;
        height: 400px;
        margin: 2em 1em;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: translateY(-20px);
          box-shadow: 0 9px 24px 0 ${colors['gray500']};
        }
      `;
    }}
  `,
  CardImg: styled.div<{ imageSrc: string }>`
    ${({ theme, imageSrc }) => {
      const { colors } = theme;

      return css`
        background-image: url(${imageSrc});
        background-color: ${colors['gray900']};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 180px;
      `;
    }}
  `,
  CardText: styled.div`
    ${({ theme }) => {
      const { colors } = theme;

      return css`
        padding: 1.2em 1em;
        height: calc(100% - 180px);
        background-color: ${colors['gray100']};

        * {
          color: ${colors['black']};
        }

        ${H4} {
          padding-bottom: 0.4em;
        }
      `;
    }}
  `,
};
