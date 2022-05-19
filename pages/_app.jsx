import { ThemeProvider } from 'styled-components';
import theme from 'src/assets/styles/theme';
import GlobalStyle from 'src/assets/styles/GlobalStyles';
import { StrictMode, useEffect } from 'react';
import 'src/assets/styles/normalize.css';
import 'src/assets/fonts/style.css';
import { useRouter } from 'next/router';
import HeadMeta from 'src/components/HeadMeta';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag !== undefined) {
        console.log('gtag', url);
        window.gtag('config', process.env.GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <HeadMeta />
      <DefaultSeo {...SEO} />

      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StrictMode>
    </>
  );
}
