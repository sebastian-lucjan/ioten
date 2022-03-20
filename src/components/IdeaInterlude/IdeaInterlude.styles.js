import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 100px 40px;
  color: ${({ theme }) => theme.color.darkestGray};
`;

export const IdeaHeading = styled.h3`
  font-family: 'Myriad Pro', Roboto, Arial, serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.headingSection};
  line-height: 115%;
`;

export const IdeaParagraph = styled.p`
  font-family: 'Myriad Pro', Roboto, Arial, serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  line-height: 32px;
  /* or 178% */

  letter-spacing: -0.006em;
`;

export const IdeaButton = styled.button`
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
  letter-spacing: -0.006em;
  color: ${({ theme }) => theme.color.white};
`;
