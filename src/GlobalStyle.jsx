import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    margin-right: 0px;
    margin-left: 0px;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  
  svg {
  color: ${({ theme }) => theme.orange};
  }

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
  }

  body {
    margin: 0 auto;
    color: ${({ theme }) => theme.textColor};
    font-family: 'Noto Sans KR', sans-serif;
  }

  input {
    border: 0;
    outline: 0;
  }

  button{
    border: 0;
    outline: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
