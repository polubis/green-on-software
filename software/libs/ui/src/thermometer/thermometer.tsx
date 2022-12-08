import styled from 'styled-components';
import { getThemeProp } from '../theme';

const MAX_DEGREES = 100;
const [SMALL_MARKER, BIG_MARKER] = [3, 10];

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  background: #2f2f2f;
  width: 26px;
  border-top-left-radius: 39px;
  border-top-right-radius: 39px;
  padding: 24px 0 0 4px;
`;

const Degree = styled.div`
  background: ${getThemeProp('font')};
  width: ${SMALL_MARKER}px;
  height: 1px;
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
          <Degree
            key={i}
            style={{
              width: i % 5 === 0 ? `${BIG_MARKER}px` : `${SMALL_MARKER}px`,
            }}
          />
        ))}
      </Degrees>
    </Wrapper>
  );
};
