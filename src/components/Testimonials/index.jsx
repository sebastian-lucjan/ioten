import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';

const Testimonials = () => {
  const {
    color: { lightGray },
    gradient: { lightGray: lightGrayGradient },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: lightGrayGradient, lines: lightGray }} smaller>
      <div>Testimonials - placeholder</div>
    </MainSectionWrapper>
  );
};

export default Testimonials;
