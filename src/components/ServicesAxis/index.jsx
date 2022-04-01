import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import ServicesAxisIntro from 'src/components/ServicesAxis/ServicesAxisIntro';
import ServicesAxisCore from 'src/components/ServicesAxis/ServicesAxisCore';
import ServicesAxisEnd from 'src/components/ServicesAxis/ServicesAxisEnd';

const ServicesAxis = () => {
  const {
    gradient: { lightGrayAxisSection },
  } = theme;

  return (
    <MainSectionWrapper as="section" colors={{ background: lightGrayAxisSection }}>
      <ServicesAxisIntro />
      <ServicesAxisCore />
      <ServicesAxisEnd />
    </MainSectionWrapper>
  );
};

export default ServicesAxis;
