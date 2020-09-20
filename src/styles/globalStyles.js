import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Lato';
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Lato';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
