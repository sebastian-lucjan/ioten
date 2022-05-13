import styled from 'styled-components';

export const StyledLink = styled.a`
  display: block;
  font-size: 22px;
  transform: ${({ type }) => (type === 'next' ? 'scaleX(-1)' : null)};
  line-height: 22px;
`;

export const StyledNavItem = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === 'prev' ? 'row' : 'row-reverse')};
  width: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  color: ${({ theme, pageIndex }) => {
    if (typeof window !== 'undefined' && 'ontouchstart' in document.documentElement) {
      console.log('touch');
    }
    if (pageIndex === 1) {
      return theme.color.lightestGray;
    }

    return theme.color.darkestGray;
  }};

  ${({ theme }) => theme.mq.smallDesktop} {
    color: ${({ theme, pageIndex }) => {
      if (pageIndex === 1) {
        return theme.color.lighterGray;
      }

      return theme.color.darkerGray;
    }};

    &:hover {
      transform: scale(1.02);
      transform-origin: ${({ type }) => (type === 'prev' ? 'left' : 'right')};

      color: ${({ theme, pageIndex }) => {
        if (pageIndex === 1) {
          return theme.color.lightestGray;
        }

        return theme.color.darkestGray;
      }};
    }
  }

  .styled-nav-item__paragraph {
    display: none;

    ${({ theme }) => theme.mq.tablet} {
      display: block;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 40%;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 35%;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    width: 28%;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    width: 25%;
  }
`;

export const StyledTextContent = styled.div`
  width: 70%;
  text-align: ${({ type }) => (type === 'next' ? 'right' : 'left')};

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 0.8rem;
  } ;
`;

export const StyledHeading = styled.h3`
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.smallText};
  text-align: ${({ type }) => (type === 'next' ? 'right' : 'left')};
  line-height: 24px;

  ${({ theme }) => theme.mq.tablet} {
    line-height: 24px;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    line-height: 28px;
  }
`;

export const StyledParagraph = styled.p`
  display: none;
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.smallText};
  text-align: ${({ type }) => (type === 'next' ? 'right' : 'left')};
  //color: ${({ theme, color }) => color || theme.color.darkestGray};

  line-height: 20px;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    font-size: ${({ theme }) => theme.font.size.smallText};
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    line-height: 24px;
  }
`;
