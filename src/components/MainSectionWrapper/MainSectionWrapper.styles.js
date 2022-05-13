import styled from 'styled-components';

const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  color: black;
  min-height: ${({ smaller }) => (smaller ? 'unset' : '100vh')};
  background: ${({ background }) => background};
  transition: background 0.5s ease;

  ${({ theme }) => theme.mq.tablet} {
    min-height: 0;
  }
`;

export default MainSectionWrapper;
