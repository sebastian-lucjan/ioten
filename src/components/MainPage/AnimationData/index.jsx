import { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import MainPageContext from 'src/context/mainPageContext';
import DataChartSVG from './DataChartSVG';
import { Wrapper } from './AnimationData.styles';

const movementLvls = {
  sm: -20,
  md: -50,
  lg: -100,
  xl: -200,
};

export default function AnimationData() {
  const { dataBooster } = useContext(MainPageContext);
  const image = useRef(null);
  const tl = useRef(null);

  const { sm, md, lg, xl } = movementLvls;

  useEffect(() => {
    const { current: el } = image;

    const boxMoveSM1 = el.getElementById('xxl-box-air-5-2');
    const boxMoveSM3 = el.getElementById('xl-box-ground-1-4');
    const boxMoveSM2 = el.getElementById('xl-box-air-6-3');
    const boxMoveSM4 = el.getElementById('lg-box-air-3-2');
    const boxMoveSM5 = el.getElementById('lg-box-ground-1-6');
    const boxesMoveSM = [boxMoveSM1, boxMoveSM2, boxMoveSM3, boxMoveSM4, boxMoveSM5];

    const boxMoveMD1 = el.getElementById('lg-box-air-1-4');
    const boxMoveMD2 = el.getElementById('xxl-box-ground-1-3');
    const boxMoveMD3 = el.getElementById('lg-box-air-2-4');
    const boxMoveMD4 = el.getElementById('lg-box-air-1-2');
    const boxMoveMD5 = el.getElementById('xxl-box-ground-6-1');
    const boxesMoveMD = [boxMoveMD1, boxMoveMD2, boxMoveMD3, boxMoveMD4, boxMoveMD5];

    const boxMoveLG1 = el.getElementById('xxl-box-air-1-2');
    const boxMoveLG2 = el.getElementById('lg-box-air-3-5');
    const boxMoveLG3 = el.getElementById('xl-box-air-2-2');
    const boxMoveLG4 = el.getElementById('lg-box-air-2-6');
    const boxesMoveLG = [boxMoveLG1, boxMoveLG2, boxMoveLG3, boxMoveLG4];

    const boxMoveXL1 = el.getElementById('lg-box-air-6-2');
    const boxMoveXL2 = el.getElementById('xl-box-air-6-4');
    const boxMoveXL3 = el.getElementById('xl-box-air-1-4');
    const boxesMoveXL = [boxMoveXL1, boxMoveXL2, boxMoveXL3];

    tl.current = gsap.timeline({ paused: false });

    if (dataBooster === 'boost-chart') {
      tl.current.resume();
      tl.current.to(boxesMoveSM, {
        duration: 1,
        y: sm,
        ease: 'power3.out',
      });
      tl.current.to(boxesMoveMD, {
        duration: 1,
        delay: -1,
        y: md,
        ease: 'power2.out',
      });
      tl.current.to(boxesMoveLG, {
        duration: 1,
        delay: -1,
        y: lg,
        ease: 'power1.out',
      });
      tl.current.to(boxesMoveXL, {
        duration: 1,
        delay: -1,
        y: xl,
        ease: 'power1.out',
      });
    } else if (dataBooster === 'boost-chart-reverse') {
      tl.current.to(boxesMoveSM, {
        duration: 1,
        y: 0,
        ease: 'power2.out',
      });
      tl.current.to(boxesMoveMD, {
        duration: 1,
        delay: -1,
        y: 0,
        ease: 'power2.out',
      });
      tl.current.to(boxesMoveLG, {
        duration: 1,
        delay: -1,
        y: 0,
        ease: 'power2.out',
      });
      tl.current.to(boxesMoveXL, {
        duration: 1,
        delay: -1,
        y: 0,
        ease: 'power2.out',
      });
    }

    return () => {
      tl.current.kill();
    };
  }, [dataBooster]);

  return (
    <Wrapper>
      <DataChartSVG setRef={image} />
    </Wrapper>
  );
}
