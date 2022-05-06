import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 40px 100px 40px;
  width: 100%;

  .form-duel {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 40px 240px 40px;

    .form-duel {
      display: flex;
      flex-direction: row;
    }
    //form input margin for Email and Mobile
    .form-duel > div:nth-child(2n) {
      margin-left: 10px;
    }

    //form input margin for Name and Company
    .form-duel > div:nth-child(2n + 1) {
      margin-right: 10px;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    padding: ${({ hasError }) => (hasError ? '80px 40px 40px 40px' : '0 40px')};
    width: 50%;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    padding: ${({ hasError }) => (hasError ? '0 0 0px 0' : '0')};

    .form__container {
      width: calc(50% - 10px);
      height: 65vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    .form__container {
      height: 55vh;
    }
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    .form__container {
      height: 45vh;
      padding: 0 40px;
    }
  }
`;
