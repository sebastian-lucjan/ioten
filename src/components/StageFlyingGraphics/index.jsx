import styled from 'styled-components';
import Image from 'next/image';
import bulbLight from 'src/assets/images/bulb-light.png';
import bulbDark from 'src/assets/images/bulb-dark.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ConceptWireframing from '../StageGraphics/ConceptWireframing';
import Design from '../StageGraphics/Design';
import Development from '../StageGraphics/Development';
import OptimizationSupport from '../StageGraphics/OptimizationSupport';

const FlyingGraphics = styled.div`
  position: absolute;
  top: -10%;
  left: calc(100% - 6px);
  width: 50px;
  height: 50px;
  z-index: ${({ theme }) => theme.zIndex.peak};
`;

const BulbsWrapper = styled.div`
  .bulb-dark {
    width: 50px;
    height: 50px;
    & * {
      width: 100%;
      height: 100%;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

function Bulb() {
  const bulbsWrapperRef = useRef(null);
  const tlDarkBulb = useRef(null);
  const tlLightY = useRef(null);
  // const tlScaleBulbs = useRef(null);

  useEffect(() => {
    const { current: el } = bulbsWrapperRef;

    const bulbDarkEl = el.querySelector('.bulb-dark');
    const bulbLightEl = el.querySelector('.bulb-light');

    tlDarkBulb.current = gsap.timeline({
      scrollTrigger: {
        trigger: bulbDarkEl,
        start: 'center 90%',
        end: 'center 35%',
        // markers: true,
        scrub: 1,
      },
    });

    tlDarkBulb.current.to(bulbDarkEl, { opacity: 0 });

    tlLightY.current = gsap.timeline({
      scrollTrigger: {
        trigger: bulbLightEl,
        start: 'center 90%',
        end: 'center 35%',
        // markers: true,
        scrub: 1,
      },
    });

    tlLightY.current.to([el], { scale: 1.3 });
    // tlDarkBulb.current.to(bulbLightEl, { scaleX: 2 });

    // gsap.set(bulbDarkEl, { alpha: 1 });
    // gsap.to(bulbDarkEl);
    // gsap.to([bulbLightEl, bulbDarkEl], {
    //   y: 20,
    //   scrollTrigger: {
    //     trigger: bulbLightEl,
    //     start: 'top bottom',
    //     end: 'top top',
    //     markers: true,
    //     scrub: 1,
    //   },
    // });

    // gsap.to(bulbDarkRef.current, {
    //   scrollTrigger: {
    //     trigger: bulbLightRef.current,
    //     start: 'top bottom',
    //     markers: true,
    //     scrub: 1,
    //   },
    //   x: 30,
    // });

    // tlDarkBulb.current.to(bulbDarkRef, { x: '20px' });

    return () => {
      tlDarkBulb.current?.kill();
      tlLightY.current?.kill();
    };
  }, []);

  return (
    <BulbsWrapper ref={bulbsWrapperRef}>
      {/* <div> */}
      <Image className="bulb-light" src={bulbLight} layout="fill" objectFit="contain" alt="żarówka zapalona" />
      {/* </div> */}
      <div className="bulb-dark">
        <Image z src={bulbDark} layout="fill" objectFit="contain" alt="żarówka zgaszona" />
      </div>
    </BulbsWrapper>
  );
}
export default function StageFlyingGraphics({ index }) {
  return (
    <FlyingGraphics>
      {index === 0 ? <Bulb /> : null}
      {index === 1 ? <ConceptWireframing /> : null}
      {index === 2 ? <Design /> : null}
      {index === 3 ? <Development /> : null}
      {index === 4 ? <OptimizationSupport /> : null}
    </FlyingGraphics>
  );
}
