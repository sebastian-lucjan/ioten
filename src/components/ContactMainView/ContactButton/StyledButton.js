import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  display: block;
  height: 60px;
  width: calc(100vw - 80px);
  margin: 0 auto;
  background: ${({ theme, backgroundColor }) => backgroundColor || theme.color.darkestGray};

  line-height: 100%;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  color: ${({ theme, textColor }) => textColor || theme.color.white};
  box-shadow: 4px 4px 0 hsl(0, 0%, 100%, 0.5);
  border: none;
  transition: 0.2s;
  cursor: pointer;

  &:active {
    box-shadow: 4px 4px 0 hsl(0, 0%, 100%, 0.5);
    transform: translate(4px, 4px);
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    width: unset;
    margin: 0;
    padding: 1.4rem 4rem;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;

export default StyledButton;
