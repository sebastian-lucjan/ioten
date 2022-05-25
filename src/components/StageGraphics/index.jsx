import StrategyIdea from './StrategyIdea';
import ConceptWireframing from './ConceptWireframing';
import Design from './Design';
import Development from './Development';
import OptimizationSupport from './OptimizationSupport';

export default function StageGraphics({ index }) {
  return (
    <div>
      {index === 0 ? <StrategyIdea /> : null}
      {index === 1 ? <ConceptWireframing /> : null}
      {index === 2 ? <Design /> : null}
      {index === 3 ? <Development /> : null}
      {index === 4 ? <OptimizationSupport /> : null}
    </div>
  );
}
