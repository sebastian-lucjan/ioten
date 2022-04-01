import Grid from 'src/components/Grid';
import { TextParagraph } from 'src/components/TextComponents';
import { OtherHeading, StyledWrapper } from 'src/components/ServicesAxis/ServicesAxis.styles';
import services from 'src/data/servicesData';

const ServicesAxisEnd = () => {
  const { axisEnd } = services.axisStages;

  return (
    <StyledWrapper short>
      <span className="services-axis__sign-question-mark">?</span>
      <article>
        <OtherHeading>{axisEnd.heading}</OtherHeading>
        <TextParagraph className="services-axis__paragraph">{axisEnd.paragraph}</TextParagraph>
      </article>
      <Grid />
    </StyledWrapper>
  );
};

export default ServicesAxisEnd;
