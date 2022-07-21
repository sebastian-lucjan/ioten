import styled from 'styled-components';
import contactData from 'src/data/contactData';
import Link from 'next/link';

export default function ContactDetails() {
  const {
    contact: {
      cooperation: { heading: headingOffer, email: emailOffer },
      other: { heading: headingOther, email: emailOther },
    },
  } = contactData.contactContent;

  return (
    <StyledContactDetails>
      <div className="contact-details__info-item">
        <h2 className="contact-details__info-item-label">{headingOffer}</h2>
        <Link href={`mailto:${emailOffer}`}>
          <p>{emailOffer}</p>
        </Link>
        <Link href="tel:+48508031010">
          <p className="contact-details__telephone-number">
            +48 508 03 <span>1010</span>
          </p>
          {/* <p>{mobile}</p> */}
        </Link>
      </div>

      <div className="contact-details__info-item">
        <h3 className="contact-details__info-item-label">{headingOther}</h3>
        <Link href={`mailto:${emailOther}`}>
          <p>{emailOther}</p>
        </Link>
        <Link href="tel:+48602446335">
          <p className="contact-details__telephone-number">+48 602 446 335</p>
        </Link>
      </div>

      {/* <div className="contact-details__info-item"> */}
      {/*  <h3 className="contact-details__info-item-label">social media</h3> */}
      {/*  <SocialMedia black /> */}
      {/* </div> */}
    </StyledContactDetails>
  );
}

// todo: add social media when it's ready

const StyledContactDetails = styled.div`
  margin-top: 8rem;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    cursor: pointer;
    margin-bottom: 0.5rem;
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

  .contact-details__telephone-number {
    font-family: ${({ theme }) => theme.font.family.myriadPro.light};
    position: relative;

    &:hover {
      font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
      color: ${({ theme }) => theme.color.greenDark};

      span {
        font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
      }
    }

    span {
      // color: ${({ theme }) => theme.color.greenDark};
      font-family: ${({ theme }) => theme.font.family.myriadPro.regular};
    }

    // &::before {
    //   display: block;
    //   content: '';
    //   width: 100%;
    //   height: 2px;
    //   position: absolute;
    //   top: 100%;
    //   background-color: ${({ theme }) => theme.color.greenDark};
    // }
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
