const valuationData = {
  headSection: {
    title: 'ioten - wyceń projekt',
    description:
      'Ioten przeprowadzimy z Tobą szczegółowy wywiad na bazie którego powstanie szybka, funkcjonalna i estetyczna strona internetowa dla Twojej firmy.',
  },
  surveyStarter: { heading: 'Wyceń projekt', paragraph: 'Wyceń projekt i zacznijmy' },
  surveySteps: [
    {
      questions: [
        {
          heading: 'Jakie usługi Cię interesują?',
          options: [
            { text: 'Strona wizytówka (one page) / Landingpage', type: 'checkbox' },
            { text: 'Strona firmowa o kilku zakładkach', type: 'checkbox' },
            { text: 'Strona o rozbudowanej strukturze i funkcjonalnościach', type: 'checkbox' },
            { text: 'Strona produktowa - zaawansowana strona wizualna', type: 'checkbox' },
            { text: 'Inna usługa', type: 'textarea' },
          ],
          required: true,
        },
      ],
    },
    {
      questions: [
        {
          heading: 'Jaki zakres prac zakładasz?',
          options: [
            { text: 'Strategia, analiza projektu i konkurencji', type: 'checkbox' },
            { text: 'Przygotowanie treści na stronę (teksty, zdjęcia)', type: 'checkbox' },
            { text: 'Design, wizualny projekt strony', type: 'checkbox' },
            { text: 'Strona www (kod i umieszczenie w sieci)', type: 'checkbox' },
            { text: 'Implementacja CMS (system zarządzania treścią - wprowadzanie zmian na stronie)', type: 'checkbox' },
            { text: 'Wsparcie po zakończeniu współpracy', type: 'checkbox' },
            { text: 'Inne', type: 'textarea' },
          ],
          required: true,
        },
      ],
    },
    {
      questions: [
        {
          heading: 'Jakie usługi i produkty oferuje Twoja firma?',
          options: [{ text: '', type: 'textarea' }],
          required: true,
        },
        {
          heading: 'Podaj adres aktualnej strony internetowej?',
          options: [{ text: '', type: 'textarea' }],
          required: false,
        },
      ],
    },
    {
      questions: [
        {
          heading: 'Czy posiadasz zakładany budżet, jeśli tak to jaki?',
          options: [{ text: '', type: 'textarea' }],
          required: false,
        },
        {
          heading: 'Powiedz więcej o swoim projekcie?',
          options: [{ text: '', type: 'textarea' }],
          required: false,
        },
      ],
    },
    // {
    //   questions: [
    //     {
    //       heading: 'Imię',
    //       options: [{ text: '', type: 'text' }],
    //       required: false,
    //     },
    //     {
    //       heading: 'Email',
    //       options: [{ text: '', type: 'text' }],
    //       required: false,
    //     },
    //   ],
    // },
  ],
};

export default valuationData;
