import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { StyledContentWrapper, StyledHeading, StyledHeadingWrapper, StyledParagraph, Wrapper } from 'src/components/Interlude/Interlude.styles';
import Grid from 'src/components/Grid';
import Button from 'src/components/Button';

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  const {
    color: { yellow, black },
    gradient: { yellowHaveIdea },
  } = theme;

  return (
    <MainSectionWrapper background={yellowHaveIdea}>
      <Wrapper>
        <StyledHeadingWrapper>
          <StyledHeading color={black} as="h2" size="lg">
            {heading}
          </StyledHeading>
        </StyledHeadingWrapper>

        <StyledContentWrapper>
          <StyledParagraph>{paragraph}</StyledParagraph>
          <Link href="/contact" as="/kontakt">
            <a>
              <Button backgroundColor={black} type="button" text={button} />
            </a>
          </Link>
        </StyledContentWrapper>
      </Wrapper>
      <Grid colors={{ lines: yellow }} />
    </MainSectionWrapper>
  );
};

export default IdeaInterlude;
