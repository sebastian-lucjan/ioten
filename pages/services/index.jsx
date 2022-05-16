import BaseLayout from 'src/components/BaseLayout';
import servicesData from 'src/data/servicesData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import ServicesIntro from 'src/components/ServicesIntro';
import ServicesBenefit from 'src/components/ServicesBenefit';
import ServicesTypes from 'src/components/ServiceTypes';
import ServicesStages from 'src/components/ServiceStages';
import ServicesFormSection from 'src/components/ServicesFormSection';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { useRef } from 'react';
import useScrollTop from 'src/hooks/useScrollTop';

const Wrapper = styled.section``;

const Services = () => {
  const ref = useRef(null);

  const hideScrollTop = useScrollTop(ref, '0px');

  const {
    headSection: { title, description },
  } = servicesData;

  return (
    <Wrapper>
      <NextSeo title={title} description={description} />
      <BaseLayout hideScrollTop={hideScrollTop} footerGridColor={theme.gradient.yellowToGray}>
        <ServicesIntro setRef={ref} />
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
