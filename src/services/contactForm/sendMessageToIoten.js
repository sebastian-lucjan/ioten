import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import EmailTemplate from 'src/components/EmailTemplate';

const plainVersionText = (name, companyName, phoneNumber, email, description) => {
  return `Autor wiadomości: ${name}
  Email podany w formularzu: ${email}
  Nazwa firmy: ${companyName}
  Numer telefonu: ${phoneNumber}
  Treść wiadomości: ${description}`;
};

// const transporterDev = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// const transporterProd = {
//   host: 'ssl0.ovh.net',
//   port: 465,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASSWORD,
//   },
// };

// const transporterSelected = process.env.IS_PROD ? transporterProd : transporterDev;
// const transporterSelected = transporterDev;

const sendMessageToIoten = async (name, company, mobile, email, message, policy, nda) => {
  console.log('process.env -> ', process.env.NEXT_PUBLIC_EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'elian.ortiz28@ethereal.email',
      pass: 'y47xaWyYmrpY1eChha',
    },
  });

  await transporter.sendMail({
    from: 'Ioten <contact.form@ioten.io>',
    to: 'Ioten <hadley.friesen32@ethereal.email>',
    // from: 'Ioten <contact.form@ioten.io>',
    // to: 'Ioten <info@ioten.io>',
    replyTo: `${email}`,
    subject: `✔ ioten.io - wiadomość z formularza kontaktowego od "${name}"`,
    text: plainVersionText(name, email, message),
    html: renderToString(<EmailTemplate name={name} company={company} mobile={mobile} email={email} message={message} policy={policy} nda={nda} />),
  });
};

export default sendMessageToIoten;
