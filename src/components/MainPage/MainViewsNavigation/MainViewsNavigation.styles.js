import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';

const StyledMainViewsNavigation = styled(TextWrapper)`
  position: absolute;
  top: 80vh;
  width: 100%;
  height: 15vh;
  z-index: ${({ theme }) => theme.zIndex.peak};

  flex-direction: row;
  align-items: center;
  padding: 0 5px;

  ${({ theme }) => theme.mq.mediumMobile} {
    top: 78vh;
  }

  @media (orientation: portrait) and (min-width: 360px) and (max-height: 640px) {
    top: 78vh;
  }

  ${({ theme }) => theme.mq.landscape} {
    top: 86vh;
  }

  ${({ theme }) => theme.mq.tablet} {
    top: 85vh;
  } ;
`;

export default StyledMainViewsNavigation;
