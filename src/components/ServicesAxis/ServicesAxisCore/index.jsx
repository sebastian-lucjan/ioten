import { v4 as uuid } from 'uuid';
import { ServiceStage, StyledServicesAxis, StyledWrapper } from 'src/components/ServicesAxis/ServicesAxis.styles';
import services from 'src/data/servicesData';
import theme, { rainbowColors } from 'src/assets/styles/theme';
import ServiceDetail from 'src/components/ServicesAxis/ServiceDetail';
import Grid from 'src/components/Grid';
import useServicePopup from 'src/hooks/useServicePopup';
import Link from 'next/link';

const ServicesAxisCore = () => {
  const { isOpen, setIsOpen, serviceIndex } = useServicePopup();

  const {
    color: { lightGray, transparent },
    gradient: {
      rainbow: { servicesAxis },
    },
  } = theme;

  const colorsObj = () => {
    if (isOpen) {
      return { lines: lightGray, innerLines: lightGray };
    }
    return { lines: servicesAxis, innerLines: lightGray };
  };

  return (
    <StyledServicesAxis as="article" desaturate={isOpen} colors={{ background: transparent, lines: servicesAxis }}>
      <StyledWrapper>
        {services.stages.map(({ heading, serviceID }, index) => (
          <Link key={uuid()} href={`/uslugi#${serviceID}`}>
            <ServiceStage id={serviceID} desaturate={isOpen} color={rainbowColors[index]}>
              {/* <ServiceStage id={serviceID} desaturate={isOpen} key={uuid()} color={rainbowColors[index]} onClick={() => handleOpenServiceStage(index)}> */}
              {heading}
            </ServiceStage>
          </Link>
        ))}
      </StyledWrapper>
      {isOpen ? <ServiceDetail index={serviceIndex} handleClose={() => setIsOpen(false)} /> : null}
      <Grid colors={colorsObj()} />
    </StyledServicesAxis>
  );
};

export default ServicesAxisCore;
