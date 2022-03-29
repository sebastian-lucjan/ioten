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
  align-items: center;
  width: 50%;
  cursor: pointer;

  .styled-nav-item__paragraph {
    display: none;

    ${({ theme }) => theme.mq.tablet} {
      display: block;
    }
  }
`;

export const StyledTextContent = styled.div`
  width: 70%;
  text-align: ${({ type }) => (type === 'next' ? 'right' : 'left')};
`;

export const StyledHeading = styled.h3`
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.smallText};
  text-align: ${({ type }) => (type === 'next' ? 'right' : 'left')};

  ${({ theme }) => theme.mq.tablet} {
    line-height: 32px;
  } ;
`;

export const StyledParagraph = styled.p`
  display: none;
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.smallText};
  text-align: ${({ type }) => (type === 'next' ? 'right' : 'left')};

  line-height: 20px;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`;
