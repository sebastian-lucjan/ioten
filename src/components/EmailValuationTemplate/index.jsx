export default function EmailValuationTemplate({ payload }) {
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

  return (
    <section className="valuation-email">
      <h2>Formularz *Wyceń projekt*</h2>
      <div>
        <h3>1. Rodzaj usługi:</h3>
        <p>- Landingpage: {landingpage ? 'TAK' : 'NIE'}</p>
        <p>- Strona w kilkoma zakładkami: {wwwWithTabs ? 'TAK' : 'NIE'}</p>
        <p>- Złożona strona: {wwwWithFunctions ? 'TAK' : 'NIE'}</p>
        <p>- Strona produktowa: {wwwProduct ? 'TAK' : 'NIE'}</p>
        <p>- Innego rodzaju strona(dopytaj jaka): {otherPage ? 'TAK' : 'NIE'}</p>
      </div>
      <br />
      <div>
        <h3>2. Rodzaj usługi:</h3>
        <p>- Strategia: {strategy ? 'TAK' : 'NIE'},</p>
        <p>- Przygotowanie treści na stronę (zdjęcia, teksty): {content ? 'TAK' : 'NIE'},</p>
        <p>- Design, wizualny projekt strony: {design ? 'TAK' : 'NIE'},</p>
        <p>- Strona www (kod i umieszczenie w sieci): {www ? 'TAK' : 'NIE'},</p>
        <p>- Implementacja CMS (system zarządzania treścią - wprowadzanie zmian na stronie): {cms ? 'TAK' : 'NIE'},</p>
        <p>- Wsparcie po zakończeniu współpracy: {support ? 'TAK' : 'NIE'},</p>
        <p>- Inne: {others ? 'TAK' : 'NIE'},</p>
      </div>
      <br />
      <div>
        <h3>3. Opis firmy:</h3>
        <p>- Jakie usługi i produkty oferuje Twoja firma?</p>
        <p>{companyDescription}</p>
      </div>
      <br />
      <div>
        <h3>4. Strona internetowa:</h3>
        <p>- Aktualna strona internetowa lub social-media:</p>
        <p>{companyWebsite}</p>
      </div>
      <br />
      <div>
        <h3>5. Czy posiadasz zakładany budżet, jeśli tak to jaki?</h3>
        <p>- Budżet: {budget}</p>
      </div>
      <br />
      <div>
        <h3>6. Coś więcej o swoim projekcie?</h3>
        <p>- Dodatkowe informacje:</p>
        <p>{moreInfo}</p>
      </div>
      <br />
      <div>
        <h3>7. Autor wiadomości: {name}</h3>
      </div>
      <br />
      <div>
        <h3>8. Email podany w formularzu: {email}</h3>
      </div>
      <br />
      IOTEN!
      <br />
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
}
