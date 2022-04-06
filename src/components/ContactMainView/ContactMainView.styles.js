import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.smallDesktop} {
    flex-direction: row;
  }

  ${({ theme }) => theme.mq.desktop} {
    justify-content: center;
  }
`;

export default Wrapper;
