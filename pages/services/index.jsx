import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import servicesData from 'src/data/servicesData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import ServicesIntro from 'src/components/ServicesIntro';
// import ServicesForm from 'src/components/ServicesForm';
import ServicesBenefit from 'src/components/ServicesBenefit';
import ServicesTypes from '../../src/components/ServiceTypes';
import ServicesStages from '../../src/components/ServiceStages';
// import ServicesStages from 'src/components/ServiceStages';
// import ServicesTypes from 'src/components/ServiceTypes';

const Services = () => {
  const {
    headSection: { title, description },
  } = servicesData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <ServicesIntro />
        <ServicesBenefit />
        <ServicesTypes />
        <IdeaInterlude />
        <ServicesStages />
        {/* <ServicesForm /> */}
      </BaseLayout>
    </>
  );
};

export default Services;
