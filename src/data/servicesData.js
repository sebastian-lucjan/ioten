const servicesData = {
  intro: 'Usługi',
  list: [
    { heading: 'Strona wizytówka' },
    { heading: 'Strona firmowa z CMSem' },
    { heading: 'Sklep online', soon: true },
    { heading: 'Landing page' },
    { heading: 'Blog' },
  ],
  title: 'Ioten - usługi',
  url: '/uslugi',
  description: 'Ioten to coś więcej niż strony internetowe. Strona internetowa jest dla nas sposobem na budowanie i wzmacnianie Twojej marki.',
  ogData: {
    title: 'Ioten.io - kreatywne i szybkie strony internetowe',
    description: 'Ioten to coś więcej niż strony internetowe. Strona internetowa jest dla nas sposobem na budowanie i wzmacnianie Twojej marki.',
    url: 'https://www.ioten.io/uslugi',
  },
  canonical: 'https://www.ioten.io/uslugi',

  servicesIntro: {
    caption: 'Intro',
    heading: 'Ioten to coś więcej niż strony internetowe',
    paragraphs: [
      'Strona internetowa nie jest dla nas tylko wizualną prezentacją danych tekstowych, jest też sposobem na budowanie i wzmacnianie Twojej marki.',
      'Nasze podejście bazuje na analizie i szukaniu miejsc w których możesz wyróżnić się na tle konkurencji. Szczególną uwagę przykładamy do projektowania interfejsów które ułatwiają interakcję i budują zaangażowanie.',
    ],
    prosList: [
      'Funkcjonalność na pierwszym miejscu',
      'Unikalny Design',
      'Zbudowana w oparciu o nowoczesne technologie',
      'Superszybka i SEO friendly',
    ],
    buttonLabel: 'Napisz do nas',
  },

  benefit: {
    caption: 'Benefity',
    heading: 'Nowoczesne technologie to nie tylko slogan',
    paragraph:
      'Dzięki użyciu nowoczesnych technologii jak next.js (SSG), react.js, GSAP, headless CMS i wielu innych, nasze strony są nieprawdopodobnie szybkie, przyjazne SEO i użytkownikowi.',
    buttonLabel: 'Porozmawiajmy',
  },

  services: {
    caption: 'Usługi',
    heading: 'Strona internetowa nie jedno ma imię...',
    paragraph: 'Działamy w szerokim spektrum definicji strony internetowej. Jeśli w liście poniżej znajdziesz produkt który Cię interesuje, napisz.',
    buttonLabel: 'Wyceń projekt',
    servicesList: [
      {
        heading: 'Strona wizytówka (one page) / Landingpage ',
        description: [
          'Strona docelowa bez rozbudowanej struktury. Jej celem może być zaprezentowanie swoich usług (wizytówka), przekazanie informacji,  reklama, bądź zachęcenie do dalszej interakcji z produktem (CTA - call to action).',
        ],
        icon: 'gg:website',
      },
      {
        heading: 'Strona o rozbudowanej strukturze',
        description: [
          'Strona o kilku podstronach dostępnych z reprezentatywnej strony głównej. Dzięki takiej stronie firma może przekazać większą ilość informacji np.: oferta, kontakt, o nas, historia, referecje przez co zwiększa swoją wiarygodność i rozpoznawalność w sieci.',
        ],
        icon: 'gridicons:site',
      },
      {
        heading: 'Strona firmowa z CMSem',
        description: [
          'Strona o różnym poziomie rozbudowania, połączona z systemem zarządzania treścią (content management system, czyli: CMS).',
          'Przeznaczona do stron których treści będą edytowane wraz z biegiem czasu. ',
        ],
        icon: 'ci:calendar-edit',
      },
      {
        heading: 'Strona PRO',
        description: [
          'Jest to strona która może mieć bardzo rozbudowaną strukturę. Dodatkowe zaawansowane funkcjonalności jak: ',
          '- kontakt za pomocą “chat widget”,',
          '- rozbudowane formularze kontaktowe bądź ankietowe,',
          '- rozwiązania analityczne do śledzenia ruchu na stronie,',
          '- zaawansowana filtracja (np.: biuro nieruchomości),',
          '- systemy logowania i tworzenia użytkownika (np.: szkoła języka angielskiego)',
          '- i.... wiele więcej',
        ],
        icon: 'eos-icons:subscriptions-created-outlined',
      },
      {
        heading: 'Animacja PRO',
        description: [
          'Idealna gdy chcesz opowiedzieć historię w której centrum jesteś Ty, Twoja idea i Twój produkt. Strona o zaawansowanej warstwie wizualnej i dużej złożoności interakcyjnej.',
          'Poziom animacji wykracza poza standardowe rozwiązania jak pojawianie się tekstu od boku strony.',
        ],
        icon: 'clarity:animation-line',
      },
    ],
  },

  serviceStagesIntro: 'Etapy',
  servicesStagesFooter: { heading: 'Chcesz poczytać więcej o ioten?', cta: 'Przeczytaj nasz wpis' },
  axisStages: {
    intro: {
      heading: 'Zbuduj usługę uszytą na swoją miarę',
      paragraph: `Współpraca z nami przebiega w kilku etapach, to od Ciebie zależy w którym momencie Twojego pomysłu się spotkamy. Z ioten możesz przedyskutować swoją strategię działania, obudować merytorycznie swój koncept a następnie uczestniczyć w procesie tworzenia strony od designu aż po wdrożenie.`,
    },
    axisStart: {
      heading: 'Oś czasu Twojego projektu',
      paragraph: 'Zakres projektu jest dostosowywany do wymagań klienta ale przykładową kolejność działań możesz zobaczyć pod spodem.',
    },
    axisEnd: {
      heading: 'Zakończenie współpracy',
      paragraph: 'Kiedy kończy się współpraca? To zależy od Ciebie. Bez problemy możemy zostać z Tobą i uczestniczyć w dalszym rozwoju Twojej firmy.',
    },
  },
  stages: [
    {
      caption: 'Etap I',
      heading: 'Strategia & Idea',
      introParagraph:
        'Celem tego etapu jest wprowadzenie ioten w świat pomysłu / biznesu inwestora. Przeprowadzamy wnikliwą analizę wymagań i inspiracji a następnie wyciągamy wnioski, na których budujemy naszą współpracę',
      prosList: [
        { text: 'Wstępny wywiad / ankieta w celu wstępnego zaadresowania potrzeb klienta', icon: 'clarity:talk-bubbles-line' },
        { text: 'Wywiad i analiza jako etap podbudowy merytorycznej', icon: 'ic:outline-phone-in-talk' },
        { text: 'Analiza konkurencji i inspiracji', icon: 'carbon:text-link-analysis' },
        { text: 'Raport / przedstawienie wniosków', icon: 'carbon:report' },
      ],
      serviceID: 'strategy-idea',
      endParagraph: 'Efektem finalnym tego etapu jest raport / przedstawienie wniosków i opracowanie szczegółowego modelu dalszej współpracy.',
    },
    {
      caption: 'Etap II',
      heading: 'Koncept & Wireframing',
      introParagraph:
        'W oparciu o analizy, wymagania i pomysły wyklarowane w strategii, tworzone są makiety strony oraz persony mające być odpowiednio szkieletem przyszłej strony i drogowskazem dla projektowania doświadczeń użytkownika.',
      prosList: [
        { text: 'Stworzenie Persony czyli hipotetycznego użytkownika produktu,', icon: 'akar-icons:person' },
        { text: 'Roadmapa projektu czyli określenie celów i kamieni milowych współpracy,', icon: 'akar-icons:map' },
        { text: 'Wireflow i wireframing strony', icon: 'charm:square-cross' },
      ],
      serviceID: 'concept-wireframing',
      endParagraph:
        'Efektem finalnym jest wireframe aplikacji oraz persona użytkownika. Na tym etapie budowany jest fundament pod przyszły design strony.',
    },
    {
      caption: 'Etap III',
      heading: 'Design',
      introParagraph:
        'Kolejnym etapem po przygotowaniu makiet jest UI Design, czyli opracowanie tego, jak wizualnie będzie wyglądał interfejs użytkownika lub oprogramowanie serwisu. W trakcie projektowania dobierany jest styl wizualny. Obejmuje takie aspekty jak typografia, ikony i kolory, ale także wykorzystanie przestrzeni między poszczególnymi elementami. Mockups Design charakteryzuje się również tym, że przygotowane ekrany wyglądają tak samo, jak będzie wyglądał finalny produkt.',
      prosList: [
        { text: 'Dobranie kolorystyki, typografii, ikon', icon: 'ant-design:bg-colors-outlined' },
        { text: 'Przygotowanie wizualnej makiety strony.', icon: 'iconoir:3d-select-solid' },
        { text: 'Akceptacja finalnego wyglądu.', icon: 'eos-icons:system-ok-outlined' },
      ],
      serviceID: 'design',
      endParagraph:
        'Efektem tego etapu jest materializacja większości założeń wypracowanych w poprzednich etapach. Optymalnie przeprowadzony etap designu pozwala płynnie, bez blokad decyzyjnych przeprowadzić etap wdrażania produktu',
    },
    {
      caption: 'Etap IV',
      heading: 'Development',
      introParagraph:
        'Budujemy niesamowicie szybką stronę www dla Twojego biznesu w oparciu o wypracowany we wcześniejszym projekcie design. Używamy nowoczesnych technologii jak biblioteka React, czy framework Next.js.',
      prosList: [
        { text: 'Dobór optymalnej technologi dla Twojej strony.', icon: 'carbon:task-approved' },
        { text: 'Przełożenie finalnego designu na kod.', icon: 'ant-design:code-outlined' },
        { text: 'Połączenie strony z systemem zarządzania treścią CMS', icon: 'fa6-regular:pen-to-square' },
        { text: 'Weryfikacja założeń, ostatnie szlify.', icon: 'bx:diamond' },
      ],
      serviceID: 'development',
      endParagraph: 'Przed finalnym umieszczeniem na serwerze klient może zobaczyć swoją stronę w środowisku tesotowym na testowym hostingu.',
    },
    {
      caption: 'Etap V',
      heading: 'Optymalizacja & Wsparcie',
      introParagraph: 'Umieszczenie strony na serwerze. Możliwe rozszerzenie współpracy o wsparcie w trakcie użytkowania strony.',
      prosList: [
        { text: 'Umieszczenie strony na serwerze,', icon: 'carbon:bare-metal-server' },
        { text: 'Przekazanie niezbędnej wiedzy w celu obsługi strony.', icon: 'bx:book-bookmark' },
        { text: 'Ewentualne wsparcie w trakcie funkcjonowania strony.', icon: 'mdi:help-network-outline' },
      ],
      serviceID: 'optimization-support',
      endParagraph:
        'Zakończenie współpracy albo wręcz przeciwnie... Jesteśmy otwarci na dalszą kooperację w celu doskonalenia strony bądź jej rozbudowywania.',
    },
  ],

  servicesForm: {
    caption: 'I co teraz?!',
    heading: '“Ok, teraz już coś wiem, ale...',
    paragraphs: [
      '...mam jeszcze więcej pytań”',
      'W takim razie zapraszamy do kontaktu. Zaproponowane usługi oraz etapowanie może być dostosowane do indywidualnych wymagań klienta dlatego jeśli masz wątliwości, czy Twój pomysł znajdzie aprobatę ioten... pisz!',
    ],
  },
};

export default servicesData;
