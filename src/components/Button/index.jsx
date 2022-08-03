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
  transition: 0.2s;
  box-shadow: ${({ backgroundColor }) =>
    backgroundColor
      ? `4px 4px 0 ${backgroundColor.slice(0, -1)}, .4)`
      : `4px 4px hsla(0, 0%, 0%, 0.4)`}; //box-shadow with button color and some opacity
  cursor: pointer;

  &:active {
    box-shadow: 0 0 0 ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor.slice(0, -1)}, .5)` : 'hsla(0, 0%, 0%, 0.5)')};
    transform: translate(4px, 4px);
  }

  &:hover {
    background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.color.white};
    filter: ${({ backgroundColor }) => (backgroundColor ? 'brightness(90%)' : 'brightness(100%)')};
    color: ${({ theme, backgroundColor }) => (backgroundColor ? theme.color.black : theme.color.black)};
  }

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
