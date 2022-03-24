import styled from 'styled-components';

const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: ${({ smaller }) => (smaller ? 'unset' : '100vh')};
  background: ${({ colors }) => colors.background};

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    background: ${({ colors }) => colors.lines};
  }

  &::after {
    left: 20px;
  }

  &::before {
    right: 20px;
  }
`;

export default MainSectionWrapper;
