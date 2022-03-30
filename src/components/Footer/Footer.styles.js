import styled from 'styled-components';
import mixines from 'src/assets/styles/mixines';

export const Wrapper = styled.div`
  padding: 60px 20px 0 40px;
  font-size: ${({ theme }) => theme.font.size.smallText};
  color: ${({ theme }) => theme.color.darkerGray};

  ${({ theme }) => theme.mq.tablet} {
    padding: 60px 20px 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    & > div {
      padding: 0 20px;
    }

    .footer__contact {
      grid-area: 1 / 2 / 3 / 3;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    & > div {
      padding: 0 20px;
    }

    .footer__contact {
      grid-area: 1 / 4 / 3 / 5;
    }

    .footer__social-media {
      grid-area: 2 / 3 / 3 / 4;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
  align-items: flex-start;

  p {
    font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 30px;
  }
`;

export const FooterHeading = styled.h4`
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
`;

export const FooterItem = styled.p`
  display: block;
  color: ${({ theme }) => theme.color.darkerGray};
  line-height: 32px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  font-weight: 500;
`;

export const FooterSoonItem = styled.p`
  position: relative;
  color: ${({ theme }) => theme.color.gray};
  line-height: 32px;

  &::after {
    ${mixines.soonLabel};

    right: -40px;
  }
`;
