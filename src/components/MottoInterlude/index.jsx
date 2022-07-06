import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { motto } from 'src/data/pageData';
import IRingFront from 'src/assets/images/i-ring-front-lg.svg';
import IRingBack from 'src/assets/images/i-ring-back-lg.svg';
import ORingFront from 'src/assets/images/o-ring-front-md.svg';
import ORingBack from 'src/assets/images/o-ring-back-md.svg';
import styled from 'styled-components';
import gsap from 'gsap';
import Grid from 'src/components/Grid';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MottoCaption, MottoParagraph, MottoWrapper } from './MottoInterlude.styles';

gsap.registerPlugin(ScrollTrigger);

const StyledRingOne = styled.div`
  & * {
    position: absolute;
    top: 80%;
    right: 0.4rem;
  }
`;

const StyledRingTwo = styled.div`
  & * {
    position: absolute;
    top: 40%;
    left: 0.8rem;
  }
`;

const MottoInterlude = () => {
  const ringOne = useRef(null);
  const ringTwo = useRef(null);

  const tlRingOne = useRef(null);
  const tlRingTwo = useRef(null);

  useEffect(() => {
    // ringOne IRIng - left site
    const { current: el } = ringOne;
    const [ringOneFront, ringOneBack] = el.querySelectorAll('svg');

    tlRingOne.current = gsap.timeline({
      scrollTrigger: {
        trigger: ringOne.current,
        start: 'top bottom',
        scrub: 1,
      },
    });

    tlRingOne.current.set([ringOneFront], { zIndex: 3 });
    tlRingOne.current.to([ringOneFront, ringOneBack], { y: -250 });
    // ringTwo ORIng - right site
    const { current: elTwo } = ringTwo;
    const [ringTwoFront, ringTwoBack] = elTwo.querySelectorAll('svg');

    tlRingTwo.current = gsap.timeline({
      scrollTrigger: {
        trigger: ringOne.current,
        start: 'top bottom',
        scrub: 1,
      },
    });

    tlRingTwo.current.set([ringTwoFront], { zIndex: 3 });
    tlRingTwo.current.to([ringTwoFront, ringTwoBack], { y: 150 });
    return () => {
      tlRingOne.current.kill();
      tlRingTwo.current.kill();
    };
  }, []);

  return (
    <MainSectionWrapper background={theme.color.white} smaller>
      <MottoWrapper>
        {/* <MottoWrapper data-aos="fade-up"> */}
        <MottoParagraph weight="bold" className="motto__text">
          {motto.text}
        </MottoParagraph>
        <MottoCaption className="motto__caption">{motto.caption}</MottoCaption>
      </MottoWrapper>

      <Grid />

      <StyledRingOne ref={ringOne}>
        <IRingFront />
        <IRingBack />
      </StyledRingOne>

      <StyledRingTwo ref={ringTwo}>
        <ORingFront />
        <ORingBack />
      </StyledRingTwo>
    </MainSectionWrapper>
  );
};

export default MottoInterlude;
