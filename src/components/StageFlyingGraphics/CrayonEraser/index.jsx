import styled from 'styled-components';
import Image from 'next/image';
import eraserCrayon from 'src/assets/images/eraser-crayon.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CheckboxWrapper = styled.div`
  transform: translateY(15px);
  display: flex;
  position: relative;
  justify-content: center;

  .eraser-crayon {
    position: absolute;
    left: -22px;
    top: 147px;
    width: 80px;
    height: 260px;
    z-index: 1;
    display: block;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    .eraser-crayon {
      top: -40px;
    }
  } ;
`;

gsap.registerPlugin(ScrollTrigger);

export default function CrayonEraser() {
  const designToolsWrapperRef = useRef(null);
  const eraserCrayonMovement = useRef(null);

  useEffect(() => {
    const { current: el } = designToolsWrapperRef;

    const eraserCrayonImage = el.querySelector('.eraser-crayon');

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': function () {
        eraserCrayonMovement.current = gsap.timeline({
          scrollTrigger: {
            trigger: eraserCrayonImage,
            start: '20% bottom',
            end: '10% top',
            // markers: true,
            scrub: 0.2,
          },
        });

        eraserCrayonMovement.current.fromTo(eraserCrayonImage, { y: 0 }, { y: -220 });
      },
    });

    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': function () {
        eraserCrayonMovement.current = gsap.timeline({
          scrollTrigger: {
            trigger: eraserCrayonImage,
            start: '20% bottom',
            end: '10% top',
            // markers: true,
            scrub: 0.2,
          },
        });

        eraserCrayonMovement.current.fromTo(eraserCrayonImage, { y: 0 }, { y: -220 });
      },
    });

    return () => {
      eraserCrayonImage.current?.kill();
    };
  }, []);
  return (
    <CheckboxWrapper ref={designToolsWrapperRef}>
      <div className="eraser-crayon">
        <Image z src={eraserCrayon} layout="fill" objectFit="contain" alt="gumka do ścierania i kredka" />
      </div>
    </CheckboxWrapper>
  );
}
