export const navigationData = [
  { name: 'Home', href: '/', as: '/' },
  { name: 'Usługi', href: '/services', as: '/uslugi' },
  { name: 'O nas', href: '/about', as: '/o-nas' },
  { name: 'Blog', href: '/blog', as: '/blog' },
  { name: 'Kontakt', href: '/contact', as: '/kontakt' },
];

export const services = {
  intro: 'Usługi',
  list: [
    { heading: 'Strona wizytówka' },
    { heading: 'Strona firmowa z CMSem' },
    { heading: 'Sklep online', soon: true },
    { heading: 'Landingpage' },
    { heading: 'Blog' },
  ],
  serviceStagesIntro: 'Etapy',
  serviceStages: [
    { heading: 'Idea & Strategia' },
    { heading: 'Koncept & Wireframing' },
    {
      heading: 'Design',
    },
    {
      heading: 'Development',
    },
    {
      heading: 'Optymalizacje & Wsparcie',
    },
  ],
};

export const footerData = {
  ioten: 'ioten.io',
  intro: {
    heading: 'Napisz do nas...',
    text: [
      'Chcesz otworzyć swój biznes online?',
      'Może chcesz się nas o coś zapytać?',
      'A może po prostu podoba Ci się nasza strona, śmiało!',
      ' Napisz do nas na pewno Ci odpowiemy.',
    ],
  },
  contact: {
    cooperation: { heading: 'Współpraca / oferta', mail: 'info@ioten.io', mobile: '863 456 331' }, // mobile placeholder
    other: { heading: 'Inne', mail: 'hello@ioten.io', mobile: '602 446 335' },
    job: { heading: 'Praca', mail: 'career@ioten.io' },
  },
  socialMedia: { heading: 'Social media' },
  signature: {},
};
