import styled from 'styled-components';
import mixines from 'src/assets/styles/mixines';

const StyledFooterContacts = styled.article`
  margin: 2rem 0 0 0;

  p {
    cursor: ${({ soon }) => (soon ? 'unset' : 'pointer')};
    color: ${({ theme }) => theme.color.darkerGray}; //todo: check if telephone number has turned from blue to black on safari
  }

  .footer__contact-label,
  .footer__contact-email,
  .footer__contact-mobile {
    position: relative;
    color: ${({ theme }) => theme.color.darkerGray};
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
