import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import ServicesAxisIntro from 'src/components/ServicesAxis/ServicesAxisIntro';
import ServicesAxisCore from 'src/components/ServicesAxis/ServicesAxisCore';
import ServicesAxisEnd from 'src/components/ServicesAxis/ServicesAxisEnd';

const ServicesAxis = () => {
  const {
    gradient: { lightGrayAxisSection },
  } = theme;

  console.log('lightGrayAxisSection->', lightGrayAxisSection);

  return (
    // <MainSectionWrapper as="section" background={lightGrayAxisSection}>
    <MainSectionWrapper as="section" background="white">
      <ServicesAxisIntro />
      <ServicesAxisCore />
      <ServicesAxisEnd />
    </MainSectionWrapper>
  );
};

export default ServicesAxis;
