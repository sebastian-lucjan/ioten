import styled from 'styled-components';

const MottoCaption = styled.p`
  margin-top: 3rem;
  margin-left: auto;
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};
`;

export default MottoCaption;
