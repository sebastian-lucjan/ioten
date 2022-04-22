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
    border: 1px solid yellowgreen;
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

    const womanWithSurroundings = el.getElementById('creative-woman');
    // const woman = el.getElementById('woman-body');
    // const plant = el.getElementById('plant');
    // const ground = el.getElementById('ground');
    // const pallete = el.getElementById('pallete');
    // const shape = el.getElementById('shape');
    // const whirl = el.getElementById('whirl');

    const mainMobile = el.getElementById('main-mobile');
    const mainMobileShadow = el.getElementById('main-mobile-shadow');
    // const heading = el.getElementById('heading');
    // const paragraph = el.getElementById('paragraph');

    const shopRoof = el.getElementById('shop-roof');
    // const roof = el.getElementById('roof');
    // const roofShadow = el.getElementById('roof-shadow');
    // const roofStickLeft = el.getElementById('roof-stick-left');
    // const roofStickRight = el.getElementById('roof-stick-right');

    // temporrary
    const messagesFirstGroup = el.getElementById('messages-first-group');
    const messagesSecondGroup = el.getElementById('messages-second-group');
    const messagesThirdGroup = el.getElementById('messages-third-group');
    const paperPlane = el.getElementById('paper-plane');
    const smallDevices = el.getElementById('devices');
    const smallDevicesLines = el.getElementById('devices-lines');

    tl.current = gsap.timeline();
    tl.current.set(
      [
        womanWithSurroundings,
        mainMobileShadow,
        shopRoof,
        messagesFirstGroup,
        messagesSecondGroup,
        paperPlane,
        messagesThirdGroup,
        smallDevices,
        smallDevicesLines,
      ],
      {
        autoAlpha: 0,
      },
    );
    tl.current.set([mainMobile], { autoAlpha: 0.2 }); // todo: remove after testing
  }, []);

  return (
    <Wrapper>
      <HomeAnimationSVG setRef={image} />
    </Wrapper>
  );
};

export default Animation;
