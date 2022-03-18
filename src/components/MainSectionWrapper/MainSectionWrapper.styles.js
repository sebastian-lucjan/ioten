import styled from 'styled-components';

const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme, colors }) =>
    colors.isGradient ? theme.gradient[colors.bgColor] : theme.color[colors.bgColor]};
  border: 1px solid red;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    background-color: ${({ theme, colors }) => theme.color[colors.linesColor]};
  }

  &::after {
    left: 20px;
  }

  &::before {
    right: 20px;
  }
`;

export default MainSectionWrapper;
