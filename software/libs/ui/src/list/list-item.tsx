import { ReactNode } from 'react';
import styled from 'styled-components';
import { circle } from '../shared';
import { getThemeProp } from '../theme';

export interface ListItemProps {
  children: ReactNode;
}

const Li = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: 'Lexend-Regular';

  &::before {
    content: '';
    background: ${getThemeProp('primary')};
    margin-right: 12px;
    ${circle('7px')}
  }
`;

export const ListItem = ({ children }: ListItemProps) => {
  return <Li>{children}</Li>;
};
