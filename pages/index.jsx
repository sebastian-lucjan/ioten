import BaseLayout from 'src/components/BaseLayout';
import HeadSection from 'src/components/HeadSection';
import MainPage from 'src/components/MainPage';
import MottoInterlude from 'src/components/MottoInterlude';
import ServicesAxis from 'src/components/ServicesAxis';
import BlogShort from 'src/components/BlogShort';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Testimonials from 'src/components/Testimonials';
import { pageData } from 'src/data/pageData';

export default function Home() {
  const {
    headSection: { title, description },
  } = pageData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout>
        <MainPage />
        <MottoInterlude />
        <ServicesAxis />
        <Testimonials />
        <BlogShort />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
}

// todo: customize scrollbar -> not supported by firefox and IE (usage from 76% to 90%)
