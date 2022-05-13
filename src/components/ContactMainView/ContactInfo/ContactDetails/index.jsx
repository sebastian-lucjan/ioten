import styled from 'styled-components';
import contactData from 'src/data/contactData';
import Link from 'next/link';

export default function ContactDetails() {
  const {
    contact: {
      cooperation: { heading: headingOffer, email: emailOffer, mobile },
      other: { heading: headingOther, email: emailOther },
    },
  } = contactData.contactContent;

  return (
    <StyledContactDetails>
      <div className="contact-details__info-item">
        <h3 className="contact-details__info-item-label">{headingOffer}</h3>
        <Link href={`mailto:${emailOffer}`}>
          <p>{emailOffer}</p>
        </Link>
      </div>

      <div className="contact-details__info-item">
        <h3 className="contact-details__info-item-label">{headingOther}</h3>
        <Link href={`mailto:${emailOther}`}>
          <p>{emailOther}</p>
        </Link>
      </div>

      <div className="contact-details__info-item">
        <h3 className="contact-details__info-item-label">telefon</h3>
        <Link href={`tel:${mobile}`}>
          <p>+48 {mobile}</p>
        </Link>
      </div>

      {/* <div className="contact-details__info-item"> */}
      {/*  <h3 className="contact-details__info-item-label">social media</h3> */}
      {/* <SocialMedia black /> */}
      {/* </div> */}
    </StyledContactDetails>
  );
}

// todo: add social media when it's ready

const StyledContactDetails = styled.div`
  margin-top: 8rem;
  color: ${({ theme }) => theme.color.black};

  p {
    cursor: pointer;
  }

  .contact-details__info-item {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  }

  .contact-details__info-item-label {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.caption};
    font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
    font-weight: lighter;
  }

  .contact-details__header {
    margin-bottom: 3rem;
    font-size: ${({ theme }) => theme.font.size.headingMedium};
  }

  .contact-details__paragraph {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  }

  ${({ theme }) => theme.mq.tablet} {
    .contact-details__header {
      font-size: ${({ theme }) => theme.font.size.headingSection};
    }

    .contact-details__paragraph {
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 4rem;
  } ;
`;
