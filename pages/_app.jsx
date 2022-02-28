import { ThemeProvider } from 'styled-components';
import theme from 'src/assets/styles/theme';
import GlobalStyle from 'src/assets/styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
