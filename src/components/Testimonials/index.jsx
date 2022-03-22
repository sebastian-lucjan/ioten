import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from 'src/data/pageData';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';
import { TestimonialsCaption, TestimonialsParagraph, Wrapper } from './Testimonials.styles';

const TestimonialsInterlude = () => {
  const {
    color: { lightGray },
    gradient: { lightGray: lightGrayGradient },
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
    <MainSectionWrapper colors={{ background: lightGrayGradient, lines: lightGray }} smaller>
      <Wrapper className="motto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={uuid()}>
              <TestimonialsParagraph className="motto__text">{testimonial.text}</TestimonialsParagraph>
              <TestimonialsCaption className="motto__caption">
                <span />
                <div>{testimonial.caption}</div>
              </TestimonialsCaption>
            </div>
          ))}
        </Slider>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default TestimonialsInterlude;

// todo: motto text should be rewritten
