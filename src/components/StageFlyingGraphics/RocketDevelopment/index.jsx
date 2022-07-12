import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import rocket from 'src/assets/images/rocket.png';

const RocketWrapper = styled.div`
  .rocket {
    position: absolute;
    top: 25vh;
    right: -5px;
    font-size: 60px;
    width: 60px;
    height: 100px;
    z-index: 20;
  }

  // .rocket-line-tail {
  //   position: absolute;
  //   left: 50%;
  //   top: 20px;
  //   transform: translate(-50%, 50%);
  //   width: 2px;
  //   height: 120px;
  //   background: ${({ theme }) => theme.gradient.yellowWhiteTransparent};
  //   z-index: -1;
  // }

  ${({ theme }) => theme.mq.smallDesktop} {
    display: none;
  } ;
`;

gsap.registerPlugin(ScrollTrigger);

export default function RocketDevelopment() {
  const rocketWrapperRef = useRef(null);
  const rocketMovement = useRef(null);

  useEffect(() => {
    const { current: el } = rocketWrapperRef;

    const rocketImage = el.querySelector('.rocket');

    // ScrollTrigger.matchMedia({
    //   '(max-width: 1023px)': function () {
    rocketMovement.current = gsap.timeline({
      scrollTrigger: {
        trigger: rocketImage,
        start: '20% bottom',
        end: '10% top',
        // markers: true,
        scrub: 0.4,
      },
    });

    rocketMovement.current.fromTo(rocketImage, { y: 0 }, { y: -320 });
    //   },
    // });

    // ScrollTrigger.matchMedia({
    //   '(min-width: 1024px)': function () {
    //     rocketMovement.current = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: rocketImage,
    //         start: '20% bottom',
    //         end: '10% top',
    //         markers: true,
    //         scrub: 0.4,
    //       },
    //     });
    //
    //     rocketMovement.current.fromTo(rocketImage, { y: 0 }, { y: -320 });
    //   },
    // });

    return () => {
      rocketMovement.current?.kill();
    };
  }, []);
  return (
    <RocketWrapper ref={rocketWrapperRef}>
      <div className="rocket">
        <Image z src={rocket} layout="fill" objectFit="contain" alt="lecąca do góry rakieta" />
        {/* <span className="rocket-line-tail" /> */}
      </div>
    </RocketWrapper>
  );
}
