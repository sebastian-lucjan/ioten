import styled from 'styled-components';

export const Styled404Info = styled.div`
  position: absolute;
  bottom: 5vh;
  z-index: ${({ theme }) => theme.zIndex.peak};
  color: ${({ theme }) => theme.color.darkestGray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.mq.tablet} {
    bottom: 5vh;
  }
  ${({ theme }) => theme.mq.smallDesktop} {
    padding: 20px;
    position: unset;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    width: unset;
    margin: 0 auto;
  }
`;

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.headingMedium};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.headingPage};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingGargantuan};
  } ;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  line-height: 28px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    line-height: 32px;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
    line-height: 40px;
  }
`;

export const StyledLink = styled.a`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.smallText};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  line-height: 28px;
  cursor: pointer;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    line-height: 32px;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphBig};
    line-height: 32px;
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 4px;
    background-color: ${({ theme }) => theme.color.darkestGray};

    ${({ theme }) => theme.mq.hugeDesktop} {
      bottom: 0;
      height: 3px;
    }
  }
`;
