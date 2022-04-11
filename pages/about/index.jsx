import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import aboutData from 'src/data/aboutData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';

const About = () => {
  const {
    headSection: { title, description },
  } = aboutData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <section>About</section>
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
};

export default About;
