import services from 'src/data/servicesData';
import { TextParagraph } from 'src/components/TextComponents';
import Grid from 'src/components/Grid';
import { IntroHeading, OtherHeading, StyledWrapper } from 'src/components/ServicesAxis/ServicesAxis.styles';

const ServicesAxisIntro = () => {
  const { intro, axisStart } = services.axisStages;

  return (
    <StyledWrapper short>
      <article>
        <IntroHeading>{intro.heading}</IntroHeading>
        <TextParagraph className="services-axis__paragraph">
          Współpraca z nami przebiega w kilku etapach, to od Ciebie zależy w którym momencie Twojego pomysłu się spotkamy. Z
          <span className="services-axis__emphasis"> ioten</span> możesz przedyskutować swoją strategię działania, obudować merytorycznie swój koncept
          a następnie uczestniczyć w procesie tworzenia strony od designu aż po wdrożenie.
        </TextParagraph>
      </article>
      <article>
        <OtherHeading className="services-axis__sign-axis-start">{axisStart.heading}</OtherHeading>
        <TextParagraph className="services-axis__paragraph">{axisStart.paragraph}</TextParagraph>
      </article>
      <Grid />
    </StyledWrapper>
  );
};

export default ServicesAxisIntro;
