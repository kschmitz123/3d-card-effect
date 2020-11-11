import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    box-sizing:border-box;
    margin: 0;
    padding:0;
}

body {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }`;
export default GlobalStyle;
