import styled from 'styled-components';
import LumpCoreSVG from 'src/components/MainPage/AnimationDesign/LumpCoreSVG';
// import { useEffect } from 'react';
// import useCircleTranslateCords from 'src/hooks/useCircleTranslateCords';
// import { useDeviceOrientation } from 'src/hooks/useDeviceOrientation';
// import useDeviceCoordinates from '../../../hooks/useDeviceCoordinates'; // todo: doesn't work

const Wrapper = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 40vh;
  transform: scale(0.8);
  z-index: ${({ theme }) => theme.zIndex.peak};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.mediumMobile} {
    top: 10vh;
    width: 100%;
    height: 50vh;
    transform: scale(1);
  }
  
  ${({ theme }) => theme.mq.tablet} {
    top: 18vh;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: 0;
    transform: scale(0.9);
    height: 60vh;
    top: unset;
    position: unset;
  }
  
  ${({ theme }) => theme.mq.mediumDesktop} {
    transform: scale(1.1);
  }
  
  ${({ theme }) => theme.mq.bigDesktop} {
    transform: scale(1.2);
  }
  
}

  svg {
    //display: block;
    width: 240px;
    
    ${({ theme }) => theme.mq.landscape}{
      width: 160px;
      
    };
    
    ${({ theme }) => theme.mq.tablet} {
      width: 500px;
    }
    
    @media (orientation: landscape) and (min-width: 768px) and (max-width: 1023px) {
        width: 260px;
    }
    
    ${({ theme }) => theme.mq.smallDesktop} {
      width: 320px;
    }
    
    ${({ theme }) => theme.mq.desktop} {
      width: 360px;
    }    
`;

export default function AnimationDesign() {
  return (
    <Wrapper>
      <LumpCoreSVG />
    </Wrapper>
  );
}
