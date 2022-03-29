import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';

export const Wrapper = styled(TextWrapper)`
  padding: 0 40px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 0;
    margin: 0 auto;
    width: 70%;
  }
`;

export const StyledMainViewsInfo = styled.div`
  position: absolute;
  top: 70vh;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.mq.desktop} {
    position: unset;
    top: unset;
    display: flex;
    align-items: center;
    height: 60vh;
  } ;
`;

export const AnimationPlaceholder = styled.div`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  height: 50vh;
  background-color: #ff5659;

  ${({ theme }) => theme.mq.desktop} {
    height: 60vh;
    top: unset;
    position: unset;
  } ;
`;
