import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import ServicesAxisIntro from 'src/components/ServicesAxis/ServicesAxisIntro';
import ServicesAxisCore from 'src/components/ServicesAxis/ServicesAxisCore';
import ServicesAxisEnd from 'src/components/ServicesAxis/ServicesAxisEnd';

const ServicesAxis = () => {
  return (
    <MainSectionWrapper as="section" background="white">
      <ServicesAxisIntro />
      <ServicesAxisCore />
      <ServicesAxisEnd />
    </MainSectionWrapper>
  );
};

export default ServicesAxis;
