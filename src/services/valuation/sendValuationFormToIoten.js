import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import EmailValuationTemplate from 'src/components/EmailValuationTemplate';

const plainVersionText = (payload) => {
  const {
    landingpage = false,
    wwwWithTabs = false,
    wwwWithFunctions = false,
    wwwProduct = false,
    otherPage = false,
    strategy = false,
    content = false,
    design = false,
    www = false,
    cms = false,
    support = false,
    others = false,
    companyDescription = 'nie podano',
    companyWebsite = 'nie podano',
    budget = 'nie podano',
    moreInfo = 'nie podano',
    name = 'nie podano',
    email = 'nie podano',
  } = payload;

  return `Formularz "Wyceń projekt"
    
  1. Rodzaj usługi:
  - Landingpage: ${landingpage}
  - Strona w kilkoma zakładkami: ${wwwWithTabs}
  - Złożona strona: ${wwwWithFunctions}
  - Strona produktowa: ${wwwProduct}
  - Innego rodzaju strona(dopytaj jaka): ${otherPage}

  2. Rodzaj usługi:
  - Strategia: ${strategy},
  - Przygotowanie treści na stronę (zdjęcia, teksty): ${content},
  - Design, wizualny projekt strony: ${design},
  - Strona www (kod i umieszczenie w sieci) ${www},
  - Implementacja CMS (system zarządzania treścią - wprowadzanie zmian na stronie) ${cms},
  - Wsparcie po zakończeniu współpracy: ${support},
  - Inne: ${others},
  
  3. Opis firmy: 
  - Jakie usługi i produkty oferuje Twoja firma?  ${companyDescription}

  4. Strona internetowa: 
  - Aktualna strona internetowa lub social-media: ${companyWebsite}

  5. Czy posiadasz zakładany budżet, jeśli tak to jaki?
  - Budżet: ${budget}

  6. Coś więcej o swoim projekcie?
  - Dodatkowe informacje: ${moreInfo}
  
  7. Autor wiadomości: ${name}
  
  8. Email podany w formularzu: ${email}
  
  IOTEN!
  `;
};

const sendValuationFormToIoten = async (payload) => {
  console.log('sendMessage -> ', payload);

  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER_PROD,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS_PROD,
    },
  });

  await transporter.sendMail({
    from: 'Ioten - form <form@ioten.io>',
    to: 'Ioten <info@ioten.io>',
    // from: 'Ioten <contact.form@ioten.io>',
    // to: 'Ioten <info@ioten.io>',
    replyTo: `${payload.email}`,
    subject: `✔ ioten.io - wiadomość z formularza "wyceń projekt" od "${payload.name}"`,
    text: plainVersionText(payload),
    html: renderToString(<EmailValuationTemplate payload={payload} />),
  });
};

export default sendValuationFormToIoten;

// todo: change template
