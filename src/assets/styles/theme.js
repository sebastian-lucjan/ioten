const theme = {
  color: {
    black: 'hsl(0, 0%, 15%)',
    white: 'hsl(0, 0%, 100%)',
    darkestGray: 'hsl(0, 0%, 36%)',
    darkGray: 'hsl(0, 0%, 53%)',
    gray: 'hsl(0, 0%, 67%)',
    lightGray: 'hsl(0, 0%, 80%)',
    beige: 'hsl(27, 33%, 62%)',
  },
  gradient: {
    yellow: {
      slider: 'linear-gradient(150deg, rgba(221,253,90,1) 0%, rgba(226,251,116,1) 100%)',
      haveIdea: 'linear-gradient(125deg, rgba(221,253,90,1) 0%, rgba(226,251,116,1) 100%)',
    },
    lightGray: 'linear-gradient(40deg, rgba(238,238,238,1) 0%, rgba(250,250,250,1) 100%)',
    navyBlue: 'linear-gradient(80deg, rgba(76,65,107,1) 0%, rgba(72,59,76,1) 100%)',
  },
  font: {
    size: {
      heading: '5rem',
      headingMobile: '5.3rem',
      headingSmall: '4.2rem',
      paragraph: '1.6rem',
      caption: '1.35rem',
    },
    family: 'Myriad Pro Regular',
  },
  mq: {
    mobile: '@media(min-width: 460px)',
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 1024px)',
    bigDesktop: '@media(min-width: 1280px)',
    hugeDesktop: '@media(min-width: 1440px)',
  },
};

export default theme;
