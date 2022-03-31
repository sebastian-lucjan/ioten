import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import aboutData from 'src/data/aboutData';

const About = () => {
  const {
    headSection: { title, description },
  } = aboutData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout>
        <section>About</section>
      </BaseLayout>
    </>
  );
};

export default About;
