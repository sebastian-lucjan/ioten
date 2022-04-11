import styled from 'styled-components';

const StyledButton = styled.button`
  height: 60px;
  width: 100%;

  line-height: 100%;
  border: none;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  word-spacing: 5px;

  color: ${({ theme, textColor }) => textColor || theme.color.white};
  background: ${({ theme, backgroundColor }) => backgroundColor || theme.color.darkestGray};
  box-shadow: ${({ backgroundColor }) => `4px 4px 0 ${backgroundColor.slice(0, -1)}, .5)`}; //box-shadow with button color and some opacity

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    width: calc(50% + 50px);
  } ;
`;

export default function Button({ text, backgroundColor, textColor, type = 'button' }) {
  return (
    <StyledButton backgroundColor={backgroundColor} textColor={textColor} type={type}>
      {text}
    </StyledButton>
  );
}
