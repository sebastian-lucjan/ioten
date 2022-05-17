import { ThemeProvider } from 'styled-components';
import theme from 'src/assets/styles/theme';
import GlobalStyle from 'src/assets/styles/GlobalStyles';
import Head from 'next/head';
import { StrictMode, useEffect } from 'react';
import 'src/assets/styles/normalize.css';
import 'src/assets/fonts/style.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
        <link rel="manifest" href="icons/site.webmanifest" />
        <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>ioten</title>
      </Head>
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StrictMode>
    </>
  );
}
