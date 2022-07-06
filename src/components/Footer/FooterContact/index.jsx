import { footerData } from 'src/data/pageData';
import Link from 'next/link';
import StyledFooterContacts from './FooterContact';

const FooterContact = () => {
  const { cooperation, other, job } = footerData.contact;

  return (
    <div>
      <StyledFooterContacts>
        <h4 className="footer__contact-label">{footerData.contact.cooperation.heading}</h4>

        <Link href={`mailto:${cooperation.email}`}>
          <p className="footer__contact-email">{cooperation.email}</p>
        </Link>
        <Link href={`tel:${cooperation.mobile}`}>
          <p className="footer__contact-mobile">{cooperation.mobile}</p>
        </Link>
      </StyledFooterContacts>

      <StyledFooterContacts>
        <h4 className="footer__contact-label">{footerData.contact.other.heading}</h4>

        <Link href={`mailto:${other.email}`}>
          <p className="footer__contact-email">{other.email}</p>
        </Link>
        <Link href={`tel:${other.mobile}`}>
          <p className="footer__contact-mobile">{other.mobile}</p>
        </Link>
      </StyledFooterContacts>

      <StyledFooterContacts soon>
        <h4 className="footer__contact-label inactive">{footerData.contact.job.heading}</h4>
        {/* <Link href={`mailto:${job.email}`}> */}
        <p className="footer__contact-email inactive">{job.email}</p>
        {/* </Link> */}
      </StyledFooterContacts>
    </div>
  );
};

export default FooterContact;
