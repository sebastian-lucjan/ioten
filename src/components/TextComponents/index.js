import styled from 'styled-components';

export const TextWrapper = styled.div`
  /* props */
  //short -> smaller Y padding from 100px to 60px
  //fullHeight -> 100vh or unset
  //noAlign -> disable align-items if causes problems (e.g. Testimonials)
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ noAlign }) => (noAlign ? null : 'align-items: flex-start')}; //align-item would break testimonials slider
  padding: ${({ short }) => (short ? '40px 40px 80px 40px' : '100px 40px')};
  color: ${({ theme }) => theme.color.darkestGray};
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'unset')};
  z-index: ${({ theme }) => theme.zIndex.top};
`;

export const TextParagraph = styled.p`
  /* props */
  //weight -> choose font, different weights
  position: relative;
  display: block;
  z-index: ${({ theme }) => theme.zIndex.top};
  ${({ color }) => (color ? `color: ${color}` : '')}; //passed color

  font-family: ${({ theme, weight }) => {
    switch (weight) {
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

  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'xs': // 1rem
        return theme.font.size.xsText;
      case 'sm': // 1.4rem
        return theme.font.size.smallText;
      case 'md': // 1.6rem
        return theme.font.size.paragraphSmall;
      case 'lg': // 1.8rem
        return theme.font.size.paragraph;
      case 'xl': // 2.4rem
        return theme.font.size.paragraphBig;
      default:
        return theme.font.size.paragraphSmall; // 1.4rem
    }
  }};

  line-height: ${({ theme, lh }) => {
    switch (lh) {
      case 'xs': // 1.8rem
        return theme.font.size.paragraph;
      case 'sm': // 2rem
        return theme.font.size.headingSmall;
      case 'md': // 2.4rem
        return theme.font.size.headingMedium;
      case 'lg': // 2.8rem
        return theme.font.size.headingSection;
      case 'xl': // 2.8rem
        return theme.font.size.headingSection;
      default:
        return '32px'; // 3.2rem
    }
  }};
`;

export const TextHeading = styled.p`
  /* props */
  //bolder -> choose fontWeight between bold and black
  //size -> heading 3 sizes to choose
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.top};

  font-family: ${({ theme, weight }) => {
    switch (weight) {
      case 'light':
        return theme.font.family.myriadPro.light;
      case 'regular':
        return theme.font.family.myriadPro.bold;
      case 'black':
        return theme.font.family.myriadPro.black;
      default:
        return theme.font.family.myriadPro.bold;
    }
  }};
  font-weight: normal;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'xs': // 1.4rem
        return theme.font.size.smallText;
      case 'sm': // 2rem
        return theme.font.size.headingSmall;
      case 'md': // 2.8rem
        return theme.font.size.headingMedium;
      case 'lg': // 3.6rem
        return theme.font.size.headingSection;
      default:
        return theme.font.size.headingSmall; // 2rem
    }
  }};
  ${({ color }) => (color ? `color: ${color}` : '')}//passed color
`;

export const TextCaption = styled.p`
  display: block;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};
  margin: 1rem 0 1rem 0;
  color: ${({ theme, color }) => color || theme.color.black};
  z-index: ${({ theme }) => theme.zIndex.top};
`;
