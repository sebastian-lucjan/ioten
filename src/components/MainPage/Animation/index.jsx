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

  #phone,
  #phone-background {
    cursor: pointer;
  }
`;

const Animation = () => {
  const image = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const { current: el } = image;

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
    const msgOneInfoPersonBgc = el.getElementById('info-person__background');
    const msgOneInfoPersonAvatar = el.getElementById('avatar');
    const msgOneInfoPersonLines = el.querySelectorAll('#texts > g');
    const msgOneInfoText = el.getElementById('info-03');
    const msgOneInfoTrolley = el.getElementById('info-trolley');

    // const messagesSecondGroup = el.getElementById('messages-second-group');

    const msgSecInfo = el.getElementById('info-message');
    const msgSecInfoDots = el.querySelectorAll('#info-message #dots > path');
    const msgSecEnvelope = el.getElementById('envelope');
    const msgMegaphone = el.getElementById('megaphone');
    const msgMegaphoneVoice = el.getElementById('megaphone-voice');
    const phoneIcon = el.getElementById('phone');
    const phoneBackground = el.getElementById('phone-background');
    const phoneBackBorder = el.getElementById('phone-back-decor');
    const iconHeart = el.getElementById('heart');
    const iconHeartBackground = el.getElementById('heart-background');

    const paperPlane = el.getElementById('paper-plane');
    const smallDevices = el.getElementById('devices');
    const smallDevicesLines = el.getElementById('devices-lines');
    tl.current = gsap.timeline();

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
        msgOneInfoPersonBgc,
        msgOneInfoPersonAvatar,
        msgOneInfoPersonLines,
        msgOneInfoText,
        msgOneInfoTrolley,
        msgSecInfo,
        msgSecInfoDots,
        msgSecEnvelope,
        msgMegaphone,
        msgMegaphoneVoice,
        phoneIcon,
        phoneBackground,
        phoneBackBorder,
        iconHeart,
        iconHeartBackground,
        paperPlane,
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
    tl.current.set([womanWithSurroundings], { scale: 2.2 });
    tl.current.to([woman, palette, shape, whirl, ground, plant], {
      autoAlpha: 1,
      stagger: 0.35,
      ease: 'power3.inOut',
    });
    tl.current.to(womanWithSurroundings, { scale: 1, duration: 1, ease: 'power3.inOut' });
    tl.current.to([mainMobileBody, hamburger, buttonSkip, dotsNav], { autoAlpha: 1, duration: 1, ease: 'power3.inOut' });
    tl.current.to([headingLetters, paragraph], { autoAlpha: 1, stagger: 0.15 });
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
        msgOneInfoPersonBgc,
        msgOneInfoPersonAvatar,
        msgOneInfoPersonLines,
        msgOneInfoText,
        msgOneInfoTrolley,
        msgSecInfo,
        msgSecEnvelope,
        msgSecInfoDots,
        msgMegaphone,
        msgMegaphoneVoice,
        phoneIcon,
        phoneBackground,
        phoneBackBorder,
        iconHeart,
        iconHeartBackground,
        paperPlane,
        smallDevices,
        smallDevicesLines,
      ],
      {
        x: 5,
        y: 5,
        duration: 1,
      },
    );
    tl.current.set(paperPlane, { x: 360, y: -40, rotate: -40 });
    tl.current.set(smallDevices, { x: -20 });
    tl.current.set([phoneIcon, phoneBackground, phoneBackBorder], { x: -30 });

    tl.current.to([roof, roofShadow], { autoAlpha: 1, stagger: 0.5, ease: 'power3.inOut' });
    tl.current.to([msgOneInfoPersonBgc, msgOneInfoPersonAvatar], { autoAlpha: 1 });
    tl.current.to(msgOneInfoPersonLines, { autoAlpha: 1, stagger: -0.2 });
    tl.current.to(msgOneInfoText, { autoAlpha: 1, duration: 0.5, x: -30 });
    tl.current.to(msgOneInfoTrolley, { autoAlpha: 1, duration: 0.5, x: 50 });
    tl.current.to(msgSecEnvelope, { autoAlpha: 1, duration: 0.5, y: -10 });
    tl.current.to(msgSecInfo, { autoAlpha: 1, duration: 0.5 });
    tl.current.to(msgSecInfoDots, { autoAlpha: 1, stagger: -0.4, repeat: 5, duration: 0.5, delay: 0, x: -0.5, y: -0.5 });
    tl.current.to(msgMegaphone, { autoAlpha: 1, delay: -7, duration: 0.5, y: -5 });
    tl.current.to(msgMegaphoneVoice, { autoAlpha: 1, delay: -6.5, duration: 0.5 });
    tl.current.to(paperPlane, { autoAlpha: 1, duration: 1.5, x: -20, y: 20, delay: -6, rotate: 0 });
    tl.current.to([phoneIcon, phoneBackground, phoneBackBorder], { autoAlpha: 1, duration: 0.5, x: 0, delay: -5.3 });
    tl.current.to([phoneIcon, phoneBackground], { x: '-=5', y: '-=5', duration: 1, delay: -4.5 });
    tl.current.to([iconHeart, iconHeartBackground], { autoAlpha: 1, duration: 0.5, delay: -4.0 });
    tl.current.to(msgMegaphoneVoice, { repeat: 5, duration: 1, scale: 1.1, x: -1, ease: 'elastic', delay: -3.5 });

    tl.current.to(smallDevices, { autoAlpha: 1, duration: 0.5, x: 10, delay: -5 });
    tl.current.to(smallDevicesLines, { autoAlpha: 1, duration: 0.5, delay: -3.5 });

    console.log('RENDER');

    return () => {
      // [phoneIcon, phoneBackground].forEach((el) =>
      //   el.removeEventListener('click', () => {
      //     console.log('remove');
      //   }),
      // );
      tl.current.kill();
    };
  }, []);

  return (
    <Wrapper>
      <HomeAnimationSVG setRef={image} />
    </Wrapper>
  );
};

export default Animation;
