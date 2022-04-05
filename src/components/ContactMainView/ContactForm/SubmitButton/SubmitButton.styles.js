import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  position: relative;
  display: block;
  height: 60px;
  width: calc(100vw - 80px);
  margin: 2rem auto 0 auto;
  background: ${({ theme, backgroundColor }) => backgroundColor || theme.color.darkestGray};

  line-height: 100%;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  color: ${({ theme, textColor }) => textColor || theme.color.white};
  box-shadow: 4px 4px 0 hsl(0, 0%, 15%, 0.7);
  border: none;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    width: unset;
    margin: 0;
    padding: 1.4rem 4rem;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    width: unset;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;
