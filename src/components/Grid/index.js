import theme from 'src/assets/styles/theme';
import Line from './Grid.styles';

const Grid = ({ colors = { lines: theme.color.lightGray } }) => {
  const lineColor = { ...colors };

  if (!lineColor?.innerLines) {
    lineColor.innerLines = lineColor.lines;
  }

  return (
    <div>
      <Line color={lineColor.lines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.lines} />
    </div>
  );
};

export default Grid;
