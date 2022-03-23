import styled from 'styled-components';
import mixines from '../../assets/styles/mixines';

export const Wrapper = styled.div`
  padding: 60px 40px 0 40px;
  font-size: ${({ theme }) => theme.font.size.smallText};
  color: ${({ theme }) => theme.color.darkerGray};
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
