import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import Line from './Grid.styles';

const StyledLines = styled.div`
  //position: absolute;
  //top: 0;
  //left: 0;
  //min-height: 120vh;
`;

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
