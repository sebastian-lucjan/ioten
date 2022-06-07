import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from 'src/data/pageData';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';
import styled from 'styled-components';
import IRingFront from 'src/assets/images/i-ring-front-lg.svg';
import IRingBack from 'src/assets/images/i-ring-back-lg.svg';
import ORingFront from 'src/assets/images/o-ring-front-md.svg';
import ORingBack from 'src/assets/images/o-ring-back-md.svg';
import Grid from 'src/components/Grid';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TestimonialsCaption, TestimonialsParagraph, TestimonialsWrapper } from './Testimonials.styles';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const StyledMediumIRing = styled.div`
  & * {
    position: absolute;
    top: 20%;
    right: 0.4rem;
  }
  *:nth-child(1) {
    z-index: ${({ theme: { zIndex } }) => zIndex.top};
  }
`;

const StyledMediumORing = styled.div`
  & * {
    position: absolute;
    bottom: 20%;
    left: 0.8rem;
  }
  *:nth-child(1) {
    z-index: ${({ theme: { zIndex } }) => zIndex.top};
  }
`;

const TestimonialsInterlude = () => {
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
    tlRingOne.current.to([ringOneFront, ringOneBack], { y: 250 });

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
    tlRingTwo.current.to([ringTwoFront, ringTwoBack], { y: -150 });
    return () => {
      tlRingOne.current.kill();
      tlRingTwo.current.kill();
    };
  }, []);

  return (
    <MainSectionWrapper background={theme.color.white} smaller>
      <TestimonialsWrapper noAlign className="motto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={uuid()} data-aos="fade-up">
              <TestimonialsParagraph weight="bold" className="motto__text">
                {testimonial.text}
              </TestimonialsParagraph>
              <TestimonialsCaption className="motto__caption">
                <span className="motto__caption-line" />
                <div>{testimonial.caption}</div>
              </TestimonialsCaption>
            </div>
          ))}
        </Slider>
      </TestimonialsWrapper>

      <Grid />

      <StyledMediumIRing ref={ringOne}>
        <IRingFront />
        <IRingBack />
      </StyledMediumIRing>

      <StyledMediumORing ref={ringTwo}>
        <ORingFront />
        <ORingBack />
      </StyledMediumORing>
    </MainSectionWrapper>
  );
};

export default TestimonialsInterlude;
