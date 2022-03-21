import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 40px;
  color: ${({ theme }) => theme.color.darkestGray};
  border: 1px solid red;
`;

export const MottoParagraph = styled.p`
  font-family: 'Myriad Pro', Roboto, Arial, serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  line-height: 32px;
`;

export const MottoCaption = styled.p`
  margin-top: 3rem;
  font-family: 'Myriad Pro', Roboto, Arial, serif;
  font-weight: 800;
  font-size: ${({ theme }) => theme.font.size.smallText};
  text-align: right;
`;
