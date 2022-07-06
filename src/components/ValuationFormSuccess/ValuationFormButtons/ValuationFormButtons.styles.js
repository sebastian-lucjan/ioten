import styled from 'styled-components';

export const StyledGoHomeButton = styled.button`
  margin-top: 3rem;
  height: 4rem;
  line-height: 4rem;
  width: calc(100vw - 80px);
  background: ${({ theme }) => theme.gradient.blue};
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;

  font-size: 14px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    width: 200%;
  }
  ${({ theme }) => theme.mq.mediumDesktop} {
    height: 5rem;
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
`;

export const StyledRestartValuationFormButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.color.darkestGray};
  word-spacing: 0.1rem;
  cursor: pointer;

  :after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.darkGray};
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.smallText};
  }
`;
