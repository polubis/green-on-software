import styled, { css } from 'styled-components';
import { getThemeProp } from '../theme';

const MAX_DEGREES = 100;
const [SMALL_MARKER, BIG_MARKER] = [3, 10];

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #2f2f2f;
  width: 26px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`;

const Degree = styled.div<{ big: boolean }>`
  background: ${getThemeProp('font')};
  width: ${SMALL_MARKER}px;
  height: 1px;

  ${({ big }) =>
    big &&
    css`
      width: ${BIG_MARKER}px;
    `}
`;

const Degrees = styled.div`
  display: flex;
  flex-flow: column;

  & > *:not(:last-child) {
    margin-bottom: 2px;
  }
`;

export const Thermometer = (props: any) => {
  return (
    <Wrapper>
      <Degrees>
        {Array.from({ length: MAX_DEGREES }).map((_, i) => (
          <Degree key={i} big={i % 5 === 0} />
        ))}
      </Degrees>
    </Wrapper>
  );
};
