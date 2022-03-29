import { StyledGrid, Line } from './Grid.styles';

const Grid = ({ colors }) => {
  const lineColor = { ...colors };

  if (!lineColor?.innerLines) {
    lineColor.innerLines = lineColor.lines;
  }

  return (
    <StyledGrid>
      <Line color={lineColor.lines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.lines} />
    </StyledGrid>
  );
};

export default Grid;
