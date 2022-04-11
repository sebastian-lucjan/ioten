import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import servicesData from 'src/data/servicesData';
import Service from './Service';

const StyledServicesList = styled.ul``;

export default function ServicesList() {
  return (
    <StyledServicesList>
      {servicesData.services.servicesList.map((service, index) => (
        <Service key={uuid()} serviceData={service} index={index} />
      ))}
    </StyledServicesList>
  );
}
