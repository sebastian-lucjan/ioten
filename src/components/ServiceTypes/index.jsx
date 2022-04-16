import Link from 'next/link';
import { StyledHeading, StyledParagraph } from 'src/components/Interlude/Interlude.styles';
import theme from 'src/assets/styles/theme';
import servicesData from 'src/data/servicesData';
import Grid from 'src/components/Grid';
import Button from 'src/components/Button';
import { TextCaption } from 'src/components/TextComponents';
import ServicesList from './ServicesList';
import { ImageContainer, ImagePlaceholder, StyledContentWrapper, StyledHeadingWrapper, Wrapper } from './ServiceTypes.styles';

export default function ServicesTypes() {
  const {
    color: { black, red },
    gradient: { navyToYellow },
  } = theme;

  const {
    services: { caption, heading, paragraph, buttonLabel },
  } = servicesData;

  return (
    <Wrapper>
      <ImageContainer>
        <ImagePlaceholder />
      </ImageContainer>
      <StyledContentWrapper>
        <StyledHeadingWrapper>
          <TextCaption>{caption}</TextCaption>
          <StyledHeading color={black} as="h2" size="lg">
            {heading}
          </StyledHeading>
          <StyledParagraph color={black}>{paragraph}</StyledParagraph>
        </StyledHeadingWrapper>

        <ServicesList />

        <Link href="/valuation" as="/wycena-projekt">
          <a>
            <Button backgroundColor={red} text={buttonLabel} />
          </a>
        </Link>
      </StyledContentWrapper>
      <Grid colors={{ lines: navyToYellow }} />
    </Wrapper>
  );
}
