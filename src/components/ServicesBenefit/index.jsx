import theme from 'src/assets/styles/theme';
import servicesData from 'src/data/servicesData';
import { StyledContentWrapper, StyledHeading, StyledHeadingWrapper, StyledParagraph, Wrapper } from 'src/components/Interlude/Interlude.styles';
import Grid from 'src/components/Grid';
import { TextCaption } from 'src/components/TextComponents';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { BenefitButton } from './ServicesBenefit.styles';

export default function ServicesBenefit() {
  const {
    benefit: { caption, heading, paragraph, buttonLabel },
  } = servicesData;

  const {
    color: { darkNavy, darkerNavy, lightGray, white, black },
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
          <Link Link href="/contact" as="/kontakt">
            <a>
              <BenefitButton textColor={black} backgroundColor={white} type="button">
                {buttonLabel}
              </BenefitButton>
            </a>
          </Link>
        </StyledContentWrapper>
      </Wrapper>
      <Grid colors={{ lines: darkerNavy }} />
    </MainSectionWrapper>
  );
}
