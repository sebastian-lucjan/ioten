import styled from 'styled-components';
import LumpCoreSVG from 'src/components/MainPage/AnimationDesign/LumpCoreSVG';
import { useEffect } from 'react';
import useCircleTranslateCords from 'src/hooks/useCircleTranslateCords';

const Wrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  height: 50vh;
  transform: scale(1);
  z-index: ${({ theme }) => theme.zIndex.peak};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    transform: scale(0.9);
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: 0;
    transform: scale(0.95);
    height: 60vh;
    top: unset;
    position: unset;
  }

  svg {
    display: block;
    width: 240px;

    ${({ theme }) => theme.mq.tablet} {
      width: 500px;
    }
    ${({ theme }) => theme.mq.smallDesktop} {
      width: 320px;
    }
    ${({ theme }) => theme.mq.desktop} {
      width: 360px;
    }    
`;

export default function AnimationDesign() {
  const { translateX, translateY } = useCircleTranslateCords();

  useEffect(() => {}, [translateY, translateY]);

  return (
    <Wrapper translateX={translateX} translateY={translateY}>
      <LumpCoreSVG />
    </Wrapper>
  );
}
