import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 40px;
  font-size: ${({ theme }) => theme.font.size.smallText};
  color: ${({ theme }) => theme.color.darkerGray};
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;

  p {
    font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  }
`;

export const FooterHeading = styled.h4`
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.semibold};
`;

export const FooterItem = styled.p`
  color: ${({ theme }) => theme.color.darkerGray};
  line-height: 32px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  font-weight: 500;
`;

export const FooterSoonItem = styled.p`
  position: relative;
  color: ${({ theme }) => theme.color.gray};
  line-height: 32px;
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  font-weight: 500;
  width: 130px;

  &::after {
    line-height: 16px;
    position: absolute;
    display: block;
    content: 'SOON';
    top: 2px;
    right: 0;
    width: 36px;
    height: 14px;
    text-align: center;
    font-weight: 800;
    background-color: ${({ theme }) => theme.color.lightGray};
    border-radius: 3px;
    color: white;
    font-size: ${({ theme }) => theme.font.size.xsText};
  }
`;
