import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { v4 as uuid } from 'uuid';
import theme, { rainbowColors } from 'src/assets/styles/theme';
import services from 'src/data/servicesData';
import useServicePopup from 'src/hooks/useServicePopup';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { StyledWrapper, StyledServicesAxis, ServiceStage } from './ServicesAxis.styles';
import ServiceDetail from './ServiceDetail';

const ServicesAxis = () => {
  const { isOpen, setIsOpen, serviceIndex, handleOpenServiceStage } = useServicePopup();

  const {
    color: { lightGray, transparent },
    gradient: {
      lightGrayAxisSection,
      rainbow: { servicesAxis },
    },
  } = theme;

  return (
    <section className="services-axis">
      <MainSectionWrapper as="article" smaller colors={{ background: lightGrayAxisSection, lines: lightGray }}>
        <StyledWrapper>
          <article>
            <TextHeading as="h2" size="md">
              Zbuduj usługę uszytą na swoją miarę
            </TextHeading>
            <TextParagraph className="services-axis__paragraph">
              Współpraca z nami przebiega w kilku etapach, to od Ciebie zależy w którym momencie Twojego pomysłu się
              spotkamy. Z <span className="services-axis__emphasis">ioten</span> możesz przedyskutować swoją strategię
              działania, obudować merytorycznie swój koncept a następnie uczestniczyć w procesie tworzenia strony od
              designu aż po wdrożenie.
            </TextParagraph>
          </article>
          <article>
            <TextHeading as="h3" size="sm">
              Oś czasu Twojego projektu
              <span className="services-axis__sign-axis-start" />
            </TextHeading>
            <TextParagraph className="services-axis__paragraph">
              Zakres projektu jest dostosowywany do wymagań klienta ale przykładową kolejność działań możesz zobaczyć
              pod spodem.
            </TextParagraph>
          </article>
        </StyledWrapper>

        <StyledServicesAxis as="article" colors={{ background: transparent, lines: servicesAxis }}>
          <StyledWrapper>
            {services.stages.map(({ heading }, index) => (
              <ServiceStage key={uuid()} color={rainbowColors[index]} onClick={() => handleOpenServiceStage(index)}>
                {heading}
              </ServiceStage>
            ))}
          </StyledWrapper>
          {isOpen ? <ServiceDetail index={serviceIndex} handleClose={() => setIsOpen(false)} /> : null}
        </StyledServicesAxis>

        <StyledWrapper short>
          <TextHeading as="h3" size="sm">
            Zakończenie współpracy
          </TextHeading>
          <TextParagraph className="services-axis__paragraph">
            Kiedy kończy się współpraca? To zależy od Ciebie. Bez problemy możemy zostać z Tobą i uczestniczyć w dalszym
            rozwoju Twojej firmy.
            <span className="services-axis__sign-question-mark" />
          </TextParagraph>
        </StyledWrapper>
      </MainSectionWrapper>
    </section>
  );
};

export default ServicesAxis;
