import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import ServicesAxisIntro from 'src/components/ServicesAxisIntro';
import ServicesAxisCore from 'src/components/ServicesAxisCore';
import ServicesAxisEnd from 'src/components/ServicesAxisEnd';

const ServicesAxis = () => {
  const {
    gradient: { lightGrayAxisSection },
  } = theme;

  return (
    <section className="services-axis">
      <MainSectionWrapper as="article" colors={{ background: lightGrayAxisSection }}>
        <ServicesAxisIntro />
        <ServicesAxisCore />
        <ServicesAxisEnd />
      </MainSectionWrapper>
    </section>
  );
};

export default ServicesAxis;
