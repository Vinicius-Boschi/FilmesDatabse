import { createGlobalStyle } from "styled-components"

export const CSSReset = createGlobalStyle`

  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #E0E0E0;
  }

  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
  }
`