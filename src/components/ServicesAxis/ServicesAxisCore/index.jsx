import { v4 as uuid } from 'uuid';
import {
  ServiceStage,
  ServiceStageHeading,
  ServiceStageParagraph,
  ServiceStageWrapper,
  StyledArrow,
  StyledServicesAxis,
  StyledWrapper,
} from 'src/components/ServicesAxis/ServicesAxis.styles';
import services from 'src/data/servicesData';
import theme, { rainbowColors } from 'src/assets/styles/theme';
import Grid from 'src/components/Grid';
import Link from 'next/link';

const ServicesAxisCore = () => {
  const {
    color: { lightGray, transparent },
    gradient: {
      rainbow: { servicesAxis },
    },
  } = theme;

  const colorsObj = () => ({ lines: servicesAxis, innerLines: lightGray });

  return (
    <StyledServicesAxis as="article" colors={{ background: transparent, lines: servicesAxis }}>
      <StyledWrapper>
        {services.stages.map(({ heading, shortIntroParagraph, serviceID }, index) => (
          <Link key={uuid()} href={`/uslugi#${serviceID}`}>
            <ServiceStageWrapper>
              <ServiceStage id={serviceID} color={rainbowColors[index]}>
                {/* <ServiceStage id={serviceID} desaturate={isOpen} key={uuid()} color={rainbowColors[index]} onClick={() => handleOpenServiceStage(index)}> */}
                <ServiceStageHeading>{heading}</ServiceStageHeading>
                <StyledArrow />
              </ServiceStage>
              <ServiceStageParagraph>{shortIntroParagraph}</ServiceStageParagraph>
            </ServiceStageWrapper>
          </Link>
        ))}
      </StyledWrapper>
      <Grid colors={colorsObj()} />
    </StyledServicesAxis>
  );
};

export default ServicesAxisCore;
