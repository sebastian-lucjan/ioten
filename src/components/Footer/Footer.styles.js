import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 40px;
  font-size: ${({ theme }) => theme.font.size.smallText};
`;

export const FooterIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
