import styled from 'styled-components';
import Image from 'next/image';
import wireframeCheckbox from 'src/assets/images/checkbox-square-background.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CheckboxWrapper = styled.div`
  transform: translateY(15px);
  display: flex;
  position: relative;
  justify-content: center;

  svg {
    position: absolute;
    display: block;
    top: -12px;
    width: 36px;
    height: 36px;
  }

  .wireframe-checkbox {
    width: 30px;
    height: 30px;
    z-index: -1;

    & * {
      width: 100%;
      height: 100%;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

export default function WireframeCheckbox() {
  const checkboxWrapperRef = useRef(null);
  const tlCheckSignPath = useRef(null);

  useEffect(() => {
    const { current: el } = checkboxWrapperRef;

    const emptyCheckbox = el.querySelector('.wireframe-checkbox');
    const checkSign = el.querySelector('#checkbox-selected');

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': function () {
        tlCheckSignPath.current = gsap.timeline({
          scrollTrigger: {
            trigger: emptyCheckbox,
            start: 'center 85%',
            end: 'center 40%',
            // markers: true,
            scrub: 0.4,
          },
        });

        tlCheckSignPath.current.fromTo(checkSign, { autoAlpha: 0 }, { autoAlpha: 1 });
      },
    });

    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': function () {
        tlCheckSignPath.current = gsap.timeline({
          scrollTrigger: {
            trigger: emptyCheckbox,
            start: 'center 90%',
            end: 'center 65%',
            // markers: true,
            scrub: 0.4,
          },
        });
        tlCheckSignPath.current.to([el], { y: -100 });

        tlCheckSignPath.current.fromTo(checkSign, { autoAlpha: 0 }, { autoAlpha: 1 });
      },
    });

    return () => {
      tlCheckSignPath.current?.kill();
    };
  }, []);
  return (
    <CheckboxWrapper ref={checkboxWrapperRef}>
      <svg viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="checkbox-selected"
          d="M1.50023 24.4991C2.77792 24.7342 8.65554 28.8632 10.6124 31.6534C12.5693 34.4435 12.4367 34.552 13.6803 35.7301C14.9238 36.9082 16.565 37.7607 18.1556 36.4587C20.1439 34.8312 20.0572 30.384 23.847 21.369C25.2545 18.0208 26 15 42 2.00002"
          stroke="hsl(119,35%,50%)"
          strokeWidth="7"
        />
      </svg>
      <div className="wireframe-checkbox">
        <Image z src={wireframeCheckbox} layout="fill" objectFit="contain" alt="żarówka zgaszona" />
      </div>
    </CheckboxWrapper>
  );
}
