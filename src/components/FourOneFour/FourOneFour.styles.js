import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p:nth-child(3) {
    margin-bottom: 20px;
  }

  & > :nth-child(2) {
    margin: 0 auto;
    width: unset;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    flex-direction: row;
    top: unset;
    position: unset;

    & > * {
      width: 50%;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
  }
`;

export default Wrapper;
