import styled from 'styled-components';
import StyledButton from '../ContactMainView/ContactButton/StyledButton';

export const BenefitButton = styled(StyledButton)`
  box-shadow: ${({ backgroundColor }) =>
    backgroundColor
      ? `4px 4px 0 ${backgroundColor.slice(0, -1)}, .4)`
      : `4px 4px hsla(0, 0%, 0%, 0.4)`}; //box-shadow with button color and some opacity
  cursor: pointer;

  &:active {
    box-shadow: ${({ theme, backgroundColor }) =>
      backgroundColor ? `0px 0px 0 ${theme.color.blueLight}` : `0px 0px hsla(0, 0%, 0%, 0.4)`} !important; //box-shadow with button
    transform: translate(4px, 4px);
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
    box-shadow: ${({ theme, backgroundColor }) =>
      backgroundColor ? `4px 4px 0 ${theme.color.blueLight}` : `4px 4px hsla(0, 0%, 0%, 0.4)`}; //box-shadow with button color and some opacity
    color: white;
  }
  ${({ theme }) => theme.mq.tablet} {
    width: calc(50vw - 60px);
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: calc(25vw - 60px);
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;
