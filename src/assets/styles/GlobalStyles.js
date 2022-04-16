import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
    font-family: ${({ theme }) => `${theme.font.family.myriadPro.regular},Roboto, Arial, sans-serif , serif`};
    
    ///* width */
    //::-webkit-scrollbar {
    //  width: 20px;
    //}
    //
    ///* Track */
    //::-webkit-scrollbar-track {
    //  box-shadow: inset 0 0 5px grey;
    //  border-radius: 10px;
    //}
    //
    ///* Handle */
    //::-webkit-scrollbar-thumb {
    //  background: red;
    //  border-radius: 10px;
    //}
  }
  
  a {
    text-decoration: none;
  }
  
  //h1,h2,h3,h4,h5,h6, button {
  //font-size: inherit;
  //  font-size: 10px;
  //}
`;

export default GlobalStyle;
