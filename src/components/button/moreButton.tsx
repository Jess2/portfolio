import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface MoreButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  scrollTo: number;
}

export const MoreButton = ({ children, ...props }: MoreButtonPropsType) => {
  const onClickMoreButton = () => {
    window.scrollTo({ top: props.scrollTo, left: 0, behavior: 'smooth' });
  };

  return (
    <StyledMoreButton {...props} className={props.className} onClick={onClickMoreButton}>
      <span>{children}</span>
      <img src="/images/img_icon_arrow_down.svg" alt="img_icon_arrow_button" />
    </StyledMoreButton>
  );
};

const StyledMoreButton = styled.button<MoreButtonPropsType>`
  ${({ theme }) => {
    const { colors } = theme;

    return css`
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 5vh;
      color: ${colors['white']};
      z-index: 1;
      text-align: center;
      transition: all 0.1s ease-in-out;

      &:hover {
        opacity: 0.7;
      }

      img {
        margin: 10px auto 0;
        opacity: 0.3;
        animation: fadein 1s linear infinite;
      }

      @keyframes fadein {
        0% {
          opacity: 0.3;
          transform: translateY(0);
        }
        50% {
          opacity: 1;
          transform: translateY(10px);
        }
        100% {
          opacity: 0.3;
          transform: translateY(0);
        }
      }
    `;
  }}
`;
