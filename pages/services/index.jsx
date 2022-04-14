import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import servicesData from 'src/data/servicesData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import ServicesIntro from 'src/components/ServicesIntro';
import ServicesBenefit from 'src/components/ServicesBenefit';
import ServicesTypes from 'src/components/ServiceTypes';
import ServicesStages from 'src/components/ServiceStages';
import ServicesFormSection from 'src/components/ServicesFormSection';
import styled from 'styled-components';

const Wrapper = styled.section``;

const Services = () => {
  const {
    headSection: { title, description },
  } = servicesData;

  return (
    <Wrapper>
      <HeadSection title={title} description={description} />
      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <ServicesIntro />
        <ServicesBenefit />
        <ServicesTypes />
        <IdeaInterlude />
        <ServicesStages />
        <ServicesFormSection />
      </BaseLayout>
    </Wrapper>
  );
};

export default Services;
