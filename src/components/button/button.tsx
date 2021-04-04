import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
}

export const Button = ({ children, ...props }: ButtonPropsType) => {
  return (
    <StyledButton {...props} className={props.className}>
      <span>{children}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonPropsType>`
  ${({ theme }) => {
    const { media, colors } = theme;

    return css`
      padding: 12px;
      border-radius: 2px;
      transition: all 0.1s ease-in-out;
      border: none;
      text-align: center;
      cursor: pointer;
    `;
  }}
`;
