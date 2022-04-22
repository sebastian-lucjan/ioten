import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import HomeAnimationSVG from 'src/assets/images/home-animation-business-yellow';

const Wrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  height: 50vh;
  transform: scale(0.9);
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.tablet} {
    transform: scale(0.9);
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: 0;
    transform: scale(1);
    height: 60vh;
    top: unset;
    position: unset;
  }

  svg {
    //border: 1px solid yellowgreen;
    display: block;
    width: 600px;
    margin: 0 auto;
  }
`;

const Animation = () => {
  const image = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    console.log('image', image);
    const { current: el } = image;

    // const scene = el.getElementById('home-animation-business');

    const womanWithSurroundings = el.getElementById('creative-woman');
    const woman = el.getElementById('woman-body');
    const ground = el.getElementById('ground');
    const plant = el.getElementById('plant');
    const palette = el.getElementById('palette');
    const shape = el.getElementById('shape');
    const whirl = el.getElementById('whirl');

    // const mainMobile = el.getElementById('main-mobile');
    const mainMobileBody = el.getElementById('mobile-body');
    const hamburger = el.getElementById('hamburger');
    const buttonSkip = el.getElementById('button-skip');
    const dotsNav = el.getElementById('dots-nav');
    const headingLetters = el.querySelectorAll('#heading path');
    const paragraph = el.getElementById('paragraph');
    const mainMobileShadow = el.getElementById('main-mobile-shadow');

    // const shopRoof = el.getElementById('shop-roof');
    const roof = el.getElementById('roof');
    const roofShadow = el.getElementById('roof-shadow');

    // temporrary
    const messagesFirstGroup = el.getElementById('messages-first-group');
    const messagesSecondGroup = el.getElementById('messages-second-group');
    const messagesThirdGroup = el.getElementById('messages-third-group');
    const paperPlane = el.getElementById('paper-plane');
    const smallDevices = el.getElementById('devices');
    const smallDevicesLines = el.getElementById('devices-lines');
    tl.current = gsap.timeline();

    // tl.current.set(scene, { x: 20 });

    // tl.current.set(mainMobileShadow, { x: -20, y: -20 });

    tl.current.set(
      [
        woman,
        ground,
        plant,
        palette,
        shape,
        whirl,
        mainMobileBody,
        headingLetters,
        paragraph,
        hamburger,
        buttonSkip,
        dotsNav,
        roof,
        roofShadow,
        messagesFirstGroup,
        messagesSecondGroup,
        paperPlane,
        messagesThirdGroup,
        smallDevices,
        smallDevicesLines,
        mainMobileShadow,
      ],
      {
        autoAlpha: 0,
        x: 20,
        y: 20,
      },
    );
    // // tl.current.set([woman, plant, palette, shape, whirl, ground, mainMobileBody, hamburger, buttonSkip, dotsNav, headingLetters, paragraph], {
    // //   x: 20,
    // //   y: 20,
    // // });
    tl.current.set([womanWithSurroundings], { scale: 2.2 });
    tl.current.to([woman, ground, plant, palette, shape, whirl], {
      autoAlpha: 1,
      stagger: 0.35,
      ease: 'power3.inOut',
    });
    tl.current.to(womanWithSurroundings, { scale: 1, duration: 1, ease: 'power3.inOut' });
    tl.current.to([mainMobileBody, hamburger, buttonSkip, dotsNav], { autoAlpha: 1, duration: 1, ease: 'power3.inOut' });
    // tl.current.set(womanWithSurroundings, { x: -20, y: -20 });
    tl.current.to(mainMobileShadow, { autoAlpha: 1 });
    tl.current.to(
      [
        woman,
        ground,
        plant,
        palette,
        shape,
        whirl,
        mainMobileBody,
        headingLetters,
        paragraph,
        hamburger,
        buttonSkip,
        dotsNav,
        roof,
        roofShadow,
        messagesFirstGroup,
        messagesSecondGroup,
        paperPlane,
        messagesThirdGroup,
        smallDevices,
        smallDevicesLines,
      ],
      {
        x: 5,
        y: 5,
        duration: 1,
        // ease: 'power3.inOut',
      },
    );
    tl.current.to([headingLetters, paragraph], { autoAlpha: 1, stagger: 0.15 });
    // tl.current.to([woman, plant, palette, shape, whirl, ground, mainMobileBody, hamburger, buttonSkip, dotsNav, headingLetters, paragraph], {
    //   x: 0,
    //   y: 0,
    //   duration: 1,
    // });
    // tl.current.to([roof, roofShadow], { autoAlpha: 1, stagger: 0.7, ease: 'power3.inOut' });
  }, []);

  return (
    <Wrapper>
      <HomeAnimationSVG setRef={image} />
    </Wrapper>
  );
};

export default Animation;
