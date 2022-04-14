import servicesData from 'src/data/servicesData';
import { TextCaption } from 'src/components/TextComponents';
import { StyledHeading, StyledParagraph } from 'src/components/Interlude/Interlude.styles';
import theme from 'src/assets/styles/theme';
import { Wrapper } from './FormIntro.styles';

export default function FormIntro() {
  const { caption, heading, paragraphs } = servicesData.servicesForm;

  const {
    color: { darkerGray },
  } = theme;

  return (
    <Wrapper>
      <TextCaption color={darkerGray}>{caption}</TextCaption>
      <StyledHeading as="h2" size="md">
        {heading}
      </StyledHeading>
      <StyledParagraph>{paragraphs[0]}</StyledParagraph>
      <StyledParagraph>{paragraphs[1]}</StyledParagraph>
    </Wrapper>
  );
}
