import BaseLayout from 'src/components/BaseLayout';
import HeadSection from 'src/components/HeadSection';
import MainPage from 'src/components/MainPage';
import MottoInterlude from 'src/components/MottoInterlude';
import ServicesAxis from 'src/components/ServicesAxis';
import BlogShort from 'src/components/BlogShort';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Testimonials from '../src/components/Testimonials';

export default function Home() {
  return (
    <>
      <HeadSection />
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
