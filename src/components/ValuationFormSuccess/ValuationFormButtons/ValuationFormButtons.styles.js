import styled from 'styled-components';

export const StyledGoHomeButton = styled.button`
  display: flex;
  justify-content: center;
  width: 70%;
  margin-top: 3rem;

  height: 4rem;
  line-height: 4rem;

  background-color: ${({ theme }) => theme.color.blue};
  border: none;
  border-radius: 0.4rem;

  font-size: 14px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledRestartValuationFormButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.font.size.xsText};
  color: ${({ theme }) => theme.color.darkestGray};

  :after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.darkGray};
  }
`;
