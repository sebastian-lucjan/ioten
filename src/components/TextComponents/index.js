import styled from 'styled-components';

export const TextWrapper = styled.div`
  /* props */
  //short -> smaller Y padding from 100px to 60px
  //fullHeight -> 100vh or unset
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ short }) => (short ? '40px 40px 80px 40px' : '100px 40px')};
  color: ${({ theme }) => theme.color.darkestGray};
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'unset')};
`;

export const TextParagraph = styled.p`
  /* props */
  //fontWeight -> choose font, different weights
  position: relative;
  display: block;
  font-family: ${({ theme, fontWeight }) => {
    switch (fontWeight) {
      case 'light':
        return theme.font.family.myriadPro.light;
      case 'bold':
        return theme.font.family.myriadPro.bold;
      case 'black':
        return theme.font.family.myriadPro.black;
      default:
        return theme.font.family.myriadPro.regular;
    }
  }};
  font-size: ${({ theme, small }) => (small ? theme.font.size.smallText : theme.font.size.paragraph)};
  line-height: ${({ small }) => (small ? '22px' : '32px')};
`;

export const TextHeading = styled.p`
  /* props */
  //bolder -> choose fontWeight between bold and black
  //size -> heading 3 sizes to choose
  position: relative;
  font-family: ${({ theme, bolder }) =>
    bolder ? theme.font.family.myriadPro.black : theme.font.family.myriadPro.bold};
  font-weight: normal;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'sm':
        return theme.font.size.headingSmall;
      case 'md':
        return theme.font.size.headingMedium;
      case 'lg':
        return theme.font.size.headingSection;
      default:
        return theme.font.size.headingSmall;
    }
  }};
`;
