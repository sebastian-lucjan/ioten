import StrategyIdea from './StrategyIdea';

export default function StageGraphics({ index }) {
  return <div>{index === 0 ? <StrategyIdea /> : null}</div>;
}
