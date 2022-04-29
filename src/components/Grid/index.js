import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import Line from './Grid.styles';

const StyledLines = styled.div``;

const Grid = ({ currentPage, colors = { lines: theme.color.lightGray } }) => {
  const lineColor = { ...colors };

  const { lightGray, yellow, lightNavy } = theme.color;

  if (currentPage === 0) {
    lineColor.lines = lightGray;
  } else if (currentPage === 1) {
    lineColor.lines = lightNavy;
    lineColor.innerLines = 'transparent';
  } else if (currentPage === 2) {
    lineColor.lines = yellow;
  }

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
