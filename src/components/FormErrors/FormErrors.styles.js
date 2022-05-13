import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100vw - 80px);
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.peak};
  box-shadow: 4px 4px 0 ${({ hasError }) => (hasError ? 'hsla(0, 84%, 52%, 60%)' : `#0008`)};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    width: calc(50% - 20px);
    margin: 1rem 0;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    width: 100%;
    box-shadow: 4px 4px 0 ${({ hasError }) => (hasError ? 'hsla(0, 84%, 52%, 60%)' : `#0008`)};
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    right: 40px;
    width: calc(50% - 50px);
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;

export const StyledError = styled.div`
  &:not(:first-child) {
    border-top: 2px dotted ${({ theme }) => theme.color.white};
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;

export const ErrorsContainer = styled.div`
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.smallText};
  padding: 2rem;
`;
