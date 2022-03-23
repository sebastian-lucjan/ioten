import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';

const ServicesAxis = () => {
  const {
    color: { white, lightGray },
  } = theme;

  return (
    <section className="">
      <MainSectionWrapper as="article" smaller colors={{ background: white, lines: lightGray }}>
        <div>
          <h2>Zbuduj usługę uszytą na swoją miarę</h2>
          <p>
            Współpraca z nami przebiega w kilku etapach, to od Ciebie zależy w którym momencie Twojego pomysłu się
            spotkamy. Z <span>ioten</span> możesz przedyskutować swoją strategię działania, obudować merytorycznie swój
            koncept a następnie uczestniczyć w procesie tworzenia strony od designu aż po wdrożenie.
          </p>
        </div>
        <div>
          <h3>Oś czasu Twojego projektu</h3>
          <p>
            Zakres projektu jest dostosowywany do wymagań klienta ale przykładową kolejność działań możesz zobaczyć pod
            spodem.
          </p>
        </div>
      </MainSectionWrapper>
      <MainSectionWrapper as="article" smaller colors={{ background: white, lines: lightGray }}>
        <div>Services axis - placeholder</div>
      </MainSectionWrapper>
      <MainSectionWrapper as="article" smaller colors={{ background: white, lines: lightGray }}>
        <div>
          <h3>Oś czasu Twojego projektu</h3>
          <p>
            Zakres projektu jest dostosowywany do wymagań klienta ale przykładową kolejność działań możesz zobaczyć pod
            spodem.
          </p>
        </div>
      </MainSectionWrapper>
    </section>
  );
};

export default ServicesAxis;
