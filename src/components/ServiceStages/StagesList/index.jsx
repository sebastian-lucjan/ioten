import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import Stage from './Stage';

const StyledStagesList = styled.ul`
  z-index: ${({ theme }) => theme.zIndex.top};
`;

export default function StagesList({ stages }) {
  return (
    <StyledStagesList>
      {stages.map((stage) => {
        return <Stage key={uuid()} stageData={stage} />;
      })}
    </StyledStagesList>
  );
}
