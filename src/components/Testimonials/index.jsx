import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from 'src/data/pageData';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';
import TestimonialsCaption from './Testimonials.styles';
import { Paragraph, TextWrapper } from '../TextComponents';

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
      <TextWrapper className="motto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={uuid()}>
              <Paragraph fontWeight="bold" className="motto__text">
                {testimonial.text}
              </Paragraph>
              <TestimonialsCaption className="motto__caption">
                <span className="motto__caption-line" />
                <div>{testimonial.caption}</div>
              </TestimonialsCaption>
            </div>
          ))}
        </Slider>
      </TextWrapper>
    </MainSectionWrapper>
  );
};

export default TestimonialsInterlude;

// todo: motto text should be rewritten
