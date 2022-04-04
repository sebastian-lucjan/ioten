import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    flex-direction: row;
    min-height: 90vh;
  } ;
`;

export default Wrapper;
