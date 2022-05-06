import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  position: relative;
  display: block;
  height: 60px;
  width: calc(100vw - 80px);
  margin: 2rem auto 0 auto;
  background: ${({ theme, backgroundColor, hasError }) => (hasError ? theme.color.red : backgroundColor || theme.color.darkestGray)};

  word-spacing: 5px;

  line-height: 100%;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  color: ${({ theme, textColor }) => textColor || theme.color.white};
  border: none;
  box-shadow: 4px 4px 0 ${({ hasError }) => (hasError ? 'hsla(0, 84%, 52%, 60%)' : `#0008`)};
  cursor: ${({ hasError }) => (hasError ? 'not-allowed' : 'pointer')};
  transition: 0.2s;

  &:active {
    box-shadow: 0 0 0 #0008;

    transform: ${({ hasError }) => (hasError ? 'translate(4px, 4px)' : 'translate(0px, 0px)')};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    width: calc(50% - 20px);
    margin: 1rem 0;
    padding: 1.4rem 4rem;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    width: 100%;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    //width: unset;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    height: 60px;
  }
`;
