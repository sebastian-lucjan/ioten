import { v4 as uuid } from 'uuid';
import Stage from './Stage';

// const StyledStagesList = styled.ul``;

export default function StagesList({ stages }) {
  return (
    <ul>
      {stages.map((stage) => {
        return <Stage key={uuid()} stageData={stage} />;
      })}
    </ul>
  );
}
