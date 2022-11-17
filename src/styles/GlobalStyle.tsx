import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset};
  @font-face {
    font-family: 'GangwonEduPowerExtraBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  
  body {
    width: 100%;
    height: 100%;
    font-family: GangwonEduPowerExtraBoldA, sans-serif;
  }
  
  
  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }
  
`;

export default GlobalStyle;
