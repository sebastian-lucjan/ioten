const services = {
  intro: 'Usługi',
  list: [
    { heading: 'Strona wizytówka' },
    { heading: 'Strona firmowa z CMSem' },
    { heading: 'Sklep online', soon: true },
    { heading: 'Landing page' },
    { heading: 'Blog' },
  ],
  serviceStagesIntro: 'Etapy',
  servicesStagesFooter: { heading: 'Chcesz poczytać więcej o ioten?', cta: 'Przeczytaj nasz wpis' },
  stages: [
    {
      heading: 'Strategia & Idea',
      introParagraph:
        'Celem tego etapu jest wprowadzenie ioten w świat pomysłu / biznesu inwestora. Przeprowadzamy wnikliwą analizę wymagań i inspiracji a następnie wyciągamy wnioski, na których budujemy naszą współpracę',
      prosList: [
        'Wstępny wywiad / ankieta w celu wstępnego zaadresowania potrzeb klienta',
        'Wywiad i analiza jako etap podbudowy merytorycznej',
        'Analiza konkurencji i inspiracji',
        'Raport / przedstawienie wniosków',
      ],
      endParagraph: 'Efektem finalnym tego etapu jest raport / przedstawienie wniosków i opracowanie szczegółowego modelu dalszej współpracy.',
    },
    {
      heading: 'Koncept & Wireframing',
      introParagraph:
        'W oparciu o analizy, wymagania i pomysły wyklarowane w strategii, tworzone są makiety strony oraz persony mające być odpowiednio szkieletem przyszłej strony i drogowskazem dla projektowania doświadczeń użytkownika.',
      prosList: [
        'Stworzenie Persony czyli hipotetycznego użytkownika produktu,',
        'Roadmapa projektu czyli określenie celów i kamieni milowych współpracy,',
        'Wireflow i wireframing strony',
      ],
      endParagraph:
        'Efektem finalnym jest wireframe aplikacji oraz persona użytkownika. Na tym etapie budowany jest fundament pod przyszły design strony.',
    },
    {
      heading: 'Design',
      introParagraph:
        'Kolejnym etapem po przygotowaniu makiet jest UI Design, czyli opracowanie tego, jak wizualnie będzie wyglądał interfejs użytkownika lub oprogramowanie serwisu. W trakcie projektowania dobierany jest styl wizualny. Obejmuje takie aspekty jak typografia, ikony i kolory, ale także wykorzystanie przestrzeni między poszczególnymi elementami. Mockups Design charakteryzuje się również tym, że przygotowane ekrany wyglądają tak samo, jak będzie wyglądał finalny produkt.',
      prosList: ['Dobranie kolorystyki, typografii, ikon', 'Przygotowanie wizualnej makiety strony.', 'Akceptacja finalnego wyglądu.'],
      endParagraph:
        'Efektem tego etapu jest materializacja większości założeń wypracowanych w poprzednich etapach. Optymalnie przeprowadzony etap designu pozwala płynnie, bez blokad decyzyjnych przeprowadzić etap wdrażania produktu',
    },
    {
      heading: 'Development',
      introParagraph:
        'Budujemy niesamowicie szybką stronę www dla Twojego biznesu w oparciu o wypracowany we wcześniejszym projekcie design. Używamy nowoczesnych technologii jak biblioteka React, czy framework Next.js.',
      prosList: [
        'Dobór optymalnej technologi dla Twojej strony.',
        'Przełożenie finalnego designu na kod.',
        'Połączenie strony z sytemem zarządzania treścią CMS',
        'Weryfikacja założeń, ostatnie szlify.',
      ],
      endParagraph: 'Przed finalnym umieszczeniem na serwerze klient może zobaczyć swoją stronę w środowisku tesotowym na testowym hostingu.',
    },
    {
      heading: 'Optymalizacja & Wsparcie',
      introParagraph: 'Umieszczenie strony na serwerze. Możliwe rozszerzenie współpracy o wsparcie w trakcie użytkowania strony.',
      prosList: [
        'Umieszczenie strony na serwerze,',
        'Przekazanie niezbędnej wiedzy w celu obsługi strony.',
        'Ewentualne wsparcie w trakcie funkcjonowania strony.',
      ],
      endParagraph:
        'Zakończenie współpracy albo wręcz przeciwnie... Jesteśmy otwarci na dalszą kooperację w celu doskonalenia strony bądź jej rozbudowywania.',
    },
  ],
};

export default services;
