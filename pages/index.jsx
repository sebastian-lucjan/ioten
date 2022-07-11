import MainPageContext from 'src/context/mainPageContext';
import BaseLayout from 'src/components/BaseLayout';
import MainPage from 'src/components/MainPage';
import MottoInterlude from 'src/components/MottoInterlude';
import ServicesAxis from 'src/components/ServicesAxis';
import BlogShort from 'src/components/BlogShort';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Testimonials from 'src/components/Testimonials';
import theme from 'src/assets/styles/theme';
import { NextSeo } from 'next-seo';
import { useEffect, useRef, useState } from 'react';
import useOnDarkScreen from 'src/hooks/useOnDarkScreen';
import { mainPage } from 'src/data/mainPage';
import { getHighlightedPosts } from 'src/services/blog/getPosts';
import Script from 'next/script';

export async function getServerSideProps() {
  const highlightedPosts = await getHighlightedPosts();
  return { props: { highlightedPosts } };
}

export default function Home({ highlightedPosts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataBooster, setDataBooster] = useState('initial-state');

  const ref = useRef(null);
  const onDarkScreen = useOnDarkScreen(ref, '-36px');

  useEffect(() => {
    return () => {
      setCurrentPage(0); // reset to initial state
      setDataBooster('initial-state');
    };
  }, []);

  const { title, description, canonical, ogData } = mainPage;

  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3060690,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {` 
          window.dataLayer = window.dataLayer || []; 
          function gtag(){window.dataLayer.push(arguments);} 
          gtag('js', new Date()); 

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'); 
        `}
      </Script>

      <MainPageContext.Provider value={{ pageIndex: currentPage, setCurrentPage, dataBooster, setDataBooster, highlightedPosts }}>
        <BaseLayout whiteNavigationText={onDarkScreen} footerGridColor={theme.gradient.yellowToGray}>
          <MainPage setRef={ref} />
          <MottoInterlude />
          <ServicesAxis />
          <Testimonials />
          <BlogShort />
          <IdeaInterlude />
        </BaseLayout>
      </MainPageContext.Provider>
    </>
  );
}
