import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { getThemeProp } from '../theme';

export interface ButtonProps {
  children: ReactNode;
  outlined?: boolean;
  uppercased?: boolean;
}

const Primary = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 4px;
  padding: 12px 18px;
  font-size: 14px;
  font-family: 'Lexend-Bold';

  ${({ outlined }) =>
    outlined
      ? css`
          color: ${getThemeProp('primary')};
          border: 1px solid ${getThemeProp('primary')};
          background: transparent;

          &:hover {
            background: ${getThemeProp('primary')};
            color: ${getThemeProp('color')};
          }
        `
      : css`
          color: ${getThemeProp('color')};
          border: 1px solid transparent;
          background: ${getThemeProp('primary')};
        `}

  ${({ uppercased }) =>
    uppercased &&
    css`
      text-transform: uppercase;
    `}
`;

export const Button = (props: ButtonProps) => {
  return <Primary {...props} />;
};