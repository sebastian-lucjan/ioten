import theme from 'src/assets/styles/theme';
import servicesData from 'src/data/servicesData';
import { StyledContentWrapper, StyledHeading, StyledHeadingWrapper, StyledParagraph, Wrapper } from 'src/components/Interlude/Interlude.styles';
import Button from 'src/components/Button';
import Grid from 'src/components/Grid';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';
import { TextCaption } from '../TextComponents';

export default function ServicesBenefit() {
  const {
    benefit: { caption, heading, paragraph, buttonLabel },
  } = servicesData;

  const {
    color: { darkNavy, darkerNavy, lightGray, white },
  } = theme;

  return (
    <MainSectionWrapper background={darkNavy}>
      <Wrapper>
        <StyledHeadingWrapper>
          <TextCaption color={lightGray}>{caption}</TextCaption>
          <StyledHeading color={white} as="h2" size="lg">
            {heading}
          </StyledHeading>
        </StyledHeadingWrapper>
        <StyledContentWrapper>
          <StyledParagraph color={white}>{paragraph}</StyledParagraph>
          <Button text={buttonLabel} textColor={darkNavy} backgroundColor={white} type="button" />
        </StyledContentWrapper>
      </Wrapper>
      <Grid colors={{ lines: darkerNavy }} />
    </MainSectionWrapper>
  );
}
