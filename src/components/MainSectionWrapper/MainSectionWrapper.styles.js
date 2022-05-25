import styled from 'styled-components';

const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  color: black;
  min-height: ${({ smaller }) => (smaller ? 'unset' : '100vh')};
  background: ${({ background }) => {
    console.log('background', background);
    return background;
  }};

  ${({ theme }) => theme.mq.tablet} {
    min-height: 0;
  }
`;

export default MainSectionWrapper;
