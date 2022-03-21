import { footerData } from 'src/data/pageData';
import Link from 'next/link';
import styled from 'styled-components';

const StyledFooterContacts = styled.article`
  margin: 2rem 0;

  .footer__contact-label,
  .footer__contact-email,
  .footer__contact-mobile {
    position: relative;

    line-height: 3rem;
  }

  .footer__contact-label,
  .footer__contact-mobile {
    font-size: ${({ theme }) => theme.font.size.smallText};
    font-weight: 400;
  }
  .footer__contact-email {
    font-family: ${({ theme }) => theme.font.family.myriadPro.semibold};
    font-weight: 800;
  }
  .inactive {
    color: ${({ theme }) => theme.color.gray};
  }
  .footer__contact-email.inactive {
    color: ${({ theme }) => theme.color.lightGray};
    &::after {
      line-height: 16px;
      position: absolute;
      display: block;
      content: 'SOON';
      top: 2px;
      right: -20px;
      width: 36px;
      height: 14px;
      text-align: center;
      font-weight: 800;
      background-color: ${({ theme }) => theme.color.lightGray};
      border-radius: 3px;
      color: white;
      font-size: ${({ theme }) => theme.font.size.xsText};
    }
  }
`;

const FooterContact = () => {
  const { cooperation, other, job } = footerData.contact;

  return (
    <div>
      <StyledFooterContacts>
        <h5 className="footer__contact-label">{footerData.contact.cooperation.heading}</h5>

        <Link href={`mailto:${cooperation.email}`}>
          <p className="footer__contact-email">{cooperation.email}</p>
        </Link>
        <Link href={`tel:${cooperation.mobile}`}>
          <p className="footer__contact-mobile">{cooperation.mobile}</p>
        </Link>
      </StyledFooterContacts>

      <StyledFooterContacts>
        <h5 className="footer__contact-label">{footerData.contact.other.heading}</h5>

        <Link href={`mailto:${other.email}`}>
          <p className="footer__contact-email">{other.email}</p>
        </Link>
        <Link href={`tel:${other.mobile}`}>
          <p className="footer__contact-mobile">{other.mobile}</p>
        </Link>
      </StyledFooterContacts>

      <StyledFooterContacts>
        <h5 className="footer__contact-label inactive">{footerData.contact.job.heading}</h5>

        <Link href={`mailto:${job.email}`}>
          <p className="footer__contact-email inactive">{job.email}</p>
        </Link>
      </StyledFooterContacts>
    </div>
  );
};

export default FooterContact;
