import contactData from 'src/data/contactData';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import Grid from 'src/components/Grid';
import { StyledContentWrapper, StyledHeading, StyledHeadingWrapper, StyledParagraph, Wrapper } from 'src/components/Interlude/Interlude.styles';
import Button from '../Button';

export default function BriefShortInterlude() {
  const { heading, paragraph, button } = contactData.briefShortInterlude;

  const {
    color: { white, darkestGray, black },
    gradient: { blackBrief },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: blackBrief }}>
      <Wrapper>
        <StyledHeadingWrapper>
          <StyledHeading color={white} as="h2" size="lg">
            {heading}
          </StyledHeading>
        </StyledHeadingWrapper>

        <StyledContentWrapper>
          <StyledParagraph color={white}>{paragraph}</StyledParagraph>
          <Link href="/valuation" as="/wycena-projekt">
            <a>
              <Button title={button} textColor={darkestGray} backgroundColor={white} text={button} />
            </a>
          </Link>
        </StyledContentWrapper>
      </Wrapper>
      <Grid colors={{ lines: black }} />
    </MainSectionWrapper>
  );
}
