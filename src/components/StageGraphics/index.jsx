import styled from 'styled-components';
import StrategyIdea from './StrategyIdea';
import ConceptWireframing from './ConceptWireframing';
import Design from './Design';
import Development from './Development';
import OptimizationSupport from './OptimizationSupport';

const StageGraphicsWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

export default function StageGraphics({ index }) {
  return (
    <StageGraphicsWrapper>
      {index === 0 ? <StrategyIdea /> : null}
      {index === 1 ? <ConceptWireframing /> : null}
      {index === 2 ? <Design /> : null}
      {index === 3 ? <Development /> : null}
      {index === 4 ? <OptimizationSupport /> : null}
    </StageGraphicsWrapper>
  );
}
