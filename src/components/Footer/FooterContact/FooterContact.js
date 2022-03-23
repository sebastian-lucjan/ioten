import styled from 'styled-components';
import mixines from 'src/assets/styles/mixines';

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
    font-family: ${({ theme }) => theme.font.family.myriadPro.black};
    font-weight: 800;
  }
  .inactive {
    color: ${({ theme }) => theme.color.gray};
  }
  .footer__contact-email.inactive {
    color: ${({ theme }) => theme.color.lightGray};

    &::after {
      ${mixines.soonLabel};
      font-family: ${({ theme }) => theme.font.family.myriadPro.black};

      right: -24px;
    }
  }
`;

export default StyledFooterContacts;
