import styled from 'styled-components';

const IdeaButton = styled.button`
  position: relative;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.darkestGray};
  border: none;

  line-height: 100%;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: 22px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.color.white};
`;

export default IdeaButton;
