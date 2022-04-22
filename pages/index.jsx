import BaseLayout from 'src/components/BaseLayout';
import MainPage from 'src/components/MainPage';
// import MottoInterlude from 'src/components/MottoInterlude';
// import ServicesAxis from 'src/components/ServicesAxis';
// import BlogShort from 'src/components/BlogShort';
// import IdeaInterlude from 'src/components/IdeaInterlude';
// import Testimonials from 'src/components/Testimonials';
import { pageData } from 'src/data/pageData';
import theme from 'src/assets/styles/theme';
import { NextSeo } from 'next-seo';

export default function Home() {
  const {
    headSection: { title, description, canonical },
  } = pageData;

  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} />
      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <MainPage />
        {/* <MottoInterlude /> */}
        {/* <ServicesAxis /> */}
        {/* <Testimonials /> */}
        {/* <BlogShort /> */}
        {/* <IdeaInterlude /> */}
      </BaseLayout>
    </>
  );
}

// todo: customize scrollbar -> not supported by firefox and IE (usage from 76% to 90%)

// todo: check if canonical is necessary for all pages or only for main page
