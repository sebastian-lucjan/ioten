const EmailTemplate = ({ name, company, mobile, email, message, policy, nda }) => {
  return (
    <section className="email">
      <div>
        <p>
          Autorem wiadomości jest: <u>{name}</u>
        </p>
        <br />
        <p>
          Podany przez nadawcę adres email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          Nazwa firmy: <u>{company}</u>
        </p>
        <br />
        <p>Numer telefonu:{mobile}</p>
        <br />
        <p>Treść wiadomości:</p>
        <p>{message}</p>

        <p>Policy: {policy ? 'TAK' : 'NIE'}</p>

        <p>NDA: {nda ? 'TAK' : 'NIE'}</p>
      </div>

      <br />
      <hr />
      <footer>
        <p>
          <i>Ta wiadomość została wysłana z formularza kontaktowego na stronie ioten.io</i>
        </p>
        <p>
          <i>Zachowaj ostrożność w stosunku do załączonych linków bądź treści.</i>
        </p>
      </footer>
    </section>
  );
};

export default EmailTemplate;
