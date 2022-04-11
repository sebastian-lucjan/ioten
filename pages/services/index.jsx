import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import servicesData from 'src/data/servicesData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';

const Services = () => {
  const {
    headSection: { title, description },
  } = servicesData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <section>Services</section>
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
};

export default Services;
