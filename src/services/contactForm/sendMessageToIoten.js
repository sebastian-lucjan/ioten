import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import EmailTemplate from 'src/components/EmailTemplate';

const plainVersionText = (name, companyName, phoneNumber, email, description, from = 'contact-page') => {
  return `Autor wiadomości: ${name}
  Email podany w formularzu: ${email}
  Nazwa firmy: ${companyName}
  Numer telefonu: ${phoneNumber}
  Treść wiadomości: ${description}
  Wiadomość przesłana z: ${from}`;
};

// const transporterDev = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.NEXT_PUBLIC_EMAIL_USER_DEV,
//     pass: process.env.NEXT_PUBLIC_EMAIL_PASS_DEV,
//   },
// });

const transporterProd = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER_PROD,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS_PROD,
  },
});

const sendMessageToIoten = async (name, company, mobile, email, message, policy, nda, from = 'contact-page') => {
  console.log('sendMessage -> ', name);
  // const transporterSelected = process.env.IS_PROD ? transporterProd : transporterDev;
  const transporterSelected = process.env.IS_PROD ? transporterProd : transporterProd;

  await transporterSelected.sendMail({
    from: 'Ioten - form <form@ioten.io>',
    to: 'Ioten <info@ioten.io>',
    replyTo: `${email}`,
    subject: `✔ ioten.io - wiadomość z formularza kontaktowego od "${name}"`,
    text: plainVersionText(name, email, message),
    html: renderToString(
      <EmailTemplate name={name} company={company} mobile={mobile} email={email} message={message} policy={policy} nda={nda} from={from} />,
    ),
  });
};

export default sendMessageToIoten;
