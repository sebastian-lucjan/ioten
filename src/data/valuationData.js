const valuationData = {
  headSection: {
    title: 'ioten - wyceń projekt',
    description:
      'Ioten przeprowadzimy z Tobą szczegółowy wywiad na bazie którego powstanie szybka, funkcjonalna i estetyczna strona internetowa dla Twojej firmy.',
  },
  surveyStarter: { heading: 'Wyceń projekt', paragraph: 'Wyceń projekt i zacznijmy' },
  surveySteps: [
    {
      heading: 'Jakie usługi Cię interesują?',
      description: 'Wybierz co najmniej jedną opcję',
      options: [
        { text: 'Strona wizytówka (one page) / Landingpage', type: 'checkbox', name: 'landingpage' },
        { text: 'Strona firmowa o kilku zakładkach', type: 'checkbox', name: 'wwwWithTabs' },
        { text: 'Strona o rozbudowanej strukturze i funkcjonalnościach', type: 'checkbox', name: 'wwwWithFunctions' },
        { text: 'Strona produktowa - zaawansowana strona wizualna', type: 'checkbox', name: 'wwwProduct' },
        { text: 'Inna usługa', type: 'checkbox', name: 'otherPage' },
      ],
      required: true,
    },

    {
      heading: 'Jaki zakres prac zakładasz?',
      description: 'Wybierz co najmniej jedną opcję',
      options: [
        { text: 'Strategia, analiza projektu i konkurencji', type: 'checkbox', name: 'strategy' },
        { text: 'Przygotowanie treści na stronę (teksty, zdjęcia)', type: 'checkbox', name: 'content' },
        { text: 'Design, wizualny projekt strony', type: 'checkbox', name: 'design' },
        { text: 'Strona www (kod i umieszczenie w sieci)', type: 'checkbox', name: 'www' },
        { text: 'Implementacja CMS (system zarządzania treścią - wprowadzanie zmian na stronie)', type: 'checkbox', name: 'cms' },
        { text: 'Wsparcie po zakończeniu współpracy', type: 'checkbox', name: 'support' },
        { text: 'Inne', type: 'checkbox', name: 'others' },
      ],
      required: true,
    },
    {
      heading: 'Jakie usługi i produkty oferuje Twoja firma?',
      description: 'Napisz krótko o Twojej firmie',
      options: [{ text: '', type: 'textarea', name: 'companyDescription' }],
      required: true,
    },

    {
      heading: 'Podaj adres aktualnej strony internetowej?',
      description:
        'Jeśli posiadasz aktualną stronę internetową, podaj adres. Możesz podać też adres do social mediów (np. facebook, instagram, twitter, linkedin)',
      options: [{ text: '', type: 'text', name: 'companyWebsite' }],
      required: false,
    },

    {
      heading: 'Czy posiadasz zakładany budżet, jeśli tak to jaki?',
      options: [{ text: '', type: 'textarea', name: 'budget' }],
      required: false,
    },

    {
      heading: 'Powiedz więcej o swoim projekcie?',
      options: [{ text: '', type: 'textarea', name: 'moreInfo' }],
      required: false,
    },

    {
      heading: 'Imię',
      options: [{ text: '', type: 'text', name: 'name' }],
      required: true,
    },

    {
      heading: 'Email',
      options: [{ text: '', type: 'text', name: 'email' }],
      required: true,
    },
  ],
};

export default valuationData;
