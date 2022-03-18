import BaseLayout from 'src/components/BaseLayout';
import HeadSection from 'src/components/HeadSection';
import MainPage from 'src/components/MainPage';
import Footer from 'src/components/Footer';
import MottoInterlude from 'src/components/MottoInterlude';
import ServicesAxis from 'src/components/ServicesAxis';
import BlogShort from 'src/components/BlogShort';
import IdeaInterlude from 'src/components/IdeaInterlude';

export default function Home() {
  return (
    <>
      <HeadSection />
      <BaseLayout>
        <p>test</p>
        <MainPage />
        <MottoInterlude />
        <ServicesAxis />
        <BlogShort />
        <IdeaInterlude />
        <Footer />
      </BaseLayout>
    </>
  );
}
