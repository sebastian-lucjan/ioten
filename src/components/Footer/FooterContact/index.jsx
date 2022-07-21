import { footerData } from 'src/data/pageData';
import Link from 'next/link';
import styled from 'styled-components';
import StyledFooterContacts from './FooterContact';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContact = () => {
  const { cooperation, other, job } = footerData.contact;

  return (
    <Wrapper>
      <StyledFooterContacts>
        <h4 className="footer__contact-label">{footerData.contact.cooperation.heading}</h4>

        <Link href={`mailto:${cooperation.email}`}>
          <p className="footer__contact-email">{cooperation.email}</p>
        </Link>
        <Link href={`tel:${cooperation.mobile}`}>
          <p className="footer__contact-mobile">
            tel.: +48 508 03 <span>1010</span>
          </p>
        </Link>
      </StyledFooterContacts>

      <StyledFooterContacts>
        <h4 className="footer__contact-label">{footerData.contact.other.heading}</h4>

        <Link href={`mailto:${other.email}`}>
          <p className="footer__contact-email">{other.email}</p>
        </Link>
        <Link href={`tel:${other.mobile}`}>
          <p className="footer__contact-mobile">tel.: {other.mobile}</p>
        </Link>
      </StyledFooterContacts>

      <StyledFooterContacts soon>
        <h4 className="footer__contact-label inactive">{footerData.contact.job.heading}</h4>
        {/* <Link href={`mailto:${job.email}`}> */}
        <p className="footer__contact-email inactive">{job.email}</p>
        {/* </Link> */}
      </StyledFooterContacts>
    </Wrapper>
  );
};

export default FooterContact;
