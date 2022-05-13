import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  height: 60px;
  width: calc(100vw - 80px);
  margin: 2rem auto 0 auto;
  background: ${({ theme, backgroundColor, hasError }) => {
    if (hasError) {
      return theme.color.red;
    }
    return backgroundColor || theme.color.darkestGray;
  }};

  word-spacing: 5px;
  //line-height: 100%;
  line-height: 32px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  color: ${({ theme, textColor }) => textColor || theme.color.white};
  border: none;
  box-shadow: 4px 4px 0 ${({ hasError }) => (hasError ? 'hsla(0, 84%, 52%, 60%)' : `#0008`)};
  cursor: ${({ hasError }) => (hasError ? 'not-allowed' : 'pointer')};
  transition: 0.2s;

  svg {
    transition: transform 3s;
    width: 60px;
    transform: ${({ isLoading }) => (isLoading ? 'scale(3) translate(50vw, -50vh)' : 'scale(1.2)')};
  }

  &:active {
    box-shadow: 0 0 0 #0008;

    transform: translate(4px, 4px);

    ${({ hasError }) => (hasError ? 'translate(4px, 4px)' : 'translate(px, 4px)')};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    width: calc(50% - 20px);
    margin: 1rem 0;
    padding: 1.4rem 4rem;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    padding: 1.4rem;
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
