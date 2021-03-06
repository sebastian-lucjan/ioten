import theme from 'src/assets/styles/theme';
import { TextCaption } from 'src/components/TextComponents';
import { StyledHeading, StyledParagraph } from 'src/components/Interlude/Interlude.styles';
import { StyledStagesIntro } from './StagesIntro.styles';

export default function StagesIntro({ heading, paragraph, stagesCaption }) {
  const { color: black } = theme;

  return (
    <StyledStagesIntro>
      <TextCaption>{stagesCaption}</TextCaption>
      <StyledHeading color={black} as="h2" size="md">
        {heading}
      </StyledHeading>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </StyledStagesIntro>
  );
}
