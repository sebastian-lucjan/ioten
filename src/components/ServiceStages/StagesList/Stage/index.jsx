import theme from 'src/assets/styles/theme';
import { TextCaption } from 'src/components/TextComponents';
import { StyledHeading, StyledParagraph } from 'src/components/Interlude/Interlude.styles';
import ProsList from '../ProsList';
import { StyledStage } from './Stage.styles';

export default function Stage({ stageData }) {
  const { caption, heading, introParagraph, prosList, endParagraph } = stageData;

  const {
    color: { green },
  } = theme;

  return (
    <StyledStage>
      <TextCaption>{caption}</TextCaption>
      <StyledHeading color={green} as="h3">
        {heading}
      </StyledHeading>
      <StyledParagraph>{introParagraph}</StyledParagraph>
      <StyledParagraph>{endParagraph}</StyledParagraph>

      <ProsList prosList={prosList} />
    </StyledStage>
  );
}
