import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #2196F3, #46C2DB);
    background-attachment: fixed;
    font-family: Arial, Helvetica, sans-serif
  }
`;

export default GlobalStyle;