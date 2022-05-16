import styled from 'styled-components';
import ContactText from './ContactText';
import ContactDetails from './ContactDetails';

export default function ContactInfo({ setRef }) {
  return (
    <StyledContactInfo>
      <div className="contact-info__container">
        <ContactText setRef={setRef} />
        <ContactDetails />
      </div>
    </StyledContactInfo>
  );
}

const StyledContactInfo = styled.div`
  padding: 100px 40px;

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 0;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-info__container {
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 62vh;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    .contact-info__container {
      width: 60%;
      height: 51vh;
    }
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding-top: 20px;
    justify-content: flex-end;

    .contact-info__container {
      justify-content: center;
      padding: 0 40px;
      width: 50%;
      height: 50vh;
    }
  }
`;
