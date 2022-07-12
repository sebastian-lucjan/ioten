import styled from 'styled-components';
import Image from 'next/image';
import eraser from 'src/assets/images/eraser.png';
import crayon from 'src/assets/images/crayon.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CheckboxWrapper = styled.div`
  transform: translateY(15px);
  display: flex;
  position: relative;
  justify-content: center;

  .eraser {
    position: absolute;
    left: 2px;
    top: 147px;
    width: 60px;
    height: 160px;
    z-index: 1;
  }

  .crayon {
    position: absolute;
    left: -24px;
    top: 200px;
    width: 60px;
    height: 240px;
    z-index: 1;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    .eraser {
      top: 0;
    }
    .crayon {
      top: 0;
    }
  } ;
`;

gsap.registerPlugin(ScrollTrigger);

export default function CrayonEraser() {
  const designToolsWrapperRef = useRef(null);
  const eraserMovement = useRef(null);
  const crayonMovement = useRef(null);

  useEffect(() => {
    const { current: el } = designToolsWrapperRef;

    const eraserImage = el.querySelector('.eraser');
    const crayonImage = el.querySelector('.crayon');

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': function () {
        crayonMovement.current = gsap.timeline({
          scrollTrigger: {
            trigger: crayonImage,
            start: '20% bottom',
            end: '10% top',
            // markers: true,
            scrub: 0.4,
          },
        });

        crayonMovement.current.fromTo(eraserImage, { y: 0 }, { y: -220 });

        eraserMovement.current = gsap.timeline({
          scrollTrigger: {
            trigger: eraserImage,
            start: '20% bottom',
            end: '20% top',
            // markers: true,
            scrub: 0.4,
          },
        });

        eraserMovement.current.fromTo(crayonImage, { y: 0 }, { y: -185 });
      },
    });

    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': function () {
        crayonMovement.current = gsap.timeline({
          scrollTrigger: {
            trigger: crayonImage,
            start: '20% bottom',
            end: '10% top',
            // markers: true,
            scrub: 0.4,
          },
        });

        crayonMovement.current.fromTo(eraserImage, { y: 0 }, { y: -220 });

        eraserMovement.current = gsap.timeline({
          scrollTrigger: {
            trigger: eraserImage,
            start: '20% bottom',
            end: '20% top',
            // markers: true,
            scrub: 0.4,
          },
        });

        eraserMovement.current.fromTo(crayonImage, { y: 0 }, { y: -160 });
      },
    });

    return () => {
      eraserMovement.current?.kill();
      crayonMovement.current?.kill();
    };
  }, []);
  return (
    <CheckboxWrapper ref={designToolsWrapperRef}>
      <div className="crayon">
        <Image z src={crayon} layout="fill" objectFit="contain" alt="ołówek lub kredka" />
      </div>
      <div className="eraser">
        <Image z src={eraser} layout="fill" objectFit="contain" alt="gumka do ścierania" />
      </div>
    </CheckboxWrapper>
  );
}
