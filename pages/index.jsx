import MainPageContext from 'src/context/mainPageContext';
import BaseLayout from 'src/components/BaseLayout';
import MainPage from 'src/components/MainPage';
import MottoInterlude from 'src/components/MottoInterlude';
import ServicesAxis from 'src/components/ServicesAxis';
import BlogShort from 'src/components/BlogShort';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Testimonials from 'src/components/Testimonials';
import { pageData } from 'src/data/pageData';
import theme from 'src/assets/styles/theme';
import { NextSeo } from 'next-seo';
import { useRef, useState } from 'react';
import useOnDarkScreen from 'src/hooks/useOnDarkScreen';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataBooster, setDataBooster] = useState('initial-state');
  // const [isMobile, setIsMobile] = useState(null);

  const ref = useRef(null);
  const onDarkScreen = useOnDarkScreen(ref, '-36px');

  const {
    headSection: { title, description, canonical },
  } = pageData;

  return (
    <MainPageContext.Provider value={{ pageIndex: currentPage, setCurrentPage, dataBooster, setDataBooster }}>
      <NextSeo title={title} description={description} canonical={canonical} />
      <BaseLayout whiteNavigationText={onDarkScreen} footerGridColor={theme.gradient.yellowToGray}>
        <MainPage setRef={ref} />
        <MottoInterlude />
        <ServicesAxis />
        <Testimonials />
        <BlogShort />
        <IdeaInterlude />
      </BaseLayout>
    </MainPageContext.Provider>
  );
}

// todo: customize scrollbar -> not supported by firefox and IE (usage from 76% to 90%)

// todo: check if canonical is necessary for all pages or only for main page
