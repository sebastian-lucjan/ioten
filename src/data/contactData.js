const contactData = {
  headSection: {
    title: 'ioten - kontakt',
    description:
      'Ioten to nie tylko szybkie, funkcjonalne strony internetowe dla firm oraz osób prywatnych, ale też sprawny kontakt i szybkie decyzje. Wyślij do nas zapytanie a my przygotujemy Ci ofertę.',
  },
  briefShortInterlude: {
    heading: 'Chcesz mieć czarno na białym... Ile będzie kosztować Twoja strona?',
    paragraph: 'Uzupełnij krótki brief w którym nakreślisz nam podstawowe założenia Twojego projektu. Ofertę prześlemy w ciągu 24h roboczych.',
    button: 'Wyceń projekt',
  },
  contactContent: {
    intro: {
      heading: 'Zbudujmy coś razem!',
      text: [
        'Napisz do nas. Zawsze jesteśmy otwarci na świetne projekty, kreatywne rozwiązania i niebanalne pomysły.',
        'Jeśli nie otrzymasz odpowiedzi od razu to bardzo możliwe, że pracujemy nad naszym kolejnym projektem. Wkrótce skontaktujemy się z Tobą.',
      ],
    },
    contact: {
      cooperation: { heading: 'Współpraca / oferta:', email: 'info@ioten.io', mobile: '863 456 331' }, // mobile placeholder
      other: { heading: 'Inne:', email: 'hello@ioten.io', mobile: '602 446 335' },
      job: { heading: 'Praca:', email: 'career@ioten.io' },
    },
    form: {
      button: 'Wyślij  wiadomość',
      conditions: {
        nameStringConditions: {
          required: 'To pole jest wymagane.',
          minLength: { value: 3, message: 'Minimalna długość imienia to 3 znaki.' },
          maxLength: { value: 80, message: 'Maksymalna długość imienia to 80 znaków.' },
        },
        emailStringConditions: { required: 'To pole jest wymagane.', pattern: { value: /^\S+@\S+$/i, message: 'Wpisz poprawny adres email.' } },
        companyStringConditions: {
          minLength: { value: 3, message: 'Minimalna długość nazwy firmy to 3 znaki.' },
          maxLength: { value: 80, message: 'Maksymalna długość nazwy firmy to 80 znaków.' },
        },
        phoneNumberStringConditions: {
          required: false,
          minLength: { value: 7, message: 'Minimalna długość numeru telefonu to 7 znaków.' },
          maxLength: { value: 18, message: 'Maksymalna długość numeru telefonu to 18 znaków.' },
        },
        textareaStringConditions: {
          required: 'To pole jest wymagane.',
          minLength: { value: 5, message: 'Wiadomość jest zbyt krótka, postaraj się bardziej!' },
          maxLength: { value: 1000, message: 'Wiadomość jest zbyt długa, przekroczyła 1000 znaków.' },
        },
        policyCheckboxConditions: { required: 'To pole jest wymagane.' },
        ndaCheckboxConditions: {},
      },
    },
  },
};

export default contactData;
