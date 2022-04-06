import styled from 'styled-components';
import ContactText from './ContactText';
import ContactDetails from './ContactDetails';

export default function ContactInfo() {
  return (
    <StyledContactInfo>
      <ContactText />
      <ContactDetails />
    </StyledContactInfo>
  );
}

const StyledContactInfo = styled.div`
  padding: 100px 40px;
  width: 50%;

  //background-color: yellow;
`;
