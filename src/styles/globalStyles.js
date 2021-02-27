import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #cceeff;
    font-family: fantasy
  }

  header {
      display: flex;
      justify-content: center;
      padding-top: 2rem;
      font-weight: 15px;
      line-height: 25px;
  }
`;

export default GlobalStyle;
