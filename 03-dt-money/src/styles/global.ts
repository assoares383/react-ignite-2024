import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]}
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
  }

  body, input, textarea, button {
    font-family: 'Roboto', monospace;
    font-size: 1rem;
    font-weight: 400;
  }
`;
