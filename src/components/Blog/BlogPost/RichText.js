import styled from 'styled-components';

export const StyledQuote = styled.p`
  position: relative;
  display: block;
  color: ${({ theme }) => theme.color.darkestGray};
  margin-top: 1rem;
  padding: 1rem 0 1rem 1.6rem;

  * {
    font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
    font-size: ${({ theme }) => theme.font.size.headingMedium};
  }

  &::before {
    position: absolute;
    content: '';
    top: 2rem;
    left: 0;
    height: calc(100% - 4rem);
    width: 5px;
    background-color: ${({ theme }) => theme.color.green};
  }
`;

export const Quote = ({ children }) => {
  return <StyledQuote>{children}</StyledQuote>;
};
export const StyledHeading = styled.h5`
  margin-top: 2rem;
  letter-spacing: 1px;

  font-size: ${({ lvl, theme }) => {
    switch (lvl) {
      case 3:
        return theme.font.size.paragraphBig;
      case 4:
        return theme.font.size.headingSmall;
      case 5:
        return theme.font.size.paragraph;
      default:
        return theme.font.size.smallText;
    }
  }};

  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.darkestGray};
`;

export const Heading = ({ lvl, children }) => {
  return (
    <StyledHeading as={`h${lvl}`} lvl={lvl}>
      {children}
    </StyledHeading>
  );
};
