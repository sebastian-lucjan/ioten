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
        { text: 'Strona wizytówka (one page) / Landingpage', type: 'checkbox', name: 'landingpage', inputConditions: { required: false } },
        { text: 'Strona firmowa o kilku zakładkach', type: 'checkbox', name: 'wwwWithTabs', inputConditions: { required: false } },
        {
          text: 'Strona o rozbudowanej strukturze i funkcjonalnościach',
          type: 'checkbox',
          name: 'wwwWithFunctions',
          inputConditions: { required: false },
        },
        { text: 'Strona produktowa - zaawansowana strona wizualna', type: 'checkbox', name: 'wwwProduct', inputConditions: { required: false } },
        { text: 'Inna usługa', type: 'checkbox', name: 'otherPage', inputConditions: { required: false } },
      ],
      required: true,
    },

    {
      heading: 'Jaki zakres prac zakładasz?',
      description: 'Wybierz co najmniej jedną opcję',
      options: [
        { text: 'Strategia, analiza projektu i konkurencji', type: 'checkbox', name: 'strategy', inputConditions: { required: false } },
        { text: 'Przygotowanie treści na stronę (teksty, zdjęcia)', type: 'checkbox', name: 'content', inputConditions: { required: false } },
        { text: 'Design, wizualny projekt strony', type: 'checkbox', name: 'design', inputConditions: { required: false } },
        { text: 'Strona www (kod i umieszczenie w sieci)', type: 'checkbox', name: 'www', inputConditions: { required: false } },
        {
          text: 'Implementacja CMS (system zarządzania treścią - wprowadzanie zmian na stronie)',
          type: 'checkbox',
          name: 'cms',
          inputConditions: { required: false },
        },
        { text: 'Wsparcie po zakończeniu współpracy', type: 'checkbox', name: 'support', inputConditions: { required: false } },
        { text: 'Inne', type: 'checkbox', name: 'others', inputConditions: { required: false } },
      ],
      required: true,
    },
    {
      heading: 'Jakie usługi i produkty oferuje Twoja firma?',
      description: 'Napisz krótko o Twojej firmie',
      options: [
        {
          text: '',
          type: 'textarea',
          name: 'companyDescription',
        },
      ],
      required: true,
      inputConditions: {
        required: 'Krótki opis świadczonych przez Ciebie usług jest wymagany do zakończenia formularza.',
        minLength: { value: 3, message: 'Zbyt mała liczba znaków, dodaj dłuższy opis.' },
        maxLength: { value: 300, message: 'Maksymalnie 300 znaków.' },
      },
    },

    {
      heading: 'Podaj adres aktualnej strony internetowej?',
      description:
        'Jeśli posiadasz aktualną stronę internetową, podaj adres. Możesz podać też adres do social mediów (np. facebook, instagram, twitter, linkedin)',
      options: [{ text: '', type: 'text', name: 'companyWebsite' }],
      required: false,
      inputConditions: {
        required: false,
        maxLength: { value: 200, message: 'Maksymalna długość maila to 200 znaków.' },
      },
    },

    {
      heading: 'Czy posiadasz zakładany budżet, jeśli tak to jaki?',
      options: [{ text: '', type: 'textarea', name: 'budget' }],
      required: false,
      inputConditions: {
        required: false,
        maxLength: { value: 200, message: 'Maksymalna długość pola "budżet" to 60 znaków.' },
      },
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
