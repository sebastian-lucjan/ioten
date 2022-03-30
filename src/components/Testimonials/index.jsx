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
import { TestimonialsCaption, TestimonialsParagraph, TestimonialsWrapper } from './Testimonials.styles';

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
  const {
    color: { white },
  } = theme;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MainSectionWrapper colors={{ background: white }} smaller>
      <TestimonialsWrapper noAlign className="motto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={uuid()}>
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

      <StyledMediumIRing>
        <IRingFront />
        <IRingBack />
      </StyledMediumIRing>

      <StyledMediumORing>
        <ORingFront />
        <ORingBack />
      </StyledMediumORing>
    </MainSectionWrapper>
  );
};

export default TestimonialsInterlude;
