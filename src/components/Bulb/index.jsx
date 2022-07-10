import styled from 'styled-components';
import Image from 'next/image';
import bulbLight from 'src/assets/images/bulb-light.png';
import bulbDark from 'src/assets/images/bulb-dark.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

export default function Bulb() {
  const bulbsWrapperRef = useRef(null);
  const tlDarkBulb = useRef(null);
  const tlLightY = useRef(null);

  useEffect(() => {
    const { current: el } = bulbsWrapperRef;

    const bulbDarkEl = el.querySelector('.bulb-dark');
    const bulbLightEl = el.querySelector('.bulb-light');

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': function () {
        tlDarkBulb.current = gsap.timeline({
          scrollTrigger: {
            trigger: bulbDarkEl,
            start: 'center 85%',
            end: 'center 35%',
            // markers: true,
            scrub: 0.4,
          },
        });

        tlDarkBulb.current.to(bulbDarkEl, { opacity: 0 });

        tlLightY.current = gsap.timeline({
          scrollTrigger: {
            trigger: bulbLightEl,
            start: 'center 85%',
            end: 'center 35%',
            // markers: true,
            scrub: 0.4,
          },
        });

        tlLightY.current.to([el], { scale: 1.1 });
      },
    });

    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': function () {
        tlDarkBulb.current = gsap.timeline({
          scrollTrigger: {
            trigger: bulbDarkEl,
            start: 'center 92%',
            end: 'center 45%',
            // markers: true,
            scrub: 0.4,
          },
        });

        tlDarkBulb.current.to(bulbDarkEl, { opacity: 0 });

        tlLightY.current = gsap.timeline({
          scrollTrigger: {
            trigger: bulbLightEl,
            start: 'center 92%',
            end: 'center 45%',
            // markers: true,
            scrub: 0.4,
          },
        });

        tlLightY.current.to([el], { scale: 1.1, y: -200 });
      },
    });

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
