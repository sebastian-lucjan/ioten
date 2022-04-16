import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import Line from './Grid.styles';

const StyledLines = styled.div``;

const Grid = ({ colors = { lines: theme.color.lightGray } }) => {
  const lineColor = { ...colors };

  if (!lineColor?.innerLines) {
    lineColor.innerLines = lineColor.lines;
  }

  return (
    <StyledLines>
      <Line color={lineColor.lines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.innerLines} />
      <Line color={lineColor.lines} />
    </StyledLines>
  );
};

export default Grid;
