import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 4rem;

  & > * {
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(50% - 20px);

    p {
      width: 100%;
    }
  }
`;
