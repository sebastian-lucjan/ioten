import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => `${theme.font.family.myriadPro.regular},Roboto, Arial, sans-serif , serif`};
  }
  
  html {
    font-size: 62.5%;
  }
  
  //h1,h2,h3,h4,h5,h6, button {
  //font-size: inherit;
  //  font-size: 10px;
  //}
`;

export default GlobalStyle;
