import { v4 as uuid } from 'uuid';
import {
  ServiceStage,
  ServiceStageAsideLink,
  ServiceStageHeading,
  ServiceStageParagraph,
  ServiceStageWrapper,
  StageContainer,
  StyledArrow,
  StyledServicesAxis,
  StyledWrapper,
} from 'src/components/ServicesAxis/ServicesAxis.styles';
import services from 'src/data/servicesData';
import theme, { rainbowColors } from 'src/assets/styles/theme';
import Grid from 'src/components/Grid';
import Link from 'next/link';
import StageGraphics from 'src/components/StageGraphics';

const ServicesAxisCore = () => {
  const {
    color: { lightGray, transparent },
    gradient: {
      rainbow: { servicesAxis },
    },
  } = theme;

  const colorsObj = { lines: servicesAxis, innerLines: lightGray };

  return (
    <StyledServicesAxis as="article" colors={{ background: transparent, lines: servicesAxis }}>
      <StyledWrapper>
        {services.stages.map(({ heading, shortIntroParagraph, serviceID }, index) => (
          <StageContainer key={uuid()}>
            <ServiceStageWrapper>
              <ServiceStage id={serviceID} color={rainbowColors[index]}>
                <ServiceStageHeading>{heading}</ServiceStageHeading>
              </ServiceStage>
              <ServiceStageParagraph>{shortIntroParagraph}</ServiceStageParagraph>
              <Link href={`/uslugi#${serviceID}`}>
                <ServiceStageAsideLink as="div">
                  więcej informacji
                  <StyledArrow />
                </ServiceStageAsideLink>
              </Link>
            </ServiceStageWrapper>

            <StageGraphics index={index} />
          </StageContainer>
        ))}
      </StyledWrapper>

      <Grid colors={colorsObj} />
    </StyledServicesAxis>
  );
};

export default ServicesAxisCore;
