import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { v4 as uuid } from 'uuid';
import theme, { rainbowColors } from 'src/assets/styles/theme';
import services from 'src/data/servicesData';
import useServicePopup from 'src/hooks/useServicePopup';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import Grid from 'src/components/Grid';
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

  const colorsObj = () => {
    if (isOpen) {
      return { lines: lightGray, innerLines: lightGray };
    }

    return { lines: servicesAxis, innerLines: lightGray };
  };

  const { intro, axisStart, axisEnd } = services.axisStages;

  return (
    <section className="services-axis">
      <MainSectionWrapper as="article" colors={{ background: lightGrayAxisSection }}>
        <StyledWrapper short>
          <article>
            <TextHeading as="h2" size="md">
              {intro.heading}
            </TextHeading>
            <TextParagraph className="services-axis__paragraph">
              Współpraca z nami przebiega w kilku etapach, to od Ciebie zależy w którym momencie Twojego pomysłu się spotkamy. Z
              <span className="services-axis__emphasis"> ioten</span> możesz przedyskutować swoją strategię działania, obudować merytorycznie swój
              koncept a następnie uczestniczyć w procesie tworzenia strony od designu aż po wdrożenie.
            </TextParagraph>
          </article>
          <article>
            <TextHeading as="h3" size="sm" className="services-axis__sign-axis-start">
              {axisStart.heading}
            </TextHeading>
            <TextParagraph className="services-axis__paragraph">{axisStart.paragraph}</TextParagraph>
          </article>
          <Grid />
        </StyledWrapper>

        <StyledServicesAxis as="article" desaturate={isOpen} colors={{ background: transparent, lines: servicesAxis }}>
          <StyledWrapper>
            {services.stages.map(({ heading }, index) => (
              <ServiceStage desaturate={isOpen} key={uuid()} color={rainbowColors[index]} onClick={() => handleOpenServiceStage(index)}>
                {heading}
              </ServiceStage>
            ))}
          </StyledWrapper>
          {isOpen ? <ServiceDetail index={serviceIndex} handleClose={() => setIsOpen(false)} /> : null}
          <Grid colors={colorsObj()} />
        </StyledServicesAxis>

        <StyledWrapper short>
          <span className="services-axis__sign-question-mark">?</span>
          <article>
            <TextHeading as="h3" size="sm">
              {axisEnd.heading}
            </TextHeading>
            <TextParagraph className="services-axis__paragraph">{axisEnd.paragraph}</TextParagraph>
          </article>
          <Grid />
        </StyledWrapper>
      </MainSectionWrapper>
    </section>
  );
};

export default ServicesAxis;
