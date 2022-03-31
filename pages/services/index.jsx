import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import servicesData from 'src/data/servicesData';

const Services = () => {
  const {
    headSection: { title, description },
  } = servicesData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout>
        <section>Services</section>
      </BaseLayout>
    </>
  );
};

export default Services;
