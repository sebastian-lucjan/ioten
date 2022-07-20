import styled from 'styled-components';
import { soonLabel } from 'src/assets/styles/mixines';

const StyledFooterContacts = styled.article`
  margin: 2rem 0 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    cursor: ${({ soon }) => (soon ? 'unset' : 'pointer')};
  }

  .footer__contact-label,
  .footer__contact-email,
  .footer__contact-mobile {
    color: ${({ theme }) => `${theme.color.darkestGray} !important`}; //todo: check if telephone number has turned from blue to black on safari
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

  .footer__contact-mobile {
    :hover {
      color: ${({ theme }) => theme.color.greenDark} !important;
    }
  }

  .inactive {
    color: ${({ theme }) => `${theme.color.gray} !important`};
  }

  .footer__contact-email.inactive {
    ${soonLabel};
  }
`;

export default StyledFooterContacts;
