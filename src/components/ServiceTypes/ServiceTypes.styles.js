import styled from 'styled-components';
import StyledButton from '../ContactMainView/ContactButton/StyledButton';

export const StyledHeadingWrapper = styled.div`
  & > * {
    margin: 2rem 0;
  }
`;

export const StyledContentWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.top};

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;

  img {
    object-position: left top;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 80px 100px;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 80px 180px;
  } ;
`;

export const ImageContainer = styled.div`
  position: sticky;
  top: 80px;
  margin: 20px 40px 0 0;
  width: 100%;
  height: 60vh;
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.tablet} {
    height: 80vh;
    width: 50%;
    padding-right: 20px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding-right: 80px;
  } ;
`;

export const ServicesButton = styled(StyledButton)`
  color: ${({ theme, textColor }) => textColor || theme.color.white};
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
