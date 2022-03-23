import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 40px;
  color: ${({ theme }) => theme.color.darkestGray};
`;

export const Paragraph = styled.p`
  font-family: ${({ theme, fontWeight }) => {
    switch (fontWeight) {
      case 'light':
        return theme.font.family.myriadPro.light;
      case 'bold':
        return theme.font.family.myriadPro.bold;
      case 'black':
        return theme.font.family.myriadPro.black;
      default:
        return theme.font.family.myriadPro.regular;
    }
  }};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  line-height: 32px;
`;

export const Caption = styled.p``;
