import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';

const ServicesAxis = () => {
  const {
    color: { white, lightGray },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white, lines: lightGray }}>
      <div>Services axis - placeholder</div>
    </MainSectionWrapper>
  );
};

export default ServicesAxis;
