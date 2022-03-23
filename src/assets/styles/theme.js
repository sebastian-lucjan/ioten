export const rainbowColors = [
  'hsl(1, 100%, 50%)',
  'hsl(58, 77%, 51%)',
  'hsl(122, 100%, 50%)',
  'hsl(252, 100%, 50%)',
  'hsl(292, 80%, 33%)',
];

const theme = {
  color: {
    black: 'hsl(0, 0%, 15%)',
    darkestGray: 'hsl(0, 0%, 24%)',
    darkerGray: 'hsl(0, 0%, 36%)',
    darkGray: 'hsl(0, 0%, 53%)',
    gray: 'hsl(0, 0%, 67%)',
    lightGray: 'hsl(0, 0%, 80%)',
    lightestGray: 'hsl(0, 0%, 95%)',
    white: 'hsl(0, 0%, 100%)',
    beige: 'hsl(27, 33%, 62%)',
    yellow: 'hsl(65, 88%, 48%)',
    transparent: 'hsl(0, 0%, 0%, 0%)',
  },
  gradient: {
    yellowSlider: 'linear-gradient(150deg, rgba(221,253,90,1) 0%, rgba(226,251,116,1) 100%)',
    yellowHaveIdea: 'linear-gradient(125deg, rgba(221,253,90,1) 0%, rgba(226,251,116,1) 100%)',
    lightGray: 'linear-gradient(40deg, rgba(235,235,235,1) 0%, rgba(250,250,250,1) 100%)',
    lightGrayAxisSection: 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 97%) 100%)',
    navyBlue: 'linear-gradient(80deg, rgba(76,65,107,1) 0%, rgba(72,59,76,1) 100%)',
    yellowToGray: 'linear-gradient(0deg, hsl(0, 0%, 80%) 0%, hsl(0, 0%, 80%) 75%, hsl(65, 88%, 48%) 100%)',
    lightGrayTransparantLightGray:
      'linear-gradient(180deg, hsl(0, 0%, 80%, 0) 0%, hsl(0, 0%, 96%) 30%, hsl(0, 0%, 96%) 70% ,hsl(0, 0%, 0%, 0) 100%)',
    rainbow: {
      highlight:
        'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(254,255,0,1) 25%, rgba(1,255,0,1) 50%, rgba(0,39,255,1) 75%, rgba(226,0,255,1) 100%)',
      servicesAxis: `linear-gradient(180deg, hsl(0, 0%, 80%) 0%, ${rainbowColors[0]} 16.66%, ${rainbowColors[1]} 33.33%, ${rainbowColors[2]} 50%, ${rainbowColors[3]} 66.66%, ${rainbowColors[4]} 83.33%, hsl(0, 0%, 80%) 100%)`,
    },
  },
  font: {
    size: {
      headingSection: '3.6rem',
      headingMedium: '2.4rem',
      paragraphBig: '2.2rem',
      headingSmall: '2rem',
      paragraph: '1.8rem',
      paragraphSmall: '1.6rem',
      smallText: '1.4rem',
      caption: '1.2rem',
      xsText: '1rem',
    },
    family: {
      myriadPro: {
        light: 'Myriad Pro Light',
        regular: 'Myriad Pro Regular',
        bold: 'Myriad Pro Bold',
        black: 'Myriad Pro Black',
      },
    },
  },
  mq: {
    mobile: '@media(min-width: 460px)',
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 1024px)',
    bigDesktop: '@media(min-width: 1280px)',
    hugeDesktop: '@media(min-width: 1440px)',
  },
  zIndex: {
    peak: 3,
    top: 2,
    front: 1,
    normal: 0,
    back: -1,
  },
};

export default theme;
