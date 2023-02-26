import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    margin-right: 0px;
    margin-left: 0px;
    background-color: #000;
    color: #fff;
  }
  
  a {
    text-decoration: none;
  }

  body {
    margin:0 auto;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
