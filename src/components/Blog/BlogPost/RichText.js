import styled from 'styled-components';

export const StyledQuote = styled.p`
  position: relative;
  display: block;
  padding-left: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.darkerGray};
  margin-top: 1rem;

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
  font-size: 24px;
`;

export const Heading = ({ lvl, children }) => {
  return <StyledHeading as={`h${lvl}`}>{children}</StyledHeading>;
};
