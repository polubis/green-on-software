import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ListProps {
  children: ReactNode[];
}

const Ul = styled.ul`
  display: flex;
  flex-flow: column;

  & > *:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const List = ({ children }: ListProps) => {
  return <Ul>{children}</Ul>;
};
